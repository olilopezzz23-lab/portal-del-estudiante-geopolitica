/**
 * WORLD CHAOS - LocalStorage State, Records & Progression Manager
 * Gestiona el sistema de niveles (Principiante, Analista, Estratega, Experto),
 * banco de medallas y logros, rachas de respuestas, estadísticas globales
 * y registro del desafío diario en el navegador.
 */

const STORAGE_KEY = 'world_chaos_dossier_v2';

// 4 Niveles Oficiales Requeridos
const LEVEL_TIERS = [
  { id: 'principiante', name: 'Principiante', minXp: 0, maxXp: 1000, badge: 'border-slate-500 text-slate-300 bg-slate-900', color: '#94a3b8' },
  { id: 'analista', name: 'Analista', minXp: 1000, maxXp: 3500, badge: 'border-cyan-500 text-cyan-400 bg-cyan-950/60', color: '#00f0ff' },
  { id: 'estratega', name: 'Estratega', minXp: 3500, maxXp: 8000, badge: 'border-orange-500 text-orange-400 bg-orange-950/60', color: '#ff6b00' },
  { id: 'experto', name: 'Experto', minXp: 8000, maxXp: Infinity, badge: 'border-emerald-500 text-emerald-400 bg-emerald-950/60', color: '#10b981' }
];

// Banco Oficial de 12 Medallas por Logros
const OFFICIAL_MEDALS = [
  { id: 'MEDAL_FIRST_STEP', name: 'Bautismo de Fuego', icon: '🎖️', desc: 'Completa tu primera partida en cualquier modo de juego', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_QUIZ_STREAK_5', name: 'Cadencia Impecable', icon: '⚡', desc: 'Consigue una racha de 5 aciertos seguidos en GEOQUIZ', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_QUIZ_PERFECT', name: 'Mente Maestra', icon: '🧠', desc: 'Logra 7 de 7 aciertos en una sola partida de GEOQUIZ', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_QUIZ_EXPERT', name: 'Cerebro Estratégico', icon: '📚', desc: 'Supera GEOQUIZ en dificultad Experto con más del 70% de aciertos', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_BATTLE_FIRST_WIN', name: 'Primera Victoria', icon: '⚔️', desc: 'Gana tu primer enfrentamiento en GEOBATTLE', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_BATTLE_DOMINATION', name: 'Aplastamiento Total', icon: '👑', desc: 'Gana un enfrentamiento de GEOBATTLE con 7 o más categorías', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_BATTLE_GIANT_KILLER', name: 'David contra Goliat', icon: '🏹', desc: 'Vence a EE. UU. o China utilizando un país emergente', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_CRISIS_FIRST', name: 'Gabinete de Crisis', icon: '🛡️', desc: 'Resuelve tu primera situación de emergencia en WORLD CRISIS', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_CRISIS_HIGH_STABILITY', name: 'Pacificador Global', icon: '🕊️', desc: 'Alcanza un 80% o más de estabilidad en WORLD CRISIS', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_DAILY_CHALLENGER', name: 'Operativo Diario', icon: '📅', desc: 'Completa el Desafío Diario por primera vez', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_DAILY_STREAK_3', name: 'Disciplina de Hierro', icon: '🔥', desc: 'Completa el Desafío Diario durante 3 días consecutivos', unlocked: false, unlockedAt: null },
  { id: 'MEDAL_CHOKEPOINT_MASTER', name: 'Señor de los Mares', icon: '⚓', desc: 'Alcanza el rango máximo de Experto en la plataforma', unlocked: false, unlockedAt: null }
];

const DEFAULT_DOSSIER = {
  codename: 'OPERADOR_DELTA',
  levelName: 'Principiante',
  levelTier: 0,
  totalScore: 0, // Funciona como XP acumulada
  stats: {
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    globalBestStreak: 0,
    currentStreak: 0
  },
  geoquiz: {
    highScore: 0,
    gamesPlayed: 0,
    bestStreak: 0,
    perfectGames: 0,
    lastPlayed: null
  },
  geobattle: {
    victories: 0,
    defeats: 0,
    gamesPlayed: 0,
    highestMargin: 0,
    lastPlayed: null
  },
  worldCrisis: {
    crisesAverted: 0,
    maxStabilityReached: 0,
    lastPlayed: null
  },
  daily: {
    lastCompletedDate: null,
    todayScore: 0,
    currentDayStreak: 0,
    totalDaysCompleted: 0
  },
  medals: OFFICIAL_MEDALS
};

class StorageManager {
  constructor() {
    this.data = this.load();
    this.recalculateLevel(false);
  }

