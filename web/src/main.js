import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

/* ------------------------------------------------------------------ *
 * Palettes. Two directions were compared in the browser (see
 * BUILD_NOTES.md). `?palette=plant` or `?palette=paper` forces one.
 * ------------------------------------------------------------------ */
const PALETTES = {
  plant: {
    bg: 0x0e1116, letterbox: '#07090c', platform: 0x1c232c, structure: 0x4a5566, paper: 0xe9e4d8,
    ink: 0x2c333d, rule: 0xb9b2a4, accent: 0xf2a33a, cool: 0x5fb3a8, line: 0x5d6978, mat: 0x05070a,
    chartPanel: 0x1b212a, bar: 0xc9ced6,
    css: { bg: '#0e1116', text: '#e8eaed', muted: '#98a2b0', accent: '#f2a33a', accentInk: '#0e1116', panel: 'rgba(14,17,22,0.78)' },
  },
  paper: {
    bg: 0xe9e5dc, letterbox: '#d9d4c9', platform: 0xd9d3c6, structure: 0x9a9386, paper: 0xffffff,
    ink: 0x2b3036, rule: 0xa9a293, accent: 0xc8412b, cool: 0x2e6d8e, line: 0x8a8478, mat: 0x14171b,
    chartPanel: 0xf4f1ea, bar: 0x3b4149,
    css: { bg: '#e9e5dc', text: '#1b1f24', muted: '#555c66', accent: '#b8391f', accentInk: '#ffffff', panel: 'rgba(233,229,220,0.86)' },
  },
};
const DEFAULT_PALETTE = 'plant';
const query = new URLSearchParams(location.search);
const P = PALETTES[query.get('palette')] || PALETTES[DEFAULT_PALETTE];

const root = document.documentElement.style;
root.setProperty('--bg', P.css.bg);
root.setProperty('--text', P.css.text);
root.setProperty('--muted', P.css.muted);
root.setProperty('--accent', P.css.accent);
root.setProperty('--accent-ink', P.css.accentInk);
root.setProperty('--panel', P.css.panel);
root.setProperty('--letterbox', P.letterbox);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ------------------------------------------------------------------ *
 * Renderer, camera, stage (always 16:9, letterboxed in the window)
 * ------------------------------------------------------------------ */
const stage = document.getElementById('stage');
const canvas = document.getElementById('gl');
const veil = document.getElementById('veil');
const live = document.getElementById('live');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const labelRenderer = new CSS2DRenderer();
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.inset = '0';
labelRenderer.domElement.style.pointerEvents = 'none';
document.getElementById('labels').appendChild(labelRenderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(P.bg);
scene.fog = new THREE.Fog(P.bg, 28, 85);

const camera = new THREE.PerspectiveCamera(35, 16 / 9, 0.1, 300);
const camTarget = new THREE.Vector3();

scene.add(new THREE.HemisphereLight(0xffffff, P.platform, 1.35));
const key = new THREE.DirectionalLight(0xffffff, 1.9);
key.position.set(6, 12, 9);
scene.add(key);
const fill = new THREE.DirectionalLight(0xffffff, 0.55);
fill.position.set(-9, 5, -4);
scene.add(fill);

let dirty = true;
function fit() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  let W = w;
  let H = Math.round((w * 9) / 16);
  if (H > h) {
    H = h;
    W = Math.round((h * 16) / 9);
  }
  stage.style.width = `${W}px`;
  stage.style.height = `${H}px`;
  renderer.setSize(W, H, false);
  labelRenderer.setSize(W, H);
  root.setProperty('--u', `${H / 100}px`);
  camera.aspect = 16 / 9;
  camera.updateProjectionMatrix();
  dirty = true;
}
window.addEventListener('resize', fit);
fit();

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.78, metalness: 0.05, ...o });
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const backOut = (t) => {
  const c1 = 1.5;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};
const window01 = (t, a, b) => clamp01((t - a) / (b - a));

function box(w, h, d, material, pos) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  if (pos) m.position.copy(pos);
  return m;
}

function cyl(rTop, rBot, h, material, pos, seg = 40) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, seg), material);
  if (pos) m.position.copy(pos);
  return m;
}

/** A tube along points that can be "drawn" progressively with grow(). */
function tube(points, r, material, curveType = 'centripetal') {
  const curve = new THREE.CatmullRomCurve3(points, false, curveType);
  const geo = new THREE.TubeGeometry(curve, Math.max(48, points.length * 32), r, 10, false);
  const m = new THREE.Mesh(geo, material);
  m.userData.count = geo.index.count;
  m.userData.curve = curve;
  return m;
}
function grow(m, p) {
  const n = Math.floor((m.userData.count * clamp01(p)) / 6) * 6;
  m.geometry.setDrawRange(0, n);
  m.visible = n > 0;
}

function edges(mesh, color, opacity = 1) {
  const l = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry),
    new THREE.LineBasicMaterial({ color, transparent: opacity < 1, opacity }),
  );
  mesh.add(l);
  return l;
}

function arrowHead(color, size = 0.32) {
  const m = new THREE.Mesh(new THREE.ConeGeometry(size, size * 2.1, 24), mat(color, { roughness: 0.5 }));
  return m;
}

function photo(url, w, h) {
  const tex = new THREE.TextureLoader().load(url, () => (dirty = true));
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ map: tex, toneMapped: false, fog: false }),
  );
  const frame = box(w + 0.36, h + 0.36, 0.16, mat(P.mat, { roughness: 0.6 }));
  frame.position.z = -0.1;
  m.add(frame);
  return m;
}

/* ------------------------------------------------------------------ *
 * Labels (CSS2D). Each label belongs to one or more scene states.
 * ------------------------------------------------------------------ */
const ORDER = ['C0', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'E0'];
const SCENE_NAMES = {
  C0: 'Cover: one task, what does completion cost?',
  S1: 'Verified outcome',
  S2: 'Workload path',
  S3: 'More work versus less cost per task',
  S4: 'Physical stack',
  S5: 'Capacity and electricity',
  S6: 'Routing and permission',
  E0: 'Conditional answer',
};
const labels = [];
const targetButtons = {};

