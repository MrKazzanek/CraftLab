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
   * Checks if a recipe matches a list of selected element IDs, considering exact matches and tag matches.
   */
  recipeMatches(recipe, selectedElementIds) {
    const reqs = recipe.inputs || [];
    if (reqs.length !== selectedElementIds.length) return { match: false, usedTag: false };

    const permutations = (arr) => {
      if (arr.length <= 1) return [arr];
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const remPerms = permutations(remaining);
        for (const p of remPerms) {
          result.push([current, ...p]);
        }
      }
      return result;
    };

    const perms = permutations(selectedElementIds);
    for (const perm of perms) {
      let allMatched = true;
      let usedTag = false;
      for (let i = 0; i < reqs.length; i++) {
        const req = reqs[i];
        const sel = perm[i];
        if (req === sel) {
          // Direct element match
        } else if (this.dataLoader && this.dataLoader.isElementInTag && this.dataLoader.isElementInTag(sel, req)) {
          usedTag = true;
        } else {
          allMatched = false;
          break;
        }
      }
      if (allMatched) {
        return { match: true, usedTag };
      }
    }
    return { match: false, usedTag: false };
  }

  /**
   * Evaluates the selected elements (2 or 3 items)
   * Returns an object: { success: boolean, resultElement: Object|null, recipe: Object|null, isNew: boolean, reason: string, usedTag: boolean }
   */
  combine(selectedElementIds) {
    const validInputs = selectedElementIds.filter(id => id != null && id !== '');
    if (validInputs.length < 2) {
      return { success: false, reason: 'min_elements_required' };
    }

    // Increment global combination attempts counter
    this.storage.incrementCombinationCount();

    // Search for matching recipe (supports exact & tag matches)
    let matchingRecipe = null;
    let usedTagInRecipe = false;

    for (const r of this.recipes) {
      const res = this.recipeMatches(r, validInputs);
      if (res.match) {
        matchingRecipe = r;
        usedTagInRecipe = res.usedTag;
        break;
      }
    }

    if (!matchingRecipe) {
      this.storage.resetStreak();
      this.storage.incrementFailedCount();
      return { success: false, reason: 'no_recipe' };
    }

    const resultElement = this.dataLoader.getElement(matchingRecipe.result);
    if (!resultElement) {
      this.storage.resetStreak();
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
        usedTag: usedTagInRecipe,
        reason: 'duplicate_prevented'
      };
    }

    // Increment streak on valid discovery
    this.storage.incrementStreak();

    // Unlock element if not unlocked yet
    const isNew = this.storage.unlockElement(resultElement.id);

    return {
      success: true,
      resultElement,
      recipe: matchingRecipe,
      isNew,
      usedTag: usedTagInRecipe,
      reason: isNew ? 'new_discovery' : 'recrafted'
    };
  }

  getRecipesForResult(resultId) {
    return this.recipes.filter(r => r.result === resultId);
  }
}