  load() {
    try {
      // Intentar cargar v2 primero
      const rawV2 = localStorage.getItem(STORAGE_KEY);
      if (rawV2) {
        const parsed = JSON.parse(rawV2);
        // Asegurar que todas las medallas oficiales existan
        const mergedMedals = OFFICIAL_MEDALS.map(m => {
          const existing = (parsed.medals || []).find(x => x.id === m.id);
          return existing ? { ...m, ...existing } : m;
        });
        return {
          ...DEFAULT_DOSSIER,
          ...parsed,
          stats: { ...DEFAULT_DOSSIER.stats, ...(parsed.stats || {}) },
          geoquiz: { ...DEFAULT_DOSSIER.geoquiz, ...(parsed.geoquiz || {}) },
          geobattle: { ...DEFAULT_DOSSIER.geobattle, ...(parsed.geobattle || {}) },
          worldCrisis: { ...DEFAULT_DOSSIER.worldCrisis, ...(parsed.worldCrisis || {}) },
          daily: { ...DEFAULT_DOSSIER.daily, ...(parsed.daily || {}) },
          medals: mergedMedals
        };
      }

      // Migrar desde v1 si existe
      const rawV1 = localStorage.getItem('world_chaos_dossier_v1');
      if (rawV1) {
        const p1 = JSON.parse(rawV1);
        const migrated = {
          ...DEFAULT_DOSSIER,
          codename: p1.codename || DEFAULT_DOSSIER.codename,
          totalScore: p1.totalScore || 0,
          geoquiz: { ...DEFAULT_DOSSIER.geoquiz, ...(p1.geoquiz || {}) },
          geobattle: { ...DEFAULT_DOSSIER.geobattle, ...(p1.geobattle || {}) },
          worldCrisis: { ...DEFAULT_DOSSIER.worldCrisis, ...(p1.worldCrisis || {}) }
        };
        return migrated;
      }
    } catch (e) {
      console.warn('[STORAGE] Error al cargar expediente, inicializando valores por defecto:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DOSSIER));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('[STORAGE] Error al guardar en localStorage:', e);
    }
  }

  getDossier() {
    return this.data;
  }

  updateCodename(name) {
    if (name && name.trim()) {
      const sanitized = name.trim().toUpperCase().replace(/[^A-Z0-9_\-]/g, '').slice(0, 16);
      if (sanitized) {
        this.data.codename = sanitized;
        this.save();
      }
    }
    return this.data.codename;
  }

  addXP(points) {
    if (points > 0) {
      this.data.totalScore += Math.round(points);
      this.recalculateLevel(true);
      this.save();
    }
  }

  recalculateLevel(notifyLevelUp = true) {
    const xp = this.data.totalScore;
    let newTier = 0;

    for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
      if (xp >= LEVEL_TIERS[i].minXp) {
        newTier = i;
        break;
      }
    }

    const oldTier = this.data.levelTier !== undefined ? this.data.levelTier : 0;
    this.data.levelTier = newTier;
    this.data.levelName = LEVEL_TIERS[newTier].name;

    // Verificar si ascendió de nivel
    if (notifyLevelUp && newTier > oldTier) {
      if (window.soundEngine) window.soundEngine.playLevelUp();
      window.dispatchEvent(new CustomEvent('levelUp', {
        detail: {
          newLevel: LEVEL_TIERS[newTier],
          oldLevel: LEVEL_TIERS[oldTier]
        }
      }));

      // Si llegó a Experto, medalla correspondiente
      if (newTier === 3) {
        this.unlockMedal('MEDAL_CHOKEPOINT_MASTER');
      }
    }

    return LEVEL_TIERS[newTier];
  }

  getLevelProgress() {
    const xp = this.data.totalScore;
    const currentTier = LEVEL_TIERS[this.data.levelTier || 0];
    
    if (currentTier.maxXp === Infinity) {
      return {
        level: currentTier,
        currentXp: xp,
        minXp: currentTier.minXp,
        maxXp: currentTier.minXp,
        neededXp: 0,
        percentage: 100,
        isMax: true
      };
    }

    const tierRange = currentTier.maxXp - currentTier.minXp;
    const progressInTier = Math.max(0, xp - currentTier.minXp);
    const pct = Math.min(100, Math.round((progressInTier / tierRange) * 100));

    return {
      level: currentTier,
      nextLevel: LEVEL_TIERS[this.data.levelTier + 1],
      currentXp: xp,
      minXp: currentTier.minXp,
      maxXp: currentTier.maxXp,
      neededXp: currentTier.maxXp - xp,
      percentage: pct,
      isMax: false
    };
  }

  recordQuizAnswer(isCorrect) {
    this.data.stats.totalQuestionsAnswered++;
    if (isCorrect) {
      this.data.stats.totalCorrectAnswers++;
      this.data.stats.currentStreak++;
      if (this.data.stats.currentStreak > this.data.stats.globalBestStreak) {
        this.data.stats.globalBestStreak = this.data.stats.currentStreak;
      }
      // Chequear medalla de racha de 5
      if (this.data.stats.currentStreak >= 5) {
        this.unlockMedal('MEDAL_QUIZ_STREAK_5');
      }
    } else {
      this.data.stats.currentStreak = 0;
    }
    this.save();
  }

