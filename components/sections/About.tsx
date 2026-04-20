'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { Globe, Cpu, Zap, ShoppingBag, Code2, BarChart3 } from 'lucide-react';


// Reordered: index 0,2,4 = left col (E-Commerce); index 1,3,5 = right col (IT Services)
const CAPABILITY_CARDS = [
  // Row 1
  { icon: <ShoppingBag size={20}/>, title: 'WantNow Dropshipping', desc: 'Trending global products delivered pan-India in 24 hours.', color: '#F58A1F', col: 'ecom' },
  { icon: <Code2 size={20}/>,       title: 'Web & Mobile Apps',     desc: 'React, Next.js, Flutter — built to scale.', color: '#4A7FD6', col: 'it' },
  // Row 2
  { icon: <Globe size={20}/>,       title: 'Global Sourcing',       desc: 'Products curated from US, UK, Japan & UAE markets.', color: '#10B981', col: 'ecom' },
  { icon: <Cpu size={20}/>,         title: 'AI / ML Systems',       desc: 'Intelligent automation & predictive engines.', color: '#6366F1', col: 'it' },
  // Row 3
  { icon: <BarChart3 size={20}/>,   title: 'Shopify Commerce',       desc: 'Zero-inventory Shopify store — wantnow.in.', color: '#A855F7', col: 'ecom' },
  { icon: <Zap size={20}/>,         title: 'Enterprise LMS',         desc: 'White-label learning platforms, deployed fast.', color: '#F58A1F', col: 'it' },
];

const FEATURES = [
  {
    icon: <ShoppingBag size={22} />,
    title: 'E-Commerce',
    desc: 'WantNow.in — our Shopify dropshipping store bringing global trending products to India.',
    color: '#F58A1F',
  },
  {
    icon: <Cpu size={22} />,
    title: 'AI-First',
    desc: 'Every solution is architected with AI at the core — not bolted on as an afterthought.',
    color: '#2359A4',
  },
];



export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });


  return (
    <section
      id="about"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: '#F8FAFF' }}
    >
      {/* Light bg accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(35,89,164,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] px-3 py-1.5 rounded-full mb-5 inline-block"
              style={{ background: 'rgba(35,89,164,0.08)', color: '#2359A4', fontFamily: 'var(--font-mono)' }}
            >
              Who We Are
            </span>
            <h2
              className="font-black mb-5 leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#2A2B2A' }}
            >
              A Global Bridge for{' '}
              <span style={{ background: 'linear-gradient(135deg, #2359A4, #4A7FD6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Trade &amp; Technology
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
              Global Niryat operates at the intersection of AI-driven software development, international commerce, and enterprise learning platforms. We don't just build products — we architect ecosystems that scale globally.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-10" style={{ fontFamily: 'var(--font-inter)' }}>
              Founded in India with a global-first mindset, we bring Silicon Valley product quality to every engagement — from custom software that powers mission-critical workflows to trending consumer products delivered pan-India in 24 hours.
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  whileHover={{ y: -6, boxShadow: '0 0 0 1px rgba(245,138,31,0.3), 0 20px 40px rgba(0,0,0,0.08)' }}
                  className="p-5 rounded-2xl cursor-default transition-all duration-300"
                  style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white"
                    style={{ background: f.color }}
                  >{f.icon}</div>
                  <h4 className="font-bold text-sm mb-1.5" style={{ color: '#2A2B2A', fontFamily: 'var(--font-syne)' }}>{f.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Capability cards grid with column labels */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Column labels */}
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex items-center gap-2 px-1">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#F58A1F' }}/>
                <span className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: '#F58A1F', fontFamily: 'var(--font-mono)' }}>E-Commerce</span>
              </div>
              <div className="flex items-center gap-2 px-1">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#2359A4' }}/>
                <span className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: '#2359A4', fontFamily: 'var(--font-mono)' }}>IT Services</span>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {CAPABILITY_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -6, boxShadow: `0 0 0 1px ${card.color}40, 0 20px 40px rgba(0,0,0,0.2)` }}
                  className="p-5 rounded-2xl cursor-default transition-all duration-300"
                  style={{
                    background: 'white',
                    border: `1px solid ${card.color}18`,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white"
                    style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}cc)` }}
                  >{card.icon}</div>
                  <h4 className="font-bold text-sm mb-1.5" style={{ color: '#2A2B2A', fontFamily: 'var(--font-syne)' }}>{card.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
