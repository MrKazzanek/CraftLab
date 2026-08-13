/**
 * Alchemy Engine for AlcheMY
 * Handles order-independent matching for 2 or 3 element combinations.
 */

export class AlchemyEngine {
  constructor(recipes, dataLoader, storage) {
    this.recipes = recipes;
    this.dataLoader = dataLoader;
    this.storage = storage;
  }

  /**
   * Helper to check if two arrays of element IDs contain the exact same items regardless of order
   */
  arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    return sorted1.every((val, idx) => val === sorted2[idx]);
  }

  /**
   * Evaluates the selected elements (2 or 3 items)
   * Returns an object: { success: boolean, resultElement: Object|null, recipe: Object|null, isNew: boolean, reason: string }
   */
  combine(selectedElementIds) {
    const validInputs = selectedElementIds.filter(id => id != null && id !== '');
    if (validInputs.length < 2) {
      return { success: false, reason: 'min_elements_required' };
    }

    // Increment global combination attempts counter
    this.storage.incrementCombinationCount();

    // Search for matching recipe
    const matchingRecipe = this.recipes.find(r => this.arraysMatch(r.inputs, validInputs));

    if (!matchingRecipe) {
      return { success: false, reason: 'no_recipe' };
    }

    const resultElement = this.dataLoader.getElement(matchingRecipe.result);
    if (!resultElement) {
      return { success: false, reason: 'element_not_found' };
    }

    const alreadyUnlocked = this.storage.isElementUnlocked(resultElement.id);
    const allowDuplicate = this.storage.state.settings.allowDuplicateCrafting;

    if (alreadyUnlocked && !allowDuplicate) {
      return {
        success: false,
        resultElement,
        recipe: matchingRecipe,
        isNew: false,
        reason: 'duplicate_prevented'
      };
    }

    // Unlock element if not unlocked yet
    const isNew = this.storage.unlockElement(resultElement.id);

    return {
      success: true,
      resultElement,
      recipe: matchingRecipe,
      isNew,
      reason: isNew ? 'new_discovery' : 'recrafted'
    };
  }

  getRecipesForResult(resultId) {
    return this.recipes.filter(r => r.result === resultId);
  }
}
