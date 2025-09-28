"use client";
import { useEffect, useState } from "react";

/**
 * Мягкая «парящая» тень-разделитель.
 * Реагирует на прокрутку: чуть расширяется и съезжает вниз (parallax).
 */
export default function DividerShadow({
  width = 260,            // базовая ширина
  height = 30,            // базовая высота
  maxScale = 1.5,         // максимум расширения по X
  parallax = 12,          // смещение по Y при скролле (px)
  className = "",         // доп. классы (например, mt-6 mb-10)
}) {
  const [scale, setScale] = useState(1);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      // плавное расширение до maxScale
      const s = 1 + Math.min(y / 900, maxScale - 1);
      // лёгкий сдвиг вниз (parallax)
      const off = Math.min(y / 120, parallax);
      setScale(s);
      setOffsetY(off);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [maxScale, parallax]);

  return (
    <div
      className={`mgp-divider-shadow ${className}`}
      style={{
        width,
        height,
        transform: `translateY(${offsetY}px) scale(${scale}, ${Math.max(
          0.65,
          scale * 0.62
        )})`,
      }}
      aria-hidden="true"
    />
  );
}
