// app/components/ParallaxBg.jsx
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Фиксированный полноэкранный параллакс-фон.
 * Работает поверх картинки /bg-midnight.jpg, добавляет мягкие градиенты,
 * туман, зерно и виньетку. Не мешает кликам.
 */
export default function ParallaxBg() {
  const ticking = useRef(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // уважение prefers-reduced-motion
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const applyPref = () => setReduced(!!mq?.matches);
    applyPref();
    mq?.addEventListener?.("change", applyPref);

    return () => mq?.removeEventListener?.("change", applyPref);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const root = document.documentElement;

    // если пользователь просит меньше анимаций — не вешаем обработчик
    if (reduced) {
      root.style.setProperty("--scrollY", "0");
      return;
    }

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        // защита от редких гонок
        if (typeof window !== "undefined") {
          root.style.setProperty("--scrollY", String(window.scrollY || 0));
        }
        ticking.current = false;
      });
    };

    // первичная установка и подписка
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      ticking.current = false;
    };
  }, [reduced]);

  return (
    <div className="parallax-root" aria-hidden="true">
      <div className="plx layer far" />
      <div className="plx layer mid" />
      <div className="plx layer grain" />
      <div className="plx layer vignette" />
    </div>
  );
}
