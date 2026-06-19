// Minimal DOM shim to exercise js/df-tracker.js render path against each
// data module + its lang file, catching runtime errors without a browser.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');

function makeEl(tag) {
  const node = {
    tagName: (tag || 'div').toUpperCase(), children: [], _id: '', className: '', _html: '',
    style: {}, dataset: {}, attributes: {}, _listeners: {},
    appendChild(c){ c.parentNode = node; node.children.push(c); return c; },
    insertBefore(c, ref){ const i = ref ? node.children.indexOf(ref) : -1; if (i<0) node.children.push(c); else node.children.splice(i,0,c); c.parentNode=node; return c; },
    removeChild(c){ const i=node.children.indexOf(c); if(i>=0) node.children.splice(i,1); return c; },
    remove(){ if(node.parentNode) node.parentNode.removeChild(node); },
    addEventListener(t,f){ (node._listeners[t]=node._listeners[t]||[]).push(f); },
    setAttribute(k,v){ node.attributes[k]=v; if(k==='id') node._id=v; },
    getAttribute(k){ return node.attributes[k]; },
    querySelectorAll(){ return []; },
    querySelector(){ return null; },
    get firstChild(){ return node.children[0] || null; },
    get id(){ return node._id; }, set id(v){ node._id=v; REG[v]=node; },
    get innerHTML(){ return node._html; }, set innerHTML(v){ node._html=v; node.children=[]; },
    get textContent(){ return node._text||''; }, set textContent(v){ node._text=v; },
    classList: { _s:new Set(),
      add(...c){ c.forEach(x=>node.classList._s.add(x)); }, remove(...c){ c.forEach(x=>node.classList._s.delete(x)); },
      toggle(c,on){ if(on===undefined) on=!node.classList._s.has(c); on?node.classList._s.add(c):node.classList._s.delete(c); return on; },
      contains(c){ return node.classList._s.has(c); } },
  };
  return node;
}
const REG = {};
function reg(id){ const n=makeEl('div'); n.id=id; return n; }
global.document = {
  _dcl: [],
  createElement: makeEl,
  createTextNode: (t)=>{ const n=makeEl('#text'); n._text=String(t); return n; },
  getElementById: (id)=>REG[id]||null,
  querySelectorAll: ()=>[],
  addEventListener:(t,f)=>{ if(t==='DOMContentLoaded') global.document._dcl.push(f); },
  dispatchEvent(){}, documentElement:{ setAttribute(){}, removeAttribute(){}, lang:'' }, body:{}, title:''
};
global.window = { DF_GAMES:{}, addEventListener(){}, };
const STORE = {};
global.localStorage = { getItem:k=>k in STORE?STORE[k]:null, setItem:(k,v)=>{STORE[k]=String(v)}, removeItem:k=>{delete STORE[k]}, key:i=>Object.keys(STORE)[i], get length(){return Object.keys(STORE).length} };
global.requestAnimationFrame = ()=>{}; global.setTimeout=(f)=>0; global.confirm=()=>false; global.alert=()=>{};

// shared header elements the engine looks up
['charbar','playing-as','overallNote','tabs','panels'].forEach(reg);

const pages = [
  ['act1-data.js','act1-tracker.json'], ['act2-data.js','act2-tracker.json'],
  ['act3-data.js','act3-tracker.json'], ['act4-data.js','act4-tracker.json'],
  ['achievements-data.js','achievements-tracker.json'], ['bestiary-data.js','bestiary-tracker.json'],
  ['shops-data.js','shops-tracker.json'],
];

(async () => {
  // df-common defines window.DF; load once
  require(path.join(ROOT,'js','df-common.js'));
  global.DF = global.window.DF;
  for (const [data, langfile] of pages) {
    // reset
    global.document._dcl = [];
    delete require.cache[require.resolve(path.join(ROOT,'js',data))];
    require(path.join(ROOT,'js',data));
    // the data module registers itself on window.DF_GAMES under its id, which
    // matches the file prefix; expose it as the global the engine reads.
    const id = data.replace('-data.js','');
    global.TRACKER_GAME = global.window.DF_GAMES[id];
    const msgs = JSON.parse(fs.readFileSync(path.join(ROOT,'lang','messages','en',langfile),'utf8'));
    global.i18n = { messages: msgs, async init(){}, getMessage:k=>Object.prototype.hasOwnProperty.call(msgs,k)?msgs[k]:k,
      format:(k,...a)=>{ let m=global.i18n.getMessage(k); a.forEach((x,i)=>m=String(m).split('%'+(i+1)).join(String(x))); return m; } };
    // load engine fresh
    delete require.cache[require.resolve(path.join(ROOT,'js','df-tracker.js'))];
    require(path.join(ROOT,'js','df-tracker.js'));
    const handler = global.document._dcl[global.document._dcl.length-1];
    try {
      await handler();
      console.log('OK   '+data+'  (rendered; storeKey '+ (global.window.DF_GAMES[ data.replace('-data.js','') ]||{}).storeKey +')');
    } catch (e) {
      console.log('FAIL '+data+'  -> '+e.message);
      console.log(e.stack.split('\n').slice(0,4).join('\n'));
      process.exitCode = 1;
    }
  }
})();
