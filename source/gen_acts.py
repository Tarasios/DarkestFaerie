# Generates the Act data modules + lang, the Bestiary, and landing lang
# from the parsed RetroAchievements list + curated guide data.
import json, re, io

A = json.load(open('achievements.json'))
titles = [a['title'] for a in A]
def idx(t): return titles.index(t)

ACT_RANGES = {
 "act1": (0, idx('Escape the Castle')),
 "act2": (idx('Magic Training'), idx('Escape From Faerieland')),
 "act3": (idx('Western Brightvale Treasure Hunter'), idx('Save Queen Fyora')),
 "act4": (idx('Hall of Heroes Treasure Hunter'), idx('The Grand Conclusion')),
}
ACT_LABEL = {"act1":"Act 1","act2":"Act 2","act3":"Act 3","act4":"Act 4"}
ACT_TITLE = {
 "act1":"Act 1 — Tormund's Story","act2":"Act 2 — Roberta's Story",
 "act3":"Act 3 — Heroes United","act4":"Act 4 — Legends of Altador",
}
MISS = {"act1":True,"act2":True,"act3":True,"act4":False}

def act_slice(act):
    s,e = ACT_RANGES[act]; return A[s:e+1]

# ---- zones + chest counts (from "Treasure Hunter" achievements) ----
def zones_for(act):
    out=[]
    for a in act_slice(act):
        m=re.search(r'open (\d+) treasure chest', a['desc'])
        if m and ' in ' in a['desc']:
            z=a['desc'].split(' in ',1)[1].strip()
            z=re.sub(r' near the boss area','',z).strip()
            out.append((z,int(m.group(1))))
    return out

# ---- main quests = progression achievements (ordered) ----
def main_quests(act):
    return [(a['title'], a['desc']) for a in act_slice(act) if a['type']=='progression']

# ---- curated side quests (guide): (title, where, reward) ----
SIDE = {
 "act1":[
  ("Hide and Seek","Farm Road — aisha across the lake","Random Mote"),
  ("Dangerous Weeds","Farm Road — aisha by the farmhouse","4-Leaf Clover"),
  ("Noises in the Root Cellar","Farm Road — Juppie Farms root cellar","100 NP · Shadowglen Treasure Map"),
  ("Protect Bogg's Field","Farm Road — Old Man Bogg's chokato patch","Chokato"),
  ("The Gelert Prince","Meridell Outskirts — Bandit Caves","Speckled Negg · Golden Rose · 350 NP"),
  ("Spyder Venom","Meridell Village — Gamon, Shoppe of Curious Wonders","500 NP"),
  ("A Magic Skull","Meridell Village — Mistress Morag → Haunted Tombs","750 NP"),
  ("The Arbendus Flower","Meridell Village — Angus the Apothecary → Shadowglen Woods","500 NP"),
  ("Courting Lady Prunella","Meridell Castle — Lady Prunella, courtyard","Silver Negg"),
  ("Growth Pod","Cogham Steppes — Cogham food shoppe owner","Red Negg"),
 ],
 "act2":[
  ("Harris Rescue","Faerieland — get the Aisha's pet out of the tree","Potion of Power"),
  ("Faerie Dust Paint","Faerieland — find faerie dust for painter Howell","Bottle of Faerie Dust"),
 ],
 "act3":[
  ("The Golden Rose","Brightvale — deliver the Golden Rose to Princess Dona","Red Negg · Letters of Devotion"),
  ("Worried Sister","Brightvale — find Primrose in Bogshot for Mistress Marrion","Striped Negg · Silver Negg"),
  ("Cynthia's Noil","Brightvale — bring Cynthia a Noil petpet","4-Leaf Clover"),
  ("The Lighthouse","Brightvale Coast — activate the lighthouse for Isaac","400 NP"),
  ("The Kreludan Blade","Bogshot Village — return Kreludan metal to Grimnar","Kreludan Blade"),
  ("Poison Seeds","Bogshot — get poison seeds from a Glooper flower for Fautt","750 NP"),
  ("Missing Kid","Bogshot Swamp — find the missing kid","Unlocks Mortog Races"),
  ("The Thunderhammer","Cogham Village — recover Ingmar the Smithy's hammer","Smithy reward"),
  ("Lodestone","Cogham — help Giovanni the Explorer find the Lodestone","Silver Negg"),
  ("Mayor's Broken Watch","Cogham — find a white crystal for Mayor Jurgin's watch","12-Leaf Clover"),
  ("Pink Posies","Market Town — bring Nina her pink flowers","Silver Negg"),
  ("The Gelert Family Crypts","Brightvale outskirts — find proof of Prince Tourin's lineage","Red Negg"),
  ("Into the Witch's Woods (Trader's Guild Delivery)","Market Town — deliver to Sophie the Swamp Witch","400 NP"),
  ("Parts and Peepers (Trader's Guild Delivery)","Market Town — deliver to Hubert, then Douglas","2,000 NP"),
  ("The King's Saviour (Trader's Guild Delivery)","Market Town — thwart a plot and save the king","Silver Negg"),
  ("The Love Letters","Market Town — deliver Princess Dona's letters to Prince Tourin","Quest reward"),
 ],
 "act4":[],
}

