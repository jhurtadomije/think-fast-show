'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,           // más dinámico
      smoothWheel: true,
      smoothTouch: false,
      anchors: true,
      easing: (t) => 1 - Math.pow(1 - t, 4), // easing más suave y moderno
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}