  recordQuizScore(score, correctCount, totalQuestions, difficulty = 'facil', streak = 0) {
    this.data.geoquiz.gamesPlayed++;
    this.addXP(score);

    if (score > this.data.geoquiz.highScore) {
      this.data.geoquiz.highScore = score;
    }
    if (streak > this.data.geoquiz.bestStreak) {
      this.data.geoquiz.bestStreak = streak;
    }
    if (correctCount === totalQuestions && totalQuestions > 0) {
      this.data.geoquiz.perfectGames++;
      this.unlockMedal('MEDAL_QUIZ_PERFECT');
    }
    if (difficulty === 'experto' && (correctCount / totalQuestions) >= 0.7) {
      this.unlockMedal('MEDAL_QUIZ_EXPERT');
    }

    this.unlockMedal('MEDAL_FIRST_STEP');
    this.data.geoquiz.lastPlayed = new Date().toISOString();
    this.save();
  }

  recordBattleResult(winnerSide, slotAlpha, slotBeta, margin) {
    this.data.geobattle.gamesPlayed = (this.data.geobattle.gamesPlayed || 0) + 1;

    if (winnerSide !== 'TIE') {
      this.data.geobattle.victories++;
      this.addXP(400); // 400 XP por victoria en GeoBattle
      this.unlockMedal('MEDAL_FIRST_STEP');
      this.unlockMedal('MEDAL_BATTLE_FIRST_WIN');

      if (margin >= 7) {
        this.unlockMedal('MEDAL_BATTLE_DOMINATION');
      }

      // Comprobar "David contra Goliat"
      const winner = winnerSide === 'ALFA' ? slotAlpha : slotBeta;
      const loser = winnerSide === 'ALFA' ? slotBeta : slotAlpha;
      if (winner && loser) {
        const giants = ['USA', 'CHN'];
        const underdogs = ['PER', 'SGP', 'SAU', 'BRA', 'AUS', 'ESP', 'KOR'];
        if (giants.includes(loser.id) && underdogs.includes(winner.id)) {
          this.unlockMedal('MEDAL_BATTLE_GIANT_KILLER');
        }
      }
    } else {
      this.addXP(150); // XP por empate
    }

    this.data.geobattle.lastPlayed = new Date().toISOString();
    this.save();
  }

  recordCrisisResult(stabilityScore) {
    this.data.worldCrisis.crisesAverted++;
    this.addXP(stabilityScore * 8); // XP proporcional a la estabilidad

    if (stabilityScore > this.data.worldCrisis.maxStabilityReached) {
      this.data.worldCrisis.maxStabilityReached = stabilityScore;
    }

    this.unlockMedal('MEDAL_FIRST_STEP');
    this.unlockMedal('MEDAL_CRISIS_FIRST');

    if (stabilityScore >= 80) {
      this.unlockMedal('MEDAL_CRISIS_HIGH_STABILITY');
    }

    this.data.worldCrisis.lastPlayed = new Date().toISOString();
    this.save();
  }

  recordDailyResult(score) {
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastDate = this.data.daily.lastCompletedDate;

    // Calcular racha de días consecutivos
    let streak = this.data.daily.currentDayStreak || 0;
    if (lastDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);

      if (lastDate === yesterdayStr) {
        streak += 1;
      } else if (lastDate === todayStr) {
        // Ya jugado hoy
      } else {
        streak = 1;
      }
    } else {
      streak = 1;
    }

    this.data.daily.lastCompletedDate = todayStr;
    this.data.daily.todayScore = score;
    this.data.daily.currentDayStreak = streak;
    this.data.daily.totalDaysCompleted = (this.data.daily.totalDaysCompleted || 0) + 1;

    this.addXP(score + 300); // 300 XP extra de bonificación diaria
    this.unlockMedal('MEDAL_FIRST_STEP');
    this.unlockMedal('MEDAL_DAILY_CHALLENGER');

    if (streak >= 3) {
      this.unlockMedal('MEDAL_DAILY_STREAK_3');
    }

    this.save();
  }

  isDailyCompletedToday() {
    const todayStr = new Date().toISOString().slice(0, 10);
    return this.data.daily.lastCompletedDate === todayStr;
  }

  unlockMedal(medalId) {
    const medal = this.data.medals.find(m => m.id === medalId);
    if (medal && !medal.unlocked) {
      medal.unlocked = true;
      medal.unlockedAt = new Date().toISOString();
      this.addXP(500); // 500 XP de bonificación por medalla
      this.save();

      // Efecto sonoro
      if (window.soundEngine) window.soundEngine.playMedalFanfare();

      // Disparar evento para la animación gráfica
      window.dispatchEvent(new CustomEvent('medalUnlocked', {
        detail: medal
      }));
      return true;
    }
    return false;
  }

  resetAllRecords() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_DOSSIER));
    this.save();
    return this.data;
  }
}

window.storageManager = new StorageManager();
