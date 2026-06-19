/* =====================================================================
   Neopets: The Darkest Faerie — Bestiary & Elements reference (engine:
   js/df-tracker.js). Enemies grouped by ELEMENT (Air/Earth/Dark/Fire/Light/
   Water) + a Bosses tab; tick a row to mark it defeated. Each element has an
   opposite shown as "Beat with": Fire<->Water, Air<->Earth, Light<->Dark.
   Note act-variants (Ixi Chieftain: Earth in Act 1, Dark in Act 3).
   Elements/descriptions from prinisse; zone locations from tris88. Where the
   two guides disagree on an element it is flagged in the notes (kept on
   prinisse's value pending confirmation).
   ===================================================================== */
var TRACKER_GAME = {
  "id": "bestiary",
  "storeKey": "df_bestiary_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": null,
  "tabs": [
    {
      "id": "air",
      "sections": [
        {
          "id": "air",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "beat", "element": true }, { "k": "loc" }, { "k": "desc" } ],
          "items": [
            {"name": "Crokabek", "el": "Air", "beat": "Earth"},
            {"name": "Minion Archer (Blue)", "el": "Air", "beat": "Earth"},
            {"name": "Minion Grunt (Blue)", "el": "Air", "beat": "Earth"},
            {"name": "Minion Warrior (Blue)", "el": "Air", "beat": "Earth"},
            {"name": "Mountain Crokabek", "el": "Air", "beat": "Earth"},
            {"name": "Swamp Crokabek", "el": "Air", "beat": "Earth"}
          ]
        }
      ]
    },
    {
      "id": "earth",
      "sections": [
        {
          "id": "earth",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "beat", "element": true }, { "k": "loc" }, { "k": "desc" } ],
          "items": [
            {"name": "Flower Monster", "el": "Earth", "beat": "Air"},
            {"name": "Flower Monster (Walking)", "el": "Earth", "beat": "Air"},
            {"name": "Ixi Spearman", "el": "Earth", "beat": "Air"},
            {"name": "Ixi Archer", "el": "Earth", "beat": "Air"},
            {"name": "Ixi Henchman", "el": "Earth", "beat": "Air"},
            {"name": "Minion Archer (Yellow)", "el": "Earth", "beat": "Air"},
            {"name": "Minion Artillery (Green)", "el": "Earth", "beat": "Air"},
            {"name": "Minion Brute (Yellow)", "el": "Earth", "beat": "Air"},
            {"name": "Minion Grunt (Green)", "el": "Earth", "beat": "Air"},
            {"name": "Minion Warrior (Light Blue)", "el": "Earth", "beat": "Air"},
            {"name": "Plant Gunner", "el": "Earth", "beat": "Air"},
            {"name": "Poison Flower Monster", "el": "Earth", "beat": "Air"},
            {"name": "Poison Flower Monster (Walking)", "el": "Earth", "beat": "Air"},
            {"name": "Poison Spyder", "el": "Earth", "beat": "Air"},
            {"name": "Spore Monster", "el": "Earth", "beat": "Air"}
          ]
        }
      ]
    },
    {
      "id": "dark",
      "sections": [
        {
          "id": "dark",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "beat", "element": true }, { "k": "loc" }, { "k": "desc" } ],
          "items": [
            {"name": "Bandit", "el": "Dark", "beat": "Light"},
            {"name": "Drub", "el": "Dark", "beat": "Light"},
            {"name": "Dark Knight", "el": "Dark", "beat": "Light"},
            {"name": "Darrick the Blade", "el": "Dark", "beat": "Light"},
            {"name": "Dumb Skeleton", "el": "Dark", "beat": "Light"},
            {"name": "Evil Harris", "el": "Dark", "beat": "Light"},
            {"name": "Minion Archer (Purple)", "el": "Dark", "beat": "Light"},
            {"name": "Minion Artillery (Purple)", "el": "Dark", "beat": "Light"},
            {"name": "Minion Grunt (Purple)", "el": "Dark", "beat": "Light"},
            {"name": "Restless Spirit", "el": "Dark", "beat": "Light"},
            {"name": "Rogue", "el": "Dark", "beat": "Light"},
            {"name": "Sid the Vicious", "el": "Dark", "beat": "Light"},
            {"name": "Skeleton Wizard", "el": "Dark", "beat": "Light"},
            {"name": "Skeleton Fighter", "el": "Dark", "beat": "Light"},
            {"name": "Spirit Skull", "el": "Dark", "beat": "Light"},
            {"name": "Spirit Sword", "el": "Dark", "beat": "Light"},
            {"name": "Spyder", "el": "Dark", "beat": "Light"},
            {"name": "Thief", "el": "Dark", "beat": "Light"}
          ]
        }
      ]
    },
    {
      "id": "fire",
      "sections": [
        {
          "id": "fire",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "beat", "element": true }, { "k": "loc" }, { "k": "desc" } ],
          "items": [
            {"name": "Drackonack", "el": "Fire", "beat": "Water"},
            {"name": "Giant Drackonack", "el": "Fire", "beat": "Water"},
            {"name": "Minion Archer (Red)", "el": "Fire", "beat": "Water"},
            {"name": "Minion Artillery (Red)", "el": "Fire", "beat": "Water"},
            {"name": "Minion Brute (Red)", "el": "Fire", "beat": "Water"},
            {"name": "Minion Magician (Red)", "el": "Fire", "beat": "Water"},
            {"name": "Minion Warrior (Orange)", "el": "Fire", "beat": "Water"},
            {"name": "Minion Wizard (Red)", "el": "Fire", "beat": "Water"},
            {"name": "Werelupe Basher", "el": "Fire", "beat": "Water"},
            {"name": "Werelupe Bone Thrower", "el": "Fire", "beat": "Water"},
            {"name": "Werelupe Elite", "el": "Fire", "beat": "Water"}
          ]
        }
      ]
    },
    {
      "id": "light",
      "sections": [
        {
          "id": "light",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "beat", "element": true }, { "k": "loc" }, { "k": "desc" } ],
          "items": [
            {"name": "Minion Grunt (Yellow)", "el": "Light", "beat": "Dark"},
            {"name": "Minion Magician (Yellow)", "el": "Light", "beat": "Dark"},
            {"name": "Minion Wizard (Yellow)", "el": "Light", "beat": "Dark"}
          ]
        }
      ]
    },
    {
      "id": "water",
      "sections": [
        {
          "id": "water",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "beat", "element": true }, { "k": "loc" }, { "k": "desc" } ],
          "items": [
            {"name": "Minion Brute (Blue)", "el": "Water", "beat": "Fire"},
            {"name": "Minion Magician (Blue)", "el": "Water", "beat": "Fire"},
            {"name": "Slorg", "el": "Water", "beat": "Fire"},
            {"name": "Sludgy", "el": "Water", "beat": "Fire"},
            {"name": "Swamp Tentacle", "el": "Water", "beat": "Fire"},
            {"name": "Tentacle", "el": "Water", "beat": "Fire"}
          ]
        }
      ]
    },
    {
      "id": "bosses",
      "sections": [
        {
          "id": "bosses",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "beat", "element": true }, { "k": "act" }, { "k": "loc" } ],
          "items": [
            {"name": "Juppie Monster (Act 1)", "el": "Earth", "beat": "Air"},
            {"name": "Ixi Chieftan (Act 1)", "el": "Earth", "beat": "Air"},
            {"name": "Gnarfas", "el": "Fire", "beat": "Water"},
            {"name": "Plague Serpent", "el": "Water", "beat": "Fire"},
            {"name": "Werelupe King", "el": "Fire", "beat": "Water"},
            {"name": "Juppie Monster (Act 3)", "el": "Earth", "beat": "Air"},
            {"name": "Ixi Chieftan (Act 3)", "el": "Dark", "beat": "Light"},
            {"name": "Gelert Assassin", "el": "Dark", "beat": "Light"},
            {"name": "Black Knight", "el": "Dark", "beat": "Light"},
            {"name": "Undead Draik Skeleton", "el": "Fire / Water", "beat": ""},
            {"name": "Dark Faerie Sisters", "el": "Dark", "beat": "Light"},
            {"name": "The Darkest Faerie", "el": "All", "beat": ""}
          ]
        }
      ]
    }
  ]
};

(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
