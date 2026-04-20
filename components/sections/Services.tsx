'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Check } from 'lucide-react';

const TABS = ['AI & Software', 'E-Commerce', 'Enterprise LMS'];

const AI_FEATURES = ['Web & Mobile Apps', 'AI/ML Platforms', 'CRM Systems', 'API Integrations', 'Cloud Architecture', 'Data Analytics'];
const COMMERCE_CATS = [
  { name: 'Electronics', tag: 'Trending', col: '#2359A4' },
  { name: 'Health & Beauty', tag: 'Viral', col: '#F58A1F' },
  { name: 'Eco Lifestyle', tag: 'Hot 🔥', col: '#6366F1' },
  { name: 'Fitness Gear', tag: 'Popular', col: '#A855F7' },
  { name: 'Home & Kitchen', tag: 'New', col: '#F58A1F' },
  { name: 'Fashion', tag: 'Trending', col: '#2359A4' },
];
const LMS_FEATURES = [
  'Course Builder', 'Video Streaming', 'Razorpay + Stripe', 'White Label',
  'Analytics Dashboard', 'Certificates', 'Mobile App', 'AI Recommendations',
];

export default function Services() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 relative"
      style={{ background: '#0D0F1A' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(35,89,164,0.12) 0%, transparent 60%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span
            className="text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full inline-block mb-5"
            style={{ background: 'rgba(245,138,31,0.1)', color: '#F58A1F', border: '1px solid rgba(245,138,31,0.2)', fontFamily: 'var(--font-mono)' }}
          >What We Do</span>
          <h2
            className="font-black leading-tight tracking-tight"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(30px, 3.5vw, 48px)', color: 'white' }}
          >
            One Vision,{' '}
            <span style={{ background: 'linear-gradient(135deg, #F58A1F, #FF6B35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Three Engines
            </span>
          </h2>
        </motion.div>

        {/* Tab pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex justify-center mb-12 gap-2 flex-wrap"
        >
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className="relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                fontFamily: 'var(--font-syne)',
                background: active === i
                  ? i === 2
                    ? 'linear-gradient(135deg, #F58A1F, #E84393)'
                    : 'linear-gradient(135deg, #2359A4, #4A7FD6)'
                  : 'rgba(255,255,255,0.05)',
                color: active === i ? '#fff' : 'rgba(255,255,255,0.5)',
                border: active === i ? 'none' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: active === i ? (i === 2 ? '0 4px 20px rgba(245,138,31,0.35)' : '0 4px 20px rgba(35,89,164,0.35)') : 'none',
              }}
            >
              {i === 2 && <Zap size={12} className="inline mr-1" fill="currentColor" />}
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {active === 0 && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
            >
              <div>
                <span className="text-xs text-blue-light font-mono-brand px-3 py-1.5 rounded-full inline-block mb-4" style={{ background: 'rgba(74,127,214,0.1)', border: '1px solid rgba(74,127,214,0.2)', fontFamily: 'var(--font-mono)', color: '#4A7FD6' }}>Custom-built technology solutions</span>
                <h3 className="font-black text-white text-2xl mb-4 font-syne" style={{ fontFamily: 'var(--font-syne)' }}>AI &amp; Software Development</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>We architect and build enterprise-grade software powered by AI. From intelligent automation to predictive analytics, we engineer systems that think, learn, and scale.</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {AI_FEATURES.map(f => (
                    <motion.div
                      key={f}
                      whileHover={{ x: 4, borderColor: 'rgba(245,138,31,0.4)' }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#4A7FD6' }} />
                      <span className="text-sm text-white/70" style={{ fontFamily: 'var(--font-inter)' }}>{f}</span>
                    </motion.div>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, #2359A4, #4A7FD6)', boxShadow: '0 4px 20px rgba(35,89,164,0.4)', fontFamily: 'var(--font-syne)' }}>
                  Start a Project <ArrowRight size={15} />
                </a>
              </div>
              <div className="flex justify-center items-center h-64 rounded-2xl relative overflow-hidden" style={{ background: 'rgba(35,89,164,0.06)', border: '1px solid rgba(35,89,164,0.15)' }}>
                <AISvg />
              </div>
            </motion.div>
          )}

          {active === 1 && (
            <motion.div key="commerce" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-xs px-3 py-1.5 rounded-full inline-block mb-4" style={{ background: 'rgba(245,138,31,0.1)', border: '1px solid rgba(245,138,31,0.2)', color: '#F58A1F', fontFamily: 'var(--font-mono)' }}>Trending Products · Pan-India Delivery</span>
                <h3 className="font-black text-white text-2xl mb-4" style={{ fontFamily: 'var(--font-syne)' }}>E-Commerce &amp; Dropshipping</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-inter)' }}>Through our Shopify store <strong className="text-white">WantNow.in</strong>, we source trending and problem-solving products from global markets and deliver across India via a zero-inventory dropshipping model. Maximum reach, minimal risk.</p>
                <div className="flex gap-8 mb-8">
                  {[['Shopify', 'Powered'], ['Zero', 'Inventory'], ['Pan-India', 'Delivery']].map(([n, l]) => (
                    <div key={l}>
                      <div className="text-xl font-black" style={{ fontFamily: 'var(--font-syne)', color: '#F58A1F' }}>{n}</div>
                      <div className="text-xs text-white/40 mt-1" style={{ fontFamily: 'var(--font-inter)' }}>{l}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-8">
                  {COMMERCE_CATS.map(c => (
                    <div key={c.name} className="p-3 rounded-xl transition-all duration-300 hover:scale-105" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-1.5" style={{ background: `${c.col}22`, color: c.col, fontFamily: 'var(--font-mono)' }}>{c.tag}</div>
                      <div className="text-xs text-white/60" style={{ fontFamily: 'var(--font-inter)' }}>{c.name}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="https://wantnow.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, #F58A1F, #FF6B35)', boxShadow: '0 4px 20px rgba(245,138,31,0.4)', fontFamily: 'var(--font-syne)' }}>
                    Visit WantNow.in <ArrowRight size={15} />
                  </a>
                  <a href="https://www.instagram.com/wantnow.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-syne)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    @wantnow.in
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center h-64 rounded-2xl relative overflow-hidden" style={{ background: 'rgba(245,138,31,0.04)', border: '1px solid rgba(245,138,31,0.12)' }}>
                <CommerceSvg />
              </div>
            </motion.div>
          )}

          {active === 2 && (
            <motion.div key="lms" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="lms-glow text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-5" style={{ background: 'rgba(245,138,31,0.12)', border: '1px solid rgba(245,138,31,0.4)', color: '#F58A1F', fontFamily: 'var(--font-mono)' }}>
                  <Zap size={11} fill="#F58A1F" /> Ready to Deploy — Live in 2 Weeks
                </span>
                <h3 className="font-black text-white text-2xl mb-4 font-syne" style={{ fontFamily: 'var(--font-syne)' }}>The Fastest Path to Enterprise Learning</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-inter)' }}>A production-ready LMS, fully white-labeled and deployable in record time. Your brand, your students, your revenue — in 2 weeks flat.</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {LMS_FEATURES.map(f => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-white/70" style={{ fontFamily: 'var(--font-inter)' }}>
                      <Check size={14} style={{ color: '#F58A1F', flexShrink: 0 }} /> {f}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #F58A1F, #E84393)', boxShadow: '0 6px 28px rgba(245,138,31,0.45)', fontFamily: 'var(--font-syne)' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 10px 40px rgba(232,67,147,0.5)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 6px 28px rgba(245,138,31,0.45)'}
                >
                  Book a Free LMS Demo <ArrowRight size={16} />
                </a>
              </div>
              <div className="h-72 rounded-2xl overflow-hidden relative" style={{ background: 'rgba(13,27,62,0.8)', border: '1px solid rgba(245,138,31,0.2)' }}>
                <LMSMockup />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function AISvg() {
  const nodes = [
    // Input layer
    { cx: 42, cy: 50,  r: 9,  color: '#4A7FD6', layer: 0 },
    { cx: 42, cy: 100, r: 9,  color: '#4A7FD6', layer: 0 },
    { cx: 42, cy: 150, r: 9,  color: '#4A7FD6', layer: 0 },
    // Hidden layer 1
    { cx: 120, cy: 70,  r: 11, color: '#6366F1', layer: 1 },
    { cx: 120, cy: 120, r: 11, color: '#6366F1', layer: 1 },
    { cx: 120, cy: 168, r: 11, color: '#6366F1', layer: 1 },
    // Hidden layer 2
    { cx: 198, cy: 80,  r: 11, color: '#A855F7', layer: 2 },
    { cx: 198, cy: 130, r: 11, color: '#A855F7', layer: 2 },
    { cx: 198, cy: 178, r: 11, color: '#A855F7', layer: 2 },
    // Output
    { cx: 272, cy: 100, r: 14, color: '#F58A1F', layer: 3 },
    { cx: 272, cy: 155, r: 14, color: '#F58A1F', layer: 3 },
  ];

  // Connections: [fromIdx, toIdx]
  const edges = [
    [0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],
    [3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8],
    [6,9],[6,10],[7,9],[7,10],[8,9],[8,10],
  ];

  const pulses = [
    { path: 'M42,50 Q80,62 120,70',   dur: '2.1s', begin: '0s',    col: '#4A7FD6' },
    { path: 'M42,100 Q80,110 120,120', dur: '2.3s', begin: '0.5s',  col: '#4A7FD6' },
    { path: 'M42,150 Q80,160 120,168', dur: '2.5s', begin: '1s',    col: '#6366F1' },
    { path: 'M120,70 Q158,75 198,80',  dur: '2s',   begin: '0.8s',  col: '#6366F1' },
    { path: 'M120,120 Q158,125 198,130',dur:'2.2s', begin: '0.3s',  col: '#A855F7' },
    { path: 'M198,80 Q235,90 272,100', dur: '1.8s', begin: '1.2s',  col: '#F58A1F' },
    { path: 'M198,130 Q235,142 272,155',dur:'2s',   begin: '0.6s',  col: '#F58A1F' },
  ];

  return (
    <svg width="300" height="210" viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="ng">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ng2">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Layer labels */}
      {[['Input',42],['Hidden',120],['Hidden',198],['Output',272]].map(([lbl,x],i) => (
        <text key={i} x={x as number} y="198" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.25)"
          fontFamily="Poppins,sans-serif">{lbl}</text>
      ))}

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const na = nodes[a], nb = nodes[b];
        return (
          <line key={i}
            x1={na.cx} y1={na.cy} x2={nb.cx} y2={nb.cy}
            stroke={na.color} strokeWidth="0.6" opacity="0.18"
          />
        );
      })}

      {/* Animated pulse paths */}
      {pulses.map((p, i) => (
        <g key={i}>
          <path id={`np-${i}`} d={p.path} fill="none" stroke="none"/>
          <circle r="3.5" fill={p.col} filter="url(#ng)">
            <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite">
              <mpath href={`#np-${i}`}/>
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1"
              dur={p.dur} begin={p.begin} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r={n.r + 5} fill={n.color} opacity="0.08"/>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={`${n.color}22`} stroke={n.color} strokeWidth="1.5" filter="url(#ng)"/>
          {n.layer === 3 && (
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="none" stroke={n.color} strokeWidth="1" opacity="0.5">
              <animate attributeName="r" values={`${n.r};${n.r+6};${n.r}`} dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
            </circle>
          )}
        </g>
      ))}

      {/* Output labels */}
      <text x="272" y="100" textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="white" fontWeight="700"
        fontFamily="Poppins,sans-serif">AI</text>
      <text x="272" y="155" textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="white" fontWeight="600"
        fontFamily="Poppins,sans-serif">AUTO</text>
    </svg>
  );
}

