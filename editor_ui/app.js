/**
 * AlcheMY Generator - Frontend Application Logic
 */

let state = {
  elements: [],
  recipes: [],
  achievements: [],
  tags: [],
  categories: [],
  achievementIcons: [],
  activeElementId: null,
  activeRecipeId: null,
  activeAchievementId: null,
  activeTagId: null
};

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initEventListeners();
  loadData();
});

// ------------------------------------------------------------------
// DATA INITIALIZATION & FETCH
// ------------------------------------------------------------------
async function loadData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();

    state.elements = data.elements || [];
    state.recipes = data.recipes || [];
    state.achievements = data.achievements || [];
    state.tags = data.tags || [];
    state.categories = data.categories || [
      { id: 'basic', color: '#4a90e2', icon: 'sparkles' },
      { id: 'nature', color: '#2ecc71', icon: 'leaf' },
      { id: 'energy', color: '#f1c40f', icon: 'zap' },
      { id: 'weather', color: '#3498db', icon: 'cloud-rain' },
      { id: 'material', color: '#e67e22', icon: 'box' },
      { id: 'life', color: '#e74c3c', icon: 'heart' },
      { id: 'technology', color: '#9b59b6', icon: 'cpu' },
      { id: 'magic', color: '#1abc9c', icon: 'wand' }
    ];

    updateCounts();
    renderCategorySelects();
    renderElementsList();
    renderRecipesList();
    renderAchievementsList();
    renderTagsList();
    populateRecipeSelects();
    renderCategoryManagerList();
    fetchAchievementIcons();
    initSearchableSelects();
    loadGitStatus();
    loadVersionInfo();

    showToast('Pomyślnie załadowano dane gry!', 'success');
  } catch (err) {
    console.error('Failed to load data from API:', err);
    showToast(`Błąd pobierania danych z serwera: ${err.message || err}`, 'error');
  }
}

function updateCounts() {
  document.getElementById('countElements').textContent = state.elements.length;
  document.getElementById('countRecipes').textContent = state.recipes.length;
  document.getElementById('countAchievements').textContent = state.achievements.length;
  const countTagsEl = document.getElementById('countTags');
  if (countTagsEl) countTagsEl.textContent = state.tags.length;
}

// ------------------------------------------------------------------
// TAB NAVIGATION
// ------------------------------------------------------------------
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetTab).classList.add('active');

      if (targetTab === 'tabPublish') {
        loadGitStatus();
        loadVersionInfo();
      }
    });
  });
}

// ------------------------------------------------------------------
// EVENT LISTENERS
// ------------------------------------------------------------------
function initEventListeners() {
  document.getElementById('btnRefresh').addEventListener('click', loadData);
  document.getElementById('btnSaveAll').addEventListener('click', async () => {
    try {
      await fetch('/api/rebuild_bundle', { method: 'POST' });
      showToast('Zapisano i zsynchronizowano z plikami gry!', 'success');
    } catch (e) {
      showToast('Błąd podczas zapisu.', 'error');
    }
  });

  document.getElementById('searchElements').addEventListener('input', renderElementsList);
  document.getElementById('filterElementCategory').addEventListener('change', renderElementsList);
  document.getElementById('searchRecipes').addEventListener('input', renderRecipesList);
  document.getElementById('searchAchievements').addEventListener('input', renderAchievementsList);
  const searchTagsEl = document.getElementById('searchTags');
  if (searchTagsEl) searchTagsEl.addEventListener('input', renderTagsList);

  document.getElementById('btnNewElement').addEventListener('click', createNewElement);
  document.getElementById('btnNewRecipe').addEventListener('click', createNewRecipe);
  document.getElementById('btnNewAchievement').addEventListener('click', createNewAchievement);
  const btnNewTagEl = document.getElementById('btnNewTag');
  if (btnNewTagEl) btnNewTagEl.addEventListener('click', createNewTag);

  document.getElementById('elementForm').addEventListener('submit', handleElementSubmit);
  document.getElementById('btnDuplicateElement').addEventListener('click', duplicateCurrentElement);
  document.getElementById('btnDeleteElement').addEventListener('click', deleteCurrentElement);

  // Live ID validation on element ID field
  document.getElementById('el_id').addEventListener('input', debounce(async function() {
    const newId = this.value.trim().toLowerCase();
    if (!newId) return;
    await validateIdField('el_id', newId, state.activeElementId, 'element');
  }, 400));

  document.getElementById('recipeForm').addEventListener('submit', handleRecipeSubmit);
  document.getElementById('btnDeleteRecipe').addEventListener('click', deleteCurrentRecipe);
  document.getElementById('btnGenRecipeId').addEventListener('click', generateRecipeIdFromResult);

  ['rc_result', 'rc_inp0', 'rc_inp1', 'rc_inp2'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      updateWorkbenchVisuals();
      checkRecipeDuplicateLive();
    });
  });

  // Live ID validation on recipe ID field
  document.getElementById('rc_id').addEventListener('input', debounce(async function() {
    const newId = this.value.trim().toLowerCase();
    if (!newId) return;
    await validateIdField('rc_id', newId, state.activeRecipeId, 'recipe');
  }, 400));

  document.getElementById('achievementForm').addEventListener('submit', handleAchievementSubmit);
  document.getElementById('btnDeleteAchievement').addEventListener('click', deleteCurrentAchievement);
  document.getElementById('ac_type').addEventListener('change', updateAchievementTypeVisibility);
  document.getElementById('ac_icon').addEventListener('input', updateAchievementIconPreview);

  // Live ID validation on achievement ID field
  document.getElementById('ac_id').addEventListener('input', debounce(async function() {
    const newId = this.value.trim().toLowerCase();
    if (!newId) return;
    await validateIdField('ac_id', newId, state.activeAchievementId, 'achievement');
  }, 400));

  const tagFormEl = document.getElementById('tagForm');
  if (tagFormEl) tagFormEl.addEventListener('submit', handleTagSubmit);
  const btnDeleteTagEl = document.getElementById('btnDeleteTag');
  if (btnDeleteTagEl) btnDeleteTagEl.addEventListener('click', deleteCurrentTag);
  const tgElSearch = document.getElementById('tg_elements_search');
  if (tgElSearch) tgElSearch.addEventListener('input', filterTagElementCheckboxes);
  const btnTgSelAll = document.getElementById('btnTgSelectAll');
  if (btnTgSelAll) btnTgSelAll.addEventListener('click', selectAllVisibleTagElements);
  const btnTgDeselAll = document.getElementById('btnTgDeselectAll');
  if (btnTgDeselAll) btnTgDeselAll.addEventListener('click', deselectAllTagElements);

  const tgIdEl = document.getElementById('tg_id');
  if (tgIdEl) {
    tgIdEl.addEventListener('input', debounce(async function() {
      const newId = this.value.trim().toLowerCase();
      if (!newId) return;
      await validateIdField('tg_id', newId, state.activeTagId, 'tag');
    }, 400));
  }

  const btnQuickAdd = document.getElementById('btnQuickAddCategory');
  if (btnQuickAdd) {
    btnQuickAdd.addEventListener('click', () => {
      const catTabBtn = document.querySelector('[data-tab="tabSettings"]');
      if (catTabBtn) catTabBtn.click();
      document.getElementById('new_cat_id')?.focus();
    });
  }

  const catForm = document.getElementById('categoryAddForm');
  if (catForm) {
    catForm.addEventListener('submit', handleAddCategorySubmit);
  }

  document.getElementById('btnCheckIntegrity').addEventListener('click', runIntegrityCheck);
  document.getElementById('btnForceRebuild').addEventListener('click', async () => {
    await fetch('/api/rebuild_bundle', { method: 'POST' });
    showToast('Przebudowano pliki bundle JS!', 'success');
  });

  // Publish tab
  document.getElementById('btnPublish').addEventListener('click', handlePublish);
  document.getElementById('btnRefreshGitStatus').addEventListener('click', loadGitStatus);
  document.getElementById('btnRefreshVersion').addEventListener('click', loadVersionInfo);
  document.getElementById('btnVersionPatch').addEventListener('click', () => bumpVersion('patch'));
  document.getElementById('btnVersionRelease').addEventListener('click', () => bumpVersion('release'));
  document.getElementById('btnVersionSyncYear').addEventListener('click', () => bumpVersion('sync_year'));
}