function label(html, pos, { cls = '', scenes, anchor = [0.5, 0.5], parent = scene } = {}) {
  const el = document.createElement('div');
  el.className = `lbl ${cls}`;
  el.innerHTML = html;
  const obj = new CSS2DObject(el);
  obj.position.copy(pos);
  obj.center.set(anchor[0], anchor[1]);
  parent.add(obj);
  labels.push({ el, scenes });
  return obj;
}

/** A visible, focusable target attached to the scene object that advances the route. */
function targetButton(text, name, pos, sceneId, { anchor = [0.5, 0.5], parent = scene } = {}) {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'lbl target';
  el.innerHTML = text;
  el.setAttribute('aria-label', name);
  el.tabIndex = -1;
  el.addEventListener('click', (e) => {
    e.preventDefault();
    advance();
  });
  el.addEventListener('pointerenter', () => setHot(true));
  el.addEventListener('pointerleave', () => setHot(false));
  const obj = new CSS2DObject(el);
  obj.position.copy(pos);
  obj.center.set(anchor[0], anchor[1]);
  parent.add(obj);
  labels.push({ el, scenes: [sceneId], target: true });
  targetButtons[sceneId] = el;
  return obj;
}

/* Outgoing scene labels fade with the camera move instead of vanishing
 * at once; their targets are disabled immediately. */
let departing = [];
function beginDeparture(id) {
  departing = labels.filter((l) => !l.target && l.scenes.includes(id));
  for (const l of labels) {
    if (l.target) {
      l.el.classList.remove('on');
      l.el.tabIndex = -1;
    }
  }
  for (const l of departing) l.el.style.transition = 'none';
}
function departureOpacity(o) {
  for (const l of departing) l.el.style.opacity = String(o);
}
function endDeparture() {
  for (const l of departing) {
    l.el.style.opacity = '';
    l.el.style.transition = '';
  }
  departing = [];
}

function showLabels(id) {
  endDeparture();
  for (const l of labels) {
    const on = l.scenes.includes(id);
    l.el.classList.toggle('on', on);
    if (l.target) l.el.tabIndex = on ? 0 : -1;
  }
}

/* Meshes that act as the click target in each state. */
const targetMeshes = {};
function addTarget(id, ...meshes) {
  targetMeshes[id] = (targetMeshes[id] || []).concat(meshes);
}

/* ------------------------------------------------------------------ *
 * World: one continuous space. The task record lives at the origin;
 * the route descends beneath it, travels to the rack, along the grid
 * corridor, rises to the permission gate and returns to the record.
 * ------------------------------------------------------------------ */
const reveal = {}; // reveal[id](p) — 0 hidden, 1 settled

/* --- C0 / S1: task docket becomes the delivered, checked record --- */
function docketTexture() {
  const c = document.createElement('canvas');
  c.width = 768;
  c.height = 1024;
  const g = c.getContext('2d');
  const hex = (n) => `#${n.toString(16).padStart(6, '0')}`;
  g.fillStyle = hex(P.paper);
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = hex(P.ink);
  g.fillRect(64, 72, 300, 40);
  g.fillStyle = hex(P.rule);
  const lines = [560, 610, 480, 590, 520, 360];
  lines.forEach((w, i) => g.fillRect(64, 190 + i * 74, w, 14));
  g.strokeStyle = hex(P.ink);
  g.lineWidth = 8;
  g.strokeRect(64, 760, 150, 150);
  g.fillStyle = hex(P.rule);
  g.fillRect(250, 810, 300, 14);
  g.fillRect(250, 860, 220, 14);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

const recordGroup = new THREE.Group();
scene.add(recordGroup);

const platformA = cyl(7.2, 7.2, 0.22, mat(P.platform), V(-1.5, -2.72, -0.8), 72);
scene.add(platformA);

const paperMat = mat(P.paper, { roughness: 0.9 });
const record = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 0.1), [
  paperMat, paperMat, paperMat, paperMat,
  new THREE.MeshStandardMaterial({ map: docketTexture(), roughness: 0.9 }),
  paperMat,
]);
record.rotation.x = -0.06;
recordGroup.add(record);
const stand = box(1.4, 0.5, 0.7, mat(P.structure), V(0, -2.35, 0));
recordGroup.add(stand);
addTarget('C0', record);
addTarget('S1', record);

// Check stamp — appears when the task is verified (S1) and stays to E0.
const stamp = new THREE.Group();
stamp.position.set(-0.62, -1.24, 0.09);
const stampMat = mat(P.accent, { roughness: 0.45, emissive: P.accent, emissiveIntensity: 0.15 });
stamp.add(new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.055, 16, 64), stampMat));
const tick1 = box(0.1, 0.34, 0.06, stampMat, V(-0.13, -0.05, 0));
tick1.rotation.z = 0.8;
const tick2 = box(0.1, 0.62, 0.06, stampMat, V(0.1, 0.06, 0));
tick2.rotation.z = -0.62;
stamp.add(tick1, tick2);
record.add(stamp);

// Attempted actions — outlines only, separated by a review boundary.
const s1Extras = new THREE.Group();
scene.add(s1Extras);
const attempts = [];
const attemptSpots = [V(-4.3, 0.05, -0.6), V(-5.25, 0.2, -1.6), V(-6.2, 0.35, -2.6)];
for (const [i, spot] of attemptSpots.entries()) {
  const a = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 3.2, 0.04),
    mat(P.paper, { transparent: true, opacity: 0.08, depthWrite: false }),
  );
  edges(a, P.line, 0.9);
  // An unfinished line on each attempt: the work was tried, not verified.
  const stub = box(0.9 + i * 0.35, 0.09, 0.02, mat(P.line), V(-0.55 + i * 0.1, 0.75 - i * 0.35, 0.03));
  a.add(stub);
  a.userData.home = spot;
  a.visible = false;
  s1Extras.add(a);
  attempts.push(a);
}
const boundary = new THREE.Group();
boundary.position.set(-2.55, -2.6, -0.4);
const boundaryPane = box(0.05, 5.1, 3.4, mat(P.cool, { transparent: true, opacity: 0.16, depthWrite: false }), V(0, 2.55, 0));
edges(boundaryPane, P.cool, 1);
boundary.add(boundaryPane);
boundary.scale.y = 0.001;
s1Extras.add(boundary);

