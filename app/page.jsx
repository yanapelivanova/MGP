// app/page.jsx
export default function Page() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-white/50 mb-4">
            THE ARCHITECTURE OF FLOW
          </p>
          <h1 className="text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight">
            Your vision, <span className="text-white/70">worldwide</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/70">
            Guiding your vision worldwide — from sourcing the right manufacturer to
            delivering a finished product. Elegant structure. Precise execution.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn">Start a Project →</a>
            <a href="#solutions" className="btn-outline">See Solutions</a>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl mb-6">Solutions</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="glass rounded-2xl p-6">
            <h3 className="text-lg mb-2">Sourcing & Vetting</h3>
            <p className="text-white/70 text-sm">
              Vendor scouting, audits, samples and test runs to secure the right partner.
            </p>
          </article>

          <article className="glass rounded-2xl p-6">
            <h3 className="text-lg mb-2">Production Management</h3>
            <p className="text-white/70 text-sm">
              Calendars, QC checkpoints and on-site supervision for reliable timelines.
            </p>
          </article>

          <article className="glass rounded-2xl p-6">
            <h3 className="text-lg mb-2">Logistics & Compliance</h3>
            <p className="text-white/70 text-sm">
              End-to-end shipping, paperwork, duties and market-specific standards.
            </p>
          </article>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-xl mb-6">Pricing</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg">Starter</h3>
            <p className="text-sm text-white/70 mt-1">Small batches, early validation.</p>
            <p className="mt-4 text-3xl">$1.2k</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• 1 vendor search</li>
              <li>• Basic QC checklist</li>
              <li>• Shipping guidance</li>
            </ul>
            <a href="#contact" className="btn mt-6 w-full">Choose Starter</a>
          </div>

          <div className="glass rounded-2xl p-6 border-white/20">
            <h3 className="text-lg">Growth</h3>
            <p className="text-sm text-white/70 mt-1">Steady batches, multiple SKUs.</p>
            <p className="mt-4 text-3xl">$3.8k</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• 2–3 vendors & sampling</li>
              <li>• QC plan & reports</li>
              <li>• Freight & customs</li>
            </ul>
            <a href="#contact" className="btn mt-6 w-full">Choose Growth</a>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg">Prime</h3>
            <p className="text-sm text-white/70 mt-1">Ongoing operations at scale.</p>
            <p className="mt-4 text-3xl">Custom</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Dedicated PM & on-site QC</li>
              <li>• Multi-factory orchestration</li>
              <li>• Full compliance stack</li>
            </ul>
            <a href="#contact" className="btn mt-6 w-full">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-xl mb-2">Start the Conversation</h2>
          <p className="text-white/70 mb-6">
            Tell us about your vision — we’ll reply within 24 hours.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a className="btn w-full" href="mailto:welcome@maisongp.com">welcome@maisongp.com</a>
            <a className="btn-outline w-full" href="mailto:partners@maisongp.com">partners@maisongp.com</a>
            <a className="btn-outline w-full" href="mailto:careers@maisongp.com">careers@maisongp.com</a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="#pricing">View Pricing</a>
            <a className="btn-outline" href="#solutions">See Solutions</a>
          </div>
        </div>
      </section>

      {/* Spacer before footer */}
      <div className="h-16" />
    </main>
  );
}
