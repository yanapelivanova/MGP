// app/page.jsx
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // блокируем прокрутку, когда открыт drawer
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="page">

      {/* HEADER */}
      <header className="topbar">
        {/* left: contact jump */}
        <button
          className="icon-pill"
          aria-label="Contact"
          onClick={() => scrollTo('contact')}
        >
          {/* простой минималистичный конверт */}
          <span className="ico-mail" />
        </button>

        {/* center: logo */}
        <div className="brand-mark" onClick={() => scrollTo('top')}>
          <img src="/logo.png" alt="Maison Global Partners" />
        </div>

        {/* right: burger */}
        <button
          className="icon-pill"
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="ico-burger" />
        </button>

        {/* Drawer + Overlay */}
        {menuOpen && (
          <>
            <div className="overlay" onClick={() => setMenuOpen(false)} />
            <nav className="drawer">
              <button
                className="drawer-close"
                aria-label="Close"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>

              <ul className="drawer-list">
                <li><button onClick={() => scrollTo('services')}>Services</button></li>
                <li><button onClick={() => scrollTo('about')}>About</button></li>
                <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/maison-global-partners/"
                    target="_blank" rel="noopener"
                  >LinkedIn</a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="hero">
        <h1 className="hero-title">Maison Global Partners</h1>
        <p className="hero-tagline">
          <span>Global sourcing</span><br />
          <span>and supply-chain solutions</span>
        </p>

        <div className="btnbar">
          <a className="neumorphic-btn" onClick={() => scrollTo('contact')}>Contact</a>
          <a className="neumorphic-btn" onClick={() => scrollTo('services')}>Services</a>
          <a
            className="neumorphic-btn"
            href="https://www.linkedin.com/company/maison-global-partners/"
            target="_blank" rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>How we deliver value</h2>

        <div className="cards">
          <article className="card">
            <img className="card-img" src="/images/service1.png" alt="" />
            <h3>Global Sourcing</h3>
            <p>
              Supplier scouting across the Americas, Europe and Asia: due-diligence, audits and
              sample runs to secure the best quality-to-cost ratio.
            </p>
          </article>

          <article className="card">
            <img className="card-img" src="/images/service2.png" alt="" />
            <h3>Supply-Chain Optimisation</h3>
            <p>
              From demand planning to logistics flows and inventory health — we streamline, digitise
              and cut bottlenecks end-to-end.
            </p>
          </article>

          <article className="card">
            <img className="card-img" src="/images/service3.png" alt="" />
            <h3>Turnkey Solutions</h3>
            <p>
              From idea to shelf: product design, BOM, specification, QA, packaging and
              compliant documentation — delivered on time.
            </p>
          </article>

          <article className="card">
            <img className="card-img" src="/images/service4.png" alt="" />
            <h3>Branding</h3>
            <p>
              Naming, identity and packaging that scale: consistent across markets and channels,
              engineered to convert.
            </p>
          </article>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant structure
          and precise execution.
        </p>
      </section>

      {/* CONTACTS */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        {/* Small neat form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
            <input type="email" name="email" placeholder="Email" aria-label="Email" />
          </div>
          <textarea name="message" placeholder="Message" rows={4} aria-label="Message" />
          <button className="neumorphic-btn" type="submit">Send</button>
        </form>

        {/* Contact list */}
        <div className="mailbox">
          <a className="mail" href="tel:+14388091901">
            <span className="mail-ico ico-phone" />
            +1 (438) 809-1901
          </a>

          <a className="mail" href="mailto:welcome@maisongp.com">
            <span className="mail-ico ico-mail" />
            welcome@maisongp.com <em>— for general inquiries</em>
          </a>

          <a className="mail" href="mailto:partners@maisongp.com">
            <span className="mail-ico ico-mail" />
            partners@maisongp.com <em>— for partners</em>
          </a>

          <a className="mail" href="mailto:careers@maisongp.com">
            <span className="mail-ico ico-mail" />
            careers@maisongp.com <em>— for careers</em>
          </a>

          <a
            className="mail"
            href="https://www.linkedin.com/company/maison-global-partners/"
            target="_blank" rel="noopener"
          >
            <span className="mail-ico ico-linkedin" />
            LinkedIn
          </a>

          <div className="based">Based in Montreal, Quebec, Canada</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-links">
          <a href="#!">Legal</a>
          <span>·</span>
          <a href="#!">Français</a>
        </div>
        <div>© 2025 Maison Global Partners. All rights reserved.</div>
      </footer>
    </main>
  );
}
