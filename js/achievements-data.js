/* =====================================================================
   Neopets: The Darkest Faerie — Achievements tracker data (RetroAchievements
   set #20693, 188 achievements / 929 pts), for the generic engine
   (js/df-tracker.js). One tab per Act in the game's natural progression order,
   plus a Global tab for the cumulative (collect-N / hoard) achievements.

   Display text (points, type, description) lives in
   lang/messages/en/achievements-tracker.json, matched by section id + index.
   Items flagged "m": true are MISSABLE — Act-locked content (Acts 1–3) you can
   no longer earn once you leave the Act. Act 1 treasure-chest achievements are
   NOT flagged: you can revisit Act 1 areas in Act 3.
   ===================================================================== */
var TRACKER_GAME = {
  "id": "achievements",
  "storeKey": "df_ach_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": null,
  "tabs": [
    {
      "id": "act1",
      "sections": [
        {
          "id": "act1",
          "trophies": true,
          "cols": [ { "k": "pts" }, { "k": "name", "name": true }, { "k": "type" }, { "k": "desc" } ],
          "items": [
            {"name": "A Hero's First Steps"},
            {"name": "Today a Reader, Tomorrow a Leader", "m": true},
            {"name": "Ellis Family Farm Treasure Hunter"},
            {"name": "Farm Road Treasure Hunter"},
            {"name": "Hide and Seek", "m": true},
            {"name": "Dangerous Weeds", "m": true},
            {"name": "Root Cellar Treasure Hunter"},
            {"name": "Noises in the Root Cellar", "m": true},
            {"name": "Protect Bogg's Field", "m": true},
            {"name": "Gallant Gallion", "m": true},
            {"name": "Bandit Caves Treasure Hunter"},
            {"name": "The Gelert Prince", "m": true},
            {"name": "Dangerous Doglefox", "m": true},
            {"name": "Lucky Charm", "m": true},
            {"name": "Meridell Outskirts Treasure Hunter"},
            {"name": "Deliver Package"},
            {"name": "Champion of Meridell", "m": true},
            {"name": "Splintered Victory", "m": true},
            {"name": "Sharper Ambitions", "m": true},
            {"name": "Wheel of Chance", "m": true},
            {"name": "Becoming a Squire"},
            {"name": "Meridell Plains Treasure Hunter"},
            {"name": "Haunted Tombs Treasure Hunter"},
            {"name": "A Magic Skull", "m": true},
            {"name": "Drackon Ridge Treasure Hunter"},
            {"name": "Hunting Drackonacks", "m": true},
            {"name": "Spyder Venom", "m": true},
            {"name": "Shadowglen Woods Treasure Hunter"},
            {"name": "Find Your Sister!"},
            {"name": "Three Times the Luck", "m": true},
            {"name": "Mystical Nourishment", "m": true},
            {"name": "The Arbendus Flower", "m": true},
            {"name": "Negg-tastic Discovery"},
            {"name": "Cosmic Discovery", "m": true},
            {"name": "Meridell Castle 3rd Floor Treasure Hunter"},
            {"name": "Catch the Miamice"},
            {"name": "Meridell Castle Courtyard Treasure Hunter"},
            {"name": "Meridell Sewers Treasure Hunter"},
            {"name": "Clog Duty"},
            {"name": "Courting Lady Prunella", "m": true},
            {"name": "Squire Chores Over"},
            {"name": "Mote Quest", "m": true},
            {"name": "Robes of the Wise One", "m": true},
            {"name": "Cogham Steppes Treasure Hunter"},
            {"name": "Ixi Raiders"},
            {"name": "Growth Pod", "m": true},
            {"name": "Ironclad Protector", "m": true},
            {"name": "Sword of Chivalry", "m": true},
            {"name": "I Dub Thee, Sir Tormund!"},
            {"name": "Illusen's Glade Treasure Hunter"},
            {"name": "Beast Beneath the Blade"},
            {"name": "Spark of the Cosmos", "m": true},
            {"name": "Escape the Castle"}
          ]
        }
      ]
    },
    {
      "id": "act2",
      "sections": [
        {
          "id": "act2",
          "trophies": true,
          "cols": [ { "k": "pts" }, { "k": "name", "name": true }, { "k": "type" }, { "k": "desc" } ],
          "items": [
            {"name": "Magic Training"},
            {"name": "Mystical Meowclops", "m": true},
            {"name": "Faerie Dust Paint", "m": true},
            {"name": "Harris Rescue", "m": true},
            {"name": "Sorcery Unleashed", "m": true},
            {"name": "Faerie's Grace", "m": true},
            {"name": "Rescue the Aisha"},
            {"name": "Escape From Faerieland"}
          ]
        }
      ]
    },
    {
      "id": "act3",
      "sections": [
        {
          "id": "act3",
          "trophies": true,
          "cols": [ { "k": "pts" }, { "k": "name", "name": true }, { "k": "type" }, { "k": "desc" } ],
          "items": [
            {"name": "Western Brightvale Treasure Hunter", "m": true},
            {"name": "Crossroads Treasure Hunter", "m": true},
            {"name": "Brightvale Outskirts Treasure Hunter", "m": true},
            {"name": "Defender of Honor", "m": true},
            {"name": "Woven in Magic", "m": true},
            {"name": "Arcane Awakening", "m": true},
            {"name": "Challenge Accepted", "m": true},
            {"name": "Wheel of Knowledge", "m": true},
            {"name": "Brightvale Castle Treasure Hunter", "m": true},
            {"name": "Need Research"},
            {"name": "The Golden Rose", "m": true},
            {"name": "Cynthia's Noil", "m": true},
            {"name": "Nurturing Noil", "m": true},
            {"name": "Brightvale Coast Treasure Hunter", "m": true},
            {"name": "Dungeon Ruins Treasure Hunter", "m": true},
            {"name": "The Lighthouse", "m": true},
            {"name": "Worried Sister", "m": true},
            {"name": "Mountain Passage Treasure Hunter", "m": true},
            {"name": "Bogshot Swamp Treasure Hunter", "m": true},
            {"name": "Bogshot Sinkholes Treasure Hunter", "m": true},
            {"name": "Plague Serpent"},
            {"name": "Bogberry Cure"},
            {"name": "Tome of Warding", "m": true},
            {"name": "Old Mine Treasure Hunter", "m": true},
            {"name": "The Kreludan Blade", "m": true},
            {"name": "Steppe Plateau Treasure Hunter", "m": true},
            {"name": "Poison Seeds", "m": true},
            {"name": "Missing Kid", "m": true},
            {"name": "Leaping to Glory", "m": true},
            {"name": "Motara the Mote-Keeper", "m": true},
            {"name": "Werelupe Woods Treasure Hunter", "m": true},
            {"name": "The Witch's Favor", "m": true},
            {"name": "Werelupe Sinkholes Treasure Hunter", "m": true},
            {"name": "Werelupe Graveyard Treasure Hunter", "m": true},
            {"name": "Crypt of the Fallen Treasure Hunter", "m": true},
            {"name": "Crypt of the Sentries Treasure Hunter", "m": true},
            {"name": "Crypt of the Exiled Treasure Hunter", "m": true},
            {"name": "Fang Necklace"},
            {"name": "Werelupe Burrows Upper Treasure Hunter", "m": true},
            {"name": "Werelupe Burrows Middle Treasure Hunter", "m": true},
            {"name": "Werelupe Burrows Lower Treasure Hunter", "m": true},
            {"name": "The Last Howl"},
            {"name": "Missing Farmers"},
            {"name": "Abandoned Mines Treasure Hunter", "m": true},
            {"name": "Missing Miners"},
            {"name": "Free Cogham Village"},
            {"name": "Mystical Masterpiece", "m": true},
            {"name": "The Thunderhammer", "m": true},
            {"name": "Lodestone", "m": true},
            {"name": "Meriload Mine Treasure Hunter", "m": true},
            {"name": "Codex of Protection", "m": true},
            {"name": "Mayor's Broken Watch", "m": true},
            {"name": "Free Illusen's Village"},
            {"name": "The Love Letters", "m": true},
            {"name": "Knightfall at Market Town's Door"},
            {"name": "Black Keep Grounds Treasure Hunter", "m": true},
            {"name": "The Black Knight"},
            {"name": "Black Keep Dungeon Treasure Hunter", "m": true},
            {"name": "Blade of Valor", "m": true},
            {"name": "Royal Guard", "m": true},
            {"name": "Wand of Wonders", "m": true},
            {"name": "Golden Bastion", "m": true},
            {"name": "Enchanted Elegance", "m": true},
            {"name": "Talented Turmac", "m": true},
            {"name": "Pink Posies", "m": true},
            {"name": "Rathbone Family Crypts Treasure Hunter", "m": true},
            {"name": "The Gelert Family Crypts", "m": true},
            {"name": "Into the Witch's Woods (Trader's Guild Delivery)", "m": true},
            {"name": "Parts and Peepers (Trader's Guild Delivery)", "m": true},
            {"name": "The King's Saviour (Trader's Guild Delivery)", "m": true},
            {"name": "Courtesy Message"},
            {"name": "Into Meridell"},
            {"name": "Ancient Sewers Treasure Hunter", "m": true},
            {"name": "Ancient Mechanisms"},
            {"name": "Ruined Caves Treasure Hunter", "m": true},
            {"name": "Oubliette Treasure Hunter", "m": true},
            {"name": "Freedom from the Oubliette"},
            {"name": "The Forgotten Edge"},
            {"name": "Meridell Treasure Vault Treasure Hunter", "m": true},
            {"name": "Gilded Guardian", "m": true},
            {"name": "Fyora's Rod"},
            {"name": "Shadow Sisters Fall"},
            {"name": "Save Queen Fyora"}
          ]
        }
      ]
    },
    {
      "id": "act4",
      "sections": [
        {
          "id": "act4",
          "trophies": true,
          "cols": [ { "k": "pts" }, { "k": "name", "name": true }, { "k": "type" }, { "k": "desc" } ],
          "items": [
            {"name": "Hall of Heroes Treasure Hunter"},
            {"name": "Arena District Treasure Hunter"},
            {"name": "Coliseum Treasure Hunter"},
            {"name": "The Gladiator Legend"},
            {"name": "Champion of the Coliseum"},
            {"name": "Razor Edge"},
            {"name": "Keeper of the Arcane"},
            {"name": "Secret Sewers Treasure Hunter"},
            {"name": "Park District Treasure Hunter"},
            {"name": "Park Shrine Treasure Hunter"},
            {"name": "The Petpet Legend"},
            {"name": "Money District Treasure Hunter"},
            {"name": "Treasury Treasure Hunter"},
            {"name": "The Treasurer Legend"},
            {"name": "Wheel of Prosperity"},
            {"name": "Bazaar District Treasure Hunter"},
            {"name": "Sewer Shrine Treasure Hunter"},
            {"name": "The Rogue Legend"},
            {"name": "Eternal Protector"},
            {"name": "Vestments of the Eternal Hero"},
            {"name": "Altador's Guardian"},
            {"name": "Heroes Rest Treasure Hunter"},
            {"name": "Blade of Altador's Might"},
            {"name": "Awaken Jerdana"},
            {"name": "The Darkest Faerie"},
            {"name": "The Grand Conclusion"}
          ]
        }
      ]
    },
    {
      "id": "global",
      "sections": [
        {
          "id": "global",
          "trophies": true,
          "cols": [ { "k": "pts" }, { "k": "name", "name": true }, { "k": "type" }, { "k": "desc" } ],
          "items": [
            {"name": "Banking Big in Neopia"},
            {"name": "Neopian Riches"},
            {"name": "Health Infusion"},
            {"name": "Vitality Boosted"},
            {"name": "Edge of Immortality"},
            {"name": "Stellar Power"},
            {"name": "Mana Overload"},
            {"name": "Fortune's Favourite"},
            {"name": "Clover King"},
            {"name": "Luckiest Neopian Alive"},
            {"name": "Treasure Expedition"},
            {"name": "Path of the Treasure Hunter"},
            {"name": "Treasure Seeker"},
            {"name": "Chests of Fortune"},
            {"name": "Looting Legend"},
            {"name": "Mote Enthusiast"},
            {"name": "Ultimate Hoarder"},
            {"name": "Petpet World Tour"}
          ]
        }
      ]
    }
  ]
};

(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
