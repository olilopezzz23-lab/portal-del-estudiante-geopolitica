/**
 * WORLD CHAOS - Motor de Combate GEOBATTLE
 * Enfrentamiento visual y estadístico entre potencias mundiales en 9 categorías.
 */

class GeoBattleEngine {
  constructor() {
    this.countryA = null;
    this.countryB = null;
    this.scoreA = 0;
    this.scoreB = 0;
    this.activeRound = 0;
    this.isFighting = false;

    this.categories = [
      { key: 'pib', label: 'PIB NOMINAL', unit: '$ Billones', icon: '💰' },
      { key: 'poblacion', label: 'POBLACIÓN', unit: 'Millones', icon: '👥' },
      { key: 'exportaciones', label: 'EXPORTACIONES', unit: '$B / año', icon: '🚢' },
      { key: 'importaciones', label: 'IMPORTACIONES', unit: '$B / año', icon: '📥' },
      { key: 'produccion_industrial', label: 'PRODUCCIÓN INDUSTRIAL', unit: '$B (VAB)', icon: '🏭' },
      { key: 'energia', label: 'CAPACIDAD ENERGÉTICA', unit: 'Exajulios', icon: '⚡' },
      { key: 'comercio_total', label: 'COMERCIO TOTAL', unit: '$B volumen', icon: '🌐' },
      { key: 'transporte_maritimo', label: 'TRANSPORTE MARÍTIMO', unit: 'M TEUs', icon: '⚓' },
      { key: 'recursos_naturales', label: 'RECURSOS NATURALES', unit: 'Índice Estratégico', icon: '⛏️' }
    ];

    this.dom = {};
  }

  init() {
    this.cacheDom();
    this.bindEvents();
    this.renderFighterGrid();
  }

  cacheDom() {
    this.dom.screen = document.getElementById('geobattle-screen');
    this.dom.homeScreen = document.querySelector('main');
    this.dom.selectScreen = document.getElementById('battle-select-screen');
    this.dom.arenaScreen = document.getElementById('battle-arena-screen');
    this.dom.victoryScreen = document.getElementById('battle-victory-screen');

    // Selección
    this.dom.slotA = document.getElementById('battle-slot-a');
    this.dom.slotB = document.getElementById('battle-slot-b');
    this.dom.fightersGrid = document.getElementById('battle-fighters-grid');
    this.dom.btnStartFight = document.getElementById('battle-btn-start');
    this.dom.btnRandomMatch = document.getElementById('battle-btn-random');

    // Arena de combate
    this.dom.arenaCardA = document.getElementById('arena-card-a');
    this.dom.arenaCardB = document.getElementById('arena-card-b');
    this.dom.scoreA = document.getElementById('arena-score-a');
    this.dom.scoreB = document.getElementById('arena-score-b');
    this.dom.roundsContainer = document.getElementById('arena-rounds-container');
    this.dom.btnResolveAll = document.getElementById('arena-btn-resolve-all');

    // Pantalla de Victoria
    this.dom.victoryWinnerText = document.getElementById('victory-winner-text');
    this.dom.victoryScore = document.getElementById('victory-score');
    this.dom.victoryTacticalAnalysis = document.getElementById('victory-tactical-analysis');
    this.dom.victoryBreakdownBody = document.getElementById('victory-breakdown-body');
  }

