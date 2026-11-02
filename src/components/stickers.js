// Publication stickers. To add one for a new paper, follow STICKER_PROMPT.md in this folder.
import { useRef, useState } from "react";

const INK = "#2b1600";
const O = "#f26b3a";
const Y = "#ffd166";
const M = "#8fdcc0";
const B = "#8db7f5";
const P = "#f4a3c4";
const C = "#fff0c9";
const W = "#ffffff";

const spark = (x, y, r) => {
  const q = r * 0.25;
  return `M${x} ${y - r} L${x + q} ${y - q} L${x + r} ${y} L${x + q} ${y + q} L${x} ${y + r} L${x - q} ${y + q} L${x - r} ${y} L${x - q} ${y - q} Z`;
};

const Sparkle = ({ x, y, r, fill = INK }) => (
  <path d={spark(x, y, r)} fill={fill} strokeWidth="1.5" />
);

const ICONS = {
  maru: () => (
    <>
      <rect x="8" y="12" width="40" height="32" rx="4" fill={C} />
      <path d="M8 16 Q8 12 12 12 H22 V44 H12 Q8 44 8 40 Z" fill={M} />
      <path d="M28 21 H42 M28 28 H38 M28 35 H42" />
      <circle cx="47" cy="46" r="9" fill={O} />
      <circle cx="47" cy="46" r="2.5" fill={INK} />
    </>
  ),
  ideablocks: () => (
    <>
      <rect x="8" y="38" width="22" height="18" rx="2" fill={Y} />
      <rect x="32" y="38" width="22" height="18" rx="2" fill={B} />
      <g transform="rotate(-10 28 24)">
        <rect x="16" y="14" width="24" height="19" rx="2" fill={O} />
      </g>
      <Sparkle x={52} y={14} r={8} />
    </>
  ),
  clearfairy: () => (
    <>
      <path d="M50 20 Q62 8 62 22 Q60 30 50 28" fill={C} />
      <path d="M8 14 Q8 9 13 9 H45 Q50 9 50 14 V34 Q50 39 45 39 H30 L19 50 V39 H13 Q8 39 8 34 Z" fill={P} />
      <path d="M25 21 Q25 16 30 16 Q35 16 35 21 Q35 24 30 26 V28" />
      <circle cx="30" cy="33" r="1.3" fill={INK} />
    </>
  ),
  feedometer: () => (
    <>
      <path d="M7 46 A25 25 0 0 1 57 46 Z" fill={C} />
      <path d="M13 36 L17 38 M32 22 V27 M51 36 L47 38" />
      <path d="M32 46 L44 27" strokeWidth="4" />
      <circle cx="32" cy="46" r="5" fill={O} />
      <path d="M5 52 H59" />
    </>
  ),
  onboarding: () => (
    <>
      <path d="M8 26 Q2 32 8 40" />
      <path d="M56 26 Q62 32 56 40" />
      <rect x="6" y="22" width="52" height="26" rx="11" fill={B} />
      <circle cx="22" cy="35" r="7" fill={W} />
      <circle cx="42" cy="35" r="7" fill={W} />
      <circle cx="22" cy="35" r="2.5" fill={INK} />
      <circle cx="42" cy="35" r="2.5" fill={INK} />
      <Sparkle x={32} y={10} r={7} fill={Y} />
    </>
  ),
  creativeconnect: () => (
    <>
      <g transform="rotate(-8 17 21)">
        <rect x="6" y="9" width="23" height="23" rx="3" fill={Y} />
        <circle cx="14" cy="17" r="3" fill={O} />
      </g>
      <g transform="rotate(8 46 43)">
        <rect x="35" y="32" width="23" height="23" rx="3" fill={P} />
        <path d="M38 50 L44 42 L49 48 L52 44 L56 50" />
      </g>
      <path d="M24 38 Q30 46 38 38" strokeDasharray="1 5" />
      <Sparkle x={50} y={14} r={8} fill={O} />
    </>
  ),
  genquery: () => (
    <g transform="translate(32 32) scale(0.82) translate(-32 -32)">
      <path d="M40 40 L56 56" strokeWidth="6" />
      <circle cx="26" cy="26" r="18" fill={C} />
      <Sparkle x={26} y={26} r={10} fill={O} />
      <Sparkle x={52} y={12} r={5} />
    </g>
  ),
  tacit: () => (
    <>
      <path d="M21 30 L11 40 L16 53 L31 59 L47 53 L53 40 L42 30 Z" fill="#cfe4fb" />
      <path d="M21 30 L31 8 L42 30 Z" fill={W} />
      <path d="M4 30 Q8 26 12 30 T20 30 M44 30 Q48 26 52 30 T60 30" />
    </>
  ),
  surch: () => (
    <g transform="translate(32 32) scale(0.82) translate(-32 -32)">
      <path d="M30 46 L19 53 M34 46 L45 53" />
      <rect x="6" y="6" width="52" height="32" rx="4" fill={C} />
      <path d="M26 14 L40 22 L26 30 Z" fill={O} />
      <circle cx="32" cy="46" r="4.5" fill={Y} />
      <circle cx="17" cy="56" r="4" fill={M} />
      <circle cx="47" cy="56" r="4" fill={B} />
    </g>
  ),
  stylette: () => (
    <>
      <path d="M40 6 L58 24 L51 31 L33 13 Z" fill={Y} />
      <path d="M33 13 L51 31 Q34 52 12 46 Q14 28 33 13 Z" fill={P} />
      <path d="M6 58 Q18 51 30 58 T54 58" stroke={O} strokeWidth="4" />
    </>
  ),
  regret: () => (
    <>
      <rect x="15" y="5" width="34" height="54" rx="8" fill={C} />
      <path d="M28 11 H36" />
      <circle cx="26" cy="27" r="2" fill={INK} />
      <circle cx="38" cy="27" r="2" fill={INK} />
      <path d="M25 41 Q32 33 39 41" />
      <path d="M22 25 L29 22 M42 25 L35 22" />
    </>
  ),
  prototrace: () => (
    <>
      <path d="M10 48 Q18 14 32 34 T52 20" strokeDasharray="2 6" />
      <circle cx="10" cy="48" r="6" fill={M} />
      <circle cx="32" cy="34" r="6" fill={Y} />
      <path d="M52 20 V5" />
      <path d="M52 5 L62 9 L52 14 Z" fill={O} />
    </>
  ),
  thematicplane: () => (
    <>
      <path d="M6 48 L18 18 H58 L46 48 Z" fill={C} />
      <path d="M33 18 L26 48 M12 33 H52" strokeWidth="1.8" />
      <circle cx="36" cy="33" r="6" fill={O} />
      <Sparkle x={50} y={9} r={6} />
    </>
  ),
  expandora: () => (
    <>
      <path d="M24 25 L14 18 M40 25 L50 18 M24 39 L14 46 M40 39 L50 46" />
      <circle cx="32" cy="32" r="10" fill={Y} />
      <circle cx="10" cy="14" r="6" fill={P} />
      <circle cx="54" cy="14" r="6" fill={M} />
      <circle cx="10" cy="50" r="6" fill={B} />
      <circle cx="54" cy="50" r="6" fill={O} />
    </>
  ),
  humanagent: () => (
    <>
      <circle cx="19" cy="36" r="13" fill={Y} />
      <circle cx="14" cy="33" r="1.7" fill={INK} />
      <circle cx="24" cy="33" r="1.7" fill={INK} />
      <path d="M13 40 Q19 46 25 40" />
      <path d="M46 24 V14" />
      <circle cx="46" cy="12" r="3" fill={O} />
      <rect x="34" y="24" width="25" height="22" rx="5" fill={B} />
      <rect x="39" y="32" width="5" height="5" fill={INK} />
      <rect x="49" y="32" width="5" height="5" fill={INK} />
      <path d="M41 42 H52" />
    </>
  ),
  audilens: () => (
    <>
      <path d="M9 20 Q4 29 9 38 M55 20 Q60 29 55 38" />
      <rect x="24" y="5" width="16" height="30" rx="8" fill={O} />
      <path d="M28 14 H36 M28 20 H36" />
      <path d="M16 29 Q16 46 32 46 Q48 46 48 29" />
      <path d="M32 46 V55 M22 58 H42" />
    </>
  ),
  roboticvideo: () => (
    <>
      <path d="M5 58 H32" />
      <path d="M16 58 V42 L32 26 L44 32" strokeWidth="9" />
      <path d="M16 58 V42 L32 26 L44 32" stroke={Y} strokeWidth="4.5" />
      <path d="M44 32 L52 25 M44 32 L54 39" />
      <circle cx="16" cy="42" r="4.5" fill={O} />
      <circle cx="32" cy="26" r="4.5" fill={O} />
      <rect x="38" y="46" width="21" height="14" rx="3" fill={C} />
      <path d="M46 49 L52 53 L46 57 Z" fill={INK} strokeWidth="1.2" />
    </>
  ),
  tasteply: () => (
    <>
      <circle cx="20" cy="22" r="14" fill={P} />
      <circle cx="20" cy="22" r="6.5" fill={Y} />
      <circle cx="47" cy="24" r="10" fill={M} />
      <circle cx="47" cy="24" r="4" fill={C} />
      <path d="M24 36 L24 58 L30 52 L35 61 L39 59 L34 50 L42 50 Z" fill={W} />
    </>
  ),
  coral: () => {
    const d = "M32 58 V38 M32 46 L19 33 V19 M32 40 L46 26 V12 M19 28 L11 20 M46 22 L54 14";
    return (
      <>
        <path d={d} strokeWidth="10" />
        <path d={d} stroke={P} strokeWidth="5" />
        <path d="M18 58 H46" />
        <circle cx="19" cy="17" r="3.5" fill={Y} />
        <circle cx="46" cy="10" r="3.5" fill={Y} />
        <circle cx="11" cy="19" r="3" fill={Y} />
        <circle cx="54" cy="13" r="3" fill={Y} />
      </>
    );
  },
  cleo: () => (
    <>
      <path d="M6 6 L6 38 L15 30 L21 43 L27 40 L21 28 L34 28 Z" fill={Y} />
      <g transform="translate(24 18)">
        <path d="M6 6 L6 38 L15 30 L21 43 L27 40 L21 28 L34 28 Z" fill={B} />
      </g>
      <Sparkle x={52} y={10} r={6} fill={O} />
    </>
  ),
};