reveal.S1 = (p) => {
  const s = backOut(window01(p, 0.35, 0.8));
  stamp.scale.setScalar(Math.max(0.001, s));
  stamp.visible = s > 0.002;
  boundary.scale.y = Math.max(0.001, easeOut(window01(p, 0.1, 0.55)));
  boundary.visible = p > 0.01;
  attempts.forEach((a, i) => {
    const q = easeOut(window01(p, 0.05 + i * 0.1, 0.55 + i * 0.1));
    a.visible = q > 0.01;
    a.position.lerpVectors(V(-0.4, 0, -0.3), a.userData.home, q);
  });
};

label('One task.<br>What does completion cost?', V(2.3, 1.55, 0), { cls: 'title', scenes: ['C0'], anchor: [0, 1] });
targetButton('Open the task<span class="arrow" aria-hidden="true">→</span>', 'Open the task: what counts as completed?', V(0, -1.9, 0.3), 'C0');

label('A completed task', V(-0.9, 2.55, 0), { cls: 'title', scenes: ['S1'], anchor: [0.5, 1] });
label('Attempts', V(-5.25, 2.25, -1.6), { cls: 'sub', scenes: ['S1'], anchor: [0.5, 1] });
label('Review', V(-2.55, -2.45, -0.4), { cls: 'sub', scenes: ['S1'], anchor: [0.5, 0] });
targetButton('Checked result<span class="arrow" aria-hidden="true">↓</span>', 'Checked result: look at the work underneath', V(1.75, -1.24, 0.1), 'S1', { anchor: [0, 0.5] });

/* --- S2: the work path beneath the record --- */
const lineMat = mat(P.line, { roughness: 0.6 });
const accentMat = mat(P.accent, { roughness: 0.45, emissive: P.accent, emissiveIntensity: 0.12 });
const coolMat = mat(P.cool, { roughness: 0.5 });
const structMat = mat(P.structure);

const s2 = new THREE.Group();
scene.add(s2);
s2.add(box(13, 0.2, 15.5, mat(P.platform), V(0, -8.55, -7)));

const nodePlan = cyl(0.62, 0.62, 0.34, structMat, V(0, -8.25, -1.6));
const calls = [V(-3.2, -8.25, -5), V(0, -8.25, -5.4), V(3.2, -8.25, -5)].map((p) => cyl(0.55, 0.55, 0.34, structMat, p));
const mainCall = calls[1];
mainCall.material = mat(P.structure, { emissive: P.accent, emissiveIntensity: 0 });
const callRing = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.06, 12, 64), accentMat);
callRing.rotation.x = Math.PI / 2;
callRing.position.copy(mainCall.position).add(V(0, 0.05, 0));
// A loop over the main call marks that calls can repeat (not a count).
const repeatLoop = tube(
  [V(-0.55, -8.05, -5.4), V(-0.7, -7.0, -5.4), V(0, -6.45, -5.4), V(0.7, -7.0, -5.4), V(0.55, -8.05, -5.4)],
  0.055, accentMat,
);
const tools = [V(-4.2, -8.0, -9.0), V(-1.4, -8.0, -9.6), V(1.6, -8.0, -9.3), V(4.1, -8.0, -9.0)].map((p, i) => {
  const m = box(0.75 + (i % 2) * 0.2, 0.75, 0.75, structMat, p);
  m.rotation.y = 0.2 * (i - 1.5);
  return m;
});
const checkGate = new THREE.Group();
checkGate.position.set(0, -8.45, -12.6);
checkGate.add(box(0.3, 2.2, 0.3, coolMat, V(-1.2, 1.1, 0)), box(0.3, 2.2, 0.3, coolMat, V(1.2, 1.1, 0)), box(2.7, 0.28, 0.34, coolMat, V(0, 2.2, 0)));
s2.add(nodePlan, ...calls, callRing, repeatLoop, ...tools, checkGate);

const s2Paths = [
  tube([V(0, -2.8, 0), V(0, -5.5, -0.6), V(0, -8.1, -1.6)], 0.07, accentMat),
  ...calls.map((c) => tube([nodePlan.position.clone(), c.position.clone().add(V(0, 0, 1.2)), c.position.clone()], 0.045, c === mainCall ? accentMat : lineMat)),
  tube([calls[0].position, tools[0].position], 0.045, lineMat),
  tube([calls[0].position, tools[1].position], 0.045, lineMat),
  tube([mainCall.position, tools[1].position], 0.06, accentMat),
  tube([mainCall.position, tools[2].position], 0.045, lineMat),
  tube([calls[2].position, tools[3].position], 0.045, lineMat),
  ...tools.map((t, i) => tube([t.position, V(0, -8.1, -12.3)], 0.045, i === 1 ? accentMat : lineMat)),
  // retry: from the check back to the calls
  tube([V(1.35, -6.4, -12.6), V(5.4, -6.9, -10), V(5.2, -7.4, -6.2), V(3.7, -8.0, -5.1)], 0.035, coolMat),
];
s2.add(...s2Paths);
addTarget('S2', mainCall, callRing);

reveal.S2 = (p) => {
  s2Paths.forEach((m, i) => grow(m, window01(p, 0.05 + i * 0.035, 0.45 + i * 0.035)));
  const nodes = [nodePlan, ...calls, ...tools, checkGate];
  nodes.forEach((n, i) => n.scale.setScalar(Math.max(0.001, backOut(window01(p, 0.1 + i * 0.04, 0.45 + i * 0.04)))));
  callRing.scale.setScalar(Math.max(0.001, backOut(window01(p, 0.6, 0.95))));
  grow(repeatLoop, window01(p, 0.55, 0.95));
};

label('Tasks × calls × compute', V(-6.2, -5.3, -5.2), { cls: 'title', scenes: ['S2'], anchor: [0, 0.5] });
label('Tools', V(-4.2, -7.1, -9.0), { cls: '', scenes: ['S2'], anchor: [0.5, 1] });
label('Checks', V(-1.55, -6.25, -12.6), { cls: '', scenes: ['S2'], anchor: [1, 0.5] });
targetButton('Model call<span class="arrow" aria-hidden="true">→</span>', 'A repeated model call: does more calls mean more capacity?', V(1.05, -6.9, -5.4), 'S2', { anchor: [0, 0.5] });

