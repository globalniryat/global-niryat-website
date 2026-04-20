'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ShoppingBag, Globe, Truck, Zap } from 'lucide-react';

const FEATURES = [
  { icon: <Globe size={16} />,       text: 'Trending products sourced from global markets (US, UK, Japan)' },
  { icon: <Zap size={16} />,         text: 'Problem-solving products curated for Indian consumers' },
  { icon: <Truck size={16} />,       text: 'Zero-inventory dropshipping — pan-India delivery' },
  { icon: <ShoppingBag size={16} />, text: 'Powered by Shopify — seamless shopping experience' },
];


export default function ECommerce() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="ecommerce"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111827 0%, #0D0F1A 100%)' }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(245,138,31,0.08) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '0', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(35,89,164,0.1) 0%, transparent 65%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span
            className="text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full inline-block mb-5"
            style={{ background: 'rgba(245,138,31,0.1)', color: '#F58A1F', border: '1px solid rgba(245,138,31,0.25)', fontFamily: 'var(--font-mono)' }}
          >E-Commerce · Dropshipping</span>
          <h2
            className="font-black text-white tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Discover <span style={{ background: 'linear-gradient(135deg, #F58A1F, #FF6B35)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>WantNow</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            India&apos;s destination for global trending products — sourced worldwide, delivered to your door.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-16">

          {/* ── Left: Brand info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {/* WantNow logo card */}
            <div
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl mb-8"
              style={{ background: 'rgba(245,138,31,0.08)', border: '1px solid rgba(245,138,31,0.2)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #F58A1F, #FF6B35)', boxShadow: '0 4px 20px rgba(245,138,31,0.4)', fontFamily: 'var(--font-syne)' }}
              >W</div>
              <div>
                <div className="text-xl font-black text-white" style={{ fontFamily: 'var(--font-syne)' }}>
                  WantNow<span style={{ color: '#F58A1F' }}>.in</span>
                </div>
                <div className="text-xs text-white/40" style={{ fontFamily: 'var(--font-mono)' }}>Powered by Shopify · Dropshipping</div>
              </div>
            </div>

            <p className="text-white/55 text-base leading-relaxed mb-8" style={{ fontFamily: 'var(--font-inter)' }}>
              WantNow is our consumer brand under Global Niryat — a Shopify-powered dropshipping store that brings the <strong style={{ color: 'white' }}>latest trending and problem-solving products</strong> from global markets (US, UK, Japan, UAE) directly to Indian consumers. No inventory, no risk — just smart curation and fast delivery.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(245,138,31,0.15)', color: '#F58A1F' }}
                  >{f.icon}</span>
                  <span className="text-sm text-white/60" style={{ fontFamily: 'var(--font-inter)' }}>{f.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://wantnow.in"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: '0 12px 36px rgba(245,138,31,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #F58A1F, #FF6B35)', boxShadow: '0 6px 24px rgba(245,138,31,0.4)', fontFamily: 'var(--font-syne)' }}
              >
                <ShoppingBag size={15} /> Visit WantNow Store <ArrowRight size={14} />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/wantnow.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-syne)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,138,31,0.4)'; (e.currentTarget as HTMLElement).style.color = '#F58A1F'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg> @wantnow.in
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right: SVG illustration ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <WantNowSvg />
          </motion.div>
        </div>

        {/* ── Category Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="mb-16"
        >
          <p className="text-center text-xs text-white/25 uppercase tracking-[0.16em] mb-8" style={{ fontFamily: 'var(--font-mono)' }}>
            Product Categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Gadgets & Tech',   icon: <TechIcon />,    color: '#4A7FD6', bg: 'rgba(74,127,214,0.08)'  },
              { name: 'Health & Fitness', icon: <FitIcon />,     color: '#10B981', bg: 'rgba(16,185,129,0.08)'  },
              { name: 'Home & Kitchen',   icon: <HomeIcon />,    color: '#F58A1F', bg: 'rgba(245,138,31,0.08)'  },
              { name: 'Beauty & Care',    icon: <BeautyIcon />,  color: '#A855F7', bg: 'rgba(168,85,247,0.08)'  },
              { name: 'Outdoor & Travel', icon: <OutdoorIcon />, color: '#6366F1', bg: 'rgba(99,102,241,0.08)'  },
              { name: 'Problem Solvers',  icon: <ToolIcon />,    color: '#EF4444', bg: 'rgba(239,68,68,0.08)'   },
            ].map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.38 + i * 0.06 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default transition-all duration-300"
                style={{ background: cat.bg, border: `1px solid ${cat.color}25` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${cat.color}55`; (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${cat.color}20`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = `1px solid ${cat.color}25`; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}35` }}
                >
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                </div>
                <span className="text-xs font-semibold text-center leading-tight" style={{ color: cat.color, fontFamily: 'var(--font-syne)' }}>
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── How WantNow Works ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-xs text-white/25 uppercase tracking-[0.16em] mb-10" style={{ fontFamily: 'var(--font-mono)' }}>
            How WantNow Works
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
            {/* connecting line desktop */}
            <div className="hidden lg:block absolute top-[38px] left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(90deg, rgba(245,138,31,0.1), rgba(245,138,31,0.4), rgba(245,138,31,0.4), rgba(245,138,31,0.1))' }} />

            {[
              {
                step: '01', title: 'Discover',
                desc: 'We scan global markets — US, UK, Japan, UAE — to spot viral trending products before they hit India.',
                color: '#F58A1F', bg: 'rgba(245,138,31,0.1)',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                  </svg>
                ),
              },
              {
                step: '02', title: 'Curate',
                desc: 'Only problem-solving, high-demand items make the cut. Every product is vetted for quality and market fit.',
                color: '#4A7FD6', bg: 'rgba(74,127,214,0.1)',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ),
              },
              {
                step: '03', title: 'List on Shopify',
                desc: 'Approved products go live on wantnow.in — our Shopify store with fast checkout and secure payments.',
                color: '#96BF5A', bg: 'rgba(150,191,90,0.1)',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 001.98 1.61H19a2 2 0 001.96-1.62L23 6H6"/>
                  </svg>
                ),
              },
              {
                step: '04', title: 'Pan-India Delivery',
                desc: 'Customers order, suppliers ship directly. Zero inventory for us — fast, reliable delivery for them.',
                color: '#10B981', bg: 'rgba(16,185,129,0.1)',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                ),
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col items-center text-center px-4 py-6 mx-2 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = s.bg; (e.currentTarget as HTMLElement).style.borderColor = `${s.color}35`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.025)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; }}
              >
                {/* Step number badge */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-black px-2.5 py-0.5 rounded-full"
                  style={{ background: s.color, color: 'white', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}
                >{s.step}</div>

                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mt-3"
                  style={{ background: s.bg, border: `1px solid ${s.color}35`, color: s.color }}
                >
                  {s.icon}
                </div>

                <h4 className="font-bold text-white text-sm mb-2" style={{ fontFamily: 'var(--font-syne)' }}>{s.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{s.desc}</p>

                {/* Arrow (not on last) */}
                {i < 3 && (
                  <div className="lg:hidden mt-4 text-white/20">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* ── Professional SVG Illustration ── */
function WantNowSvg() {
  return (
    <svg width="380" height="320" viewBox="0 0 380 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="wg">
          <feGaussianBlur stdDeviation="4" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="wg2">
          <feGaussianBlur stdDeviation="8" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F58A1F"/>
          <stop offset="100%" stopColor="#FF6B35"/>
        </linearGradient>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2359A4"/>
          <stop offset="100%" stopColor="#4A7FD6"/>
        </linearGradient>
      </defs>

      {/* ── Globe (world source) — top left ── */}
      <circle cx="72" cy="90" r="52" fill="rgba(35,89,164,0.1)" stroke="#2359A4" strokeWidth="1.5"/>
      <ellipse cx="72" cy="90" rx="20" ry="52" fill="none" stroke="#4A7FD6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
      <ellipse cx="72" cy="90" rx="52" ry="18" fill="none" stroke="#4A7FD6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"/>
      {/* Spin ring */}
      <circle cx="72" cy="90" r="52" fill="none" stroke="#4A7FD6" strokeWidth="0.8" strokeDasharray="5 8" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0 72 90" to="360 72 90" dur="15s" repeatCount="indefinite"/>
      </circle>
      <text x="72" y="87" textAnchor="middle" fontSize="20">🌍</text>
      <text x="72" y="104" textAnchor="middle" fontSize="9" fill="#4A7FD6" fontFamily="Poppins,sans-serif" fontWeight="700">GLOBAL</text>
      <text x="72" y="116" textAnchor="middle" fontSize="8" fill="rgba(74,127,214,0.6)" fontFamily="Poppins,sans-serif">MARKET</text>

      {/* ── Product cards floating around globe ── */}
      {([
        ['US 🇺🇸', 8,   155, '#4A7FD6'],
        ['UK 🇬🇧', 148,  28, '#6366F1'],
        ['JP 🇯🇵', 148, 148, '#A855F7'],
      ] as [string, number, number, string][]).map(([label, x, y, col], i) => (
        <g key={i}>
          <rect x={x} y={y} width={62} height={26} rx="8" fill={`${col}18`} stroke={col} strokeWidth="1"/>
          <text x={x+31} y={y+17} textAnchor="middle" fontSize="9" fill={col} fontFamily="Poppins,sans-serif" fontWeight="600">{label}</text>
        </g>
      ))}

      {/* ── Flow arrow: Globe → Shopify ── */}
      <path id="flow1" d="M126,90 Q190,60 232,110" fill="none" stroke="rgba(245,138,31,0.3)" strokeWidth="1.5" strokeDasharray="6 6"/>
      <circle r="5" fill="#F58A1F" filter="url(#wg)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0s"><mpath href="#flow1"/></animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2s" repeatCount="indefinite"/>
      </circle>

      {/* ── Shopify/WantNow Store — center ── */}
      <rect x="210" y="82" width="100" height="96" rx="16" fill="rgba(245,138,31,0.1)" stroke="url(#orangeGrad)" strokeWidth="2"/>
      {/* Store icon */}
      <rect x="222" y="98" width="76" height="42" rx="8" fill="rgba(245,138,31,0.12)" stroke="rgba(245,138,31,0.4)" strokeWidth="1"/>
      <text x="260" y="116" textAnchor="middle" fontSize="16">🛍️</text>
      <text x="260" y="132" textAnchor="middle" fontSize="9" fill="#F58A1F" fontFamily="Poppins,sans-serif" fontWeight="700">WANTNOW</text>
      {/* Shopify tag */}
      <rect x="228" y="148" width="64" height="18" rx="9" fill="rgba(150,191,90,0.15)" stroke="rgba(150,191,90,0.4)" strokeWidth="1"/>
      <text x="260" y="160" textAnchor="middle" fontSize="8" fill="#96BF5A" fontFamily="Poppins,sans-serif" fontWeight="600">Shopify Store</text>
      {/* Pulse ring */}
      <rect x="210" y="82" width="100" height="96" rx="16" fill="none" stroke="#F58A1F" strokeWidth="1" opacity="0.4">
        <animate attributeName="rx" values="16;22;16" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite"/>
      </rect>

      {/* ── Flow arrow: Shopify → Customer ── */}
      <path id="flow2" d="M310,130 Q344,130 340,192" fill="none" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" strokeDasharray="6 6"/>
      <circle r="5" fill="#10B981" filter="url(#wg)">
        <animateMotion dur="2s" repeatCount="indefinite" begin="1s"><mpath href="#flow2"/></animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>

      {/* ── India / Customer — bottom right ── */}
      <circle cx="308" cy="232" r="44" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="1.5"/>
      <circle cx="308" cy="232" r="44" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="44;56;44" dur="2.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <text x="308" y="228" textAnchor="middle" fontSize="22">🇮🇳</text>
      <text x="308" y="246" textAnchor="middle" fontSize="9" fill="#10B981" fontFamily="Poppins,sans-serif" fontWeight="700">PAN-INDIA</text>
      <text x="308" y="258" textAnchor="middle" fontSize="8" fill="rgba(16,185,129,0.6)" fontFamily="Poppins,sans-serif">DELIVERY</text>

      {/* ── Floating product badges ── */}
      {[['⚡ Trending', 20, 220, '#F58A1F'], ['🔥 Viral', 180, 264, '#EF4444'], ['✅ Curated', 80, 268, '#10B981']].map(([lbl, x, y, col], i) => (
        <g key={i as number}>
          <rect x={x as number} y={y as number} width={80} height={24} rx="12" fill={`${col}15`} stroke={col as string} strokeWidth="1"/>
          <text x={(x as number)+40} y={(y as number)+15.5} textAnchor="middle" fontSize="9" fill={col as string} fontFamily="Poppins,sans-serif" fontWeight="700">
            <animate attributeName="opacity" values="0.7;1;0.7" dur={`${2+i*0.5}s`} repeatCount="indefinite"/>
            {lbl as string}
          </text>
        </g>
      ))}

      {/* ── Truck going somewhere ── */}
      <text fontSize="22" opacity="0.9">
        <animateMotion dur="4s" repeatCount="indefinite" path="M140,260 Q220,240 280,220"/>
        🚚
      </text>
    </svg>
  );
}

/* ── Category SVG Icons ── */
const I = (p: React.SVGProps<SVGSVGElement>) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}/>;
const TechIcon    = () => <I><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></I>;
const FitIcon     = () => <I><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></I>;
const HomeIcon    = () => <I><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></I>;
const BeautyIcon  = () => <I><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></I>;
const OutdoorIcon = () => <I><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></I>;
const ToolIcon    = () => <I><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></I>;
