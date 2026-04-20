/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#2359A4',
          dark: '#1A3F7A',
          light: '#4A7FD6',
          pale: '#F0F5FF',
        },
        orange: {
          DEFAULT: '#F58A1F',
          light: '#FF9F3A',
          dark: '#D97A15',
        },
        dark: {
          DEFAULT: '#0D0F1A',
          navy: '#0D1B3E',
          card: '#111827',
        },
        brand: {
          text: '#2A2B2A',
          bg: '#F8FAFF',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'grad-orange': 'linear-gradient(135deg, #F58A1F, #FF6B35)',
        'grad-blue': 'linear-gradient(135deg, #2359A4, #4A7FD6)',
        'grad-dark': 'linear-gradient(180deg, #0D0F1A 0%, #1A2744 100%)',
        'grad-cta': 'linear-gradient(135deg, #F58A1F 0%, #E84393 100%)',
        'grad-lms': 'linear-gradient(135deg, #0D1B3E, #1A3F7A)',
        'grad-hero-text-orange': 'linear-gradient(135deg, #F58A1F, #FF6B35)',
        'grad-hero-text-blue': 'linear-gradient(135deg, #2359A4, #4A7FD6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-delay2': 'float 6s ease-in-out 4s infinite',
        'scroll-left': 'scrollLeft 40s linear infinite',
        'orbit': 'orbit 8s linear infinite',
        'orbit-reverse': 'orbit 12s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(245,138,31,0.4)',
        'orange-glow-lg': '0 0 40px rgba(245,138,31,0.3)',
        'blue-glow': '0 0 20px rgba(35,89,164,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
