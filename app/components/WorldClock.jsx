"use client";

export default function WorldClock() {
  return (
    <div className="world-clock-wrap" aria-hidden="true">
      <div className="clock-face">
        {/* метки */}
        <div className="clock-marks" />

        {/* световая пыль */}
        <div className="clock-glow" />

        {/* стрелки */}
        <div className="hand hour" />
        <div className="hand minute" />
        <div className="hand second" />
      </div>
    </div>
  );
}
