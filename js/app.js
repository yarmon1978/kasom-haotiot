/* ================================================================
   קסם האותיות — app.js
   ================================================================ */

// ── DATA ─────────────────────────────────────────────────────────
const ALPHABET = [
  { char:'א', word:'אריה',  emoji:'🦁' }, { char:'ב', word:'בית',   emoji:'🏠' },
  { char:'ג', word:'גלידה', emoji:'🍦' }, { char:'ד', word:'דוב',   emoji:'🧸' },
  { char:'ה', word:'הפרח',  emoji:'🌸' }, { char:'ו', word:'ורד',   emoji:'🌹' },
  { char:'ז', word:'זברה',  emoji:'🦓' }, { char:'ח', word:'חתול',  emoji:'🐱' },
  { char:'ט', word:'טווס',  emoji:'🦚' }, { char:'י', word:'ילדה',  emoji:'👧' },
  { char:'כ', word:'כדור',  emoji:'⚽' }, { char:'ל', word:'לב',    emoji:'❤️' },
  { char:'מ', word:'מטוס',  emoji:'✈️' }, { char:'נ', word:'נחש',   emoji:'🐍' },
  { char:'ס', word:'סוס',   emoji:'🐴' }, { char:'ע', word:'עוגה',  emoji:'🎂' },
  { char:'פ', word:'פרפר',  emoji:'🦋' }, { char:'צ', word:'צב',    emoji:'🐢' },
  { char:'ק', word:'קשת',   emoji:'🌈' }, { char:'ר', word:'רכבת',  emoji:'🚂' },
  { char:'ש', word:'שמש',   emoji:'☀️' }, { char:'ת', word:'תפוח',  emoji:'🍎' },
];

const PAINT_COLORS = [
  '#e74c3c','#e67e22','#f1c40f','#27ae60',
  '#1abc9c','#2980b9','#8e44ad','#ff8fab',
  '#00bcd4','#795548','#f8f9fa','#1a1a2e',
];