function CommerceSvg() {
  return (
    <svg width="380" height="210" viewBox="0 0 380 210" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cg"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="track" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#2359A4" stopOpacity="0.3"/>
          <stop offset="50%"  stopColor="#F58A1F" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.3"/>
        </linearGradient>
      </defs>

      {/* Track line — SOURCE center (46) → INDIA center (334) */}
      <line x1="46" y1="88" x2="334" y2="88" stroke="url(#track)" strokeWidth="1.5" strokeDasharray="5 7"/>

      {/* ── 1. SOURCE (Globe) cx=46 ── */}
      <circle cx="46" cy="88" r="30" fill="rgba(35,89,164,0.1)" stroke="#2359A4" strokeWidth="1.5"/>
      <circle cx="46" cy="88" r="30" fill="none" stroke="#4A7FD6" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.35">
        <animateTransform attributeName="transform" type="rotate" from="0 46 88" to="360 46 88" dur="14s" repeatCount="indefinite"/>
      </circle>
      <circle cx="46" cy="86" r="11" fill="none" stroke="#4A7FD6" strokeWidth="1.4"/>
      <ellipse cx="46" cy="86" rx="5" ry="11" fill="none" stroke="#4A7FD6" strokeWidth="1" opacity="0.6"/>
      <line x1="35" y1="86" x2="57" y2="86" stroke="#4A7FD6" strokeWidth="1" opacity="0.6"/>
      <text x="46" y="106" textAnchor="middle" fontSize="7.5" fill="#4A7FD6" fontFamily="Poppins,sans-serif" fontWeight="700" letterSpacing="0.5">SOURCE</text>

      {/* ── Pulse dot 1: gap 76→108 ── */}
      <path id="p1" d="M78,88 L108,88" fill="none"/>
      <circle r="4" fill="#F58A1F" filter="url(#cg)">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="0s"><mpath href="#p1"/></animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="1.6s" repeatCount="indefinite"/>
      </circle>

      {/* ── 2. SHOPIFY rect x=110, w=58, center=139 ── */}
      <rect x="110" y="60" width="58" height="56" rx="12" fill="rgba(150,191,90,0.08)" stroke="#96BF5A" strokeWidth="1.5"/>
      <path d="M126 76h26l-3 18h-20l-3-18z" fill="none" stroke="#96BF5A" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M130 76c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="none" stroke="#96BF5A" strokeWidth="1.3"/>
      <text x="139" y="122" textAnchor="middle" fontSize="7" fill="#96BF5A" fontFamily="Poppins,sans-serif" fontWeight="700" letterSpacing="0.3">SHOPIFY</text>

      {/* ── Pulse dot 2: gap 170→202 ── */}
      <path id="p2" d="M170,88 L202,88" fill="none"/>
      <circle r="4" fill="#A855F7" filter="url(#cg)">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="0.8s"><mpath href="#p2"/></animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="1.6s" repeatCount="indefinite" begin="0.8s"/>
      </circle>

      {/* ── 3. DELIVER rect x=204, w=56, center=232 ── */}
      <rect x="204" y="62" width="56" height="52" rx="12" fill="rgba(245,138,31,0.08)" stroke="#F58A1F" strokeWidth="1.5"/>
      {/* Truck body */}
      <rect x="211" y="76" width="24" height="16" rx="2" fill="none" stroke="#F58A1F" strokeWidth="1.3"/>
      {/* Truck cab */}
      <path d="M235 80h9l4 6v10h-13V80z" fill="none" stroke="#F58A1F" strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Wheels */}
      <circle cx="217" cy="94" r="2.5" fill="#F58A1F" opacity="0.8"/>
      <circle cx="242" cy="94" r="2.5" fill="#F58A1F" opacity="0.8"/>
      <text x="232" y="120" textAnchor="middle" fontSize="7" fill="#F58A1F" fontFamily="Poppins,sans-serif" fontWeight="700" letterSpacing="0.3">DELIVER</text>

      {/* ── Pulse dot 3: gap 262→302 ── */}
      <path id="p3" d="M262,88 L302,88" fill="none"/>
      <circle r="4" fill="#10B981" filter="url(#cg)">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="1.5s"><mpath href="#p3"/></animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="1.6s" repeatCount="indefinite" begin="1.5s"/>
      </circle>

      {/* ── 4. INDIA cx=334 ── */}
      <circle cx="334" cy="88" r="30" fill="rgba(16,185,129,0.08)" stroke="#10B981" strokeWidth="1.5"/>
      <circle cx="334" cy="88" r="30" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="30;42;30" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      {/* Location pin */}
      <path d="M334 74c-4.4 0-8 3.6-8 8 0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z" fill="none" stroke="#10B981" strokeWidth="1.4"/>
      <circle cx="334" cy="82" r="2.5" fill="#10B981" opacity="0.8"/>
      <text x="334" y="107" textAnchor="middle" fontSize="7" fill="#10B981" fontFamily="Poppins,sans-serif" fontWeight="700" letterSpacing="0.3">INDIA</text>

      {/* ── Category pills — aligned to icon row edges ── */}
      {([['Gadgets','#4A7FD6',16],['Fashion','#A855F7',153],['Health','#10B981',290]] as [string,string,number][]).map(([lbl,col,x])=>(
        <g key={lbl}>
          <rect x={x} y="148" width="74" height="22" rx="11" fill={`${col}14`} stroke={col} strokeWidth="1"/>
          <circle cx={x+13} cy="159" r="3" fill={col} opacity="0.7"/>
          <text x={x+37} y="163" textAnchor="middle" fontSize="8.5" fill={col} fontFamily="Poppins,sans-serif" fontWeight="600">{lbl}</text>
        </g>
      ))}

      {/* WantNow label — centred on the entire icon row */}
      <text x="190" y="190" textAnchor="middle" fontSize="8" fill="rgba(245,138,31,0.5)" fontFamily="Poppins,sans-serif" fontWeight="600" letterSpacing="0.5">wantnow.in</text>
    </svg>
  );
}

