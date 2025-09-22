// app/page.jsx
"use client";
import { useState } from "react";

/* inline иконки — чтобы ничего не ломалось из-за отсутствующих файлов */
const MailIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9A1.5 1.5 0 0 1 19.5 18h-15A1.5 1.5 0 0 1 3 16.5v-9Z" stroke="#666" strokeWidth="1.5" />
    <path d="m4 7 8 6 8-6" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PhoneIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4.5 3.5 8 5a1 1 0 0 1 .6 1l-.4 2a1 1 0 0 0 .3.9l2.6 2.6a1 1 0 0 0 .9.3l2-.4a1 1 0 0 1 1 .6l1.5 3.5a1 1 0 0 1-.6 1.3c-2.3.9-6.5.8-10.8-3.6C1.3 8.8 1.4 4.6 2.3 2.3a1 1 0 0 1 1.3-.6Z" stroke="#666" strokeWidth="1.5" />
  </svg>
);
const LinkedInIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM4.75 8h-1.5v12h1.5V8Zm4.5 0h-1.5v12h1.5v-6.6c0-2.6 3-2.8 3 0V20h1.5v-7.2c0-4.4-4.8-4.3-6  -2.1V8Z" fill="#666"/>
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.trim() || "";
    const email = fd.get("email")?.trim() || "";
    const message = fd.get("message")?.trim() || "";
    const subject = `Website inquiry from ${name || "visitor"}`;
    const body = `${message}\n\nFrom: ${name} <${email}>`;
    window.location.href =
      `mailto:welcome@maisongp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="page">
      {/* HEADER (узкий) */}
      <header className="topbar">
        <a href="#contact" className="top-chip" aria-label="Jump to contacts">✉️</a>
        <img src="/logo.png" alt="Maison Global Partners logo" className="top-logo" />
        <button className="top-chip" aria-label="Open menu" onClick={() => setMenuOpen(s => !s)}>
          <span className={`burger ${menuOpen ? "open" : ""}`}></span>
        </button>
        <nav className={`drawer ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://www.linkedin.com/company/maison-global-partners/" target="_blank" rel="noopener">LinkedIn</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Maison Global Partners</h1>
        <p className="tagline">
          Global sourcing<br />and supply-chain solutions
        </p>

        <div className="btnbar">
          <a className="neumorphic-btn" href="#contact">Contact</a>
          <a className="neumorphic-btn" href="#services">Services</a>
          <a className="neumorphic-btn" href="https://www.linkedin.com/company/maison-global-partners/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>How we deliver value</h2>
        <div className="cards">
          <article className="card">
            <div className="card-media"><img src="/svc-global-sourcing.png" alt="" /></div>
            <h3>Global Sourcing</h3>
            <p>Supplier scouting across the Americas, Europe and Asia; due-diligence, audits, and sample runs to secure the best quality-to-cost ratio.</p>
          </article>
          <article className="card">
            <div className="card-media"><img src="/svc-supply-optim.png" alt="" /></div>
            <h3>Supply-Chain Optimisation</h3>
            <p>Inventory, lead times and logistics tuned with data—so cash isn’t stuck in transit and OTIF becomes your default.</p>
          </article>
          <article className="card">
            <div className="card-media"><img src="/svc-turnkey.png" alt="" /></div>
            <h3>Turnkey Solutions</h3>
            <p>From concept to delivered product: BOM, industrialisation, QA, packaging and compliant documentation—end-to-end.</p>
          </article>
          <article className="card">
            <div className="card-media"><img src="/svc-branding.png" alt="" /></div>
            <h3>Branding</h3>
            <p>Naming, identity and packaging that travel well—consistent across markets and channels, engineered for unit economics.</p>
          </article>
        </div>
      </section>

      {/* ABOUT (короткий абзац) */}
      <section id="about" className="section">
        <h2>Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant structure and precise execution.
        </p>
      </section>

      {/* CONTACT — сначала мини-форма, затем список контактов */}
      <section id="contact" className="section">
        <h2 className="mb16">Contact</h2>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="row">
            <input name="name" type="text" placeholder="Your name" aria-label="Your name" required />
            <input name="email" type="email" placeholder="Email" aria-label="Email" required />
          </div>
          <textarea name="message" rows={4} placeholder="Message" aria-label="Message" required />
          <button className="neumorphic-btn small" type="submit">Send</button>
        </form>

        <div className="mailbox">
          <a className="mail" href="tel:+14388091901">
            <PhoneIcon /> +1 (438) 809-1901
          </a>

          <a className="mail" href="mailto:welcome@maisongp.com">
            <MailIcon /> welcome@maisongp.com <span className="hint">— for general inquiries</span>
          </a>

          <a className="mail" href="mailto:partners@maisongp.com">
            <MailIcon /> partners@maisongp.com <span className="hint">— for partners</span>
          </a>

          <a className="mail" href="mailto:careers@maisongp.com">
            <MailIcon /> careers@maisongp.com <span className="hint">— for careers</span>
          </a>

          <a className="mail" href="https://www.linkedin.com/company/maison-global-partners/" target="_blank" rel="noopener">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>

        <p className="based">Based in Montreal, Quebec, Canada</p>
      </section>

      <footer className="foot">
        <a className="foot-link" href="#legal">Legal</a>
        <span className="sep">·</span>
        <a className="foot-link" href="#fr">Français</a>
        <div className="copy">© 2025 Maison Global Partners. All rights reserved.</div>
      </footer>
    </main>
  );
}