/* --- S3: more work versus less cost per task, net unknown --- */
const S3C = V(4, -8, -27);
const s3 = new THREE.Group();
s3.position.copy(S3C);
scene.add(s3);
s3.add(cyl(7.4, 7.4, 0.22, mat(P.platform), V(0, -2.7, 0), 72));
const fulcrum = new THREE.Mesh(new THREE.ConeGeometry(1.1, 2.9, 4), structMat);
fulcrum.rotation.y = Math.PI / 4;
fulcrum.position.set(0, -1.15, 0);
s3.add(fulcrum);
const beam = new THREE.Group();
beam.position.set(0, 0.35, 0);
s3.add(beam);
beam.add(box(11.2, 0.26, 0.6, structMat));
const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 16), mat(P.accent, { roughness: 0.4, emissive: P.accent, emissiveIntensity: 0.15 }));
pivot.position.set(0, 0, 0.48);
beam.add(pivot);
addTarget('S3', pivot);

function pan(x) {
  const g = new THREE.Group();
  g.position.set(x, 0, 0);
  const hang = [-0.9, 0.9].map((dx) => box(0.05, 1.6, 0.05, lineMat, V(dx, -0.8, 0)));
  g.add(...hang, cyl(1.35, 1.35, 0.12, structMat, V(0, -1.62, 0)));
  beam.add(g);
  return g;
}
const leftPan = pan(-4.6);
const rightPan = pan(4.6);
// Left: a rising stack of task sheets (more work).
const sheets = [];
for (let i = 0; i < 8; i++) {
  const s = box(1.6, 0.11, 1.1, paperMat, V(0, -1.5 + i * 0.16, 0));
  s.rotation.y = (i % 3) * 0.12 - 0.12;
  leftPan.add(s);
  sheets.push(s);
}
const upArrow = arrowHead(P.accent, 0.3);
upArrow.position.set(0, 0.35, 0);
leftPan.add(upArrow);
// Right: a stack of cost tokens that narrows toward the top (less cost per task).
const tokens = [];
for (let i = 0; i < 6; i++) {
  const r = 0.95 - i * 0.14;
  const t = cyl(r, r, 0.16, coolMat, V(0, -1.47 + i * 0.19, 0), 48);
  rightPan.add(t);
  tokens.push(t);
}
const downArrow = arrowHead(P.cool, 0.3);
downArrow.rotation.z = Math.PI;
downArrow.position.set(0, 0.25, 0);
rightPan.add(downArrow);

reveal.S3 = (p) => {
  sheets.forEach((s, i) => (s.visible = p > 0.15 + i * 0.05));
  tokens.forEach((t, i) => (t.visible = p > 0.18 + i * 0.05));
  upArrow.visible = downArrow.visible = p > 0.6;
  // The beam swings and settles level: neither force is shown winning.
  const w = window01(p, 0.2, 1);
  beam.rotation.z = p <= 0 ? 0.18 : 0.2 * Math.sin(w * Math.PI * 3) * (1 - w);
  pivot.scale.setScalar(Math.max(0.001, backOut(window01(p, 0.7, 1))));
};

label('More work', V(-4.6, 2.35, 0).add(S3C), { cls: 'title', scenes: ['S3'], anchor: [0.5, 1] });
label('Less cost per task', V(4.6, 2.35, 0).add(S3C), { cls: 'title', scenes: ['S3'], anchor: [0.5, 1] });
targetButton('Net demand?', 'Net demand? Follow the remaining compute need into hardware', V(0, -0.85, 1.0).add(S3C), 'S3', { anchor: [0.5, 0] });

/* The physical zone sits deeper in the world so it reads as the destination
 * from the cover, and stays out of the earlier scenes' sightlines. */
const DZ = -14;
const far = new THREE.Group();
far.position.z = DZ;
scene.add(far);
const s5g = new THREE.Group();
s5g.position.x = 3;
far.add(s5g);

/* --- S4: physical stack — real rack photo plus authored layers --- */
const RACK = V(9, -4.7, -40);
const rack = photo('/assets/nvidia-gb200-nvl72-rack.png', 14, 7.875);
rack.position.copy(RACK);
far.add(rack);
far.add(box(30, 0.2, 11, mat(P.platform), V(14, -9.2, -38.5)));

const layers = new THREE.Group();
far.add(layers);
const L = V(20.2, 0, 0);
const computeLayer = new THREE.Group();
computeLayer.position.set(L.x, -2.2, -40.6);
computeLayer.add(box(3.4, 2.1, 0.34, structMat));
computeLayer.add(box(1.35, 1.35, 0.14, mat(P.bar, { roughness: 0.4, metalness: 0.3 }), V(0, 0, 0.22)));
const hbmLayer = new THREE.Group();
hbmLayer.position.set(L.x, -4.9, -39.4);
hbmLayer.add(box(3.4, 0.3, 1.6, structMat, V(0, -0.65, 0)));
hbmLayer.add(box(1.0, 0.7, 1.0, mat(P.bar, { roughness: 0.4, metalness: 0.3 }), V(0, -0.2, 0)));
const hbmStacks = [];
for (const dx of [-1.15, 1.15]) {
  for (let i = 0; i < 5; i++) {
    const plate = box(0.72, 0.13, 0.72, coolMat, V(dx, -0.43 + i * 0.16, 0));
    hbmLayer.add(plate);
    hbmStacks.push(plate);
  }
}
const netLayer = new THREE.Group();
netLayer.position.set(L.x, -7.35, -38.2);
for (let i = 0; i < 5; i++) {
  const c = cyl(0.09, 0.09, 3.6, lineMat, V(0, -0.3 + i * 0.16, (i % 2) * 0.12), 12);
  c.rotation.z = Math.PI / 2;
  netLayer.add(c);
}
layers.add(computeLayer, hbmLayer, netLayer);
const layerLinks = [
  tube([V(16.2, -2.2, -40.3), V(17.4, -2.2, -40.5), V(18.5, -2.2, -40.6)], 0.035, lineMat),
  tube([V(16.2, -4.9, -40.1), V(17.4, -4.9, -39.6), V(18.5, -4.9, -39.4)], 0.035, lineMat),
  tube([V(16.2, -7.1, -40.0), V(17.4, -7.2, -38.6), V(18.4, -7.2, -38.2)], 0.035, lineMat),
];
far.add(...layerLinks);
const memoryPath = tube([V(21.5, -4.9, -39.4), V(23.4, -5.0, -39.0), V(24.8, -5.9, -38.4), V(25.6, -7.4, -38.1)], 0.1, accentMat);
const memoryArrow = arrowHead(P.accent, 0.3);
memoryArrow.position.set(25.75, -7.75, -38.05);
memoryArrow.rotation.z = Math.PI;
far.add(memoryPath, memoryArrow);
addTarget('S4', memoryPath, memoryArrow, ...hbmStacks);

