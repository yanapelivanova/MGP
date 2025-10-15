"use client";
import React from "react";

export default function ConsultingPulse() {
  const speed = 3.2;
  const accentHex = "#D1D5DB";

  const vw = 1200;
  const vh = 520;
  const vectorPath = "M 60 410 C 300 360, 520 300, 720 250 C 900 205, 1040 170, 1140 130";
  const cols = [140, 280, 420, 560, 700, 840, 980, 1120];
  const rows = [420, 360, 300, 240, 200, 170];
  const delayForX = (x) => (x / vw) * speed;

  return (
    <section className="relative w-full aspect-[28/12] overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-50 to-zinc-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)",
          backgroundSize: "3px 3px",
        }}
      />

      <svg viewBox={`0 0 ${vw} ${vh}`} className="absolute inset-0 h-full w-full">
        <defs>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="gridGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCDDE1" />
            <stop offset="100%" stopColor="#C8C9CF" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E5E7EB" />
            <stop offset="60%" stopColor="#D4D4D8" />
            <stop offset="100%" stopColor="#C7C7CC" />
          </linearGradient>
          <marker id="arrowHead" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M 0 0 L 12 6 L 0 12 z" fill="#A1A1AA" />
          </marker>
        </defs>

        {cols.map((x, i) => (
          <line key={`vc-${i}`} x1={x} y1={120} x2={x} y2={440} stroke="url(#gridGrad)" strokeWidth={1.2} strokeOpacity={0.55} />
        ))}
        {rows.map((y, i) => (
          <line key={`hr-${i}`} x1={80} y1={y} x2={1140} y2={y} stroke="url(#gridGrad)" strokeWidth={1.2} strokeOpacity={0.55} />
        ))}

        <path d={vectorPath} fill="none" stroke="url(#lineGrad)" strokeWidth={3} strokeLinecap="round" />
        <path d={vectorPath} fill="none" stroke={accentHex} strokeOpacity={0.18} strokeWidth={10} filter="url(#softGlow)" />
        <path
          d={vectorPath}
          fill="none"
          stroke={accentHex}
          strokeOpacity={0.55}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray="42 260"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-300" dur={`${speed}s`} repeatCount="indefinite" />
        </path>

        <path d={vectorPath} fill="none" stroke="#A1A1AA" strokeWidth={0} markerEnd="url(#arrowHead)" />
        <path id="pulsePath" d={vectorPath} fill="none" stroke="transparent" />

        <g filter="url(#softGlow)">
          <circle r="8.5" fill={accentHex} cx="0" cy="0">
            <animateMotion dur={`${speed}s`} repeatCount="indefinite" rotate="auto">
              <mpath xlinkHref="#pulsePath" />
            </animateMotion>
          </circle>
        </g>

        {cols.map((x, i) => (
          <g key={`vp-${i}`}>
            <circle r="5" fill={accentHex} cx={x} cy={440} opacity={0.0} filter="url(#softGlow)">
              <animate attributeName="opacity" values="0;1;0" dur={`${speed}s`} begin={`${delayForX(x)}s`} repeatCount="indefinite" />
              <animate attributeName="cy" from="440" to="140" dur={`${speed * 0.6}s`} begin={`${delayForX(x)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {rows.map((y, i) => (
          <g key={`hp-${i}`}>
            <circle r="4.5" fill={accentHex} cx={80} cy={y} opacity={0.0} filter="url(#softGlow)">
              <animate attributeName="opacity" values="0;1;0" dur={`${speed}s`} begin={`${(y / vh) * (speed * 0.5)}s`} repeatCount="indefinite" />
              <animate attributeName="cx" from="80" to="1140" dur={`${speed * 0.75}s`} begin={`${(y / vh) * (speed * 0.5)}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-6 flex w-full justify-center">
        <div className="px-10 sm:px-12 py-3 sm:py-3.5 rounded-full bg-white/35 text-zinc-800 backdrop-blur-xl border border-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_30px_rgba(0,0,0,0.12)]">
          <span className="tracking-[0.18em] font-semibold text-lg sm:text-2xl">CONSULTING</span>
        </div>
      </div>
    </section>
  );
}
