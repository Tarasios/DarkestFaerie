/* =====================================================================
   Neopets: The Darkest Faerie — Act 1 tracker data, for the generic
   engine (js/df-tracker.js). Quests (main story + side), Treasures
   by zone, Neggs and Clovers. Items flagged "m": true are MISSABLE.
   Display text lives in lang/messages/en/act1-tracker.json.
   Zone chest counts come from RetroAchievements; side quests, neggs
   and clovers from prinisse's GameFAQs walkthrough.
   ===================================================================== */
var TRACKER_GAME = {
  "id": "act1",
  "storeKey": "df_act1_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": null,
  "worldSummary": { "worlds": ["Ellis Family Farm", "Farm Road", "Root Cellar", "Bandit Caves", "Meridell Outskirts", "Meridell Plains", "Haunted Tombs", "Drackon Ridge", "Shadowglen Woods", "Meridell Castle 3rd Floor", "Meridell Castle Courtyard", "Meridell Sewers", "Illusen's Glade"], "sections": ["treasures","neggs","clovers"] },
  "tabs": [
    {
      "id": "quests",
      "sections": [
        {
          "id": "quests",
          "cols": [ {"k": "name", "name": true},{"k": "kind"},{"k": "detail"},{"k": "reward"} ],
          "items": [
            {"g": "Main Story", "name": "A Hero's First Steps"},
            {"g": "Main Story", "name": "Deliver Package"},
            {"g": "Main Story", "name": "Becoming a Squire"},
            {"g": "Main Story", "name": "Find Your Sister!"},
            {"g": "Main Story", "name": "Negg-tastic Discovery"},
            {"g": "Main Story", "name": "Catch the Miamice"},
            {"g": "Main Story", "name": "Clog Duty"},
            {"g": "Main Story", "name": "Squire Chores Over"},
            {"g": "Main Story", "name": "Ixi Raiders"},
            {"g": "Main Story", "name": "I Dub Thee, Sir Tormund!"},
            {"g": "Main Story", "name": "Beast Beneath the Blade"},
            {"g": "Main Story", "name": "Escape the Castle"},
            {"g": "Side Quests", "name": "Hide and Seek", "m": true},
            {"g": "Side Quests", "name": "Dangerous Weeds", "m": true},
            {"g": "Side Quests", "name": "Noises in the Root Cellar", "m": true},
            {"g": "Side Quests", "name": "Protect Bogg's Field", "m": true},
            {"g": "Side Quests", "name": "The Gelert Prince", "m": true},
            {"g": "Side Quests", "name": "Spyder Venom", "m": true},
            {"g": "Side Quests", "name": "A Magic Skull", "m": true},
            {"g": "Side Quests", "name": "The Arbendus Flower", "m": true},
            {"g": "Side Quests", "name": "Courting Lady Prunella", "m": true},
            {"g": "Side Quests", "name": "Growth Pod", "m": true}
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
            {"g": "Ellis Family Farm", "name": "Chest 1", "m": true},
            {"g": "Ellis Family Farm", "name": "Chest 2", "m": true},
            {"g": "Ellis Family Farm", "name": "Chest 3", "m": true},
            {"g": "Ellis Family Farm", "name": "Chest 4", "m": true},
            {"g": "Farm Road", "name": "Chest 1", "m": true},
            {"g": "Farm Road", "name": "Chest 2", "m": true},
            {"g": "Farm Road", "name": "Chest 3", "m": true},
            {"g": "Root Cellar", "name": "Chest 1", "m": true},
            {"g": "Root Cellar", "name": "Chest 2", "m": true},
            {"g": "Bandit Caves", "name": "Chest 1", "m": true},
            {"g": "Bandit Caves", "name": "Chest 2", "m": true},
            {"g": "Bandit Caves", "name": "Chest 3", "m": true},
            {"g": "Bandit Caves", "name": "Chest 4", "m": true},
            {"g": "Meridell Outskirts", "name": "Chest 1", "m": true},
            {"g": "Meridell Plains", "name": "Chest 1", "m": true},
            {"g": "Meridell Plains", "name": "Chest 2", "m": true},
            {"g": "Meridell Plains", "name": "Chest 3", "m": true},
            {"g": "Haunted Tombs", "name": "Chest 1", "m": true},
            {"g": "Haunted Tombs", "name": "Chest 2", "m": true},
            {"g": "Haunted Tombs", "name": "Chest 3", "m": true},
            {"g": "Haunted Tombs", "name": "Chest 4", "m": true},
            {"g": "Haunted Tombs", "name": "Chest 5", "m": true},
            {"g": "Drackon Ridge", "name": "Chest 1", "m": true},
            {"g": "Drackon Ridge", "name": "Chest 2", "m": true},
            {"g": "Drackon Ridge", "name": "Chest 3", "m": true},
            {"g": "Drackon Ridge", "name": "Chest 4", "m": true},
            {"g": "Drackon Ridge", "name": "Chest 5", "m": true},
            {"g": "Drackon Ridge", "name": "Chest 6", "m": true},
            {"g": "Drackon Ridge", "name": "Chest 7", "m": true},
            {"g": "Shadowglen Woods", "name": "Chest 1", "m": true},
            {"g": "Shadowglen Woods", "name": "Chest 2", "m": true},
            {"g": "Shadowglen Woods", "name": "Chest 3", "m": true},
            {"g": "Shadowglen Woods", "name": "Chest 4", "m": true},
            {"g": "Meridell Castle 3rd Floor", "name": "Chest 1", "m": true},
            {"g": "Meridell Castle 3rd Floor", "name": "Chest 2", "m": true},
            {"g": "Meridell Castle Courtyard", "name": "Chest 1", "m": true},
            {"g": "Meridell Castle Courtyard", "name": "Chest 2", "m": true},
            {"g": "Meridell Sewers", "name": "Chest 1", "m": true},
            {"g": "Meridell Sewers", "name": "Chest 2", "m": true},
            {"g": "Meridell Sewers", "name": "Chest 3", "m": true},
            {"g": "Illusen's Glade", "name": "Chest 1", "m": true},
            {"g": "Illusen's Glade", "name": "Chest 2", "m": true},
            {"g": "Illusen's Glade", "name": "Chest 3", "m": true},
            {"g": "Illusen's Glade", "name": "Chest 4", "m": true}
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
          "items": [
            {"name": "Red Negg", "m": true},
            {"name": "Red Negg", "m": true},
            {"name": "Starry / Golden Negg", "m": true},
            {"name": "Silver Negg", "m": true},
            {"name": "Speckled Negg", "m": true}
          ]
        }
      ]
    },
    {
      "id": "clovers",
      "sections": [
        {
          "id": "clovers",
          "cols": [ {"k": "name", "name": true},{"k": "where"} ],
          "items": [
            {"name": "4-Leaf Clover", "m": true},
            {"name": "4-Leaf Clover", "m": true},
            {"name": "12-Leaf Clover", "m": true}
          ]
        }
      ]
    }
  ]
};

(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
