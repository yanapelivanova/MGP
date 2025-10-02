// app/components/SvcImage.jsx
"use client";

import Image from "next/image";

export default function SvcImage({ src, alt, className = "" }) {
  return (
    <div className={`svc-img ${className}`}>
      {/* Картинка */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1100px) 100vw, 540px"
        className="svc-img-el"
        priority={false}
      />

      {/* Мягкое свечение + пульсация по краю */}
      <div className="svc-img-glow" aria-hidden="true" />
    </div>
  );
}
