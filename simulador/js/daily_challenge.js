/**
 * WORLD CHAOS - MODO DESAFÍO DIARIO
 * Genera determinísticamente 5 preguntas diarias basadas en la fecha actual (YYYY-MM-DD).
 * Todos los usuarios reciben exactamente el mismo desafío cada día.
 * Otorga bonificaciones de XP, seguimiento de racha de días y medallas exclusivas.
 */

class DailyChallengeEngine {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.correctCount = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.timerId = null;
    this.timeLeft = 25;
    this.todayStr = this.getTodayDateString();

    this.dom = {
      screen: document.getElementById('daily-challenge-screen'),
      homeScreen: document.querySelector('main'),
      gameplayArea: document.getElementById('daily-gameplay-area'),
      resultsCard: document.getElementById('daily-results-card'),
      
      // HUD
      qCounter: document.getElementById('daily-q-counter'),
      timerVal: document.getElementById('daily-timer-val'),
      scoreVal: document.getElementById('daily-score-val'),
      streakVal: document.getElementById('daily-streak-val'),
      progressBar: document.getElementById('daily-progress-bar'),
      todayDateBadge: document.getElementById('daily-today-date'),

      // Pregunta
      catBadge: document.getElementById('daily-cat-badge'),
      qText: document.getElementById('daily-q-text'),
      optionsGrid: document.getElementById('daily-options-grid'),
      feedbackBox: document.getElementById('daily-feedback-box'),
      feedbackTitle: document.getElementById('daily-feedback-title'),
      feedbackText: document.getElementById('daily-feedback-text'),
      btnNextQ: document.getElementById('daily-btn-next-q'),

      // Resultados
      finalScore: document.getElementById('daily-final-score'),
      finalCorrect: document.getElementById('daily-final-correct'),
      finalStreakBonus: document.getElementById('daily-final-streak-bonus'),
      dayStreakBadge: document.getElementById('daily-day-streak-badge'),
      btnExitDaily: document.getElementById('daily-btn-exit'),

      // Home trigger card
      homeStatusBadge: document.getElementById('daily-home-status-badge'),
      homeCountdown: document.getElementById('daily-home-countdown'),
      homeStreakCount: document.getElementById('daily-home-streak-count'),
      btnLaunchDaily: document.getElementById('btn-launch-daily')
    };

