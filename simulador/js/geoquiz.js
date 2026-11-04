/**
 * WORLD CHAOS - Motor Jugable GEOQUIZ
 * Manejo de rondas de 10 preguntas, temporizador, rachas, retroalimentación táctica y guardado de récords.
 */

class GeoQuizEngine {
  constructor() {
    this.difficulty = 'facil';
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;
    this.timer = 20;
    this.timerId = null;
    this.answered = false;

    this.dom = {};
  }

  init() {
    this.cacheDom();
    this.bindEvents();
  }

  cacheDom() {
    this.dom.screen = document.getElementById('geoquiz-screen');
    this.dom.homeScreen = document.querySelector('main');
    this.dom.header = document.querySelector('header');
    this.dom.footer = document.querySelector('footer');

    // Elementos de la partida
    this.dom.diffBadge = document.getElementById('quiz-diff-badge');
    this.dom.qCounter = document.getElementById('quiz-q-counter');
    this.dom.progressBar = document.getElementById('quiz-progress-bar');
    this.dom.scoreVal = document.getElementById('quiz-score-val');
    this.dom.streakVal = document.getElementById('quiz-streak-val');
    this.dom.timerVal = document.getElementById('quiz-timer-val');

    this.dom.categoryBadge = document.getElementById('quiz-category-badge');
    this.dom.questionText = document.getElementById('quiz-question-text');
    this.dom.optionsContainer = document.getElementById('quiz-options-container');

    // Explicación
    this.dom.explanationCard = document.getElementById('quiz-explanation-card');
    this.dom.explanationText = document.getElementById('quiz-explanation-text');
    this.dom.explanationTitle = document.getElementById('quiz-explanation-title');
    this.dom.btnNextQuestion = document.getElementById('quiz-btn-next');

    // Pantalla Final
    this.dom.resultsCard = document.getElementById('quiz-results-card');
    this.dom.finalScore = document.getElementById('quiz-final-score');
    this.dom.finalCorrect = document.getElementById('quiz-final-correct');
    this.dom.finalRank = document.getElementById('quiz-final-rank');
    this.dom.finalHighScoreBadge = document.getElementById('quiz-new-high-badge');
    this.dom.finalRecordCompare = document.getElementById('quiz-record-compare');

    this.dom.gameplayArea = document.getElementById('quiz-gameplay-area');
  }

