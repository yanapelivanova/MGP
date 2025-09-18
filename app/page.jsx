// app/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";

/** небольшой реюзабельный reveal без библиотек */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.12 }
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

export default function Home() {
  return (
    <main className="relative">
      {/* HERO */}
      <section
        className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
        aria-labelledby="hero-title"
      >
        {/* ласковая дымка + градиент */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(0,0,0,0.55),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-900/35 via-stone-900/15 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 text-stone-900">
          <Reveal>
            <p className="tracking-[0.22em] text-xs text-stone-400">
              THE ARCHITECTURE OF FLOW
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-4 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl text-stone-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.2)]"
            >
              Your vision, <br className="hidden sm:block" />
              worldwide
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-2xl text-stone-600 leading-relaxed">
              Guiding your vision worldwide — from sourcing the right manufacturer
              to delivering a finished product. Elegant structure. Precise
              execution.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* основная кнопка — «стекло» */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3
                           bg-white/40 border border-white/25 backdrop-blur-md
                           shadow-sm hover:bg-white/70 hover:shadow-lg
                           transition"
              >
                <span className="font-medium">Start a Project</span>
                <span aria-hidden>→</span>
              </a>

              {/* вторичная — контур со стеклянным бликом */}
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3
                           border border-white/50/60 bg-white/10 backdrop-blur
                           text-stone-800 hover:bg-white/30 hover:shadow
                           transition"
              >
                See solutions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-stone-100/80" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              Solutions
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-3 max-w-2xl text-stone-600">
              We provide tailored sourcing, logistics, and supply chain solutions
              to help your business scale globally with confidence and precision.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Sourcing & Vendor Match",
                text:
                  "Find the right manufacturer with due diligence, sampling and clear specs.",
              },
              {
                title: "Production Orchestration",
                text:
                  "Timeline, QA, documentation and proactive issue-solving built in.",
              },
              {
                title: "Logistics & Compliance",
                text:
                  "Freight, customs, certificates — a single, visible flow to your door.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={100 + i * 80}>
                <div className="rounded-2xl bg-white/55 border border-white/30 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition">
                  <div className="text-lg font-medium text-stone-900">
                    {card.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — стеклянные карточки с ховером */}
      <section id="pricing" className="relative py-18 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-100/60 via-white/60 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              Pricing
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-3 max-w-2xl text-stone-600">
              Transparent and flexible options tailored to project scale. No
              hidden fees — ever.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "On request",
                bullets: [
                  "Lightweight sourcing",
                  "Basic compliance check",
                  "Email support",
                ],
              },
              {
                name: "Core",
                price: "On request",
                bullets: [
                  "Full vendor search & sampling",
                  "Production oversight",
                  "Logistics coordination",
                ],
                featured: true,
              },
              {
                name: "Prime",
                price: "For clients",
                bullets: [
                  "End-to-end orchestration",
                  "Priority lanes & reporting",
                  "Dedicated channel",
                ],
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={120 + i * 90}>
                <div
                  className={`group relative rounded-3xl p-6 backdrop-blur-md border shadow-sm
                    transition hover:shadow-xl
                    ${p.featured
                      ? "bg-white/70 border-white/40"
                      : "bg-white/50 border-white/30"}`}
                >
                  {/* легкий блик при hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                                  bg-gradient-to-br from-white/40 via-transparent to-white/10" />

                  <div className="relative">
                    <div className="text-stone-900 text-lg font-medium">
                      {p.name}
                    </div>
                    <div className="mt-1 text-stone-500 text-sm">{p.price}</div>

                    <ul className="mt-4 space-y-2 text-sm text-stone-700">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span aria-hidden>—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2
                                 bg-white/40 border border-white/25
                                 hover:bg-white/70 transition"
                    >
                      Contact us →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20">
        <div className="relative mx-auto max-w-4xl px-6 md:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              Contact Us
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-3 text-stone-600">
              Reach out for inquiries, partnerships, or project discussions.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <a
              href="mailto:welcome@maisongp.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3
                         bg-white/40 border border-white/25 backdrop-blur-md
                         shadow-sm hover:bg-white/70 hover:shadow-lg transition"
            >
              Email Us →
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