reveal.S4 = (p) => {
  [computeLayer, hbmLayer, netLayer].forEach((g, i) => {
    const q = easeOut(window01(p, 0.2 + i * 0.1, 0.65 + i * 0.1));
    g.position.x = 16.5 + (L.x - 16.5) * q;
    g.visible = q > 0.01;
    g.scale.setScalar(Math.max(0.001, 0.4 + 0.6 * q));
  });
  layerLinks.forEach((m, i) => grow(m, window01(p, 0.3 + i * 0.1, 0.7 + i * 0.1)));
  grow(memoryPath, window01(p, 0.7, 0.98));
  memoryArrow.visible = p > 0.95;
};

label('Example: NVIDIA GB200 NVL72 rack', V(2.2, -9.05, -40), { parent: far, cls: 'sub', scenes: ['S4'], anchor: [0, 0] });
label('Compute', V(22.2, -2.2, -40.6), { parent: far, scenes: ['S4'], anchor: [0, 0.5] });
label('HBM', V(22.2, -4.6, -39.4), { parent: far, scenes: ['S4'], anchor: [0, 0.5] });
label('Network', V(22.2, -7.05, -38.2), { parent: far, scenes: ['S4'], anchor: [0, 0.5] });
targetButton('Memory path<span class="arrow" aria-hidden="true">→</span>', 'Follow the memory path to capacity and electricity', V(25.9, -8.25, -38), 'S4', { parent: far, anchor: [0.5, 0] });

/* --- S5: rack-to-grid corridor and the IEA chart --- */
s5g.add(box(20, 0.2, 4.4, mat(P.platform), V(35, -8.55, -38)));
const conduit = tube([V(22.75, -8.05, -38.1), V(25, -8.1, -38.1), V(34, -8.1, -38.1), V(37.2, -8.05, -38.1)], 0.12, accentMat);
const transformer = new THREE.Group();
transformer.position.set(38.4, -8.45, -38.2);
transformer.add(box(2.1, 2.3, 1.5, structMat, V(0, 1.15, 0)));
for (let i = 0; i < 6; i++) transformer.add(box(0.08, 1.8, 1.7, lineMat, V(-0.85 + i * 0.34, 1.1, 0)));
for (const dx of [-0.6, 0, 0.6]) transformer.add(cyl(0.12, 0.16, 0.6, mat(P.bar), V(dx, 2.6, 0), 16));
const plug = new THREE.Mesh(new THREE.SphereGeometry(0.36, 32, 16), mat(P.accent, { roughness: 0.4, emissive: P.accent, emissiveIntensity: 0.15 }));
plug.position.set(40.3, -6.0, -38.2);
const pylon = new THREE.Group();
pylon.position.set(42.3, -8.45, -38.6);
const legs = [[-0.55, 0.35], [0.55, 0.35], [-0.55, -0.35], [0.55, -0.35]];
for (const [x, z] of legs) {
  const leg = box(0.1, 7.2, 0.1, structMat, V(x * 0.6, 3.6, z * 0.6));
  leg.rotation.z = -x * 0.12;
  pylon.add(leg);
}
pylon.add(box(2.8, 0.12, 0.12, structMat, V(0, 6.3, 0)), box(2.0, 0.12, 0.12, structMat, V(0, 5.2, 0)));
const gridLine = tube([V(38.9, -5.8, -38.2), V(40.3, -6.0, -38.2), V(41.6, -3.0, -38.5), V(42.3, -2.15, -38.6)], 0.05, accentMat);
s5g.add(conduit, transformer, plug, pylon, gridLine);
addTarget('S5', plug);

// Chart: exact two-point IEA central case, bars share a zero baseline.
const CHART = { x: 33.2, base: -4.2, z: -43.2, maxH: 4.6 };
const IEA = [
  { year: 2025, twh: 485 },
  { year: 2030, twh: 950 },
];
const chartPanel = box(10.2, 7.8, 0.12, mat(P.chartPanel, { roughness: 0.95 }), V(CHART.x, -1.35, CHART.z - 0.1));
s5g.add(chartPanel);
const chartBaseline = box(6.2, 0.05, 0.05, mat(P.line, { roughness: 0.6 }), V(CHART.x + 0.9, CHART.base, CHART.z + 0.05));
s5g.add(chartBaseline);
const bars = IEA.map((d, i) => {
  const h = (d.twh / 950) * CHART.maxH;
  const m = box(1.7, h, 0.3, i === 0 ? mat(P.bar, { roughness: 0.6 }) : mat(P.accent, { roughness: 0.55 }));
  m.geometry.translate(0, h / 2, 0);
  m.position.set(CHART.x - 0.5 + i * 2.9, CHART.base, CHART.z + 0.1);
  m.userData.h = h;
  s5g.add(m);
  return m;
});

// The chart and its labels leave together (QA-001): never unlabelled bars.
const chartMeshes = [chartPanel, chartBaseline, ...bars];
for (const m of chartMeshes) m.material.transparent = true;
function chartOpacity(o) {
  for (const m of chartMeshes) {
    m.material.opacity = o;
    m.material.depthWrite = o > 0.99;
    m.visible = o > 0.001;
  }
}

reveal.S5 = (p) => {
  grow(conduit, window01(p, 0.05, 0.55));
  grow(gridLine, window01(p, 0.45, 0.85));
  bars.forEach((b, i) => (b.scale.y = Math.max(0.001, easeOut(window01(p, 0.3 + i * 0.15, 0.8 + i * 0.15)))));
  plug.scale.setScalar(Math.max(0.001, backOut(window01(p, 0.75, 1))));
};