// ── COLORING PAGE ILLUSTRATIONS ──────────────────────────────────
const ILLUSTRATIONS = {
  'א': `<!-- Lion -->
    <circle cx="370" cy="140" r="62" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="370" cy="140" r="80" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-dasharray="16 8"/>
    <circle cx="350" cy="126" r="11" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="390" cy="126" r="11" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="352" cy="128" r="5" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <circle cx="392" cy="128" r="5" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <ellipse cx="370" cy="148" rx="13" ry="9" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <ellipse cx="362" cy="143" rx="5" ry="4" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <ellipse cx="378" cy="143" rx="5" ry="4" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <path d="M357 156 Q370 168 383 156" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M320 86 Q308 62 326 78" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <path d="M420 86 Q432 62 414 78" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <line x1="310" y1="144" x2="352" y2="148" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <line x1="308" y1="154" x2="352" y2="154" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <line x1="388" y1="148" x2="430" y2="144" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <line x1="388" y1="154" x2="432" y2="154" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <rect x="310" y="198" width="120" height="80" rx="22" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <ellipse cx="330" cy="288" rx="20" ry="12" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="410" cy="288" rx="20" ry="12" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <path d="M430 240 Q470 220 465 260 Q460 285 478 280" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="481" cy="282" r="10" fill="none" stroke="#b0b8c8" stroke-width="3"/>`,

  'ב': `<!-- House -->
    <rect x="290" y="170" width="180" height="120" rx="8" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <polygon points="280,173 380,75 480,173" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linejoin="round"/>
    <rect x="348" y="228" width="50" height="62" rx="6" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="390" cy="258" r="4" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <rect x="298" y="188" width="44" height="36" rx="5" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <line x1="320" y1="188" x2="320" y2="224" stroke="#b0b8c8" stroke-width="1.8"/>
    <line x1="298" y1="206" x2="342" y2="206" stroke="#b0b8c8" stroke-width="1.8"/>
    <rect x="418" y="188" width="44" height="36" rx="5" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <line x1="440" y1="188" x2="440" y2="224" stroke="#b0b8c8" stroke-width="1.8"/>
    <line x1="418" y1="206" x2="462" y2="206" stroke="#b0b8c8" stroke-width="1.8"/>
    <rect x="430" y="86" width="30" height="52" rx="4" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <path d="M436 83 Q430 66 438 54" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M446 81 Q440 62 450 50" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="455" cy="48" r="22" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <line x1="455" y1="20" x2="455" y2="12" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="427" y1="48" x2="419" y2="48" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="483" y1="48" x2="491" y2="48" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>`,

  'ג': `<!-- Ice cream -->
    <polygon points="375,280 320,130 430,130" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linejoin="round"/>
    <line x1="332" y1="152" x2="418" y2="152" stroke="#b0b8c8" stroke-width="1.5" opacity=".6"/>
    <line x1="324" y1="174" x2="426" y2="174" stroke="#b0b8c8" stroke-width="1.5" opacity=".6"/>
    <line x1="344" y1="130" x2="375" y2="280" stroke="#b0b8c8" stroke-width="1.5" opacity=".6"/>
    <line x1="375" y1="130" x2="375" y2="280" stroke="#b0b8c8" stroke-width="1.5" opacity=".6"/>
    <line x1="406" y1="130" x2="375" y2="280" stroke="#b0b8c8" stroke-width="1.5" opacity=".6"/>
    <circle cx="375" cy="104" r="40" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="362" cy="60" r="32" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="394" cy="52" r="28" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="388" cy="25" r="11" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <path d="M388 14 Q398 4 410 8" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M340 114 Q334 128 338 142" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M412 108 Q418 122 414 136" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="360" y1="96" x2="368" y2="108" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="378" y1="90" x2="386" y2="102" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>`,

  'ד': `<!-- Bear -->
    <ellipse cx="375" cy="190" rx="68" ry="78" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="375" cy="105" r="55" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="332" cy="62" r="20" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="418" cy="62" r="20" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="332" cy="62" r="11" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <circle cx="418" cy="62" r="11" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <circle cx="355" cy="95" r="10" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="395" cy="95" r="10" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="357" cy="97" r="4.5" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <circle cx="397" cy="97" r="4.5" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <ellipse cx="375" cy="118" rx="24" ry="16" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <ellipse cx="375" cy="111" rx="10" ry="8" fill="none" stroke="#b0b8c8" stroke-width="2.8"/>
    <path d="M362 126 Q375 138 388 126" fill="none" stroke="#b0b8c8" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="375" cy="198" rx="40" ry="48" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <path d="M308 165 Q280 180 288 208" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="282" cy="212" rx="18" ry="11" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <path d="M442 165 Q470 180 462 208" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="468" cy="212" rx="18" ry="11" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <path d="M334 256 Q325 272 332 288" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="330" cy="292" rx="24" ry="12" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <path d="M416 256 Q425 272 418 288" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="420" cy="292" rx="24" ry="12" fill="none" stroke="#b0b8c8" stroke-width="3"/>`,

  'ח': `<!-- Cat -->
    <path d="M316 168 Q314 90 375 78 Q436 90 434 168 Q434 208 375 214 Q316 208 316 168Z" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <polygon points="318,132 300,66 352,108" fill="none" stroke="#b0b8c8" stroke-width="3" stroke-linejoin="round"/>
    <polygon points="432,132 450,66 398,108" fill="none" stroke="#b0b8c8" stroke-width="3" stroke-linejoin="round"/>
    <ellipse cx="350" cy="148" rx="16" ry="18" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="400" cy="148" rx="16" ry="18" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="350" cy="148" rx="6" ry="16" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <ellipse cx="400" cy="148" rx="6" ry="16" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <polygon points="375,170 367,178 383,178" fill="none" stroke="#b0b8c8" stroke-width="3" stroke-linejoin="round"/>
    <path d="M363 178 Q355 188 348 184" fill="none" stroke="#b0b8c8" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M387 178 Q395 188 402 184" fill="none" stroke="#b0b8c8" stroke-width="2.8" stroke-linecap="round"/>
    <line x1="298" y1="166" x2="352" y2="172" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <line x1="296" y1="178" x2="350" y2="178" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <line x1="398" y1="172" x2="452" y2="166" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <line x1="400" y1="178" x2="454" y2="178" stroke="#b0b8c8" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="375" cy="262" rx="60" ry="66" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <path d="M435 278 Q476 255 472 296 Q468 318 490 312" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="342" cy="306" rx="22" ry="13" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="408" cy="306" rx="22" ry="13" fill="none" stroke="#b0b8c8" stroke-width="3"/>`,

  'פ': `<!-- Butterfly -->
    <ellipse cx="375" cy="175" rx="11" ry="55" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <path d="M370 118 Q354 88 342 72" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="340" cy="68" r="7" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <path d="M380 118 Q396 88 408 72" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="410" cy="68" r="7" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <path d="M375 138 Q308 86 272 118 Q240 150 280 182 Q312 202 375 170Z" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M375 138 Q442 86 478 118 Q510 150 470 182 Q438 202 375 170Z" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="308" cy="148" r="18" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <circle cx="442" cy="148" r="18" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <path d="M375 180 Q315 180 294 210 Q278 238 308 256 Q340 270 375 222Z" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M375 180 Q435 180 456 210 Q472 238 442 256 Q410 270 375 222Z" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="316" cy="222" r="13" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <circle cx="434" cy="222" r="13" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>`,

  'ש': `<!-- Sun -->
    <circle cx="375" cy="148" r="62" fill="none" stroke="#b0b8c8" stroke-width="4"/>
    <circle cx="355" cy="132" r="10" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="395" cy="132" r="10" fill="none" stroke="#b0b8c8" stroke-width="3.5"/>
    <circle cx="357" cy="134" r="5" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <circle cx="397" cy="134" r="5" fill="none" stroke="#b0b8c8" stroke-width="2.5"/>
    <path d="M348 160 Q375 178 402 160" fill="none" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="375" y1="78"  x2="375" y2="60"  stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="375" y1="218" x2="375" y2="236" stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="305" y1="148" x2="287" y2="148" stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="445" y1="148" x2="463" y2="148" stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="326" y1="99"  x2="314" y2="87"  stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="424" y1="99"  x2="436" y2="87"  stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="326" y1="197" x2="314" y2="209" stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <line x1="424" y1="197" x2="436" y2="209" stroke="#b0b8c8" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="290" cy="270" rx="38" ry="24" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="314" cy="255" rx="30" ry="20" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="460" cy="275" rx="38" ry="24" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="436" cy="260" rx="30" ry="20" fill="none" stroke="#b0b8c8" stroke-width="3"/>`,

  'ת': `<!-- Apple -->
    <path d="M375 65 Q355 45 340 55" fill="none" stroke="#b0b8c8" stroke-width="3" stroke-linecap="round"/>
    <line x1="375" y1="85" x2="375" y2="65" stroke="#b0b8c8" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M358 75 Q345 58 335 65" fill="none" stroke="#b0b8c8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M375 88 Q290 80 282 160 Q278 220 310 258 Q338 290 375 292 Q412 290 440 258 Q472 220 468 160 Q460 80 375 88Z" fill="none" stroke="#b0b8c8" stroke-width="4" stroke-linejoin="round"/>
    <line x1="375" y1="88" x2="375" y2="292" stroke="#b0b8c8" stroke-width="2" opacity=".4"/>`,

  'ק': `<!-- Rainbow -->
    <path d="M280 200 Q280 120 375 120 Q470 120 470 200" fill="none" stroke="#b0b8c8" stroke-width="7" stroke-linecap="round"/>
    <path d="M298 200 Q298 138 375 138 Q452 138 452 200" fill="none" stroke="#b0b8c8" stroke-width="7" stroke-linecap="round"/>
    <path d="M316 200 Q316 156 375 156 Q434 156 434 200" fill="none" stroke="#b0b8c8" stroke-width="7" stroke-linecap="round"/>
    <path d="M334 200 Q334 174 375 174 Q416 174 416 200" fill="none" stroke="#b0b8c8" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="278" cy="210" rx="36" ry="24" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="300" cy="196" rx="28" ry="20" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="472" cy="210" rx="36" ry="24" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <ellipse cx="450" cy="196" rx="28" ry="20" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <circle cx="375" cy="60" r="28" fill="none" stroke="#b0b8c8" stroke-width="3"/>
    <line x1="375" y1="25" x2="375" y2="18" stroke="#b0b8c8" stroke-width="3" stroke-linecap="round"/>
    <line x1="350" y1="33" x2="345" y2="28" stroke="#b0b8c8" stroke-width="3" stroke-linecap="round"/>
    <line x1="400" y1="33" x2="405" y2="28" stroke="#b0b8c8" stroke-width="3" stroke-linecap="round"/>`,
};

