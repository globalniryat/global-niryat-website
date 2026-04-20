'use client';
import { useRef, useEffect } from 'react';

const obs =
  typeof window !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add('vis');
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
      )
    : null;

export const useReveal = (cls = 'r') => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el && obs) {
      obs.observe(el);
      return () => obs.unobserve(el);
    }
  }, []);

  return { ref, className: cls };
};