const cx = CHART.x;
label('Global data centres · all workloads', V(cx - 4.7, 2.2, CHART.z), { parent: s5g, cls: 'title chart-title', scenes: ['S5'], anchor: [0, 0.5] });
label('Electricity use, TWh · IEA central case', V(cx - 4.7, 1.25, CHART.z), { parent: s5g, cls: 'sub', scenes: ['S5'], anchor: [0, 0.5] });
IEA.forEach((d, i) => {
  const x = cx - 0.5 + i * 2.9;
  label(`${d.twh} TWh`, V(x, CHART.base + (d.twh / 950) * CHART.maxH + 0.2, CHART.z + 0.1), { parent: s5g, cls: 'data', scenes: ['S5'], anchor: [0.5, 1] });
  label(i === 0 ? '2025' : '2030 · central case', V(x, CHART.base - 0.2, CHART.z + 0.1), { parent: s5g, cls: 'data', scenes: ['S5'], anchor: [0.5, 0] });
});
targetButton('Grid connection<span class="arrow" aria-hidden="true">↑</span>', 'Grid connection: rise to who routes the work', V(40.3, -6.6, -38.2), 'S5', { parent: s5g, anchor: [0.5, 0] });

/* --- S6: permission gate and possible compute routes --- */
const S6Y = 13;
// Faint self-glow keeps the underside from reading as a black hole while the camera rises past it.
far.add(box(17, 1.2, 14, mat(P.platform, { emissive: P.platform, emissiveIntensity: 0.9 }), V(36.5, S6Y - 0.6, -41)));
// Support tower under the platform's front corner: the riser climbs it, so the
// S5 -> S6 ascent always has a solid subject in view (QA-002).
const tower = new THREE.Group();
tower.position.set(48.2, 0, -40.2);
tower.add(box(1.6, 21.2, 1.6, structMat, V(0, 2.1, 0)));
for (let y = -7; y <= 11; y += 3) tower.add(box(1.9, 0.14, 1.9, mat(P.line), V(0, y, 0)));
far.add(tower);
const token = box(1.25, 1.7, 0.07, new THREE.MeshStandardMaterial({ map: record.material[4].map, roughness: 0.9 }), V(27.8, S6Y + 1.25, -40));
token.rotation.y = 0.35;
const tokenStand = box(0.7, 0.3, 0.4, structMat, V(27.8, S6Y + 0.15, -40));
const gate = new THREE.Group();
gate.position.set(31.2, S6Y, -40);
gate.add(
  box(0.4, 3.6, 0.4, structMat, V(0, 1.8, -1.6)),
  box(0.4, 3.6, 0.4, structMat, V(0, 1.8, 1.6)),
  box(0.5, 0.4, 3.9, structMat, V(0, 3.7, 0)),
);
const lock = new THREE.Group();
lock.position.set(0.05, 2.75, 0);
const lockMat = mat(P.accent, { roughness: 0.4, emissive: P.accent, emissiveIntensity: 0.15 });
lock.add(box(0.36, 0.6, 0.78, lockMat));
const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.06, 12, 32, Math.PI), lockMat);
shackle.rotation.y = Math.PI / 2;
shackle.position.y = 0.3;
lock.add(shackle);
gate.add(lock);
const junction = cyl(0.55, 0.55, 0.3, structMat, V(35.2, S6Y + 0.35, -40));
far.add(token, tokenStand, gate, junction);

const tpu = photo('/assets/google-tpu-8i-board.jpg', 6, 4);
tpu.position.set(41.3, S6Y + 3.1, -47.2);
tpu.rotation.y = -0.18;
far.add(tpu);
// A generic accelerator (no brand, no invented product look).
const gpu = new THREE.Group();
gpu.position.set(41.8, S6Y, -40.3);
gpu.add(box(2.4, 0.5, 1.8, structMat, V(0, 0.25, 0)), box(1.1, 0.14, 1.1, mat(P.bar, { roughness: 0.4, metalness: 0.3 }), V(0, 0.57, 0)));
const other = new THREE.Group();
other.position.set(40.6, S6Y, -35.2);
other.add(box(0.8, 0.8, 0.8, structMat, V(-0.6, 0.4, 0)), box(0.8, 0.55, 0.8, structMat, V(0.45, 0.28, 0.2)));
far.add(gpu, other);

const approved = tube([V(28.5, S6Y + 0.35, -40), V(31.2, S6Y + 0.35, -40), V(34.6, S6Y + 0.35, -40)], 0.11, accentMat);
const routes = [
  tube([V(35.6, S6Y + 0.35, -40.4), V(37.8, S6Y + 0.4, -44.5), V(40.2, S6Y + 1.0, -46.9)], 0.05, lineMat),
  tube([V(35.8, S6Y + 0.35, -40), V(38.4, S6Y + 0.35, -40.2), V(40.5, S6Y + 0.35, -40.3)], 0.05, lineMat),
  tube([V(35.6, S6Y + 0.35, -39.6), V(37.8, S6Y + 0.35, -36.6), V(39.8, S6Y + 0.35, -35.3)], 0.05, lineMat),
];
// A riser from the grid pylon up to the task owner's gate: the S5 -> S6 camera
// follows it, so the climb always has a subject (QA-002).
const riserMat = mat(P.accent, { roughness: 0.45 });
const riser = tube(
  [V(45.3, -2.1, -38.6), V(46.6, -0.6, -39.3), V(47.4, 3, -39.4), V(47.4, 11.6, -39.4), V(46.2, 13.12, -37.2), V(43, 13.12, -34.1), V(41.5, 13.12, -33.8), V(34, 13.12, -33.9), V(29, 13.2, -37.2), V(28.5, S6Y + 0.35, -39.6)],
  0.07, riserMat,
);
far.add(approved, ...routes, riser);
addTarget('S6', approved, junction, lock);

reveal.S6 = (p) => {
  grow(riser, easeOut(window01(p, 0, 0.55)));
  // Once the task reaches the gate, the riser steps back to a neutral trace.
  riserMat.color.setHex(P.accent).lerp(new THREE.Color(P.line), easeInOut(window01(p, 0.7, 1)));
  const q = easeInOut(window01(p, 0.1, 0.6));
  token.position.x = 25.8 + 2 * q;
  tokenStand.position.x = token.position.x;
  shackle.position.y = 0.3 + 0.12 * (1 - easeOut(window01(p, 0.45, 0.7)));
  grow(approved, window01(p, 0.5, 0.85));
  routes.forEach((r) => grow(r, window01(p, 0.7, 1)));
};

