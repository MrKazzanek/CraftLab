/**
 * App Controller for AlcheMY
 * Integrates DataLoader, StorageManager, AudioSynthesizer, AlchemyEngine, AchievementEngine, and ParticleSystem.
 */

import { dataLoader } from './dataLoader.js';
import { storage } from './storage.js';
import { audio } from './audio.js';
import { AlchemyEngine } from './alchemyEngine.js';
import { AchievementEngine } from './achievementEngine.js';
import { ParticleSystem } from './particleSystem.js';
import { graphics3D } from './graphics3d.js';

class AlcheMYApp {
  constructor() {
    this.alchemyEngine = null;
    this.achievementEngine = null;
    this.particleSystem = null;

    this.inputSlots = [null, null, null];
    this.outputSlot = null;

    this.currentSort = 'az';
    this.searchQuery = '';
    this.draggedElementId = null;
  }

  async init() {
    try {
      await dataLoader.loadAll();

      const startElements = dataLoader.getStartElements();
      storage.initDefaultElements(startElements);

      this.alchemyEngine = new AlchemyEngine(dataLoader.recipes, dataLoader, storage);
      this.achievementEngine = new AchievementEngine(dataLoader.achievements, storage, dataLoader);

      const canvas = document.getElementById('particleCanvas');
      if (canvas) {
        this.particleSystem = new ParticleSystem(canvas);
      }

      this.applyTheme(storage.state.settings.theme);
      this.applyAudio(storage.state.settings.soundEnabled !== false);
      this.applyAnimations(storage.state.settings.animationsEnabled !== false);
      this.bindEvents();
      this.renderAll();
      this.renderVersionBadge();
      this.registerServiceWorker();
    } catch (err) {
      console.error('[AlcheMYApp] Initialization error:', err);
    }
  }

