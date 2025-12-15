// app/components/FlowBackground.jsx
"use client";

import { usePathname } from "next/navigation";

/**
 * Global flowing background (visible on Home by default).
 * Additive blend + subtle backdrop makes lines glow even on white.
 */
export default function FlowBackground({ scope = "home" }) {
  const pathname = usePathname();
  const show = scope === "home" ? pathname === "/" : true;
  if (!show) return null;

  // Большой viewBox с выходом за края — чтобы линии были "воздухом" по бокам
  const vw = 1920;
  const vh = 1080;

  // 4–5 хаотичных дуг, часть — горизонтальные, часть — диагональные/почти вертикальные
  const arcs = [
    "M -120 420 C 360 320, 980 360, 2080 300",
    "M -80 720 C 280 660, 1040 600, 2100 540",
    "M -100 220 C 420 360, 1220 260, 2050 380",
    "M  120 -60 C 240 180, 460 640, 760 1180",
    "M 1820 -40 C 1460 180, 1080 520, 820 1120",
  ];

  // Импульс как «утолщение внутри линии» делаем stroke-dasharray
  // + additive mix-blend-mode, + мягкие блюры
  const baseDur = 10;  // общая скорость (больше = медленнее)
  const dash = 85;     // длина утолщения
  const gap  = 720;    // интервал между импульсами

  return (
    <div className="flow-bg" aria-hidden>
      <svg
        viewBox={`0 0 ${vw} ${vh}`}
        className="flow-svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Светлая «подложка» только под линиями — очень деликатная */}
          <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="var(--flow-core)" stopOpacity="0.55" />
            <stop offset="50%"  stopColor="var(--flow-core)" stopOpacity="0.38" />
            <stop offset="100%" stopColor="var(--flow-core)" stopOpacity="0.55" />
          </linearGradient>

          {/* Лёгкое «сияние» */}
          <filter id="flowGlowSoft" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b1" />
            <feMerge>
              <feMergeNode in="b1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Сильнее — для подложки-ореола */}
          <filter id="flowGlowWide" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {arcs.map((d, i) => {
          const dur = baseDur + i * 1.8; // чуть разная скорость на каждой дуге
          const offset = i * (dash + gap) * 0.33;

          return (
            <g key={i} style={{ mixBlendMode
