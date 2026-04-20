'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import HeroIllustration from './HeroIllustration';

const TRUST_BRANDS = ['TechCorp', 'InnoEdge', 'DataSys', 'CloudNet', 'Scalix', 'VentureAI'];

const SERVICE_TAGS = [
  { label: 'E-Commerce',       color: '#F58A1F' },
  { label: 'Dropshipping',     color: '#10B981' },
  { label: 'AI Development',   color: '#4A7FD6' },
  { label: 'Web & Mobile Apps', color: '#6366F1' },
  { label: 'Enterprise LMS',   color: '#A855F7' },
  { label: 'Global Commerce',  color: '#10B981' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0D0F1A' }}
    >
      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(35,89,164,0.22) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(245,138,31,0.08) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse-ring" style={{ background: '#F58A1F' }} />
              <span className="text-sm font-medium text-white/70" style={{ fontFamily: 'var(--font-mono)' }}>
                Exporting Products &amp; Services Globally
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-syne font-black mb-6 leading-[1.04] tracking-tight"
              style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(48px, 6vw, 80px)' }}
            >
              <span className="text-white">Bridging </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #F58A1F, #FF6B35)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >India</span>
              <br />
              <span className="text-white">to the </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #4A7FD6, #6366F1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >World</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-white/55 text-lg leading-relaxed mb-10 max-w-[500px]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Technology-driven import-export solutions, AI-powered software, and enterprise-ready platforms — all under one global roof.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #2359A4, #4A7FD6)',
                  boxShadow: '0 4px 20px rgba(35,89,164,0.4)',
                  fontFamily: 'var(--font-syne)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 30px rgba(245,138,31,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(35,89,164,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Explore Services <ArrowRight size={16} />
              </a>
              <a
                href="#lms-hero"
                className="animate-pulse-ring flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                style={{
                  border: '2px solid rgba(245,138,31,0.5)',
                  color: '#F58A1F',
                  background: 'rgba(245,138,31,0.05)',
                  fontFamily: 'var(--font-syne)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,138,31,0.12)'; e.currentTarget.style.borderColor = '#F58A1F'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,138,31,0.05)'; e.currentTarget.style.borderColor = 'rgba(245,138,31,0.5)'; }}
              >
                <Zap size={16} fill="#F58A1F" /> See LMS in Action
              </a>
            </motion.div>

            {/* What we offer tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              <span className="text-xs text-white/30 font-mono-brand tracking-widest uppercase flex items-center mr-2" style={{ fontFamily: 'var(--font-mono)' }}>
                We Build
              </span>
              {SERVICE_TAGS.map((t) => (
                <span
                  key={t.label}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: `${t.color}18`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                    fontFamily: 'var(--font-inter)',
                  }}
                >{t.label}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Neural network + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative h-[520px] hidden lg:block"
          >
            {/* Globe illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <HeroIllustration />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50" style={{ fontFamily: 'var(--font-mono)' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, #F58A1F, transparent)' }}
        />
      </div>
    </section>
  );
}
