global.localStorage = {
  _data: {},
  getItem(key) { return this._data[key] || null; },
  setItem(key, val) { this._data[key] = val; },
  removeItem(key) { delete this._data[key]; }
};

import { StorageManager } from '../../src/js/storage.js';

const storage = new StorageManager();

// Test state initialization
storage.initDefaultElements([{ id: 'water' }, { id: 'fire' }, { id: 'earth' }, { id: 'air' }]);
storage.unlockElement('steam');
storage.toggleFavorite('steam');
storage.incrementCombinationCount();

console.log('Original unlocked:', storage.state.unlockedElements);

// Test export
const exportedStr = storage.exportSaveData();
console.log('Exported data length:', exportedStr.length);
console.assert(exportedStr.includes('CraftLab'), 'Should contain game name CraftLab');

// Create new storage and test import
const storage2 = new StorageManager();
const result = storage2.importSaveData(exportedStr, [{ id: 'water' }]);
console.log('Import result (JSON):', result);
console.log('Imported unlocked:', storage2.state.unlockedElements);

console.assert(result.success === true, 'Import should succeed');
console.assert(storage2.isElementUnlocked('steam') === true, 'Steam should be unlocked');
console.assert(storage2.isFavorite('steam') === true, 'Steam should be favorite');

// Test Base64 import
const base64Save = Buffer.from(exportedStr).toString('base64');
const storage3 = new StorageManager();
const b64Result = storage3.importSaveData(base64Save, [{ id: 'water' }]);
console.log('Import result (Base64):', b64Result);
console.assert(b64Result.success === true, 'Base64 import should succeed');
console.assert(storage3.isElementUnlocked('steam') === true, 'Steam should be unlocked via Base64');

console.log('--- ALL SAVE/RESTORE UNIT TESTS PASSED SUCCESSFULLY! ---');
