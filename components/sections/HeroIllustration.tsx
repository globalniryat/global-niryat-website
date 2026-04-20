'use client';

// ── Trade-route globe illustration (pure SVG, no JS animation deps) ──
// Centered at (260,260), globe radius 200, viewBox 520×520

const IND = { x: 352, y: 275 }; // India hub position

const ROUTES = [
  { id: 'usa', label: 'USA',       x: 108, y: 192, cpx: 172, cpy: 96,  color: '#4A7FD6', lDelay: '0.3s', dDelay: '1.8s', dDur: '2.8s' },
  { id: 'uk',  label: 'UK',        x: 220, y: 155, cpx: 265, cpy: 90,  color: '#6366F1', lDelay: '0.7s', dDelay: '2.1s', dDur: '2.4s' },
  { id: 'uae', label: 'UAE',       x: 308, y: 250, cpx: 328, cpy: 212, color: '#F58A1F', lDelay: '0.5s', dDelay: '2.0s', dDur: '2.0s' },
  { id: 'sg',  label: 'Singapore', x: 398, y: 320, cpx: 412, cpy: 265, color: '#10B981', lDelay: '1.1s', dDelay: '2.4s', dDur: '2.2s' },
  { id: 'jp',  label: 'Japan',     x: 420, y: 212, cpx: 418, cpy: 155, color: '#A855F7', lDelay: '1.4s', dDelay: '2.6s', dDur: '2.5s' },
];

const LAT = [
  { y: 130, rx: 115, ry: 9  },
  { y: 178, rx: 167, ry: 11 },
  { y: 228, rx: 196, ry: 12 },
  { y: 278, rx: 199, ry: 12 },
  { y: 328, rx: 182, ry: 11 },
  { y: 378, rx: 148, ry: 10 },
  { y: 418, rx: 100, ry:  8 },
];

