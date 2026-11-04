/**
 * WORLD CHAOS - MODO WORLD CRISIS
 * Motor de simulación de crisis geopolíticas y logísticas globales.
 * Presenta 15+ escenarios tácticos, evalúa 3 cursos de acción doctrinales,
 * calcula el impacto dinámico sobre Comercio, Energía, Inflación y Logística,
 * y genera un informe de gabinete con puntuación de estabilidad sistémica.
 */

class WorldCrisisEngine {
  constructor() {
    this.scenarios = window.CRISIS_SCENARIOS || [];
    this.activeScenario = null;
    this.selectedDecision = null;
    this.currentMetrics = { comercio: 50, energia: 50, inflacion: 50, logistica: 50 };
    this.stabilityScore = 0;

    this.dom = {
      screen: document.getElementById('crisis-screen'),
      homeScreen: document.querySelector('main'),
      selectorView: document.getElementById('crisis-selector-view'),
      activeView: document.getElementById('crisis-active-view'),
      resultsView: document.getElementById('crisis-results-view'),
      
      // Selectores y cuadrícula
      scenariosGrid: document.getElementById('crisis-scenarios-grid'),
      btnRandomCrisis: document.getElementById('btn-random-crisis'),
      btnBackHomeFromCrisis: document.getElementById('btn-back-home-from-crisis'),
      statAverted: document.getElementById('crisis-stat-averted'),
      statMaxStability: document.getElementById('crisis-stat-max-stability'),

      // Vista activa
      alertBadge: document.getElementById('crisis-alert-badge'),
      theaterTag: document.getElementById('crisis-theater-tag'),
      titleActive: document.getElementById('crisis-title-active'),
      regionActive: document.getElementById('crisis-region-active'),
      contextText: document.getElementById('crisis-context-text'),
      decisionsContainer: document.getElementById('crisis-decisions-container'),
      btnExitCrisis: document.getElementById('btn-exit-crisis'),

      // Métricas activas (Gauges)
      valComercio: document.getElementById('crisis-val-comercio'),
      barComercio: document.getElementById('crisis-bar-comercio'),
      valEnergia: document.getElementById('crisis-val-energia'),
      barEnergia: document.getElementById('crisis-bar-energia'),
      valInflacion: document.getElementById('crisis-val-inflacion'),
      barInflacion: document.getElementById('crisis-bar-inflacion'),
      valLogistica: document.getElementById('crisis-val-logistica'),
      barLogistica: document.getElementById('crisis-bar-logistica'),

      // Vista de Resultados (Informe)
      resBadgeAlert: document.getElementById('crisis-res-badge-alert'),
      resTitle: document.getElementById('crisis-res-title'),
      resDecisionDoctrina: document.getElementById('crisis-res-decision-doctrina'),
      resDecisionTitulo: document.getElementById('crisis-res-decision-titulo'),
      resStabilityScore: document.getElementById('crisis-res-stability-score'),
      resStabilityBadge: document.getElementById('crisis-res-stability-badge'),
      resStabilityProgress: document.getElementById('crisis-res-stability-progress'),
      resImpactDiffs: document.getElementById('crisis-res-impact-diffs'),
      resNarrative: document.getElementById('crisis-res-narrative'),
      resSummaryQuote: document.getElementById('crisis-res-summary-quote'),

      // Métricas finales en informe
      endValComercio: document.getElementById('crisis-end-val-comercio'),
      endBarComercio: document.getElementById('crisis-end-bar-comercio'),
      endValEnergia: document.getElementById('crisis-end-val-energia'),
      endBarEnergia: document.getElementById('crisis-end-bar-energia'),
      endValInflacion: document.getElementById('crisis-end-val-inflacion'),
      endBarInflacion: document.getElementById('crisis-end-bar-inflacion'),
      endValLogistica: document.getElementById('crisis-end-val-logistica'),
      endBarLogistica: document.getElementById('crisis-end-bar-logistica'),

      // Botones de acción en informe
      btnRetryDecision: document.getElementById('btn-crisis-retry-decision'),
      btnNextCrisis: document.getElementById('btn-crisis-next'),
      btnReturnSelector: document.getElementById('btn-crisis-return-selector')
    };

    this.initEventListeners();
  }

