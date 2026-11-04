/**
 * WORLD CHAOS - PROFILE & ACHIEVEMENTS CONTROLLER
 * Maneja la pantalla de perfil local sin registro,
 * visualización de niveles (Principiante, Analista, Estratega, Experto),
 * vitrina de medallas y animaciones de condecoraciones desbloqueadas.
 */

class ProfileController {
  constructor() {
    this.dom = {
      modalProfile: document.getElementById('modal-profile'),
      btnOpenProfileNav: document.getElementById('btn-open-profile-nav'),
      btnOpenProfileHero: document.getElementById('btn-open-profile-hero'),
      btnCloseProfile: document.getElementById('btn-close-profile'),

      // Perfil - Cabecera
      inputCodename: document.getElementById('profile-input-codename'),
      btnSaveCodename: document.getElementById('profile-btn-save-codename'),
      levelBadge: document.getElementById('profile-level-badge'),
      totalXp: document.getElementById('profile-total-xp'),
      nextLevelInfo: document.getElementById('profile-next-level-info'),
      levelProgressBar: document.getElementById('profile-level-progress-bar'),

      // Medallas y estadísticas
      medalsGrid: document.getElementById('profile-medals-grid'),
      medalsUnlockedCount: document.getElementById('profile-medals-unlocked-count'),
      statQuizHigh: document.getElementById('profile-stat-quiz-high'),
      statQuizPlayed: document.getElementById('profile-stat-quiz-played'),
      statQuizStreak: document.getElementById('profile-stat-quiz-streak'),
      statBattleWins: document.getElementById('profile-stat-battle-wins'),
      statBattlePlayed: document.getElementById('profile-stat-battle-played'),
      statCrisisAverted: document.getElementById('profile-stat-crisis-averted'),
      statCrisisStability: document.getElementById('profile-stat-crisis-stability'),
      statDailyStreak: document.getElementById('profile-stat-daily-streak'),
      statDailyPlayed: document.getElementById('profile-stat-daily-played'),
      statGlobalAccuracy: document.getElementById('profile-stat-global-accuracy'),
      btnResetProfile: document.getElementById('profile-btn-reset'),

      // Notificación animada de medalla
      medalBanner: document.getElementById('medal-unlock-banner'),
      medalBannerIcon: document.getElementById('medal-banner-icon'),
      medalBannerName: document.getElementById('medal-banner-name'),
      medalBannerDesc: document.getElementById('medal-banner-desc'),
      btnDismissMedalBanner: document.getElementById('medal-banner-dismiss')
    };

    this.initEventListeners();
    this.listenToProgressionEvents();
    this.renderHomeHeroProfile();
  }

