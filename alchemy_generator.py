#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AlcheMY - Content Generator & Editor Web-Desktop Application
Python HTTP Server + REST API Backend + Quiet Desktop App Window Launcher.
"""

import os
import sys
import json
import socket
import subprocess
import webbrowser
from datetime import datetime
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler
import threading

# Base directories
BASE_DIR = Path(__file__).parent.resolve()
DATA_DIR = BASE_DIR / "data"
ELEMENTS_DIR = DATA_DIR / "elements"
RECIPES_DIR = DATA_DIR / "recipes"
ACHIEVEMENTS_DIR = DATA_DIR / "achievements"
CATEGORIES_FILE = DATA_DIR / "categories" / "categories.json"
TRANSLATIONS_PL = DATA_DIR / "translations" / "pl.json"
TRANSLATIONS_EN = DATA_DIR / "translations" / "en.json"
INDEX_FILE = DATA_DIR / "index.json"

BUNDLE_DATA_JS = BASE_DIR / "src" / "js" / "bundleData.js"
GAME_BUNDLE_JS = BASE_DIR / "src" / "js" / "game.bundle.js"
EDITOR_UI_DIR = BASE_DIR / "editor_ui"

# ------------------------------------------------------------------
# GIT PATH AUTO-DETECTION
# ------------------------------------------------------------------
def find_git_executable():
    """Find git executable - checks common Windows paths and PATH."""
    common_paths = [
        r"C:\Program Files\Git\bin\git.exe",
        r"C:\Program Files (x86)\Git\bin\git.exe",
        r"C:\Program Files\Git\cmd\git.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Programs\Git\bin\git.exe"),
        os.path.expandvars(r"%ProgramFiles%\Git\bin\git.exe"),
    ]

    for path in common_paths:
        if os.path.exists(path):
            return path

    # Try to find git in PATH using where command
    try:
        result = subprocess.run(
            ["where", "git"],
            capture_output=True, text=True, timeout=5
        )
        if result.returncode == 0:
            first_line = result.stdout.strip().splitlines()[0]
            if first_line and os.path.exists(first_line):
                return first_line
    except Exception:
        pass

    # Last resort - just use "git" and hope it's in PATH
    return "git"

GIT_PATH = find_git_executable()
print(f"[Git] Using git at: {GIT_PATH}")


class DataManager:
    """Handles JSON reading, writing, auto-saving, and syncing JS bundle files."""

    def __init__(self, base_dir=BASE_DIR):
        self.base_dir = base_dir
        self.elements = {}
        self.recipes = {}
        self.achievements = {}
        self.categories = []
        self.translations = {"pl": {}, "en": {}}

    def load_all(self):
        for d in [ELEMENTS_DIR, RECIPES_DIR, ACHIEVEMENTS_DIR]:
            d.mkdir(parents=True, exist_ok=True)

        if CATEGORIES_FILE.exists():
            with open(CATEGORIES_FILE, 'r', encoding='utf-8') as f:
                self.categories = json.load(f)

        if TRANSLATIONS_PL.exists():
            with open(TRANSLATIONS_PL, 'r', encoding='utf-8') as f:
                self.translations['pl'] = json.load(f)
        if TRANSLATIONS_EN.exists():
            with open(TRANSLATIONS_EN, 'r', encoding='utf-8') as f:
                self.translations['en'] = json.load(f)

        self.elements = {}
        for el_file in ELEMENTS_DIR.glob("*.json"):
            try:
                with open(el_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if "id" in data:
                        self.elements[data["id"]] = data
            except Exception as e:
                print(f"[Warning] Failed to load element {el_file}: {e}")

        self.recipes = {}
        for rc_file in RECIPES_DIR.glob("*.json"):
            try:
                with open(rc_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if "id" in data:
                        self.recipes[data["id"]] = data
            except Exception as e:
                print(f"[Warning] Failed to load recipe {rc_file}: {e}")

        self.achievements = {}
        for ac_file in ACHIEVEMENTS_DIR.glob("*.json"):
            try:
                with open(ac_file, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    if "id" in data:
                        self.achievements[data["id"]] = data
            except Exception as e:
                print(f"[Warning] Failed to load achievement {ac_file}: {e}")

        print(f"[DataManager] Loaded {len(self.elements)} elements, {len(self.recipes)} recipes, {len(self.achievements)} achievements.")

    def save_index(self):
        element_ids = sorted(self.elements.keys(), key=lambda k: (self.elements[k].get("sort_order", 999), k))
        recipe_ids = sorted(self.recipes.keys())
        achievement_ids = sorted(self.achievements.keys())

        index_data = {
            "elements": element_ids,
            "recipes": recipe_ids,
            "achievements": achievement_ids
        }

        with open(INDEX_FILE, 'w', encoding='utf-8') as f:
            json.dump(index_data, f, indent=2, ensure_ascii=False)

    def check_id_unique(self, new_id, old_id=None, entity_type='element'):
        """
        Checks if new_id is already used by any element, recipe or achievement.
        Returns list of conflicts.
        """
        conflicts = []
        all_ids = {}

        for eid in self.elements:
            all_ids[eid] = 'element'
        for rid in self.recipes:
            all_ids[rid] = 'recipe'
        for aid in self.achievements:
            all_ids[aid] = 'achievement'

        # Remove old_id from consideration (rename case)
        if old_id and old_id in all_ids:
            del all_ids[old_id]

        if new_id in all_ids:
            existing_type = all_ids[new_id]
            conflicts.append(f"ID '{new_id}' jest już używane przez {existing_type}!")

        return conflicts

    def check_recipe_duplicate(self, inputs, result, old_id=None):
        """
        Checks if a recipe with the same inputs (order-independent) and result already exists.
        Returns list of conflicts.
        """
        conflicts = []
        normalized_new = tuple(sorted(inputs))

        for rid, recipe in self.recipes.items():
            if old_id and rid == old_id:
                continue
            existing_inputs = tuple(sorted(recipe.get('inputs', [])))
            existing_result = recipe.get('result')
            if existing_inputs == normalized_new and existing_result == result:
                conflicts.append(f"Identyczna receptura już istnieje: '{rid}' ({' + '.join(recipe.get('inputs', []))} → {existing_result})")

        return conflicts

    def save_element(self, element_data, old_id=None):
        new_id = element_data["id"].strip()
        if not new_id:
            raise ValueError("ID elementu nie może być puste!")

        # ID uniqueness check
        conflicts = self.check_id_unique(new_id, old_id=old_id, entity_type='element')
        if conflicts:
            raise ValueError(conflicts[0])

        if old_id and old_id != new_id:
            old_file = ELEMENTS_DIR / f"{old_id}.json"
            if old_file.exists():
                old_file.unlink()
            if old_id in self.elements:
                del self.elements[old_id]
            for r in self.recipes.values():
                if r.get("result") == old_id:
                    r["result"] = new_id
                r["inputs"] = [new_id if inp == old_id else inp for inp in r.get("inputs", [])]

        self.elements[new_id] = element_data
        file_path = ELEMENTS_DIR / f"{new_id}.json"
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(element_data, f, indent=2, ensure_ascii=False)

        self.save_index()
        self.update_bundle_files()

    def delete_element(self, element_id):
        if element_id in self.elements:
            del self.elements[element_id]

        file_path = ELEMENTS_DIR / f"{element_id}.json"
        if file_path.exists():
            file_path.unlink()

        self.save_index()
        self.update_bundle_files()

    def save_recipe(self, recipe_data, old_id=None):
        new_id = recipe_data["id"].strip()
        if not new_id:
            raise ValueError("ID receptury nie może być puste!")

        # ID uniqueness check
        conflicts = self.check_id_unique(new_id, old_id=old_id, entity_type='recipe')
        if conflicts:
            raise ValueError(conflicts[0])

        # Duplicate recipe check (same inputs + result)
        inputs = recipe_data.get('inputs', [])
        result = recipe_data.get('result')
        dup_conflicts = self.check_recipe_duplicate(inputs, result, old_id=old_id)
        if dup_conflicts:
            raise ValueError(dup_conflicts[0])

        if old_id and old_id != new_id:
            old_file = RECIPES_DIR / f"{old_id}.json"
            if old_file.exists():
                old_file.unlink()
            if old_id in self.recipes:
                del self.recipes[old_id]

        self.recipes[new_id] = recipe_data
        file_path = RECIPES_DIR / f"{new_id}.json"
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(recipe_data, f, indent=2, ensure_ascii=False)

        self.save_index()
        self.update_bundle_files()

    def delete_recipe(self, recipe_id):
        if recipe_id in self.recipes:
            del self.recipes[recipe_id]

        file_path = RECIPES_DIR / f"{recipe_id}.json"
        if file_path.exists():
            file_path.unlink()

        self.save_index()
        self.update_bundle_files()

    def save_achievement(self, ach_data, old_id=None):
        new_id = ach_data["id"].strip()
        if not new_id:
            raise ValueError("ID osiągnięcia nie może być puste!")

        # ID uniqueness check
        conflicts = self.check_id_unique(new_id, old_id=old_id, entity_type='achievement')
        if conflicts:
            raise ValueError(conflicts[0])

        if old_id and old_id != new_id:
            old_file = ACHIEVEMENTS_DIR / f"{old_id}.json"
            if old_file.exists():
                old_file.unlink()
            if old_id in self.achievements:
                del self.achievements[old_id]

        self.achievements[new_id] = ach_data
        file_path = ACHIEVEMENTS_DIR / f"{new_id}.json"
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(ach_data, f, indent=2, ensure_ascii=False)

        self.save_index()
        self.update_bundle_files()

    def delete_achievement(self, ach_id):
        if ach_id in self.achievements:
            del self.achievements[ach_id]

        file_path = ACHIEVEMENTS_DIR / f"{ach_id}.json"
        if file_path.exists():
            file_path.unlink()

        self.save_index()
        self.update_bundle_files()

    def update_bundle_files(self):
        try:
            sorted_elements = [self.elements[k] for k in sorted(self.elements.keys(), key=lambda k: (self.elements[k].get("sort_order", 999), k))]
            sorted_recipes = [self.recipes[k] for k in sorted(self.recipes.keys())]
            sorted_achievements = [self.achievements[k] for k in sorted(self.achievements.keys())]

            embedded_data = {
                "elements": sorted_elements,
                "recipes": sorted_recipes,
                "achievements": sorted_achievements,
                "categories": self.categories,
                "translations": self.translations
            }

            json_str = json.dumps(embedded_data, indent=2, ensure_ascii=False)

            bundle_data_content = (
                "/**\n"
                " * Embedded Fallback Data for AlcheMY\n"
                " * Allows game to run seamlessly when opened directly via file:// protocol without local server CORS issues.\n"
                " */\n"
                f"export const EMBEDDED_DATA = {json_str};\n"
                "if (typeof window !== 'undefined') {\n"
                "  window.EMBEDDED_DATA = EMBEDDED_DATA;\n"
                "}\n"
            )

            if BUNDLE_DATA_JS.parent.exists():
                with open(BUNDLE_DATA_JS, 'w', encoding='utf-8') as f:
                    f.write(bundle_data_content)

            if GAME_BUNDLE_JS.exists():
                with open(GAME_BUNDLE_JS, 'r', encoding='utf-8') as f:
                    gb_content = f.read()

                start_pattern = "const EMBEDDED_DATA = {"
                end_pattern = "window.EMBEDDED_DATA = EMBEDDED_DATA;\n}"

                start_idx = gb_content.find(start_pattern)
                end_idx = gb_content.find(end_pattern)

                if start_idx != -1 and end_idx != -1:
                    replacement = f"const EMBEDDED_DATA = {json_str};\nif (typeof window !== 'undefined') {{\n  window.EMBEDDED_DATA = EMBEDDED_DATA;\n}}"
                    new_gb_content = gb_content[:start_idx] + replacement + gb_content[end_idx + len(end_pattern):]
                    with open(GAME_BUNDLE_JS, 'w', encoding='utf-8') as f:
                        f.write(new_gb_content)

        except Exception as e:
            print(f"[Error] Failed to update JS bundles: {e}")

    def verify_integrity(self):
        issues = []
        element_ids = set(self.elements.keys())

        for r_id, r in self.recipes.items():
            result = r.get("result")
            if not result or result not in element_ids:
                issues.append(f"Receptura '{r_id}': Wynik '{result}' nie istnieje wśród składników!")
            for inp in r.get("inputs", []):
                if inp not in element_ids:
                    issues.append(f"Receptura '{r_id}': Wejście '{inp}' nie istnieje wśród składników!")

        non_start_elements = {el_id for el_id, el in self.elements.items() if not el.get("start_element")}
        recipe_results = {r.get("result") for r in self.recipes.values()}
        missing_recipes = non_start_elements - recipe_results

        for el_id in missing_recipes:
            issues.append(f"Składnik '{el_id}': Nie jest elementem startowym i NIE posiada żadnej receptury!")

        return issues

    def save_categories(self, categories_data):
        self.categories = categories_data
        CATEGORIES_FILE.parent.mkdir(parents=True, exist_ok=True)
        with open(CATEGORIES_FILE, 'w', encoding='utf-8') as f:
            json.dump(categories_data, f, indent=2, ensure_ascii=False)
        self.update_bundle_files()

    def get_achievement_icons(self):
        ach_dir = BASE_DIR / "assets" / "achievements"
        icons = []
        if ach_dir.exists():
            for f in ach_dir.glob("*.*"):
                if f.suffix.lower() in [".png", ".svg", ".jpg"]:
                    icons.append(f"/assets/achievements/{f.name}")
        return sorted(icons)

    def publish_to_github(self, commit_message, branch="main"):
        """
        Runs git add, commit, push in the BASE_DIR.
        Returns (success: bool, output: str)
        """
        try:
            # Check git availability
            result = subprocess.run(
                [GIT_PATH, "rev-parse", "--is-inside-work-tree"],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )
            if result.returncode != 0:
                return False, "Katalog nie jest repozytorium git!"

            # git add .
            r1 = subprocess.run(
                [GIT_PATH, "add", "."],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )

            # git commit
            r2 = subprocess.run(
                [GIT_PATH, "commit", "-m", commit_message],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )

            if r2.returncode != 0 and "nothing to commit" in r2.stdout + r2.stderr:
                return True, "Brak nowych zmian do opublikowania."

            # git push
            r3 = subprocess.run(
                [GIT_PATH, "push", "origin", branch],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )

            if r3.returncode != 0:
                return False, f"Błąd push:\n{r3.stderr}"

            output = f"Commit: {r2.stdout.strip()}\nPush: {r3.stdout.strip() or 'OK'}"
            return True, output

        except FileNotFoundError:
            return False, f"Git nie znaleziony pod ścieżką: {GIT_PATH}"
        except Exception as e:
            return False, str(e)

    def get_git_status(self):
        """Returns git log (last 10 commits) and current status."""
        try:
            log_result = subprocess.run(
                [GIT_PATH, "log", "--oneline", "-10"],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )
            status_result = subprocess.run(
                [GIT_PATH, "status", "--short"],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )
            remote_result = subprocess.run(
                [GIT_PATH, "remote", "get-url", "origin"],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )
            branch_result = subprocess.run(
                [GIT_PATH, "branch", "--show-current"],
                cwd=str(BASE_DIR),
                capture_output=True, text=True
            )
            return {
                "log": log_result.stdout.strip(),
                "status": status_result.stdout.strip(),
                "remote": remote_result.stdout.strip(),
                "branch": branch_result.stdout.strip(),
                "available": log_result.returncode == 0
            }
        except Exception as e:
            return {"available": False, "error": str(e)}


# Singleton data instance
db = DataManager()


class GeneratorRequestHandler(BaseHTTPRequestHandler):

    def log_message(self, format, *args):
        pass

    def send_json(self, data, code=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def serve_static(self, rel_path):
        if rel_path.startswith("assets/"):
            target = BASE_DIR / rel_path
        else:
            target = EDITOR_UI_DIR / rel_path

        if not target.exists() or not target.is_file():
            self.send_error(404, "File Not Found")
            return

        ext = target.suffix.lower()
        content_type = {
            ".html": "text/html; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".js": "application/javascript; charset=utf-8",
            ".json": "application/json; charset=utf-8",
            ".png": "image/png",
            ".svg": "image/svg+xml"
        }.get(ext, "application/octet-stream")

        with open(target, 'rb') as f:
            content = f.read()

        self.send_response(200)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_GET(self):
        url_path = self.path.split('?')[0]

        if url_path == '/' or url_path == '/index.html':
            self.serve_static('index.html')
        elif url_path.startswith('/api/data'):
            db.load_all()
            self.send_json({
                "elements": list(db.elements.values()),
                "recipes": list(db.recipes.values()),
                "achievements": list(db.achievements.values()),
                "categories": db.categories,
                "translations": db.translations
            })
        elif url_path.startswith('/api/integrity'):
            issues = db.verify_integrity()
            self.send_json({"issues": issues})
        elif url_path.startswith('/api/achievement_icons'):
            icons = db.get_achievement_icons()
            self.send_json({"icons": icons})
        elif url_path.startswith('/api/git/status'):
            status = db.get_git_status()
            self.send_json(status)
        elif url_path.startswith('/api/check_id'):
            from urllib.parse import urlparse, parse_qs
            qs = parse_qs(urlparse(self.path).query)
            check_id = qs.get('id', [''])[0]
            old_id = qs.get('old_id', [''])[0] or None
            entity_type = qs.get('type', ['element'])[0]
            conflicts = db.check_id_unique(check_id, old_id=old_id, entity_type=entity_type)
            self.send_json({"conflicts": conflicts, "valid": len(conflicts) == 0})
        else:
            rel = url_path.lstrip('/')
            self.serve_static(rel)

    def do_POST(self):
        url_path = self.path.split('?')[0]
        content_length = int(self.headers.get('Content-Length', 0))
        body_bytes = self.rfile.read(content_length)

        try:
            req_data = json.loads(body_bytes.decode('utf-8')) if body_bytes else {}
        except Exception:
            req_data = {}

        if url_path == '/api/element/save':
            el = req_data.get('element')
            old_id = req_data.get('old_id')
            try:
                db.save_element(el, old_id=old_id)
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/element/delete':
            el_id = req_data.get('id')
            try:
                db.delete_element(el_id)
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/recipe/save':
            rc = req_data.get('recipe')
            old_id = req_data.get('old_id')
            try:
                db.save_recipe(rc, old_id=old_id)
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/recipe/delete':
            rc_id = req_data.get('id')
            try:
                db.delete_recipe(rc_id)
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/achievement/save':
            ac = req_data.get('achievement')
            old_id = req_data.get('old_id')
            try:
                db.save_achievement(ac, old_id=old_id)
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/achievement/delete':
            ac_id = req_data.get('id')
            try:
                db.delete_achievement(ac_id)
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/category/save':
            categories = req_data.get('categories')
            try:
                db.save_categories(categories)
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/rebuild_bundle':
            try:
                db.update_bundle_files()
                self.send_json({"success": True})
            except Exception as e:
                self.send_json({"success": False, "error": str(e)}, code=400)

        elif url_path == '/api/git/publish':
            commit_message = req_data.get('message', f'AlcheMY update {datetime.now().strftime("%Y-%m-%d %H:%M")}')
            branch = req_data.get('branch', 'main')
            # Always rebuild bundles before publishing
            db.update_bundle_files()
            success, output = db.publish_to_github(commit_message, branch)
            self.send_json({"success": success, "output": output})

        else:
            self.send_error(404, "Unknown API Endpoint")


def find_free_port(start_port=8765):
    for port in range(start_port, start_port + 50):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
    return start_port


def launch_desktop_app(url):
    edge_paths = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\Edge\Application\msedge.exe")
    ]
    chrome_paths = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        os.path.expandvars(r"%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe")
    ]

    for p in edge_paths + chrome_paths:
        if os.path.exists(p):
            try:
                subprocess.Popen([p, f"--app={url}"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                return
            except Exception:
                pass

    webbrowser.open(url)


def main():
    db.load_all()

    port = find_free_port(8765)
    server_address = ('127.0.0.1', port)
    httpd = HTTPServer(server_address, GeneratorRequestHandler)

    url = f"http://127.0.0.1:{port}"
    print("=" * 60)
    print(f" AlcheMY Generator Web-Desktop Application Backend")
    print(f" [OK] Running locally at: {url}")
    print("=" * 60)

    threading.Timer(0.8, lambda: launch_desktop_app(url)).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[Server] Shutting down AlcheMY Generator server...")
        httpd.server_close()


if __name__ == "__main__":
    main()