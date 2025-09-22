"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const legalRef = useRef(null);

  const scrollTo = (ref) => {
    setDrawerOpen(false);
    setLangOpen(false);
    if (!ref?.current) return;
    const top = ref.current.getBoundingClientRect().top + window.scrollY - 96; // офсет под хедер
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <main className="page">
      {/* ---------- TOPBAR ---------- */}
      <header className="topbar">
        {/* слева — мини-кнопки: звонок, e-mail (скролл к контактам), язык */}
        <div className="top-actions">
          <a className="mini-btn" href="tel:+14388091901" aria-label="Call">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.32l3.4 1.36a1.4 1.4 0 01.89 1.3V20a2 2 0 01-2 2A18 18 0 014 6a2 2 0 012-2h2.46a1.4 1.4 0 011.3.88l1.36 3.41c.2.5.09 1.06-.31 1.46l-2.21 2.05z" />
            </svg>
          </a>

          <button className="mini-btn" onClick={() => scrollTo(contactRef)} aria-label="Email">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm8 6L4.8 8.9a1 1 0 00-.8-.1V8l8 5 8-5v.8a1 1 0 00-.8.1L12 12z" />
            </svg>
          </button>

          <div className="lang-wrap">
            <button
              className="mini-btn"
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Language"
            >
              <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
              </svg>
            </button>
            {langOpen && (
              <div className="lang-menu">
                <a href="#" onClick={() => setLangOpen(false)}>English</a>
                <a href="#fr" onClick={() => setLangOpen(false)}>Français</a>
              </div>
            )}
          </div>
        </div>

        {/* центр — логотип (по высоте хедера) */}
        <button
          className="brand-mark"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* используем твой файл /public/logo.png */}
          <img src="/logo.png" alt="Maison Global Partners" />
        </button>

        {/* справа — бургер */}
        <button className="icon-pill" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <span className="ico-burger" />
        </button>
      </header>

      {/* DRAWER */}
      {drawerOpen && (
        <>
          <div className="overlay" onClick={() => setDrawerOpen(false)} />
          <aside className="drawer" role="dialog" aria-label="Menu">
            <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close">
              ×
            </button>
            <ul className="drawer-list">
              <li><button onClick={() => scrollTo(aboutRef)}>About</button></li>
              <li><button onClick={() => scrollTo(servicesRef)}>Services</button></li>
              <li><button onClick={() => scrollTo(contactRef)}>Contact</button></li>
              <li><button onClick={() => scrollTo(legalRef)}>Legal</button></li>
              <li className="drawer-fr"><a href="#fr">Français</a></li>
            </ul>
          </aside>
        </>
      )}

      {/* ---------- HERO ---------- */}
      <section ref={aboutRef} className="hero section" id="about">
        <h1 className="hero-title">Maison Global Partners</h1>
        <p className="hero-tagline">
          Global sourcing<br />and supply-chain solutions
        </p>

        <div className="btnbar">
          <button className="neumorphic-btn" onClick={() => scrollTo(contactRef)}>Contact</button>
          <button className="neumorphic-btn" onClick={() => scrollTo(servicesRef)}>Services</button>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section ref={servicesRef} className="section" id="services">
        <h2>How we deliver value</h2>

        <div className="cards">
          <article className="card">
            <img className="card-img" src="/svc-global.png" alt="Global Sourcing" />
            <h3>Global Sourcing</h3>
            <p>Supplier scouting across the Americas, Europe and Asia; due diligence, audits and sample runs to secure the best quality–cost ratio.</p>
          </article>

          <article className="card">
            <img className="card-img" src="/svc-optim.png" alt="Supply-Chain Optimisation" />
            <h3>Supply-Chain Optimisation</h3>
            <p>Network design, planning and logistics flows with measurable KPI improvements and OTD/OTIF reliability.</p>
          </article>

          <article className="card">
            <img className="card-img" src="/svc-turnkey.png" alt="Turnkey Solutions" />
            <h3>Turnkey Solutions</h3>
            <p>From idea to market: BOM, specification, QA, packaging and complete documentation — end-to-end.</p>
          </article>

          <article className="card">
            <img className="card-img" src="/svc-branding.png" alt="Branding" />
            <h3>Branding</h3>
            <p>Naming, identity and packaging that build trust across channels and markets.</p>
          </article>
        </div>
      </section>

      {/* ---------- ABOUT SHORT ---------- */}
      <section className="section">
        <h2>Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant structure and precise execution.
        </p>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section ref={contactRef} className="section" id="contact">
        <h3>Contact</h3>

        {/* компактная форма */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea name="message" rows={3} placeholder="Message" />
          <div className="form-actions">
            <button className="neumorphic-btn" type="submit">Send</button>
          </div>
        </form>

        {/* телефон */}
        <a className="mail" href="tel:+14388091901">
          <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1.4 1.4 0 011.5-.32l3.4 1.36a1.4 1.4 0 01.89 1.3V20a2 2 0 01-2 2A18 18 0 014 6a2 2 0 012-2h2.46a1.4 1.4 0 011.3.88l1.36 3.41c.2.5.09 1.06-.31 1.46l-2.21 2.05z" />
          </svg>
          +1 (438) 809-1901
        </a>

        {/* три почты — один аккуратный контейнер */}
        <div className="mail mail-stack">
          <div className="stack-row">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm8 6L4.8 8.9a1 1 0 00-.8-.1V8l8 5 8-5v.8a1 1 0 00-.8.1L12 12z" />
            </svg>
            <div>
              <div className="stack-label">for inquiries</div>
              <a className="stack-link" href="mailto:welcome@maisongp.com">welcome@maisongp.com</a>
            </div>
          </div>

          <div className="stack-row">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm8 6L4.8 8.9a1 1 0 00-.8-.1V8l8 5 8-5v.8a1 1 0 00-.8.1L12 12z" />
            </svg>
            <div>
              <div className="stack-label">for partners</div>
              <a className="stack-link" href="mailto:partners@maisongp.com">partners@maisongp.com</a>
            </div>
          </div>

          <div className="stack-row">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm8 6L4.8 8.9a1 1 0 00-.8-.1V8l8 5 8-5v.8a1 1 0 00-.8.1L12 12z" />
            </svg>
            <div>
              <div className="stack-label">for careers</div>
              <a className="stack-link" href="mailto:careers@maisongp.com">careers@maisongp.com</a>
            </div>
          </div>
        </div>

        {/* LinkedIn — того же размера по высоте строки */}
        <a
          className="mail"
          href="https://www.linkedin.com/company/maison-global-partners/"
          target="_blank"
          rel="noopener"
        >
          <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2" />
            <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">in</text>
          </svg>
          LinkedIn
        </a>

        <p className="based">Based in Montreal, Quebec, Canada.</p>
      </section>

      {/* якорь для Legal (для скролла из меню) */}
      <div ref={legalRef} aria-hidden="true" />
    </main>
  );
}
