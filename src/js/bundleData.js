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
    },
    {
      "id": "coal",
      "name_pl": "Węgiel Kamienny",
      "name_eng": "Coal",
      "category": "energy",
      "rarity": "common",
      "sort_order": 47,
      "start_element": false,
      "description_pl": "Roślina, która miliony lat temu miała lepsze życie. Teraz służy głównie do robienia dymu",
      "description_eng": "A plant that had a better life millions of years ago. Now it mostly exists to make smoke",
      "model_type": "2D",
      "model_path": "/assets/models/coal.json",
      "textures_folder": "/assets/elements/coal.png",
      "tags": [
        "węgiel",
        "paliwo",
        "kopalnia",
        "coal",
        "fuel",
        "mine"
      ]
    },
    {
      "id": "thunderstorm",
      "name_pl": "Burza",
      "name_eng": "Thunderstorm",
      "category": "weather",
      "rarity": "common",
      "sort_order": 48,
      "start_element": false,
      "description_pl": "Deszcz i ciśnienie postanowiły urządzić sobie małą awanturę",
      "description_eng": "Rain and pressure decided to have a little argument",
      "model_type": "2D",
      "model_path": "/assets/models/thunderstorm.json",
      "textures_folder": "/assets/elements/thunderstorm.png",
      "tags": [
        "burza",
        "deszcz",
        "wiatr",
        "storm",
        "rain",
        "wind"
      ]
    },
    {
      "id": "storm",
      "name_pl": "Sztorm",
      "name_eng": "Storm",
      "category": "weather",
      "rarity": "common",
      "sort_order": 49,
      "start_element": false,
      "description_pl": "Morze wstało lewą nogą i postanowiło rzucać falami na wszystko, co się nawinie",
      "description_eng": "The sea woke up on the wrong side of the bed and decided to throw waves at everything in sight",
      "model_type": "2D",
      "model_path": "/assets/models/storm.json",
      "textures_folder": "/assets/elements/storme.png",
      "tags": [
        "sztorm",
        "morze",
        "fale",
        "storm",
        "sea",
        "waves"
      ]
    },
    {
      "id": "blizzard",
      "name_pl": "Zamieć śnieżna",
      "name_eng": "Blizzard",
      "category": "weather",
      "rarity": "common",
      "sort_order": 50,
      "start_element": false,
      "description_pl": "Śnieg, wiatr i widoczność na poziomie „gdzie ja właściwie jestem?”",
      "description_eng": "Snow, wind, and visibility at the “where am I even?” level",
      "model_type": "2D",
      "model_path": "/assets/models/blizzard.json",
      "textures_folder": "/assets/elements/blizzard.png",
      "tags": [
        "śnieżyca",
        "śnieg",
        "wiatr",
        "blizzard",
        "snow",
        "wind"
      ]
    },
    {
      "id": "energy",
      "name_pl": "Energia",
      "name_eng": "Energy",
      "category": "energy",
      "rarity": "rare",
      "sort_order": 51,
      "start_element": false,
      "description_pl": "Niewidzialna siła, która sprawia, że rzeczy zaczynają działać. Albo wybuchać",
      "description_eng": "The invisible force that makes things work. Or explode",
      "model_type": "2D",
      "model_path": "/assets/models/energy.json",
      "textures_folder": "/assets/elements/energy.png",
      "tags": [
        "energia",
        "siła",
        "elektryczność",
        "energy",
        "power",
        "electricity"
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
      "id": "recipe_blizzard",
      "inputs": [
        "snowfall",
        "wind"
      ],
      "result": "blizzard",
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
      "id": "recipe_coal",
      "inputs": [
        "stone",
        "plant",
        "pressure"
      ],
      "result": "coal",
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
      "id": "recipe_energy",
      "inputs": [
        "tag:coals",
        "fire"
      ],
      "result": "energy",
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
      "id": "recipe_storm",
      "inputs": [
        "tag:seas",
        "wind",
        "thunderstorm"
      ],
      "result": "storm",
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
      "id": "recipe_thunderstorm",
      "inputs": [
        "rain",
        "pressure"
      ],
      "result": "thunderstorm",
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
      "id": "tag:coals",
      "name_pl": "Węgle",
      "name_eng": "Coals",
      "description_pl": "",
      "description_eng": "",
      "element_ids": [
        "pressure",
        "coal"
      ]
    },
    {
      "id": "tag:seas",
      "name_pl": "Morza",
      "name_eng": "Seas",
      "description_pl": "",
      "description_eng": "",
      "element_ids": [
        "sea",
        "ocean"
      ]
    },
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
        "magic": "Magia",
        "building": "Budowla"
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
        "magic": "Magic",
        "building": "Building"
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
