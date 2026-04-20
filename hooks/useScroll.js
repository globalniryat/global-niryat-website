'use client';
import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return y;
};
