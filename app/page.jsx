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
    const y = ref.current.getBoundingClientRect().top + window.scrollY - 108;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="page">
      {/* ---------- TOPBAR ---------- */}
      <header className="topbar">
        {/* слева — изящные мини-ярлыки */}
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

          {/* email -> скролл к контактам */}
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
                <a href="#" onClick={() => setLangOpen(false)}>English</a>
                <a href="#fr" onClick={() => setLangOpen(false)}>Français</a>
              </div>
            )}
          </div>
        </div>

        {/* центр — логотип (крупнее) */}
        <button
          className="brand-mark"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/logo.png" alt="Maison Global Partners" />
        </button>

        {/* справа — бургер */}
        <button className="icon-pill" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
          <span className="ico-burger" />
        </button>
      </header>

      {/* ---------- DRAWER ---------- */}
      {drawerOpen && (
        <>
          <div className="overlay" onClick={() => setDrawerOpen(false)} />
          <aside className="drawer" role="dialog" aria-label="Menu">
            <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close">×</button>
            <ul className="drawer-list">
              <li>
                <button className="nav-item" onClick={() => scrollTo(aboutRef)}>
                  <span>About</span>
                  <svg className="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </li>
              <li>
                <button className="nav-item" onClick={() => scrollTo(servicesRef)}>
                  <span>Services</span>
                  <svg className="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </li>
              <li>
                <button className="nav-item" onClick={() => scrollTo(contactRef)}>
                  <span>Contact</span>
                  <svg className="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </li>
              <li>
                <button className="nav-item" onClick={() => scrollTo(legalRef)}>
                  <span>Legal</span>
                  <svg className="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </li>
              <li className="drawer-fr">
                <a className="nav-item" href="#fr">
                  <span>Français</span>
                  <svg className="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </li>
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

      {/* ---------- ABOUT (Company + Founder) ---------- */}
      <section className="section" id="about-company">
        <h2>About Us</h2>
        <div
          className="about-company"
          style={{ maxWidth: 900, margin: "0 auto" }}
        >
          <p>
            <strong>Maison Global Partners</strong> is a boutique consultancy specializing in international
            procurement and supply chain management. We help companies find reliable vendors worldwide,
            optimize their sourcing strategies, and build transparent processes that reduce risk and increase
            efficiency.
          </p>
          <p>
            Our approach combines global expertise with a refined sense of detail. We believe that every
            partnership should be built on trust, clarity, and precision. With MGP, businesses gain not only a
            purchasing partner, but also a strategic ally who safeguards ambitions and turns complexity into flow.
          </p>
        </div>
      </section>

      {/* ---------- FOUNDER’S MESSAGE (magazine style) ---------- */}
      <section className="section" id="founder">
        <h3 style={{ marginBottom: 16 }}>Message from the Founder</h3>

        <div
          className="founder-block"
          style={{
            maxWidth: 760,      // немного уже полей, «журнальная» колонка
            margin: "0 auto",
            position: "relative"
          }}
        >
          {/* левая кавычка */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ position: "absolute", left: -24, top: -24, width: 28, height: 28, opacity: 0.18 }}
          >
            <path d="M7.17 6C4.88 6 3 7.88 3 10.17V21h7v-8H6.5c0-1.38 1.12-2.5 2.5-2.5V6zm9.66 0C14.54 6 12.67 7.88 12.67 10.17V21h7v-8H16.17c0-1.38 1.12-2.5 2.5-2.5V6z" fill="currentColor" />
          </svg>

          <blockquote
            className="founder-quote"
            style={{
              fontStyle: "italic",
              borderTop: "1px solid var(--line, #ddd)",
              borderBottom: "1px solid var(--line, #ddd)",
              padding: "20px 24px",
              lineHeight: 1.7
            }}
          >
            <p style={{ fontStyle: "normal", fontWeight: 600 }}>
              “Guiding your vision worldwide, with strength and grace.”
            </p>
            <p>
              <em>
                At Maison Global Partners, we believe that true strength lies in clarity, resilience, and trust.
              </em>
            </p>
            <p>
              <em>
                For more than a decade, I have navigated the complexities of global procurement and supply chains —
                negotiating with vendors across continents, building transparent processes, and turning uncertainty
                into reliability. My journey has been more than a career; it has been a discipline in endurance,
                precision, and vision.
              </em>
            </p>
            <p>
              <em>
                Founding Maison Global Partners was not just a professional decision, but a personal mission. I have
                seen how chaos consumes resources, how poor choices erode potential, and how companies — like people —
                thrive only when they feel safe and supported. This is why we stand for integrity, beauty in execution,
                and the architecture of flow.
              </em>
            </p>
            <p>
              <em>
                Our mission is to guide businesses with the same care, resilience, and strategy that once helped me turn
                uncertainty into stability. At MGP, we don’t just manage supply chains — we protect ambitions, create
                order, and turn trust into results.
              </em>
            </p>
          </blockquote>

          {/* правая кавычка */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            style={{ position: "absolute", right: -24, bottom: -24, width: 28, height: 28, opacity: 0.18 }}
          >
            <path d="M16.83 18c2.29 0 4.17-1.88 4.17-4.17V3h-7v8h3.5c0 1.38-1.12 2.5-2.5 2.5V18zM7.17 18C9.46 18 11.33 16.12 11.33 13.83V3h-7v8H7.83c0 1.38 1.12 2.5 2.5 2.5V18z" fill="currentColor" />
          </svg>
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

        {/* phone */}
        <a className="mail" href="tel:+14388091901">
          <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.8 10.7a14.5 14.5 0 006.5 6.5l2.3-2.3a1.6 1.6 0 011.6-.36l3.2 1.28c.5.2.8.67.8 1.2v2.2a2 2 0 01-2.2 2A18 18 0 013.5 5.1 2 2 0 015.6 3h2.3c.52 0 1 .31 1.2.79L10.4 7c.2.5.1 1.1-.3 1.5l-2.3 2.2z"
              fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          +1 (438) 809-1901
        </a>

        {/* три почты одним блоком */}
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

        {/* LinkedIn — монохромный, в одном стиле */}
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

      {/* якорь для Legal */}
      <div ref={legalRef} aria-hidden="true" />
    </main>
  );
}
