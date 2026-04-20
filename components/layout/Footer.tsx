'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/config/site';
import Image from 'next/image';

export default function Footer() {
  const { social, email, phone, address, footerLinks } = siteConfig;

  const SOCIALS = [
    {
      label: 'LinkedIn',
      href: social.linkedin,
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: social.instagram,
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: 'Twitter/X',
      href: social.twitter,
      icon: (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      href: whatsappUrl(),
      icon: (
        <svg width="17" height="17" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 3C9 3 3 9 3 16a12.9 12.9 0 001.75 6.5L3 29l6.73-1.72A13 13 0 1016 3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ background: '#080A14', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-5 group">
              {siteConfig.logoPath ? (
                <Image
                  src={siteConfig.logoPath}
                  alt={siteConfig.logoAlt}
                  width={siteConfig.logoWidth}
                  height={siteConfig.logoHeight}
                  style={{ height: siteConfig.logoHeight, width: 'auto' }}
                />
              ) : (
                <>
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #F58A1F, #e040fb)', boxShadow: '0 0 16px rgba(245,138,31,0.35)', fontFamily: 'var(--font-syne)' }}
                  >GN</div>
                  <span className="font-bold text-white text-base" style={{ fontFamily: 'var(--font-syne)' }}>
                    Global <span style={{ color: '#F58A1F' }}>Niryat</span>
                  </span>
                </>
              )}
            </a>
            <p className="text-white/35 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-inter)' }}>
              {siteConfig.tagline}. Bridging India to the World through AI, Commerce &amp; LMS.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 flex-wrap">
              {SOCIALS.map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.2 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-white/30 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#F58A1F'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,138,31,0.3)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >{icon}</motion.a>
              ))}
            </div>
          </div>

          {/* Footer link columns */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h5 className="font-bold text-white/50 text-xs uppercase tracking-[0.12em] mb-5" style={{ fontFamily: 'var(--font-mono)' }}>{heading}</h5>
              {items.map((item: string) => (
                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-1 text-sm text-white/30 hover:text-white transition-colors duration-200 mb-2.5 group"
                  style={{ fontFamily: 'var(--font-inter)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#F58A1F'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.3)'}
                >
                  {item}
                  <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h5 className="font-bold text-white/50 text-xs uppercase tracking-[0.12em] mb-5" style={{ fontFamily: 'var(--font-mono)' }}>Connect</h5>
            <a href={`mailto:${email}`} className="block text-sm text-white/30 hover:text-orange-400 transition-colors mb-2.5" style={{ fontFamily: 'var(--font-inter)' }}>{email}</a>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm text-white/30 hover:text-orange-400 transition-colors mb-2.5" style={{ fontFamily: 'var(--font-inter)' }}>{phone}</a>
            <span className="block text-sm text-white/30 mb-5" style={{ fontFamily: 'var(--font-inter)' }}>{address}</span>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg transition-all"
              style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.18)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.1)'}
            >
              <svg width="13" height="13" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9 3 3 9 3 16a12.9 12.9 0 001.75 6.5L3 29l6.73-1.72A13 13 0 1016 3z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <span className="text-white/20 text-xs text-center" style={{ fontFamily: 'var(--font-inter)' }}>
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </span>
          <span className="text-white/20 text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
            Made with ❤️ in India 🇮🇳
          </span>
        </div>
      </div>
    </footer>
  );
}
