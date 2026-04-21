"use client";
import { useEffect, useState } from "react";

function ClockFace({ timeZone }) {
  const [angles, setAngles] = useState({ h: 0, m: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).formatToParts(now);

      const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
      const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

      const h = (hour % 12) * 30 + minute * 0.5;
      const m = minute * 6;

      setAngles({ h, m });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <div className="clock-face">
      <div className="clock-rim" />
      <div className="clock-glass" />
      <div className="clock-marks">
        {[...Array(60)].map((_, i) => (
          <span key={i} style={{ transform: `translateX(-50%) rotate(${i * 6}deg)` }} />
        ))}
      </div>

      <div
        className="clock-hand hand-hour"
        style={{ transform: `translateX(-50%) rotate(${angles.h}deg)` }}
      />
      <div
        className="clock-hand hand-minute"
        style={{ transform: `translateX(-50%) rotate(${angles.m}deg)` }}
      />
      <div className="clock-pin" />
    </div>
  );
}

export default function WorldClock() {
  const clocks = [
    { city: "Montreal", timeZone: "America/Toronto" },
    { city: "London", timeZone: "Europe/London" },
    { city: "Hong Kong", timeZone: "Asia/Hong_Kong" },
  ];

  return (
    <section className="world-clocks" aria-label="World clocks">
      {clocks.map((clock) => (
        <div className="clock-item" key={clock.city}>
          <ClockFace timeZone={clock.timeZone} />
          <div className="clock-city">{clock.city}</div>
        </div>
      ))}
    </section>
  );
}
