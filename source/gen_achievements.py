import json
A=json.load(open('achievements.json'))
titles=[a['title'] for a in A]
def idx(t): return titles.index(t)
ranges=[
 ("act1","Act 1",0, idx('Escape the Castle')),
 ("act2","Act 2",idx('Magic Training'), idx('Escape From Faerieland')),
 ("act3","Act 3",idx('Western Brightvale Treasure Hunter'), idx('Save Queen Fyora')),
 ("act4","Act 4",idx('Hall of Heroes Treasure Hunter'), idx('The Grand Conclusion')),
 ("global","Global",idx('Banking Big in Neopia'), len(A)-1),
]
MISS_ACTS={"act1","act2","act3"}
NOT_MISS={"Courtesy Message"}
def is_missable(secid,a):
    if secid not in MISS_ACTS: return False
    if a['type'] in ("progression","win_condition"): return False
    if a['title'] in NOT_MISS: return False
    # Act 1 areas can be revisited in Act 3, so its treasure-chest achievements
    # are not missable (only Act 3's lock, at the point of no return).
    if secid=="act1" and "Treasure Hunter" in a['title']: return False
    return True

tabs=[]; lang_items={}
for secid,label,s,e in ranges:
    items=[]; litems=[]
    for a in A[s:e+1]:
        it={"name":a['title']}
        if is_missable(secid,a): it["m"]=True
        items.append(it)
        litems.append({"pts":str(a['points']),"name":a['title'],"type":{"progression":"Progression","win_condition":"Win Condition"}.get(a['type'],""),"desc":a['desc']})
    tabs.append((secid,label,items)); lang_items[secid]=litems

def js(o): return json.dumps(o,ensure_ascii=False)
out=["""/* =====================================================================
   Neopets: The Darkest Faerie — Achievements tracker data (RetroAchievements
   set #20693, 188 achievements / 929 pts), for the generic engine
   (js/df-tracker.js). One tab per Act in the game's natural progression order,
   plus a Global tab for the cumulative (collect-N / hoard) achievements.

   Display text (points, type, description) lives in
   lang/messages/en/achievements-tracker.json, matched by section id + index.
   Items flagged "m": true are MISSABLE — Act-locked content (Acts 1–3) you can
   no longer earn once you leave the Act. Act 1 treasure-chest achievements are
   NOT flagged: you can revisit Act 1 areas in Act 3.
   ===================================================================== */"""]
out.append('var TRACKER_GAME = {')
out.append('  "id": "achievements",')
out.append('  "storeKey": "df_ach_v1",')
out.append('  "charKey": null,')
out.append('  "chars": [],')
out.append('  "trophyAuto": null,')
out.append('  "tabs": [')
tabstrs=[]
for secid,label,items in tabs:
    sec=['    {','      "id": "%s",'%secid,'      "sections": [','        {','          "id": "%s",'%secid,
         '          "trophies": true,',
         '          "cols": [ { "k": "pts" }, { "k": "name", "name": true }, { "k": "type" }, { "k": "desc" } ],',
         '          "items": [']
    sec.append(',\n'.join('            '+js(it) for it in items))
    sec += ['          ]','        }','      ]','    }']
    tabstrs.append('\n'.join(sec))
out.append(',\n'.join(tabstrs))
out += ['  ]','};','','(window.DF_GAMES = window.DF_GAMES || {})[TRACKER_GAME.id] = TRACKER_GAME;','']
open('../js/achievements-data.js','w').write('\n'.join(out))

# update only the items map + act notes in the existing lang (preserve the rest)
lang=json.load(open('../lang/messages/en/achievements-tracker.json'))
lang["note-act1"]="Act 1 side quests and items lock when Act 1 ends (after Escape the Castle). Treasure chests are safe — you can revisit Act 1 areas in Act 3."
lang["items"]=lang_items
open('../lang/messages/en/achievements-tracker.json','w').write(json.dumps(lang,ensure_ascii=False,indent=1))
print("achievements regenerated. missable per act:", {sid:sum(1 for it in items if it.get('m')) for sid,_,items in tabs})