  bindEvents() {
    // Abrir GEOBATTLE desde la página de inicio
    const launchBtn = document.querySelector('[data-mode="geobattle"]');
    if (launchBtn) {
      launchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openBattle();
      });
    }

    // Botón Iniciar Combate
    if (this.dom.btnStartFight) {
      this.dom.btnStartFight.addEventListener('click', () => {
        if (!this.countryA || !this.countryB) {
          alert('Por favor selecciona dos países contendientes para iniciar la batalla.');
          return;
        }
        if (this.countryA.id === this.countryB.id) {
          alert('Selecciona dos países distintos para el enfrentamiento.');
          return;
        }
        this.startArenaClash();
      });
    }

    // Botón Enfrentamiento Aleatorio
    if (this.dom.btnRandomMatch) {
      this.dom.btnRandomMatch.addEventListener('click', () => {
        this.pickRandomMatch();
      });
    }

    // Botones de salida y revancha
    const btnExitBattle = document.getElementById('battle-btn-exit');
    if (btnExitBattle) {
      btnExitBattle.addEventListener('click', () => this.exitToHome());
    }

    const btnArenaExit = document.getElementById('arena-btn-exit');
    if (btnArenaExit) {
      btnArenaExit.addEventListener('click', () => this.returnToSelection());
    }

    const btnRematch = document.getElementById('victory-btn-rematch');
    if (btnRematch) {
      btnRematch.addEventListener('click', () => this.startArenaClash());
    }

    const btnNewFighters = document.getElementById('victory-btn-new-fighters');
    if (btnNewFighters) {
      btnNewFighters.addEventListener('click', () => this.returnToSelection());
    }

    const btnVictoryExit = document.getElementById('victory-btn-exit');
    if (btnVictoryExit) {
      btnVictoryExit.addEventListener('click', () => this.exitToHome());
    }
  }

  openBattle() {
    this.dom.homeScreen.classList.add('hidden');
    this.dom.screen.classList.remove('hidden');
    this.returnToSelection();

    // Seleccionar por defecto USA vs CHINA (el choque más icónico)
    if (!this.countryA || !this.countryB) {
      this.selectCountry(window.GEOBATTLE_COUNTRIES.find(c => c.id === 'usa'), 'A');
      this.selectCountry(window.GEOBATTLE_COUNTRIES.find(c => c.id === 'china'), 'B');
    }

    if (window.soundEngine) window.soundEngine.playSonar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderFighterGrid() {
    if (!this.dom.fightersGrid) return;
    this.dom.fightersGrid.innerHTML = '';

    window.GEOBATTLE_COUNTRIES.forEach((c) => {
      const card = document.createElement('button');
      card.className = `fighter-select-card p-3 rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-800 hover:border-cyan-400/80 transition text-left flex items-center justify-between group`;
      card.setAttribute('data-id', c.id);

      card.innerHTML = `
        <div class="flex items-center gap-2.5">
          <span class="text-2xl">${c.bandera}</span>
          <div>
            <div class="text-xs font-bold text-white group-hover:text-cyan-300">${c.nombre}</div>
            <div class="text-[10px] font-mono text-slate-500">${c.bloque}</div>
          </div>
        </div>
        <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
          <span class="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">1</span>
          <span class="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-orange-950 text-orange-400 border border-orange-800">2</span>
        </div>
      `;

      card.addEventListener('click', () => {
        // Asignar alternativamente a Slot A o Slot B
        if (!this.countryA || (this.countryA && this.countryB)) {
          this.selectCountry(c, 'A');
        } else {
          this.selectCountry(c, 'B');
        }
      });

      this.dom.fightersGrid.appendChild(card);
    });
  }

  selectCountry(country, slot) {
    if (slot === 'A') {
      this.countryA = country;
      this.dom.slotA.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-4xl">${country.bandera}</span>
          <div>
            <span class="text-[10px] font-mono font-bold text-cyan-400 tracking-wider">CONTENDIENTE ALFA</span>
            <h4 class="text-base font-extrabold text-white">${country.nombre}</h4>
            <span class="text-xs text-slate-400 font-mono">${country.bloque}</span>
          </div>
        </div>
      `;
      this.dom.slotA.className = 'p-4 rounded-xl border-2 border-cyan-400 bg-cyan-950/30 shadow-[0_0_20px_rgba(0,240,255,0.2)] transition';
    } else {
      this.countryB = country;
      this.dom.slotB.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-4xl">${country.bandera}</span>
          <div>
            <span class="text-[10px] font-mono font-bold text-orange-400 tracking-wider">CONTENDIENTE BETA</span>
            <h4 class="text-base font-extrabold text-white">${country.nombre}</h4>
            <span class="text-xs text-slate-400 font-mono">${country.bloque}</span>
          </div>
        </div>
      `;
      this.dom.slotB.className = 'p-4 rounded-xl border-2 border-orange-400 bg-orange-950/30 shadow-[0_0_20px_rgba(255,107,0,0.2)] transition';
    }

    if (window.soundEngine) window.soundEngine.playClick();
  }

  pickRandomMatch() {
    const list = [...window.GEOBATTLE_COUNTRIES];
    const idxA = Math.floor(Math.random() * list.length);
    let idxB = Math.floor(Math.random() * list.length);
    while (idxB === idxA) {
      idxB = Math.floor(Math.random() * list.length);
    }

    this.selectCountry(list[idxA], 'A');
    this.selectCountry(list[idxB], 'B');
    if (window.soundEngine) window.soundEngine.playSonar();
  }

  startArenaClash() {
    this.dom.selectScreen.classList.add('hidden');
    this.dom.victoryScreen.classList.add('hidden');
    this.dom.arenaScreen.classList.remove('hidden');

    this.scoreA = 0;
    this.scoreB = 0;
    this.dom.scoreA.innerText = '0';
    this.dom.scoreB.innerText = '0';

    // Rellenar cabeceras de contendientes en la arena
    this.dom.arenaCardA.innerHTML = `
      <div class="text-3xl sm:text-4xl">${this.countryA.bandera}</div>
      <div>
        <div class="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">BLOQUE AZUL</div>
        <div class="text-base sm:text-xl font-black text-white">${this.countryA.nombre.toUpperCase()}</div>
      </div>
    `;

    this.dom.arenaCardB.innerHTML = `
      <div class="text-right">
        <div class="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider">BLOQUE NARANJA</div>
        <div class="text-base sm:text-xl font-black text-white">${this.countryB.nombre.toUpperCase()}</div>
      </div>
      <div class="text-3xl sm:text-4xl">${this.countryB.bandera}</div>
    `;

    // Renderizar las 9 rondas de categorías
    this.dom.roundsContainer.innerHTML = '';

    this.categories.forEach((cat, idx) => {
      const valA = this.countryA.stats[cat.key];
      const valB = this.countryB.stats[cat.key];

      const winsA = valA.valor > valB.valor;
      const winsB = valB.valor > valA.valor;

      if (winsA) this.scoreA++;
      if (winsB) this.scoreB++;

      const roundEl = document.createElement('div');
      roundEl.className = 'round-clash-card p-4 rounded-xl border border-slate-800 bg-slate-900/90 flex flex-col gap-2.5 transition';

      roundEl.innerHTML = `
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-slate-400 flex items-center gap-1.5 font-bold">
            <span>${cat.icon}</span> <span>${cat.label}</span>
          </span>
          <span class="text-[10px] text-slate-500 font-normal">Fuente: ${valA.fuente}</span>
        </div>

        <div class="grid grid-cols-12 gap-2 items-center">
          <!-- Valor País A -->
          <div class="col-span-5 flex items-center justify-between p-2.5 rounded-lg ${
            winsA 
              ? 'bg-cyan-950/60 border border-cyan-400/60 text-cyan-300 font-bold shadow-[0_0_12px_rgba(0,240,255,0.2)]' 
              : 'bg-slate-950 border border-slate-800 text-slate-400'
          }">
            <span class="text-xs truncate">${valA.display}</span>
            ${winsA ? '<span class="text-[10px] font-mono text-cyan-400 font-extrabold">🏆 +1</span>' : ''}
          </div>

          <!-- VS Indicador -->
          <div class="col-span-2 text-center text-xs font-black font-mono text-slate-600">
            VS
          </div>

          <!-- Valor País B -->
          <div class="col-span-5 flex items-center justify-between p-2.5 rounded-lg ${
            winsB 
              ? 'bg-orange-950/60 border border-orange-400/60 text-orange-300 font-bold shadow-[0_0_12px_rgba(255,107,0,0.2)]' 
              : 'bg-slate-950 border border-slate-800 text-slate-400'
          }">
            <span class="text-xs truncate">${valB.display}</span>
            ${winsB ? '<span class="text-[10px] font-mono text-orange-400 font-extrabold">🏆 +1</span>' : ''}
          </div>
        </div>
      `;

      this.dom.roundsContainer.appendChild(roundEl);
    });

    this.dom.scoreA.innerText = this.scoreA;
    this.dom.scoreB.innerText = this.scoreB;

    if (window.soundEngine) window.soundEngine.playSonar();

    // Botón para ver dictamen final
    if (this.dom.btnResolveAll) {
      this.dom.btnResolveAll.onclick = () => this.showVictoryDecree();
    }
  }

  showVictoryDecree() {
    this.dom.arenaScreen.classList.add('hidden');
    this.dom.victoryScreen.classList.remove('hidden');

    let winnerCountry = null;
    let decreeText = '';

    if (this.scoreA > this.scoreB) {
      winnerCountry = this.countryA;
      decreeText = `VICTORIA ROTUNDA: ${this.countryA.nombre.toUpperCase()}`;
      this.dom.victoryWinnerText.className = 'text-2xl sm:text-4xl font-black text-cyan-400 glow-cyan';
    } else if (this.scoreB > this.scoreA) {
      winnerCountry = this.countryB;
      decreeText = `VICTORIA ROTUNDA: ${this.countryB.nombre.toUpperCase()}`;
      this.dom.victoryWinnerText.className = 'text-2xl sm:text-4xl font-black text-orange-400 glow-orange';
    } else {
      decreeText = `EMPATE TÁCTICO: EQUILIBRIO DE PODER`;
      this.dom.victoryWinnerText.className = 'text-2xl sm:text-4xl font-black text-amber-400';
    }

    this.dom.victoryWinnerText.innerText = decreeText;
    this.dom.victoryScore.innerText = `${this.countryA.bandera} ${this.scoreA} — ${this.scoreB} ${this.countryB.bandera}`;

    // Análisis táctico de la contienda
    this.dom.victoryTacticalAnalysis.innerHTML = `
      <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
        <div>
          <strong class="text-cyan-400">${this.countryA.nombre}:</strong> ${this.countryA.resumen_tactico}
        </div>
        <div class="border-t border-slate-800 pt-2">
          <strong class="text-orange-400">${this.countryB.nombre}:</strong> ${this.countryB.resumen_tactico}
        </div>
      </div>
    `;

    // Tabla detallada de fuentes oficiales
    this.dom.victoryBreakdownBody.innerHTML = '';
    this.categories.forEach((cat) => {
      const vA = this.countryA.stats[cat.key];
      const vB = this.countryB.stats[cat.key];
      const winsA = vA.valor > vB.valor;
      const winsB = vB.valor > vA.valor;

      const tr = document.createElement('tr');
      tr.className = 'border-b border-slate-800/80 text-xs font-mono';
      tr.innerHTML = `
        <td class="p-3 text-slate-300 flex items-center gap-1.5">
          <span>${cat.icon}</span> <span>${cat.label}</span>
        </td>
        <td class="p-3 ${winsA ? 'text-cyan-400 font-bold' : 'text-slate-400'}">
          ${vA.display} ${winsA ? '✓' : ''}
        </td>
        <td class="p-3 ${winsB ? 'text-orange-400 font-bold' : 'text-slate-400'}">
          ${vB.display} ${winsB ? '✓' : ''}
        </td>
        <td class="p-3 text-[10px] text-slate-500 hidden sm:table-cell">
          ${vA.fuente}
        </td>
      `;
      this.dom.victoryBreakdownBody.appendChild(tr);
    });

    // Guardar victoria en LocalStorage y calcular logros
    if (window.storageManager) {
      const margin = Math.abs(this.scoreAlpha - this.scoreBeta);
      const winnerSide = this.scoreAlpha > this.scoreBeta ? 'ALFA' : this.scoreAlpha < this.scoreBeta ? 'BETA' : 'TIE';
      window.storageManager.recordBattleResult(winnerSide, this.fighterAlpha, this.fighterBeta, margin);
      if (typeof refreshDossierUI === 'function') refreshDossierUI();
    }

    if (window.soundEngine) window.soundEngine.playSonar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  returnToSelection() {
    this.dom.arenaScreen.classList.add('hidden');
    this.dom.victoryScreen.classList.add('hidden');
    this.dom.selectScreen.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  exitToHome() {
    this.dom.screen.classList.add('hidden');
    this.dom.homeScreen.classList.remove('hidden');
    if (typeof refreshDossierUI === 'function') refreshDossierUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.geoBattleEngine = new GeoBattleEngine();
  window.geoBattleEngine.init();
});
