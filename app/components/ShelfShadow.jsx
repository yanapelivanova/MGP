"use client";

/**
 * ShelfShadow — декоративная «полка»-тень.
 * Просто статическая мягкая тень, как на твоём примере (now or never).
 */
export default function ShelfShadow({ className = "" }) {
  return (
    <div
      className={`mgp-shelf-shadow ${className}`}
      aria-hidden="true"
    />
  );
}
