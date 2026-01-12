"use client";

const CITIES = [
  { name: "Montreal", tz: "America/Toronto" },
  { name: "London", tz: "Europe/London" },
  { name: "Hong Kong", tz: "Asia/Hong_Kong" },
];

export default function WorldClock() {
  return (
    <section className="world-clocks" aria-hidden="true">
      {CITIES.map(city => (
        <div className="clock-item" key={city.name}>
          <div className="clock-face">
            <div className="clock-marks" />
            <div className="clock-glow" />
            <div className="clock-hand hand-hour" />
            <div className="clock-hand hand-minute" />
            <div className="clock-hand hand-second" />
          </div>
          <div className="clock-city">{city.name}</div>
        </div>
      ))}
    </section>
  );
}