  initEventListeners() {
    if (this.dom.btnOpenProfileNav) {
      this.dom.btnOpenProfileNav.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playSonar();
        this.openProfileModal();
      });
    }

    if (this.dom.btnOpenProfileHero) {
      this.dom.btnOpenProfileHero.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playSonar();
        this.openProfileModal();
      });
    }

    if (this.dom.btnCloseProfile) {
      this.dom.btnCloseProfile.addEventListener('click', () => {
        if (window.soundEngine) window.soundEngine.playClick();
        this.closeProfileModal();
      });
    }

    if (this.dom.btnSaveCodename && this.dom.inputCodename) {
      this.dom.btnSaveCodename.addEventListener('click', () => {
        const val = this.dom.inputCodename.value;
        if (window.storageManager) {
          const updated = window.storageManager.updateCodename(val);
          this.dom.inputCodename.value = updated;
          if (window.soundEngine) window.soundEngine.playClick();
          this.renderHomeHeroProfile();
        }
      });
    }

    if (this.dom.btnResetProfile) {
      this.dom.btnResetProfile.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que deseas reiniciar todo tu expediente, récords y medallas locales?')) {
          if (window.storageManager) {
            window.storageManager.resetAllRecords();
            if (window.soundEngine) window.soundEngine.playAlert();
            this.refreshProfileUI();
            this.renderHomeHeroProfile();
            if (window.appMain && typeof window.appMain.updateRecordsUI === 'function') {
              window.appMain.updateRecordsUI();
            }
          }
        }
      });
    }

    if (this.dom.btnDismissMedalBanner) {
      this.dom.btnDismissMedalBanner.addEventListener('click', () => {
        this.hideMedalBanner();
      });
    }
  }

  listenToProgressionEvents() {
    window.addEventListener('medalUnlocked', (e) => {
      const medal = e.detail;
      this.showMedalUnlockAnimation(medal);
      this.renderHomeHeroProfile();
    });

    window.addEventListener('levelUp', (e) => {
      const { newLevel } = e.detail;
      this.showLevelUpNotification(newLevel);
      this.renderHomeHeroProfile();
    });
  }

  openProfileModal() {
    this.refreshProfileUI();
    if (this.dom.modalProfile) {
      this.dom.modalProfile.classList.remove('hidden');
    }
  }

  closeProfileModal() {
    if (this.dom.modalProfile) {
      this.dom.modalProfile.classList.add('hidden');
    }
    this.renderHomeHeroProfile();
  }

  refreshProfileUI() {
    if (!window.storageManager) return;
    const dossier = window.storageManager.getDossier();
    const progress = window.storageManager.getLevelProgress();

    // Nombre en clave
    if (this.dom.inputCodename) {
      this.dom.inputCodename.value = dossier.codename;
    }

    // Nivel
    if (this.dom.levelBadge) {
      this.dom.levelBadge.innerText = progress.level.name.toUpperCase();
      this.dom.levelBadge.className = `text-xs font-mono font-bold px-3 py-1 rounded border shadow-sm ${progress.level.badge}`;
    }

    if (this.dom.totalXp) {
      this.dom.totalXp.innerText = `${dossier.totalScore.toLocaleString()} XP`;
    }

    if (this.dom.nextLevelInfo) {
      if (progress.isMax) {
        this.dom.nextLevelInfo.innerText = 'Rango Máximo Alcanzado (Experto)';
      } else {
        this.dom.nextLevelInfo.innerText = `${progress.currentXp.toLocaleString()} / ${progress.maxXp.toLocaleString()} XP para ${progress.nextLevel.name} (${progress.percentage}%)`;
      }
    }

    if (this.dom.levelProgressBar) {
      this.dom.levelProgressBar.style.width = `${progress.percentage}%`;
    }

    // Vitrina de Medallas
    this.renderMedalsGrid(dossier.medals || []);

    // Estadísticas
    if (this.dom.statQuizHigh) this.dom.statQuizHigh.innerText = `${(dossier.geoquiz.highScore || 0).toLocaleString()} PTS`;
    if (this.dom.statQuizPlayed) this.dom.statQuizPlayed.innerText = dossier.geoquiz.gamesPlayed || 0;
    if (this.dom.statQuizStreak) this.dom.statQuizStreak.innerText = `${dossier.geoquiz.bestStreak || 0}x`;

    if (this.dom.statBattleWins) this.dom.statBattleWins.innerText = dossier.geobattle.victories || 0;
    if (this.dom.statBattlePlayed) this.dom.statBattlePlayed.innerText = dossier.geobattle.gamesPlayed || (dossier.geobattle.victories + (dossier.geobattle.defeats || 0));

    if (this.dom.statCrisisAverted) this.dom.statCrisisAverted.innerText = dossier.worldCrisis.crisesAverted || 0;
    if (this.dom.statCrisisStability) this.dom.statCrisisStability.innerText = `${dossier.worldCrisis.maxStabilityReached || 0}%`;

    if (this.dom.statDailyStreak) this.dom.statDailyStreak.innerText = `${dossier.daily.currentDayStreak || 0} días`;
    if (this.dom.statDailyPlayed) this.dom.statDailyPlayed.innerText = dossier.daily.totalDaysCompleted || 0;

    // Precisión global
    const totalQ = dossier.stats.totalQuestionsAnswered || 0;
    const correctQ = dossier.stats.totalCorrectAnswers || 0;
    const acc = totalQ > 0 ? Math.round((correctQ / totalQ) * 100) : 0;
    if (this.dom.statGlobalAccuracy) {
      this.dom.statGlobalAccuracy.innerText = `${acc}% (${correctQ}/${totalQ})`;
    }
  }

  renderMedalsGrid(medals) {
    if (!this.dom.medalsGrid) return;
    this.dom.medalsGrid.innerHTML = '';

    let unlockedCount = 0;

    medals.forEach((m) => {
      if (m.unlocked) unlockedCount++;

      const card = document.createElement('div');
      if (m.unlocked) {
        card.className = 'glass-panel p-4 rounded-xl border border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 flex items-start gap-3 relative shadow-md shadow-amber-950/20 group hover:border-amber-400 transition';
        card.innerHTML = `
          <div class="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl shrink-0">
            ${m.icon}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h5 class="text-xs font-bold text-white group-hover:text-amber-400 transition truncate">${m.name}</h5>
              <span class="text-[9px] font-mono text-emerald-400 uppercase font-bold">DESBLOQUEADA</span>
            </div>
            <p class="text-[11px] text-slate-300 leading-tight mt-1">${m.desc}</p>
          </div>
        `;
      } else {
        card.className = 'glass-panel p-4 rounded-xl border border-slate-800/80 bg-slate-950/40 opacity-50 flex items-start gap-3 relative hover:opacity-75 transition';
        card.innerHTML = `
          <div class="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xl shrink-0 grayscale">
            🔒
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h5 class="text-xs font-bold text-slate-400 truncate">${m.name}</h5>
              <span class="text-[9px] font-mono text-slate-500 uppercase">BLOQUEADA</span>
            </div>
            <p class="text-[11px] text-slate-500 leading-tight mt-1">${m.desc}</p>
          </div>
        `;
      }

      this.dom.medalsGrid.appendChild(card);
    });

    if (this.dom.medalsUnlockedCount) {
      this.dom.medalsUnlockedCount.innerText = `${unlockedCount} / ${medals.length} Desbloqueadas`;
    }
  }

  renderHomeHeroProfile() {
    if (!window.storageManager) return;
    const dossier = window.storageManager.getDossier();
    const progress = window.storageManager.getLevelProgress();

    const elCodename = document.getElementById('user-codename');
    const elLevelBadge = document.getElementById('user-level');
    const elRank = document.getElementById('user-rank');
    const elScore = document.getElementById('user-score');

    if (elCodename) elCodename.innerText = dossier.codename;
    if (elLevelBadge) {
      elLevelBadge.innerText = progress.level.name.toUpperCase();
      elLevelBadge.className = `px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${progress.level.badge}`;
    }
    if (elRank) {
      elRank.innerText = progress.isMax ? 'Nivel Máximo' : `${progress.currentXp.toLocaleString()} XP (Faltan ${progress.neededXp.toLocaleString()} para ${progress.nextLevel.name})`;
    }
    if (elScore) elScore.innerText = `${dossier.totalScore.toLocaleString()} PTS`;
  }

  showMedalUnlockAnimation(medal) {
    if (!this.dom.medalBanner) return;

    if (this.dom.medalBannerIcon) this.dom.medalBannerIcon.innerText = medal.icon;
    if (this.dom.medalBannerName) this.dom.medalBannerName.innerText = medal.name;
    if (this.dom.medalBannerDesc) this.dom.medalBannerDesc.innerText = medal.desc;

    this.dom.medalBanner.classList.remove('hidden');
    this.dom.medalBanner.classList.add('animate-bounce');

    // Auto-ocultar tras 6 segundos
    clearTimeout(this.medalBannerTimeout);
    this.medalBannerTimeout = setTimeout(() => {
      this.hideMedalBanner();
    }, 6000);
  }

  hideMedalBanner() {
    if (this.dom.medalBanner) {
      this.dom.medalBanner.classList.add('hidden');
      this.dom.medalBanner.classList.remove('animate-bounce');
    }
  }

  showLevelUpNotification(newLevel) {
    // Si la pancarta está disponible, muestra el ascenso de nivel
    if (!this.dom.medalBanner) return;

    if (this.dom.medalBannerIcon) this.dom.medalBannerIcon.innerText = '⚡';
    if (this.dom.medalBannerName) this.dom.medalBannerName.innerText = `¡ASCENSO A ${newLevel.name.toUpperCase()}!`;
    if (this.dom.medalBannerDesc) this.dom.medalBannerDesc.innerText = `Has alcanzado el rango de ${newLevel.name} con méritos tácticos globales.`;

    this.dom.medalBanner.classList.remove('hidden');
    this.dom.medalBanner.classList.add('animate-bounce');

    clearTimeout(this.medalBannerTimeout);
    this.medalBannerTimeout = setTimeout(() => {
      this.hideMedalBanner();
    }, 6000);
  }
}

// Inicialización global
document.addEventListener('DOMContentLoaded', () => {
  window.profileController = new ProfileController();
});
