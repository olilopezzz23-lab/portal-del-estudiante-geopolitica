/**
 * WORLD CHAOS - Interactive 3D Holographic Globe
 * Renderizado matemático sobre HTML5 Canvas (sin Three.js ni librerías pesadas)
 */

class HologramGlobe {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.width = this.canvas.width = this.canvas.offsetWidth || 560;
    this.height = this.canvas.height = this.canvas.offsetHeight || 560;
    this.radius = Math.min(this.width, this.height) * 0.42;

    // Rotación
    this.rotY = 0.8; // Longitud inicial
    this.rotX = 0.25; // Latitud inicial
    this.autoSpeed = 0.005;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // Chokepoints estratégicos
    this.chokepoints = [
      { id: 'suez', name: 'Canal de Suez', lat: 30.5, lon: 32.3, status: 'Alerta Alta', risk: '88%', flow: '12% Comercio Global', color: '#ff6b00' },
      { id: 'panama', name: 'Canal de Panamá', lat: 9.1, lon: -79.7, status: 'Restricción Hídrica', risk: '65%', flow: '5% Flete Mundial', color: '#00f0ff' },
      { id: 'ormuz', name: 'Estrecho de Ormuz', lat: 26.6, lon: 56.5, status: 'Tensión Máxima', risk: '94%', flow: '20% Petróleo Crudo', color: '#ff3b30' },
      { id: 'malaca', name: 'Estrecho de Malaca', lat: 2.5, lon: 101.5, status: 'Saturado', risk: '76%', flow: '80% Crudo a China', color: '#ff6b00' },
      { id: 'bab', name: 'Bab el-Mandeb', lat: 12.6, lon: 43.3, status: 'Zona de Conflicto', risk: '92%', flow: '30% Contenedores UE', color: '#ff3b30' },
      { id: 'taiwan', name: 'Estrecho de Taiwán', lat: 24.5, lon: 119.5, status: 'Vigilancia Militar', risk: '89%', flow: '90% Chips Avanzados', color: '#00f0ff' },
      { id: 'chancay', name: 'Megapuerto Chancay', lat: -11.6, lon: -77.3, status: 'Operativo / Nuevo Hub', risk: '35%', flow: 'Ruta Directa Asia-América', color: '#10b981' }
    ];

    // Rutas de transporte marítimo conectando nodos (pares de índices)
    this.routes = [
      [0, 4], // Suez -> Bab el-Mandeb
      [4, 2], // Bab el-Mandeb -> Ormuz
      [2, 3], // Ormuz -> Malaca
      [3, 5], // Malaca -> Taiwán
      [1, 6], // Panamá -> Chancay
      [6, 3], // Chancay -> Malaca (Transpacífico)
    ];

    this.activePoint = null;
    this.sweepAngle = 0;
    this.vessels = [
      { routeIdx: 0, progress: 0.2, speed: 0.003 },
      { routeIdx: 1, progress: 0.6, speed: 0.004 },
      { routeIdx: 2, progress: 0.8, speed: 0.0025 },
      { routeIdx: 3, progress: 0.4, speed: 0.0035 },
      { routeIdx: 4, progress: 0.1, speed: 0.003 },
      { routeIdx: 5, progress: 0.5, speed: 0.002 }
    ];

