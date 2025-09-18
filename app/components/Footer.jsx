// app/components/Footer.jsx
"use client";

import { useEffect, useRef, useState } from "react";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer" className="relative mt-24">
      {/* мягкий градиент подложки футера */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-stone-100/90" />

      <footer className="relative mx-auto max-w-6xl px-6 md:px-8 py-16 text-stone-800">
        {/* Вступление / бренд */}
        <Reveal>
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-serif tracking-tight">
              Maison Global Partners
            </h3>
            <p className="mt-3 leading-relaxed text-stone-600">
              Architecture of Flow — guiding your vision worldwide with elegant
              structure and precise execution.
            </p>
          </div>
        </Reveal>

        {/* Сетка: Explore + Контакты */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Explore */}
          <Reveal delay={100}>
            <div>
              <div className="text-[12px] tracking-[0.22em] text-stone-400 mb-3">
                EXPLORE
              </div>
              <nav className="space-y-2 text-[15px]">
                <a href="#solutions" className="group block">
                  <span className="underline-offset-4 group-hover:underline transition">
                    Solutions
                  </span>
                </a>
                <a href="#pricing" className="group block">
                  <span className="underline-offset-4 group-hover:underline transition">
                    Pricing
                  </span>
                </a>
                <a href="#contact" className="group block">
                  <span className="underline-offset-4 group-hover:underline transition">
                    Contact
                  </span>
                </a>
              </nav>
            </div>
          </Reveal>

          {/* General */}
          <Reveal delay={150}>
            <div>
              <div className="text-[12px] tracking-[0.22em] text-stone-400 mb-3">
                CONTACT — GENERAL
              </div>

              <a
                href="mailto:welcome@maisongp.com"
                className="block rounded-2xl p-4 bg-white/35 border border-white/25 backdrop-blur-md
                           shadow-sm hover:bg-white/55 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="text-xl select-none opacity-60"
                    title="Email"
                  >
                    ✉️
                  </span>
                  <div>
                    <div className="text-sm font-medium">welcome@maisongp.com</div>
                    <div className="text-xs text-stone-500">
                      Start the conversation
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Partners */}
          <Reveal delay={200}>
            <div>
              <div className="text-[12px] tracking-[0.22em] text-stone-400 mb-3">
                CONTACT — PARTNERS
              </div>

              <a
                href="mailto:partners@maisongp.com"
                className="block rounded-2xl p-4 bg-white/35 border border-white/25 backdrop-blur-md
                           shadow-sm hover:bg-white/55 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="text-xl select-none opacity-60"
                    title="Partners"
                  >
                    🤝
                  </span>
                  <div>
                    <div className="text-sm font-medium">partners@maisongp.com</div>
                    <div className="text-xs text-stone-500">
                      For carriers, brokers & contractors
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Careers */}
          <Reveal delay={250}>
            <div>
              <div className="text-[12px] tracking-[0.22em] text-stone-400 mb-3">
                CONTACT — CAREERS
              </div>

              <a
                href="mailto:careers@maisongp.com"
                className="block rounded-2xl p-4 bg-white/35 border border-white/25 backdrop-blur-md
                           shadow-sm hover:bg-white/55 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="text-xl select-none opacity-60"
                    title="Careers"
                  >
                    💼
                  </span>
                  <div>
                    <div className="text-sm font-medium">careers@maisongp.com</div>
                    <div className="text-xs text-stone-500">For talent & hiring</div>
                  </div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={300}>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-white/40 border border-white/25 backdrop-blur-md
                         shadow-sm hover:bg-white/70 hover:shadow-lg transition"
            >
              <span className="font-medium">Start a Project</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>

        {/* Низ футера */}
        <Reveal delay={350}>
          <div className="mt-14 pt-6 border-t border-white/40 text-xs text-stone-500">
            © {year} Maison Global Partners. All rights reserved.
          </div>
        </Reveal>
      </footer>
    </section>
  );
}