  applyTheme(theme) {
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  applyAudio(enabled) {
    audio.enabled = enabled;
  }

  applyAnimations(enabled) {
    if (enabled) {
      document.documentElement.removeAttribute('data-animations');
      if (this.particleSystem) this.particleSystem.enabled = true;
    } else {
      document.documentElement.setAttribute('data-animations', 'disabled');
      if (this.particleSystem) {
        this.particleSystem.enabled = false;
        if (this.particleSystem.ctx && this.particleSystem.canvas) {
          this.particleSystem.ctx.clearRect(0, 0, this.particleSystem.canvas.width, this.particleSystem.canvas.height);
          this.particleSystem.particles = [];
        }
      }
    }
  }

  t(key) {
    return dataLoader.getTranslation(storage.state.settings.language, key);
  }

  renderAll() {
    this.renderTranslations();
    this.renderPedestal();
    this.renderCollectionGrid();
    this.renderCounter();
  }

  renderTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.placeholder = this.t('search_placeholder');
    }
  }

  renderCounter() {
    const totalCount = dataLoader.getAllElements().length;
    const unlockedCount = storage.state.unlockedElements.length;
    const counterEl = document.getElementById('discoveredCounter');

    if (counterEl) {
      const label = this.t('discovered_counter');
      const maxDisplay = unlockedCount >= totalCount ? totalCount : '?';
      counterEl.textContent = `${label}: ${unlockedCount} / ${maxDisplay}`;
    }
  }

  renderPedestal() {
    for (let i = 0; i < 3; i++) {
      const slotEl = document.getElementById(`inputSlot${i}`);
      if (!slotEl) continue;

      slotEl.innerHTML = '';
      const elementId = this.inputSlots[i];

      if (elementId) {
        const elData = dataLoader.getElement(elementId);
        if (elData) {
          const name = storage.state.settings.language === 'en' ? elData.name_eng : elData.name_pl;
          slotEl.classList.add('is-filled');
          slotEl.innerHTML = `
            <div class="slot-filled-content anim-spawn" title="${name}">
              <img src="${elData.textures_folder}" alt="${name}" draggable="false" />
              <span class="slot-element-name">${name}</span>
            </div>
          `;
        }
      } else {
        slotEl.classList.remove('is-filled');
        slotEl.innerHTML = `<span class="slot-empty-label">Slot ${i + 1}</span>`;
      }
    }

    const outputEl = document.getElementById('outputSlot');
    if (outputEl) {
      outputEl.innerHTML = '';
      if (this.outputSlot) {
        outputEl.classList.add('has-result');
        const elData = dataLoader.getElement(this.outputSlot.id);
        const name = storage.state.settings.language === 'en' ? elData.name_eng : elData.name_pl;
        outputEl.innerHTML = `
          <div class="slot-filled-content anim-spawn" title="${name}">
            <img src="${elData.textures_folder}" alt="${name}" draggable="false" />
            <span class="slot-element-name">${name}</span>
          </div>
        `;

        if (elData.model_type === '3D') {
          const badgeCanvas = document.createElement('canvas');
          badgeCanvas.width = 40;
          badgeCanvas.height = 40;
          badgeCanvas.style.position = 'absolute';
          badgeCanvas.style.top = '2px';
          badgeCanvas.style.right = '2px';
          badgeCanvas.style.pointerEvents = 'none';
          outputEl.appendChild(badgeCanvas);
          graphics3D.render3DBadge(badgeCanvas, elData.id, '#38bdf8');
        }
      } else {
        outputEl.classList.remove('has-result');
        outputEl.innerHTML = `<span class="slot-empty-label" data-i18n="output_slot">${this.t('output_slot')}</span>`;
      }
    }
  }

  renderCollectionGrid() {
    const gridEl = document.getElementById('elementsGrid');
    if (!gridEl) return;

    gridEl.innerHTML = '';
    const unlockedIds = storage.state.unlockedElements;
    let elements = unlockedIds.map(id => dataLoader.getElement(id)).filter(Boolean);

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      elements = elements.filter(el =>
        el.name_pl.toLowerCase().includes(q) ||
        el.name_eng.toLowerCase().includes(q) ||
        el.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    const lang = storage.state.settings.language;
    elements.sort((a, b) => {
      const isFavA = storage.isFavorite(a.id);
      const isFavB = storage.isFavorite(b.id);

      if (this.currentSort === 'favorites') {
        if (isFavA !== isFavB) return isFavB ? 1 : -1;
      }

      if (this.currentSort === 'az') {
        const nameA = lang === 'en' ? a.name_eng : a.name_pl;
        const nameB = lang === 'en' ? b.name_eng : b.name_pl;
        return nameA.localeCompare(nameB);
      } else if (this.currentSort === 'za') {
        const nameA = lang === 'en' ? a.name_eng : a.name_pl;
        const nameB = lang === 'en' ? b.name_eng : b.name_pl;
        return nameB.localeCompare(nameA);
      } else if (this.currentSort === 'newest') {
        const indexA = storage.state.discoveryHistory.findIndex(h => h.id === a.id);
        const indexB = storage.state.discoveryHistory.findIndex(h => h.id === b.id);
        return indexB - indexA;
      } else if (this.currentSort === 'oldest') {
        const indexA = storage.state.discoveryHistory.findIndex(h => h.id === a.id);
        const indexB = storage.state.discoveryHistory.findIndex(h => h.id === b.id);
        return indexA - indexB;
      } else if (this.currentSort === 'category') {
        return a.category.localeCompare(b.category);
      } else if (this.currentSort === 'rarity') {
        const rarityMap = { common: 1, uncommon: 2, rare: 3, epic: 4, legendary: 5 };
        return (rarityMap[b.rarity] || 0) - (rarityMap[a.rarity] || 0);
      }
      return 0;
    });

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window);

    elements.forEach(el => {
      const isFav = storage.isFavorite(el.id);
      const card = document.createElement('div');
      card.className = `grid-element-card rarity-border-${el.rarity} ${isFav ? 'is-favorite' : ''}`;
      card.setAttribute('draggable', isTouchDevice ? 'false' : 'true');
      card.dataset.elementId = el.id;

      const name = lang === 'en' ? el.name_eng : el.name_pl;
      const starSvg = isFav
        ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

      card.innerHTML = `
        <button class="fav-star-btn ${isFav ? 'active' : ''}" title="${isFav ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}">
          ${starSvg}
        </button>
        <span class="rarity-dot rarity-${el.rarity}"></span>
        <img src="${el.textures_folder}" alt="${name}" draggable="false" />
        <div class="el-name">${name}</div>
      `;

      const favBtn = card.querySelector('.fav-star-btn');
      if (favBtn) {
        ['pointerdown', 'pointerup', 'mousedown', 'mouseup', 'click', 'touchstart', 'touchend'].forEach(evt => {
          favBtn.addEventListener(evt, (e) => e.stopPropagation());
        });
        favBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const nowFav = storage.toggleFavorite(el.id);
          audio.playClick();
          this.showToast(nowFav ? this.t('recipe_tooltip.favorite_pinned') : this.t('recipe_tooltip.favorite_unpinned'), 'info');
          this.renderCollectionGrid();
        });
      }

      card.addEventListener('dragstart', (e) => {
        if (isTouchDevice) {
          e.preventDefault();
          return;
        }
        this.draggedElementId = el.id;
        e.dataTransfer.setData('text/plain', el.id);
        audio.playClick();
      });

      card.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.placeInAvailableSlot(el.id);
      });

      card.addEventListener('mouseenter', (e) => this.showRecipeTooltip(el, e));
      card.addEventListener('mousemove', (e) => this.updateTooltipPosition(e));
      card.addEventListener('mouseleave', () => this.hideRecipeTooltip());

      let clickTimer = null;
      let startX = 0, startY = 0, startTime = 0;
      card.addEventListener('pointerdown', (e) => {
        if (e.button === 2) return;
        startX = e.clientX;
        startY = e.clientY;
        startTime = Date.now();
      });

      card.addEventListener('pointerup', (e) => {
        if (e.button === 2) return;
        const dx = Math.abs(e.clientX - startX);
        const dy = Math.abs(e.clientY - startY);
        const dt = Date.now() - startTime;
        if (dx < 12 && dy < 12 && dt < 500) {
          if (clickTimer) {
            clearTimeout(clickTimer);
            clickTimer = null;
            this.openElementDetailsModal(el);
          } else {
            clickTimer = setTimeout(() => {
              clickTimer = null;
              this.placeInAvailableSlot(el.id);
            }, 220);
          }
        }
      });

      gridEl.appendChild(card);
    });
  }

  showRecipeTooltip(el, event) {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const tooltip = document.getElementById('recipeTooltip');
    if (!tooltip) return;

    const lang = storage.state.settings.language;
    const name = lang === 'en' ? el.name_eng : el.name_pl;
    const desc = lang === 'en' ? el.description_eng : el.description_pl;
    const rarityLabel = this.t(`rarities.${el.rarity}`) || el.rarity;
    const categoryLabel = this.t(`categories.${el.category}`) || el.category;

    let recipeHTML = '';
    if (el.start_element) {
      recipeHTML = `<div class="tooltip-recipe-line starter">✨ ${this.t('recipe_tooltip.base_element')}</div>`;
    } else {
      const recipes = this.alchemyEngine.getRecipesForResult(el.id);
      if (recipes && recipes.length > 0) {
        const knownRecipesHTML = recipes.map(rc => {
          const inputsHTML = rc.inputs.map(inpId => {
            const inpEl = dataLoader.getElement(inpId);
            const inpName = inpEl ? (lang === 'en' ? inpEl.name_eng : inpEl.name_pl) : inpId;
            const inpImg = inpEl ? inpEl.textures_folder : '';
            return `<span class="recipe-ingredient"><img src="${inpImg}" alt="" /> ${inpName}</span>`;
          }).join(' + ');
          return `<div class="tooltip-recipe-line">${inputsHTML}</div>`;
        }).join('');

        recipeHTML = `
          <div class="tooltip-recipe-header">${this.t('recipe_tooltip.recipe_title')}</div>
          ${knownRecipesHTML}
        `;
      } else {
        recipeHTML = `<div class="tooltip-recipe-line unknown">${this.t('recipe_tooltip.unknown_recipe')}</div>`;
      }
    }

    tooltip.innerHTML = `
      <div class="tooltip-header">
        <img src="${el.textures_folder}" class="tooltip-icon" alt="" />
        <div>
          <div class="tooltip-title">${name}</div>
          <div class="tooltip-badges">
            <span class="badge badge-cat">${categoryLabel}</span>
            <span class="badge badge-rarity rarity-${el.rarity}">${rarityLabel}</span>
          </div>
        </div>
      </div>
      <div class="tooltip-desc">${desc}</div>
      <div class="tooltip-recipe-box">${recipeHTML}</div>
    `;

    tooltip.classList.add('visible');
    this.updateTooltipPosition(event);
  }

  updateTooltipPosition(e) {
    const tooltip = document.getElementById('recipeTooltip');
    if (!tooltip || !tooltip.classList.contains('visible')) return;

    const offset = 15;
    let x = e.clientX + offset;
    let y = e.clientY + offset;

    const rect = tooltip.getBoundingClientRect();
    if (x + rect.width > window.innerWidth - 10) {
      x = e.clientX - rect.width - offset;
    }
    if (y + rect.height > window.innerHeight - 10) {
      y = e.clientY - rect.height - offset;
    }

    tooltip.style.left = `${Math.max(10, x)}px`;
    tooltip.style.top = `${Math.max(10, y)}px`;
  }

  hideRecipeTooltip() {
    const tooltip = document.getElementById('recipeTooltip');
    if (tooltip) {
      tooltip.classList.remove('visible');
    }
  }

  openElementDetailsModal(el) {
    const modal = document.getElementById('elementDetailsModal');
    const body = document.getElementById('elementModalBody');
    const title = document.getElementById('elementModalTitle');
    if (!modal || !body) return;

    const lang = storage.state.settings.language;
    const name = lang === 'en' ? el.name_eng : el.name_pl;
    const desc = lang === 'en' ? el.description_eng : el.description_pl;
    const rarityLabel = this.t(`rarities.${el.rarity}`) || el.rarity;
    const categoryLabel = this.t(`categories.${el.category}`) || el.category;

    if (title) title.textContent = name;

    const recipes = this.alchemyEngine.getRecipesForResult(el.id);
    let recipesHTML = '';
    if (el.start_element) {
      recipesHTML = `<p class="modal-detail-text">✨ ${this.t('recipe_tooltip.base_element')}</p>`;
    } else if (recipes && recipes.length > 0) {
      recipesHTML = recipes.map(rc => {
        const formula = rc.inputs.map(inpId => {
          const inpEl = dataLoader.getElement(inpId);
          const inpName = inpEl ? (lang === 'en' ? inpEl.name_eng : inpEl.name_pl) : inpId;
          const inpImg = inpEl ? inpEl.textures_folder : '';
          return `<span class="detail-formula-item"><img src="${inpImg}" alt="" /> ${inpName}</span>`;
        }).join(' <span class="plus-sign">+</span> ');

        return `<div class="detail-formula-card">${formula} = <strong>${name}</strong></div>`;
      }).join('');
    } else {
      recipesHTML = `<p class="modal-detail-text">${this.t('recipe_tooltip.unknown_recipe')}</p>`;
    }

    body.innerHTML = `
      <div class="element-detail-hero">
        <img src="${el.textures_folder}" alt="${name}" class="element-detail-img" />
        <div class="element-detail-tags">
          <span class="badge badge-cat">${categoryLabel}</span>
          <span class="badge badge-rarity rarity-${el.rarity}">${rarityLabel}</span>
        </div>
      </div>
      <p class="element-detail-desc">${desc}</p>
      <div class="element-detail-section">
        <h3>${this.t('element_modal.recipes')}</h3>
        ${recipesHTML}
      </div>
    `;

    modal.classList.add('active');
  }

  placeInAvailableSlot(elementId) {
    const openIndex = this.inputSlots.findIndex(slot => slot === null);
    if (openIndex !== -1) {
      this.inputSlots[openIndex] = elementId;
      audio.playDrop();
      this.renderPedestal();
    } else {
      audio.playError();
      this.showToast(this.t('notifications.slot_full'), 'error');
    }
  }

  clearPedestal(options = {}) {
    this.inputSlots = [null, null, null];
    this.outputSlot = null;
    audio.playClear();
    this.renderPedestal();
    if (!options.silent) {
      this.showToast(this.t('notifications.cleared'), 'info');
    }
  }

  handleCombine() {
    audio.playCombine();

    const rect = document.getElementById('outputSlot')?.getBoundingClientRect();
    if (rect && this.particleSystem) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      this.particleSystem.spawnSmoke(centerX, centerY, 20);
    }

    const res = this.alchemyEngine.combine(this.inputSlots);

    if (res.success) {
      this.outputSlot = res.resultElement;
      this.renderPedestal();

      if (rect && this.particleSystem) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        if (res.isNew) {
          this.particleSystem.spawnDiscoveryExplosion(centerX, centerY);
        } else {
          this.particleSystem.spawnBurst(centerX, centerY, '#60a5fa', 30);
        }
      }

      if (res.isNew) {
        audio.playDiscovery();
        const name = storage.state.settings.language === 'en' ? res.resultElement.name_eng : res.resultElement.name_pl;
        this.showToast(`${this.t('discovery_toast.title')}: ${name}`, 'discovery', res.resultElement.textures_folder);
      } else {
        audio.playDrop();
        this.showToast(this.t('notifications.already_discovered'), 'info');
      }

      const isTrio = this.inputSlots.filter(Boolean).length === 3;
      const newlyUnlocked = this.achievementEngine.evaluate({
        success: true,
        isTrio,
        recipe: res.recipe
      });

      this.inputSlots = [null, null, null];
      this.renderPedestal();

      newlyUnlocked.forEach(ach => {
        audio.playAchievement();
        const name = storage.state.settings.language === 'en' ? ach.name_eng : ach.name_pl;
        this.showToast(`${this.t('discovery_toast.achievement_unlocked')}: ${name}`, 'achievement', ach.icon);
      });

      this.renderCollectionGrid();
      this.renderCounter();
    } else {
      audio.playError();
      this.inputSlots = [null, null, null];
      this.renderPedestal();

      if (res.reason === 'duplicate_prevented') {
        this.showToast(this.t('notifications.duplicate_prevented'), 'warning');
      } else {
        this.showToast(this.t('notifications.invalid_combo'), 'error');
      }
    }
  }

  showToast(message, type = 'info', iconUrl = null) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast anim-toast';
    
    let iconHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    if (iconUrl) {
      iconHTML = `<img src="${iconUrl}" alt="" />`;
    }

    toast.innerHTML = `
      <div class="toast-icon">${iconHTML}</div>
      <div class="toast-body">
        <div class="toast-title">AlcheMY</div>
        <div class="toast-msg">${message}</div>
      </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-20px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  bindEvents() {
    document.getElementById('btnCombine')?.addEventListener('click', () => this.handleCombine());
    document.getElementById('btnClear')?.addEventListener('click', () => this.clearPedestal());

    document.getElementById('outputSlot')?.addEventListener('click', () => {
      if (this.outputSlot) {
        this.outputSlot = null;
        audio.playClear();
        this.renderPedestal();
      }
    });

    for (let i = 0; i < 3; i++) {
      const slotEl = document.getElementById(`inputSlot${i}`);
      if (!slotEl) continue;

      slotEl.addEventListener('click', () => {
        if (this.inputSlots[i]) {
          this.inputSlots[i] = null;
          audio.playClick();
          this.renderPedestal();
        }
      });

      slotEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.inputSlots[i]) {
          const currentId = this.inputSlots[i];
          const emptyIndex = this.inputSlots.findIndex(slot => slot === null);
          if (emptyIndex !== -1) {
            this.inputSlots[emptyIndex] = currentId;
            audio.playDrop();
            this.renderPedestal();
          } else {
            audio.playError();
            this.showToast(this.t('notifications.slot_full'), 'error');
          }
        }
      });

      slotEl.addEventListener('dragover', (e) => {
        e.preventDefault();
        slotEl.style.borderColor = 'var(--accent-color)';
      });

      slotEl.addEventListener('dragleave', () => {
        slotEl.style.borderColor = 'var(--border-color)';
      });

      slotEl.addEventListener('drop', (e) => {
        e.preventDefault();
        slotEl.style.borderColor = 'var(--border-color)';
        const id = e.dataTransfer.getData('text/plain') || this.draggedElementId;
        if (id) {
          this.inputSlots[i] = id;
          audio.playDrop();
          this.renderPedestal();
        }
      });
    }

    const searchInput = document.getElementById('searchInput');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderCollectionGrid();
    });

    const sortSelect = document.getElementById('sortSelect');
    sortSelect?.addEventListener('change', (e) => {
      this.currentSort = e.target.value;
      this.renderCollectionGrid();
    });

    document.getElementById('btnAchievements')?.addEventListener('click', () => this.openAchievementsModal());
    document.getElementById('btnSettings')?.addEventListener('click', () => this.openSettingsModal());
    
    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal-overlay');
        if (modal) modal.classList.remove('active');
      });
    });

    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  openAchievementsModal() {
    const modal = document.getElementById('achievementsModal');
    const body = document.getElementById('achievementsList');
    if (!modal || !body) return;

    body.innerHTML = '';
    const lang = storage.state.settings.language;

    dataLoader.achievements.forEach(ach => {
      const isUnlocked = storage.isAchievementUnlocked(ach.id);
      const isHiddenLocked = ach.hidden && !isUnlocked;

      const card = document.createElement('div');
      card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;

      let name = lang === 'en' ? ach.name_eng : ach.name_pl;
      let desc = lang === 'en' ? ach.description_eng : ach.description_pl;
      let iconSrc = ach.icon;

      if (isHiddenLocked) {
        name = lang === 'en' ? '??? Hidden Achievement' : '??? Ukryte Osiągnięcie';
        desc = lang === 'en' ? 'Keep playing to discover this secret!' : 'Odkrywaj nowe kombinacje, aby poznać to osiągnięcie!';
        iconSrc = '/assets/achievements/secret.png';
      }

      card.innerHTML = `
        <img src="${iconSrc}" alt="${name}" style="${isUnlocked ? '' : 'filter: grayscale(1) opacity(0.5);'}" />
        <div class="achievement-info">
          <div class="achievement-name">${name}</div>
          <div class="achievement-desc">${desc}</div>
        </div>
        <div class="achievement-status">
          ${isUnlocked ? '🏆' : '🔒'}
        </div>
      `;
      body.appendChild(card);
    });

    modal.classList.add('active');
  }

  openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (!modal) return;

    const themeSelect = document.getElementById('settingTheme');
    const langSelect = document.getElementById('settingLang');
    const dupToggle = document.getElementById('settingDupCraft');
    const soundToggle = document.getElementById('settingSound');
    const animToggle = document.getElementById('settingAnimations');

    if (themeSelect) themeSelect.value = storage.state.settings.theme;
    if (langSelect) langSelect.value = storage.state.settings.language;
    if (dupToggle) dupToggle.checked = storage.state.settings.allowDuplicateCrafting;
    if (soundToggle) soundToggle.checked = storage.state.settings.soundEnabled !== false;
    if (animToggle) animToggle.checked = storage.state.settings.animationsEnabled !== false;

    if (themeSelect) {
      themeSelect.onchange = (e) => {
        const theme = e.target.value;
        storage.updateSettings({ theme });
        this.applyTheme(theme);
      };
    }

    if (langSelect) {
      langSelect.onchange = (e) => {
        const language = e.target.value;
        storage.updateSettings({ language });
        this.renderAll();
      };
    }

    if (dupToggle) {
      dupToggle.onchange = (e) => {
        const allowDuplicateCrafting = e.target.checked;
        storage.updateSettings({ allowDuplicateCrafting });
      };
    }

    if (soundToggle) {
      soundToggle.onchange = (e) => {
        const soundEnabled = e.target.checked;
        storage.updateSettings({ soundEnabled });
        this.applyAudio(soundEnabled);
      };
    }

    if (animToggle) {
      animToggle.onchange = (e) => {
        const animationsEnabled = e.target.checked;
        storage.updateSettings({ animationsEnabled });
        this.applyAnimations(animationsEnabled);
      };
    }

    const btnExportSave = document.getElementById('btnExportSave');
    if (btnExportSave) {
      btnExportSave.onclick = () => {
        this.handleExportSave();
      };
    }

    const btnImportSave = document.getElementById('btnImportSave');
    const importSaveInput = document.getElementById('importSaveInput');
    if (btnImportSave && importSaveInput) {
      btnImportSave.onclick = () => {
        importSaveInput.click();
      };

      importSaveInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          this.handleImportSave(file);
          e.target.value = '';
        }
      };
    }

    const btnResetSettings = document.getElementById('btnResetSettings');
    if (btnResetSettings) {
      btnResetSettings.onclick = () => {
        storage.resetSettingsOnly();
        this.applyTheme(storage.state.settings.theme);
        this.applyAudio(storage.state.settings.soundEnabled !== false);
        this.applyAnimations(storage.state.settings.animationsEnabled !== false);
        this.renderAll();
        this.showToast(this.t('notifications.settings_restored'), 'info');
        modal.classList.remove('active');
      };
    }

    const btnResetData = document.getElementById('btnResetData');
    if (btnResetData) {
      btnResetData.onclick = () => {
        this.openConfirmResetModal();
      };
    }

    modal.classList.add('active');
  }

  handleExportSave() {
    try {
      const saveData = storage.exportSaveData();
      const blob = new Blob([saveData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const dateStr = new Date().toISOString().slice(0, 10);
      const filename = `craftlab_save_${dateStr}.clsave`;

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      this.showToast(this.t('settings_modal.export_success'), 'info');
    } catch (err) {
      console.error('[AlcheMYApp] Export error:', err);
      this.showToast(this.t('settings_modal.import_error'), 'error');
    }
  }

  handleImportSave(file) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const res = storage.importSaveData(content, dataLoader.getStartElements());
      if (res.success) {
        this.applyTheme(storage.state.settings.theme);
        this.applyAudio(storage.state.settings.soundEnabled !== false);
        this.applyAnimations(storage.state.settings.animationsEnabled !== false);
        this.clearPedestal({ silent: true });
        this.renderAll();
        this.showToast(this.t('settings_modal.import_success'), 'discovery');
        const modal = document.getElementById('settingsModal');
        if (modal) modal.classList.remove('active');
      } else {
        this.showToast(this.t('settings_modal.import_error'), 'error');
      }
    };
    reader.onerror = () => {
      this.showToast(this.t('settings_modal.import_error'), 'error');
    };
    reader.readAsText(file);
  }

  openConfirmResetModal() {
    const modal = document.getElementById('confirmResetModal');
    if (!modal) return;

    document.getElementById('btnConfirmResetYes').onclick = () => {
      storage.resetAllData(dataLoader.getStartElements());
      this.clearPedestal({ silent: true });
      this.renderAll();
      modal.classList.remove('active');
      document.getElementById('settingsModal')?.classList.remove('active');
      this.showToast(this.t('notifications.cleared'), 'info');
    };

    document.getElementById('btnConfirmResetNo').onclick = () => {
      modal.classList.remove('active');
    };

    modal.classList.add('active');
  }

  renderVersionBadge() {
    const badge = document.getElementById('gameVersionBadge');
    if (!badge) return;
    if (typeof window.formatGameVersion === 'function') {
      badge.textContent = window.formatGameVersion();
    }
  }

  registerServiceWorker() {
    if (!('serviceWorker' in navigator) || window.location.protocol === 'file:') return;

    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.addEventListener('updatefound', () => {
        const worker = reg.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            worker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });
    }).catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new AlcheMYApp();
  app.init();
});