function getIllustration(l) {
  return ILLUSTRATIONS[l.char] || `
    <text x="375" y="195" font-size="120" text-anchor="middle">${l.emoji}</text>
    <text x="375" y="268" font-family="Rubik,sans-serif" font-size="22" text-anchor="middle" fill="#b0b8c8" font-weight="700">${l.word}</text>`;
}

function makeColorSVG(l) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="310" viewBox="0 0 500 310">
    <rect width="500" height="310" fill="#fffef8"/>
    <text x="115" y="225" font-family="Fredoka One,cursive" font-size="230" text-anchor="middle"
      fill="none" stroke="#b0b8c8" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">${l.char}</text>
    <text x="115" y="268" font-family="Rubik,sans-serif" font-size="18" text-anchor="middle" fill="#c4b5fd" font-weight="700">${l.word}</text>
    ${getIllustration(l)}
  </svg>`;
}

// ── AUDIO ─────────────────────────────────────────────────────────
let audioCtx = null, bgGain = null, soundEnabled = true;

function getAC() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function playTone(freq, type = 'sine', dur = 0.15, vol = 0.15, delay = 0) {
  if (!soundEnabled) return;
  try {
    const ac = getAC(), o = ac.createOscillator(), g = ac.createGain();
    o.connect(g); g.connect(ac.destination);
    o.type = type; o.frequency.setValueAtTime(freq, ac.currentTime + delay);
    g.gain.setValueAtTime(vol, ac.currentTime + delay);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + delay + dur);
    o.start(ac.currentTime + delay); o.stop(ac.currentTime + delay + dur);
  } catch (e) {}
}
function playSuccess() { [523,659,784,1046].forEach((f,i) => playTone(f,'sine',0.2,0.17,i*0.1)); }
function playWrong()   { playTone(200,'sawtooth',0.28,0.14); playTone(160,'sawtooth',0.28,0.11,0.16); }
function playClick()   { playTone(660,'sine',0.07,0.09); }
function playPop()     { playTone(880,'sine',0.09,0.11); playTone(1100,'sine',0.07,0.09,0.07); }
function playPaint()   { if (Math.random() < 0.12) playTone(440 + Math.random()*200,'sine',0.05,0.05); }

function startBgMusic() {
  if (!soundEnabled) return;
  try {
    const ac = getAC();
    const master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
    master.gain.linearRampToValueAtTime(0.07, ac.currentTime + 2);
    bgGain = master;
    const penta = [261.63,293.66,329.63,392.00,440.00,523.25,587.33,659.25,783.99,880.00];
    let t = ac.currentTime + 0.5;

    function chord() {
      if (!soundEnabled || !bgGain) return;
      const root = penta[Math.floor(Math.random()*5)];
      [root, root*1.5].forEach(freq => {
        try {
          const o = ac.createOscillator(), g = ac.createGain();
          o.connect(g); g.connect(master); o.type = 'sine'; o.frequency.value = freq * 0.5;
          g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.6, t+0.8);
          g.gain.linearRampToValueAtTime(0, t+3.5);
          o.start(t); o.stop(t+4);
        } catch(e) {}
      });
      t += 3.8 + Math.random()*1.5;
      if (t < ac.currentTime + 120) setTimeout(chord, 2800);
    }
    function melody() {
      if (!soundEnabled || !bgGain) return;
      const n = penta[Math.floor(Math.random()*penta.length)];
      try {
        const o = ac.createOscillator(), g = ac.createGain();
        o.connect(g); g.connect(master); o.type = 'triangle'; o.frequency.value = n;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.4, t+0.08);
        g.gain.linearRampToValueAtTime(0, t+0.6);
        o.start(t); o.stop(t+0.7);
      } catch(e) {}
      t += 0.45 + Math.random()*0.4;
      if (t < ac.currentTime + 120) setTimeout(melody, 300);
    }
    chord(); melody();
  } catch(e) {}
}
function stopBgMusic() {
  if (bgGain) { try { bgGain.gain.linearRampToValueAtTime(0, getAC().currentTime+1); } catch(e) {} bgGain = null; }
}
function speak(text) {
  if (!soundEnabled || !window.speechSynthesis) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'he-IL'; u.rate = 0.82; u.pitch = 1.25;
  speechSynthesis.speak(u);
}

// ── CONFETTI ──────────────────────────────────────────────────────
function launchConfetti(big = false) {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const colors = ['#ff8fab','#a78bfa','#34d399','#fbbf24','#38bdf8','#f87171','#fb923c'];
  const n = big ? 180 : 100;
  const particles = Array.from({length: n}, () => ({
    x: Math.random()*canvas.width, y: -10 - Math.random()*40,
    vx: (Math.random()-0.5)*7, vy: Math.random()*5+2,
    color: colors[Math.floor(Math.random()*colors.length)],
    size: Math.random()*10+5, rot: Math.random()*360, vr: (Math.random()-0.5)*10, life: 1,
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr; p.life-=0.011;
      if (p.life <= 0) return;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.globalAlpha = p.life; ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2,-p.size/4,p.size,p.size/2); ctx.restore();
    });
    frame++; if (frame < 180) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

// ── STATE ─────────────────────────────────────────────────────────
function shuffle(a) {
  const r = [...a];
  for (let i=r.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [r[i],r[j]]=[r[j],r[i]]; }
  return r;
}
function colorIdx(i) { return i % 6; }
function $(id) { return document.getElementById(id); }

let S = {
  screen: 'welcome', name: '', score: 0, emilyMsg: '', emilyPose: 'idle',
  memCards: [], memSelected: [], memMatched: [], memMoves: 0, memComplete: false,
  traceIdx: 0, traceDone: false,
  quizQs: [], quizIdx: 0, quizChosen: null, quizHistory: [], quizDone: false,
  paintMode: 'free', paintColor: '#e74c3c', paintBrush: 8, paintLetterIdx: 0, paintEraser: false,
};
let poseTimer = null, paintCanvas = null, paintCtx = null;
let paintDrawing = false, paintLX = 0, paintLY = 0, paintHistory = [];
let traceCanvas = null, traceCtx = null, traceDrawing = false;

const MSGS = {
  welcome:    n => `שלום ${n}! 🌸 כיף שאת פה!`,
  learn:      'לחצי על אות כדי לשמוע אותה! 🎵',
  memory:     'מצאי זוגות של אות ואמוג׳י! 🃏',
  trace:      'צייר את האות עם האצבע! ✏️',
  quiz:       'איזו אות מתחילה המילה? 🎯',
  paint:      'בואי נצייר ונצבע! 🎨',
  correct:    'וואו, כל הכבוד! 🌟',
  wrong:      'כמעט! נסי שוב 💪',
  score:      n => `+${n} נקודות! ⭐`,
  letterClick:l => `${l.char} כמו ${l.word} ${l.emoji}`,
  memMatch:   'כן! זוג נמצא! 🎉',
  memWin:     'הצלחת לזכור הכל! 🎊',
  traceGood:  'יפה מאוד! 🌸 המשיכי!',
  paintSave:  'ציור מקסים! 🖼️',
};

// Emily image source selector
function emilyImgSrc(pose) {
  if (!window.EMILY_IMG) return '';
  switch (pose) {
    case 'happy':    return EMILY_IMG.happy;
    case 'think':    return EMILY_IMG.think;
    case 'surprise': return EMILY_IMG.surprise;
    default:         return EMILY_IMG.stand;
  }
}

function setPose(pose, msg) {
  S.emilyPose = pose;
  if (msg) S.emilyMsg = msg;
  clearTimeout(poseTimer);
  poseTimer = setTimeout(() => { S.emilyPose = 'idle'; renderEmilyOnly(); }, 2200);
  renderEmilyOnly();
}
function addScore(n) {
  S.score += n;
  const el = $('score-num');
  if (el) { el.textContent = S.score; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  setPose('correct', MSGS.score(n));
}
function renderEmilyOnly() {
  const w = $('emily-wrap');
  if (w) {
    w.className = `emily-wrap ${S.emilyPose}`;
    w.innerHTML = `<img src="${emilyImgSrc(S.emilyPose)}" alt="אמילי" />`;
  }
  const b = $('emily-bubble');
  if (b) b.textContent = S.emilyMsg;
}

// ── WELCOME ───────────────────────────────────────────────────────
function renderWelcome() {
  $('root').innerHTML = `
  <div class="app" style="text-align:center;padding-top:22px">
    <h1>קסם האותיות ✨</h1>
    <p class="subtitle">לומדים אותיות בכיף!</p>
    <div class="welcome-card">
      <img class="welcome-emily" src="${emilyImgSrc('happy')}" alt="אמילי שמחה"/>
      <p style="font-family:'Fredoka One',cursive;font-size:1.25rem;color:#f472b6;margin-bottom:3px">שלום! אני אמילי 🌸</p>
      <p style="color:#9ca3af;margin-bottom:14px;font-size:.9rem">אני אלווה אותך בלמידה! איך קוראים לך?</p>
      <input id="name-input" class="welcome-input" placeholder="השם שלך" maxlength="18"/>
      <button class="btn btn-purple" style="width:100%;font-size:1.05rem;padding:12px" onclick="startApp()">בואי נתחיל! 🚀</button>
    </div>
  </div>`;
  const inp = $('name-input');
  inp.focus();
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') startApp(); });
}

function startApp() {
  S.name = $('name-input')?.value?.trim() || S.name;
  if (!S.name) return;
  speak('שלום ' + S.name);
  playSuccess();
  startBgMusic();
  S.screen = 'learn'; S.emilyPose = 'happy'; S.emilyMsg = MSGS.welcome(S.name);
  render();
}

// ── MAIN RENDER ───────────────────────────────────────────────────
function render() {
  $('root').innerHTML = `
  <div class="app">
    <h1>קסם האותיות ✨</h1>
    <div class="emily-bar">
      <div id="emily-wrap" class="emily-wrap ${S.emilyPose}">
        <img src="${emilyImgSrc(S.emilyPose)}" alt="אמילי" />
      </div>
      <div class="emily-content">
        <div class="emily-tag">✦ אמילי מדברת</div>
        <div id="emily-bubble" class="emily-bubble">${S.emilyMsg || MSGS.learn}</div>
      </div>
      <button class="sound-btn" onclick="toggleSound()">${soundEnabled ? '🔊' : '🔇'}</button>
      <div class="score-badge">
        <span class="score-num" id="score-num">${S.score}</span>
        <span class="score-lbl">⭐ נקודות</span>
      </div>
    </div>
    <div class="nav-tabs">
      <button class="tab-btn tab-learn${S.screen==='learn'?' active':''}"   onclick="go('learn')">📖 לומדים</button>
      <button class="tab-btn tab-memory${S.screen==='memory'?' active':''}" onclick="go('memory')">🃏 זיכרון</button>
      <button class="tab-btn tab-trace${S.screen==='trace'?' active':''}"   onclick="go('trace')">✏️ כתיבה</button>
      <button class="tab-btn tab-quiz${S.screen==='quiz'?' active':''}"     onclick="go('quiz')">🎯 קווייז</button>
      <button class="tab-btn tab-paint${S.screen==='paint'?' active':''}"   onclick="go('paint')">🎨 צביעה</button>
    </div>
    <div id="sc"></div>
  </div>`;
  renderScreen();
}

window.toggleSound = function() {
  soundEnabled = !soundEnabled;
  soundEnabled ? startBgMusic() : stopBgMusic();
  render();
};
function go(s) {
  S.screen = s; playClick();
  const msgs  = { learn: MSGS.learn,  memory: MSGS.memory, trace: MSGS.trace,  quiz: MSGS.quiz,  paint: MSGS.paint };
  const poses = { learn: 'idle', memory: 'think', trace: 'idle', quiz: 'think', paint: 'happy' };
  setPose(poses[s] || 'idle', msgs[s]);
  render();
}
function renderScreen() {
  const c = $('sc'); if (!c) return;
  if      (S.screen === 'learn')  rLearn(c);
  else if (S.screen === 'memory') rMemory(c);
  else if (S.screen === 'trace')  rTrace(c);
  else if (S.screen === 'quiz')   rQuiz(c);
  else if (S.screen === 'paint')  rPaint(c);
}

// ── LEARN ─────────────────────────────────────────────────────────
function rLearn(c) {
  c.innerHTML = `<div class="letter-grid">${ALPHABET.map((l,i) => {
    const ci = colorIdx(i);
    return `<div class="letter-card bg${ci}" onclick="learnClick(${i})">
      <div class="letter-char c${ci}">${l.char}</div>
      <span class="letter-emoji">${l.emoji}</span>
      <div class="letter-word">${l.word}</div>
    </div>`;
  }).join('')}</div>`;
}
window.learnClick = i => {
  const l = ALPHABET[i];
  speak(l.char + ' כמו ' + l.word);
  playPop();
  addScore(1);
  setPose('happy', MSGS.letterClick(l));
};

// ── MEMORY ────────────────────────────────────────────────────────
function initMem() {
  const letters = shuffle(ALPHABET).slice(0,6); let deck = [];
  letters.forEach(l => {
    deck.push({value: l.char, match: l.char, type: 'char'});
    deck.push({value: l.emoji, match: l.char, type: 'emoji'});
  });
  S.memCards=shuffle(deck); S.memSelected=[]; S.memMatched=[]; S.memMoves=0; S.memComplete=false;
}
function rMemory(c) {
  if (!S.memCards.length) initMem();
  if (S.memComplete) {
    c.innerHTML = `<div class="complete-box"><div style="font-size:3.5rem">🎉</div><h2>כל הכבוד!</h2>
      <p style="color:#6b7280;margin-bottom:15px">השלמת ב-${S.memMoves} מהלכים!</p>
      <button class="btn btn-purple" onclick="memRestart()">שחקי שוב</button></div>`;
    return;
  }
  c.innerHTML = `
    <div style="text-align:center;margin-bottom:8px;color:#9ca3af;font-weight:700;font-size:.85rem">
      מהלכים: ${S.memMoves} | זוגות: ${S.memMatched.length/2}/6</div>
    <div class="memory-grid">${S.memCards.map((card,i) => {
      const show = S.memSelected.includes(i) || S.memMatched.includes(i);
      const isM  = S.memMatched.includes(i);
      const fs   = card.type==='char' ? "font-family:'Fredoka One',cursive;font-size:2rem" : "font-size:1.85rem";
      return `<div class="mem-card${show?' flip':''}" onclick="memClick(${i})">
        <div class="mem-inner">
          <div class="mem-face mem-front">?</div>
          <div class="mem-face mem-back${isM?' mem-matched':''}" style="${fs}">${card.value}</div>
        </div></div>`;
    }).join('')}</div>`;
}
window.memClick = i => {
  if (S.memSelected.length===2 || S.memSelected.includes(i) || S.memMatched.includes(i)) return;
  playClick();
  const ns = [...S.memSelected, i]; S.memSelected = ns;
  if (ns.length === 2) {
    S.memMoves++;
    const [a,b] = ns;
    if (S.memCards[a].match === S.memCards[b].match) {
      S.memMatched=[...S.memMatched,a,b]; S.memSelected=[]; addScore(10); speak('כל הכבוד'); playSuccess();
      setPose('correct', MSGS.memMatch);
      if (S.memMatched.length === S.memCards.length) {
        S.memComplete = true; setPose('happy', MSGS.memWin); launchConfetti(true);
      }
    } else {
      playWrong(); setPose('surprise', 'אופס! נסי שוב 💪');
      setTimeout(() => { S.memSelected = []; renderScreen(); }, 900);
    }
  }
  renderScreen();
};
window.memRestart = () => { initMem(); renderScreen(); };

// ── TRACE ─────────────────────────────────────────────────────────
function rTrace(c) {
  const l = ALPHABET[S.traceIdx]; const ci = colorIdx(S.traceIdx);
  c.innerHTML = `<div class="trace-area">
    <div class="letter-nav">${ALPHABET.map((lt,i) =>
      `<div class="nav-dot" style="background:${i===S.traceIdx?['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#8b5cf6'][i%6]:'#e5e7eb'}" onclick="traceSetIdx(${i})"></div>`
    ).join('')}</div>
    <div class="trace-header">
      <button class="btn btn-gray" onclick="traceNav(-1)">→ הקודם</button>
      <div style="text-align:center">
        <div class="big-letter c${ci}">${l.char}</div>
        <div style="font-size:1.3rem">${l.emoji} ${l.word}</div>
      </div>
      <button class="btn btn-gray" onclick="traceNav(1)">הבא ←</button>
    </div>
    <p style="text-align:center;color:#9ca3af;margin-bottom:8px;font-size:.82rem">צייר את האות עם האצבע ✍️</p>
    <div style="max-width:340px;margin:0 auto">
      <canvas id="trace-canvas" width="320" height="210"
        style="width:100%;height:auto;border:3px solid #e9d5ff;border-radius:14px"></canvas>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:9px;flex-wrap:wrap">
      <button class="btn btn-gray" onclick="traceClear()">🗑️ נקה</button>
      ${S.traceDone ? `<button class="btn btn-green" onclick="traceNext()">✓ יפה! הבא →</button>` : ''}
      <button class="btn btn-purple" onclick="speak(ALPHABET[${S.traceIdx}].char+' כמו '+ALPHABET[${S.traceIdx}].word)">🔊 שמע</button>
    </div>
  </div>`;
  traceCanvas = $('trace-canvas'); traceCtx = traceCanvas.getContext('2d');
  drawTraceGuide();
  traceCanvas.addEventListener('mousedown', tStart); traceCanvas.addEventListener('mousemove', tMove); traceCanvas.addEventListener('mouseup', tEnd);
  traceCanvas.addEventListener('touchstart', tStart, {passive:false}); traceCanvas.addEventListener('touchmove', tMove, {passive:false}); traceCanvas.addEventListener('touchend', tEnd, {passive:false});
}
function drawTraceGuide() {
  if (!traceCtx) return;
  traceCtx.clearRect(0,0,traceCanvas.width,traceCanvas.height);
  traceCtx.fillStyle = '#faf5ff'; traceCtx.fillRect(0,0,traceCanvas.width,traceCanvas.height);
  traceCtx.font = 'bold 165px "Fredoka One",cursive'; traceCtx.textAlign = 'center'; traceCtx.textBaseline = 'middle';
  traceCtx.fillStyle = 'rgba(167,139,250,0.16)'; traceCtx.fillText(ALPHABET[S.traceIdx].char, traceCanvas.width/2, traceCanvas.height/2);
}
function tPos(e) {
  const r = traceCanvas.getBoundingClientRect(); const sx = traceCanvas.width/r.width, sy = traceCanvas.height/r.height;
  if (e.touches) return { x:(e.touches[0].clientX-r.left)*sx, y:(e.touches[0].clientY-r.top)*sy };
  return { x:(e.clientX-r.left)*sx, y:(e.clientY-r.top)*sy };
}
function tStart(e) { e.preventDefault(); const p=tPos(e); traceCtx.beginPath(); traceCtx.moveTo(p.x,p.y); traceCtx.lineWidth=10; traceCtx.lineCap='round'; traceCtx.strokeStyle='#f472b6'; traceDrawing=true; playPaint(); }
function tMove(e)  { e.preventDefault(); if (!traceDrawing) return; const p=tPos(e); traceCtx.lineTo(p.x,p.y); traceCtx.stroke(); traceCtx.beginPath(); traceCtx.moveTo(p.x,p.y); }
function tEnd(e)   { e.preventDefault(); traceDrawing=false; if (!S.traceDone) { S.traceDone=true; addScore(2); playPop(); setPose('happy', MSGS.traceGood); renderScreen(); } }
window.traceClear   = () => { S.traceDone=false; drawTraceGuide(); renderScreen(); };
window.traceNav     = d  => { S.traceIdx=(S.traceIdx+d+ALPHABET.length)%ALPHABET.length; S.traceDone=false; playClick(); renderScreen(); };
window.traceSetIdx  = i  => { S.traceIdx=i; S.traceDone=false; playClick(); renderScreen(); };
window.traceNext    = () => { speak('יפה מאוד! '+ALPHABET[S.traceIdx].char+' כמו '+ALPHABET[S.traceIdx].word); playSuccess(); setPose('correct','מעולה! ממשיכים! 🌟'); S.traceIdx=(S.traceIdx+1)%ALPHABET.length; S.traceDone=false; renderScreen(); };

// ── QUIZ ──────────────────────────────────────────────────────────
function makeQs() {
  return shuffle(ALPHABET).slice(0,8).map(correct => {
    const w = shuffle(ALPHABET.filter(l => l.char !== correct.char)).slice(0,3);
    return { correct, options: shuffle([correct,...w]) };
  });
}
function rQuiz(c) {
  if (!S.quizQs.length) S.quizQs = makeQs();
  if (S.quizDone) {
    const r = S.quizHistory.filter(Boolean).length;
    c.innerHTML = `<div class="quiz-area" style="text-align:center">
      <div style="font-size:3.5rem;margin-bottom:9px">${r>=6?'🏆':r>=4?'🌟':'💪'}</div>
      <div style="font-family:'Fredoka One',cursive;font-size:1.8rem;color:#a78bfa;margin-bottom:6px">${r}/8 נכון!</div>
      <p style="color:#6b7280;margin-bottom:15px">${r===8?'מושלם!':r>=6?'כל הכבוד!':'נסי שוב!'}</p>
      <button class="btn btn-purple" onclick="quizRestart()">שחקי שוב</button></div>`;
    return;
  }
  const q = S.quizQs[S.quizIdx];
  c.innerHTML = `<div class="quiz-area">
    <div class="quiz-progress">${Array.from({length:8}).map((_,i) => {
      let cls='q-dot';
      if (i<S.quizHistory.length) cls+=S.quizHistory[i]?' done-correct':' done-wrong';
      else if (i===S.quizIdx) cls+=' current';
      return `<div class="${cls}"></div>`;
    }).join('')}</div>
    <p style="font-size:1.05rem;text-align:center;color:#6b7280;margin-bottom:12px">איזו אות מתחילה המילה?</p>
    <span class="quiz-emoji">${q.correct.emoji}</span>
    <p style="text-align:center;font-weight:700;font-size:1.12rem;margin-bottom:12px;color:#374151">${q.correct.word}</p>
    <div class="quiz-options">${q.options.map(opt => {
      let cls = 'quiz-opt';
      if (S.quizChosen) { if (opt.char===q.correct.char) cls+=' correct'; else if (opt.char===S.quizChosen) cls+=' wrong'; }
      return `<button class="${cls}" ${S.quizChosen?'disabled':''} onclick="qPick('${opt.char}')">${opt.char}</button>`;
    }).join('')}</div>
    <div class="quiz-feedback" style="color:${S.quizChosen?(S.quizChosen===q.correct.char?'#059669':'#dc2626'):'transparent'}">
      ${S.quizChosen?(S.quizChosen===q.correct.char?'🌟 כל הכבוד!':'❌ '+q.correct.char+' כמו '+q.correct.word):'.'}</div>
  </div>`;
}
window.qPick = ch => {
  if (S.quizChosen) return;
  const q = S.quizQs[S.quizIdx]; S.quizChosen = ch;
  const ok = ch === q.correct.char; S.quizHistory = [...S.quizHistory, ok];
  if (ok) { addScore(15); speak('כל הכבוד! '+ch+' כמו '+q.correct.word); playSuccess(); setPose('correct', MSGS.correct); }
  else    { speak('לא נכון. זה '+q.correct.char); playWrong(); setPose('surprise', MSGS.wrong); }
  renderScreen();
  setTimeout(() => {
    if (S.quizIdx+1 >= 8) { S.quizDone=true; if (S.quizHistory.filter(Boolean).length>=6) launchConfetti(true); }
    else { S.quizIdx++; S.quizChosen=null; }
    renderScreen();
  }, 1400);
};
window.quizRestart = () => { S.quizQs=makeQs(); S.quizIdx=0; S.quizChosen=null; S.quizHistory=[]; S.quizDone=false; renderScreen(); };

// ── PAINT ─────────────────────────────────────────────────────────
function rPaint(c) {
  c.innerHTML = `<div class="paint-area">
    <div class="paint-mode-tabs">
      <button class="pmode-btn${S.paintMode==='free'?' active':''}"   onclick="pMode('free')">🖌️ ציור חופשי</button>
      <button class="pmode-btn${S.paintMode==='letter'?' active':''}" onclick="pMode('letter')">🎨 דף צביעה</button>
    </div>
    ${S.paintMode==='letter' ? `
    <div class="letter-picker">${ALPHABET.map((lt,i) =>
      `<div class="lp-card${i===S.paintLetterIdx?' selected':''}" onclick="pLetter(${i})">
        <div class="lp-char" style="color:${['#ef4444','#f97316','#eab308','#22c55e','#06b6d4','#8b5cf6'][i%6]}">${lt.char}</div>
        <div class="lp-word">${lt.word}</div>
      </div>`).join('')}
    </div>` : ''}
    <div class="paint-toolbar">
      <div class="color-palette">${PAINT_COLORS.map(col =>
        `<div class="swatch${S.paintColor===col&&!S.paintEraser?' active':''}"
          style="background:${col};${col==='#f8f9fa'?'border:2px solid #d1d5db':''}"
          onclick="pColor('${col}')"></div>`).join('')}
      </div>
      <div class="tool-sep"></div>
      <div class="brush-row">
        ${[3,7,14,24].map((s,i) => `<button class="bb${S.paintBrush===s?' active':''}" onclick="pBrush(${s})">${['S','M','L','XL'][i]}</button>`).join('')}
      </div>
      <div class="tool-sep"></div>
      <button class="bb${S.paintEraser?' active':''}" onclick="pEraser()" style="font-size:1rem">🧹</button>
    </div>
    <div class="paint-canvas-wrap">
      <canvas id="paint-canvas" width="500" height="310"
        style="width:100%;max-width:500px;height:auto;border:3px solid #e9d5ff;border-radius:14px"></canvas>
    </div>
    <div class="paint-actions">
      <button class="btn btn-gray" onclick="pClear()">🗑️ נקה</button>
      <button class="btn btn-gray" onclick="pUndo()">↩️ בטל</button>
      <button class="btn-save" onclick="pSave()">💾 שמור ציור</button>
    </div>
  </div>`;

  paintCanvas = $('paint-canvas'); paintCtx = paintCanvas.getContext('2d');
  if (S.paintMode === 'letter') setTimeout(() => drawColorPage(), 40);
  else initFreeCanvas();

  paintCanvas.addEventListener('mousedown', pStart); paintCanvas.addEventListener('mousemove', pMove);
  paintCanvas.addEventListener('mouseup', pEnd);     paintCanvas.addEventListener('mouseleave', pEnd);
  paintCanvas.addEventListener('touchstart', pStart, {passive:false});
  paintCanvas.addEventListener('touchmove',  pMove,  {passive:false});
  paintCanvas.addEventListener('touchend',   pEnd,   {passive:false});

  if (S.paintMode === 'letter') {
    setTimeout(() => {
      const sel = document.querySelector('.lp-card.selected');
      if (sel) sel.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
    }, 100);
  }
}

function initFreeCanvas() { paintCtx.fillStyle='white'; paintCtx.fillRect(0,0,paintCanvas.width,paintCanvas.height); paintHistory=[]; }
function drawColorPage() {
  if (!paintCtx || !paintCanvas) return;
  const l = ALPHABET[S.paintLetterIdx];
  const svgStr = makeColorSVG(l);
  const blob = new Blob([svgStr], {type:'image/svg+xml'});
  const url  = URL.createObjectURL(blob);
  const img  = new Image();
  img.onload = () => { paintCtx.clearRect(0,0,paintCanvas.width,paintCanvas.height); paintCtx.drawImage(img,0,0,paintCanvas.width,paintCanvas.height); URL.revokeObjectURL(url); paintHistory=[]; };
  img.src = url;
}
function pPos(e) {
  const r = paintCanvas.getBoundingClientRect(); const sx=paintCanvas.width/r.width, sy=paintCanvas.height/r.height;
  if (e.touches) return { x:(e.touches[0].clientX-r.left)*sx, y:(e.touches[0].clientY-r.top)*sy };
  return { x:(e.clientX-r.left)*sx, y:(e.clientY-r.top)*sy };
}
function pSnap() { if (!paintCanvas) return; paintHistory.push(paintCtx.getImageData(0,0,paintCanvas.width,paintCanvas.height)); if (paintHistory.length>20) paintHistory.shift(); }
function pStart(e) { e.preventDefault(); pSnap(); paintDrawing=true; const p=pPos(e); paintLX=p.x; paintLY=p.y; paintCtx.beginPath(); paintCtx.arc(p.x,p.y,S.paintBrush/2,0,Math.PI*2); paintCtx.fillStyle=S.paintEraser?'#fffef8':S.paintColor; paintCtx.fill(); playPaint(); }
function pMove(e)  { e.preventDefault(); if (!paintDrawing) return; const p=pPos(e); paintCtx.beginPath(); paintCtx.moveTo(paintLX,paintLY); paintCtx.lineTo(p.x,p.y); paintCtx.strokeStyle=S.paintEraser?'#fffef8':S.paintColor; paintCtx.lineWidth=S.paintBrush; paintCtx.lineCap='round'; paintCtx.lineJoin='round'; paintCtx.stroke(); paintLX=p.x; paintLY=p.y; playPaint(); }
function pEnd(e)   { if (e) e.preventDefault(); paintDrawing=false; }

window.pColor  = col => { S.paintColor=col; S.paintEraser=false; playClick(); renderScreen(); };
window.pBrush  = s   => { S.paintBrush=s; playClick(); renderScreen(); };
window.pEraser = ()  => { S.paintEraser=!S.paintEraser; playClick(); renderScreen(); };
window.pMode   = m   => { S.paintMode=m; paintHistory=[]; playClick(); renderScreen(); if (m==='letter') setTimeout(drawColorPage, 60); };
window.pLetter = i   => { S.paintLetterIdx=i; paintHistory=[]; playPop(); renderScreen(); setTimeout(drawColorPage, 60); };
window.pClear  = ()  => { playClick(); paintHistory=[]; if (S.paintMode==='letter') drawColorPage(); else initFreeCanvas(); };
window.pUndo   = ()  => { if (paintHistory.length) { paintCtx.putImageData(paintHistory.pop(),0,0); playClick(); } };
window.pSave   = ()  => {
  const a = document.createElement('a'); a.download='הציור_שלי.png'; a.href=paintCanvas.toDataURL(); a.click();
  addScore(5); playSuccess(); setPose('happy', MSGS.paintSave); launchConfetti();
};

// ── BOOT ──────────────────────────────────────────────────────────
renderWelcome();
