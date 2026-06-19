/* =====================================================================
   Neopets: The Darkest Faerie — Bestiary & Elements reference, for the
   generic engine (js/df-tracker.js). Enemies are grouped into one tab per
   ELEMENT (Air, Earth, Dark, Fire, Light, Water) plus a Bosses tab; tick a
   row to mark it encountered/defeated. Each element has an opposite —
   Fire<->Water, Air<->Earth, Light<->Dark — shown on hover over the element
   pill. Note act-variants: e.g. the Ixi Chieftain is Earth in Act 1 but
   Dark in Act 3. Enemy elements & descriptions from prinisse's walkthrough.
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
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "desc" } ],
          "items": [
            {"name": "Crokabek", "el": "All"},
            {"name": "Minion Archer (Blue)", "el": "All"},
            {"name": "Minion Grunt (Blue)", "el": "All"},
            {"name": "Minion Warrior (Blue)", "el": "All"},
            {"name": "Mountain Crokabek", "el": "All"},
            {"name": "Swamp Crokabek", "el": "All"}
          ]
        }
      ]
    },
    {
      "id": "earth",
      "sections": [
        {
          "id": "earth",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "desc" } ],
          "items": [
            {"name": "Flower Monster", "el": "All"},
            {"name": "Flower Monster (Walking)", "el": "All"},
            {"name": "Ixi Spearman", "el": "All"},
            {"name": "Ixi Archer", "el": "All"},
            {"name": "Ixi Henchman", "el": "All"},
            {"name": "Minion Archer (Yellow)", "el": "All"},
            {"name": "Minion Artillery (Green)", "el": "All"},
            {"name": "Minion Brute (Yellow)", "el": "All"},
            {"name": "Minion Grunt (Green)", "el": "All"},
            {"name": "Minion Warrior (Light Blue)", "el": "All"},
            {"name": "Plant Gunner", "el": "All"},
            {"name": "Poison Flower Monster", "el": "All"},
            {"name": "Poison Flower Monster (Walking)", "el": "All"},
            {"name": "Poison Spyder", "el": "All"},
            {"name": "Spore Monster", "el": "All"}
          ]
        }
      ]
    },
    {
      "id": "dark",
      "sections": [
        {
          "id": "dark",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "desc" } ],
          "items": [
            {"name": "Bandit", "el": "All"},
            {"name": "Drub", "el": "All"},
            {"name": "Dark Knight", "el": "All"},
            {"name": "Darrick the Blade", "el": "All"},
            {"name": "Dumb Skeleton", "el": "All"},
            {"name": "Evil Harris", "el": "All"},
            {"name": "Minion Archer (Purple)", "el": "All"},
            {"name": "Minion Artillery (Purple)", "el": "All"},
            {"name": "Minion Grunt (Purple)", "el": "All"},
            {"name": "Restless Spirit", "el": "All"},
            {"name": "Rogue", "el": "All"},
            {"name": "Sid the Vicious", "el": "All"},
            {"name": "Skeleton Wizard", "el": "All"},
            {"name": "Skeleton Fighter", "el": "All"},
            {"name": "Spirit Skull", "el": "All"},
            {"name": "Spirit Sword", "el": "All"},
            {"name": "Spyder", "el": "All"},
            {"name": "Thief", "el": "All"}
          ]
        }
      ]
    },
    {
      "id": "fire",
      "sections": [
        {
          "id": "fire",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "desc" } ],
          "items": [
            {"name": "Drackonack", "el": "All"},
            {"name": "Giant Drackonack", "el": "All"},
            {"name": "Minion Archer (Red)", "el": "All"},
            {"name": "Minion Artillery (Red)", "el": "All"},
            {"name": "Minion Brute (Red)", "el": "All"},
            {"name": "Minion Magician (Red)", "el": "All"},
            {"name": "Minion Warrior (Orange)", "el": "All"},
            {"name": "Minion Wizard (Red)", "el": "All"},
            {"name": "Werelupe Basher", "el": "All"},
            {"name": "Werelupe Bone Thrower", "el": "All"},
            {"name": "Werelupe Elite", "el": "All"}
          ]
        }
      ]
    },
    {
      "id": "light",
      "sections": [
        {
          "id": "light",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "desc" } ],
          "items": [
            {"name": "Minion Grunt (Yellow)", "el": "All"},
            {"name": "Minion Magician (Yellow)", "el": "All"},
            {"name": "Minion Wizard (Yellow)", "el": "All"}
          ]
        }
      ]
    },
    {
      "id": "water",
      "sections": [
        {
          "id": "water",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "desc" } ],
          "items": [
            {"name": "Minion Brute (Blue)", "el": "All"},
            {"name": "Minion Magician (Blue)", "el": "All"},
            {"name": "Slorg", "el": "All"},
            {"name": "Sludgy", "el": "All"},
            {"name": "Swamp Tentacle", "el": "All"},
            {"name": "Tentacle", "el": "All"}
          ]
        }
      ]
    },
    {
      "id": "bosses",
      "sections": [
        {
          "id": "bosses",
          "cols": [ { "k": "name", "name": true }, { "k": "el", "element": true }, { "k": "act" }, { "k": "loc" } ],
          "items": [
            {"name": "Juppie Monster (Act 1)", "el": "Earth"},
            {"name": "Ixi Chieftan (Act 1)", "el": "Earth"},
            {"name": "Gnarfas", "el": "Fire"},
            {"name": "Plague Serpent", "el": "Water"},
            {"name": "Werelupe King", "el": "Fire"},
            {"name": "Juppie Monster (Act 3)", "el": "Earth"},
            {"name": "Ixi Chieftan (Act 3)", "el": "Dark"},
            {"name": "Gelert Assassin", "el": "Dark"},
            {"name": "Black Knight", "el": "Dark"},
            {"name": "Undead Draik Skeleton", "el": "Fire / Water"},
            {"name": "Dark Faerie Sisters", "el": "Dark"},
            {"name": "The Darkest Faerie", "el": "All"}
          ]
        }
      ]
    }
  ]
};

(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
