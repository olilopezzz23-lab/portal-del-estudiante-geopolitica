/**
 * WORLD CHAOS - Main Terminal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Globo Holográfico
  const globe = new HologramGlobe('globe-canvas');

  // 2. Cargar Dossier del Operador
  refreshDossierUI();

  // 3. Audio & Sonido
  const soundBtn = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');

  function updateSoundUI() {
    const muted = window.soundEngine.isMuted();
    soundText.innerText = muted ? 'AUDIO: OFF' : 'AUDIO: LIVE';
    soundBtn.classList.toggle('border-orange-500/50', !muted);
    soundBtn.classList.toggle('text-orange-400', !muted);
    soundBtn.classList.toggle('text-slate-400', muted);
  }

  soundBtn.addEventListener('click', () => {
    const isMuted = window.soundEngine.toggleMute();
    if (!isMuted) window.soundEngine.playClick();
    updateSoundUI();
  });
  updateSoundUI();

  // 4. Sonidos en botones y tarjetas
  document.querySelectorAll('button, .mode-card, .interactive-tab').forEach((el) => {
    el.addEventListener('mouseenter', () => window.soundEngine.playHover());
    el.addEventListener('click', () => window.soundEngine.playClick());
  });

  // 5. Ticker de Estadísticas Tácticas Mundiales (Simulación / Demo)
  initTelemetrySimulation();

  // 6. Modales: Instrucciones, Récord y Modos de Juego
  setupModals();

  // 7. Auto-apertura si viene con parámetro URL desde el portal del estudiante
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const requestedMode = urlParams.get('mode');
    if (requestedMode) {
      setTimeout(() => {
        if (requestedMode === 'geoquiz' && window.geoQuizEngine) {
          window.geoQuizEngine.openDifficultySelector();
        } else if (requestedMode === 'geobattle' && window.geoBattleEngine) {
          window.geoBattleEngine.openBattle();
        } else if ((requestedMode === 'crisis' || requestedMode === 'worldcrisis') && window.worldCrisisEngine) {
          window.worldCrisisEngine.openCrisis();
        }
      }, 350);
    }
  } catch(e) {
    console.warn('Error procesando param mode:', e);
  }

});

// Actualiza los datos del jugador en la interfaz
function refreshDossierUI() {
  if (!window.storageManager) return;
  const dossier = window.storageManager.getDossier();
  const progress = window.storageManager.getLevelProgress();

  const elCodename = document.getElementById('user-codename');
  const elModalCodename = document.getElementById('modal-codename');
  const elRank = document.getElementById('user-rank');
  const elScore = document.getElementById('user-score');
  const elLevel = document.getElementById('user-level');

  if (elCodename) elCodename.innerText = dossier.codename;
  if (elModalCodename) elModalCodename.innerText = dossier.codename;
  if (elLevel) {
    elLevel.innerText = progress.level.name.toUpperCase();
    elLevel.className = `px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${progress.level.badge}`;
  }
  if (elRank) {
    elRank.innerText = progress.isMax ? 'Rango Máximo (Experto)' : `${progress.currentXp.toLocaleString()} XP • Próximo: ${progress.nextLevel.name} (${progress.percentage}%)`;
  }
  if (elScore) elScore.innerText = `${dossier.totalScore.toLocaleString()} PTS`;

  // Actualizar tabla en modal de récords
  const recQuizScore = document.getElementById('rec-quiz-score');
  const recQuizGames = document.getElementById('rec-quiz-games');
  const recBattleWins = document.getElementById('rec-battle-wins');
  const recCrisisAverted = document.getElementById('rec-crisis-averted');

  if (recQuizScore) recQuizScore.innerText = dossier.geoquiz.highScore;
  if (recQuizGames) recQuizGames.innerText = dossier.geoquiz.gamesPlayed;
  if (recBattleWins) recBattleWins.innerText = dossier.geobattle.victories;
  if (recCrisisAverted) recCrisisAverted.innerText = dossier.worldCrisis.crisesAverted;

  if (window.profileController) {
    window.profileController.refreshProfileUI();
  }
  if (window.dailyChallengeEngine) {
    window.dailyChallengeEngine.updateHomeCardState();
  }
}

// Simulación de telemetría en tiempo real
function initTelemetrySimulation() {
  const elTension = document.getElementById('stat-tension');
  const elFreight = document.getElementById('stat-freight');
  const elVessels = document.getElementById('stat-vessels');
  const elStatus = document.getElementById('stat-chokepoints-status');

  let baseTension = 78.4;
  let baseFreight = 4280;
  let baseVessels = 14820;

  setInterval(() => {
    // Leves fluctuaciones realistas
    baseTension = Math.max(50, Math.min(99, +(baseTension + (Math.random() * 0.8 - 0.4)).toFixed(1)));
    baseFreight = Math.max(3000, Math.min(8000, Math.round(baseFreight + (Math.random() * 20 - 10))));
    baseVessels = Math.round(baseVessels + (Math.random() * 6 - 3));

    if (elTension) elTension.innerText = `${baseTension}%`;
    if (elFreight) elFreight.innerText = `$${baseFreight.toLocaleString()} / TEU`;
    if (elVessels) elVessels.innerText = `${baseVessels.toLocaleString()} BUQUES`;

    if (elTension) {
      if (baseTension > 80) {
        elTension.className = 'font-mono font-bold text-red-500 animate-pulse';
        if (elStatus) elStatus.innerText = '4 CRÍTICOS / ALERTA MÁXIMA';
      } else {
        elTension.className = 'font-mono font-bold text-orange-400';
        if (elStatus) elStatus.innerText = '3 EN ALERTA / FLUIDO';
      }
    }
  }, 2400);
}

// Configuración de apertura y cierre de modales
function setupModals() {
  const modalInstructions = document.getElementById('modal-instructions');
  const modalRecords = document.getElementById('modal-records');
  const modalModeBriefing = document.getElementById('modal-mode-briefing');

  const btnOpenInst = document.getElementById('btn-open-instructions');
  const btnOpenRecords = document.getElementById('btn-open-records');
  const btnCloseInst = document.getElementById('btn-close-instructions');
  const btnCloseRecords = document.getElementById('btn-close-records');
  const btnCloseBriefing = document.getElementById('btn-close-briefing');

  // Abrir Instrucciones
  btnOpenInst.addEventListener('click', () => {
    modalInstructions.classList.remove('hidden');
    window.soundEngine.playSonar();
  });

  // Cerrar Instrucciones
  btnCloseInst.addEventListener('click', () => {
    modalInstructions.classList.add('hidden');
  });

  // Abrir Récords
  btnOpenRecords.addEventListener('click', () => {
    refreshDossierUI();
    modalRecords.classList.remove('hidden');
    window.soundEngine.playSonar();
  });

  // Cerrar Récords
  btnCloseRecords.addEventListener('click', () => {
    modalRecords.classList.add('hidden');
  });

  // Editar Codename
  const btnEditCodename = document.getElementById('btn-edit-codename');
  if (btnEditCodename) {
    btnEditCodename.addEventListener('click', () => {
      const current = window.storageManager.getDossier().codename;
      const nuevo = prompt('Introduce tu nuevo Identificador de Operador (máx 16 letras):', current);
      if (nuevo) {
        window.storageManager.updateCodename(nuevo);
        refreshDossierUI();
      }
    });
  }

  // Reset Records
  const btnResetRecords = document.getElementById('btn-reset-records');
  if (btnResetRecords) {
    btnResetRecords.addEventListener('click', () => {
      if (confirm('¿ATENCIÓN: Deseas formatear tu expediente y borrar todos los récords y puntos acumulados?')) {
        window.storageManager.resetAllRecords();
        refreshDossierUI();
        window.soundEngine.playAlert();
        alert('Expediente reseteado al estado inicial.');
      }
    });
  }

  // Modos de Juego (Preview / Preparación para Fase 2)
  const modeData = {
    geoquiz: {
      tag: 'MODO 01 • RANGO DE CONOCIMIENTO',
      title: 'GEOQUIZ: PULSO GLOBAL',
      desc: 'Enfréntate a rondas intensas de 60 segundos sobre cuellos de botella marítimos, minerales críticos, sanciones financieras y alianzas estratégicas.',
      objective: 'Responder con máxima velocidad sin fallar para multiplicar el combo de puntos.',
      difficulty: 'INTERMEDIO • TÁCTICO',
      status: 'PRÓXIMO DESPLIEGUE • FASE 2'
    },
    geobattle: {
      tag: 'MODO 02 • ESTRATEGIA DE BLOQUES',
      title: 'GEOBATTLE: GUERRA DE RUTAS',
      desc: 'Elige tu potencia (EE.UU., China, Unión Europea o BRICS+) y compite por dominar los 7 corredores comerciales vitales del planeta antes que tus rivales.',
      objective: 'Monopolizar el tránsito y forzar el embargo comercial a los adversarios.',
      difficulty: 'ALTO • ESTRATÉGICO',
      status: 'PRÓXIMO DESPLIEGUE • FASE 2'
    },
    crisis: {
      tag: 'MODO 03 • SIMULADOR DE COLAPSO',
      title: 'WORLD CRISIS: OPERACIÓN RESCATE',
      desc: 'Se desencadena una catástrofe global simultánea: sequía en Panamá, ataques en el Mar Rojo y guerra de aranceles. Tienes recursos limitados para evitar el colapso de suministros.',
      objective: 'Mantener el Índice de Estabilidad Mundial por encima del 30% durante 10 turnos.',
      difficulty: 'EXTREMO • SUPERVIVENCIA',
      status: 'PRÓXIMO DESPLIEGUE • FASE 2'
    }
  };

  document.querySelectorAll('.btn-launch-mode').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modeKey = btn.getAttribute('data-mode');
      if (modeKey === 'geoquiz') {
        if (window.geoQuizEngine) {
          window.geoQuizEngine.openDifficultySelector();
        }
        return;
      }

      if (modeKey === 'geobattle') {
        if (window.geoBattleEngine) {
          window.geoBattleEngine.openBattle();
        }
        return;
      }

      if (modeKey === 'crisis') {
        if (window.worldCrisisEngine) {
          window.worldCrisisEngine.openCrisis();
        }
        return;
      }

      const info = modeData[modeKey];
      if (!info) return;

      document.getElementById('briefing-tag').innerText = info.tag;
      document.getElementById('briefing-title').innerText = info.title;
      document.getElementById('briefing-desc').innerText = info.desc;
      document.getElementById('briefing-objective').innerText = info.objective;
      document.getElementById('briefing-difficulty').innerText = info.difficulty;
      document.getElementById('briefing-status').innerText = info.status;

      modalModeBriefing.classList.remove('hidden');
      window.soundEngine.playAlert();
    });
  });

  btnCloseBriefing.addEventListener('click', () => {
    modalModeBriefing.classList.add('hidden');
  });

  // Cerrar modales con clic fuera
  const modalQuizDiff = document.getElementById('modal-quiz-difficulty');
  [modalInstructions, modalRecords, modalModeBriefing, modalQuizDiff].filter(Boolean).forEach((m) => {
    m.addEventListener('click', (e) => {
      if (e.target === m) m.classList.add('hidden');
    });
  });

  // Cerrar con tecla Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [modalInstructions, modalRecords, modalModeBriefing, modalQuizDiff].filter(Boolean).forEach((m) => {
        m.classList.add('hidden');
      });
      const sitrep = document.getElementById('globe-sitrep');
      if (sitrep) sitrep.classList.add('hidden');
    }
  });
    if (e.key === 'Escape') {
      [modalInstructions, modalRecords, modalModeBriefing].forEach((m) => {
        m.classList.add('hidden');
      });
      const sitrep = document.getElementById('globe-sitrep');
      if (sitrep) sitrep.classList.add('hidden');
    }
  });

  // Cerrar sitrep flotante del globo
  const btnCloseSitrep = document.getElementById('btn-close-sitrep');
  if (btnCloseSitrep) {
    btnCloseSitrep.addEventListener('click', () => {
      document.getElementById('globe-sitrep').classList.add('hidden');
    });
  }
}
