// app/components/ParallaxBg.jsx
'use client';

import { useEffect, useRef } from 'react';

/**
 * Фиксированный полноэкранный параллакс-фон.
 * Ничего не перехватывает (pointer-events: none) и лежит под всем контентом.
 */
export default function ParallaxBg() {
  const ticking = useRef(false);

  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          root.style.setProperty('--scrollY', String(window.scrollY));
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    onScroll(); // инициализация
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="parallax-root" aria-hidden>
      {/* дальний градиентный фон */}
      <div className="plx layer far" />

      {/* «туман»/абстракция */}
      <div className="plx layer mid" />

      {/* шум и виньетка для глубины */}
      <div className="plx layer grain" />
      <div className="plx layer vignette" />
    </div>
  );
}
