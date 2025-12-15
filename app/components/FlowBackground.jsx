"use client";

import { usePathname } from "next/navigation";

/**
 * Glowing flow lines on white background.
 * - Светятся за счёт plus-lighter + двух bloom-слоёв.
 * - Импульсы это утолщение самой линии (не точки).
 * - Тянется на всю ширину/высоту.
 */
export default function FlowBackground({ scope = "home" }) {
  const pathname = usePathname();
  const show = scope === "home" ? pathname === "/" : true;
  if (!show) return null;

  // Холст: произвольный, тянем preserveAspectRatio="none"
  const vw = 1440, vh = 900;

  // Хаотичные дуги (оставляем твой характер: разные направления, частично пересекаются)
  const arcs = [
    "M 0 620 C 260 520, 520 700, 1440 560",
    "M 0 320 C 340 220, 880 420, 1440 260",
    "M 0 180 C 380 340, 780 120, 1440 300",
    "M 0 760 C 420 700, 920 820, 1440 660",
  ];

  // Импульс (утолщение)
  const pulseLen = 100;   // длина «вспухания»
  const gapLen   = 700;   // расстояние между вспуханиями
  const baseDur  = 12;    // скорость
  const lanes    = [0, 0.8]; // 2 дорожки на каждой линии (смещение старта)

  return (
    <div className="flow-bg" aria-hidden>
      {/* Едва-заметная подложка для контраста (иначе чистый белый «съедает» свечение) */}
      <div className="flow-haze" />

      <svg
        className="flow-svg"
        viewBox={`0 0 ${vw} ${vh}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Широкий bloom (внешнее свечение) */}
          <filter id="bloomWide" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="18" result="g1" />
            <feMerge>
              <feMergeNode in="g1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Средний bloom (внутренний ореол) */}
          <filter id="bloomMid" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="8" result="g2" />
            <feMerge>
              <feMergeNode in="g2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Очень лёгкая голубовато-белая «жила», чтобы читалось на белом */}
          <linearGradient id="core" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#f8fbff" />
            <stop offset="50%"  stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f6ff" />
          </linearGradient>
        </defs>

        {arcs.map((d, i) => (
          // Критично: аддитивное смешивание — реально «загорается» на белом
          <g key={i} style={{ mixBlendMode: "plus-lighter" }}>
            {/* 1) Широкая размытая подложка (видно «свечение» на белом) */}
            <path
              d={d}
              filter="url(#bloomWide)"
              stroke="#ffffff"
              strokeOpacity="0.85"
              strokeWidth="26"
              strokeLinecap="round"
              fill="none"
            />

            {/* 2) Средний ореол */}
            <path
              d={d}
              filter="url(#bloomMid)"
              stroke="#eaf2ff"
              strokeOpacity="0.75"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />

            {/* 3) Тонкая «жила» в центре */}
            <path
              d={d}
              stroke="url(#core)"
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
            />

            {/* 4) Импульс = утолщение той же линии (не точка!) */}
            {lanes.map((delay, k) => (
              <g key={k} style={{ mixBlendMode: "plus-lighter" }}>
                {/* Ядро вспухания */}
                <path
                  d={d}
                  stroke="#ffffff"
                  strokeOpacity="0.95"
                  strokeWidth="10"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${pulseLen} ${gapLen}`}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={`-${pulseLen + gapLen}`}
                    dur={`${baseDur + i * 0.9}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </path>

                {/* Широкий ореол того же вспухания (даёт «свет» вокруг, без «точки») */}
                <path
                  d={d}
                  filter="url(#bloomWide)"
                  stroke="#ffffff"
                  strokeOpacity="0.55"
                  strokeWidth="26"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray={`${pulseLen} ${gapLen}`}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={`-${pulseLen + gapLen}`}
                    dur={`${baseDur + i * 0.9}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