  initEventListeners() {
    if (this.dom.btnBackHomeFromCrisis) {
      this.dom.btnBackHomeFromCrisis.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        this.closeCrisis();
      });
    }

    if (this.dom.btnExitCrisis) {
      this.dom.btnExitCrisis.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        this.showSelector();
      });
    }

    if (this.dom.btnRandomCrisis) {
      this.dom.btnRandomCrisis.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playSonar();
        this.launchRandomCrisis();
      });
    }

    if (this.dom.btnRetryDecision) {
      this.dom.btnRetryDecision.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        if (this.activeScenario) {
          this.loadScenario(this.activeScenario);
        }
      });
    }

    if (this.dom.btnNextCrisis) {
      this.dom.btnNextCrisis.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playSonar();
        this.launchRandomCrisis();
      });
    }

    if (this.dom.btnReturnSelector) {
      this.dom.btnReturnSelector.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        this.showSelector();
      });
    }
  }

  openCrisis() {
    if (this.dom.homeScreen) this.dom.homeScreen.classList.add('hidden');
    if (this.dom.screen) this.dom.screen.classList.remove('hidden');

    this.updateSelectorStats();
    this.renderScenariosGrid();
    this.showSelector();

    if (window.soundEngine) window.soundEngine.playSonar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeCrisis() {
    if (this.dom.screen) this.dom.screen.classList.add('hidden');
    if (this.dom.homeScreen) this.dom.homeScreen.classList.remove('hidden');

    if (window.appMain && typeof window.appMain.updateRecordsUI === 'function') {
      window.appMain.updateRecordsUI();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showSelector() {
    this.dom.selectorView.classList.remove('hidden');
    this.dom.activeView.classList.add('hidden');
    this.dom.resultsView.classList.add('hidden');
    this.updateSelectorStats();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateSelectorStats() {
    if (!window.storageManager) return;
    const stats = window.storageManager.data.worldCrisis || { crisesAverted: 0, maxStabilityReached: 0 };
    if (this.dom.statAverted) this.dom.statAverted.innerText = stats.crisesAverted || 0;
    if (this.dom.statMaxStability) this.dom.statMaxStability.innerText = `${stats.maxStabilityReached || 0}%`;
  }

  renderScenariosGrid() {
    if (!this.dom.scenariosGrid) return;
    this.dom.scenariosGrid.innerHTML = '';

    this.scenarios.forEach((sc, index) => {
      const card = document.createElement('div');
      card.className = 'glass-panel p-5 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg hover:shadow-red-950/30';
      
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded ${sc.badgeColor}">
              ${sc.nivelAlerta}
            </span>
            <span class="text-2xl">${sc.icono}</span>
          </div>
          <div class="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">${sc.teatro}</div>
          <h4 class="text-base font-bold text-white group-hover:text-red-400 transition mb-2 leading-snug">
            ${sc.titulo}
          </h4>
          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
            ${sc.contexto}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <span class="text-[11px] font-mono text-cyan-400">${sc.region}</span>
          <span class="text-xs font-mono text-red-400 group-hover:translate-x-1 transition font-bold">INTERVENIR →</span>
        </div>
      `;

      card.addEventListener('mouseenter', () => {
        if (window.soundEngine) window.soundEngine.playHover();
      });

      card.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playAlert();
        this.loadScenario(sc);
      });

      this.dom.scenariosGrid.appendChild(card);
    });
  }

  launchRandomCrisis() {
    if (!this.scenarios.length) return;
    const randomIndex = Math.floor(Math.random() * this.scenarios.length);
    const chosen = this.scenarios[randomIndex];
    if (window.soundEngine) window.soundEngine.playAlert();
    this.loadScenario(chosen);
  }

  loadScenario(scenario) {
    this.activeScenario = scenario;
    this.selectedDecision = null;
    this.currentMetrics = { ...scenario.estadoInicial };

    // Poblar textos de cabecera
    this.dom.alertBadge.innerText = scenario.nivelAlerta;
    this.dom.alertBadge.className = `text-xs font-mono font-bold px-3 py-1 rounded border animate-pulse ${scenario.badgeColor}`;
    this.dom.theaterTag.innerText = scenario.teatro;
    this.dom.titleActive.innerText = scenario.titulo;
    this.dom.regionActive.innerText = scenario.region;
    this.dom.contextText.innerText = scenario.contexto;

    // Actualizar medidores HUD iniciales
    this.renderMetricsHUD(this.currentMetrics);

    // Renderizar las 3 decisiones
    this.renderDecisions(scenario.decisiones);

    // Cambiar a vista activa
    this.dom.selectorView.classList.add('hidden');
    this.dom.activeView.classList.remove('hidden');
    this.dom.resultsView.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderMetricsHUD(metrics) {
    // Helper para actualizar barras
    const updateGauge = (valElem, barElem, value, isInverse = false) => {
      const clamped = Math.max(0, Math.min(100, Math.round(value)));
      valElem.innerText = `${clamped}%`;
      barElem.style.width = `${clamped}%`;

      // Colores: Para comercio/energía/logística, más es mejor (verde).
      // Para inflación, más es peor (rojo).
      if (!isInverse) {
        if (clamped >= 70) {
          barElem.className = 'h-full bg-emerald-400 rounded-full transition-all duration-700';
          valElem.className = 'font-mono text-sm font-black text-emerald-400';
        } else if (clamped >= 40) {
          barElem.className = 'h-full bg-amber-400 rounded-full transition-all duration-700';
          valElem.className = 'font-mono text-sm font-black text-amber-400';
        } else {
          barElem.className = 'h-full bg-red-500 rounded-full transition-all duration-700';
          valElem.className = 'font-mono text-sm font-black text-red-400';
        }
      } else {
        // Inflación: Alto = malo (rojo)
        if (clamped >= 70) {
          barElem.className = 'h-full bg-red-500 rounded-full transition-all duration-700';
          valElem.className = 'font-mono text-sm font-black text-red-400';
        } else if (clamped >= 45) {
          barElem.className = 'h-full bg-amber-400 rounded-full transition-all duration-700';
          valElem.className = 'font-mono text-sm font-black text-amber-400';
        } else {
          barElem.className = 'h-full bg-emerald-400 rounded-full transition-all duration-700';
          valElem.className = 'font-mono text-sm font-black text-emerald-400';
        }
      }
    };

    updateGauge(this.dom.valComercio, this.dom.barComercio, metrics.comercio);
    updateGauge(this.dom.valEnergia, this.dom.barEnergia, metrics.energia);
    updateGauge(this.dom.valInflacion, this.dom.barInflacion, metrics.inflacion, true);
    updateGauge(this.dom.valLogistica, this.dom.barLogistica, metrics.logistica);
  }

  renderDecisions(decisiones) {
    if (!this.dom.decisionsContainer) return;
    this.dom.decisionsContainer.innerHTML = '';

    decisiones.forEach((dec) => {
      const card = document.createElement('div');
      card.className = 'glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/60 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group';

      // Impact badges preview
      const formatDiff = (num, isInflacion = false) => {
        const sign = num > 0 ? `+${num}%` : `${num}%`;
        const isGood = isInflacion ? num < 0 : num > 0;
        const color = isGood ? 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30' : (num === 0 ? 'text-slate-400 border-slate-700 bg-slate-900' : 'text-red-400 border-red-500/30 bg-red-950/30');
        return `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${color}">${sign}</span>`;
      };

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono font-black text-amber-400 tracking-wider px-2 py-1 bg-amber-500/10 border border-amber-500/30 rounded">
              ${dec.letra}
            </span>
            <span class="text-[11px] font-mono text-slate-400 uppercase tracking-widest">${dec.doctrina}</span>
          </div>
          <h4 class="text-base sm:text-lg font-black text-white group-hover:text-cyan-400 transition mb-2">
            ${dec.titulo}
          </h4>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            ${dec.descripcion}
          </p>
        </div>

        <div>
          <div class="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-4">
            <div class="text-[10px] font-mono text-slate-400 mb-2 uppercase tracking-wider">Impacto Estimado en Variables:</div>
            <div class="grid grid-cols-2 gap-2 text-xs font-mono">
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Comercio:</span>
                ${formatDiff(dec.impactos.comercio)}
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Energía:</span>
                ${formatDiff(dec.impactos.energia)}
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Inflación:</span>
                ${formatDiff(dec.impactos.inflacion, true)}
              </div>
              <div class="flex items-center justify-between">
                <span class="text-slate-400">Logística:</span>
                ${formatDiff(dec.impactos.logistica)}
              </div>
            </div>
          </div>

          <button class="btn-execute-decision btn-tactical btn-cyan w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            <span>EJECUTAR ESTA ORDEN</span>
            <span>⚡</span>
          </button>
        </div>
      `;

      card.addEventListener('mouseenter', () => {
        if (window.soundEngine) window.soundEngine.playHover();
      });

      const btnExec = card.querySelector('.btn-execute-decision');
      btnExec.addEventListener('click', () => {
        this.executeDecision(dec);
      });

      this.dom.decisionsContainer.appendChild(card);
    });
  }

  executeDecision(decision) {
    this.selectedDecision = decision;
    if (window.soundEngine) window.soundEngine.playClick();

    // Calcular nuevas métricas aplicando los impactos
    const finalMetrics = {
      comercio: Math.max(5, Math.min(100, this.currentMetrics.comercio + decision.impactos.comercio)),
      energia: Math.max(5, Math.min(100, this.currentMetrics.energia + decision.impactos.energia)),
      inflacion: Math.max(5, Math.min(100, this.currentMetrics.inflacion + decision.impactos.inflacion)),
      logistica: Math.max(5, Math.min(100, this.currentMetrics.logistica + decision.impactos.logistica))
    };

    // Estabilidad sistémica
    this.stabilityScore = decision.estabilidad;

    // Actualizar registro en LocalStorage
    if (window.storageManager) {
      window.storageManager.recordCrisisResult(this.stabilityScore);
      if (typeof refreshDossierUI === 'function') refreshDossierUI();
    }

    // Efecto de audio según resultado
    setTimeout(() => {
      if (this.stabilityScore >= 70) {
        if (window.soundEngine) window.soundEngine.playSonar();
      } else {
        if (window.soundEngine) window.soundEngine.playAlert();
      }
    }, 400);

    // Mostrar informe final
    this.showResultsReport(decision, finalMetrics);
  }

  showResultsReport(decision, finalMetrics) {
    this.dom.activeView.classList.add('hidden');
    this.dom.resultsView.classList.remove('hidden');

    // Datos del informe
    this.dom.resBadgeAlert.innerText = this.activeScenario.nivelAlerta;
    this.dom.resTitle.innerText = this.activeScenario.titulo;
    this.dom.resDecisionDoctrina.innerText = `${decision.letra} • ${decision.doctrina}`;
    this.dom.resDecisionTitulo.innerText = decision.titulo;

    // Estabilidad
    this.dom.resStabilityScore.innerText = `${this.stabilityScore}%`;
    this.dom.resStabilityProgress.style.width = `${this.stabilityScore}%`;

    let badgeClass = 'border-red-500/50 text-red-400 bg-red-950/40';
    if (this.stabilityScore >= 80) {
      badgeClass = 'border-emerald-500/50 text-emerald-400 bg-emerald-950/40';
    } else if (this.stabilityScore >= 65) {
      badgeClass = 'border-amber-500/50 text-amber-400 bg-amber-950/40';
    }
    this.dom.resStabilityBadge.innerText = decision.calificacion;
    this.dom.resStabilityBadge.className = `text-xs font-mono font-bold px-3 py-1 rounded border ${badgeClass}`;

    // Desglose de variaciones
    const diffTag = (label, diff, isInflacion = false) => {
      const sign = diff > 0 ? `+${diff}%` : `${diff}%`;
      const isGood = isInflacion ? diff < 0 : diff > 0;
      const color = isGood ? 'text-emerald-400' : (diff === 0 ? 'text-slate-400' : 'text-red-400');
      return `
        <div class="glass-panel p-2.5 rounded-lg border border-slate-800 text-center">
          <div class="text-[10px] font-mono text-slate-400 uppercase">${label}</div>
          <div class="text-sm font-mono font-bold ${color} mt-0.5">${sign}</div>
        </div>
      `;
    };

    this.dom.resImpactDiffs.innerHTML = `
      ${diffTag('Comercio', decision.impactos.comercio)}
      ${diffTag('Energía', decision.impactos.energia)}
      ${diffTag('Inflación', decision.impactos.inflacion, true)}
      ${diffTag('Logística', decision.impactos.logistica)}
    `;

    // Narrativa y conclusión
    this.dom.resNarrative.innerText = decision.consecuencias;
    this.dom.resSummaryQuote.innerText = `"${decision.resumenInforme}"`;

    // Medidores finales del informe
    const updateGauge = (valElem, barElem, value, isInverse = false) => {
      const clamped = Math.max(0, Math.min(100, Math.round(value)));
      valElem.innerText = `${clamped}%`;
      barElem.style.width = `${clamped}%`;
      if (!isInverse) {
        barElem.className = clamped >= 70 ? 'h-full bg-emerald-400 rounded-full' : clamped >= 40 ? 'h-full bg-amber-400 rounded-full' : 'h-full bg-red-500 rounded-full';
        valElem.className = clamped >= 70 ? 'font-mono text-xs font-bold text-emerald-400' : clamped >= 40 ? 'font-mono text-xs font-bold text-amber-400' : 'font-mono text-xs font-bold text-red-400';
      } else {
        barElem.className = clamped >= 70 ? 'h-full bg-red-500 rounded-full' : clamped >= 45 ? 'h-full bg-amber-400 rounded-full' : 'h-full bg-emerald-400 rounded-full';
        valElem.className = clamped >= 70 ? 'font-mono text-xs font-bold text-red-400' : clamped >= 45 ? 'font-mono text-xs font-bold text-amber-400' : 'font-mono text-xs font-bold text-emerald-400';
      }
    };

    updateGauge(this.dom.endValComercio, this.dom.endBarComercio, finalMetrics.comercio);
    updateGauge(this.dom.endValEnergia, this.dom.endBarEnergia, finalMetrics.energia);
    updateGauge(this.dom.endValInflacion, this.dom.endBarInflacion, finalMetrics.inflacion, true);
    updateGauge(this.dom.endValLogistica, this.dom.endBarLogistica, finalMetrics.logistica);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Inicialización global
document.addEventListener('DOMContentLoaded', () => {
  window.worldCrisisEngine = new WorldCrisisEngine();
});
