'use client';
import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2.5,
        background: 'linear-gradient(90deg, #F58A1F, #E84393, #6366F1)',
        transformOrigin: '0%',
        zIndex: 10000,
      }}
    />
  );
}
