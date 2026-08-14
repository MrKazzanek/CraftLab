/**
 * Embedded Fallback Data for AlcheMY
 * Allows game to run seamlessly when opened directly via file:// protocol without local server CORS issues.
 */
export const EMBEDDED_DATA = {
  "elements": [
    {
      "id": "water",
      "name_pl": "Woda",
      "name_eng": "Water",
      "category": "basic",
      "rarity": "common",
      "sort_order": 1,
      "start_element": true,
      "description_pl": "Najbardziej podstawowy składnik. Bez niej wszystko szybko robi się suche",
      "description_eng": "The most basic ingredient. Without it, everything gets dry very quickly",
      "model_type": "2D",
      "model_path": "/assets/models/water.json",
      "textures_folder": "/assets/elements/water.png",
      "tags": [
        "water",
        "liquid",
        "fluid",
        "woda",
        "ciecz",
        "płyn"
      ]
    },
    {
      "id": "air",
      "name_pl": "Powietrze",
      "name_eng": "Air",
      "category": "basic",
      "rarity": "common",
      "sort_order": 2,
      "start_element": true,
      "description_pl": "Nie widać go, ale spróbuj bez niego żyć",
      "description_eng": "You can't see it, but try living without it",
      "model_type": "2D",
      "model_path": "/assets/models/air.json",
      "textures_folder": "/assets/elements/air.png",
      "tags": [
        "air",
        "gas",
        "atmosphere",
        "powietrze",
        "gaz",
        "atmosfera"
      ]
    },
    {
      "id": "cloud",
      "name_pl": "Chmura",
      "name_eng": "Cloud",
      "category": "weather",
      "rarity": "common",
      "sort_order": 3,
      "start_element": false,
      "description_pl": "Woda, która postanowiła zamieszkać trochę wyżej",
      "description_eng": "Water that decided to live a little higher up",
      "model_type": "2D",
      "model_path": "/assets/models/cloud.json",
      "textures_folder": "/assets/elements/cloud.png",
      "tags": [
        "cloud",
        "sky",
        "vapor",
        "chmura",
        "niebo",
        "opar"
      ]
    },
    {
      "id": "rain",
      "name_pl": "Deszcz",
      "name_eng": "Rain",
      "category": "weather",
      "rarity": "common",
      "sort_order": 4,
      "start_element": false,
      "description_pl": "Chmura, która nie potrafiła już utrzymać wszystkiego w środku",
      "description_eng": "A cloud that could no longer hold everything inside",
      "model_type": "2D",
      "model_path": "/assets/models/rain.json",
      "textures_folder": "/assets/elements/rain.png",
      "tags": [
        "rain",
        "water",
        "precipitation",
        "deszcz",
        "woda",
        "opad"
      ]
    },
    {
      "id": "fire",
      "name_pl": "Ogień",
      "name_eng": "Fire",
      "category": "energy",
      "rarity": "common",
      "sort_order": 5,
      "start_element": true,
      "description_pl": "Gorący, świecący i absolutnie niegodny zaufania",
      "description_eng": "Hot, glowing, and absolutely not to be trusted",
      "model_type": "2D",
      "model_path": "/assets/models/fire.json",
      "textures_folder": "/assets/elements/fire.png",
      "tags": [
        "fire",
        "heat",
        "flame",
        "ogień",
        "ciepło",
        "płomień"
      ]
    },
    {
      "id": "steam",
      "name_pl": "Para",
      "name_eng": "Steam",
      "category": "energy",
      "rarity": "common",
      "sort_order": 6,
      "start_element": false,
      "description_pl": "Woda zrobiła się tak gorąca, że postanowiła odlecieć",
      "description_eng": "Water got so hot that it decided to fly away",
      "model_type": "2D",
      "model_path": "/assets/models/steam.json",
      "textures_folder": "/assets/elements/steam.png",
      "tags": [
        "steam",
        "vapor",
        "heat",
        "para",
        "opar",
        "ciepło"
      ]
    },
    {
      "id": "soil",
      "name_pl": "Gleba",
      "name_eng": "Soil",
      "category": "nature",
      "rarity": "common",
      "sort_order": 7,
      "start_element": true,
      "description_pl": "Zwykła ziemia. Przynajmniej dopóki nie zaczniesz jej mieszać z innymi rzeczami",
      "description_eng": "Just ordinary soil. At least until you start mixing it with other things",
      "model_type": "2D",
      "model_path": "/assets/models/soil.json",
      "textures_folder": "/assets/elements/soil.png",
      "tags": [
        "soil",
        "earth",
        "ground",
        "gleba",
        "ziemia",
        "grunt"
      ]
    },
    {
      "id": "mud",
      "name_pl": "Błoto",
      "name_eng": "Mud",
      "category": "nature",
      "rarity": "common",
      "sort_order": 8,
      "start_element": false,
      "description_pl": "Gleba po bliższym spotkaniu z wodą",
      "description_eng": "Soil after a close encounter with water",
      "model_type": "2D",
      "model_path": "/assets/models/mud.json",
      "textures_folder": "/assets/elements/mud.png",
      "tags": [
        "mud",
        "soil",
        "wet",
        "błoto",
        "gleba",
        "mokre"
      ]
    },
    {
      "id": "geyser",
      "name_pl": "Gejzer",
      "name_eng": "Geyser",
      "category": "energy",
      "rarity": "uncommon",
      "sort_order": 9,
      "start_element": false,
      "description_pl": "Ziemia, która nagle przypomniała sobie, że ma fontannę",
      "description_eng": "The Earth suddenly remembered it had a fountain",
      "model_type": "2D",
      "model_path": "/assets/models/geyser.json",
      "textures_folder": "/assets/elements/geyser.png",
      "tags": [
        "geyser",
        "water",
        "eruption",
        "gejzer",
        "woda",
        "erupcja"
      ]
    },
    {
      "id": "plant",
      "name_pl": "Roślina",
      "name_eng": "Plant",
      "category": "life",
      "rarity": "common",
      "sort_order": 10,
      "start_element": false,
      "description_pl": "Gleba dostała deszcz i postanowiła coś wyhodować",
      "description_eng": "The soil got some rain and decided to grow something",
      "model_type": "2D",
      "model_path": "/assets/models/plant.json",
      "textures_folder": "/assets/elements/plant.png",
      "tags": [
        "plant",
        "growth",
        "nature",
        "roślina",
        "wzrost",
        "natura"
      ]
    },
    {
      "id": "wind",
      "name_pl": "Wiatr",
      "name_eng": "Wind",
      "category": "weather",
      "rarity": "common",
      "sort_order": 11,
      "start_element": false,
      "description_pl": "Powietrze zaczęło się ruszać. I nie zamierza przestać",
      "description_eng": "The air started moving. And it has no plans to stop",
      "model_type": "2D",
      "model_path": "/assets/models/air.json",
      "textures_folder": "/assets/elements/air.png",
      "tags": [
        "wind",
        "air",
        "movement",
        "wiatr",
        "powietrze",
        "ruch"
      ]
    },
    {
      "id": "fog",
      "name_pl": "Mgła",
      "name_eng": "Fog",
      "category": "weather",
      "rarity": "common",
      "sort_order": 12,
      "start_element": false,
      "description_pl": "Chmura zeszła na ziemię. Teraz nic nie widać",
      "description_eng": "A cloud came down to earth. Now you can't see anything",
      "model_type": "2D",
      "model_path": "/assets/models/fog.json",
      "textures_folder": "/assets/elements/fog.png",
      "tags": [
        "fog",
        "mist",
        "moisture",
        "mgła",
        "opar",
        "wilgoć"
      ]
    },
    {
      "id": "tree",
      "name_pl": "Drzewo",
      "name_eng": "Tree",
      "category": "nature",
      "rarity": "uncommon",
      "sort_order": 13,
      "start_element": false,
      "description_pl": "Roślina postanowiła zostać ogromna",
      "description_eng": "The plant decided to become enormous",
      "model_type": "2D",
      "model_path": "/assets/models/tree.json",
      "textures_folder": "/assets/elements/tree.png",
      "tags": [
        "tree",
        "wood",
        "plant",
        "drzewo",
        "drewno",
        "roślina"
      ]
    },
    {
      "id": "volcano",
      "name_pl": "Wulkan",
      "name_eng": "Vulcano",
      "category": "nature",
      "rarity": "uncommon",
      "sort_order": 14,
      "start_element": false,
      "description_pl": "Góra, która od czasu do czasu postanawia wypluć trochę lawy, dymu i popiołu",
      "description_eng": "A mountain that occasionally decides to spit out lava, smoke, and ash",
      "model_type": "2D",
      "model_path": "/assets/models/vulcan.json",
      "textures_folder": "/assets/elements/vulcan.png",
      "tags": [
        "wulkan",
        "lawa",
        "erupcja",
        "volcano",
        "lava",
        "eruption"
      ]
    },
    {
      "id": "lava",
      "name_pl": "Lawa",
      "name_eng": "Lava",
      "category": "nature",
      "rarity": "uncommon",
      "sort_order": 15,
      "start_element": false,
      "description_pl": "Gorąca, płynna skała prosto z wnętrza Ziemi. Lepiej jej nie dotykaj!",
      "description_eng": "Hot, molten rock straight from the depths of Earth. Better not touch it!",
      "model_type": "2D",
      "model_path": "/assets/models/lava.json",
      "textures_folder": "/assets/elements/lava.png",
      "tags": [
        "wulkan",
        "magma",
        "ogień",
        "lava",
        "magma",
        "volcanic"
      ]
    },
    {
      "id": "obsidian",
      "name_pl": "Obsydian",
      "name_eng": "Obsidian",
      "category": "material",
      "rarity": "epic",
      "sort_order": 16,
      "start_element": false,
      "description_pl": "Czarny jak noc, twardy jak twoje postanowienia… przynajmniej dopóki nie zobaczysz lawy",
      "description_eng": "Black as night, hard as your determination… at least until you meet some lava",
      "model_type": "2D",
      "model_path": "/assets/models/obsidian.json",
      "textures_folder": "/assets/elements/obsidian.png",
      "tags": [
        "wulkaniczny",
        "skała",
        "lawa",
        "volcanic",
        "rock",
        "lava"
      ]
    },
    {
      "id": "forest",
      "name_pl": "Las",
      "name_eng": "Forest",
      "category": "nature",
      "rarity": "common",
      "sort_order": 17,
      "start_element": false,
      "description_pl": "Drzewa, krzaki i milion rzeczy, które mogą cię ugryźć",
      "description_eng": "Trees, bushes, and a million things that can bite you",
      "model_type": "2D",
      "model_path": "/assets/models/forest.json",
      "textures_folder": "/assets/elements/forest.png",
      "tags": [
        "drzewa",
        "natura",
        "roślinność",
        "trees",
        "nature",
        "vegetation"
      ]
    },
    {
      "id": "grass",
      "name_pl": "Trawa",
      "name_eng": "Grass",
      "category": "nature",
      "rarity": "common",
      "sort_order": 18,
      "start_element": false,
      "description_pl": "Halo! Potrzeba kosiarki...",
      "description_eng": "Hey! We need a lawn mower...",
      "model_type": "2D",
      "model_path": "/assets/models/grass.json",
      "textures_folder": "/assets/elements/grass.png",
      "tags": [
        "trawa",
        "natura",
        "roślinność",
        "grass",
        "nature",
        "vegetation"
      ]
    },
    {
      "id": "leaf",
      "name_pl": "Liść",
      "name_eng": "Leaf",
      "category": "nature",
      "rarity": "common",
      "sort_order": 19,
      "start_element": false,
      "description_pl": "Mały, zielony, całkiem bezużyteczny…",
      "description_eng": "Small, green, pretty useless…",
      "model_type": "2D",
      "model_path": "/assets/models/leaf.json",
      "textures_folder": "/assets/elements/leaf.png",
      "tags": [
        "liść",
        "natura",
        "roślinność",
        "leaf",
        "nature",
        "foliage"
      ]
    },
    {
      "id": "flower",
      "name_pl": "Kwiatek",
      "name_eng": "Flower",
      "category": "nature",
      "rarity": "common",
      "sort_order": 20,
      "start_element": false,
      "description_pl": "Kolorowy dowód na to, że natura też potrafi robić dekoracje",
      "description_eng": "A colorful proof that nature knows how to decorate too",
      "model_type": "2D",
      "model_path": "/assets/models/flower.json",
      "textures_folder": "/assets/elements/flower.png",
      "tags": [
        "kwiat",
        "natura",
        "roślinność",
        "flower",
        "nature",
        "plant"
      ]
    },
    {
      "id": "bouquet_of_flowers",
      "name_pl": "Bukiet kwiatów",
      "name_eng": "Bouquet of Flowers",
      "category": "nature",
      "rarity": "legendary",
      "sort_order": 21,
      "start_element": false,
      "description_pl": "Kiedy jeden kwiatek to za mało, bierzesz całą garść",
      "description_eng": "When one flower isn't enough, grab a whole bunch",
      "model_type": "2D",
      "model_path": "/assets/models/bouquet_of_flowers.json",
      "textures_folder": "/assets/elements/Bouquet_of_Flowers.png",
      "tags": [
        "bukiet",
        "kwiaty",
        "natura",
        "bouquet",
        "flowers",
        "nature"
      ]
    },
    {
      "id": "mushroom",
      "name_pl": "Grzyb",
      "name_eng": "Mushroom",
      "category": "nature",
      "rarity": "common",
      "sort_order": 22,
      "start_element": false,
      "description_pl": "Mały, dziwny i prawdopodobnie nie powinieneś go jeść",
      "description_eng": "Small, weird, and probably something you shouldn't eat",
      "model_type": "2D",
      "model_path": "/assets/models/mushroom.json",
      "textures_folder": "/assets/elements/mushroom.png",
      "tags": [
        "grzyb",
        "natura",
        "roślinność",
        "mushroom",
        "nature",
        "fungus"
      ]
    },
    {
      "id": "stone",
      "name_pl": "Kamień",
      "name_eng": "Stone",
      "category": "material",
      "rarity": "common",
      "sort_order": 23,
      "start_element": false,
      "description_pl": "Twardy, ciężki i zawsze pojawia się dokładnie tam, gdzie chciałeś postawić coś innego",
      "description_eng": "Hard, heavy, and always somehow appears exactly where you wanted to build something else",
      "model_type": "2D",
      "model_path": "/assets/models/stone.json",
      "textures_folder": "/assets/elements/stone.png",
      "tags": [
        "kamień",
        "skała",
        "minerał",
        "stone",
        "rock",
        "mineral"
      ]
    },
    {
      "id": "mountain",
      "name_pl": "Góra",
      "name_eng": "Mountain",
      "category": "nature",
      "rarity": "common",
      "sort_order": 24,
      "start_element": false,
      "description_pl": "Dużo kamienia, trochę wysokości i zero potrzeby wchodzenia na sam szczyt.",
      "description_eng": "Lots of stone, a bit of height, and absolutely no need to climb all the way to the top",
      "model_type": "2D",
      "model_path": "/assets/models/mountain.json",
      "textures_folder": "/assets/elements/mountain.png",
      "tags": [
        "góra",
        "kamień",
        "natura",
        "mountain",
        "stone",
        "nature"
      ]
    },
    {
      "id": "sand",
      "name_pl": "Piasek",
      "name_eng": "Sand",
      "category": "nature",
      "rarity": "common",
      "sort_order": 25,
      "start_element": false,
      "description_pl": "Tysiące małych kamyków, które postanowiły zostać irytującym pyłem",
      "description_eng": "Thousands of tiny rocks that decided to become annoying little grains",
      "model_type": "2D",
      "model_path": "/assets/models/sand.json",
      "textures_folder": "/assets/elements/sand.png",
      "tags": [
        "piasek",
        "plaża",
        "pustynia",
        "sand",
        "beach",
        "desert"
      ]
    },
    {
      "id": "desert",
      "name_pl": "Pustynia",
      "name_eng": "Desert",
      "category": "nature",
      "rarity": "common",
      "sort_order": 26,
      "start_element": false,
      "description_pl": "Ogromna piaskownica, tylko bez wiaderka, łopatki i jakiejkolwiek nadziei na cień",
      "description_eng": "A giant sandbox, just without a bucket, a shovel, or any hope of finding shade",
      "model_type": "2D",
      "model_path": "/assets/models/desert.json",
      "textures_folder": "/assets/elements/desert.png",
      "tags": [
        "pustynia",
        "piasek",
        "gorąco",
        "desert",
        "sand",
        "heat"
      ]
    },
    {
      "id": "cactus",
      "name_pl": "Kaktus",
      "name_eng": "Cactus",
      "category": "nature",
      "rarity": "common",
      "sort_order": 27,
      "start_element": false,
      "description_pl": "Roślina, która wybrała życie na pustyni i uznała, że przytulanie jest przereklamowane",
      "description_eng": "A plant that chose to live in the desert and decided that hugs are overrated",
      "model_type": "2D",
      "model_path": "/assets/models/cactus.json",
      "textures_folder": "/assets/elements/cactus.png",
      "tags": [
        "kaktus",
        "pustynia",
        "roślina",
        "cactus",
        "desert",
        "plant"
      ]
    },
    {
      "id": "river",
      "name_pl": "Rzeka",
      "name_eng": "River",
      "category": "nature",
      "rarity": "common",
      "sort_order": 28,
      "start_element": false,
      "description_pl": "Woda, która postanowiła nigdzie nie stać i ciągle gdzieś płynie",
      "description_eng": "Water that decided to never stand still and just keeps going somewhere",
      "model_type": "2D",
      "model_path": "/assets/models/river.json",
      "textures_folder": "/assets/elements/river.png",
      "tags": [
        "rzeka",
        "woda",
        "natura",
        "river",
        "water",
        "nature"
      ]
    },
    {
      "id": "ocean",
      "name_pl": "Ocean",
      "name_eng": "Ocean",
      "category": "nature",
      "rarity": "rare",
      "sort_order": 29,
      "start_element": false,
      "description_pl": "Morze, które tak urosło, że postanowiło zmienić nazwę",
      "description_eng": "A sea that got so big it decided to change its name",
      "model_type": "2D",
      "model_path": "/assets/models/sea.json",
      "textures_folder": "/assets/elements/sea.png",
      "tags": [
        "ocean",
        "woda",
        "morze",
        "ocean",
        "water",
        "sea"
      ]
    },
    {
      "id": "sea",
      "name_pl": "Morze",
      "name_eng": "Sea",
      "category": "nature",
      "rarity": "common",
      "sort_order": 29,
      "start_element": false,
      "description_pl": "Wielka kałuża, która trochę za bardzo uwierzyła w siebie",
      "description_eng": "A giant puddle that got a little too confident",
      "model_type": "2D",
      "model_path": "/assets/models/sea.json",
      "textures_folder": "/assets/elements/sea.png",
      "tags": [
        "morze",
        "woda",
        "ocean",
        "sea",
        "water",
        "ocean"
      ]
    }
  ],
  "recipes": [
    {
      "id": "recipe_bouquet_of_flowers",
      "inputs": [
        "flower",
        "flower",
        "flower"
      ],
      "result": "bouquet_of_flowers",
      "hidden": true
    },
    {
      "id": "recipe_cactus",
      "inputs": [
        "desert",
        "plant"
      ],
      "result": "cactus",
      "hidden": true
    },
    {
      "id": "recipe_cloud",
      "inputs": [
        "water",
        "air"
      ],
      "result": "cloud",
      "hidden": true
    },
    {
      "id": "recipe_desert",
      "inputs": [
        "sand",
        "sand"
      ],
      "result": "desert",
      "hidden": true
    },
    {
      "id": "recipe_flower",
      "inputs": [
        "grass",
        "plant"
      ],
      "result": "flower",
      "hidden": true
    },
    {
      "id": "recipe_fog",
      "inputs": [
        "cloud",
        "water",
        "air"
      ],
      "result": "fog",
      "hidden": true
    },
    {
      "id": "recipe_forest",
      "inputs": [
        "tree",
        "tree",
        "soil"
      ],
      "result": "forest",
      "hidden": true
    },
    {
      "id": "recipe_geyser",
      "inputs": [
        "soil",
        "steam",
        "water"
      ],
      "result": "geyser",
      "hidden": true,
      "rarity_override": "uncommon"
    },
    {
      "id": "recipe_grass",
      "inputs": [
        "soil",
        "plant"
      ],
      "result": "grass",
      "hidden": true
    },
    {
      "id": "recipe_lava",
      "inputs": [
        "volcano",
        "fire",
        "air"
      ],
      "result": "lava",
      "hidden": true
    },
    {
      "id": "recipe_leaf",
      "inputs": [
        "wind",
        "tree"
      ],
      "result": "leaf",
      "hidden": true
    },
    {
      "id": "recipe_mountain",
      "inputs": [
        "stone",
        "soil"
      ],
      "result": "mountain",
      "hidden": true
    },
    {
      "id": "recipe_mud",
      "inputs": [
        "water",
        "soil"
      ],
      "result": "mud",
      "hidden": true
    },
    {
      "id": "recipe_mud_second",
      "inputs": [
        "rain",
        "soil"
      ],
      "result": "mud",
      "hidden": true
    },
    {
      "id": "recipe_mushroom",
      "inputs": [
        "forest",
        "plant"
      ],
      "result": "mushroom",
      "hidden": true
    },
    {
      "id": "recipe_obsidian",
      "inputs": [
        "water",
        "lava"
      ],
      "result": "obsidian",
      "hidden": true
    },
    {
      "id": "recipe_ocean",
      "inputs": [
        "sea",
        "sea"
      ],
      "result": "ocean",
      "hidden": true
    },
    {
      "id": "recipe_ocean_second",
      "inputs": [
        "water",
        "water",
        "water"
      ],
      "result": "ocean",
      "hidden": true
    },
    {
      "id": "recipe_plant",
      "inputs": [
        "air",
        "soil",
        "rain"
      ],
      "result": "plant",
      "hidden": true
    },
    {
      "id": "recipe_rain",
      "inputs": [
        "cloud",
        "water"
      ],
      "result": "rain",
      "hidden": true
    },
    {
      "id": "recipe_river",
      "inputs": [
        "mountain",
        "water"
      ],
      "result": "river",
      "hidden": true
    },
    {
      "id": "recipe_sand",
      "inputs": [
        "wind",
        "stone"
      ],
      "result": "sand",
      "hidden": true
    },
    {
      "id": "recipe_sea",
      "inputs": [
        "water",
        "water"
      ],
      "result": "sea",
      "hidden": true
    },
    {
      "id": "recipe_steam",
      "inputs": [
        "water",
        "fire"
      ],
      "result": "steam",
      "hidden": true
    },
    {
      "id": "recipe_stone",
      "inputs": [
        "lava",
        "air"
      ],
      "result": "stone",
      "hidden": true
    },
    {
      "id": "recipe_tree",
      "inputs": [
        "soil",
        "rain",
        "plant"
      ],
      "result": "tree",
      "hidden": true
    },
    {
      "id": "recipe_volcano",
      "inputs": [
        "soil",
        "fire"
      ],
      "result": "volcano",
      "hidden": true
    },
    {
      "id": "recipe_wind",
      "inputs": [
        "air",
        "cloud"
      ],
      "result": "wind",
      "hidden": true
    }
  ],
  "achievements": [
    {
      "id": "ach_first_element",
      "name_pl": "Pierwszy składnik",
      "name_eng": "The first ingredient",
      "type": "combination_count",
      "value": 1,
      "icon": "/assets/achievements/first_element.png",
      "hidden": false,
      "description_pl": "Wytwórz pierwszą rzecz!",
      "description_eng": "Create the first thing!"
    },
    {
      "id": "ach_for_you",
      "name_pl": "To dla Ciebie!",
      "name_eng": "This Is for You!",
      "type": "discover_specific_element",
      "value": 5,
      "icon": "/assets/achievements/bouquet_of_flowers.png",
      "hidden": false,
      "description_pl": "Wytwórz swój pierwszy bukiet kwiatów i podaruj go… komuś wyjątkowemu",
      "description_eng": "Craft your first bouquet of flowers and give it to… someone special",
      "target_element": "bouquet_of_flowers"
    },
    {
      "id": "ach_lava_chicken",
      "name_eng": "Lava Chicken",
      "name_pl": "Lawa Kurczak",
      "description_eng": "Get lava!",
      "description_pl": "Zdobądź lawe!",
      "icon": "/assets/achievements/lava.png",
      "type": "discover_specific_element",
      "target_element": "lava",
      "value": 1,
      "hidden": false
    },
    {
      "id": "ach_trio",
      "name_pl": "Jeden, dwa, trzy!",
      "name_eng": "One, Two, Three!",
      "type": "trio_combination",
      "value": 5,
      "icon": "/assets/achievements/trio.png",
      "hidden": true,
      "description_pl": "Wytwórz coś co wymaga trzech składników.",
      "description_eng": "Craft something that requires three ingredients."
    }
  ],
  "categories": [
    {
      "id": "basic",
      "color": "#4a90e2",
      "icon": "sparkles"
    },
    {
      "id": "nature",
      "color": "#2ecc71",
      "icon": "leaf"
    },
    {
      "id": "energy",
      "color": "#f1c40f",
      "icon": "zap"
    },
    {
      "id": "weather",
      "color": "#3498db",
      "icon": "cloud-rain"
    },
    {
      "id": "material",
      "color": "#e67e22",
      "icon": "box"
    },
    {
      "id": "life",
      "color": "#e74c3c",
      "icon": "heart"
    },
    {
      "id": "technology",
      "color": "#9b59b6",
      "icon": "cpu"
    },
    {
      "id": "magic",
      "color": "#1abc9c",
      "icon": "wand"
    }
  ],
  "translations": {
    "pl": {
      "app_title": "AlcheMY",
      "subtitle": "Kombinuj i Odkrywaj",
      "search_placeholder": "Szukaj składnika...",
      "clear_pedestal": "Wyczyść",
      "discovered_counter": "Odkryto",
      "all_elements_discovered": "Odkryto wszystkie składniki!",
      "combine_btn": "Połącz",
      "output_slot": "Wynik",
      "sitetitle": "CraftLab - Gra Kombinacyjna",
      "tabs": {
        "collection": "Kolekcja",
        "achievements": "Osiągnięcia",
        "settings": "Ustawienia"
      },
      "sort": {
        "az": "A do Z",
        "za": "Z do A",
        "newest": "Najnowsze",
        "oldest": "Najstarsze",
        "category": "Kategoria",
        "rarity": "Rzadkość",
        "ulu": "Ulubione"
      },
      "categories": {
        "all": "Wszystkie",
        "basic": "Podstawowe",
        "nature": "Natura",
        "energy": "Energia",
        "weather": "Pogoda",
        "material": "Materiały",
        "life": "Życie",
        "technology": "Technologia",
        "magic": "Magia"
      },
      "rarities": {
        "common": "Zwykły",
        "uncommon": "Niepospolity",
        "rare": "Rzadki",
        "epic": "Epicki",
        "legendary": "Legendarny"
      },
      "settings_modal": {
        "title": "Ustawienia Gry",
        "theme": "Motyw Strony",
        "theme_system": "Systemowy",
        "theme_light": "Jasny",
        "theme_dark": "Ciemny",
        "language": "Język",
        "duplicate_crafting": "Ponowne wytwarzanie odkrytych",
        "duplicate_blocked": "Zablokowane",
        "duplicate_allowed": "Dozwolone",
        "reset_settings": "Zresetuj Wygląd i Ustawienia",
        "reset_data": "Zresetuj Postęp Gry",
        "reset_confirm_title": "Reset Postępu",
        "reset_confirm_msg": "Czy na pewno chcesz usunąć wszystkie odkryte składniki, osiągnięcia i statystyki? Tej operacji nie można cofnąć!",
        "confirm_yes": "Tak, usuń postęp",
        "confirm_no": "Anuluj"
      },
      "achievements_modal": {
        "title": "Osiągnięcia Alchemika",
        "unlocked": "Odblokowano",
        "locked": "Zablokowane",
        "progress": "Postęp"
      },
      "discovery_toast": {
        "title": "Nowy Składnik!",
        "achievement_unlocked": "Osiągnięcie Odblokowane!"
      },
      "notifications": {
        "invalid_combo": "Nic z tego nie powstało... Spróbuj innej kombinacji!",
        "already_discovered": "Ten składnik został już wcześniej odkryty!",
        "duplicate_prevented": "Ten składnik został już wcześniej odkryty! (Włącz ponowne wytwarzanie w ustawieniach)",
        "slot_full": "Wszystkie 3 miejsca są zajęte!",
        "cleared": "Płótno wyczyszczone!",
        "settings_restored": "Przywrócono domyślne ustawienia i wygląd gry!"
      },
      "recipe_tooltip": {
        "recipe_title": "Receptura:",
        "base_element": "Element podstawowy",
        "unknown_recipe": "Nieodkryta receptura",
        "favorite_pinned": "Przypięto do ulubionych",
        "favorite_unpinned": "Usunięto z ulubionych"
      },
      "element_modal": {
        "title": "Szczegóły Składnika",
        "category": "Kategoria",
        "rarity": "Rzadkość",
        "discovered_at": "Odkryto",
        "recipes": "Wycena / Sposób Wytworzenia",
        "close": "Zamknij"
      }
    },
    "en": {
      "app_title": "AlcheMY",
      "subtitle": "Combine & Discover",
      "search_placeholder": "Search element...",
      "clear_pedestal": "Clear",
      "discovered_counter": "Discovered",
      "all_elements_discovered": "All elements discovered!",
      "combine_btn": "Combine",
      "output_slot": "Result",
      "sitetitle": "CraftLab - Combination Game",
      "tabs": {
        "collection": "Collection",
        "achievements": "Achievements",
        "settings": "Settings"
      },
      "own": {
        "ba": "Achievements"
      },
      "sort": {
        "az": "A to Z",
        "za": "Z to A",
        "newest": "Newest",
        "oldest": "Oldest",
        "category": "Category",
        "rarity": "Rarity",
        "ulu": "Favorites"
      },
      "categories": {
        "all": "All",
        "basic": "Basic",
        "nature": "Nature",
        "energy": "Energy",
        "weather": "Weather",
        "material": "Material",
        "life": "Life",
        "technology": "Technology",
        "magic": "Magic"
      },
      "rarities": {
        "common": "Common",
        "uncommon": "Uncommon",
        "rare": "Rare",
        "epic": "Epic",
        "legendary": "Legendary"
      },
      "settings_modal": {
        "title": "Game Settings",
        "theme": "Theme",
        "theme_system": "System",
        "theme_light": "Light",
        "theme_dark": "Dark",
        "language": "Language",
        "duplicate_crafting": "Recraft discovered elements",
        "duplicate_blocked": "Blocked",
        "duplicate_allowed": "Allowed",
        "reset_settings": "Reset Appearance & Settings",
        "reset_data": "Reset Game Progress",
        "reset_confirm_title": "Reset Progress",
        "reset_confirm_msg": "Are you sure you want to delete all discovered elements, achievements, and stats? This cannot be undone!",
        "confirm_yes": "Yes, reset progress",
        "confirm_no": "Cancel"
      },
      "achievements_modal": {
        "title": "Alchemist Achievements",
        "unlocked": "Unlocked",
        "locked": "Locked",
        "progress": "Progress"
      },
      "discovery_toast": {
        "title": "New Element Discovered!",
        "achievement_unlocked": "Achievement Unlocked!"
      },
      "notifications": {
        "invalid_combo": "Nothing happened... Try another combination!",
        "already_discovered": "This element was already discovered!",
        "duplicate_prevented": "This element was already discovered! (Enable recrafting in settings)",
        "slot_full": "All 3 input slots are occupied!",
        "cleared": "Pedestal cleared!",
        "settings_restored": "Appearance and settings restored to default!"
      },
      "recipe_tooltip": {
        "recipe_title": "Recipe:",
        "base_element": "Basic Element",
        "unknown_recipe": "Undiscovered recipe",
        "favorite_pinned": "Pinned to favorites",
        "favorite_unpinned": "Removed from favorites"
      },
      "element_modal": {
        "title": "Element Details",
        "category": "Category",
        "rarity": "Rarity",
        "discovered_at": "Discovered",
        "recipes": "Creation Formula",
        "close": "Close"
      }
    }
  }
};
if (typeof window !== 'undefined') {
  window.EMBEDDED_DATA = EMBEDDED_DATA;
}
