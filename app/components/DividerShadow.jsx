"use client";
import { useEffect, useState } from "react";

/**
 * Полка-тень под хедером (прозрачный фон, мягкая растяжка, лёгкий parallax).
 * Ничего не перекрывает: pointer-events: none.
 */
export default function ShelfShadow({
  height = 120,       // общая высота области тени
  intensity = 1,      // 0..1 – сила тени
  parallax = 18,      // максимальный сдвиг вниз при скролле
  className = "",
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setOffset(Math.min(y / 60, parallax)); // мягкий сдвиг вниз
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax]);

  // слои: тонкая светлая «кромка» сверху + основная радиальная тень
  const wrapper = {
    position: "relative",
    width: "100%",
    height,
    margin: "0 auto",
    transform: `translateY(${offset}px)`,
    pointerEvents: "none",
  };

  const lip = {
    position: "absolute",
    left: "6%",
    right: "6%",
    top: 0,
    height: 10,
    borderRadius: 999,
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
    filter: "blur(3px)",
    opacity: 0.9,
  };

  const shadow = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 6,
    bottom: 0,
    // широкая эллиптическая тень, центр у верхней кромки
    background: `radial-gradient(120% 80% at 50% 0%,
        rgba(0,0,0,${0.20 * intensity}) 0%,
        rgba(0,0,0,${0.14 * intensity}) 22%,
        rgba(0,0,0,${0.08 * intensity}) 48%,
        rgba(0,0,0,0) 80%)`,
    filter: "blur(14px)",
  };

  return (
    <div className={`mgp-shelf-shadow ${className}`} style={wrapper}>
      <div style={lip} />
      <div style={shadow} />
    </div>
  );
}