// ------------------------------------------------------------------
// ID VALIDATION HELPERS
// ------------------------------------------------------------------
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

async function validateIdField(fieldId, newId, oldId, entityType) {
  const field = document.getElementById(fieldId);
  const feedbackId = `${fieldId}_feedback`;
  let feedback = document.getElementById(feedbackId);

  if (!feedback) {
    feedback = document.createElement('div');
    feedback.id = feedbackId;
    feedback.className = 'id-feedback';
    field.parentNode.appendChild(feedback);
  }

  if (!newId) {
    feedback.textContent = '';
    field.classList.remove('input-error', 'input-ok');
    return true;
  }

  try {
    const params = new URLSearchParams({ id: newId, type: entityType });
    if (oldId) params.append('old_id', oldId);
    const res = await fetch(`/api/check_id?${params}`);
    const data = await res.json();

    if (data.valid) {
      feedback.textContent = '✔ ID jest dostępne';
      feedback.className = 'id-feedback id-ok';
      field.classList.remove('input-error');
      field.classList.add('input-ok');
      return true;
    } else {
      feedback.textContent = `✖ ${data.conflicts[0]}`;
      feedback.className = 'id-feedback id-error';
      field.classList.remove('input-ok');
      field.classList.add('input-error');
      return false;
    }
  } catch (e) {
    return true; // Don't block on network error
  }
}

// Client-side duplicate recipe check (live feedback)
function checkRecipeDuplicateLive() {
  const inp0 = document.getElementById('rc_inp0').value;
  const inp1 = document.getElementById('rc_inp1').value;
  const inp2 = document.getElementById('rc_inp2').value;
  const result = document.getElementById('rc_result').value;

  const feedbackId = 'recipe_dup_feedback';
  let feedback = document.getElementById(feedbackId);
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.id = feedbackId;
    feedback.className = 'id-feedback';
    document.getElementById('recipeForm').querySelector('.form-group.full-width').prepend(feedback);
  }

  if (!inp0 || !inp1 || !result) {
    feedback.textContent = '';
    return;
  }

  const inputs = [inp0, inp1];
  if (inp2 && inp2 !== 'none') inputs.push(inp2);

  const normalizedNew = [...inputs].sort().join('|');

  const duplicate = state.recipes.find(rc => {
    if (rc.id === state.activeRecipeId) return false;
    const normalizedExisting = [...(rc.inputs || [])].sort().join('|');
    return normalizedExisting === normalizedNew && rc.result === result;
  });

  if (duplicate) {
    feedback.textContent = `⚠ Identyczna receptura już istnieje: "${duplicate.id}"`;
    feedback.className = 'id-feedback id-error';
  } else {
    feedback.textContent = '✔ Receptura jest unikalna';
    feedback.className = 'id-feedback id-ok';
  }
}

// ------------------------------------------------------------------
// ELEMENTS MANAGEMENT
// ------------------------------------------------------------------
function renderElementsList() {
  const container = document.getElementById('elementsList');
  const query = document.getElementById('searchElements').value.trim().toLowerCase();
  const categoryFilter = document.getElementById('filterElementCategory').value;

  container.innerHTML = '';

  const filtered = state.elements.filter(el => {
    const matchQuery = !query || el.id.toLowerCase().includes(query) || (el.name_pl && el.name_pl.toLowerCase().includes(query));
    const matchCat = categoryFilter === 'all' || el.category === categoryFilter;
    return matchQuery && matchCat;
  });

  filtered.forEach(el => {
    const tile = document.createElement('div');
    tile.className = `list-item-tile ${el.id === state.activeElementId ? 'active' : ''}`;

    tile.innerHTML = `
      <div class="item-info">
        <div class="item-title-row">
          <span class="item-id">${el.id}</span>
          <span class="item-subname">(${el.name_pl || ''})</span>
        </div>
        <div class="item-meta-row">
          <span class="badge badge-cat">${el.category || 'basic'}</span>
          <span class="badge badge-rarity ${el.rarity || 'common'}">${el.rarity || 'common'}</span>
          ${el.start_element ? '<span class="badge badge-start">Start</span>' : ''}
        </div>
      </div>
      <span style="color: var(--text-muted);">➔</span>
    `;

    tile.addEventListener('click', () => selectElement(el.id));
    container.appendChild(tile);
  });
}

function selectElement(id) {
  const el = state.elements.find(e => e.id === id);
  if (!el) return;

  state.activeElementId = id;
  renderElementsList();

  document.getElementById('elementPlaceholder').style.display = 'none';
  document.getElementById('elementEditorCard').style.display = 'block';

  document.getElementById('elementEditorTitle').textContent = `🔮 Edycja: ${el.id}`;

  document.getElementById('el_id').value = el.id || '';
  document.getElementById('el_name_pl').value = el.name_pl || '';
  document.getElementById('el_name_eng').value = el.name_eng || '';
  document.getElementById('el_category').value = el.category || 'basic';
  document.getElementById('el_rarity').value = el.rarity || 'common';
  document.getElementById('el_sort_order').value = el.sort_order || 99;
  document.getElementById('el_start_element').checked = !!el.start_element;
  document.getElementById('el_desc_pl').value = el.description_pl || '';
  document.getElementById('el_desc_eng').value = el.description_eng || '';
  document.getElementById('el_model_type').value = el.model_type || '3D';
  document.getElementById('el_model_path').value = el.model_path || '';
  document.getElementById('el_textures').value = el.textures_folder || '';
  document.getElementById('el_tags').value = (el.tags || []).join(', ');

  // Clear ID feedback when selecting
  clearFieldFeedback('el_id');
}

function clearFieldFeedback(fieldId) {
  const field = document.getElementById(fieldId);
  const feedback = document.getElementById(`${fieldId}_feedback`);
  if (field) { field.classList.remove('input-error', 'input-ok'); }
  if (feedback) { feedback.textContent = ''; feedback.className = 'id-feedback'; }
}

function createNewElement() {
  const newId = `element_${state.elements.length + 1}`;
  const newEl = {
    id: newId,
    name_pl: 'Nowy Składnik',
    name_eng: 'New Element',
    description_pl: 'Opis nowego składnika.',
    description_eng: 'Description of new element.',
    model_type: '3D',
    model_path: `/assets/models/${newId}.json`,
    textures_folder: `/assets/elements/${newId}.png`,
    rarity: 'common',
    category: 'basic',
    start_element: false,
    tags: ['custom'],
    sort_order: state.elements.length + 1
  };

  saveElement(newEl, null);
}

function duplicateCurrentElement() {
  if (!state.activeElementId) return;
  const orig = state.elements.find(e => e.id === state.activeElementId);
  if (!orig) return;

  const dupId = `${orig.id}_copy`;
  const dup = {
    ...orig,
    id: dupId,
    name_pl: `${orig.name_pl} (Kopia)`,
    name_eng: `${orig.name_eng} (Copy)`,
    start_element: false
  };

  saveElement(dup, null);
}

