// app/page.jsx
import GlassCard from "./components/GlassCard";

export default function Home() {
  return (
    <main className="relative z-10 space-y-32">
      {/* HERO */}
      <section className="text-center pt-28 pb-24 px-6">
        <h2 className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">
          The Architecture of Flow
        </h2>

        <h1 className="font-serif text-5xl md:text-6xl leading-tight text-gray-900 mb-6">
          Your vision, <br className="hidden md:block" /> worldwide
        </h1>

        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          Guiding your vision worldwide — from sourcing the right manufacturer
          to delivering a finished product. Elegant structure. Precise execution.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition"
          >
            Start a Project →
          </a>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Solutions</h2>
        <p className="text-gray-600 max-w-3xl mb-10">
          We provide tailored sourcing, logistics, and supply chain solutions to
          help your business scale globally with confidence and precision.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Sourcing & Vendor Match</h3>
            <p className="text-gray-600 text-sm">
              Find the right manufacturer with due diligence, sampling and clear specs.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Production Orchestration</h3>
            <p className="text-gray-600 text-sm">
              Timeline, QA, documentation and proactive issue-solving built in.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Logistics & Compliance</h3>
            <p className="text-gray-600 text-sm">
              Freight, customs, certificates — a single, visible flow to your door.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Pricing</h2>
        <p className="text-gray-600 max-w-3xl mb-10">
          Transparent and flexible options tailored to project scale.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-500 italic mb-4">On request</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>— Lightweight sourcing</li>
              <li>— Basic compliance check</li>
              <li>— Email support</li>
            </ul>
            <div className="mt-4">
              <a
                href="#contact"
                className="inline-block text-sm px-4 py-2 rounded-xl bg-white/70 backdrop-blur-lg border border-white/20 hover:shadow-lg transition"
              >
                Contact us →
              </a>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Core</h3>
            <p className="text-gray-500 italic mb-4">On request</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>— Full vendor search & sampling</li>
              <li>— Production oversight</li>
              <li>— Logistics coordination</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-500 italic mb-4">On request</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>— End-to-end supply chain design</li>
              <li>— Dedicated account manager</li>
              <li>— Custom solutions at scale</li>
            </ul>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}
