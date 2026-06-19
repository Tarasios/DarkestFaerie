# Darkest Faerie 100%

A free, fast **completion tracker for Neopets: The Darkest Faerie (PS2)**.
Tick off every achievement, treasure chest, quest, negg, clover and enemy —
it runs entirely in your browser, with **no account, no backend, and nothing
leaving your device**.

Built to mirror the structure of the [KH Completionist](https://github.com/tarasios/KingdomHearts-Achievements)
tracker, but organised around this game's two defining quirks:

- **Everything is split by Act.** When you move to a later Act you lose access
  to most of the previous Act's content, so each Act is its own tracker page.
- **Missable content is flagged.** Side quests, items and treasures in Acts 1–3
  lock when the Act ends (Act 3 locks at the *Into Meridell* point of no return).
  Missable entries get a red marker and a **"missable only"** filter so you can
  sweep an Act before leaving it.

## What it tracks

- **Achievements** — all **188** RetroAchievements ([set #20693](https://retroachievements.org/game/20693),
  929 points), split by Act in progression order, with points, descriptions and
  missable flags.
- **Per Act (1–4)** — **Quests** (main story in unlock order + missable side
  quests with their rewards), **Treasure Chests** by zone, **Neggs** and
  **Clovers**, plus a **Zones** summary that buckets collectibles by area.
- **Bestiary & Elements** — every enemy and boss grouped by **element**
  (Air, Earth, Dark, Fire, Light, Water). The game hides elements, but they
  matter: each has an opposite — **Fire ↔ Water, Air ↔ Earth, Light ↔ Dark** —
  shown on hover. Note the act-variants (e.g. the Ixi Chieftain is Earth in
  Act 1 but Dark in Act 3).

## Your data stays yours

All progress lives in your browser's `localStorage`. No accounts, no analytics,
no server. Export / Import backs everything up as a single JSON file.

## Running it locally

A plain static site, no build step. Serve the folder over HTTP (don't open the
HTML with `file://`, or the language files can't load):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## For contributors

Plain HTML, CSS and JavaScript — no framework, no bundler. Every path is
relative, so it works from a domain root or a GitHub Pages subpath.

### Structure

```
index.html                  Landing page — overall + per-tracker progress
tools/act1.html … act4.html One tracker page per Act
tools/achievements.html     The 188-achievement checklist, by Act
tools/bestiary.html         Enemies & bosses by element + the element system
css/main.css                Shared theme (night + day palettes, landing)
css/df.css                  Tracker styles (tables, element pills, missable)
js/i18n.js                  Language system (loads one JSON per page)
js/theme.js                 Night / Day theme toggle (night default)
js/df-common.js             Shared helpers (DF.el / esc / fmtText / …)
js/df-tracker.js            Generic tracker engine (reads TRACKER_GAME)
js/df-summary.js            DOM-free totals (used by the landing page)
js/landing.js               Builds the landing page from those totals
js/*-data.js                Per-page data modules (the global TRACKER_GAME)
js/df-progress.js           Export / Import bar
sw.js                       Service worker (caches the data modules + images)
lang/messages/en/*.json     All visible text, one file per page
source/                     Data-generation scripts + derived JSON (see below)
```

### How the trackers work

Every page is one data module that defines a global `TRACKER_GAME` config of
`tabs → sections → items`; `js/df-tracker.js` renders it (tabs, checklists,
the optional **Zones** summary, dashboard, toasts) and saves ticks to
`localStorage`. Structure + the English name (a stable id) live in the data
module; all display text lives in `lang/messages/en/<page>.json`, matched by
section id + item index — **keep the item order in sync**.

This game adds two engine features over the KH original:

- **Missable** — an item with `"m": true` gets a red marker, a tinted row and
  is counted by the **"missable only"** toolbar filter.
- **Element** — a column with `"element": true` renders a coloured element pill
  whose tooltip shows the opposing element.

### Regenerating the data

The Act / Achievements / Bestiary modules are generated from the
RetroAchievements list (which encodes the Act + zone + chest structure) and
prinisse's GameFAQs walkthrough (side quests, neggs, clovers, enemy elements).
The generators and derived JSON live in `source/`; the raw scraped pages are
left out of version control (see `.gitignore`). `source/run-engine.js` renders
every module through a DOM shim as a quick smoke test:

```bash
node source/run-engine.js
```

### Status

Achievements, treasure-by-zone, main quests, the bestiary and the element
system are complete. Neggs and clovers list the guide-sourced entries so far;
per-zone enemy encounter tables (which differ for Act 1 zones revisited in
Act 3) are a planned enrichment.
