/* =====================================================================
   Neopets: The Darkest Faerie — Act 4 tracker data, for the generic
   engine (js/df-tracker.js). Quests (main story + side), Treasures
   by zone, Neggs and Clovers. Items flagged "m": true are MISSABLE.
   Display text lives in lang/messages/en/act4-tracker.json.
   Zone chest counts come from RetroAchievements; side quests, neggs
   and clovers from prinisse's GameFAQs walkthrough.
   ===================================================================== */
var TRACKER_GAME = {
  "id": "act4",
  "storeKey": "df_act4_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": {},
  "worldSummary": { "worlds": ["Hall of Heroes", "Arena District", "Coliseum", "Secret Sewers", "Park District", "Park Shrine", "Bazaar District", "Treasury", "Bazaar District", "Sewer Shrine", "Heroes Rest"], "sections": ["treasures","neggs","clovers"] },
  "tabs": [
    {
      "id": "quests",
      "sections": [
        {
          "id": "quests",
          "cols": [ {"k": "name", "name": true},{"k": "kind"},{"k": "detail"},{"k": "reward"} ],
          "items": [
            {"g": "Main Story", "name": "The Gladiator Legend"},
            {"g": "Main Story", "name": "The Petpet Legend"},
            {"g": "Main Story", "name": "The Treasurer Legend"},
            {"g": "Main Story", "name": "The Rogue Legend"},
            {"g": "Main Story", "name": "Blade of Altador's Might"},
            {"g": "Main Story", "name": "Awaken Jerdana"},
            {"g": "Main Story", "name": "The Darkest Faerie"}
          ]
        }
      ]
    },
    {
      "id": "treasures",
      "sections": [
        {
          "id": "treasures",
          "cols": [ {"k": "name", "name": true},{"k": "where"} ],
          "items": [
            {"g": "Hall of Heroes", "name": "Chest 1"},
            {"g": "Arena District", "name": "Chest 1"},
            {"g": "Arena District", "name": "Chest 2"},
            {"g": "Coliseum", "name": "Chest 1"},
            {"g": "Secret Sewers", "name": "Chest 1"},
            {"g": "Secret Sewers", "name": "Chest 2"},
            {"g": "Park District", "name": "Chest 1"},
            {"g": "Park District", "name": "Chest 2"},
            {"g": "Park District", "name": "Chest 3"},
            {"g": "Park District", "name": "Chest 4"},
            {"g": "Park District", "name": "Chest 5"},
            {"g": "Park Shrine", "name": "Chest 1"},
            {"g": "Bazaar District", "name": "Chest 1"},
            {"g": "Bazaar District", "name": "Chest 2"},
            {"g": "Treasury", "name": "Chest 1"},
            {"g": "Bazaar District", "name": "Chest 1"},
            {"g": "Bazaar District", "name": "Chest 2"},
            {"g": "Sewer Shrine", "name": "Chest 1"},
            {"g": "Sewer Shrine", "name": "Chest 2"},
            {"g": "Heroes Rest", "name": "Chest 1"}
          ]
        }
      ]
    },
    {
      "id": "neggs",
      "sections": [
        {
          "id": "neggs",
          "cols": [ {"k": "name", "name": true},{"k": "effect"},{"k": "where"} ],
          "items": []
        }
      ]
    },
    {
      "id": "clovers",
      "sections": [
        {
          "id": "clovers",
          "cols": [ {"k": "name", "name": true},{"k": "where"} ],
          "items": []
        }
      ]
    }
  ]
};

(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
