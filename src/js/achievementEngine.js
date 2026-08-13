/**
 * Achievement Engine for AlcheMY
 * Evaluates game metrics against achievement criteria and triggers unlocks.
 */

export class AchievementEngine {
  constructor(achievements, storage, dataLoader) {
    this.achievements = achievements;
    this.storage = storage;
    this.dataLoader = dataLoader;
  }

  /**
   * Evaluates all achievements and unlocks any newly earned ones.
   * Returns an array of newly unlocked achievement objects.
   */
  evaluate(lastCombinationContext = {}) {
    const newlyUnlocked = [];
    const totalElementsCount = this.dataLoader.getAllElements().length;
    const unlockedCount = this.storage.state.unlockedElements.length;
    const comboCount = this.storage.state.combinationCount;

    this.achievements.forEach(ach => {
      if (this.storage.isAchievementUnlocked(ach.id)) return;

      let conditionMet = false;

      switch (ach.type) {
        case 'combination_count':
          if (comboCount >= (ach.value || 1)) conditionMet = true;
          break;

        case 'trio_combination':
        case 'trio_recipe':
          if (lastCombinationContext.isTrio && lastCombinationContext.success) conditionMet = true;
          break;

        case 'discover_hidden_recipe':
          if (lastCombinationContext.recipe && lastCombinationContext.recipe.hidden && lastCombinationContext.success) {
            conditionMet = true;
          }
          break;

        case 'element_count':
          if (unlockedCount >= (ach.value || 1)) conditionMet = true;
          break;

        case 'discover_specific_element':
        case 'element_unlocked':
          const targetEl = ach.target_element || ach.value;
          if (targetEl && this.storage.isElementUnlocked(targetEl)) {
            conditionMet = true;
          }
          break;

        case 'category_completed':
          const cat = ach.target_category || ach.value;
          if (cat) {
            const catElements = this.dataLoader.getAllElements().filter(el => el.category === cat);
            if (catElements.length > 0 && catElements.every(el => this.storage.isElementUnlocked(el.id))) {
              conditionMet = true;
            }
          }
          break;

        case 'all_elements':
          if (unlockedCount >= totalElementsCount) conditionMet = true;
          break;
      }

      if (conditionMet) {
        if (this.storage.unlockAchievement(ach.id)) {
          newlyUnlocked.push(ach);
        }
      }
    });

    return newlyUnlocked;
  }
}
