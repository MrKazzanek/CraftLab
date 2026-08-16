(function() {
  'use strict';
  /**
 * Embedded Fallback Data for AlcheMY
 * Allows game to run seamlessly when opened directly via file:// protocol without local server CORS issues.
 */
const EMBEDDED_DATA = {
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
    },
    {
      "id": "glass",
      "name_pl": "Szkło",
      "name_eng": "Glass",
      "category": "material",
      "rarity": "uncommon",
      "sort_order": 31,
      "start_element": false,
      "description_pl": "Piasek, który przeszedł przez ogień i wyszedł z tego trochę bardziej przezroczysty",
      "description_eng": "Sand that went through fire and came out a little more transparent",
      "model_type": "2D",
      "model_path": "/assets/models/glass.json",
      "textures_folder": "/assets/elements/glass.png",
      "tags": [
        "szkło",
        "przezroczyste",
        "ogień",
        "glass",
        "transparent",
        "fire"
      ]
    },
    {
      "id": "sandstorm",
      "name_pl": "Burza piaskowa",
      "name_eng": "Sandstorm",
      "category": "nature",
      "rarity": "common",
      "sort_order": 32,
      "start_element": false,
      "description_pl": "Kiedy piasku jest za dużo, wiatr postanawia rozrzucić go wszystkim po oczach",
      "description_eng": "When there's too much sand, the wind decides to throw it straight into everyone's eyes",
      "model_type": "2D",
      "model_path": "/assets/models/sandstorm.json",
      "textures_folder": "/assets/elements/sandstorm.png",
      "tags": [
        "burza",
        "piasek",
        "wiatr",
        "sandstorm",
        "sand",
        "wind"
      ]
    },
    {
      "id": "cloud_cover",
      "name_pl": "Zachmurzenie",
      "name_eng": "Cloud Cover",
      "category": "weather",
      "rarity": "rare",
      "sort_order": 33,
      "start_element": false,
      "description_pl": "Niebo założyło szary koc i uznało, że słońce ma dzisiaj wolne",
      "description_eng": "The sky put on a gray blanket and decided the sun was taking the day off",
      "model_type": "2D",
      "model_path": "/assets/models/cloud_cover.json",
      "textures_folder": "/assets/elements/cloud_cover.png",
      "tags": [
        "chmury",
        "niebo",
        "pogoda",
        "clouds",
        "sky",
        "weather"
      ]
    },
    {
      "id": "continent",
      "name_pl": "Kontynent",
      "name_eng": "Continent",
      "category": "nature",
      "rarity": "common",
      "sort_order": 34,
      "start_element": false,
      "description_pl": "Tak dużo ziemi w jednym miejscu, że ocean zaczął czuć się trochę niepotrzebny",
      "description_eng": "So much land in one place that the ocean started feeling a little unnecessary",
      "model_type": "2D",
      "model_path": "/assets/models/continent.json",
      "textures_folder": "/assets/elements/continent.png",
      "tags": [
        "kontynent",
        "ląd",
        "ziemia",
        "continent",
        "land",
        "earth"
      ]
    },
    {
      "id": "earth",
      "name_pl": "Ziemia",
      "name_eng": "Earth",
      "category": "nature",
      "rarity": "rare",
      "sort_order": 35,
      "start_element": false,
      "description_pl": "Dwa kontynenty, trochę oceanu i nagle masz własną planetę",
      "description_eng": "Two continents, some ocean, and suddenly you have your very own planet",
      "model_type": "2D",
      "model_path": "/assets/models/earth.json",
      "textures_folder": "/assets/elements/earth.png",
      "tags": [
        "ziemia",
        "planeta",
        "świat",
        "earth",
        "planet",
        "world"
      ]
    },
    {
      "id": "hourglass",
      "name_pl": "Klepsydra",
      "name_eng": "Hourglass",
      "category": "technology",
      "rarity": "common",
      "sort_order": 36,
      "start_element": false,
      "description_pl": "Dwa kawałki szkła i piasek, który właśnie dostał pracę na pełen etat",
      "description_eng": "Two pieces of glass and some sand that just got a full-time job",
      "model_type": "2D",
      "model_path": "/assets/models/hourglass.json",
      "textures_folder": "/assets/elements/hourglass.png",
      "tags": [
        "klepsydra",
        "czas",
        "piasek",
        "hourglass",
        "time",
        "sand"
      ]
    },
    {
      "id": "pressure",
      "name_pl": "Ciśnienie",
      "name_eng": "Pressure",
      "category": "energy",
      "rarity": "common",
      "sort_order": 37,
      "start_element": false,
      "description_pl": "Powietrze tak mocno się ściska, że aż zaczyna mieć swoje zdanie",
      "description_eng": "Air gets squeezed so hard that it starts having an opinion",
      "model_type": "2D",
      "model_path": "/assets/models/pressure.json",
      "textures_folder": "/assets/elements/pressure.png",
      "tags": [
        "ciśnienie",
        "powietrze",
        "atmosfera",
        "pressure",
        "air",
        "atmosphere",
        "bar"
      ]
    },
    {
      "id": "atmosphere",
      "name_pl": "Atmosfera",
      "name_eng": "Atmosphere",
      "category": "nature",
      "rarity": "common",
      "sort_order": 38,
      "start_element": false,
      "description_pl": "Niewidzialny kocyk otulający planetę. Bez niego byłoby tu naprawdę nieprzyjemnie",
      "description_eng": "An invisible blanket wrapped around the planet. Without it, things would get pretty unpleasant",
      "model_type": "2D",
      "model_path": "/assets/models/atmosphere.json",
      "textures_folder": "/assets/elements/atmosphere.png",
      "tags": [
        "atmosfera",
        "powietrze",
        "planeta",
        "atmosphere",
        "air",
        "planet"
      ]
    },
    {
      "id": "sky",
      "name_pl": "Niebo",
      "name_eng": "Sky",
      "category": "nature",
      "rarity": "common",
      "sort_order": 39,
      "start_element": false,
      "description_pl": "To, co widzisz nad głową, kiedy akurat nie patrzysz w ziemię",
      "description_eng": "The thing you see above your head when you're not looking at the ground",
      "model_type": "2D",
      "model_path": "/assets/models/sky.json",
      "textures_folder": "/assets/elements/sky.png",
      "tags": [
        "niebo",
        "chmury",
        "powietrze",
        "sky",
        "clouds",
        "air"
      ]
    },
    {
      "id": "beach",
      "name_pl": "Plaża",
      "name_eng": "Beach",
      "category": "nature",
      "rarity": "epic",
      "sort_order": 40,
      "start_element": false,
      "description_pl": "Piasek, woda i idealne miejsce, żeby piasek znalazł się absolutnie wszędzie",
      "description_eng": "Sand, water, and the perfect place for sand to get absolutely everywhere",
      "model_type": "2D",
      "model_path": "/assets/models/beach.json",
      "textures_folder": "/assets/elements/beach.png",
      "tags": [
        "plaża",
        "piasek",
        "woda",
        "beach",
        "sand",
        "water"
      ]
    },
    {
      "id": "sun",
      "name_pl": "Słońce",
      "name_eng": "Sun",
      "category": "nature",
      "rarity": "epic",
      "sort_order": 41,
      "start_element": false,
      "description_pl": "Gigantyczna kula ognia, która codziennie robi wszystko, żebyś nie zmarzł",
      "description_eng": "A giant ball of fire that works every day to keep you from freezing",
      "model_type": "2D",
      "model_path": "/assets/models/sun.json",
      "textures_folder": "/assets/elements/sun.png",
      "tags": [
        "słońce",
        "ogień",
        "światło",
        "sun",
        "fire",
        "light"
      ]
    },
    {
      "id": "day",
      "name_pl": "Dzień",
      "name_eng": "Day",
      "category": "life",
      "rarity": "legendary",
      "sort_order": 42,
      "start_element": false,
      "description_pl": "Czas, kiedy słońce świeci, a ty możesz udawać, że masz energię",
      "description_eng": "The time when the sun is shining and you can pretend you have energy",
      "model_type": "2D",
      "model_path": "/assets/models/day.json",
      "textures_folder": "/assets/elements/day.png",
      "tags": [
        "dzień",
        "słońce",
        "światło",
        "day",
        "sun",
        "light"
      ]
    },
    {
      "id": "sandstone",
      "name_pl": "Piaskowiec",
      "name_eng": "Sandstone",
      "category": "material",
      "rarity": "common",
      "sort_order": 43,
      "start_element": false,
      "description_pl": "Piasek, który postanowił się trochę ustatkować i zostać kamieniem",
      "description_eng": "Sand that decided to settle down a little and become a rock",
      "model_type": "2D",
      "model_path": "/assets/models/sandstone.json",
      "textures_folder": "/assets/elements/sandstone.png",
      "tags": [
        "piaskowiec",
        "piasek",
        "skała",
        "sandstone",
        "sand",
        "rock"
      ]
    },
    {
      "id": "snowfall",
      "name_pl": "Opad Śniegu",
      "name_eng": "Snowfall",
      "category": "weather",
      "rarity": "common",
      "sort_order": 44,
      "start_element": false,
      "description_pl": "Chmury postanowiły zrzucić na ziemię miliony małych, zimnych płatków",
      "description_eng": "The clouds decided to drop millions of tiny, cold flakes on the ground",
      "model_type": "2D",
      "model_path": "/assets/models/snowfall.json",
      "textures_folder": "/assets/elements/snowfall.png",
      "tags": [
        "śnieg",
        "zima",
        "pogoda",
        "snow",
        "winter",
        "weather"
      ]
    },
    {
      "id": "mountain_range",
      "name_pl": "Pasmo Gór",
      "name_eng": "Mountain Range",
      "category": "nature",
      "rarity": "legendary",
      "sort_order": 45,
      "start_element": false,
      "description_pl": "Jedna góra to za mało, więc natura zrobiła ich całą serię",
      "description_eng": "One mountain wasn't enough, so nature made a whole series of them",
      "model_type": "2D",
      "model_path": "/assets/models/mountain_range.json",
      "textures_folder": "/assets/elements/mountain_range.png",
      "tags": [
        "góry",
        "pasmo",
        "natura",
        "mountains",
        "range",
        "nature"
      ]
    },
    {
      "id": "desert_pyramid",
      "name_pl": "Pustynna piramida",
      "name_eng": "Desert Pyramid",
      "category": "building",
      "rarity": "rare",
      "sort_order": 46,
      "start_element": false,
      "description_pl": "Ktoś miał za dużo piasku i zdecydowanie za dużo wolnego czasu",
      "description_eng": "Someone had way too much sand and definitely too much free time",
      "model_type": "2D",
      "model_path": "/assets/models/desert_pyramid.json",
      "textures_folder": "/assets/elements/desert_pyramid.png",
      "tags": [
        "piramida",
        "pustynia",
        "piasek",
        "pyramid",
        "desert",
        "sand"
      ]
    }
  ],
  "recipes": [
    {
      "id": "recipe_atmosphere",
      "inputs": [
        "earth",
        "pressure"
      ],
      "result": "atmosphere",
      "hidden": true
    },
    {
      "id": "recipe_beach",
      "inputs": [
        "sea",
        "sand"
      ],
      "result": "beach",
      "hidden": true
    },
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
      "id": "recipe_cloud_cover",
      "inputs": [
        "cloud",
        "cloud",
        "cloud"
      ],
      "result": "cloud_cover",
      "hidden": true
    },
    {
      "id": "recipe_continent",
      "inputs": [
        "soil",
        "ocean",
        "sand"
      ],
      "result": "continent",
      "hidden": true
    },
    {
      "id": "recipe_day",
      "inputs": [
        "sun",
        "sky"
      ],
      "result": "day",
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
      "id": "recipe_desert_pyramid",
      "inputs": [
        "sandstone",
        "sandstone",
        "desert"
      ],
      "result": "desert_pyramid",
      "hidden": true
    },
    {
      "id": "recipe_earth",
      "inputs": [
        "ocean",
        "continent",
        "continent"
      ],
      "result": "earth",
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
      "id": "recipe_glass",
      "inputs": [
        "fire",
        "sand"
      ],
      "result": "glass",
      "hidden": true
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
      "id": "recipe_hourglass",
      "inputs": [
        "glass",
        "sand",
        "glass"
      ],
      "result": "hourglass",
      "hidden": false
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
      "id": "recipe_mountain_range",
      "inputs": [
        "mountain",
        "mountain",
        "mountain"
      ],
      "result": "mountain_range",
      "hidden": true
    },
    {
      "id": "recipe_mud",
      "inputs": [
        "tag:wet",
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
      "id": "recipe_pressure",
      "inputs": [
        "air",
        "air"
      ],
      "result": "pressure",
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
      "id": "recipe_sandstone",
      "inputs": [
        "sand",
        "stone"
      ],
      "result": "sandstone",
      "hidden": true
    },
    {
      "id": "recipe_sandstorm",
      "inputs": [
        "sand",
        "wind",
        "rain"
      ],
      "result": "sandstorm",
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
      "id": "recipe_sky",
      "inputs": [
        "atmosphere",
        "cloud",
        "earth"
      ],
      "result": "sky",
      "hidden": true
    },
    {
      "id": "recipe_snowfall",
      "inputs": [
        "mountain",
        "rain"
      ],
      "result": "snowfall",
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
      "id": "recipe_sun",
      "inputs": [
        "stone",
        "sky",
        "fire"
      ],
      "result": "sun",
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
      "id": "ach_all",
      "name_pl": "To już wszystko!",
      "name_eng": "That's All!",
      "type": "all_elements",
      "value": 10,
      "icon": "/assets/achievements/bouquet_of_flowers.png",
      "hidden": true,
      "description_pl": "Zdobądź wszystko!",
      "description_eng": "Get Everything!"
    },
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
      "id": "ach_third_times_the_charm",
      "name_pl": "Do trzech razy sztuka!",
      "name_eng": "Third Time's the Charm!",
      "type": "crafting_streak",
      "value": 3,
      "icon": "/assets/achievements/third_times_the_charm.png",
      "hidden": true,
      "description_pl": "Odgadnij poprawnie 3 razy pod rząd",
      "description_eng": "Guess correctly 3 times in a row"
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
  "tags": [
    {
      "id": "tag:wet",
      "name_pl": "Mokre",
      "name_eng": "Wet",
      "description_pl": "",
      "description_eng": "",
      "element_ids": [
        "rain",
        "water"
      ]
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
    },
    {
      "id": "building",
      "color": "#0ce208",
      "icon": "building"
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
        "sound_enabled": "Dźwięki w grze",
        "animations_enabled": "Animacje strony i efektów",
        "duplicate_blocked": "Zablokowane",
        "duplicate_allowed": "Dozwolone",
        "export_save": "Eksportuj Postęp (.clsave)",
        "import_save": "Importuj Postęp (.clsave)",
        "export_success": "Postęp został wyeksportowany do pliku .clsave!",
        "import_success": "Postęp z pliku .clsave został pomyślnie zaimportowany!",
        "import_error": "Błąd: Nieprawidłowy lub uszkodzony plik zapisu (.clsave)!",
        "reset_settings": "Zresetuj Wygląd i Ustawienia",
        "reset_data": "Zresetuj Postęp Gry",
        "reset_confirm_title": "Reset Postępu",
        "reset_confirm_msg": "Czy na pewno chcesz usunąć wszystkie odkryte składniki, osiągnięcia i statystyki? Tej operacji nie można cofnąć!",
        "confirm_yes": "Tak, usuń postęp",
        "confirm_no": "Anuluj",
        "tekst": "Zapis"
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
        "sound_enabled": "Game sound effects",
        "animations_enabled": "Page animations & effects",
        "duplicate_blocked": "Blocked",
        "duplicate_allowed": "Allowed",
        "export_save": "Export Progress (.clsave)",
        "import_save": "Import Progress (.clsave)",
        "export_success": "Progress exported to .clsave file!",
        "import_success": "Progress successfully imported from .clsave file!",
        "import_error": "Error: Invalid or corrupted save file (.clsave)!",
        "reset_settings": "Reset Appearance & Settings",
        "reset_data": "Reset Game Progress",
        "reset_confirm_title": "Reset Progress",
        "reset_confirm_msg": "Are you sure you want to delete all discovered elements, achievements, and stats? This cannot be undone!",
        "confirm_yes": "Yes, reset progress",
        "confirm_no": "Cancel",
        "tekst": "Save"
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

  /**
 * Audio Synthesizer for AlcheMY using Web Audio API
 * Generates custom retro-modern sound effects without external file dependencies.
 */

class AudioController {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playDrop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playCombine() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(660, t + 0.25);

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(t + 0.25);
  }

  playDiscovery() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = this.ctx.currentTime + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.2, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + 0.3);
    });
  }

  playError() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(90, this.ctx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playClear() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.12);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  playAchievement() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = this.ctx.currentTime + idx * 0.09;

      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.1, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + 0.35);
    });
  }
}

