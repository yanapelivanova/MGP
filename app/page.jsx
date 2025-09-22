// app/page.jsx
"use client";

export default function Home() {
  return (
    <main className="page">
      {/* ===== Header (“потолок”) ===== */}
      <header className="site-header">
        {/* Слева: якорь в Contact */}
        <a href="#contact" className="hdr-btn" aria-label="Jump to Contact">
          {/* minimal mail/phone mix icon */}
          <svg viewBox="0 0 24 24" className="hdr-ico" aria-hidden="true">
            <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span className="hdr-label">Contact</span>
        </a>

        {/* Центр: небольшой логотип */}
        <a href="/" className="brand-mini" aria-label="Maison Global Partners">
          <img src="/logo.png" alt="Maison Global Partners" />
        </a>

        {/* Справа: иконка-меню (две полоски) */}
        <button className="hdr-btn" aria-label="Open menu" type="button">
          <svg viewBox="0 0 24 24" className="hdr-ico" aria-hidden="true">
            <path d="M4 8.5h16M4 15.5h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="hdr-label">Menu</span>
        </button>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <h1 className="title">Maison Global Partners</h1>

        {/* Элегантный сабтайтл в две строки */}
        <p className="subtitle">
          Global sourcing and <br className="br-sm"/> supply chain solutions.
        </p>

        <div className="btnbar">
          <a className="neumorphic-btn" href="#services">Services</a>
          <a className="neumorphic-btn" href="#contact">Contact</a>
          <a
            className="neumorphic-btn"
            href="https://www.linkedin.com/company/maison-global-partners"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ===== HOW WE DELIVER VALUE ===== */}
      <section id="services" className="section">
        <h2 className="h2">How we deliver value</h2>

        <div className="cards">
          {/* Service 1 */}
          <article className="card">
            <h3 className="card-title">Global Sourcing</h3>
            <p className="card-text">
              We map the best-fit manufacturers worldwide, run structured RFQs,
              and secure reliable capacity, quality and terms — so your product
              reaches the right factory line, on time.
            </p>
          </article>

          {/* Service 2 */}
          <article className="card">
            <h3 className="card-title">Supply Chain Optimisation</h3>
            <p className="card-text">
              From demand planning to logistics lanes, we streamline the chain:
              lower landed cost, reduce lead time volatility, and increase OTIF
              delivery through data-led process design.
            </p>
          </article>

          {/* Service 3 */}
          <article className="card">
            <h3 className="card-title">Turnkey Solutions</h3>
            <p className="card-text">
              A single accountable partner from concept to shipment: vendor
              onboarding, compliance, QA/QC, packaging, documentation and
              freight — all orchestrated end-to-end.
            </p>
          </article>

          {/* Service 4 */}
          <article className="card">
            <h3 className="card-title">Branding</h3>
            <p className="card-text">
              Visual systems and packaging that echo your architecture of flow:
              refined identity, product storytelling and market-ready assets that
              travel well across regions.
            </p>
          </article>
        </div>
      </section>

      {/* ===== ABOUT (короткий блок, можно оставить как есть) ===== */}
      <section className="section">
        <h2 className="h2">Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant
          structure and precise execution.
        </p>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="section">
        <h2 className="h2">Contact</h2>

        <div className="mailbox">
          {/* Phone */}
          <a className="mail" href="tel:+15145551234">
            <span className="mail-ico" aria-hidden="true">
              {/* phone icon */}
              <svg viewBox="0 0 24 24">
                <path d="M5 4c1.5 0 3 1.2 3.4 2.7l.4 1.5c.2.7-.1 1.5-.7 1.9l-1 .7c1.4 2.7 3.6 4.9 6.3 6.3l.7-1c.4-.6 1.2-.9 1.9-.7l1.5.4C20.8 16 22 17.5 22 19v1a2 2 0 0 1-2 2h-1C9.2 22 2 14.8 2 6V5a2 2 0 0 1 2-2h1Z" fill="currentColor"/>
              </svg>
            </span>
            +1 (514) 555-1234
          </a>

          {/* Emails */}
          <a className="mail" href="mailto:welcome@maisongp.com">
            <span className="mail-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
            welcome@maisongp.com
          </a>

          <a className="mail" href="mailto:partners@maisongp.com">
            <span className="mail-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
            partners@maisongp.com
          </a>

          <a className="mail" href="mailto:careers@maisongp.com">
            <span className="mail-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </span>
            careers@maisongp.com
          </a>

          {/* LinkedIn */}
          <a
            className="mail"
            href="https://www.linkedin.com/company/maison-global-partners"
            target="_blank"
            rel="noopener"
          >
            <span className="mail-ico" aria-hidden="true">
              {/* LinkedIn icon */}
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8h5v15H0V8Zm7.5 0h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V23H18v-6.67c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.52V23H7.5V8Z" fill="currentColor"/>
              </svg>
            </span>
            LinkedIn
          </a>
        </div>
      </section>

      {/* ===== FOOTER (Legal перед Français) ===== */}
      <footer className="foot">
        <nav className="foot-nav">
          <a href="/legal" className="foot-link">Legal</a>
          <span className="dot">·</span>
          <a href="/fr" className="foot-link">Français</a>
        </nav>
        <div>© 2025 Maison Global Partners. All rights reserved.</div>
      </footer>
    </main>
  );
}
