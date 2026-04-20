'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const LMS_PILLS = ['Course Builder', 'Video Streaming', 'Payments', 'White Label'];
const SOCIAL_PROOF = ['Used by training institutes', 'Corporates L&D teams', 'EdTech startups', 'Universities'];

export default function LMSHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="lms-hero"
      ref={ref}
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1A3F7A 100%)' }}
    >
      {/* BG glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 500, height: 500, background: 'radial-gradient(ellipse, rgba(74,127,214,0.2) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '10%', width: 400, height: 400, background: 'radial-gradient(ellipse, rgba(245,138,31,0.1) 0%, transparent 65%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="lms-glow inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{
              background: 'rgba(245,138,31,0.1)',
              border: '1px solid rgba(245,138,31,0.4)',
              color: '#F58A1F',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-orange-DEFAULT animate-pulse" style={{ background: '#F58A1F' }} />
            READY TO DEPLOY
          </motion.span>

          <h2
            className="font-black text-white leading-tight tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(32px, 4.5vw, 64px)' }}
          >
            Enterprise LMS —{' '}
            <span style={{ background: 'linear-gradient(135deg, #F58A1F, #FF9F3A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Live in 2 Weeks
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-12" style={{ fontFamily: 'var(--font-inter)' }}>
            A production-ready learning management system, fully customizable and deployable in record time.
          </p>
        </motion.div>

        {/* Browser mockup with CSS perspective tilt */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 8 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotateX: -2, y: -8 }}
          className="mx-auto max-w-3xl mb-12 rounded-2xl overflow-hidden"
          style={{
            perspective: 1200,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(245,138,31,0.1)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5" style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }}/>
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }}/>
            <div className="w-3 h-3 rounded-full" style={{ background: '#28CA41' }}/>
            <div className="flex-1 mx-4">
              <div className="mx-auto w-48 h-6 rounded-md text-xs flex items-center justify-center text-white/30" style={{ background: 'rgba(255,255,255,0.05)', fontFamily: 'var(--font-mono)' }}>
                lms.globalniryat.com
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="flex h-72">
            {/* Sidebar */}
            <div className="w-40 border-r p-3 flex flex-col gap-1" style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.15)' }}>
              <div className="px-3 py-2 mb-2">
                <span className="font-bold text-sm text-white font-syne" style={{ fontFamily: 'var(--font-syne)' }}>GN <span style={{ color: '#F58A1F' }}>LMS</span></span>
              </div>
              {['Dashboard','Courses','Students','Analytics','Payments','Settings'].map((item, i) => (
                <div key={item} className="px-3 py-2 rounded-lg text-xs transition-all" style={{ background: i===0 ? 'rgba(245,138,31,0.15)' : 'transparent', color: i===0 ? '#F58A1F' : 'rgba(255,255,255,0.3)', borderLeft: i===0 ? '2px solid #F58A1F' : '2px solid transparent', fontFamily: 'var(--font-inter)' }}>{item}</div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-4">
              <div className="text-sm font-bold text-white mb-3 font-syne" style={{ fontFamily: 'var(--font-syne)' }}>Welcome back, Admin 👋</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {[['2,847','Students','#F58A1F'],['142','Courses','#4A7FD6'],['₹4.2L','Revenue','#A855F7'],['91%','Retention','#10B981']].map(([n,l,c]) => (
                  <div key={l} className="rounded-xl p-2.5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="font-bold text-sm" style={{ color: c as string, fontFamily: 'var(--font-syne)' }}>{n}</div>
                    <div className="text-xs text-white/30 mt-0.5" style={{ fontFamily: 'var(--font-inter)' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="text-xs text-white/40 mb-2" style={{ fontFamily: 'var(--font-inter)' }}>Revenue Trend</div>
                <div className="flex items-end gap-1 h-16">
                  {[35,55,42,70,58,85,65,90,72,88,95,82].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(245,138,31,0.7), rgba(245,138,31,0.1))` }}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {LMS_PILLS.map((pill) => (
            <span
              key={pill}
              className="px-4 py-2 rounded-full text-sm text-white/70 font-medium"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-inter)' }}
            >{pill}</span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #F58A1F, #E84393)', boxShadow: '0 6px 28px rgba(245,138,31,0.45)', fontFamily: 'var(--font-syne)' }}
          >
            <Zap size={16} fill="white" /> Book Free Demo
          </a>
          <a
            href="#services"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white/80 text-base transition-all duration-300 hover:text-white hover:border-white/30"
            style={{ border: '1.5px solid rgba(255,255,255,0.15)', fontFamily: 'var(--font-syne)' }}
          >
            View LMS Features <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-white/30 text-xs tracking-widest uppercase mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Trusted by</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {SOCIAL_PROOF.map((s) => (
              <span key={s} className="text-xs text-white/40 px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-inter)' }}>{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