# ---- curated neggs (guide-sourced). (name, effect, where) ----
NEGG = {
 "act1":[
  ("Red Negg","+ Health (permanent)","Reward: Growth Pod (Cogham Steppes)"),
  ("Red Negg","+ Health (permanent)","Haunted Tombs — fully explore during A Magic Skull"),
  ("Starry / Golden Negg","+ Magic (permanent)","First found in Act 1 → “Mystical Nourishment”"),
  ("Silver Negg","Fully restores HP & MP (consumable)","Reward: Courting Lady Prunella"),
  ("Speckled Negg","Sellable negg","Reward: The Gelert Prince"),
 ],
 "act2":[],
 "act3":[
  ("Red Negg","+ Health (permanent)","Reward: The Golden Rose"),
  ("Red Negg","+ Health (permanent)","Reward: The Gelert Family Crypts"),
  ("Striped Negg","Sellable negg","Reward: Worried Sister"),
  ("Silver Negg","Fully restores HP & MP (consumable)","Rewards: Worried Sister · Lodestone · Pink Posies · The King's Saviour"),
 ],
 "act4":[],
}

# ---- curated clovers (guide-sourced). (name, where) ----
CLOVER = {
 "act1":[
  ("4-Leaf Clover","Reward: Dangerous Weeds (Farm Road)"),
  ("4-Leaf Clover","Haunted Tombs — fully explore during A Magic Skull"),
  ("12-Leaf Clover","Found in a large clearing → “Three Times the Luck”"),
 ],
 "act2":[],
 "act3":[
  ("4-Leaf Clover","Reward: Cynthia's Noil (Brightvale)"),
  ("4-Leaf Clover","Abandoned Mines (Cogham)"),
  ("12-Leaf Clover","Reward: Mayor's Broken Watch (Cogham)"),
 ],
 "act4":[],
}

def jrow(d): return json.dumps(d, ensure_ascii=False)

