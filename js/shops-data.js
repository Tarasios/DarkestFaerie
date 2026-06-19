/* =====================================================================
   Neopets: The Darkest Faerie — Shops reference (engine: js/df-tracker.js).
   One tab per town; items grouped by shop, with prices. Tick an item to mark
   it bought/owned — handy for the "Ultimate Hoarder" achievement (own one of
   every item). Prices/stock from prinisse's GameFAQs walkthrough (post-
   discount where applicable).
   ===================================================================== */
var TRACKER_GAME = {
  "id": "shops",
  "storeKey": "df_shops_v1",
  "charKey": null,
  "chars": [],
  "trophyAuto": null,
  "tabs": [
    {
      "id": "altador",
      "sections": [
        {
          "id": "altador",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "Arena District · Altador Magic Shop", "name": "Light Mote"},
            {"g": "Arena District · Altador Magic Shop", "name": "Fog Mote"},
            {"g": "Arena District · Altador Magic Shop", "name": "Smoke Mote"},
            {"g": "Arena District · Altador Magic Shop", "name": "Bubble Mote"},
            {"g": "Arena District · Altador Magic Shop", "name": "Supernova Mote"},
            {"g": "Arena District · Altador Magic Shop", "name": "Fire Mote"},
            {"g": "Arena District · Altador Magic Shop", "name": "Park District Treasure Map"},
            {"g": "Arena District · Altador Food Shop", "name": "Red Juppie"},
            {"g": "Arena District · Altador Food Shop", "name": "Starberry"},
            {"g": "Arena District · Altador Food Shop", "name": "Purple Juppie"},
            {"g": "Arena District · Altador Food Shop", "name": "Chokato"},
            {"g": "Arena District · Altador Blacksmith", "name": "Wand of the Ancients"},
            {"g": "Arena District · Altador Blacksmith", "name": "Razor Sword"},
            {"g": "Bazaar District · Altador Armory", "name": "Altadorian Plate"},
            {"g": "Bazaar District · Altador Armory", "name": "Legendary Robes"},
            {"g": "Bazaar District · Rogin the Wretched (white skeith)", "name": "Arena District Treasure Map"},
            {"g": "Bazaar District · Rogin the Wretched (white skeith)", "name": "Park District Treasure Map"},
            {"g": "Bazaar District · Rogin the Wretched (white skeith)", "name": "Money District Treasure Map"},
            {"g": "Bazaar District · Altador Trove", "name": "Money District Treasure Map"},
            {"g": "Bazaar District · Altador Trove", "name": "Potion of Power"},
            {"g": "Bazaar District · Altador Trove", "name": "Nova Mote"},
            {"g": "Bazaar District · Altador Trove", "name": "Legendary Shield"},
            {"g": "Bazaar District · The Curious Aisha", "name": "4-Leaf Clover"},
            {"g": "Bazaar District · The Curious Aisha", "name": "Park District Treasure Map"},
            {"g": "Bazaar District · The Curious Aisha", "name": "Meerca Speed Potion"},
            {"g": "Bazaar District · The Curious Aisha", "name": "Starlight Potion"},
            {"g": "Money District · Altador Magic Shop", "name": "Rock Mote"},
            {"g": "Money District · Altador Magic Shop", "name": "Water Mote"},
            {"g": "Money District · Altador Magic Shop", "name": "Sun Mote"},
            {"g": "Money District · Altador Magic Shop", "name": "Wind Mote"},
            {"g": "Money District · Altador Magic Shop", "name": "Lava Mote"},
            {"g": "Money District · Altador Magic Shop", "name": "Bazaar District Treasure Map"},
            {"g": "Money District · Altador Potion Shop", "name": "Park District Treasure Map"},
            {"g": "Money District · Altador Potion Shop", "name": "Fyora's Potion"},
            {"g": "Money District · Altador Potion Shop", "name": "Potion of Revival"},
            {"g": "Money District · Altador Potion Shop", "name": "Unguent of Curing"},
            {"g": "Money District · Altador Potion Shop", "name": "Kauvara's Potion"},
            {"g": "Park District · Altador Food Shop", "name": "Ergyfruit"},
            {"g": "Park District · Altador Food Shop", "name": "Peachpa"},
            {"g": "Park District · Altador Food Shop", "name": "Bagguss"},
            {"g": "Park District · Altador Neggery", "name": "Bazaar District Treasure Map"},
            {"g": "Park District · Altador Neggery", "name": "Golden Negg"},
            {"g": "Park District · Altador Neggery", "name": "Striped Negg"},
            {"g": "Park District · Altador Neggery", "name": "Silver Negg"},
            {"g": "Park District · Altador Potion Shop", "name": "Spyder Juice Elixir"},
            {"g": "Park District · Altador Potion Shop", "name": "Ointment of Quickness"},
            {"g": "Park District · Altador Potion Shop", "name": "Arena District Map"},
            {"g": "Park District · Altador Potion Shop", "name": "Dispelling Potion"},
            {"g": "Park District · Altador Potion Shop", "name": "Potion of Revival"}
          ]
        }
      ]
    },
    {
      "id": "bogshotvillage",
      "sections": [
        {
          "id": "bogshotvillage",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "Sunnyfields Fine Foods", "name": "Red Juppie"},
            {"g": "Sunnyfields Fine Foods", "name": "Purple Juppie"},
            {"g": "Sunnyfields Fine Foods", "name": "Ergyfruit"},
            {"g": "Sunnyfields Fine Foods", "name": "Speckled Negg"},
            {"g": "Sunnyfields Fine Foods", "name": "Bagguss"},
            {"g": "Curious Curios", "name": "Meridell Farms Treasure Map"},
            {"g": "Curious Curios", "name": "Red Negg"},
            {"g": "Curious Curios", "name": "Starlight Potion"},
            {"g": "Curious Curios", "name": "Werelupe Woods Treasure Map"},
            {"g": "Curious Curios", "name": "Tome of Warding"},
            {"g": "Bogshot Apothecary", "name": "Spyder Juice Elixir"},
            {"g": "Bogshot Apothecary", "name": "Potion of Revival"}
          ]
        }
      ]
    },
    {
      "id": "brightvale",
      "sections": [
        {
          "id": "brightvale",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "Fruits of Brightvale", "name": "Bagguss"},
            {"g": "Fruits of Brightvale", "name": "Red Juppie"},
            {"g": "Fruits of Brightvale", "name": "Purple Juppie"},
            {"g": "Fruits of Brightvale", "name": "Starberry"},
            {"g": "Fruits of Brightvale", "name": "Chokato"},
            {"g": "Brightvale Motery", "name": "Smoke Mote"},
            {"g": "Brightvale Motery", "name": "Light Mote"},
            {"g": "Brightvale Motery", "name": "Fire Mote"},
            {"g": "Brightvale Motery", "name": "Wind Mote"},
            {"g": "Brightvale Motery", "name": "Leaf Mote"},
            {"g": "Brightvale Motery", "name": "Nova Mote"},
            {"g": "Matkin's Maps", "name": "Bogshot Treasure Map"},
            {"g": "Matkin's Maps", "name": "Brightvale Treasure Map"},
            {"g": "Matkin's Maps", "name": "Brightvale Road Treasure Map"},
            {"g": "Matkin's Maps", "name": "Crossroads Treasure Map"},
            {"g": "Matkin's Maps", "name": "Werelupe Woods Treasure Map"},
            {"g": "The Royal Potionry", "name": "Spyder Juice Elixir"},
            {"g": "The Royal Potionry", "name": "Potion of Power"},
            {"g": "Brightvale Armoury", "name": "Knight's Shield"},
            {"g": "Brightvale Armoury", "name": "Magic Robes"}
          ]
        }
      ]
    },
    {
      "id": "coghamvillage",
      "sections": [
        {
          "id": "coghamvillage",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "The Peachpa Hut", "name": "Purple Juppie"},
            {"g": "The Peachpa Hut", "name": "Red Juppie"},
            {"g": "The Peachpa Hut", "name": "Peachpa"},
            {"g": "Brennan's Anvil", "name": "Knight's Sword"},
            {"g": "Brennan's Anvil", "name": "Enchanter's Wand"},
            {"g": "Treasures and Trinkets", "name": "Starlight Potion"},
            {"g": "Treasures and Trinkets", "name": "Potion of Revival"},
            {"g": "Treasures and Trinkets", "name": "Starry Negg"},
            {"g": "Treasures and Trinkets", "name": "Shadowglen Treasure Map"},
            {"g": "Treasures and Trinkets", "name": "Meridell Farms Treasure Map"},
            {"g": "Ingmar's Armoury", "name": "Iron Shield"}
          ]
        }
      ]
    },
    {
      "id": "drackonridge",
      "sections": [
        {
          "id": "drackonridge",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "Motara's Marvelous Motes", "name": "Sun Mote"},
            {"g": "Motara's Marvelous Motes", "name": "Lava Mote"},
            {"g": "Motara's Marvelous Motes", "name": "Shadow Mote"},
            {"g": "Motara's Marvelous Motes", "name": "Wind Mote"},
            {"g": "Motara's Marvelous Motes", "name": "Rock Mote"},
            {"g": "Motara's Marvelous Motes", "name": "Wizard's Gown"}
          ]
        }
      ]
    },
    {
      "id": "faerieland",
      "sections": [
        {
          "id": "faerieland",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "Potionmaker Fizlar", "name": "Potion of Meerca Speed"},
            {"g": "Potionmaker Fizlar", "name": "Dispelling Potion"},
            {"g": "Potionmaker Fizlar", "name": "Spyder Juice Elixir"},
            {"g": "Shopkeep Visal", "name": "Purple Juppie"},
            {"g": "Shopkeep Visal", "name": "Speckled Negg"},
            {"g": "Shopkeep Visal", "name": "Starberry"},
            {"g": "Shopkeep Visal", "name": "Red Juppie"},
            {"g": "Shopkeep Visal", "name": "Chokato"},
            {"g": "Hidden Tower", "name": "Sorcerer's Wand"},
            {"g": "Hidden Tower", "name": "Faerie Dress"},
            {"g": "Hidden Tower", "name": "Golden Shield"},
            {"g": "Hidden Tower", "name": "Silver Negg"},
            {"g": "Hidden Tower", "name": "Golden Negg"},
            {"g": "Hidden Tower", "name": "Fyora's Potion"},
            {"g": "Hidden Tower", "name": "Kauvara's Potion"}
          ]
        }
      ]
    },
    {
      "id": "illusensglade",
      "sections": [
        {
          "id": "illusensglade",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "Nothin but Neggs!", "name": "Speckled Negg"},
            {"g": "Nothin but Neggs!", "name": "Silver Negg"},
            {"g": "Nothin but Neggs!", "name": "Golden Negg"},
            {"g": "Nothin but Neggs!", "name": "Striped Negg"}
          ]
        }
      ]
    },
    {
      "id": "markettown",
      "sections": [
        {
          "id": "markettown",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "The Magic Anvil", "name": "Battle Blade"},
            {"g": "The Magic Anvil", "name": "Magician's Wand"},
            {"g": "Market Town Armourer", "name": "Noble Press"},
            {"g": "Market Town Armourer", "name": "Golden Shield"},
            {"g": "Market Town Armourer", "name": "Royal Armour"},
            {"g": "Even Curiouser Curios", "name": "Starry Negg"},
            {"g": "Even Curiouser Curios", "name": "Red Negg"},
            {"g": "Even Curiouser Curios", "name": "Brightvale Treasure Map"},
            {"g": "Even Curiouser Curios", "name": "Steppe Plateau Treasure Map"},
            {"g": "Even Curiouser Curios", "name": "Werelupe Woods Treasure Map"},
            {"g": "Market Town Grocers", "name": "Peachpa"},
            {"g": "Market Town Grocers", "name": "Ergyfruit"},
            {"g": "Market Town Grocers", "name": "Striped Negg"},
            {"g": "The Bubbling Cauldron", "name": "Potion of Meerca Speed"},
            {"g": "The Bubbling Cauldron", "name": "Unguent of Curing"},
            {"g": "The Bubbling Cauldron", "name": "Starlight Potion"},
            {"g": "The Bubbling Cauldron", "name": "Fyora's Potion"},
            {"g": "The Bubbling Cauldron", "name": "Kauvara's Potion"},
            {"g": "Monty (found on the rooftops near Market Town Grocers)", "name": "Black Keep Treasure Map"},
            {"g": "Monty (found on the rooftops near Market Town Grocers)", "name": "Werelupe Woods Treasure Map"},
            {"g": "Monty (found on the rooftops near Market Town Grocers)", "name": "Shadowglen Treasure Map"}
          ]
        }
      ]
    },
    {
      "id": "meridell",
      "sections": [
        {
          "id": "meridell",
          "cols": [ { "k": "name", "name": true }, { "k": "price" } ],
          "items": [
            {"g": "Rory the Shady Guy (shadow kacheek)", "name": "Drackon Ridge Treasure Map x2"},
            {"g": "Rory the Shady Guy (shadow kacheek)", "name": "Meridell Plains Treasure Map"},
            {"g": "Rory the Shady Guy (shadow kacheek)", "name": "Meri Acres Farm Treasure Map"},
            {"g": "Rory the Shady Guy (shadow kacheek)", "name": "Illusen's Glade Treasure Map"},
            {"g": "Rory the Shady Guy (shadow kacheek)", "name": "Meridell Farms Treasure Map"},
            {"g": "Angus' Apothecary", "name": "Spyder Juice Elixir"},
            {"g": "Angus' Apothecary", "name": "Potion of Power"},
            {"g": "Angus' Apothecary", "name": "Potion of Meerca Speed"},
            {"g": "Meridell Food 'n Slop", "name": "Red Juppie"},
            {"g": "Meridell Food 'n Slop", "name": "Starberry"},
            {"g": "Meridell Food 'n Slop", "name": "Bagguss"},
            {"g": "Meridell Food 'n Slop", "name": "Chokato"},
            {"g": "Meridell Food 'n Slop", "name": "Purple Juppie"},
            {"g": "Mistress Morag's Magical Merchandise", "name": "Light Mote"},
            {"g": "Mistress Morag's Magical Merchandise", "name": "Fire Mote"},
            {"g": "Mistress Morag's Magical Merchandise", "name": "Smoke Mote"},
            {"g": "Mistress Morag's Magical Merchandise", "name": "Bubble Mote"},
            {"g": "Mistress Morag's Magical Merchandise", "name": "Leaf Mote"},
            {"g": "Mistress Morag's Magical Merchandise", "name": "Sorcerer's Wand"},
            {"g": "Meridell Smithy", "name": "Squire Sword"},
            {"g": "The Village Armoury", "name": "Wooden Shield"},
            {"g": "Shoppe of Curious Wonders", "name": "Speckled Negg"},
            {"g": "Shoppe of Curious Wonders", "name": "Ointment of Quickness"},
            {"g": "Shoppe of Curious Wonders", "name": "Dispelling Potion"},
            {"g": "Shoppe of Curious Wonders", "name": "Meridell Castle Treasure Map"},
            {"g": "Shoppe of Curious Wonders", "name": "Lava Mote"},
            {"g": "Shoppe of Curious Wonders", "name": "Smoke Mote"},
            {"g": "Shoppe of Curious Wonders", "name": "Starry Negg"},
            {"g": "Shoppe of Curious Wonders", "name": "Fire Mote"},
            {"g": "Shoppe of Curious Wonders", "name": "Witch's Wand"}
          ]
        }
      ]
    }
  ]
};

(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;
