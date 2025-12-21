// app/page.jsx
"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isFr, setIsFr] = useState(false);

  // refs
  const homeRef = useRef(null);
  const solutionsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const logoRef = useRef(null);

  // detect current language by path
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsFr(window.location.pathname.startsWith("/fr"));
    }
  }, []);

  // ---- LOGO: theme-aware swap + cache-busting ----
  useEffect(() => {
    if (typeof document === "undefined") return;

    const ASSET_VERSION = "2025-10-03-01";
    const withVer = (p) => `${p}?v=${ASSET_VERSION}`;

    const updateLogo = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        document.body?.classList.contains("dark");

      if (logoRef.current) {
        logoRef.current.src = isDark
          ? withVer("/logo-light.png")
          : withVer("/logo-dark.png");
        logoRef.current.alt = isDark
          ? "Maison Global Partners (light logo)"
          : "Maison Global Partners";
      }
    };

    updateLogo();

    const mo1 = new MutationObserver(updateLogo);
    const mo2 = new MutationObserver(updateLogo);
    mo1.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    if (document.body) {
      mo2.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const mediaHandler = () => updateLogo();
    media.addEventListener?.("change", mediaHandler);

    return () => {
      mo1.disconnect();
      mo2.disconnect();
      media.removeEventListener?.("change", mediaHandler);
    };
  }, []);

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
        <div className="top-actions">
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

          <button
            className="mini-btn"
            onClick={() => scrollTo(contactRef)}
            aria-label="Email"
            type="button"
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

          <div className="lang-wrap">
            <button
              className="mini-btn"
              onClick={() => setLangOpen((v) => !v)}
              aria-label="Language"
              type="button"
            >
              <svg className="ci" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
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

        <button
          className="brand-mark"
          aria-label="Scroll to top"
          onClick={() => scrollTo(homeRef)}
          type="button"
        >
          <img ref={logoRef} className="logo" src="/logo-dark.png" alt="Maison Global Partners" />
        </button>

        <button
          className="icon-pill"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <svg className="ci burger-arch" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M6 8h12 M8 12h10 M10 16h8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
            />
          </svg>
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
              type="button"
            >
              ×
            </button>
            <ul className="drawer-list">
              <li><button className="nav-item" onClick={() => scrollTo(homeRef)} type="button"><span>Home</span></button></li>
              <li><a className="nav-item" href="/about"><span>About Us</span></a></li>
              <li><button className="nav-item" onClick={() => scrollTo(solutionsRef)} type="button"><span>Solutions</span></button></li>
              <li><button className="nav-item" onClick={() => scrollTo(servicesRef)} type="button"><span>Services</span></button></li>
              <li><button className="nav-item" onClick={() => scrollTo(contactRef)} type="button"><span>Contact</span></button></li>
              <li><a className="nav-item" href="/legal"><span>Legal</span></a></li>
              <li className="drawer-fr">
                <button
                  className="nav-item"
                  onClick={() => { setDrawerOpen(false); switchLang(); }}
                  type="button"
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
        <h1 className="hero-title">MAISON GLOBAL PARTNERS</h1>
        <p className="hero-tagline">
          Global sourcing
          <br />
          and supply-chain solutions
        </p>
        <div className="btnbar">
          <button className="neumorphic-btn" onClick={() => scrollTo(contactRef)} type="button">Contact</button>
          <button className="neumorphic-btn" onClick={() => scrollTo(servicesRef)} type="button">Services</button>
        </div>
      </section>

      {/* ---------- SOLUTIONS ---------- */}
      <section ref={solutionsRef} className="section" id="solutions">
        <h2>Solutions</h2>
        <p className="lead" style={{ marginTop: 6, marginBottom: 18 }}>
          From idea to scale — clear, measurable, on time.
        </p>

        <div className="sol-grid">
          <article className="sol-card">
            <div className="sol-ico" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  d="M3 7.5l9-4 9 4-9 4-9-4Z M3 7.5v9l9 4 9-4v-9"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="sol-title">Vendor Discovery</h3>
            <p className="sol-text">Scouting + due diligence across the Americas, Europe, Asia.</p>
          </article>

          <article className="sol-card">
            <div className="sol-ico" aria-hidden="true">
              <svg viewBox="0 0