async function handleElementSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('el_id').value.trim().toLowerCase();
  if (!id) {
    showToast('ID składnika nie może być puste!', 'error');
    return;
  }

  // Block if ID is taken (by a different entity)
  const isValid = await validateIdField('el_id', id, state.activeElementId, 'element');
  if (!isValid) {
    showToast('Nie można zapisać — ID jest już zajęte!', 'error');
    return;
  }

  const tagsRaw = document.getElementById('el_tags').value;
  const tagsList = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);

  const elData = {
    id: id,
    name_pl: document.getElementById('el_name_pl').value.trim(),
    name_eng: document.getElementById('el_name_eng').value.trim(),
    category: document.getElementById('el_category').value,
    rarity: document.getElementById('el_rarity').value,
    sort_order: parseInt(document.getElementById('el_sort_order').value, 10) || 99,
    start_element: document.getElementById('el_start_element').checked,
    description_pl: document.getElementById('el_desc_pl').value.trim(),
    description_eng: document.getElementById('el_desc_eng').value.trim(),
    model_type: document.getElementById('el_model_type').value,
    model_path: document.getElementById('el_model_path').value.trim() || null,
    textures_folder: document.getElementById('el_textures').value.trim() || null,
    tags: tagsList
  };

  await saveElement(elData, state.activeElementId);
}

async function saveElement(elData, oldId) {
  try {
    const res = await fetch('/api/element/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ element: elData, old_id: oldId })
    });
    const result = await res.json();

    if (result.success) {
      const idx = state.elements.findIndex(e => e.id === (oldId || elData.id));
      if (idx !== -1) {
        state.elements[idx] = elData;
      } else {
        state.elements.push(elData);
      }

      state.activeElementId = elData.id;
      updateCounts();
      renderElementsList();
      populateRecipeSelects();
      selectElement(elData.id);
      showToast(`Autozapisano składnik '${elData.id}'!`, 'success');
      triggerAutosaveBadge();
    } else {
      showToast(result.error || 'Błąd zapisu.', 'error');
    }
  } catch (err) {
    showToast('Błąd sieci podczas zapisu.', 'error');
  }
}

