export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="tracking-[0.35em] text-xs uppercase text-neutral-500">
            The architecture of flow
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl leading-[1.08] tracking-tight">
            Your vision,
            <br /> worldwide
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-600 text-lg leading-relaxed">
            Guiding your vision worldwide — from sourcing the right manufacturer to delivering a
            finished product. Elegant structure. Precise execution.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:welcome@maisongp.com?subject=Start%20a%20project&body=Hi%20MGP,%20we%20would%20like%20to%20discuss..."
              className="glass inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium"
            >
              Start a project →
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-neutral-300/70 bg-white/60 hover:bg-white transition font-medium"
            >
              See solutions
            </a>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Solutions</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            Modular services you can combine as you scale. We design a path that fits your stage,
            budget and timeline — and keep it flexible.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6">
              <h3 className="font-semibold text-lg">Sourcing & Vendor Audit</h3>
              <p className="mt-2 text-neutral-600">
                Find the right factories and partners. We validate quality, capacity, and ethics
                before you commit.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Global vendor map</li>
                <li>• Compliance & certifications</li>
                <li>• Pilot runs & samples</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6">
              <h3 className="font-semibold text-lg">Production Orchestration</h3>
              <p className="mt-2 text-neutral-600">
                We manage timelines, cost, and risk so you can focus on brand and sales.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Critical path & milestones</li>
                <li>• QA / QC checkpoints</li>
                <li>• Cost & yield optimization</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6">
              <h3 className="font-semibold text-lg">Logistics & Launch</h3>
              <p className="mt-2 text-neutral-600">
                Secure routes, documentation, and delivery windows for smooth market entry.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Freight & customs strategy</li>
                <li>• Packaging & labeling</li>
                <li>• Post-launch support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT MINI-CARDS */}
      <section id="contact" className="mt-2 md:mt-4">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Start the conversation
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            Choose the inbox that best fits your request — we’ll route it to the right team and
            respond with focus.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* General */}
            <a
              href="mailto:welcome@maisongp.com"
              className="group rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6 hover:bg-white/80 transition block"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">General</h3>
                <span className="glass px-3 py-1 rounded-lg text-sm">welcome</span>
              </div>
              <p className="mt-2 text-neutral-600">
                Introductions, quick questions, press, and everything in-between.
              </p>
              <div className="mt-4 font-medium">welcome@maisongp.com →</div>
            </a>

            {/* Partners */}
            <a
              href="mailto:partners@maisongp.com?subject=Partnership%20proposal"
              className="group rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6 hover:bg-white/80 transition block"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">Partners</h3>
                <span className="glass px-3 py-1 rounded-lg text-sm">partners</span>
              </div>
              <p className="mt-2 text-neutral-600">
                Carriers, brokers, and vendors — share your capabilities.
              </p>
              <div className="mt-4 font-medium">partners@maisongp.com →</div>
            </a>

            {/* Careers */}
            <a
              href="mailto:careers@maisongp.com?subject=Careers"
              className="group rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6 hover:bg-white/80 transition block"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">Careers</h3>
                <span className="glass px-3 py-1 rounded-lg text-sm">careers</span>
              </div>
              <p className="mt-2 text-neutral-600">
                We’re always open to exceptional people. Send a short note and links.
              </p>
              <div className="mt-4 font-medium">careers@maisongp.com →</div>
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mt-2 md:mt-4">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pricing</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            Simple structure — start lean, scale when the fit is proven. Custom retainers available
            for complex programs.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {/* Plan 1 */}
            <div className="rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6">
              <h3 className="font-semibold text-lg">Pilot</h3>
              <p className="mt-1 text-neutral-600 text-sm">For early validation</p>
              <div className="mt-4 text-3xl font-semibold">$—</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Vendor shortlist (up to 5)</li>
                <li>• Sample & QA plan</li>
                <li>• Timeline & risk map</li>
              </ul>
            </div>

            {/* Plan 2 */}
            <div className="rounded-2xl border border-neutral-200/70 bg-white/70 backdrop-blur-md p-6 ring-1 ring-black/5">
              <h3 className="font-semibold text-lg">Growth</h3>
              <p className="mt-1 text-neutral-600 text-sm">Most popular</p>
              <div className="mt-4 text-3xl font-semibold">$—</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Full production orchestration</li>
                <li>• Cost & yield optimization</li>
                <li>• Logistics & documentation</li>
              </ul>
            </div>

            {/* Plan 3 */}
            <div className="rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-6">
              <h3 className="font-semibold text-lg">Program</h3>
              <p className="mt-1 text-neutral-600 text-sm">Custom retainers</p>
              <div className="mt-4 text-3xl font-semibold">Custom</div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                <li>• Multi-region portfolios</li>
                <li>• Embedded QA teams</li>
                <li>• Ongoing cost governance</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="mailto:welcome@maisongp.com?subject=Pricing"
              className="glass inline-flex px-5 py-3 rounded-xl font-medium"
            >
              Request a tailored quote →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-2 md:mt-4">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-5">
              <h3 className="font-medium">Where do you operate?</h3>
              <p className="mt-2 text-neutral-600">
                We work globally through a vetted network in North America, EU and APAC.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-5">
              <h3 className="font-medium">How do projects start?</h3>
              <p className="mt-2 text-neutral-600">
                A short discovery call, then a focused pilot to de-risk decisions before scaling.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-5">
              <h3 className="font-medium">Do you work under NDAs?</h3>
              <p className="mt-2 text-neutral-600">
                Yes. We treat confidentiality and IP with the same care as timelines and cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-4 md:mt-8">
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="rounded-2xl border border-neutral-200/70 bg-white/60 backdrop-blur-md p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ready when you are
            </h3>
            <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
              One email is enough to begin. We’ll answer with clarity, options, and next steps.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:welcome@maisongp.com"
                className="glass inline-flex px-6 py-3 rounded-xl font-medium"
              >
                Email welcome →
              </a>
              <a
                href="mailto:partners@maisongp.com?subject=Partner%20with%20MGP"
                className="inline-flex px-6 py-3 rounded-xl border border-neutral-300/70 bg-white/60 hover:bg-white transition font-medium"
              >
                Partner with us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
