'use client';

import { useState, useCallback } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeDrawer = useCallback(() => setOpen(false), []);
  const goTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  }, []);

  return (
    <main className="page">
      {/* ---------- TOPBAR ---------- */}
      <header className="topbar">
        {/* Contact (scroll) */}
        <button
          className="topbar-link"
          onClick={() => goTo('contact')}
          aria-label="Contact"
        >
          Contact
        </button>

        {/* Center brand */}
        <div className="brand-mark" onClick={() => goTo('top')}>
          <img src="/logo.png" alt="Maison Global Partners" />
        </div>

        {/* Burger */}
        <button
          className="icon-pill"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <span className="ico-burger" />
        </button>
      </header>

      {/* Drawer */}
      {open && (
        <>
          <div className="overlay" onClick={closeDrawer} />
          <nav className="drawer" role="dialog" aria-modal="true">
            <button className="drawer-close" onClick={closeDrawer} aria-label="Close">×</button>
            <ul className="drawer-list">
              <li><button onClick={() => goTo('about')}>About</button></li>
              <li><button onClick={() => goTo('services')}>Services</button></li>
              <li><button onClick={() => goTo('contact')}>Contact</button></li>
              <li><a href="#fr">Français</a></li>
            </ul>
          </nav>
        </>
      )}

      {/* ---------- HERO ---------- */}
      <section id="top" className="hero section">
        <h1 className="hero-title">Maison Global Partners</h1>
        <p className="hero-tagline">
          Global sourcing<br className="sm-hide" /> and supply-chain solutions
        </p>

        <div className="btnbar">
          <button className="neumorphic-btn" onClick={() => goTo('contact')}>Contact</button>
          <button className="neumorphic-btn" onClick={() => goTo('services')}>Services</button>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="section">
        <h2>How we deliver value</h2>

        <div className="cards">
          <article className="card">
            <img src="/svc-global-sourcing.png" alt="" className="card-img" />
            <h3>Global Sourcing</h3>
            <p>
              Supplier scouting across the Americas, Europe and Asia: due diligence, audits,
              and sample runs to secure the best quality–cost ratio.
            </p>
          </article>

          <article className="card">
            <img src="/svc-supply-opt.png" alt="" className="card-img" />
            <h3>Supply-Chain Optimisation</h3>
            <p>
              Network design, planning, logistics flows with measurable KPI improvements
              and OTD/OTIF service reliability.
            </p>
          </article>

          <article className="card">
            <img src="/svc-turnkey.png" alt="" className="card-img" />
            <h3>Turnkey Solutions</h3>
            <p>
              From idea to market: product BOM, specification, QA, packaging and complete
              documentation—end-to-end.
            </p>
          </article>

          <article className="card">
            <img src="/svc-branding.png" alt="" className="card-img" />
            <h3>Branding</h3>
            <p>
              Naming, identity and packaging that work together: conversion-centric
              and channel-agnostic for multi-markets.
            </p>
          </article>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="section">
        <h2>Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant structure
          and precise execution.
        </p>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        {/* Small clean form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <textarea name="message" rows={4} placeholder="Message" />
          <div className="form-actions">
            <button className="neumorphic-btn" type="submit">Send</button>
          </div>
        </form>

        {/* One neat contact card */}
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-line">
              <span className="ico ico-phone" aria-hidden="true" />
              <a href="tel:+14388091901">+1 (438) 809-1901</a>
            </div>

            <div className="contact-group">
              <div className="contact-label">for inquiries</div>
              <div className="contact-line">
                <span className="ico ico-mail" aria-hidden="true" />
                <a href="mailto:welcome@maisongp.com">welcome@maisongp.com</a>
              </div>
            </div>

            <div className="contact-group">
              <div className="contact-label">for partners</div>
              <div className="contact-line">
                <span className="ico ico-mail" aria-hidden="true" />
                <a href="mailto:partners@maisongp.com">partners@maisongp.com</a>
              </div>
            </div>

            <div className="contact-group">
              <div className="contact-label">for careers</div>
              <div className="contact-line">
                <span className="ico ico-mail" aria-hidden="true" />
                <a href="mailto:careers@maisongp.com">careers@maisongp.com</a>
              </div>
            </div>

            <div className="contact-line">
              <span className="ico ico-linkedin" aria-hidden="true" />
              <a
                href="https://www.linkedin.com/company/maison-global-partners/"
                target="_blank" rel="noopener"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <p className="based">Based in Montreal, Quebec, Canada.</p>
        </div>
      </section>
