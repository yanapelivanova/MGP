// app/components/ParallaxBg.jsx
'use client';

import { useEffect, useRef } from 'react';

/**
 * Фиксированный полноэкранный параллакс-фон.
 * Работает поверх картинки /bg-midnight.jpg, добавляет мягкие градиенты,
 * туман, зерно и виньетку. Не мешает кликам (pointer-events: none).
 */
export default function ParallaxBg() {
  const ticking = useRef(false);

  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          root.style.setProperty('--scrollY', String(window.scrollY));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="parallax-root" aria-hidden>
      <div className="plx layer far" />
      <div className="plx layer mid" />
      <div className="plx layer grain" />
      <div className="plx layer vignette" />
    </div>
  );
}