export default function HeroIllustration() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        aria-label="Global Niryat – Trade route map from India to the World"
      >
        <defs>
          {/* Globe body gradient */}
          <radialGradient id="globeBg" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#1E3E72" />
            <stop offset="55%"  stopColor="#0D1B3E" />
            <stop offset="100%" stopColor="#060D1A" />
          </radialGradient>

          {/* Atmosphere halo */}
          <radialGradient id="atmos" cx="50%" cy="50%" r="50%">
            <stop offset="78%"  stopColor="#4A7FD6" stopOpacity="0"    />
            <stop offset="100%" stopColor="#4A7FD6" stopOpacity="0.22" />
          </radialGradient>

          {/* India glow */}
          <radialGradient id="indGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#F58A1F" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F58A1F" stopOpacity="0"    />
          </radialGradient>

          {/* Per-route line gradients (India=orange → destination color) */}
          {ROUTES.map(r => (
            <linearGradient
              key={`rg-${r.id}`}
              id={`rg-${r.id}`}
              gradientUnits="userSpaceOnUse"
              x1={IND.x} y1={IND.y}
              x2={r.x}   y2={r.y}
            >
              <stop offset="0%"   stopColor="#F58A1F" stopOpacity="0.9" />
              <stop offset="100%" stopColor={r.color} stopOpacity="0.9" />
            </linearGradient>
          ))}

          {/* Soft glow filter */}
          <filter id="fglow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fglow2" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Globe clip */}
          <clipPath id="gc"><circle cx="260" cy="260" r="197" /></clipPath>
        </defs>

        {/* ── Atmosphere ── */}
        <circle cx="260" cy="260" r="228" fill="url(#atmos)" />
        <circle cx="260" cy="260" r="212" fill="none" stroke="rgba(74,127,214,0.09)" strokeWidth="1" />
        <circle cx="260" cy="260" r="205" fill="none" stroke="rgba(74,127,214,0.13)" strokeWidth="1.5" />

        {/* ── Globe body ── */}
        <circle cx="260" cy="260" r="200" fill="url(#globeBg)" />
        <circle cx="260" cy="260" r="200" fill="none"  stroke="rgba(74,127,214,0.32)" strokeWidth="1.5" />

        {/* ── Latitude grid ── */}
        <g clipPath="url(#gc)" opacity="0.16">
          {LAT.map(({ y, rx, ry }) => (
            <ellipse key={y} cx="260" cy={y} rx={rx} ry={ry} fill="none" stroke="#4A7FD6" strokeWidth="0.7" />
          ))}
          {/* Meridian curves */}
          {[
            'M 260 62 Q 130 150 122 260 Q 130 370 260 458',
            'M 260 62 Q 200 150 196 260 Q 200 370 260 458',
            'M 260 62 Q 260 150 260 260 Q 260 370 260 458',
            'M 260 62 Q 322 150 325 260 Q 322 370 260 458',
            'M 260 62 Q 390 150 395 260 Q 390 370 260 458',
          ].map((d, i) => (
            <path key={i} d={d} fill="none" stroke="#4A7FD6" strokeWidth="0.7" />
          ))}
        </g>

        {/* ── Continent blobs (opaque paint, clipped) ── */}
        <g clipPath="url(#gc)">
          {/* Europe */}
          <ellipse cx="235" cy="168" rx="42" ry="30" transform="rotate(-12 235 168)" fill="#2359A4" opacity="0.12" />
          {/* Africa */}
          <ellipse cx="245" cy="305" rx="35" ry="55" transform="rotate(4 245 305)"   fill="#2359A4" opacity="0.10" />
          {/* Middle East */}
          <ellipse cx="308" cy="238" rx="28" ry="22" transform="rotate(8 308 238)"   fill="#4A7FD6" opacity="0.12" />
          {/* India — highlighted in orange tint */}
          <ellipse cx={IND.x} cy={IND.y} rx="27" ry="38" transform={`rotate(-5 ${IND.x} ${IND.y})`} fill="#F58A1F" opacity="0.14" />
          {/* SE Asia */}
          <ellipse cx="400" cy="308" rx="24" ry="22" transform="rotate(14 400 308)"  fill="#4A7FD6" opacity="0.10" />
          {/* East Asia */}
          <ellipse cx="415" cy="220" rx="30" ry="26" transform="rotate(-8 415 220)"  fill="#4A7FD6" opacity="0.10" />
          {/* Americas */}
          <ellipse cx="110" cy="222" rx="28" ry="55" transform="rotate(-8 110 222)"  fill="#2359A4" opacity="0.10" />
        </g>

        {/* ── Equator dashed line ── */}
        <ellipse cx="260" cy="263" rx="200" ry="13"
          fill="none" stroke="rgba(74,127,214,0.22)" strokeWidth="0.8" strokeDasharray="5 7"
          clipPath="url(#gc)"
        />

        {/* ═══════════════════════════════════════
            ROUTE PATHS
            Layer 1: ghost dashed background
            Layer 2: animated draw-in (pathLength=1)
            Layer 3: flowing dash animation overlay
            ═══════════════════════════════════════ */}
        {ROUTES.map(r => {
          const d = `M ${IND.x} ${IND.y} Q ${r.cpx} ${r.cpy} ${r.x} ${r.y}`;
          return (
            <g key={r.id}>
              {/* Ghost */}
              <path d={d} stroke={r.color} strokeWidth="1" strokeOpacity="0.15" strokeDasharray="5 9" />

              {/* Draw-in */}
              <path
                id={`rt-${r.id}`}
                d={d}
                stroke={`url(#rg-${r.id})`}
                strokeWidth="1.8"
                strokeLinecap="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
              >
                <animate attributeName="stroke-dashoffset" from="1" to="0"
                  dur="1.1s" begin={r.lDelay} fill="freeze" />
              </path>

              {/* Flowing dash */}
              <path
                d={d}
                stroke={r.color}
                strokeWidth="1"
                strokeOpacity="0.45"
                strokeDasharray="4 14"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-18"
                  dur="1.4s" begin="0s" repeatCount="indefinite" />
              </path>

              {/* ── Traveling dot ── */}
              <circle r="4" fill={r.color} filter="url(#fglow2)">
                <animateMotion dur={r.dDur} begin={r.dDelay} repeatCount="indefinite">
                  <mpath href={`#rt-${r.id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1"
                  dur={r.dDur} begin={r.dDelay} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}

        {/* ═══════════════════
            DESTINATION NODES
            ═══════════════════ */}
        {ROUTES.map((r, i) => (
          <g key={`node-${r.id}`}>
            {/* Soft halo */}
            <circle cx={r.x} cy={r.y} r="14" fill={r.color} opacity="0.12" />
            <circle cx={r.x} cy={r.y} r="9"  fill={r.color} opacity="0.20" />
            {/* Core */}
            <circle cx={r.x} cy={r.y} r="5"  fill={r.color} filter="url(#fglow2)" />
            {/* Pulse ring */}
            <circle cx={r.x} cy={r.y} r="5" fill="none" stroke={r.color} strokeWidth="1.5" opacity="0.6">
              <animate attributeName="r"       values="5;16;5"     dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6"  dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            {/* Label */}
            <text x={r.x} y={r.y - 18} textAnchor="middle"
              fontSize="9" fontWeight="700" fill={r.color}
              fontFamily="Poppins, sans-serif" opacity="0.9"
            >{r.label}</text>
          </g>
        ))}

        {/* ═══════════════════
            INDIA HUB
            ═══════════════════ */}
        {/* Large soft glow */}
        <circle cx={IND.x} cy={IND.y} r="44" fill="url(#indGlow)" />
        {/* Pulse rings */}
        <circle cx={IND.x} cy={IND.y} r="17" fill="none" stroke="#F58A1F" strokeWidth="1.5" opacity="0.45">
          <animate attributeName="r"       values="17;36;17"    dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.45;0;0.45" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx={IND.x} cy={IND.y} r="12" fill="none" stroke="#F58A1F" strokeWidth="1" opacity="0.3">
          <animate attributeName="r"       values="12;24;12"    dur="2.2s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3"   dur="2.2s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        {/* Core dot */}
        <circle cx={IND.x} cy={IND.y} r="8"  fill="#F58A1F" filter="url(#fglow)" />
        <circle cx={IND.x} cy={IND.y} r="4.5" fill="white" />
        {/* India pill label */}
        <rect x={IND.x - 28} y={IND.y + 14} width="56" height="18" rx="9" fill="#F58A1F" />
        <text x={IND.x} y={IND.y + 26.5} textAnchor="middle"
          fontSize="8.5" fontWeight="700" fill="white"
          fontFamily="Poppins, sans-serif" letterSpacing="0.5"
        >INDIA</text>

        {/* ═══════════════════════
            FLOATING TECH BADGES
            (outside globe edges)
            ═══════════════════════ */}
        {/* ⚡ AI Dev – top left */}
        <g opacity="0.92">
          <rect x="20" y="105" width="82" height="30" rx="15" fill="rgba(35,89,164,0.88)" stroke="rgba(74,127,214,0.55)" strokeWidth="1" />
          <text x="61" y="124" textAnchor="middle" fontSize="11" fontWeight="600" fill="white" fontFamily="Poppins, sans-serif">⚡ AI Dev</text>
          <animate attributeName="opacity" values="0.92;0.75;0.92" dur="3s" begin="0s" repeatCount="indefinite" />
        </g>
        {/* 📦 Export – mid left */}
        <g opacity="0.88">
          <rect x="8" y="250" width="82" height="30" rx="15" fill="rgba(99,102,241,0.88)" stroke="rgba(99,102,241,0.5)" strokeWidth="1" />
          <text x="49" y="269" textAnchor="middle" fontSize="11" fontWeight="600" fill="white" fontFamily="Poppins, sans-serif">📦 Export</text>
          <animate attributeName="opacity" values="0.88;0.7;0.88" dur="3.4s" begin="0.5s" repeatCount="indefinite" />
        </g>
        {/* 🎓 LMS – top right */}
        <g opacity="0.92">
          <rect x="418" y="98" width="82" height="30" rx="15" fill="rgba(245,138,31,0.88)" stroke="rgba(245,138,31,0.5)" strokeWidth="1" />
          <text x="459" y="117" textAnchor="middle" fontSize="11" fontWeight="600" fill="white" fontFamily="Poppins, sans-serif">🎓 LMS</text>
          <animate attributeName="opacity" values="0.92;0.72;0.92" dur="3.8s" begin="1s" repeatCount="indefinite" />
        </g>
        {/* 🛒 Commerce – bottom right */}
        <g opacity="0.88">
          <rect x="408" y="378" width="96" height="30" rx="15" fill="rgba(16,185,129,0.88)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
          <text x="456" y="397" textAnchor="middle" fontSize="11" fontWeight="600" fill="white" fontFamily="Poppins, sans-serif">🛒 Commerce</text>
          <animate attributeName="opacity" values="0.88;0.68;0.88" dur="4s" begin="1.5s" repeatCount="indefinite" />
        </g>
        {/* India → World – bottom left */}
        <g opacity="0.80">
          <rect x="12" y="372" width="100" height="28" rx="14" fill="rgba(13,15,26,0.92)" stroke="rgba(245,138,31,0.38)" strokeWidth="1" />
          <text x="62" y="390" textAnchor="middle" fontSize="10" fontWeight="600" fill="#F58A1F" fontFamily="Poppins, sans-serif">India → World</text>
          <animate attributeName="opacity" values="0.80;0.55;0.80" dur="4.5s" begin="0.8s" repeatCount="indefinite" />
        </g>

        {/* ── Subtle sparkle dots around globe ── */}
        {[[78, 310], [450, 290], [200, 95], [340, 435], [135, 148]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2" fill="white" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur={`${2 + i * 0.6}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  );
}
