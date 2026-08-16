/**
 * AlcheMY game version — managed by alchemy_generator.py
 * Format: {yy}y{release}{patch} e.g. 26y02a
 *   yy     — year (2026 → 26)
 *   release — release number (zero-padded to 2 digits)
 *   patch  — bugfix letter for that release (a, b, c, …)
 */
window.GAME_VERSION = {
  "year": 2026,
  "release": 9,
  "patch": "c"
};

window.formatGameVersion = function (v) {
  v = v || window.GAME_VERSION;
  var yy = String(v.year).slice(-2);
  var rel = String(v.release).padStart(2, '0');
  return yy + 'y' + rel + v.patch;
};
