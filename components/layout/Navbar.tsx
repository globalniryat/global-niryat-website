'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  /* ── Logo: image or text pill ─────────────────── */
  const Logo = () => (
    <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
      {siteConfig.logoPath ? (
        <Image
          src={siteConfig.logoPath}
          alt={siteConfig.logoAlt}
          width={siteConfig.logoWidth}
          height={siteConfig.logoHeight}
          style={{ height: siteConfig.logoHeight, width: 'auto' }}
          priority
        />
      ) : (
        <>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #F58A1F, #e040fb)',
              boxShadow: '0 0 20px rgba(245,138,31,0.4)',
              fontFamily: 'var(--font-syne)',
            }}
          >GN</div>
          <span className="font-bold text-base text-white tracking-tight hidden sm:block" style={{ fontFamily: 'var(--font-syne)' }}>
            Global <span style={{ color: '#F58A1F' }}>Niryat</span>
          </span>
        </>
      )}
    </a>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[999]"
        style={{
          background: scrolled ? 'rgba(13,15,26,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.8)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.4s ease',
          padding: scrolled ? '10px 0' : '18px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Logo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 whitespace-nowrap"
            >Contact</a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, #F58A1F, #ff6f00)',
                boxShadow: '0 4px 20px rgba(245,138,31,0.4)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,138,31,0.6)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,138,31,0.4)')}
            >Get a Quote</a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-2 rounded-lg transition-colors ml-auto"
            onClick={() => setOpen(!open)}
            style={{ background: 'rgba(255,255,255,0.05)' }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[998] lg:hidden flex flex-col"
            style={{ background: 'rgba(13,15,26,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {/* Close button top-right */}
            <div className="flex justify-end p-4 pt-5">
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              ><X size={20} /></button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-7 px-8 pb-20">
              {siteConfig.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.06 }}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className="text-2xl font-bold text-white/70 hover:text-white transition-colors flex items-center gap-3"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
                className="mt-4 px-10 py-3.5 rounded-xl text-white font-bold text-lg"
                style={{ background: 'linear-gradient(135deg, #F58A1F, #ff6f00)', boxShadow: '0 4px 20px rgba(245,138,31,0.4)' }}
              >Get a Quote →</motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
