'use client';
import { motion } from 'framer-motion';
import { whatsappUrl } from '@/config/site';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9000,
        width: 58,
        height: 58,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      {/* Pulse ring */}
      <motion.span
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid #25D366',
        }}
      />
      {/* WhatsApp SVG icon */}
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 3C9 3 3 9 3 16a12.9 12.9 0 001.75 6.5L3 29l6.73-1.72A13 13 0 1016 3z"
          fill="white"
        />
        <path
          d="M21.5 18.8c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.36.22-.66.07a8.3 8.3 0 01-2.44-1.5 9.15 9.15 0 01-1.69-2.1c-.18-.3-.02-.47.13-.62.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.14.2 2.1 3.2 5.07 4.48.7.3 1.26.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.73-.71 1.97-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.19-.57-.34z"
          fill="#25D366"
        />
      </svg>
    </motion.a>
  );
}
