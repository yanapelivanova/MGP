// app/components/FlowBackground.jsx
"use client";

import { usePathname } from "next/navigation";

/**
 * Глобальный фон-потоки. По умолчанию показываем ТОЛЬКО на "/" (Home).
 * Никаких кликов не перехватывает, крайне деликатный.
 */
export default function FlowBackground({ scope = "home" }) {
  const pathname = usePathname();
  const show = scope === "home" ? pathname === "/" : true;
  if (!show) return null;

  // Размер «холста»
  const vw = 1440;
  const vh = 900;

  // 3–5 дуг (хаотичных, разной кривизны)
  const arcs = [
    "M 60 560 C 320 520, 720 460, 1280 380",
    "M 40 420 C 260 380, 580 340, 1100 300",
    "M 120 200 C 420 260, 840 220, 1360 260",
    "M 80 700 C 460 640, 860 600, 1320 520",
  ];

  // Настройки «утолщений/импульсов»
  const speed = 12; // медленно
  const dash = 80;  // длина «утолщения»
  const gap  = 640; // отступ между утолщениями

  return (
    <div className="flow-bg" aria-hidden>
      <svg viewBox={`0 0 ${vw} ${vh}`} className="flow-svg">
        <defs>
          {/* мягкое сияние */}
          <filter id="flowGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* основная линия — почти белая */}
          <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#f5f5f5" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {arcs.map((d, i) => (
          <g key={i} filter="url(#flowGlow)">
            {/* широкая размытая подложка */}
            <path
              d={d}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.35"
              strokeWidth="14"
            />
            {/* тонкая «жила» */}
            <path
              d={d}
              fill="none"
              stroke="url(#flowLine)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />

            {/* короткие «утолщения», бегущие по дуге */}
            <path
              d={d}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.65"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${gap}`}
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to={`-${dash + gap}`}
                dur={`${speed + i * 1.5}s`}
                repeatCount="indefinite"
              />
            </path>
          </g>
        ))}
      </svg>
    </div>
  );
}
