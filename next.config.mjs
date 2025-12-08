/** @type {import('next').NextConfig} */
const nextConfig = {
  // Надёжнее ловит ошибки в React
  reactStrictMode: true,

  // Чуть лучше производительность на проде
  swcMinify: true,
  compress: true,

  // Чистим лишний заголовок
  poweredByHeader: false,

  // Упрощает деплой (VPS, Docker, Render и т.п.)
  output: "standalone",

  // Картинки: современные форматы + всё локально из /public
  images: {
    formats: ["image/avif", "image/webp"],
    // domains: [] // не нужно, т.к. используем локальные /public/*.png
  },

  // Глобальные security / caching заголовки
  async headers() {
    return [
      // Безопасность по умолчанию для всех путей
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Включай HSTS только если сайт всегда раздаётся по HTTPS (у тебя да)
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
        ],
      },
      // Долгое кэширование статических ассетов из /public
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // И для бандла Next.js
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  // Если понадобится:
  // async redirects() { return []; },
  // async rewrites()  { return []; },
};

export default nextConfig;
