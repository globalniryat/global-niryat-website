'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STEPS = [
  { num: '01', title: 'Discover', desc: 'Deep consultation on your goals, requirements, and market context. We listen before we build.', color: '#2359A4' },
  { num: '02', title: 'Architect', desc: 'Scalable, AI-ready system design tailored to your stack, team size, and growth trajectory.', color: '#F58A1F' },
  { num: '03', title: 'Build', desc: 'Agile sprints with continuous feedback loops, weekly demos, and transparent progress tracking.', color: '#2359A4' },
  { num: '04', title: 'Scale', desc: 'Launch support, monitoring, performance optimization and ongoing growth partnerships.', color: '#F58A1F' },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28" style={{ background: '#F8FAFF' }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span
            className="text-xs uppercase tracking-[0.14em] px-3 py-1.5 rounded-full inline-block mb-5"
            style={{ background: 'rgba(35,89,164,0.08)', color: '#2359A4', fontFamily: 'var(--font-mono)' }}
          >Our Approach</span>
          <h2
            className="font-black tracking-tight"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#2A2B2A' }}
          >How We Work</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-10 left-0 right-0 h-px hidden md:block"
            style={{ background: 'linear-gradient(90deg, #2359A4, #F58A1F)', opacity: 0.18, top: '40px', left: '10%', right: '10%' }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ y: -8, boxShadow: '0 0 0 1px rgba(245,138,31,0.25), 0 24px 50px rgba(0,0,0,0.1)' }}
              className="relative text-center p-8 rounded-2xl transition-all duration-400 cursor-default"
              style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-black text-2xl text-white relative z-10"
                style={{
                  background: `linear-gradient(135deg, ${step.color}, ${step.color === '#2359A4' ? '#4A7FD6' : '#FF9F3A'})`,
                  boxShadow: `0 8px 24px ${step.color}44`,
                  fontFamily: 'var(--font-syne)',
                }}
              >{step.num}</div>
              <h4
                className="font-bold text-lg mb-3"
                style={{ color: '#2A2B2A', fontFamily: 'var(--font-syne)' }}
              >{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