function LMSMockup() {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex gap-1.5 mb-3"><div className="w-2.5 h-2.5 rounded-full bg-red-500/60"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"/><div className="w-2.5 h-2.5 rounded-full bg-green-500/60"/></div>
      <div className="flex flex-1 gap-3 overflow-hidden">
        <div className="w-28 flex flex-col gap-1.5">
          {['Dashboard','Courses','Students','Analytics','Settings'].map((item, i) => (
            <div key={item} className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all" style={{ background: i===0 ? 'rgba(245,138,31,0.2)' : 'transparent', color: i===0 ? '#F58A1F' : 'rgba(255,255,255,0.35)', borderLeft: i===0 ? '2px solid #F58A1F' : '2px solid transparent', fontFamily: 'var(--font-inter)' }}>{item}</div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            {[['2,847','Students','#F58A1F'],['142','Courses','#4A7FD6'],['₹4.2L','Revenue','#A855F7'],['91%','Retention','#10B981']].map(([n,l,c]) => (
              <div key={l} className="rounded-lg p-2.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="font-bold text-sm" style={{ color: c as string, fontFamily: 'var(--font-syne)' }}>{n}</div>
                <div className="text-xs text-white/30 mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>{l}</div>
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-lg p-2.5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="text-xs text-white/40 mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Revenue (12 mo)</div>
            <div className="flex items-end gap-1 h-14">
              {[35,55,42,70,58,85,65,90,72,88,95,82].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(245,138,31,0.6), rgba(245,138,31,0.15))` }}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