const audio = new AudioController();

  /**
 * Dynamic DataLoader for AlcheMY
 * Tries fetching relative JSON files first, with embedded fallback for file:// CORS environments.
 */



class DataLoader {
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

      // console.log(
      //   `[DataLoader] Loaded ${this.elements.size} elements & ${this.tags.size} tags via HTTP fetch.`
      // );

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
    if (!tagId) return null;
    if (this.tags.has(tagId)) return this.tags.get(tagId);
    const alt1 = tagId.startsWith('tag:') ? tagId.replace('tag:', '') : `tag:${tagId}`;
    if (this.tags.has(alt1)) return this.tags.get(alt1);
    const alt2 = tagId.startsWith('tag:') ? tagId.replace('tag:', 'tag_') : tagId;
    if (this.tags.has(alt2)) return this.tags.get(alt2);
    return null;
  }

  getAllTags() {
    return Array.from(this.tags.values());
  }

  isElementInTag(elementId, tagId) {
    // 1. Check tag JSON registry (/data/tags/...)
    const tag = this.getTag(tagId);
    if (tag && Array.isArray(tag.element_ids) && tag.element_ids.includes(elementId)) {
      return true;
    }

    // 2. Check element's own tags array (from element.json)
    const el = this.getElement(elementId);
    if (el && Array.isArray(el.tags)) {
      const cleanTag = tagId.startsWith('tag:') ? tagId.replace('tag:', '') : tagId;
      if (el.tags.includes(tagId) || el.tags.includes(cleanTag) || el.tags.includes(`tag:${cleanTag}`)) {
        return true;
      }
    }

    return false;
  }

  resolveRecipeInputToElementIds(inputId) {
    if (inputId.startsWith('tag:')) {
      const tag = this.getTag(inputId);
      if (tag && Array.isArray(tag.element_ids) && tag.element_ids.length > 0) {
        return [...tag.element_ids];
      }
      return this.getAllElements()
        .filter(el => this.isElementInTag(el.id, inputId))
        .map(el => el.id);
    }
    return [inputId];
  }

  expandRecipeInputs(inputs) {
    let combinations = [[]];

    for (const inp of inputs) {
      const elementIds = this.resolveRecipeInputToElementIds(inp);
      const ids = elementIds.length > 0 ? elementIds : [inp];
      const newCombinations = [];

      for (const combo of combinations) {
        for (const id of ids) {
          newCombinations.push([...combo, id]);
        }
      }
      combinations = newCombinations;
    }

    return combinations;
  }

  getTranslation(lang, keyPath) {
    const keys = keyPath.split('.');
    let obj = this.translations[lang] || this.translations['pl'];
    for (const k of keys) {
      if (obj && obj[k] !== undefined) {
        obj = obj[k];
      } else {
        return keyPath;
      }
    }
    return obj;
  }
}

