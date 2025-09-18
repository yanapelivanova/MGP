"use client";
import GlassCard from "./components/GlassCard";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="relative isolate">
      {/* мягкий атмосферный фон */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 540px at 50% -8%, rgba(255,255,255,0.88), rgba(255,255,255,0.66) 45%, rgba(255,255,255,0.22) 70%, transparent 100%), linear-gradient(180deg, rgba(23,23,23,0.05), rgba(23,23,23,0))",
        }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-24 md:px-8 md:pb-20 md:pt-28">
        <p className="tracking-[0.25em] text-xs text-stone-500">THE ARCHITECTURE OF FLOW</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-stone-900 md:text-6xl">
          Your vision, <br className="hidden sm:block" />
          worldwide
        </h1>
        <p className="mt-5 max-w-2xl text-stone-600 md:text-lg">
          Guiding your vision worldwide — from sourcing the right manufacturer to delivering a finished product.
          Elegant structure. Precise execution.
        </p>

        <Button
          href="mailto:welcome@maisongp.com?subject=Start%20a%20Project"
          className="mt-8"
        >
          Start a Project →
        </Button>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <h2 className="font-serif text-4xl text-stone-900 md:text-5xl">Solutions</h2>
        <p className="mt-3 max-w-3xl text-stone-600 md:text-lg">
          We provide tailored sourcing, logistics, and supply chain solutions to help your business scale globally
          with confidence and precision.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <h3 className="font-serif text-2xl text-stone-900">Sourcing & Vendor Match</h3>
            <p className="mt-2 text-stone-600">
              Find the right manufacturer with due diligence, sampling and clear specs.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="font-serif text-2xl text-stone-900">Production Orchestration</h3>
            <p className="mt-2 text-stone-600">
              Timeline, QA, documentation and proactive issue-solving built in.
            </p>
          </GlassCard>

          <GlassCard className="md:col-span-2">
            <h3 className="font-serif text-2xl text-stone-900">Logistics & Compliance</h3>
            <p className="mt-2 text-stone-600">
              Freight, customs, certificates — a single, visible flow to your door.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <h2 className="font-serif text-4xl text-stone-900 md:text-5xl">Pricing</h2>
        <p className="mt-3 max-w-3xl text-stone-600 md:text-lg">
          Transparent and flexible options tailored to project scale.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard>
            <h3 className="font-serif text-2xl text-stone-900">Starter</h3>
            <p className="mt-1 text-stone-500">On request</p>
            <ul className="mt-4 space-y-2 text-stone-700">
              <li>— Lightweight sourcing</li>
              <li>— Basic compliance check</li>
              <li>— Email support</li>
            </ul>
            <Button
              href="mailto:welcome@maisongp.com?subject=Starter%20Plan"
              className="mt-6"
            >
              Contact us →
            </Button>
          </GlassCard>

          <GlassCard>
            <h3 className="font-serif text-2xl text-stone-900">Core</h3>
            <p className="mt-1 text-stone-500">On request</p>
            <ul className="mt-4 space-y-2 text-stone-700">
              <li>— Full vendor search & sampling</li>
              <li>— Production oversight</li>
              <li>— Logistics coordination</li>
            </ul>
            <Button
              href="mailto:welcome@maisongp.com?subject=Core%20Plan"
              className="mt-6"
            >
              Contact us →
            </Button>
          </GlassCard>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 md:px-8">
        <GlassCard className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-serif text-2xl text-stone-900">Start the Conversation</h3>
            <p className="mt-1 text-stone-600">
              A quick line is all it takes — we’ll reply within 1 business day.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <div className="glass-chip">welcome@maisongp.com</div>
              <div className="glass-chip">partners@maisongp.com</div>
              <div className="glass-chip">careers@maisongp.com</div>
            </div>
          </div>
          <Button href="mailto:welcome@maisongp.com?subject=Hello">Email Us →</Button>
        </GlassCard>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="glass-footer">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-serif text-xl text-stone-900">Maison Global Partners</h4>
              <p className="mt-2 text-stone-600">
                Architecture of Flow — guiding your vision worldwide with elegant structure and precise execution.
              </p>
            </div>

            <nav className="text-stone-700">
              <h5 className="mb-2 font-medium tracking-wide text-stone-500">Explore</h5>
              <ul className="space-y-2">
                <li><a href="#solutions" className="underline-offset-4 hover:underline">Solutions</a></li>
                <li><a href="#pricing" className="underline-offset-4 hover:underline">Pricing</a></li>
                <li><a href="#contact" className="underline-offset-4 hover:underline">Contact</a></li>
              </ul>
            </nav>

            <div className="text-stone-700">
              <h5 className="mb-2 font-medium tracking-wide text-stone-500">Contact</h5>
              <ul className="space-y-2">
                <li className="glass-chip w-max">welcome@maisongp.com</li>
                <li className="glass-chip w-max">partners@maisongp.com</li>
                <li className="glass-chip w-max">careers@maisongp.com</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/30 pt-4 text-sm text-stone-500">
            © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
