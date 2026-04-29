"use client";

import { useEffect, useState } from "react";

const CLOCKS = [
  { city: "Montreal", timeZone: "America/Toronto" },
  { city: "London", timeZone: "Europe/London" },
  { city: "Hong Kong", timeZone: "Asia/Hong_Kong" },
];

function getAngles(timeZone) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((p) => p.type === "hour")?.value || 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value || 0);
  const second = Number(parts.find((p) => p.type === "second")?.value || 0);

  return {
    h: (hour % 12) * 30 + minute * 0.5,
    m: minute * 6 + second * 0.1,
    s: second * 6,
  };
}

function ClockFace({ timeZone, city }) {
  const [angles, setAngles] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => setAngles(getAngles(timeZone));
    update();

    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <div className="clock-shell">
      <div className="clock-image" />

      <div
        className="clock-hand-img hand-hour-img"
        style={{ transform: `translateX(-50%) rotate(${angles.h}deg)` }}
      />
      <div
        className="clock-hand-img hand-minute-img"
        style={{ transform: `translateX(-50%) rotate(${angles.m}deg)` }}
      />
      <div
        className="clock-hand-img hand-second-img"
        style={{ transform: `translateX(-50%) rotate(${angles.s}deg)` }}
      />

      <div className="clock-center-img" />

      {/* город внутри */}
      <div className="clock-city-inside">{city}</div>
    </div>
  );
}

export default function WorldClock() {
  return (
    <section className="world-clocks">
      {CLOCKS.map((clock) => (
        <div className="clock-item" key={clock.city}>
          <ClockFace
            timeZone={clock.timeZone}
            city={clock.city}
          />
        </div>
      ))}
    </section>
  );
}