const dataLoader = new DataLoader();

  /**
 * Storage Manager for AlcheMY
 * Handles localStorage persistence for progress, settings, and stats.
 */

const STORAGE_KEY = 'alchemy_game_state_v1';

const DEFAULT_STATE = {
  unlockedElements: [],
  unlockedAchievements: [],
  favorites: [],
  combinationCount: 0,
  currentStreak: 0,
  bestStreak: 0,
  failedCombinationCount: 0,
  discoveryHistory: [],
  settings: {
    theme: 'system',
    language: 'pl',
    allowDuplicateCrafting: false,
    soundEnabled: true,
    animationsEnabled: true
  }
};

class StorageManager {
  constructor() {
    this.state = this.load();
    if (!Array.isArray(this.state.favorites)) {
      this.state.favorites = [];
    }
    if (typeof this.state.currentStreak !== 'number') this.state.currentStreak = 0;
    if (typeof this.state.bestStreak !== 'number') this.state.bestStreak = 0;
    if (typeof this.state.failedCombinationCount !== 'number') this.state.failedCombinationCount = 0;
  }

  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          ...DEFAULT_STATE,
          ...parsed,
          favorites: parsed.favorites || [],
          currentStreak: typeof parsed.currentStreak === 'number' ? parsed.currentStreak : 0,
          bestStreak: typeof parsed.bestStreak === 'number' ? parsed.bestStreak : 0,
          failedCombinationCount: typeof parsed.failedCombinationCount === 'number' ? parsed.failedCombinationCount : 0,
          settings: {
            ...DEFAULT_STATE.settings,
            ...(parsed.settings || {})
          }
        };
      }
    } catch (e) {
      console.warn('[StorageManager] Failed to read localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('[StorageManager] Failed to save localStorage:', e);
    }
  }

  initDefaultElements(startElements) {
    if (this.state.unlockedElements.length === 0) {
      startElements.forEach(el => {
        if (!this.state.unlockedElements.includes(el.id)) {
          this.state.unlockedElements.push(el.id);
          this.state.discoveryHistory.push({ id: el.id, timestamp: Date.now() });
        }
      });
      this.save();
    }
  }

  isElementUnlocked(id) {
    return this.state.unlockedElements.includes(id);
  }

  unlockElement(id) {
    if (!this.isElementUnlocked(id)) {
      this.state.unlockedElements.push(id);
      this.state.discoveryHistory.push({ id, timestamp: Date.now() });
      this.save();
      return true;
    }
    return false;
  }

  isFavorite(id) {
    return Array.isArray(this.state.favorites) && this.state.favorites.includes(id);
  }

  toggleFavorite(id) {
    if (!Array.isArray(this.state.favorites)) {
      this.state.favorites = [];
    }
    const idx = this.state.favorites.indexOf(id);
    if (idx !== -1) {
      this.state.favorites.splice(idx, 1);
      this.save();
      return false;
    } else {
      this.state.favorites.push(id);
      this.save();
      return true;
    }
  }

  isAchievementUnlocked(id) {
    return this.state.unlockedAchievements.includes(id);
  }

  unlockAchievement(id) {
    if (!this.isAchievementUnlocked(id)) {
      this.state.unlockedAchievements.push(id);
      this.save();
      return true;
    }
    return false;
  }

  incrementCombinationCount() {
    this.state.combinationCount++;
    this.save();
    return this.state.combinationCount;
  }

  incrementStreak() {
    this.state.currentStreak = (this.state.currentStreak || 0) + 1;
    this.state.bestStreak = Math.max(this.state.bestStreak || 0, this.state.currentStreak);
    this.save();
    return this.state.currentStreak;
  }

  resetStreak() {
    this.state.currentStreak = 0;
    this.save();
  }

  incrementFailedCount() {
    this.state.failedCombinationCount = (this.state.failedCombinationCount || 0) + 1;
    this.save();
    return this.state.failedCombinationCount;
  }

  updateSettings(newSettings) {
    this.state.settings = {
      ...this.state.settings,
      ...newSettings
    };
    this.save();
  }

  resetSettingsOnly() {
    this.state.settings = JSON.parse(JSON.stringify(DEFAULT_STATE.settings));
    this.save();
  }

  resetAllData(startElements) {
    this.state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    this.initDefaultElements(startElements);
    this.save();
  }

  exportSaveData() {
    const exportObject = {
      game: 'CraftLab',
      version: 1,
      exportedAt: new Date().toISOString(),
      state: JSON.parse(JSON.stringify(this.state))
    };
    return JSON.stringify(exportObject, null, 2);
  }

  importSaveData(saveDataString, startElements) {
    try {
      if (!saveDataString || typeof saveDataString !== 'string') {
        throw new Error('Empty save data');
      }

      let parsed;
      try {
        parsed = JSON.parse(saveDataString);
      } catch (e) {
        const decoded = atob(saveDataString.trim());
        parsed = JSON.parse(decoded);
      }

      const importedState = parsed.state ? parsed.state : parsed;

      if (!importedState || !Array.isArray(importedState.unlockedElements)) {
        throw new Error('Invalid save structure: missing unlockedElements');
      }

      const newState = {
        ...DEFAULT_STATE,
        ...importedState,
        unlockedElements: Array.isArray(importedState.unlockedElements) ? importedState.unlockedElements : [],
        unlockedAchievements: Array.isArray(importedState.unlockedAchievements) ? importedState.unlockedAchievements : [],
        favorites: Array.isArray(importedState.favorites) ? importedState.favorites : [],
        combinationCount: typeof importedState.combinationCount === 'number' ? importedState.combinationCount : 0,
        discoveryHistory: Array.isArray(importedState.discoveryHistory) ? importedState.discoveryHistory : [],
        settings: {
          ...DEFAULT_STATE.settings,
          ...(importedState.settings || {})
        }
      };

      if (Array.isArray(startElements)) {
        startElements.forEach(el => {
          if (!newState.unlockedElements.includes(el.id)) {
            newState.unlockedElements.push(el.id);
            newState.discoveryHistory.push({ id: el.id, timestamp: Date.now() });
          }
        });
      }

      this.state = newState;
      this.save();
      return { success: true };
    } catch (err) {
      console.error('[StorageManager] Import failed:', err);
      return { success: false, error: err.message };
    }
  }
}