    this.bindEvents();
    this.resize();
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.radius = Math.min(this.width, this.height) * 0.40;
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());

    // Arrastre con ratón
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.lastMouseX;
      const dy = e.clientY - this.lastMouseY;
      this.rotY += dx * 0.008;
      this.rotX = Math.max(-1.2, Math.min(1.2, this.rotX + dy * 0.008));
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch móvil
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.lastMouseX = e.touches[0].clientX;
        this.lastMouseY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - this.lastMouseX;
      const dy = e.touches[0].clientY - this.lastMouseY;
      this.rotY += dx * 0.008;
      this.rotX = Math.max(-1.2, Math.min(1.2, this.rotX + dy * 0.008));
      this.lastMouseX = e.touches[0].clientX;
      this.lastMouseY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // Clic sobre nodo para abrir SITREP
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      let found = null;
      for (const cp of this.chokepoints) {
        if (!cp.screen) continue;
        const dist = Math.hypot(clickX - cp.screen.x, clickY - cp.screen.y);
        if (dist < 18 && cp.screen.visible) {
          found = cp;
          break;
        }
      }

      if (found) {
        if (window.soundEngine) window.soundEngine.playSonar();
        this.showChokepointSitrep(found);
      }
    });
  }

  showChokepointSitrep(cp) {
    const sitrepBox = document.getElementById('globe-sitrep');
    if (!sitrepBox) return;

    document.getElementById('sitrep-name').innerText = cp.name.toUpperCase();
    document.getElementById('sitrep-status').innerText = cp.status;
    document.getElementById('sitrep-risk').innerText = cp.risk;
    document.getElementById('sitrep-flow').innerText = cp.flow;

    sitrepBox.classList.remove('hidden');
    sitrepBox.style.animation = 'none';
    sitrepBox.offsetHeight; // trigger reflow
    sitrepBox.style.animation = 'glitchIn 0.3s ease-out';
  }

  // Conversión Lat/Lon a coordenadas cartesianas 3D proyectadas
  project(lat, lon) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180) + this.rotY;

    // Esfera base
    let x = -(this.radius * Math.sin(phi) * Math.cos(theta));
    let z = this.radius * Math.sin(phi) * Math.sin(theta);
    let y = this.radius * Math.cos(phi);

    // Rotación sobre eje X (latitud)
    const cosX = Math.cos(this.rotX);
    const sinX = Math.sin(this.rotX);
    const yRot = y * cosX - z * sinX;
    const zRot = y * sinX + z * cosX;

    const cx = this.width / 2;
    const cy = this.height / 2;

    return {
      x: cx + x,
      y: cy - yRot,
      z: zRot,
      visible: zRot > -10
    };
  }

  drawGrid() {
    const ctx = this.ctx;
    const cx = this.width / 2;
    const cy = this.height / 2;

    // Resplandor exterior (Atmósfera holográfica)
    const glow = ctx.createRadialGradient(cx, cy, this.radius * 0.75, cx, cy, this.radius * 1.25);
    glow.addColorStop(0, 'rgba(0, 240, 255, 0.04)');
    glow.addColorStop(0.85, 'rgba(0, 240, 255, 0.12)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, this.radius * 1.25, 0, Math.PI * 2);
    ctx.fill();

    // Borde exterior con cuadrante táctico
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
    ctx.stroke();

    // Paralelos (Latitudes)
    const lats = [-60, -30, 0, 30, 60];
    ctx.lineWidth = 1;
    for (const lat of lats) {
      ctx.beginPath();
      let first = true;
      for (let lon = -180; lon <= 180; lon += 6) {
        const p = this.project(lat, lon);
        if (p.visible) {
          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        } else {
          first = true;
        }
      }
      ctx.strokeStyle = lat === 0 ? 'rgba(255, 107, 0, 0.35)' : 'rgba(0, 240, 255, 0.12)';
      ctx.stroke();
    }

    // Meridianos (Longitudes)
    const lons = [0, 45, 90, 135, 180, 225, 270, 315];
    for (const lon of lons) {
      ctx.beginPath();
      let first = true;
      for (let lat = -90; lat <= 90; lat += 4) {
        const p = this.project(lat, lon);
        if (p.visible) {
          if (first) {
            ctx.moveTo(p.x, p.y);
            first = false;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        } else {
          first = true;
        }
      }
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
      ctx.stroke();
    }
  }

  drawRoutes() {
    const ctx = this.ctx;

    for (const [i1, i2] of this.routes) {
      const p1 = this.project(this.chokepoints[i1].lat, this.chokepoints[i1].lon);
      const p2 = this.project(this.chokepoints[i2].lat, this.chokepoints[i2].lon);

      if (p1.visible || p2.visible) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = 'rgba(255, 107, 0, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    // Dibujar buques en tránsito
    for (const v of this.vessels) {
      v.progress = (v.progress + v.speed) % 1;
      const [i1, i2] = this.routes[v.routeIdx];
      const p1 = this.project(this.chokepoints[i1].lat, this.chokepoints[i1].lon);
      const p2 = this.project(this.chokepoints[i2].lat, this.chokepoints[i2].lon);

      if (p1.visible && p2.visible) {
        const vx = p1.x + (p2.x - p1.x) * v.progress;
        const vy = p1.y + (p2.y - p1.y) * v.progress;

        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(vx, vy, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
  }

  drawChokepoints() {
    const ctx = this.ctx;
    const time = Date.now() * 0.003;

    for (const cp of this.chokepoints) {
      const p = this.project(cp.lat, cp.lon);
      cp.screen = p;

      if (!p.visible) continue;

      const pulse = Math.sin(time + cp.lat) * 2 + 5;

      // Anillo de pulso
      ctx.strokeStyle = cp.color;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, pulse + 3, 0, Math.PI * 2);
      ctx.stroke();

      // Centro
      ctx.fillStyle = cp.color;
      ctx.shadowColor = cp.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Etiqueta táctica flotante
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.fillText(cp.name, p.x + 8, p.y - 4);
    }
  }

  drawRadarSweep() {
    const ctx = this.ctx;
    const cx = this.width / 2;
    const cy = this.height / 2;

    this.sweepAngle = (this.sweepAngle + 0.02) % (Math.PI * 2);

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, this.radius, 0, Math.PI * 2);
    ctx.clip();

    const sweepGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, this.radius);
    sweepGradient.addColorStop(0, 'rgba(0, 240, 255, 0.02)');
    sweepGradient.addColorStop(1, 'rgba(0, 240, 255, 0.15)');

    ctx.fillStyle = sweepGradient;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, this.radius, this.sweepAngle, this.sweepAngle + 0.4);
    ctx.closePath();
    ctx.fill();

    // Línea de barrido
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(
      cx + Math.cos(this.sweepAngle + 0.4) * this.radius,
      cy + Math.sin(this.sweepAngle + 0.4) * this.radius
    );
    ctx.stroke();

    ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    if (!this.isDragging) {
      this.rotY += this.autoSpeed;
    }

    this.drawGrid();
    this.drawRoutes();
    this.drawChokepoints();
    this.drawRadarSweep();

    requestAnimationFrame(() => this.animate());
  }
}

window.HologramGlobe = HologramGlobe;
