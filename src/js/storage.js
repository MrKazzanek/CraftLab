/**
 * Storage Manager for AlcheMY
 * Handles localStorage persistence for progress, settings, and stats.
 */

const STORAGE_KEY = 'alchemy_game_state_v1';

const DEFAULT_STATE = {
  unlockedElements: [],
  unlockedAchievements: [],
  favorites: [],
  combinationCount: 0,
  currentStreak: 0,
  bestStreak: 0,
  failedCombinationCount: 0,
  discoveryHistory: [],
  settings: {
    theme: 'system',
    language: 'pl',
    allowDuplicateCrafting: false,
    soundEnabled: true,
    animationsEnabled: true
  }
};

export class StorageManager {
  constructor() {
    this.state = this.load();
    if (!Array.isArray(this.state.favorites)) {
      this.state.favorites = [];
    }
    if (typeof this.state.currentStreak !== 'number') this.state.currentStreak = 0;
    if (typeof this.state.bestStreak !== 'number') this.state.bestStreak = 0;
    if (typeof this.state.failedCombinationCount !== 'number') this.state.failedCombinationCount = 0;
  }

  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          ...DEFAULT_STATE,
          ...parsed,
          favorites: parsed.favorites || [],
          currentStreak: typeof parsed.currentStreak === 'number' ? parsed.currentStreak : 0,
          bestStreak: typeof parsed.bestStreak === 'number' ? parsed.bestStreak : 0,
          failedCombinationCount: typeof parsed.failedCombinationCount === 'number' ? parsed.failedCombinationCount : 0,
          settings: {
            ...DEFAULT_STATE.settings,
            ...(parsed.settings || {})
          }
        };
      }
    } catch (e) {
      console.warn('[StorageManager] Failed to read localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('[StorageManager] Failed to save localStorage:', e);
    }
  }

  initDefaultElements(startElements) {
    if (this.state.unlockedElements.length === 0) {
      startElements.forEach(el => {
        if (!this.state.unlockedElements.includes(el.id)) {
          this.state.unlockedElements.push(el.id);
          this.state.discoveryHistory.push({ id: el.id, timestamp: Date.now() });
        }
      });
      this.save();
    }
  }

  isElementUnlocked(id) {
    return this.state.unlockedElements.includes(id);
  }

  unlockElement(id) {
    if (!this.isElementUnlocked(id)) {
      this.state.unlockedElements.push(id);
      this.state.discoveryHistory.push({ id, timestamp: Date.now() });
      this.save();
      return true;
    }
    return false;
  }

  isFavorite(id) {
    return Array.isArray(this.state.favorites) && this.state.favorites.includes(id);
  }

  toggleFavorite(id) {
    if (!Array.isArray(this.state.favorites)) {
      this.state.favorites = [];
    }
    const idx = this.state.favorites.indexOf(id);
    if (idx !== -1) {
      this.state.favorites.splice(idx, 1);
      this.save();
      return false;
    } else {
      this.state.favorites.push(id);
      this.save();
      return true;
    }
  }

  isAchievementUnlocked(id) {
    return this.state.unlockedAchievements.includes(id);
  }

  unlockAchievement(id) {
    if (!this.isAchievementUnlocked(id)) {
      this.state.unlockedAchievements.push(id);
      this.save();
      return true;
    }
    return false;
  }

  incrementCombinationCount() {
    this.state.combinationCount++;
    this.save();
    return this.state.combinationCount;
  }

  incrementStreak() {
    this.state.currentStreak = (this.state.currentStreak || 0) + 1;
    this.state.bestStreak = Math.max(this.state.bestStreak || 0, this.state.currentStreak);
    this.save();
    return this.state.currentStreak;
  }

  resetStreak() {
    this.state.currentStreak = 0;
    this.save();
  }

  incrementFailedCount() {
    this.state.failedCombinationCount = (this.state.failedCombinationCount || 0) + 1;
    this.save();
    return this.state.failedCombinationCount;
  }

  updateSettings(newSettings) {
    this.state.settings = {
      ...this.state.settings,
      ...newSettings
    };
    this.save();
  }

  resetSettingsOnly() {
    this.state.settings = JSON.parse(JSON.stringify(DEFAULT_STATE.settings));
    this.save();
  }

  resetAllData(startElements) {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.initDefaultElements(startElements);
    this.save();
  }

  exportSaveData() {
    const exportObject = {
      game: 'CraftLab',
      version: 1,
      exportedAt: new Date().toISOString(),
      state: JSON.parse(JSON.stringify(this.state))
    };
    return JSON.stringify(exportObject, null, 2);
  }

  importSaveData(saveDataString, startElements) {
    try {
      if (!saveDataString || typeof saveDataString !== 'string') {
        throw new Error('Empty save data');
      }

      let parsed;
      try {
        parsed = JSON.parse(saveDataString);
      } catch (e) {
        const decoded = atob(saveDataString.trim());
        parsed = JSON.parse(decoded);
      }

      const importedState = parsed.state ? parsed.state : parsed;

      if (!importedState || !Array.isArray(importedState.unlockedElements)) {
        throw new Error('Invalid save structure: missing unlockedElements');
      }

      const newState = {
        ...DEFAULT_STATE,
        ...importedState,
        unlockedElements: Array.isArray(importedState.unlockedElements) ? importedState.unlockedElements : [],
        unlockedAchievements: Array.isArray(importedState.unlockedAchievements) ? importedState.unlockedAchievements : [],
        favorites: Array.isArray(importedState.favorites) ? importedState.favorites : [],
        combinationCount: typeof importedState.combinationCount === 'number' ? importedState.combinationCount : 0,
        discoveryHistory: Array.isArray(importedState.discoveryHistory) ? importedState.discoveryHistory : [],
        settings: {
          ...DEFAULT_STATE.settings,
          ...(importedState.settings || {})
        }
      };

      if (Array.isArray(startElements)) {
        startElements.forEach(el => {
          if (!newState.unlockedElements.includes(el.id)) {
            newState.unlockedElements.push(el.id);
            newState.discoveryHistory.push({ id: el.id, timestamp: Date.now() });
          }
        });
      }

      this.state = newState;
      this.save();
      return { success: true };
    } catch (err) {
      console.error('[StorageManager] Import failed:', err);
      return { success: false, error: err.message };
    }
  }
}

export const storage = new StorageManager();