const storage = new StorageManager();

  /**
 * Alchemy Engine for AlcheMY
 * Handles order-independent matching for 2 or 3 element combinations.
 */

class AlchemyEngine {
  constructor(recipes, dataLoader, storage) {
    this.recipes = recipes;
    this.dataLoader = dataLoader;
    this.storage = storage;
  }

  arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    return sorted1.every((val, idx) => val === sorted2[idx]);
  }

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
        } else if (
          typeof req === 'string' &&
          req.startsWith('tag:') &&
          this.dataLoader &&
          this.dataLoader.isElementInTag &&
          this.dataLoader.isElementInTag(sel, req)
        ) {
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

  combine(selectedElementIds) {
    const validInputs = selectedElementIds.filter(id => id != null && id !== '');
    if (validInputs.length < 2) {
      return { success: false, reason: 'min_elements_required' };
    }

    this.storage.incrementCombinationCount();

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

    this.storage.incrementStreak();
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

  /**
 * Achievement Engine for AlcheMY
 * Evaluates game metrics against achievement criteria and triggers unlocks.
 */

class AchievementEngine {
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

        case 'crafting_streak':
          const reqStreak = Number(ach.value) || 1;
          if ((this.storage.state.currentStreak || 0) >= reqStreak || (this.storage.state.bestStreak || 0) >= reqStreak) {
            conditionMet = true;
          }
          break;

        case 'tag_crafted':
          if (lastCombinationContext.usedTag && lastCombinationContext.success) {
            conditionMet = true;
          }
          break;

        case 'favorites_count':
          const favReq = Number(ach.value) || 1;
          if (Array.isArray(this.storage.state.favorites) && this.storage.state.favorites.length >= favReq) {
            conditionMet = true;
          }
          break;

        case 'failed_combinations_count':
          const failReq = Number(ach.value) || 1;
          if ((this.storage.state.failedCombinationCount || 0) >= failReq) {
            conditionMet = true;
          }
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

  /**
 * Canvas 2D Particle System for AlcheMY
 * Spawns particle bursts, swirling smoke, magic sparks, and discovery confetti.
 */

class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animating = false;
    this.enabled = true;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  spawnBurst(x, y, color = '#facc15', count = 30) {
    if (!this.enabled) return;
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 6;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 5,
        color,
        alpha: 1,
        decay: 0.015 + Math.random() * 0.02,
        gravity: 0.08,
        shape: Math.random() > 0.5 ? 'circle' : 'star'
      });
    }
    this.startLoop();
  }

  spawnSmoke(x, y, count = 15) {
    if (!this.enabled) return;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -1 - Math.random() * 2,
        size: 8 + Math.random() * 12,
        color: '#64748b',
        alpha: 0.6,
        decay: 0.01 + Math.random() * 0.015,
        gravity: -0.02,
        shape: 'circle'
      });
    }
    this.startLoop();
  }

  spawnDiscoveryExplosion(x, y) {
    if (!this.enabled) return;
    const palette = ['#3b82f6', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#38bdf8'];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 9;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 4 + Math.random() * 6,
        color: palette[Math.floor(Math.random() * palette.length)],
        alpha: 1,
        decay: 0.01 + Math.random() * 0.015,
        gravity: 0.05,
        shape: 'star'
      });
    }
    this.startLoop();
  }

  startLoop() {
    if (!this.animating) {
      this.animating = true;
      requestAnimationFrame(() => this.update());
    }
  }

  update() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // Draw star / diamond
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y - p.size);
        this.ctx.lineTo(p.x + p.size * 0.5, p.y);
        this.ctx.lineTo(p.x, p.y + p.size);
        this.ctx.lineTo(p.x - p.size * 0.5, p.y);
        this.ctx.closePath();
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.update());
    } else {
      this.animating = false;
    }
  }
}

  /**
 * 3D / 2D Badge Graphics Renderer for AlcheMY
 * Renders rotating 3D polygonal gems/cubes/spheres on HTML5 Canvas for 3D elements.
 */

