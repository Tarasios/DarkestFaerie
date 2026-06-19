/* =====================================================================
   Neopets: The Darkest Faerie — Act 2 tracker data, for the generic
   engine (js/df-tracker.js). Quests (main story + side), Treasures
   by zone, Neggs and Clovers. Items flagged "m": true are MISSABLE.
   Display text lives in lang/messages/en/act2-tracker.json.
   Zone chest counts come from RetroAchievements; side quests, neggs
   and clovers from prinisse's GameFAQs walkthrough.
   ===================================================================== */
var TRACKER_GAME = {
  "id": "act2",
  "storeKey": "df_act2_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": {},
  "worldSummary": { "worlds": [], "sections": ["treasures","neggs","clovers"] },
  "tabs": [
    {
      "id": "quests",
      "sections": [
        {
          "id": "quests",
          "cols": [ {"k": "name", "name": true},{"k": "kind"},{"k": "detail"},{"k": "reward"} ],
          "items": [
            {"g": "Main Story", "name": "Magic Training"},
            {"g": "Main Story", "name": "Rescue the Aisha"},
            {"g": "Main Story", "name": "Escape From Faerieland"},
            {"g": "Side Quests", "name": "Harris Rescue", "m": true},
            {"g": "Side Quests", "name": "Faerie Dust Paint", "m": true}
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
          "items": []
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
