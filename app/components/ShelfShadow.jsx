"use client";
import { useEffect, useState } from "react";

export default function ShelfShadow({
  height = 110,
  intensity = 0.8,
  parallax = 14,
  className = "",
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setOffset(Math.min(y / 70, parallax));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [parallax]);

  const wrap = {
    position: "relative",
    width: "100%",
    height,
    transform: `translateY(${offset}px)`,
    pointerEvents: "none",
    zIndex: 0,
  };

  const lip = {
    position: "absolute",
    left: "6%",
    right: "6%",
    top: 0,
    height: 8,
    borderRadius: 999,
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0))",
    filter: "blur(2.5px)",
    opacity: 0.9,
  };

  const glow = {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(120% 80% at 50% 0%,
        rgba(0,0,0,${0.18 * intensity}) 0%,
        rgba(0,0,0,${0.10 * intensity}) 36%,
        rgba(0,0,0,0) 78%)`,
    filter: "blur(12px)",
  };

  return (
    <div className={`mgp-shelf-shadow ${className}`} style={wrap}>
      <div style={lip} />
      <div style={glow} />
    </div>
  );
}