def build_act(act):
    label = ACT_LABEL[act]; missable = MISS[act]
    zones = zones_for(act)
    mains = main_quests(act)
    sides = SIDE[act]; neggs = NEGG[act]; clovers = CLOVER[act]

    data_items = {}   # sectionId -> list of structural items
    lang_items = {}   # sectionId -> list of lang dicts

    # treasures: one row per chest, grouped by zone.
    # Act 1 zones can be revisited in Act 3, so their chests are NOT missable;
    # Act 3 chests lock at the "Into Meridell" point of no return; Act 4 is the
    # finale. So only Act 3 treasures carry the missable flag.
    t_miss = (act == "act3")
    t_items=[]; t_lang=[]
    for z,n in zones:
        for k in range(1,n+1):
            it={"g":z,"name":"Chest %d"%k}
            if t_miss: it["m"]=True
            t_items.append(it); t_lang.append({"name":"Chest %d"%k,"where":z})
    data_items["treasures"]=t_items; lang_items["treasures"]=t_lang

    # quests: main (group) + side (group)
    q_items=[]; q_lang=[]
    for nm,desc in mains:
        q_items.append({"g":"Main Story","name":nm})
        q_lang.append({"name":nm,"kind":"Main","detail":desc,"reward":"—"})
    for nm,where,reward in sides:
        it={"g":"Side Quests","name":nm}
        if missable: it["m"]=True
        q_items.append(it); q_lang.append({"name":nm,"kind":"Side","detail":where,"reward":reward})
    data_items["quests"]=q_items; lang_items["quests"]=q_lang

    # neggs
    n_items=[]; n_lang=[]
    for nm,eff,where in neggs:
        it={"name":nm}
        if missable: it["m"]=True
        n_items.append(it); n_lang.append({"name":nm,"effect":eff,"where":where})
    data_items["neggs"]=n_items; lang_items["neggs"]=n_lang

    # clovers
    c_items=[]; c_lang=[]
    for nm,where in clovers:
        it={"name":nm}
        if missable: it["m"]=True
        c_items.append(it); c_lang.append({"name":nm,"where":where})
    data_items["clovers"]=c_items; lang_items["clovers"]=c_lang

    # ---- assemble data module ----
    sections = {
      "treasures": {"cols":[{"k":"name","name":True},{"k":"where"}]},
      "quests":    {"cols":[{"k":"name","name":True},{"k":"kind"},{"k":"detail"},{"k":"reward"}]},
      "neggs":     {"cols":[{"k":"name","name":True},{"k":"effect"},{"k":"where"}]},
      "clovers":   {"cols":[{"k":"name","name":True},{"k":"where"}]},
    }
    tabs_order = ["quests","treasures","neggs","clovers"]

    def sec_block(sid):
        cols = ",".join(json.dumps(c,ensure_ascii=False) for c in sections[sid]["cols"])
        items = data_items[sid]
        itemstr = ",\n            ".join(jrow(it) for it in items) if items else ""
        body = "          \"items\": [\n            %s\n          ]" % itemstr if items else "          \"items\": []"
        return ("    {\n"
                "      \"id\": \"%s\",\n"
                "      \"sections\": [\n"
                "        {\n"
                "          \"id\": \"%s\",\n"
                "          \"cols\": [ %s ],\n"
                "%s\n"
                "        }\n"
                "      ]\n"
                "    }") % (sid, sid, cols, body)

    tabs_js = ",\n".join(sec_block(s) for s in tabs_order)
    header = ('/* =====================================================================\n'
              '   Neopets: The Darkest Faerie — %s tracker data, for the generic\n'
              '   engine (js/df-tracker.js). Quests (main story + side), Treasures\n'
              '   by zone, Neggs and Clovers. Items flagged "m": true are MISSABLE.\n'
              '   Display text lives in lang/messages/en/%s-tracker.json.\n'
              '   Zone chest counts come from RetroAchievements; side quests, neggs\n'
              '   and clovers from prinisse\'s GameFAQs walkthrough.\n'
              '   ===================================================================== */\n') % (label, act)
    module = (header +
        'var TRACKER_GAME = {\n'
        '  "id": "%s",\n'
        '  "storeKey": "df_%s_v1",\n'
        '  "charKey": null,\n'
        '  "chars": [],\n'
        '  "trophyAuto": {},\n'
        '  "worldSummary": { "worlds": %s, "sections": ["treasures","neggs","clovers"] },\n'
        '  "tabs": [\n%s\n  ]\n'
        '};\n\n'
        '(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;\n'
    ) % (act, act, json.dumps([z for z,_ in zones], ensure_ascii=False), tabs_js)
    open('../js/%s-data.js'%act,'w').write(module)

    # ---- lang ----
    lang = base_lang(ACT_TITLE[act], act)
    lang.update({
      "tabbtn-quests":"Quests","tabbtn-worlds":"Zones","tabbtn-treasures":"Treasures",
      "tabbtn-neggs":"Neggs","tabbtn-clovers":"Clovers",
      "sec-quests":"Quests","sec-treasures":"Treasure Chests","sec-neggs":"Neggs","sec-clovers":"Clovers",
      "th-quests-name":"Quest","th-quests-kind":"Type","th-quests-detail":"Where / how","th-quests-reward":"Reward",
      "th-treasures-name":"Chest","th-treasures-where":"Zone",
      "th-neggs-name":"Negg","th-neggs-effect":"Effect","th-neggs-where":"Where to find it",
      "th-clovers-name":"Clover","th-clovers-where":"Where to find it",
      "note-quests":"Main-story quests are listed in the order you unlock them; side quests are grouped by the town/zone where they become available. Side quests in Acts 1–3 are missable — finish them before leaving the Act.",
      "note-treasures":("Every treasure chest in this Act, grouped by zone (counts from the RetroAchievements “Treasure Hunter” set). Use the Zones tab for a by-zone overview." + (" Act 1 areas can be revisited in Act 3, so these chests are not missable." if act=="act1" else (" Act 3 chests lock at the “Into Meridell” point of no return — grab them first." if act=="act3" else ""))),
      "note-neggs":"Red Neggs raise Health, Starry Neggs raise Magic, and Golden Neggs raise both — permanently. Silver Neggs are consumables that fully restore HP & MP. Cumulative upgrade totals are tracked on the Achievements page. This list covers the guide-sourced neggs; more are hidden in the world.",
      "note-clovers":"Clovers permanently raise your luck (drop rate). Cumulative luck-bar milestones are tracked on the Achievements page. This list covers the guide-sourced clovers; more are hidden in the world.",
      "gt-worlds-title":"Collectibles by Zone",
    })
    lang["items"]=lang_items
    open('../lang/messages/en/%s-tracker.json'%act,'w').write(json.dumps(lang,ensure_ascii=False,indent=1))
    return {"zones":len(zones),"chests":sum(n for _,n in zones),"main":len(mains),"side":len(sides)}