    this.initEventListeners();
    this.startCountdownTicker();
    this.updateHomeCardState();
  }

  getTodayDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  initEventListeners() {
    if (this.dom.btnLaunchDaily) {
      this.dom.btnLaunchDaily.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playSonar();
        this.openDailyChallenge();
      });
    }

    if (this.dom.btnNextQ) {
      this.dom.btnNextQ.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        this.nextQuestion();
      });
    }

    if (this.dom.btnExitDaily) {
      this.dom.btnExitDaily.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        this.closeDailyChallenge();
      });
    }

    const btnBack = document.getElementById('btn-back-home-from-daily');
    if (btnBack) {
      btnBack.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        this.closeDailyChallenge();
      });
    }
  }

  // Generador pseudoaleatorio determinista para la fecha (Mulberry32)
  generateSeededQuestions() {
    const dateStr = this.todayStr;
    let seed = 0;
    for (let i = 0; i < dateStr.length; i++) {
      seed = (seed * 31 + dateStr.charCodeAt(i)) >>> 0;
    }

    const random = () => {
      let t = seed += 0x6D2B79F5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    const bank = window.GEOQUIZ_BANK || [];
    if (!bank.length) return [];

    // Barajar determinísticamente
    const pool = [...bank];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Tomar 5 preguntas equilibradas
    return pool.slice(0, 5);
  }

  startCountdownTicker() {
    const updateTime = () => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diffMs = tomorrow - now;

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

      const str = `${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
      if (this.dom.homeCountdown) {
        this.dom.homeCountdown.innerText = str;
      }
    };

    updateTime();
    setInterval(updateTime, 1000);
  }

  updateHomeCardState() {
    if (!window.storageManager) return;
    const isDone = window.storageManager.isDailyCompletedToday();
    const streak = window.storageManager.data.daily.currentDayStreak || 0;

    if (this.dom.homeStreakCount) {
      this.dom.homeStreakCount.innerText = `${streak} ${streak === 1 ? 'DÍA' : 'DÍAS'}`;
    }

    if (this.dom.homeStatusBadge) {
      if (isDone) {
        this.dom.homeStatusBadge.innerText = 'COMPLETADO HOY';
        this.dom.homeStatusBadge.className = 'text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border border-emerald-500/40 text-emerald-400 bg-emerald-950/40';
      } else {
        this.dom.homeStatusBadge.innerText = 'DISPONIBLE HOY';
        this.dom.homeStatusBadge.className = 'text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border border-orange-500/40 text-orange-400 bg-orange-950/40 animate-pulse';
      }
    }
  }

  openDailyChallenge() {
    this.todayStr = this.getTodayDateString();
    this.questions = this.generateSeededQuestions();
    this.currentIndex = 0;
    this.score = 0;
    this.correctCount = 0;
    this.streak = 0;
    this.maxStreak = 0;

    if (this.dom.todayDateBadge) {
      this.dom.todayDateBadge.innerText = `FECHA: ${this.todayStr}`;
    }

    if (this.dom.homeScreen) this.dom.homeScreen.classList.add('hidden');
    if (this.dom.screen) this.dom.screen.classList.remove('hidden');
    if (this.dom.gameplayArea) this.dom.gameplayArea.classList.remove('hidden');
    if (this.dom.resultsCard) this.dom.resultsCard.classList.add('hidden');

    this.renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeDailyChallenge() {
    clearInterval(this.timerId);
    if (this.dom.screen) this.dom.screen.classList.add('hidden');
    if (this.dom.homeScreen) this.dom.homeScreen.classList.remove('hidden');

    this.updateHomeCardState();
    if (window.appMain && typeof window.appMain.updateRecordsUI === 'function') {
      window.appMain.updateRecordsUI();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderQuestion() {
    clearInterval(this.timerId);
    this.timeLeft = 25;

    const q = this.questions[this.currentIndex];
    if (!q) {
      this.finishDailyMatch();
      return;
    }

    const totalQ = this.questions.length;
    this.dom.qCounter.innerText = `PREGUNTA ${this.currentIndex + 1} DE ${totalQ}`;
    this.dom.progressBar.style.width = `${(this.currentIndex / totalQ) * 100}%`;
    this.dom.scoreVal.innerText = `${this.score} PTS`;
    this.dom.streakVal.innerText = `${this.streak}x`;
    this.dom.catBadge.innerText = q.categoria;
    this.dom.qText.innerText = q.pregunta;

    this.dom.feedbackBox.classList.add('hidden');
    this.dom.btnNextQ.classList.add('hidden');
    this.dom.optionsGrid.innerHTML = '';

    q.opciones.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'glass-panel p-4 rounded-xl border border-slate-800 hover:border-orange-500/60 bg-slate-900/60 hover:bg-slate-900 text-left transition duration-200 flex items-center gap-3 text-xs sm:text-sm text-slate-200 group';
      btn.innerHTML = `
        <span class="w-6 h-6 rounded bg-slate-800 group-hover:bg-orange-500/20 text-slate-400 group-hover:text-orange-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
          ${String.fromCharCode(65 + idx)}
        </span>
        <span class="flex-1">${opt}</span>
      `;

      btn.addEventListener('mouseenter', () => {
        if (window.soundEngine) window.soundEngine.playHover();
      });

      btn.addEventListener('click', () => {
        this.selectAnswer(idx, q);
      });

      this.dom.optionsGrid.appendChild(btn);
    });

    this.startTimer();
  }

  startTimer() {
    this.dom.timerVal.innerText = `${this.timeLeft}s`;
    this.timerId = setInterval(() => {
      this.timeLeft--;
      this.dom.timerVal.innerText = `${this.timeLeft}s`;
      if (this.timeLeft <= 0) {
        clearInterval(this.timerId);
        this.handleTimeout();
      }
    }, 1000);
  }

  handleTimeout() {
    if (window.soundEngine) window.soundEngine.playAlert();
    this.streak = 0;
    this.dom.streakVal.innerText = `${this.streak}x`;
    if (window.storageManager) window.storageManager.recordQuizAnswer(false);
    this.showFeedback(false, 'TIEMPO AGOTADO', 'No se emitió una orden a tiempo. Se considera falla táctica.', this.questions[this.currentIndex].correcta);
  }

  selectAnswer(selectedIndex, q) {
    clearInterval(this.timerId);
    const isCorrect = selectedIndex === q.correcta;

    // Deshabilitar todos los botones y pintar acierto/fallo
    const buttons = this.dom.optionsGrid.querySelectorAll('button');
    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correcta) {
        btn.className = 'glass-panel p-4 rounded-xl border border-emerald-500 bg-emerald-950/40 text-emerald-300 text-left flex items-center gap-3 text-xs sm:text-sm font-semibold';
      } else if (idx === selectedIndex && !isCorrect) {
        btn.className = 'glass-panel p-4 rounded-xl border border-red-500 bg-red-950/40 text-red-300 text-left flex items-center gap-3 text-xs sm:text-sm font-semibold';
      } else {
        btn.className = 'glass-panel p-4 rounded-xl border border-slate-900 bg-slate-950/40 opacity-40 text-left flex items-center gap-3 text-xs sm:text-sm';
      }
    });

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      if (window.storageManager) window.storageManager.recordQuizAnswer(true);

      const basePts = 150;
      const speedBonus = this.timeLeft * 8;
      const streakBonus = (this.streak - 1) * 35;
      const earned = basePts + speedBonus + streakBonus;
      this.score += earned;

      if (window.soundEngine) window.soundEngine.playSonar();
      this.showFeedback(true, `ORDEN CORRECTA (+${earned} PTS)`, q.explicacion, q.correcta);
    } else {
      this.streak = 0;
      if (window.storageManager) window.storageManager.recordQuizAnswer(false);
      if (window.soundEngine) window.soundEngine.playAlert();
      this.showFeedback(false, 'ORDEN ERRÓNEA', q.explicacion, q.correcta);
    }

    this.dom.scoreVal.innerText = `${this.score} PTS`;
    this.dom.streakVal.innerText = `${this.streak}x`;
  }

  showFeedback(isCorrect, title, explanation, correctIndex) {
    this.dom.feedbackTitle.innerText = title;
    this.dom.feedbackTitle.className = isCorrect ? 'text-emerald-400 font-bold text-sm mb-1' : 'text-red-400 font-bold text-sm mb-1';
    this.dom.feedbackText.innerText = explanation;

    this.dom.feedbackBox.className = isCorrect 
      ? 'p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex flex-col gap-1'
      : 'p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex flex-col gap-1';
    
    this.dom.feedbackBox.classList.remove('hidden');
    this.dom.btnNextQ.classList.remove('hidden');

    if (this.currentIndex === this.questions.length - 1) {
      this.dom.btnNextQ.innerText = 'VER INFORME DEL DESAFÍO →';
    } else {
      this.dom.btnNextQ.innerText = 'SIGUIENTE PREGUNTA →';
    }
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= this.questions.length) {
      this.finishDailyMatch();
    } else {
      this.renderQuestion();
    }
  }

  finishDailyMatch() {
    clearInterval(this.timerId);
    this.dom.progressBar.style.width = '100%';

    // Registrar en storage con bonificaciones diarias
    if (window.storageManager) {
      window.storageManager.recordDailyResult(this.score);
    }

    this.dom.gameplayArea.classList.add('hidden');
    this.dom.resultsCard.classList.remove('hidden');

    this.dom.finalScore.innerText = `${this.score.toLocaleString()} PTS`;
    this.dom.finalCorrect.innerText = `${this.correctCount} / ${this.questions.length} Aciertos (${Math.round((this.correctCount / this.questions.length) * 100)}%)`;
    this.dom.finalStreakBonus.innerText = `Mejor Racha de Aciertos: ${this.maxStreak}x`;

    const currentDayStreak = (window.storageManager && window.storageManager.data.daily.currentDayStreak) || 1;
    this.dom.dayStreakBadge.innerText = `🔥 RACHA DIARIA: ${currentDayStreak} ${currentDayStreak === 1 ? 'DÍA' : 'DÍAS'} CONSECUTIVOS`;

    if (window.soundEngine) window.soundEngine.playSonar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Inicialización global
document.addEventListener('DOMContentLoaded', () => {
  window.dailyChallengeEngine = new DailyChallengeEngine();
});
