'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: '#0D0F1A' }}
        >
          {/* Background radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(35,89,164,0.25) 0%, transparent 65%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* GN logo mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center font-syne font-black text-3xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #F58A1F, #e040fb)',
                  boxShadow: '0 0 40px rgba(245,138,31,0.5)',
                  fontFamily: 'var(--font-syne)',
                }}
              >
                GN
              </div>
              {/* Pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-2xl"
                style={{ border: '2px solid rgba(245,138,31,0.6)' }}
              />
            </motion.div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-white font-syne font-bold text-xl tracking-wide"
                style={{ fontFamily: 'var(--font-syne)' }}>
                Global <span style={{ color: '#F58A1F' }}>Niryat</span>
              </p>
              <p className="text-white/40 text-xs mt-1 tracking-widest font-mono-brand uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}>
                Exporting to the World
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-0.5 rounded-full overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="h-full rounded-full origin-left"
                style={{ background: 'linear-gradient(90deg, #F58A1F, #e040fb)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