label('Task', V(27.8, S6Y + 2.35, -40), { parent: far, scenes: ['S6'], anchor: [0.5, 1] });
label('Permission', V(31.2, S6Y + 4.15, -40), { parent: far, scenes: ['S6'], anchor: [0.5, 1] });
label('Route', V(35.2, S6Y - 0.05, -39.3), { parent: far, cls: 'sub', scenes: ['S6'], anchor: [0.5, 0] });
label('Google TPU 8i', V(41.3, S6Y + 0.75, -47.2), { parent: far, scenes: ['S6'], anchor: [0.5, 0] });
label('GPU', V(41.8, S6Y + 0.95, -40.3), { parent: far, scenes: ['S6'], anchor: [0.5, 1] });
label('Other', V(40.6, S6Y + 1.1, -35.2), { parent: far, scenes: ['S6'], anchor: [0.5, 1] });
targetButton('Approved route<span class="arrow" aria-hidden="true">→</span>', 'Approved route: return to the conditional answer', V(31.2, S6Y + 0.1, -38.2), 'S6', { parent: far, anchor: [0.5, 0] });

/* --- E0: return to the record with the route as restrained traces --- */
const traceMat = mat(P.accent, { transparent: true, opacity: 0.55, roughness: 0.5, depthWrite: false });
const Z = DZ;
const trace = tube(
  [
    V(0.2, -2.9, 0.1), V(0.2, -8.0, -1.6), V(0.2, -8.0, -12.6), V(4, -7.2, -26.2), V(9, -9.0, -38.8 + Z),
    V(21.5, -4.9, -39.4 + Z), V(40.2, -8.0, -38.1 + Z), V(43.3, -6.0, -38.2 + Z), V(47.4, 4, -39.4 + Z), V(43, 13.2, -34.1 + Z), V(33, 13.4, -40 + Z), V(16, 12, -26),
    V(3.2, 3.4, -3.4), V(1.1, 2.15, -0.25),
  ],
  0.035, traceMat,
);
scene.add(trace);
reveal.E0 = (p) => {
  grow(trace, easeInOut(window01(p, 0.25, 1)));
  // The attempts step back so the verified record and the questions lead.
  s1Extras.visible = p < 0.15;
};

label(
  '<div class="qrow">Completed tasks?</div><div class="qrow">Cost per task?</div><div class="qrow">Who routes work?</div>',
  V(-3.2, 1.2, 0.3),
  { cls: 'questions', scenes: ['E0'], anchor: [1, 0.5] },
);

reveal.C0 = () => {};

/* ------------------------------------------------------------------ *
 * Camera shots and transitions
 * ------------------------------------------------------------------ */
const SHOTS = {
  C0: { pos: V(2.4, 1.1, 11.8), target: V(3.6, -1.9, -8) },
  S1: { pos: V(-1.3, 0.45, 10.4), target: V(-1.3, -0.05, 0) },
  S2: { pos: V(7.8, -2.4, 4.6), target: V(0, -8.1, -6.9) },
  S3: { pos: V(4, -4.4, -13.4), target: V(4, -8.3, -27) },
  S4: { pos: V(14.6, -4.2, -28.6), target: V(14.6, -5.1, -54) },
  S5: { pos: V(38.6, -2.3, -34.6), target: V(38.6, -3.5, -57) },
  S6: { pos: V(29.2, 19.6, -37.6), target: V(35.6, 14.6, -55.2) },
  E0: { pos: V(4.8, 6.9, 11.8), target: V(-1.2, -1.4, -3.2) },
};
const VIA = {
  S1: [],
  S2: [V(3.8, -1.2, 8.4)],
  S3: [V(11.5, -4.2, -14), V(12, -4.6, -25), V(8.6, -4.4, -16)],
  S4: [V(10, -3.2, -18.5)],
  S5: [V(27, -3.4, -32)],
  // Stay in front of the S6 platform (its front edge is z = -48) and below it only
  // while looking down the grid line; rise above its height before turning to the gate.
  S6: [V(43, 2, -28), V(42, 13.5, -25), V(35, 18, -27)],
  E0: [V(20, 21, -18), V(9, 12, 8)],
};
// Photos are full strength where they carry the scene, dimmed elsewhere.
const PHOTO_DIM = {
  rack: { C0: 1, S1: 0.3, S2: 0.3, S3: 0.18, S4: 1, S5: 0.35, S6: 0.35, E0: 0.75 },
  tpu: { C0: 0.2, S1: 0.2, S2: 0.2, S3: 0.2, S4: 0.2, S5: 0.2, S6: 1, E0: 0.75 },
};
function photoDim(mesh, v) {
  mesh.material.color.setScalar(v);
}
// Optional look-at paths. Without one, the look-at point moves straight between shots.
const TARGET_VIA = {
  // Follow the grid line up the pylon, then the platform's top surface (QA-002).
  S6: [V(46.5, -1, -53), V(47.4, 7.5, -53.4), V(44, 12.5, -51), V(37, 13.5, -53)],
};
// In reduced motion these moves keep their (unobstructed) path, only faster.
const RM_KEEPS_PATH = new Set(['S6']);
const DURATION = { S1: 2300, S2: 2800, S3: 4200, S4: 3000, S5: 2900, S6: 3000, E0: 3800 };

let cur = 0;
let anim = null;
let hot = false;

camera.position.copy(SHOTS.C0.pos);
camTarget.copy(SHOTS.C0.target);
camera.lookAt(camTarget);

function play(dur, update, done) {
  anim = { t0: performance.now(), dur, update, done };
}

function setState(i) {
  cur = i;
  const id = ORDER[i];
  showLabels(id);
  document.body.dataset.state = id;
  live.textContent = SCENE_NAMES[id];
  dirty = true;
}

