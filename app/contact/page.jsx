// app/contact/page.jsx
"use client";

import GlassCard from "../components/GlassCard";

export default function ContactPage() {
  return (
    <main className="page">
      <section className="section section-tight" style={{ maxWidth: 900, margin: "0 auto" }}>
        <GlassCard>
          <h1 className="text-3xl font-display mb-4">Contact</h1>
          <p className="lead mb-6">
            Let’s build elegant structures where ambitions come to life.
          </p>

          <div className="btnbar" style={{ marginTop: 20 }}>
            <a className="neumorphic-btn" href="tel:+14388091901">
              +1 (438) 809-1901
            </a>

            <a className="neumorphic-btn" href="mailto:info@maisongp.com">
              info@maisongp.com
            </a>

            <a
              className="neumorphic-btn"
              href="https://www.linkedin.com/company/maison-global-partners/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}
