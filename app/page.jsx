// app/page.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import SvcImage from "./components/SvcImage"; // 👈 добавляем наш компонент для картинок

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isFr, setIsFr] = useState(false);

  // определяем текущий язык по адресу
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsFr(window.location.pathname.startsWith("/fr"));
    }
  }, []);

  // секции на главной
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
    // простой свитч между / и /fr
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
          <button
            className="mini-btn"
            onClick={() => scrollTo(contactRef)}
            aria-label="Email"
          >
            <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3"
                y="5.5"
                width="18"
                height="13"
                rx="2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M4 7l8 6 8-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* language dropdown */}
          <div className="lang-wrap">
            <button
              className="mini-btn"
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Language"
            >
              <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M3.5 12h17M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
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

        {/* центр — логотип */}
        <button
          className="brand-mark"
          aria-label="Scroll to top"
          onClick={() => scrollTo(homeRef)}
        >
          <img src="/logo.png" alt="Maison Global Partners" />
        </button>

        {/* справа — бургер */}
        <button
          className="icon-pill"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <span className="ico-burger" />
        </button>
      </header>

      {/* ---------- DRAWER ---------- */}
      {drawerOpen && (
        <>
          <div className="overlay" onClick={() => setDrawerOpen(false)} />
          <aside className="drawer" role="dialog" aria-label="Menu">
            <button
              className="drawer-close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <ul className="drawer-list">
              <li>
                <button
                  className="nav-item"
                  onClick={() => scrollTo(homeRef)}
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <a className="nav-item" href="/about">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <button
                  className="nav-item"
                  onClick={() => scrollTo(solutionsRef)}
                >
                  <span>Solutions</span>
                </button>
              </li>
              <li>
                <button
                  className="nav-item"
                  onClick={() => scrollTo(servicesRef)}
                >
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button
                  className="nav-item"
                  onClick={() => scrollTo(contactRef)}
                >
                  <span>Contact</span>
                </button>
              </li>
              <li>
                <a className="nav-item" href="/legal">
                  <span>Legal</span>
                </a>
              </li>
              <li className="drawer-fr">
                <button
                  className="nav-item"
                  onClick={() => {
                    setDrawerOpen(false);
                    switchLang();
                  }}
                >
                  <span>{isFr ? "English" : "Français"}</span>
                </button>
              </li>
            </ul>
          </aside>
        </>
      )}

      {/* ---------- HERO (HOME) ---------- */}
      <section className="hero section" id="home">
        <h1 className="hero-title">Maison Global Partners</h1>
        <p className="hero-tagline">
          Global sourcing<br />and supply-chain solutions
        </p>
        <div className="btnbar">
          <button
            className="neumorphic-btn"
            onClick={() => scrollTo(contactRef)}
          >
            Contact
          </button>
          <button
            className="neumorphic-btn"
            onClick={() => scrollTo(servicesRef)}
          >
            Services
          </button>
        </div>
      </section>

      {/* ---------- SOLUTIONS ---------- */}
      <section ref={solutionsRef} className="section" id="solutions">
        <h2>Solutions</h2>
        <p className="lead" style={{ marginTop: 6, marginBottom: 18 }}>
          From idea to scale — clear, measurable, on time.
        </p>
        <div className="sol-grid">
          {/* твои карточки Solutions */}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section ref={servicesRef} className="section" id="services">
        <h2>How we deliver value</h2>
        <div className="cards">
          <article className="card">
            <SvcImage src="/svc-global.png" alt="Global Sourcing" pulsing />
            <h3>Global Sourcing</h3>
            <p>
              Supplier scouting across the Americas, Europe and Asia; due
              diligence, audits and sample runs to secure the best
              quality–cost ratio.
            </p>
          </article>

          <article className="card">
            <SvcImage src="/svc-optim.png" alt="Supply-Chain Optimisation" pulsing />
            <h3>Supply-Chain Optimisation</h3>
            <p>
              Network design, planning and logistics flows with measurable
              KPI improvements and OTD/OTIF reliability.
            </p>
          </article>

          <article className="card">
            <SvcImage src="/svc-turnkey.png" alt="Turnkey Solutions" pulsing softer />
            <h3>Turnkey Solutions</h3>
            <p>
              From idea to market: BOM, specification, QA, packaging and
              complete documentation — end-to-end.
            </p>
          </article>

          <article className="card">
            <SvcImage src="/svc-branding.png" alt="Branding" pulsing />
            <h3>Branding</h3>
            <p>
              Naming, identity and packaging that build trust across
              channels and markets.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section ref={contactRef} className="section" id="contact">
        {/* форма и контакты остаются как у тебя */}
      </section>
    </main>
  );
}