function goTo(i) {
  const id = ORDER[i];
  const from = { pos: camera.position.clone(), target: camTarget.clone() };
  const shot = SHOTS[id];
  const rm = reducedMotion.matches;
  const keepPath = !rm || RM_KEEPS_PATH.has(id);
  const via = keepPath ? VIA[id] || [] : [];
  const tvia = keepPath ? TARGET_VIA[id] : null;
  const targetCurve = tvia ? new THREE.CatmullRomCurve3([from.target, ...tvia, shot.target], false, 'centripetal') : null;
  const lookAt = (e) => (targetCurve ? camTarget.copy(targetCurve.getPoint(e)) : camTarget.lerpVectors(from.target, shot.target, e));
  const posCurve = new THREE.CatmullRomCurve3([from.pos, ...via, shot.pos], false, 'centripetal');
  const leaving = ORDER[cur];
  beginDeparture(leaving);
  // Outgoing labels (and, leaving S5, the chart itself) fade out together.
  const depart = (t) => {
    const o = 1 - easeInOut(window01(t, rm ? 0 : 0.18, rm ? 0.6 : 0.42));
    departureOpacity(o);
    if (leaving === 'S5') chartOpacity(o);
  };
  document.body.dataset.state = `${ORDER[cur]}>${id}`;
  setHot(false);
  const dimFrom = { rack: rack.material.color.r, tpu: tpu.material.color.r };
  const dims = (e) => {
    photoDim(rack, THREE.MathUtils.lerp(dimFrom.rack, PHOTO_DIM.rack[id], e));
    photoDim(tpu, THREE.MathUtils.lerp(dimFrom.tpu, PHOTO_DIM.tpu[id], e));
  };
  if (rm) {
    // Reduced motion: short direct move, reveal already settled.
    reveal[id](1);
    play(650, (t) => {
      const e = easeInOut(t);
      camera.position.copy(posCurve.getPoint(e));
      lookAt(e);
      camera.lookAt(camTarget);
      dims(e);
      depart(t);
    }, () => setState(i));
    return;
  }
  play(DURATION[id] || 2600, (t) => {
    const e = easeInOut(t);
    camera.position.copy(posCurve.getPoint(e));
    lookAt(targetCurve ? e : easeInOut(window01(t, 0, 0.85)));
    camera.lookAt(camTarget);
    reveal[id](window01(t, 0.25, 1));
    dims(e);
    depart(t);
  }, () => setState(i));
}

function advance() {
  if (anim) return; // block repeated input while a transition runs
  if (cur >= ORDER.length - 1) return; // E0 holds
  goTo(cur + 1);
}

function resetAll() {
  for (const id of ORDER) if (id !== 'C0') reveal[id](0);
  photoDim(rack, PHOTO_DIM.rack.C0);
  photoDim(tpu, PHOTO_DIM.tpu.C0);
  chartOpacity(1);
  camera.position.copy(SHOTS.C0.pos);
  camTarget.copy(SHOTS.C0.target);
  camera.lookAt(camTarget);
}

function reset() {
  // R works from every state, including mid-transition.
  if (anim && anim.isReset) return;
  if (cur === 0 && !anim) return;
  showLabels('__none__');
  setHot(false);
  const rm = reducedMotion.matches;
  const out = rm ? 120 : 380;
  const inn = rm ? 160 : 520;
  anim = null;
  play(out + inn, (t) => {
    const ms = t * (out + inn);
    if (ms < out) veil.style.opacity = String(ms / out);
    else {
      if (!anim.didReset) {
        resetAll();
        anim.didReset = true;
      }
      veil.style.opacity = String(1 - (ms - out) / inn);
    }
  }, () => {
    veil.style.opacity = '0';
    setState(0);
  });
  anim.isReset = true;
}

/* ------------------------------------------------------------------ *
 * Input: Space, R, pointer on the scene object
 * ------------------------------------------------------------------ */
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (!e.repeat) advance();
  } else if (e.code === 'KeyR' && !e.ctrlKey && !e.metaKey && !e.altKey) {
    if (!e.repeat) reset();
  }
});
// Keep Space from also "clicking" a focused target button on keyup.
window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') e.preventDefault();
});

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
function hitTarget(ev) {
  const r = canvas.getBoundingClientRect();
  ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const meshes = targetMeshes[ORDER[cur]] || [];
  return raycaster.intersectObjects(meshes, true).length > 0;
}

const hotMats = new Set();
for (const id of Object.keys(targetMeshes)) {
  for (const m of targetMeshes[id]) m.traverse((o) => o.material && !Array.isArray(o.material) && o.material.emissive && hotMats.add(o));
}
function setHot(on) {
  if (hot === on) return;
  hot = on;
  const id = ORDER[cur];
  const btn = targetButtons[id];
  if (btn) btn.classList.toggle('hot', on);
  for (const m of targetMeshes[id] || []) {
    m.traverse((o) => {
      if (!hotMats.has(o)) return;
      if (o.userData.baseEmissive === undefined) o.userData.baseEmissive = o.material.emissiveIntensity;
      if (on && !o.material.userData.emissiveSet) {
        o.material.emissive.setHex(P.accent);
      }
      o.material.emissiveIntensity = on ? Math.max(0.35, o.userData.baseEmissive + 0.25) : o.userData.baseEmissive;
    });
  }
  stage.style.cursor = on ? 'pointer' : '';
  dirty = true;
}

canvas.addEventListener('pointermove', (ev) => {
  if (anim || !targetMeshes[ORDER[cur]]) return setHot(false);
  setHot(hitTarget(ev));
});
canvas.addEventListener('pointerleave', () => setHot(false));
canvas.addEventListener('click', (ev) => {
  if (!anim && hitTarget(ev)) advance();
});

/* ------------------------------------------------------------------ *
 * Loop — renders only while something changes, so hold states are still.
 * ------------------------------------------------------------------ */
function frame(now) {
  if (anim) {
    const a = anim;
    // rAF timestamps can precede a t0 taken inside an input handler; clamp to [0, 1].
    const t = clamp01((now - a.t0) / a.dur);
    a.update(t);
    if (t >= 1 && anim === a) {
      anim = null;
      a.done && a.done();
    }
    dirty = true;
  }
  if (dirty) {
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    dirty = false;
  }
  requestAnimationFrame(frame);
}

resetAll();
setState(0);
requestAnimationFrame(frame);

// Test hook (used by the local capture script and QA); harmless in production.
window.__journey = {
  get state() {
    return ORDER[cur];
  },
  get busy() {
    return !!anim;
  },
  advance,
  reset,
};
