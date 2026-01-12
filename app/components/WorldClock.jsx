"use client";
import { useEffect } from "react";

export default function WorldClock({ offset = 0 }) {
  useEffect(() => {
    const update = () => {
      const now = new Date(Date.now() + offset * 3600000);
      const h = now.getHours() % 12;
      const m = now.getMinutes();
      const s = now.getSeconds();

      const hourDeg = h * 30 + m * 0.5;
      const minDeg = m * 6;
      const secDeg = s * 6;

      document.documentElement.style.setProperty("--h", `${hourDeg}deg`);
      document.documentElement.style.setProperty("--m", `${minDeg}deg`);
      document.documentElement.style.setProperty("--s", `${secDeg}deg`);
    };

    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, [offset]);

  return (
    <div className="clock-face">
      <div className="clock-marks">
        {[...Array(60)].map((_, i) => (
          <span key={i} style={{ transform: `rotate(${i * 6}deg)` }} />
        ))}
      </div>

      <div className="clock-glow" />

      <div className="clock-hand hand-hour" />
      <div className="clock-hand hand-minute" />
      <div className="clock-hand hand-second" />
    </div>
  );
}