const RULES = [
  ["Maru", "maru"],
  ["IdeaBlocks", "ideablocks"],
  ["ClearFairy", "clearfairy"],
  ["Feed-O-Meter", "feedometer"],
  ["A Context-Aware Onboarding", "onboarding"],
  ["CreativeConnect", "creativeconnect"],
  ["GenQuery", "genquery"],
  ["Demystifying Tacit", "tacit"],
  ["Surch", "surch"],
  ["Stylette", "stylette"],
  ["Reflect, not Regret", "regret"],
  ["Supporting Design Reasoning", "prototrace"],
  ["ThematicPlane", "thematicplane"],
  ["Expandora", "expandora"],
  ["Unveiling Disparities", "humanagent"],
  ["AudiLens", "audilens"],
  ["Techniques for Semantic", "roboticvideo"],
  ["Tasteply", "tasteply"],
  ["CORAL", "coral"],
  ["When to Hand Off", "cleo"],
];


// Drag state lives in memory only, so a refresh puts every sticker back in place.
export function useDraggable() {
  const start = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const moved = pos.x !== 0 || pos.y !== 0;

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, x: pos.x, y: pos.y };
    setDragging(true);
    e.preventDefault();
  };
  const onPointerMove = (e) => {
    if (!start.current) return;
    setPos({
      x: start.current.x + e.clientX - start.current.px,
      y: start.current.y + e.clientY - start.current.py,
    });
  };
  const onPointerEnd = () => {
    start.current = null;
    setDragging(false);
  };

  return {
    dragging,
    moved,
    style: { "--dx": `${pos.x}px`, "--dy": `${pos.y}px` },
    dragProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: onPointerEnd,
      onPointerCancel: onPointerEnd,
    },
  };
}

