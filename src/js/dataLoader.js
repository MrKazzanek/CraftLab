/**
 * Dynamic DataLoader for AlcheMY
 * Tries fetching relative JSON files first, with embedded fallback for file:// CORS environments.
 */

import { EMBEDDED_DATA } from './bundleData.js';

export class DataLoader {
  constructor() {
    this.elements = new Map();
    this.recipes = [];
    this.achievements = [];
    this.categories = [];
    this.tags = new Map();
    this.translations = { pl: {}, en: {} };
    this.loaded = false;
  }

  async loadAll() {
    try {
      if (window.location.protocol === 'file:') {
        throw new Error(
          'Local file:// protocol detected, using embedded data fallback.'
        );
      }

      // 1. Fetch translations
      const plRes = await fetch('./data/translations/pl.json');
      this.translations.pl = await plRes.json();

      const enRes = await fetch('./data/translations/en.json');
      this.translations.en = await enRes.json();

      // 2. Fetch categories
      const catRes = await fetch('./data/categories/categories.json');
      this.categories = await catRes.json();

      // 3. Fetch manifest index
      const indexRes = await fetch('./data/index.json');
      const index = await indexRes.json();

      // 4. Fetch all individual element JSONs
      const elementPromises = index.elements.map(id =>
        fetch(`./data/elements/${id}.json`).then(res => res.json())
      );

      const elementDataList = await Promise.all(elementPromises);

      elementDataList.forEach(el => {
        this.elements.set(el.id, el);
      });

      // 5. Fetch all individual recipe JSONs
      const recipePromises = index.recipes.map(id =>
        fetch(`./data/recipes/${id}.json`).then(res => res.json())
      );

      this.recipes = await Promise.all(recipePromises);

      // 6. Fetch all individual achievement JSONs
      const achPromises = index.achievements.map(id =>
        fetch(`./data/achievements/${id}.json`).then(res => res.json())
      );

      this.achievements = await Promise.all(achPromises);

      // 7. Fetch all individual recipe tags
      if (Array.isArray(index.tags)) {
        const tagPromises = index.tags.map(id => {
          const fileName = id.startsWith('tag:') ? id.replace('tag:', 'tag_') : id;
          return fetch(`./data/tags/${fileName}.json`).then(res => res.json()).catch(() => null);
        });
        const tagList = await Promise.all(tagPromises);
        tagList.filter(Boolean).forEach(t => {
          this.tags.set(t.id, t);
        });
      }

      this.loaded = true;

      console.log(
        `[DataLoader] Loaded ${this.elements.size} elements & ${this.tags.size} tags via HTTP fetch.`
      );

      return true;

    } catch (err) {
      console.warn(
        '[DataLoader] Fetching JSONs over HTTP failed or running on file:// protocol. Using EMBEDDED_DATA fallback:',
        err.message
      );

      // Use embedded fallback data
      this.translations = EMBEDDED_DATA.translations || { pl: {}, en: {} };
      this.categories = EMBEDDED_DATA.categories || [];
      this.recipes = EMBEDDED_DATA.recipes || [];
      this.achievements = EMBEDDED_DATA.achievements || [];

      if (Array.isArray(EMBEDDED_DATA.elements)) {
        EMBEDDED_DATA.elements.forEach(el => {
          this.elements.set(el.id, el);
        });
      }

      if (Array.isArray(EMBEDDED_DATA.tags)) {
        EMBEDDED_DATA.tags.forEach(t => {
          this.tags.set(t.id, t);
        });
      }

      this.loaded = true;

      console.log(
        `[DataLoader] Loaded ${this.elements.size} elements & ${this.tags.size} tags via fallback bundle.`
      );

      return true;
    }
  }

  getElement(id) {
    return this.elements.get(id);
  }

  getAllElements() {
    return Array.from(this.elements.values());
  }

  getStartElements() {
    return Array.from(this.elements.values()).filter(
      el => el.start_element
    );
  }

  getTag(tagId) {
    return this.tags.get(tagId);
  }

  getAllTags() {
    return Array.from(this.tags.values());
  }

  isElementInTag(elementId, tagId) {
    const tag = this.getTag(tagId);
    if (!tag || !Array.isArray(tag.element_ids)) return false;
    return tag.element_ids.includes(elementId);
  }

  /**
   * Get translation from nested key.
   *
   * Example:
   * getTranslation('pl', 'own.ba')
   */
  getTranslation(lang, keyPath) {
    const keys = keyPath.split('.');

    let obj =
      this.translations[lang] ||
      this.translations['pl'];

    for (const k of keys) {
      if (obj && obj[k] !== undefined) {
        obj = obj[k];
      } else {
        return keyPath;
      }
    }

    return obj;
  }

  /**
   * Apply translations to the entire page.
   *
   * Supported:
   * data-i18n
   * data-i18n-title
   * data-i18n-placeholder
   * data-i18n-aria-label
   * data-i18n-alt
   */
  applyTranslations(lang) {
    // -----------------------------
    // Normal text
    // -----------------------------

    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;

      if (!key) return;

      const translation = this.getTranslation(lang, key);

      element.textContent = translation;
    });

    // -----------------------------
    // title
    // -----------------------------

    document
      .querySelectorAll('[data-i18n-title]')
      .forEach(element => {
        const key = element.dataset.i18nTitle;

        if (!key) return;

        const translation = this.getTranslation(lang, key);

        element.setAttribute('title', translation);
      });

    // -----------------------------
    // placeholder
    // -----------------------------

    document
      .querySelectorAll('[data-i18n-placeholder]')
      .forEach(element => {
        const key = element.dataset.i18nPlaceholder;

        if (!key) return;

        const translation = this.getTranslation(lang, key);

        element.setAttribute('placeholder', translation);
      });

    // -----------------------------
    // aria-label
    // -----------------------------

    document
      .querySelectorAll('[data-i18n-aria-label]')
      .forEach(element => {
        const key = element.dataset.i18nAriaLabel;

        if (!key) return;

        const translation = this.getTranslation(lang, key);

        element.setAttribute('aria-label', translation);
      });

    // -----------------------------
    // alt
    // -----------------------------

    document
      .querySelectorAll('[data-i18n-alt]')
      .forEach(element => {
        const key = element.dataset.i18nAlt;

        if (!key) return;

        const translation = this.getTranslation(lang, key);

        element.setAttribute('alt', translation);
      });
  }
}

export const dataLoader = new DataLoader();