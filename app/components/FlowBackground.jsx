"use client";

import { usePathname } from "next/navigation";

/**
 * Global animated flow background.
 * - Visible only on "/" when scope="home"
 * - Works on light & dark themes (CSS controls opacity per theme)
 * - Full-bleed (stretches to viewport width/height)
 * - S-like arcs with soft moving dots
 */
export default function FlowBackground({ scope = "home" }) {
  const pathname = usePathname();
  const show = scope === "home" ? pathname === "/" : true;
  if (!show) return null;

  // Нормированный viewBox, чтобы SVG тянулся на всю ширину экрана
  const vw = 1000;
  const vh = 600;

  // 4 хаотичные кривые (разные направления + пересечения)
  const arcs = [
    { id: "arc1", d: "M 0 420 C 220 360, 480 300, 1000 260" },             // почти горизонтальная
    { id: "arc2", d: "M 40 120 C 260 240, 520 100, 960 200" },              // волна вверх-вниз
    { id: "arc3", d: "M 0 520 C 320 480, 620 560, 1000 420" },              // низовая
    { id: "arc4", d: "M 80 260 C 340 160, 660 360, 980 140" },              // диагональ с пересечениями
  ];

  // Настройки движения «точек»
  const dotsPerArc = 4;        // по 4 точки на дугу
  const baseDur = 14;          // медленная скорость
  const jitter = [0, 0.6, 1.2, 1.9]; // рассинхрон запусков

  return (
    <div className="flow-bg" aria-hidden>
      <svg
        className="flow-svg"
        viewBox={`0 0 ${vw} ${vh}`}
        preserveAspectRatio="none"  // растягиваем на всю ширину/высоту вьюпорта
      >
        <defs>
          {/* мягкое сияние для линий и точек */}
          <filter id="flowGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* чуть-серая «жила» чтобы была видна на белом */}
          <linearGradient id="flowStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stopColor="#F4F6F8" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F4F6F8" />
          </linearGradient>
        </defs>

        {arcs.map(({ id, d }, i) => (
          <g key={id} filter="url(#flowGlow)">
            {/* широкая размытая подложка */}
            <path
              d={d}
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.35"
              strokeWidth="18"
            />
            {/* центральная тонкая «жила» (видна и на светлой теме) */}
            <path
              d={d}
              fill="none"
              stroke="url(#flowStroke)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Двигающиеся «точки»: это circle с animateMotion по mpath */}
            {[...Array(dotsPerArc)].map((_, k) => (
              <g key={`${id}-dot-${k}`} style={{ mixBlendMode: "plus-lighter" }}>
                <circle r="3.2" fill="#FFFFFF" fillOpacity="0.9" />
                <animateMotion
                  dur={`${baseDur + i * 1.2}s`}
                  begin={`${jitter[k % jitter.length]}s`}
                  repeatCount="indefinite"
                  keySplines="0.42 0 0.58 1"
                  calcMode="spline"
                >
                  <mpath href={`#${id}`} />
                </animateMotion>
              </g>
            ))}

            {/* сам путь в defs, чтобы анимация цеплялась mpath'ом */}
            <path id={id} d={d} fill="none" stroke="none" />
          </g>
        ))}
      </svg>
    </div>
  );
}
