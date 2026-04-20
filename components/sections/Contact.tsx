'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/config/site';

const SERVICES = [
  'AI & Software Development',
  'Enterprise LMS',
  'Global Commerce',
  'CRM / ERP System',
  'Other',
];

type FormState = { name: string; email: string; service: string; phone: string; message: string };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]       = useState<FormState>({ name: '', email: '', service: '', phone: '', message: '' });
  const [status, setStatus]   = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const fieldStyle = (name: string): React.CSSProperties => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused === name ? '#F58A1F' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '12px',
    color: 'white',
    fontFamily: 'var(--font-inter)',
    fontSize: '14px',
    padding: '14px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.25s',
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', service: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: '#0D0F1A' }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(35,89,164,0.12) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '10%', width: 400, height: 300, background: 'radial-gradient(ellipse, rgba(245,138,31,0.07) 0%, transparent 65%)' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span
            className="text-xs uppercase tracking-[0.14em] px-3 py-1.5 rounded-full inline-block mb-5"
            style={{ background: 'rgba(245,138,31,0.1)', color: '#F58A1F', border: '1px solid rgba(245,138,31,0.25)', fontFamily: 'var(--font-mono)' }}
          >Get In Touch</span>
          <h2
            className="font-black text-white tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >Start a Conversation</h2>
          <p className="text-white/45 text-base max-w-lg mx-auto" style={{ fontFamily: 'var(--font-inter)' }}>
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Info sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Contact details */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="font-bold text-white mb-5 text-sm" style={{ fontFamily: 'var(--font-syne)' }}>Contact Details</h3>
              {([
                { icon: <Mail size={15}/>, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: <Phone size={15}/>, text: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g,'')}` },
                { icon: <MapPin size={15}/>, text: siteConfig.address, href: '#' },
              ] as { icon: React.ReactNode; text: string; href: string }[]).map(({ icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 mb-3.5 text-sm text-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(245,138,31,0.15)', color: '#F58A1F' }}>{icon}</span>
                  {text}
                </a>
              ))}
            </div>

            {/* Response time */}
            <div className="rounded-2xl p-5" style={{ background: 'rgba(35,89,164,0.1)', border: '1px solid rgba(35,89,164,0.2)' }}>
              <div className="flex items-center gap-3 mb-2">
                <Clock size={16} style={{ color: '#4A7FD6' }} />
                <span className="text-sm font-semibold text-white/80" style={{ fontFamily: 'var(--font-syne)' }}>Response Time</span>
              </div>
              <p className="text-white/45 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                We respond within <strong style={{ color: '#4A7FD6' }}>24 hours</strong> on business days.
              </p>
            </div>

            {/* LMS highlight */}
            <div className="rounded-2xl p-5" style={{ background: 'rgba(245,138,31,0.08)', border: '1px solid rgba(245,138,31,0.2)' }}>
              <div className="flex items-center gap-3 mb-2">
                <MessageSquare size={16} style={{ color: '#F58A1F' }} />
                <span className="text-sm font-semibold text-white/80" style={{ fontFamily: 'var(--font-syne)' }}>LMS Clients</span>
              </div>
              <p className="text-white/45 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                LMS goes live within <strong style={{ color: '#F58A1F' }}>14 days</strong> of signing.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', color: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor"><path d="M16 3C9 3 3 9 3 16a12.9 12.9 0 001.75 6.5L3 29l6.73-1.72A13 13 0 1016 3z"/></svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="lg:col-span-2 rounded-2xl p-6 sm:p-8"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {/* ── Success state ── */}
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-5 py-16 text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white"
                  style={{ background: 'linear-gradient(135deg, #10B981, #059669)', boxShadow: '0 0 30px rgba(16,185,129,0.4)' }}
                >✓</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-syne)' }}>Message Sent!</h3>
                  <p className="text-white/40 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                    We&apos;ll respond within 24 hours. Check <strong style={{ color: 'white' }}>{siteConfig.email}</strong> for our reply.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={submit} noValidate>

                {/* ── Error state ── */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 rounded-xl mb-5" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
                    <AlertCircle size={18} style={{ color: '#EF4444', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="text-sm font-semibold text-red-400 mb-1" style={{ fontFamily: 'var(--font-syne)' }}>Failed to send message</p>
                      <p className="text-xs text-red-300/70" style={{ fontFamily: 'var(--font-inter)' }}>
                        Please try again, or email us directly at <strong>{siteConfig.email}</strong>
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>Full Name *</label>
                    <input
                      style={fieldStyle('name')}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>Email Address *</label>
                    <input
                      type="email"
                      style={fieldStyle('email')}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>Service Needed</label>
                    <select
                      style={{ ...fieldStyle('service'), appearance: 'none' }}
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      onFocus={() => setFocused('service')}
                      onBlur={() => setFocused(null)}
                    >
                      <option value="" style={{ background: '#0D0F1A' }}>Select a service…</option>
                      {SERVICES.map(s => <option key={s} value={s} style={{ background: '#0D0F1A' }}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>Phone (optional)</label>
                    <input
                      style={fieldStyle('phone')}
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs text-white/40 mb-1.5 font-medium" style={{ fontFamily: 'var(--font-inter)' }}>Tell us about your project *</label>
                  <textarea
                    style={{ ...fieldStyle('message'), minHeight: 120, resize: 'none' }}
                    placeholder="Describe what you're building, your timeline, and requirements…"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={status !== 'sending' ? { scale: 1.02, boxShadow: '0 12px 40px rgba(35,89,164,0.5)' } : {}}
                  whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-base"
                  style={{
                    background: status === 'sending'
                      ? 'rgba(35,89,164,0.5)'
                      : 'linear-gradient(135deg, #2359A4, #4A7FD6)',
                    boxShadow: '0 6px 28px rgba(35,89,164,0.4)',
                    fontFamily: 'var(--font-syne)',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending…</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>

                <p className="text-center text-white/20 text-xs mt-4" style={{ fontFamily: 'var(--font-inter)' }}>
                  Your message is sent directly to {siteConfig.email}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