def base_lang(title, page):
    return {
      "logo-name":"Darkest Faerie 100%","nav-acts":"Acts","nav-home":"Home","nav-tools":"Tools",
      "gt-filter":"filter…","gt-hide-done":"hide completed","gt-missable-only":"missable only",
      "gt-count":"%1 / %2 done","gt-overall":"Total: %1 / %2 (%3%)",
      "gt-nothing":"Nothing matches the current filter.",
      "gt-reset":"Reset all progress","gt-reset-confirm":"Reset ALL tracker progress for this game?",
      "gt-toggle-all":"toggle all",
      "gt-dash-title":"Progress overview","gt-dash-section":"Section","gt-dash-progress":"Progress",
      "gt-th-progress":"Tracked progress",
      "gt-auto-badge":"auto","gt-auto-tip":"Earned automatically from %1",
      "gt-missable-badge":"missable","gt-missable-tip":"Missable — belongs to Act-locked content. Once you leave the Act you can no longer obtain it.",
      "gt-element-tip":"%1 — weak to %2 (deal extra damage; block/deflect %2 attacks)",
      "gt-section-for":"%1 — %2","gt-world-complete":"complete",
      "page-title":"Darkest Faerie — "+title,
      "df-title":title,
      "df-subtitle":"Treasure chests, quests, neggs and clovers for this Act. Items marked missable lock once you leave the Act.",
      "kp-export":"Export progress","kp-import":"Import progress",
      "kp-note":"Backs up / restores ALL Darkest Faerie tracker progress on this site as a JSON file.",
      "kp-import-confirm":"Importing will overwrite the saved progress of every tracker on this site with the file's contents. Continue?",
      "kp-import-error":"That file could not be read as a progress export.",
      "theme-to-day":"Day","theme-to-night":"Night","theme-toggle-aria":"Toggle bright theme",
    }

stats={}
for act in ["act1","act2","act3","act4"]:
    stats[act]=build_act(act)
print("act stats:", json.dumps(stats))