class Graphics3D {
  constructor() {
    this.activeCanvases = new Map();
  }

  /**
   * Initializes a 3D preview render loop on a target canvas element for 3D elements.
   */
  render3DBadge(canvas, elementId, color = '#60a5fa') {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angleX = 0;
    let angleY = 0;

    // Define 3D Cube / Octahedron vertices
    const vertices = [
      { x: -1, y: -1, z: -1 },
      { x:  1, y: -1, z: -1 },
      { x:  1, y:  1, z: -1 },
      { x: -1, y:  1, z: -1 },
      { x: -1, y: -1, z:  1 },
      { x:  1, y: -1, z:  1 },
      { x:  1, y:  1, z:  1 },
      { x: -1, y:  1, z:  1 }
    ];

    const edges = [
      [0,1], [1,2], [2,3], [3,0],
      [4,5], [5,6], [6,7], [7,4],
      [0,4], [1,5], [2,6], [3,7]
    ];

    const animate = () => {
      if (!document.body.contains(canvas)) {
        return; // Stop if canvas was removed from DOM
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const fov = 100;

      angleX += 0.02;
      angleY += 0.03;

      // Project vertices
      const projected = vertices.map(v => {
        // Rotate around Y
        let x1 = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
        let z1 = v.x * Math.sin(angleY) + v.z * Math.cos(angleY);

        // Rotate around X
        let y2 = v.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = v.y * Math.sin(angleX) + z1 * Math.cos(angleX);

        const scale = fov / (fov + z2 + 3);
        return {
          x: width / 2 + x1 * scale * (width * 0.25),
          y: height / 2 + y2 * scale * (height * 0.25)
        };
      });

      // Draw Edges
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;

      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}

const graphics3D = new Graphics3D();

  /**
 * App Controller for AlcheMY
 * Integrates DataLoader, StorageManager, AudioSynthesizer, AlchemyEngine, AchievementEngine, and ParticleSystem.
 */









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
        const knownRecipesHTML = recipes.flatMap(rc => {
          const combos = dataLoader.expandRecipeInputs(rc.inputs);
          return combos.map(combo => {
            const inputsHTML = combo.map(inpId => {
              const inpEl = dataLoader.getElement(inpId);
              const inpName = inpEl ? (lang === 'en' ? inpEl.name_eng : inpEl.name_pl) : inpId;
              const inpImg = inpEl ? inpEl.textures_folder : '';
              return `<span class="recipe-ingredient"><img src="${inpImg}" alt="" /> ${inpName}</span>`;
            }).join(' + ');
            return `<div class="tooltip-recipe-line">${inputsHTML}</div>`;
          });
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
      recipesHTML = recipes.flatMap(rc => {
        const combos = dataLoader.expandRecipeInputs(rc.inputs);
        return combos.map(combo => {
          const formula = combo.map(inpId => {
            const inpEl = dataLoader.getElement(inpId);
            const inpName = inpEl ? (lang === 'en' ? inpEl.name_eng : inpEl.name_pl) : inpId;
            const inpImg = inpEl ? inpEl.textures_folder : '';
            return `<span class="detail-formula-item"><img src="${inpImg}" alt="" /> ${inpName}</span>`;
          }).join(' <span class="plus-sign">+</span> ');

          return `<div class="detail-formula-card">${formula} = <strong>${name}</strong></div>`;
        });
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

    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then((reg) => {
      reg.addEventListener('updatefound', () => {
        const worker = reg.installing;
        if (!worker) return;
        worker.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            worker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      });
    }).catch((err) => {
      console.warn('[PWA] Service worker registration failed:', err);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new AlcheMYApp();
  app.init();
});

})();