async function deleteCurrentElement() {
  if (!state.activeElementId) return;
  const id = state.activeElementId;

  if (!confirm(`Czy na pewno chcesz usunąć składnik '${id}'?`)) return;

  try {
    const res = await fetch('/api/element/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    });
    const result = await res.json();

    if (result.success) {
      state.elements = state.elements.filter(e => e.id !== id);
      state.activeElementId = null;

      updateCounts();
      renderElementsList();
      populateRecipeSelects();

      document.getElementById('elementEditorCard').style.display = 'none';
      document.getElementById('elementPlaceholder').style.display = 'block';

      showToast(`Usunięto składnik '${id}'.`, 'success');
    }
  } catch (err) {
    showToast('Błąd podczas usuwania.', 'error');
  }
}

// ------------------------------------------------------------------
// RECIPES MANAGEMENT
// ------------------------------------------------------------------
function renderRecipesList() {
  const container = document.getElementById('recipesList');
  const query = document.getElementById('searchRecipes').value.trim().toLowerCase();

  container.innerHTML = '';

  const filtered = state.recipes.filter(rc => {
    if (!query) return true;
    const inputsStr = (rc.inputs || []).join(' ');
    return rc.id.toLowerCase().includes(query) || (rc.result && rc.result.toLowerCase().includes(query)) || inputsStr.toLowerCase().includes(query);
  });

  filtered.forEach(rc => {
    const tile = document.createElement('div');
    tile.className = `list-item-tile ${rc.id === state.activeRecipeId ? 'active' : ''}`;

    const inputsText = (rc.inputs || []).join(' + ');

    tile.innerHTML = `
      <div class="item-info">
        <div class="item-title-row">
          <span class="item-id">${rc.id}</span>
        </div>
        <div class="item-meta-row" style="margin-top: 0.3rem;">
          <span style="font-size: 0.8rem; color: var(--text-secondary);">${inputsText} ➔ </span>
          <span class="badge badge-cat" style="color: var(--accent-green); border-color: var(--accent-green);">${rc.result}</span>
        </div>
      </div>
      <span style="color: var(--text-muted);">➔</span>
    `;

    tile.addEventListener('click', () => selectRecipe(rc.id));
    container.appendChild(tile);
  });
}

function renderCategorySelects() {
  const catSelect = document.getElementById('el_category');
  const filterCatSelect = document.getElementById('filterElementCategory');
  const targetCatSelect = document.getElementById('ac_target_category');

  const currElCat = catSelect ? catSelect.value : '';
  const currFilterCat = filterCatSelect ? filterCatSelect.value : 'all';
  const currTargetCat = targetCatSelect ? targetCatSelect.value : '';

  if (catSelect) {
    catSelect.innerHTML = '';
    state.categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.id}`;
      catSelect.appendChild(opt);
    });
    if (currElCat && state.categories.some(c => c.id === currElCat)) {
      catSelect.value = currElCat;
    }
  }

  if (filterCatSelect) {
    filterCatSelect.innerHTML = '<option value="all">Wszystkie Kategorie</option>';
    state.categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.id}`;
      filterCatSelect.appendChild(opt);
    });
    filterCatSelect.value = currFilterCat;
  }

  if (targetCatSelect) {
    targetCatSelect.innerHTML = '';
    state.categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.id}`;
      targetCatSelect.appendChild(opt);
    });
    if (currTargetCat) targetCatSelect.value = currTargetCat;
  }
}

function renderCategoryManagerList() {
  const container = document.getElementById('categoryManagerList');
  if (!container) return;
  container.innerHTML = '';

  state.categories.forEach(c => {
    const row = document.createElement('div');
    row.className = 'cat-item-row';
    row.innerHTML = `
      <div style="display: flex; align-items: center;">
        <span class="cat-color-badge" style="background: ${c.color || '#4a90e2'};"></span>
        <strong style="color: var(--text-primary); font-size: 0.95rem;">${c.id}</strong>
        <span style="color: var(--text-muted); font-size: 0.8rem; margin-left: 0.5rem;">(${c.icon || 'tag'})</span>
      </div>
      <button type="button" class="btn btn-danger btn-sm" onclick="deleteCategory('${c.id}')">Usuń</button>
    `;
    container.appendChild(row);
  });
}

async function handleAddCategorySubmit(e) {
  e.preventDefault();
  const idInput = document.getElementById('new_cat_id');
  const colorInput = document.getElementById('new_cat_color');
  const iconInput = document.getElementById('new_cat_icon');

  const newId = idInput.value.trim().toLowerCase();
  if (!newId) return;

  if (state.categories.some(c => c.id === newId)) {
    showToast(`Kategoria '${newId}' już istnieje!`, 'error');
    return;
  }

  const newCat = {
    id: newId,
    color: colorInput.value || '#9b59b6',
    icon: iconInput.value.trim() || 'tag'
  };

  state.categories.push(newCat);
  await saveCategoriesToServer();

  idInput.value = '';
}

async function saveCategoriesToServer() {
  try {
    const res = await fetch('/api/category/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categories: state.categories })
    });
    const result = await res.json();
    if (result.success) {
      renderCategorySelects();
      renderCategoryManagerList();
      showToast('Zapisano kategorie!', 'success');
    } else {
      showToast(result.error || 'Błąd zapisu kategorii.', 'error');
    }
  } catch (e) {
    showToast('Błąd sieci przy zapisie kategorii.', 'error');
  }
}

window.deleteCategory = async function(catId) {
  if (state.categories.length <= 1) {
    showToast('Nie możesz usunąć ostatniej kategorii!', 'error');
    return;
  }
  if (!confirm(`Czy na pewno chcesz usunąć kategorię '${catId}'?`)) return;
  state.categories = state.categories.filter(c => c.id !== catId);
  await saveCategoriesToServer();
};

// ------------------------------------------------------------------
// SEARCHABLE COMBOBOX
// ------------------------------------------------------------------
class CustomSearchableCombobox {
  constructor(selectElement) {
    this.selectEl = selectElement;
    if (!this.selectEl || this.selectEl.comboboxInstance) return;

    this.selectEl.comboboxInstance = this;
    this.selectEl.style.display = 'none';

    this.wrapper = document.createElement('div');
    this.wrapper.className = 'custom-combobox';

    this.trigger = document.createElement('div');
    this.trigger.className = 'combobox-trigger';
    this.trigger.innerHTML = `
      <div class="combobox-trigger-content">
        <span class="combobox-trigger-text">-- Wybierz składnik --</span>
      </div>
      <span class="combobox-arrow">▼</span>
    `;

    this.dropdown = document.createElement('div');
    this.dropdown.className = 'combobox-dropdown';
    this.dropdown.innerHTML = `
      <div class="combobox-search-wrapper">
        <input type="text" class="combobox-search-input" placeholder="🔍 Szukaj po nazwie lub ID..." />
      </div>
      <div class="combobox-options-list"></div>
    `;

    this.wrapper.appendChild(this.trigger);
    this.wrapper.appendChild(this.dropdown);
    this.selectEl.parentNode.insertBefore(this.wrapper, this.selectEl.nextSibling);

    this.searchInput = this.dropdown.querySelector('.combobox-search-input');
    this.optionsList = this.dropdown.querySelector('.combobox-options-list');

    this.bindEvents();
    this.updateTriggerText();
  }

  bindEvents() {
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = this.wrapper.classList.contains('open');
      closeAllComboboxes();
      if (!isOpen) this.open();
    });

    this.searchInput.addEventListener('click', (e) => e.stopPropagation());
    this.searchInput.addEventListener('input', () => this.filterOptions());

    document.addEventListener('click', (e) => {
      if (!this.wrapper.contains(e.target)) this.close();
    });

    this.selectEl.addEventListener('change', () => {
      this.updateTriggerText();
    });
  }

  open() {
    this.renderOptions();
    this.wrapper.classList.add('open');
    this.searchInput.value = '';
    this.filterOptions();
    setTimeout(() => this.searchInput.focus(), 50);
  }

  close() {
    this.wrapper.classList.remove('open');
  }

  updateTriggerText() {
    const selectedOpt = this.selectEl.options && this.selectEl.selectedIndex >= 0 ? this.selectEl.options[this.selectEl.selectedIndex] : null;
    const triggerContent = this.trigger.querySelector('.combobox-trigger-content');
    if (!triggerContent) return;

    if (!selectedOpt || !selectedOpt.value || selectedOpt.value === 'none') {
      const txt = selectedOpt ? selectedOpt.textContent : '-- Wybierz składnik --';
      triggerContent.innerHTML = `<span class="combobox-trigger-text" style="color: var(--text-muted);">${txt}</span>`;
      return;
    }

    const val = selectedOpt.value;
    const el = state.elements.find(e => e.id === val);
    const tg = state.tags ? state.tags.find(t => t.id === val) : null;

    if (el) {
      triggerContent.innerHTML = `
        <img class="combobox-thumb" src="${el.textures_folder || ''}" onerror="this.style.display='none'" />
        <span class="combobox-trigger-text"><strong>${el.name_pl || el.id}</strong> <small style="color: var(--text-muted);">(${el.id})</small></span>
      `;
    } else if (tg) {
      triggerContent.innerHTML = `
        <span class="combobox-trigger-text">🏷️ <strong>${tg.name_pl || tg.id}</strong> <small style="color: var(--text-muted);">(${tg.id})</small></span>
      `;
    } else {
      triggerContent.innerHTML = `<span class="combobox-trigger-text">${selectedOpt.textContent}</span>`;
    }
  }

  renderOptions() {
    this.optionsList.innerHTML = '';
    const currentVal = this.selectEl.value;

    Array.from(this.selectEl.options).forEach(opt => {
      const val = opt.value;
      const text = opt.textContent;
      const el = state.elements.find(e => e.id === val);
      const tg = state.tags ? state.tags.find(t => t.id === val) : null;

      const item = document.createElement('div');
      item.className = `combobox-option-item ${val === currentVal ? 'selected' : ''}`;
      item.dataset.value = val;
      item.dataset.searchText = `${val} ${text} ${el ? (el.name_eng || '') + ' ' + (el.category || '') : ''} ${tg ? (tg.name_eng || '') : ''}`.toLowerCase();

      if (el) {
        item.innerHTML = `
          <div class="combobox-opt-left">
            <img class="combobox-thumb" src="${el.textures_folder || ''}" onerror="this.style.display='none'" />
            <div>
              <div class="combobox-opt-title">${el.name_pl || el.id}</div>
              <div class="combobox-opt-sub">${el.id}</div>
            </div>
          </div>
          <span class="badge badge-cat">${el.category || 'basic'}</span>
        `;
      } else if (tg) {
        item.innerHTML = `
          <div class="combobox-opt-left">
            <span style="font-size: 1.1rem; margin-right: 4px;">🏷️</span>
            <div>
              <div class="combobox-opt-title">${tg.name_pl || tg.id}</div>
              <div class="combobox-opt-sub">${tg.id}</div>
            </div>
          </div>
          <span class="badge badge-cat" style="background: #8e44ad; color: #fff;">Tag</span>
        `;
      } else {
        item.innerHTML = `
          <div class="combobox-opt-left">
            <div class="combobox-opt-title">${text}</div>
          </div>
        `;
      }

      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectEl.value = val;
        this.selectEl.dispatchEvent(new Event('change', { bubbles: true }));
        this.updateTriggerText();
        this.close();
      });

      this.optionsList.appendChild(item);
    });
  }

  filterOptions() {
    const q = this.searchInput.value.toLowerCase().trim();
    const items = this.optionsList.querySelectorAll('.combobox-option-item');
    items.forEach(item => {
      const searchTxt = item.dataset.searchText || '';
      item.style.display = (!q || searchTxt.includes(q)) ? 'flex' : 'none';
    });
  }
}

function closeAllComboboxes() {
  document.querySelectorAll('.custom-combobox').forEach(cb => cb.classList.remove('open'));
}

function initSearchableSelects() {
  ['rc_result', 'rc_inp0', 'rc_inp1', 'rc_inp2', 'ac_target_element'].forEach(id => {
    const sel = document.getElementById(id);
    if (sel && !sel.comboboxInstance) new CustomSearchableCombobox(sel);
  });
}

function updateAllComboboxes() {
  ['rc_result', 'rc_inp0', 'rc_inp1', 'rc_inp2', 'ac_target_element'].forEach(id => {
    const sel = document.getElementById(id);
    if (sel && sel.comboboxInstance) sel.comboboxInstance.updateTriggerText();
  });
}

function populateRecipeSelects() {
  const sortedElements = [...state.elements].sort((a, b) => a.id.localeCompare(b.id));
  const sortedTags = [...state.tags].sort((a, b) => a.id.localeCompare(b.id));

  ['rc_result', 'rc_inp0', 'rc_inp1', 'rc_inp2', 'ac_target_element'].forEach(selectId => {
    const sel = document.getElementById(selectId);
    if (!sel) return;

    const currVal = sel.value;
    sel.innerHTML = '';

    if (selectId === 'rc_inp2') {
      const optNone = document.createElement('option');
      optNone.value = 'none';
      optNone.textContent = '-- Brak (2 składniki) --';
      sel.appendChild(optNone);
    }

    // Add recipe tags for recipe inputs
    if (selectId !== 'rc_result' && selectId !== 'ac_target_element' && sortedTags.length > 0) {
      const tagGroup = document.createElement('optgroup');
      tagGroup.label = '🏷️ Tagi Recepturowe';
      sortedTags.forEach(tg => {
        const opt = document.createElement('option');
        opt.value = tg.id;
        opt.textContent = `🏷️ ${tg.name_pl || tg.id} (${tg.id})`;
        tagGroup.appendChild(opt);
      });
      sel.appendChild(tagGroup);
    }

    // Add elements
    const elGroup = document.createElement('optgroup');
    elGroup.label = '🔮 Składniki';
    sortedElements.forEach(el => {
      const opt = document.createElement('option');
      opt.value = el.id;
      opt.textContent = `${el.id} (${el.name_pl || ''})`;
      elGroup.appendChild(opt);
    });
    sel.appendChild(elGroup);

    if (currVal) sel.value = currVal;
  });

  updateAllComboboxes();
}

function selectRecipe(id) {
  const rc = state.recipes.find(r => r.id === id);
  if (!rc) return;

  state.activeRecipeId = id;
  renderRecipesList();

  document.getElementById('recipePlaceholder').style.display = 'none';
  document.getElementById('recipeEditorCard').style.display = 'block';

  document.getElementById('recipeEditorTitle').textContent = `📜 Edycja Receptury: ${rc.id}`;

  document.getElementById('rc_id').value = rc.id || '';
  document.getElementById('rc_result').value = rc.result || '';

  const inputs = rc.inputs || [];
  document.getElementById('rc_inp0').value = inputs[0] || '';
  document.getElementById('rc_inp1').value = inputs[1] || '';
  document.getElementById('rc_inp2').value = inputs[2] || 'none';

  document.getElementById('rc_hidden').checked = rc.hidden !== false;
  document.getElementById('rc_rarity_override').value = rc.rarity_override || 'none';

  clearFieldFeedback('rc_id');
  const dupFeedback = document.getElementById('recipe_dup_feedback');
  if (dupFeedback) { dupFeedback.textContent = ''; dupFeedback.className = 'id-feedback'; }

  updateWorkbenchVisuals();
  updateAllComboboxes();
}

function updateWorkbenchVisuals() {
  const inp0 = document.getElementById('rc_inp0').value;
  const inp1 = document.getElementById('rc_inp1').value;
  const inp2 = document.getElementById('rc_inp2').value;
  const res = document.getElementById('rc_result').value;

  const getDispText = (idVal) => {
    if (!idVal || idVal === 'none') return '--';
    const el = state.elements.find(e => e.id === idVal);
    if (el) return el.name_pl || el.id;
    const tg = state.tags ? state.tags.find(t => t.id === idVal) : null;
    if (tg) return `🏷️ ${tg.name_pl || tg.id}`;
    return idVal;
  };

  document.getElementById('benchSlot0Text').textContent = getDispText(inp0);
  document.getElementById('benchSlot1Text').textContent = getDispText(inp1);
  document.getElementById('benchResultText').textContent = getDispText(res);

  document.getElementById('benchSlot0').classList.toggle('active-filled', !!inp0);
  document.getElementById('benchSlot1').classList.toggle('active-filled', !!inp1);
  document.getElementById('benchResultSlot').classList.toggle('active-filled', !!res);

  if (inp2 && inp2 !== 'none') {
    document.getElementById('benchSlot2Group').style.display = 'flex';
    document.getElementById('benchSlot2Text').textContent = getDispText(inp2);
    document.getElementById('benchSlot2').classList.add('active-filled');
  } else {
    document.getElementById('benchSlot2Group').style.display = 'none';
  }
}

function generateRecipeIdFromResult() {
  const res = document.getElementById('rc_result').value;
  if (res) document.getElementById('rc_id').value = `recipe_${res}`;
}

function createNewRecipe() {
  if (state.elements.length < 2) {
    showToast('Potrzebujesz co najmniej 2 składników, aby stworzyć recepturę!', 'error');
    return;
  }

  const resultEl = state.elements[0].id;
  const newId = `recipe_${resultEl}_new`;
  const newRc = {
    id: newId,
    inputs: [state.elements[0].id, state.elements[1].id],
    result: resultEl,
    hidden: true
  };

  saveRecipe(newRc, null);
}

async function handleRecipeSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('rc_id').value.trim().toLowerCase();
  const result = document.getElementById('rc_result').value;
  const inp0 = document.getElementById('rc_inp0').value;
  const inp1 = document.getElementById('rc_inp1').value;
  const inp2 = document.getElementById('rc_inp2').value;

  // ID check
  const idValid = await validateIdField('rc_id', id, state.activeRecipeId, 'recipe');
  if (!idValid) {
    showToast('Nie można zapisać — ID receptury jest już zajęte!', 'error');
    return;
  }

  const inputs = [inp0, inp1];
  if (inp2 && inp2 !== 'none') inputs.push(inp2);

  // Duplicate recipe client-side check before sending
  const normalizedNew = [...inputs].sort().join('|');
  const duplicate = state.recipes.find(rc => {
    if (rc.id === state.activeRecipeId) return false;
    const normalizedExisting = [...(rc.inputs || [])].sort().join('|');
    return normalizedExisting === normalizedNew && rc.result === result;
  });

  if (duplicate) {
    showToast(`Nie można zapisać — identyczna receptura już istnieje: "${duplicate.id}"`, 'error');
    return;
  }

  const rcData = {
    id: id,
    inputs: inputs,
    result: result,
    hidden: document.getElementById('rc_hidden').checked
  };

  const rarityOv = document.getElementById('rc_rarity_override').value;
  if (rarityOv && rarityOv !== 'none') rcData.rarity_override = rarityOv;

  await saveRecipe(rcData, state.activeRecipeId);
}

async function saveRecipe(rcData, oldId) {
  try {
    const res = await fetch('/api/recipe/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipe: rcData, old_id: oldId })
    });
    const result = await res.json();

    if (result.success) {
      const idx = state.recipes.findIndex(r => r.id === (oldId || rcData.id));
      if (idx !== -1) {
        state.recipes[idx] = rcData;
      } else {
        state.recipes.push(rcData);
      }

      state.activeRecipeId = rcData.id;
      updateCounts();
      renderRecipesList();
      selectRecipe(rcData.id);
      showToast(`Autozapisano recepturę '${rcData.id}'!`, 'success');
      triggerAutosaveBadge();
    } else {
      showToast(result.error || 'Błąd zapisu receptury.', 'error');
    }
  } catch (err) {
    showToast('Błąd sieci podczas zapisu receptury.', 'error');
  }
}

async function deleteCurrentRecipe() {
  if (!state.activeRecipeId) return;
  const id = state.activeRecipeId;

  if (!confirm(`Czy na pewno chcesz usunąć recepturę '${id}'?`)) return;

  try {
    const res = await fetch('/api/recipe/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    });
    const result = await res.json();

    if (result.success) {
      state.recipes = state.recipes.filter(r => r.id !== id);
      state.activeRecipeId = null;

      updateCounts();
      renderRecipesList();

      document.getElementById('recipeEditorCard').style.display = 'none';
      document.getElementById('recipePlaceholder').style.display = 'block';

      showToast(`Usunięto recepturę '${id}'.`, 'success');
    }
  } catch (err) {
    showToast('Błąd podczas usuwania.', 'error');
  }
}

// ------------------------------------------------------------------
// ACHIEVEMENTS MANAGEMENT
// ------------------------------------------------------------------
function renderAchievementsList() {
  const container = document.getElementById('achievementsList');
  const query = document.getElementById('searchAchievements').value.trim().toLowerCase();

  container.innerHTML = '';

  const filtered = state.achievements.filter(ac => {
    if (!query) return true;
    return ac.id.toLowerCase().includes(query) || (ac.name_pl && ac.name_pl.toLowerCase().includes(query));
  });

  filtered.forEach(ac => {
    const tile = document.createElement('div');
    tile.className = `list-item-tile ${ac.id === state.activeAchievementId ? 'active' : ''}`;

    tile.innerHTML = `
      <div class="item-info">
        <div class="item-title-row">
          <span class="item-id">${ac.id}</span>
          <span class="item-subname">(${ac.name_pl || ''})</span>
        </div>
        <div class="item-meta-row">
          <span class="badge badge-cat">${ac.type || 'combination_count'}</span>
          <span class="badge badge-start">Val: ${ac.value || 1}</span>
        </div>
      </div>
      <span style="color: var(--text-muted);">➔</span>
    `;

    tile.addEventListener('click', () => selectAchievement(ac.id));
    container.appendChild(tile);
  });
}

function updateAchievementTypeVisibility() {
  const type = document.getElementById('ac_type').value;
  const valGroup = document.getElementById('ac_value_group');
  const targetElGroup = document.getElementById('ac_target_element_group');
  const targetCatGroup = document.getElementById('ac_target_category_group');
  const targetTagGroup = document.getElementById('ac_target_tag_group');

  valGroup.style.display = 'none';
  targetElGroup.style.display = 'none';
  targetCatGroup.style.display = 'none';
  if (targetTagGroup) targetTagGroup.style.display = 'none';

  if (['combination_count', 'crafting_streak', 'favorites_count', 'failed_combinations_count', 'element_count'].includes(type)) {
    valGroup.style.display = 'block';
  } else if (type === 'discover_specific_element' || type === 'element_unlocked') {
    targetElGroup.style.display = 'block';
  } else if (type === 'category_completed') {
    targetCatGroup.style.display = 'block';
  } else if (type === 'tag_crafted') {
    if (targetTagGroup) targetTagGroup.style.display = 'block';
  }
}

async function fetchAchievementIcons() {
  try {
    const res = await fetch('/api/achievement_icons');
    const data = await res.json();
    state.achievementIcons = data.icons || [];
    renderAchievementIconGallery();
  } catch (e) {
    console.warn('Failed to fetch achievement icons:', e);
  }
}

function renderAchievementIconGallery() {
  const container = document.getElementById('ac_icon_gallery');
  if (!container) return;

  container.innerHTML = '';
  state.achievementIcons.forEach(iconPath => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'icon-gallery-btn';
    btn.title = iconPath;
    btn.innerHTML = `<img src="${iconPath}" alt="" />`;

    btn.addEventListener('click', () => {
      document.getElementById('ac_icon').value = iconPath;
      updateAchievementIconPreview();
    });

    container.appendChild(btn);
  });
}

function updateAchievementIconPreview() {
  const iconVal = document.getElementById('ac_icon').value.trim();
  const previewImg = document.getElementById('ac_icon_preview');
  if (!previewImg) return;

  if (iconVal) {
    previewImg.src = iconVal;
    previewImg.style.display = 'block';
  } else {
    previewImg.style.display = 'none';
  }
}

function selectAchievement(id) {
  const ac = state.achievements.find(a => a.id === id);
  if (!ac) return;

  state.activeAchievementId = id;
  renderAchievementsList();

  document.getElementById('achievementPlaceholder').style.display = 'none';
  document.getElementById('achievementEditorCard').style.display = 'block';

  document.getElementById('achievementEditorTitle').textContent = `🏆 Edycja: ${ac.id}`;

  document.getElementById('ac_id').value = ac.id || '';
  document.getElementById('ac_name_pl').value = ac.name_pl || '';
  document.getElementById('ac_name_eng').value = ac.name_eng || '';
  document.getElementById('ac_type').value = ac.type || 'combination_count';
  document.getElementById('ac_value').value = ac.value || 1;
  document.getElementById('ac_target_element').value = ac.target_element || '';
  document.getElementById('ac_target_category').value = ac.target_category || '';
  const acTargetTagEl = document.getElementById('ac_target_tag');
  if (acTargetTagEl) acTargetTagEl.value = ac.target_tag || '';
  document.getElementById('ac_icon').value = ac.icon || '';
  document.getElementById('ac_hidden').checked = !!ac.hidden;
  document.getElementById('ac_desc_pl').value = ac.description_pl || '';
  document.getElementById('ac_desc_eng').value = ac.description_eng || '';

  clearFieldFeedback('ac_id');
  updateAchievementTypeVisibility();
  updateAchievementIconPreview();
  updateAllComboboxes();
}

function createNewAchievement() {
  const newId = `ach_${state.achievements.length + 1}`;
  const newAc = {
    id: newId,
    name_pl: 'Nowe Osiągnięcie',
    name_eng: 'New Achievement',
    description_pl: 'Opis nowego osiągnięcia.',
    description_eng: 'Description of new achievement.',
    icon: '/assets/achievements/spark.svg',
    type: 'combination_count',
    value: 5,
    hidden: false
  };

  saveAchievement(newAc, null);
}

async function handleAchievementSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('ac_id').value.trim().toLowerCase();
  const acType = document.getElementById('ac_type').value;

  const idValid = await validateIdField('ac_id', id, state.activeAchievementId, 'achievement');
  if (!idValid) {
    showToast('Nie można zapisać — ID osiągnięcia jest już zajęte!', 'error');
    return;
  }

  const acData = {
    id: id,
    name_pl: document.getElementById('ac_name_pl').value.trim(),
    name_eng: document.getElementById('ac_name_eng').value.trim(),
    type: acType,
    value: parseInt(document.getElementById('ac_value').value, 10) || 1,
    icon: document.getElementById('ac_icon').value.trim(),
    hidden: document.getElementById('ac_hidden').checked,
    description_pl: document.getElementById('ac_desc_pl').value.trim(),
    description_eng: document.getElementById('ac_desc_eng').value.trim()
  };

  if (acType === 'discover_specific_element' || acType === 'element_unlocked') {
    acData.target_element = document.getElementById('ac_target_element').value;
  }
  if (acType === 'category_completed') {
    acData.target_category = document.getElementById('ac_target_category').value;
  }
  if (acType === 'tag_crafted') {
    const tagVal = document.getElementById('ac_target_tag') ? document.getElementById('ac_target_tag').value : '';
    if (tagVal) acData.target_tag = tagVal;
  }

  await saveAchievement(acData, state.activeAchievementId);
}

async function saveAchievement(acData, oldId) {
  try {
    const res = await fetch('/api/achievement/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ achievement: acData, old_id: oldId })
    });
    const result = await res.json();

    if (result.success) {
      const idx = state.achievements.findIndex(a => a.id === (oldId || acData.id));
      if (idx !== -1) {
        state.achievements[idx] = acData;
      } else {
        state.achievements.push(acData);
      }

      state.activeAchievementId = acData.id;
      updateCounts();
      renderAchievementsList();
      selectAchievement(acData.id);
      showToast(`Autozapisano osiągnięcie '${acData.id}'!`, 'success');
      triggerAutosaveBadge();
    } else {
      showToast(result.error || 'Błąd zapisu.', 'error');
    }
  } catch (err) {
    showToast('Błąd sieci podczas zapisu.', 'error');
  }
}

async function deleteCurrentAchievement() {
  if (!state.activeAchievementId) return;
  const id = state.activeAchievementId;

  if (!confirm(`Czy na pewno chcesz usunąć osiągnięcie '${id}'?`)) return;

  try {
    const res = await fetch('/api/achievement/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id })
    });
    const result = await res.json();

    if (result.success) {
      state.achievements = state.achievements.filter(a => a.id !== id);
      state.activeAchievementId = null;

      updateCounts();
      renderAchievementsList();

      document.getElementById('achievementEditorCard').style.display = 'none';
      document.getElementById('achievementPlaceholder').style.display = 'block';

      showToast(`Usunięto osiągnięcie '${id}'.`, 'success');
    }
  } catch (err) {
    showToast('Błąd podczas usuwania.', 'error');
  }
}

// ------------------------------------------------------------------
// TOOLS & INTEGRITY
// ------------------------------------------------------------------
async function runIntegrityCheck() {
  try {
    const res = await fetch('/api/integrity');
    const result = await res.json();

    const box = document.getElementById('integrityReportBox');
    const title = document.getElementById('integrityReportTitle');
    const list = document.getElementById('integrityReportList');

    box.style.display = 'block';
    list.innerHTML = '';

    if (result.issues.length === 0) {
      title.textContent = '🟢 Wszystkie dane są w 100% poprawne i spójne!';
      title.style.color = 'var(--accent-green)';
    } else {
      title.textContent = `🔴 Znaleziono ${result.issues.length} uwag dotyczących spójności danych:`;
      title.style.color = 'var(--accent-red)';

      result.issues.forEach(iss => {
        const li = document.createElement('li');
        li.textContent = iss;
        list.appendChild(li);
      });
    }
  } catch (err) {
    showToast('Błąd podczas sprawdzania spójności.', 'error');
  }
}

// ------------------------------------------------------------------
// VERSION MANAGEMENT
// ------------------------------------------------------------------
async function loadVersionInfo() {
  const formattedEl = document.getElementById('versionFormatted');
  const detailEl = document.getElementById('versionDetail');
  if (!formattedEl || !detailEl) return;

  try {
    const res = await fetch('/api/version');
    if (!res.ok) {
      throw new Error(res.status === 404
        ? 'Stary serwer generatora — zamknij go i uruchom run_generator.bat ponownie.'
        : `HTTP ${res.status}`);
    }
    const data = await res.json();
    const v = data.version || {};
    formattedEl.textContent = data.formatted || '—';
    detailEl.innerHTML = `Rok: <strong>${v.year || '—'}</strong> · Wydanie: <strong>${String(v.release || 0).padStart(2, '0')}</strong> · Bugfix: <strong>${v.patch || '—'}</strong><br><span style="font-size:0.82rem;opacity:0.85;">Plik: <code>data/version.js</code> · cache PWA: <code>sw.js</code></span>`;
  } catch (err) {
    formattedEl.textContent = '—';
    detailEl.innerHTML = `<span style="color: var(--accent-red);">${err.message || 'Błąd pobierania wersji.'}</span><br><span style="font-size:0.82rem;">Zamknij wszystkie okna generatora i uruchom ponownie <code>run_generator.bat</code>.</span>`;
  }
}

async function bumpVersion(type) {
  const outputBox = document.getElementById('versionOutput');
  const buttons = [
    document.getElementById('btnVersionPatch'),
    document.getElementById('btnVersionRelease'),
    document.getElementById('btnVersionSyncYear'),
  ];

  buttons.forEach((btn) => { if (btn) btn.disabled = true; });
  if (outputBox) {
    outputBox.style.display = 'block';
    outputBox.className = 'version-output';
    outputBox.textContent = 'Aktualizacja wersji...';
  }

  try {
    const res = await fetch('/api/version/bump', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type }),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      throw new Error('Stary serwer generatora — zamknij go i uruchom run_generator.bat ponownie.');
    }

    if (!res.ok && !data) {
      throw new Error(res.status === 404
        ? 'Endpoint /api/version/bump nie istnieje — zrestartuj generator.'
        : `HTTP ${res.status}`);
    }

    if (data.success) {
      if (outputBox) {
        outputBox.className = 'version-output success';
        outputBox.textContent = `✅ Wersja zaktualizowana: ${data.formatted}`;
      }
      showToast(`Wersja: ${data.formatted}`, 'success');
      loadVersionInfo();
    } else {
      if (outputBox) {
        outputBox.className = 'version-output error';
        outputBox.textContent = `❌ ${data.error || 'Błąd aktualizacji wersji'}`;
      }
      showToast(data.error || 'Błąd aktualizacji wersji', 'error');
    }
  } catch (err) {
    if (outputBox) {
      outputBox.className = 'version-output error';
      outputBox.textContent = `❌ Błąd sieci: ${err.message}`;
    }
    showToast('Błąd sieci podczas aktualizacji wersji', 'error');
  } finally {
    buttons.forEach((btn) => { if (btn) btn.disabled = false; });
  }
}

// ------------------------------------------------------------------
// PUBLISH TO GITHUB
// ------------------------------------------------------------------
async function loadGitStatus() {
  const statusBox = document.getElementById('gitStatusBox');
  const remoteEl = document.getElementById('gitRemote');
  const branchEl = document.getElementById('gitBranch');
  const logEl = document.getElementById('gitLog');
  const changesEl = document.getElementById('gitChanges');

  if (!statusBox) return;

  statusBox.innerHTML = '<span style="color: var(--text-muted);">Ładowanie statusu git...</span>';

  try {
    const res = await fetch('/api/git/status');
    const data = await res.json();

    if (!data.available) {
      statusBox.innerHTML = `<span style="color: var(--accent-red);">⚠ Git niedostępny: ${data.error || 'Nieznany błąd'}</span>`;
      return;
    }

    statusBox.innerHTML = '';

    // Remote & branch
    const infoRow = document.createElement('div');
    infoRow.className = 'git-info-row';
    infoRow.innerHTML = `
      <div class="git-info-item">
        <span class="git-info-label">🌐 Remote:</span>
        <a href="${data.remote || '#'}" target="_blank" class="git-remote-link">${data.remote || 'brak'}</a>
      </div>
      <div class="git-info-item">
        <span class="git-info-label">🌿 Branch:</span>
        <span class="git-branch-badge">${data.branch || 'main'}</span>
      </div>
    `;
    statusBox.appendChild(infoRow);

    // Set branch input default
    const branchInput = document.getElementById('publishBranch');
    if (branchInput && data.branch) branchInput.value = data.branch;

    // Changed files
    if (data.status) {
      const changesDiv = document.createElement('div');
      changesDiv.className = 'git-section';
      changesDiv.innerHTML = `
        <div class="git-section-title">📝 Niezatwierdzone zmiany:</div>
        <pre class="git-pre git-changes">${data.status}</pre>
      `;
      statusBox.appendChild(changesDiv);
    } else {
      const noChanges = document.createElement('div');
      noChanges.className = 'git-section';
      noChanges.innerHTML = `<span style="color: var(--accent-green);">✔ Brak niezatwierdzonych zmian.</span>`;
      statusBox.appendChild(noChanges);
    }

    // Commit log
    if (data.log) {
      const logDiv = document.createElement('div');
      logDiv.className = 'git-section';
      logDiv.innerHTML = `
        <div class="git-section-title">📋 Ostatnie 10 commitów:</div>
        <pre class="git-pre git-log">${data.log}</pre>
      `;
      statusBox.appendChild(logDiv);
    }

  } catch (err) {
    statusBox.innerHTML = `<span style="color: var(--accent-red);">Błąd połączenia z API git.</span>`;
  }
}

async function handlePublish() {
  const msgInput = document.getElementById('publishMessage');
  const branchInput = document.getElementById('publishBranch');
  const outputBox = document.getElementById('publishOutput');
  const btn = document.getElementById('btnPublish');

  const message = msgInput.value.trim() || `AlcheMY ${document.getElementById('versionFormatted')?.textContent || ''} — ${new Date().toLocaleString('pl-PL')}`;
  const branch = branchInput.value.trim() || 'main';

  btn.disabled = true;
  btn.textContent = '⏳ Publikowanie...';
  outputBox.style.display = 'block';
  outputBox.className = 'publish-output';
  outputBox.textContent = 'Trwa publikowanie na GitHub...';

  try {
    const res = await fetch('/api/git/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, branch })
    });
    const data = await res.json();

    if (data.success) {
      outputBox.className = 'publish-output publish-success';
      outputBox.textContent = `✅ Opublikowano pomyślnie!\n\n${data.output}`;
      showToast('Gra opublikowana na GitHub!', 'success');
      // Refresh git status after publish
      setTimeout(loadGitStatus, 1000);
    } else {
      outputBox.className = 'publish-output publish-error';
      outputBox.textContent = `❌ Błąd publikacji:\n\n${data.output}`;
      showToast('Błąd podczas publikacji!', 'error');
    }
  } catch (err) {
    outputBox.className = 'publish-output publish-error';
    outputBox.textContent = `❌ Błąd sieci: ${err.message}`;
    showToast('Błąd sieci podczas publikacji.', 'error');
  } finally {
    btn.disabled = false;
    btn.textContent = '🚀 Opublikuj na GitHub';
  }
}

// ------------------------------------------------------------------
// TOAST NOTIFICATIONS & BADGES
// ------------------------------------------------------------------
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'error' ? '❌' : '✅'}</span>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3500);
}

function triggerAutosaveBadge() {
  const nowStr = new Date().toLocaleTimeString();
  document.getElementById('autosaveText').textContent = `🟢 Autozapisano (${nowStr})`;
}

// ------------------------------------------------------------------
// TAGS MANAGEMENT
// ------------------------------------------------------------------
function renderTagsList() {
  const container = document.getElementById('tagsList');
  if (!container) return;

  const searchInput = document.getElementById('searchTags');
  const search = searchInput ? searchInput.value.toLowerCase().trim() : '';

  let filtered = state.tags.filter(t => {
    const matchText = (t.id + ' ' + (t.name_pl || '') + ' ' + (t.name_eng || '')).toLowerCase();
    return !search || matchText.includes(search);
  });

  filtered.sort((a, b) => a.id.localeCompare(b.id));
  container.innerHTML = '';
  populateTagSelects();

  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--text-muted);">Brak tagów</div>';
    return;
  }

  filtered.forEach(tag => {
    const item = document.createElement('div');
    item.className = `list-item ${tag.id === state.activeTagId ? 'active' : ''}`;

    const count = (tag.element_ids || []).length;

    item.innerHTML = `
      <div class="list-item-title">${escapeHtml(tag.name_pl || tag.id)}</div>
      <div class="list-item-sub">${escapeHtml(tag.id)} • Składniki: ${count}</div>
    `;

    item.addEventListener('click', () => selectTag(tag.id));
    container.appendChild(item);
  });
}

function selectTag(id) {
  state.activeTagId = id;
  renderTagsList();

  const tag = state.tags.find(t => t.id === id);
  if (!tag) return;

  const card = document.getElementById('tagEditorCard');
  const placeholder = document.getElementById('tagPlaceholder');
  if (card) card.style.display = 'block';
  if (placeholder) placeholder.style.display = 'none';

  document.getElementById('tagEditorTitle').textContent = `🏷️ Edycja: ${tag.name_pl || tag.id}`;
  document.getElementById('tg_id').value = tag.id;
  document.getElementById('tg_name_pl').value = tag.name_pl || '';
  document.getElementById('tg_name_eng').value = tag.name_eng || '';
  document.getElementById('tg_desc_pl').value = tag.description_pl || '';
  document.getElementById('tg_desc_eng').value = tag.description_eng || '';

  renderTagElementCheckboxes(tag.element_ids || []);
}

function createNewTag() {
  state.activeTagId = null;
  renderTagsList();

  const card = document.getElementById('tagEditorCard');
  const placeholder = document.getElementById('tagPlaceholder');
  if (card) card.style.display = 'block';
  if (placeholder) placeholder.style.display = 'none';

  document.getElementById('tagEditorTitle').textContent = '🏷️ Nowy Tag Recepturowy';
  document.getElementById('tg_id').value = 'tag:new';
  document.getElementById('tg_name_pl').value = '';
  document.getElementById('tg_name_eng').value = '';
  document.getElementById('tg_desc_pl').value = '';
  document.getElementById('tg_desc_eng').value = '';

  renderTagElementCheckboxes([]);
}

function renderTagElementCheckboxes(selectedElementIds) {
  const container = document.getElementById('tg_elements_container');
  if (!container) return;

  container.innerHTML = '';
  const selectedSet = new Set(selectedElementIds);

  const sortedElements = [...state.elements].sort((a, b) => {
    const nameA = a.name_pl || a.id;
    const nameB = b.name_pl || b.id;
    return nameA.localeCompare(nameB);
  });

  sortedElements.forEach(el => {
    const label = document.createElement('label');
    label.className = 'tg-el-checkbox-label';
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.gap = '6px';
    label.style.padding = '4px 6px';
    label.style.borderRadius = '4px';
    label.style.background = 'var(--bg-card)';
    label.style.fontSize = '0.8rem';
    label.style.cursor = 'pointer';
    label.dataset.name = ((el.name_pl || '') + ' ' + (el.name_eng || '') + ' ' + el.id).toLowerCase();

    const checked = selectedSet.has(el.id) ? 'checked' : '';
    label.innerHTML = `
      <input type="checkbox" class="tg-el-cb" value="${el.id}" ${checked} style="cursor: pointer;" />
      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(el.name_pl || el.id)}</span>
    `;

    const cb = label.querySelector('input');
    cb.addEventListener('change', updateTagSelectedCount);

    container.appendChild(label);
  });

  updateTagSelectedCount();
}

function updateTagSelectedCount() {
  const checkboxes = document.querySelectorAll('.tg-el-cb:checked');
  const countBadge = document.getElementById('tg_elements_count_badge');
  if (countBadge) {
    countBadge.textContent = `${checkboxes.length} wybranych`;
  }
}

function filterTagElementCheckboxes() {
  const searchInput = document.getElementById('tg_elements_search');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const labels = document.querySelectorAll('.tg-el-checkbox-label');

  labels.forEach(lbl => {
    const match = !query || lbl.dataset.name.includes(query);
    lbl.style.display = match ? 'flex' : 'none';
  });
}

function selectAllVisibleTagElements() {
  const labels = document.querySelectorAll('.tg-el-checkbox-label');
  labels.forEach(lbl => {
    if (lbl.style.display !== 'none') {
      const cb = lbl.querySelector('.tg-el-cb');
      if (cb) cb.checked = true;
    }
  });
  updateTagSelectedCount();
}

function deselectAllTagElements() {
  const checkboxes = document.querySelectorAll('.tg-el-cb');
  checkboxes.forEach(cb => cb.checked = false);
  updateTagSelectedCount();
}

async function handleTagSubmit(e) {
  e.preventDefault();

  const id = document.getElementById('tg_id').value.trim();
  const name_pl = document.getElementById('tg_name_pl').value.trim();
  const name_eng = document.getElementById('tg_name_eng').value.trim();
  const description_pl = document.getElementById('tg_desc_pl').value.trim();
  const description_eng = document.getElementById('tg_desc_eng').value.trim();

  const checkedCbs = document.querySelectorAll('.tg-el-cb:checked');
  const element_ids = Array.from(checkedCbs).map(cb => cb.value);

  if (!id) {
    showToast('ID tagu jest wymagane!', 'error');
    return;
  }

  const tagData = {
    id,
    name_pl,
    name_eng,
    description_pl,
    description_eng,
    element_ids
  };

  try {
    const res = await fetch('/api/tag/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tag: tagData, old_id: state.activeTagId })
    });
    const result = await res.json();

    if (result.success) {
      showToast('Zapisano tag pomyślnie!', 'success');
      state.activeTagId = id;
      await loadData();
      selectTag(id);
    } else {
      showToast(`Błąd zapisu: ${result.error}`, 'error');
    }
  } catch (err) {
    showToast('Błąd połączenia z serwerem.', 'error');
  }
}

async function deleteCurrentTag() {
  if (!state.activeTagId) return;

  if (!confirm(`Czy na pewno chcesz usunąć tag '${state.activeTagId}'?`)) return;

  try {
    const res = await fetch('/api/tag/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: state.activeTagId })
    });
    const result = await res.json();

    if (result.success) {
      showToast('Usunięto tag!', 'success');
      state.activeTagId = null;
      document.getElementById('tagEditorCard').style.display = 'none';
      document.getElementById('tagPlaceholder').style.display = 'flex';
      await loadData();
    } else {
      showToast(`Błąd usuwania: ${result.error}`, 'error');
    }
  } catch (err) {
    showToast('Błąd połączenia z serwerem.', 'error');
  }
}

function populateTagSelects() {
  const sel = document.getElementById('ac_target_tag');
  if (!sel) return;
  const currVal = sel.value;
  sel.innerHTML = '<option value="">-- Dowolny tag --</option>';

  const sortedTags = [...state.tags].sort((a, b) => a.id.localeCompare(b.id));
  sortedTags.forEach(tg => {
    const opt = document.createElement('option');
    opt.value = tg.id;
    opt.textContent = `${tg.id} (${tg.name_pl || tg.id})`;
    sel.appendChild(opt);
  });

  if (currVal) sel.value = currVal;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}