"use client";

import Image from "next/image";

export default function SvcImage({ src, alt, className = "" }) {
  return (
    <div className={`relative w-full svc-soft-wrap ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="object-contain w-full h-auto rounded-xl z-[2] relative"
        priority={false}
      />

      {/* Soft glow */}
      <div className="svc-soft-glow" aria-hidden="true" />
    </div>
  );
}