  bindEvents() {
    // Botones de inicio de GEOQUIZ desde el home
    const launchBtn = document.querySelector('[data-mode="geoquiz"]');
    if (launchBtn) {
      launchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openDifficultySelector();
      });
    }

    // Selector de dificultad
    document.querySelectorAll('.btn-select-diff').forEach((btn) => {
      btn.addEventListener('click', () => {
        const diff = btn.getAttribute('data-diff');
        this.startMatch(diff);
      });
    });

    // Botón siguiente pregunta
    if (this.dom.btnNextQuestion) {
      this.dom.btnNextQuestion.addEventListener('click', () => {
        this.nextQuestion();
      });
    }

    // Botones de pantalla final
    const btnPlayAgain = document.getElementById('quiz-btn-play-again');
    if (btnPlayAgain) {
      btnPlayAgain.addEventListener('click', () => {
        this.startMatch(this.difficulty);
      });
    }

    const btnChangeDiff = document.getElementById('quiz-btn-change-diff');
    if (btnChangeDiff) {
      btnChangeDiff.addEventListener('click', () => {
        this.dom.resultsCard.classList.add('hidden');
        this.openDifficultySelector();
      });
    }

    const btnExitQuiz = document.getElementById('quiz-btn-exit');
    if (btnExitQuiz) {
      btnExitQuiz.addEventListener('click', () => {
        this.exitToHome();
      });
    }

    const btnQuitMatch = document.getElementById('quiz-btn-quit-match');
    if (btnQuitMatch) {
      btnQuitMatch.addEventListener('click', () => {
        if (confirm('¿Deseas abortar la misión de GEOQUIZ y volver al centro de mando?')) {
          this.exitToHome();
        }
      });
    }
  }

  openDifficultySelector() {
    const modalDiff = document.getElementById('modal-quiz-difficulty');
    if (modalDiff) {
      modalDiff.classList.remove('hidden');
      if (window.soundEngine) window.soundEngine.playSonar();
    }
  }

  closeDifficultySelector() {
    const modalDiff = document.getElementById('modal-quiz-difficulty');
    if (modalDiff) {
      modalDiff.classList.add('hidden');
    }
  }

  startMatch(difficulty = 'facil') {
    this.closeDifficultySelector();
    this.difficulty = difficulty;

    // Filtrar preguntas por dificultad
    const filtered = window.GEOQUIZ_BANK.filter((q) => q.dificultad === difficulty);
    
    // Algoritmo Fisher-Yates para barajar sin repetir
    const shuffled = [...filtered];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Tomar 7 preguntas por partida (reducción del 30-35% para partidas más dinámicas)
    const QUESTIONS_PER_GAME = 7;
    this.questions = shuffled.slice(0, QUESTIONS_PER_GAME);
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.correctCount = 0;

    // Transición visual al modo GEOQUIZ
    this.dom.homeScreen.classList.add('hidden');
    this.dom.screen.classList.remove('hidden');
    this.dom.resultsCard.classList.add('hidden');
    this.dom.gameplayArea.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (window.soundEngine) window.soundEngine.playSonar();

    this.loadQuestion();
  }

  loadQuestion() {
    clearInterval(this.timerId);
    this.answered = false;

    const q = this.questions[this.currentIndex];
    if (!q) {
      this.finishMatch();
      return;
    }

    // Ocultar tarjeta de explicación previa
    this.dom.explanationCard.classList.add('hidden');

    // Actualizar marcadores superiores
    const totalQ = this.questions.length;
    this.dom.qCounter.innerText = `PREGUNTA ${this.currentIndex + 1} DE ${totalQ}`;
    this.dom.progressBar.style.width = `${((this.currentIndex) / totalQ) * 100}%`;
    this.dom.scoreVal.innerText = `${this.score.toLocaleString()} PTS`;
    this.dom.streakVal.innerText = `${this.streak}x`;

    // Etiqueta de dificultad
    const diffNames = { facil: 'FÁCIL', medio: 'INTERMEDIO', experto: 'EXPERTO' };
    this.dom.diffBadge.innerText = diffNames[this.difficulty] || 'TÁCTICO';
    this.dom.diffBadge.className = `text-[10px] font-mono font-bold px-2.5 py-1 rounded border ${
      this.difficulty === 'experto'
        ? 'bg-red-950/80 text-red-400 border-red-500/50'
        : this.difficulty === 'medio'
        ? 'bg-orange-950/80 text-orange-400 border-orange-500/50'
        : 'bg-cyan-950/80 text-cyan-400 border-cyan-500/50'
    }`;

    // Cargar contenido de la pregunta
    this.dom.categoryBadge.innerText = q.categoria.toUpperCase();
    this.dom.questionText.innerText = q.pregunta;

    // Renderizar las 4 opciones
    this.dom.optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.opciones.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.className = `quiz-option-btn group w-full p-4 rounded-xl text-left transition-all duration-200 border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 hover:border-cyan-400 flex items-center gap-4`;
      btn.innerHTML = `
        <span class="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-cyan-500 group-hover:text-slate-950 font-mono font-bold flex items-center justify-center shrink-0 transition">
          ${letters[idx]}
        </span>
        <span class="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-white flex-1 leading-snug">
          ${optText}
        </span>
      `;

      btn.addEventListener('click', () => {
        if (!this.answered) {
          this.handleAnswer(idx, q);
        }
      });

      this.dom.optionsContainer.appendChild(btn);
    });

    // Iniciar temporizador (20 segundos)
    this.timer = 20;
    this.dom.timerVal.innerText = `${this.timer}s`;
    this.dom.timerVal.className = 'font-mono font-bold text-cyan-400';

    this.timerId = setInterval(() => {
      this.timer--;
      this.dom.timerVal.innerText = `${this.timer}s`;

      if (this.timer <= 5) {
        this.dom.timerVal.className = 'font-mono font-bold text-red-500 animate-pulse';
      }

      if (this.timer <= 0) {
        clearInterval(this.timerId);
        this.handleTimeout(q);
      }
    }, 1000);
  }

  handleAnswer(selectedIdx, q) {
    this.answered = true;
    clearInterval(this.timerId);

    const isCorrect = selectedIdx === q.correcta;
    const allBtns = this.dom.optionsContainer.querySelectorAll('button');

    // Deshabilitar todos los botones
    allBtns.forEach((b, idx) => {
      b.classList.add('pointer-events-none');
      if (idx === q.correcta) {
        b.className = 'quiz-option-btn w-full p-4 rounded-xl text-left border-2 border-emerald-400 bg-emerald-950/60 text-white flex items-center gap-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]';
      } else if (idx === selectedIdx && !isCorrect) {
        b.className = 'quiz-option-btn w-full p-4 rounded-xl text-left border-2 border-red-500 bg-red-950/60 text-white flex items-center gap-4 shadow-[0_0_20px_rgba(239,68,68,0.3)]';
      } else {
        b.classList.add('opacity-40');
      }
    });

    if (isCorrect) {
      this.correctCount++;
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      if (window.storageManager) window.storageManager.recordQuizAnswer(true);

      // Cálculo de puntos
      const basePts = this.difficulty === 'experto' ? 350 : this.difficulty === 'medio' ? 200 : 100;
      const speedBonus = this.timer * 8;
      const streakBonus = (this.streak - 1) * 30;
      const earned = basePts + speedBonus + streakBonus;

      this.score += earned;

      if (window.soundEngine) window.soundEngine.playSonar();

      this.dom.explanationTitle.innerHTML = `<span class="text-emerald-400 flex items-center gap-1.5">✓ ¡CORRECTO! (+${earned} PTS)</span>`;
      this.dom.explanationCard.className = 'p-5 rounded-2xl border border-emerald-500/50 bg-slate-900/95 shadow-xl transition-all';
    } else {
      this.streak = 0;
      if (window.storageManager) window.storageManager.recordQuizAnswer(false);
      if (window.soundEngine) window.soundEngine.playAlert();

      this.dom.explanationTitle.innerHTML = `<span class="text-red-400 flex items-center gap-1.5">✕ RESPUESTA INCORRECTA</span>`;
      this.dom.explanationCard.className = 'p-5 rounded-2xl border border-red-500/50 bg-slate-900/95 shadow-xl transition-all';
    }

    // Actualizar marcadores inmediatos
    this.dom.scoreVal.innerText = `${this.score.toLocaleString()} PTS`;
    this.dom.streakVal.innerText = `${this.streak}x`;

    // Mostrar explicación didáctica
    this.dom.explanationText.innerText = q.explicacion;
    this.dom.explanationCard.classList.remove('hidden');

    // Cambiar texto de botón en la última pregunta
    if (this.currentIndex === this.questions.length - 1) {
      this.dom.btnNextQuestion.innerHTML = `<span>VER DEBRIEFING FINAL</span> <i data-lucide="award" class="w-4 h-4 ml-1"></i>`;
    } else {
      this.dom.btnNextQuestion.innerHTML = `<span>SIGUIENTE PREGUNTA</span> <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>`;
    }
    if (window.lucide) window.lucide.createIcons();
  }

  handleTimeout(q) {
    this.answered = true;
    this.streak = 0;
    if (window.soundEngine) window.soundEngine.playAlert();

    const allBtns = this.dom.optionsContainer.querySelectorAll('button');
    allBtns.forEach((b, idx) => {
      b.classList.add('pointer-events-none');
      if (idx === q.correcta) {
        b.className = 'quiz-option-btn w-full p-4 rounded-xl text-left border-2 border-emerald-400 bg-emerald-950/60 text-white flex items-center gap-4';
      } else {
        b.classList.add('opacity-30');
      }
    });

    this.dom.explanationTitle.innerHTML = `<span class="text-amber-400 flex items-center gap-1.5">⏱️ ¡TIEMPO AGOTADO!</span>`;
    this.dom.explanationCard.className = 'p-5 rounded-2xl border border-amber-500/50 bg-slate-900/95 shadow-xl transition-all';
    this.dom.explanationText.innerText = q.explicacion;
    this.dom.explanationCard.classList.remove('hidden');

    if (this.currentIndex === this.questions.length - 1) {
      this.dom.btnNextQuestion.innerHTML = `<span>VER DEBRIEFING FINAL</span> <i data-lucide="award" class="w-4 h-4 ml-1"></i>`;
    } else {
      this.dom.btnNextQuestion.innerHTML = `<span>SIGUIENTE PREGUNTA</span> <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>`;
    }
    if (window.lucide) window.lucide.createIcons();
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex >= this.questions.length) {
      this.finishMatch();
    } else {
      this.loadQuestion();
    }
  }

  finishMatch() {
    clearInterval(this.timerId);
    this.dom.progressBar.style.width = '100%';

    // Registrar en LocalStorage
    const prevDossier = window.storageManager.getDossier();
    const isNewRecord = this.score > prevDossier.geoquiz.highScore;

    window.storageManager.recordQuizScore(this.score, this.correctCount, this.questions.length, this.difficulty, this.maxStreak);
    if (typeof refreshDossierUI === 'function') refreshDossierUI();

    // Determinar Rango Táctico de la partida
    const totalQ = this.questions.length;
    let rankTitle = 'RECLUTA EN OBSERVACIÓN (RANGO D)';
    let rankColor = 'text-slate-400';
    if (this.correctCount === totalQ) {
      rankTitle = 'DIRECTOR DE INTELIGENCIA • RANGO S+';
      rankColor = 'text-cyan-400';
    } else if (this.correctCount >= Math.round(totalQ * 0.8)) {
      rankTitle = 'ESTRATEGA SENIOR DE CRISIS • RANGO A';
      rankColor = 'text-orange-400';
    } else if (this.correctCount >= Math.round(totalQ * 0.6)) {
      rankTitle = 'ANALISTA DE CHOKEPOINTS • RANGO B';
      rankColor = 'text-emerald-400';
    } else if (this.correctCount >= Math.max(1, Math.round(totalQ * 0.4))) {
      rankTitle = 'OPERADOR TÁCTICO JUNIOR • RANGO C';
      rankColor = 'text-amber-400';
    }

    this.dom.gameplayArea.classList.add('hidden');
    this.dom.resultsCard.classList.remove('hidden');

    this.dom.finalScore.innerText = `${this.score.toLocaleString()} PTS`;
    this.dom.finalCorrect.innerText = `${this.correctCount} / ${totalQ} Aciertos (${Math.round((this.correctCount / totalQ) * 100)}%)`;
    this.dom.finalRank.innerText = rankTitle;
    this.dom.finalRank.className = `text-lg sm:text-xl font-black ${rankColor} font-mono tracking-wide`;

    if (isNewRecord && this.score > 0) {
      this.dom.finalHighScoreBadge.classList.remove('hidden');
    } else {
      this.dom.finalHighScoreBadge.classList.add('hidden');
    }

    const currentHigh = window.storageManager.getDossier().geoquiz.highScore;
    this.dom.finalRecordCompare.innerText = `Récord Personal Actual: ${currentHigh.toLocaleString()} PTS`;

    if (window.soundEngine) {
      if (this.correctCount >= 7) {
        window.soundEngine.playSonar();
      } else {
        window.soundEngine.playAlert();
      }
    }

    if (window.lucide) window.lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  exitToHome() {
    clearInterval(this.timerId);
    this.dom.screen.classList.add('hidden');
    this.dom.homeScreen.classList.remove('hidden');
    if (typeof refreshDossierUI === 'function') refreshDossierUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.geoQuizEngine = new GeoQuizEngine();
  window.geoQuizEngine.init();
});