export function PubSticker({ title }) {
  const drag = useDraggable();
  const rule = RULES.find(([prefix]) => title.includes(prefix));
  if (!rule) return null;
  const Icon = ICONS[rule[1]];
  const cls = `pub-sticker${drag.dragging ? " dragging" : ""}${drag.moved ? " moved" : ""}`;
  return (
    <svg className={cls} style={drag.style} {...drag.dragProps} viewBox="0 0 64 64" aria-hidden="true">
      <g className="pub-sticker-outline" strokeLinecap="round" strokeLinejoin="round">
        <Icon />
      </g>
      <g
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Icon />
      </g>
    </svg>
  );
}

// A friendly face next to the name in the About section.
const WaveFriend = () => (
  <>
    <circle cx="32" cy="38" r="22" fill={Y} />
    <path d="M24 32 V38 M40 32 V38" strokeWidth="3.5" />
    <path d="M24 47 Q32 55 40 47" />
    <circle cx="18" cy="45" r="3.2" fill={P} strokeWidth="0" />
    <circle cx="46" cy="45" r="3.2" fill={P} strokeWidth="0" />
    <Sparkle x={11} y={12} r={7} fill={O} />
  </>
);

export function WaveSticker() {
  const drag = useDraggable();
  const cls = `wave-sticker${drag.dragging ? " dragging" : ""}`;
  return (
    <svg className={cls} style={drag.style} {...drag.dragProps} viewBox="0 0 64 64" aria-hidden="true">
      <g className="pub-sticker-outline" strokeLinecap="round" strokeLinejoin="round">
        <WaveFriend />
      </g>
      <g fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <WaveFriend />
      </g>
    </svg>
  );
}
