"use client";

export default function WorldClock() {
  return (
    <section className="world-clocks" aria-hidden="true">
      <Clock city="Montreal" />
      <Clock city="London" />
      <Clock city="Hong Kong" />
    </section>
  );
}

function Clock({ city }) {
  return (
    <div className="clock-item">
      <div className="clock-face">
        {/* метки */}
        <div className="clock-marks">
          {Array.from({ length: 60 }).map((_, i) => (
            <span key={i} style={{ transform: `rotate(${i * 6}deg)` }} />
          ))}
        </div>

        {/* световая пыль */}
        <div className="clock-glow" />

        {/* стрелки */}
        <div className="clock-hand hand-hour" />
        <div className="clock-hand hand-minute" />
        <div className="clock-hand hand-second" />
      </div>

      <div className="clock-city">{city}</div>
    </div>
  );
}
