"use client";

import { usePathname } from "next/navigation";

/**
 * Full-bleed animated flow background.
 * Visible only on "/" when scope="home".
 * Tuned to be clearly visible on LIGHT theme, gentler on DARK (via CSS).
 */
export default function FlowBackground({ scope = "home" }) {
  const pathname = usePathname();
  const show = scope === "home" ? pathname === "/" : true;
  if (!show) return null;

  // Normalized viewBox (stretches to viewport)
  const vw = 1000;
  const vh = 600;

  // 4 chaotic arcs, some intersections
  const arcs = [
    { id: "arc1", d: "M 0 420 C 220 360, 480 300, 1000 260" },
    { id: "arc2", d: "M 40 120 C 260 240, 520 100, 960 200" },
    { id: "arc3", d: "M 0 520 C 320 480, 620 560, 1000 420" },
    { id: "arc4", d: "M 80 260 C 340 160, 660 360, 980 140" },
  ];

  // Moving dots config
  const dotsPerArc = 5;
  const baseDur = 12;
  const jitter = [0, 0.5, 1.1, 1.6, 2.2];

  return (
    <div className="flow-bg" aria-hidden>
      <svg
        className="flow-svg"
        viewBox={`0 0 ${vw} ${vh}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Stronger glow for light theme visibility */}
          <filter id="flowGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Light-theme friendly stroke (very light grey, not pure white) */}
          <linearGradient id="flowStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"  stopColor="#e9edf2" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e9edf2" />
          </linearGradient>
        </defs>

        {arcs.map(({ id, d }, i) => (
          <g key={id} filter="url(#flowGlow)">
            {/* soft underlay */}
            <path
              d={d}
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.58"   // ↑ was 0.35
              strokeWidth="20"       // ↑ was 14
            />
            {/* crisp core */}
            <path
              d={d}
              fill="none"
              stroke="url(#flowStroke)"
              strokeWidth="2.8"      // ↑ was ~2.2
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* moving dots */}
            {[...Array(dotsPerArc)].map((_, k) => (
              <g key={`${id}-dot-${k}`} style={{ mixBlendMode: "screen" }}>
                <circle r="3.8" fill="#ffffff" fillOpacity="0.95" />
                <animateMotion
                  dur={`${baseDur + i * 1.1}s`}
                  begin={`${jitter[k % jitter.length]}s`}
                  repeatCount="indefinite"
                  keySplines="0.42 0 0.58 1"
                  calcMode="spline"
                >
                  <mpath href={`#${id}`} />
                </animateMotion>
              </g>
            ))}

            {/* path for mpath reference */}
            <path id={id} d={d} fill="none" stroke="none" />
          </g>
        ))}
      </svg>
    </div>
  );
}
