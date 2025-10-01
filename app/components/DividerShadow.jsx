"use client";
import { useEffect, useState } from "react";

/**
 * DividerShadow — мягкий разделитель с эффектом parallax.
 * Реагирует на скролл: расширяется и чуть смещается вниз.
 */
export default function DividerShadow({
  width = 260,        // базовая ширина
  height = 30,        // базовая высота
  maxScale = 1.5,     // максимум расширения по X
  parallax = 12,      // смещение по Y при скролле
  className = "",     // доп. классы
}) {
  const [scale, setScale] = useState(1);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const s = 1 + Math.min(y / 900, maxScale - 1);
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
        transform: `translate
