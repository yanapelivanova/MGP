// app/page.jsx
"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isFr, setIsFr] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsFr(window.location.pathname.startsWith("/fr"));
    }
  }, []);

  // refs секций
  const homeRef = useRef(null);
  const solutionsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    setDrawerOpen(false);
    setLangOpen(false);
    if (!ref?.current) return;
    const y = ref.current.getBoundingClientRect().top + window.scrollY - 108;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const switchLang = () => {
    window.location.href = isFr ? "/" : "/fr";
  };

  return (
    <main className="page" ref={homeRef}>
      {/* ---------- TOPBAR ---------- */}
      <header className="topbar">
        {/* слева — мини-кнопки */}
        <div className="top-actions">
          {/* phone */}
          <a className="mini-btn" href="tel:+14388091901" aria-label="Call">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.8 10.7a14.5 14.5 0 006.5 6.5l2.3-2.3a1.6 1.6 0 011.6-.36l3.2 1.28c.5.2.8.67.8 1.2v2.2a2 2 0 01-2.2 2A18 18 0 013.5 5.1 2 2 0 015.6 3h2.3c.52 0 1 .31 1.2.79L10.4 7c.2.5.1 1.1-.3 1.5l-2.3 2.2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* email -> к контактам */}
          <button className="mini-btn" onClick={() => scrollTo(contactRef)} aria-label="Email">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          {/* language */}
          <div className="lang-wrap">
            <button className="mini-btn" onClick={() => setLangOpen((v) => !v)} aria-label="Language">
              <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3.5 12h17M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            {langOpen && (
              <div className="lang-menu">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setLangOpen(false);
                    switchLang();
                  }}
                >
                  {isFr ? "English" : "Français"}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* бренд */}
        <button className="brand-mark" aria-label="Scroll to top" onClick={() => scrollTo(homeRef)}>
          <img src="/logo.png" alt="Maison Global Partners" />
        </button>

        {/* бургер */}
        <button className="icon-pill" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <span className="ico-burger" />
        </button>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="hero section" id="home">
        {/* Ровная PNG-тень над заголовком (файл положи в /public/shadow.png) */}
        <div className="shelf-wrap">
          <img src="/shadow.png" alt="" className="shelf-img" />
        </div>

        <h1 className="hero-title">Maison Global Partners</h1>
        <p className="hero-tagline">
          Global sourcing<br />
          and supply-chain solutions
        </p>
        <div className="btnbar">
          <button className="neumorphic-btn" onClick={() => scrollTo(contactRef)}>Contact</button>
          <button className="neumorphic-btn" onClick={() => scrollTo(servicesRef)}>Services</button>
        </div>
      </section>

      {/* ---------- SOLUTIONS (2×2) ---------- */}
      <section ref={solutionsRef} className="section" id="solutions">
        <h2>Solutions</h2>
        <p className="lead" style={{ marginTop: 6, marginBottom: 18 }}>
          From idea to scale — clear, measurable, on time.
        </p>

        <div className="sol-grid">
          <article className="sol-card">
            <div className="sol-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M3 7.5l9-4 9 4-9 4-9-4Z M3 7.5v9l9 4 9-4v-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="sol-title">Vendor Discovery</h3>
            <p className="sol-text">Scouting + due diligence across the Americas, Europe, Asia.</p>
          </article>

          <article className="sol-card">
            <div className="sol-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 12l2.2 2.2L15.5 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="sol-title">Contract &amp; Compliance</h3>
            <p className="sol-text">Terms, QA, audits, documentation — clean, enforceable, traceable.</p>
          </article>

          <article className="sol-card">
            <div className="sol-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 19h16M6 16l4-4 3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="sol-title">Process Optimisation</h3>
            <p className="sol-text">Network design, planning, logistics — measurable KPI uplift.</p>
          </article>

          <article className="sol-card">
            <div className="sol-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 18l-1.5 3L7.5 20M12 13l3 3M12 13l-3-3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 4a6 6 0 016 6l-6 6-4-4 4-8Z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </div>
            <h3 className="sol-title">Turnkey Launch</h3>
            <p className="sol-text">BOM, specs, packaging, full docs — end-to-end to market.</p>
          </article>
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

      {/* ---------- CONTACT ---------- */}
      <section ref={contactRef} className="section" id="contact">
        <h3>Contact</h3>

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

        <a className="mail" href="tel:+14388091901">
          <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.8 10.7a14.5 14.5 0 006.5 6.5l2.3-2.3a1.6 1.6 0 011.6-.36l3.2 1.28c.5.2.8.67.8 1.2v2.2a2 2 0 01-2.2 2A18 18 0 013.5 5.1 2 2 0 015.6 3h2.3c.52 0 1 .31 1.2.79L10.4 7c.2.5.1 1.1-.3 1.5l-2.3 2.2z"
              fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          +1 (438) 809-1901
        </a>

        <div className="mail mail-stack">
          <div className="stack-row">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <div>
              <div className="stack-label">for inquiries</div>
              <a className="stack-link" href="mailto:welcome@maisongp.com">welcome@maisongp.com</a>
            </div>
          </div>

          <div className="stack-row">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <div>
              <div className="stack-label">for partners</div>
              <a className="stack-link" href="mailto:partners@maisongp.com">partners@maisongp.com</a>
            </div>
          </div>

          <div className="stack-row">
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <div>
              <div className="stack-label">for careers</div>
              <a className="stack-link" href="mailto:careers@maisongp.com">careers@maisongp.com</a>
            </div>
          </div>
        </div>

        <a
          className="mail"
          href="https://www.linkedin.com/company/maison-global-partners/"
          target="_blank"
          rel="noopener"
        >
          <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8 17V10M8 7.5h.01M11 17v-4.2c0-1.7 2.2-1.8 2.2 0V17M13.2 12.8c0-1.9 2.6-2 2.6.1V17"
              fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          LinkedIn
        </a>

        <p className="based">Based in Montreal, Quebec, Canada.</p>
      </section>
    </main>
  );
}
