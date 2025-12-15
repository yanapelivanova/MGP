"use client";

import { usePathname } from "next/navigation";

/**
 * Full-bleed glowing flows with moving "thickening" pulses.
 * Показываем только на /, если scope="home".
 */
export default function FlowBackground({ scope = "home" }) {
  const pathname = usePathname();
  const show = scope === "home" ? pathname === "/" : true;
  if (!show) return null;

  // Растягиваем на весь вьюпорт
  const vw = 1000, vh = 600;

  // Формы дуг (оставила как у нас, хаотичные и пересекающиеся)
  const arcs = [
    { id: "arc1", d: "M 0 420 C 220 360, 480 300, 1000 260" },
    { id: "arc2", d: "M 40 120 C 260 240, 520 100, 960 200" },
    { id: "arc3", d: "M 0 520 C 320 480, 620 560, 1000 420" },
    { id: "arc4", d: "M 80 260 C 340 160, 660 360, 980 140" },
  ];

  // Параметры импульсов: короткие «утолщения», бегут по линии
  const pulseLen = 80;   // длина утолщения
  const gapLen   = 520;  // расстояние между утолщениями
  const baseDur  = 11;   // скорость (сек)
  const delays   = [0, 0.6, 1.2]; // несколько «дорожек» импульсов на каждой дуге

  return (
    <div className="flow-bg" aria-hidden>
      <svg
        className="flow-svg"
        viewBox={`0 0 ${vw} ${vh}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Мягкий широкий ореол — заметен на светлой теме */}
          <filter id="flowGlowStrong" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Дополнительное лёгкое свечение для «ядра» */}
          <filter id="flowGlowSoft" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="6" result="s" />
            <feMerge>
              <feMergeNode in="s" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ядро линии: чуть серовато-белое, чтобы читалось на белом фоне */}
          <linearGradient id="flowCore" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#eef2f7" />
            <stop offset="50%"  stopColor="#ffffff" />
            <stop offset="100%" stopColor="#eef2f7" />
          </linearGradient>
        </defs>

        {arcs.map(({ id, d }, i) => (
          <g key={id} style={{ mixBlendMode: "screen" }}>
            {/* 1) ШИРОКИЙ РАЗМЫТЫЙ ОРЕОЛ */}
            <path
              d={d}
              filter="url(#flowGlowStrong)"
              stroke="#ffffff"
              strokeOpacity="0.65"
              strokeWidth="26"
              strokeLinecap="round"
              fill="none"
            />

            {/* 2) ТЕЛО ЛИНИИ (тонкое «ядро») */}
            <path
              d={d}
              filter="url(#flowGlowSoft)"
              stroke="url(#flowCore)"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* 3) ДВИЖУЩЕЕСЯ УТОЛЩЕНИЕ (сам импульс) — выглядит как "всплеск" света в самой линии */}
            {delays.map((delay, k) => (
              <g key={`${id}-pulse-${k}`} filter="url(#flowGlowStrong)">
                {/* Яркое «ядро» утолщения */}
                <path
                  d={d}
                  stroke="#ffffff"
                  strokeOpacity="0.95"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${pulseLen} ${gapLen}`}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={`-${pulseLen + gapLen}`}
                    dur={`${baseDur + i * 1.1}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </path>

                {/* Более широкий мягкий ореол того же утолщения */}
                <path
                  d={d}
                  stroke="#ffffff"
                  strokeOpacity="0.55"
                  strokeWidth="22"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${pulseLen} ${gapLen}`}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={`-${pulseLen + gapLen}`}
                    dur={`${baseDur + i * 1.1}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            ))}

            {/* скрытая референс-кривая (на случай mpath в будущем) */}
            <path id={id} d={d} stroke="none" fill="none" />
          </g>
        ))}
      </svg>
    </div>
  );
}
