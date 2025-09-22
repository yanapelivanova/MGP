'use client';

import { useEffect, useState } from 'react';

/* ===== Мини-иконки (инлайн SVG) ===== */
function IconPhone(props){return(
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      d="M6.4 3.8h4.2c.5 0 .9.4.9.9v2.7c0 .4-.2.7-.5.8l-1.7.8a13 13 0 0 0 5.7 5.7l.8-1.7c.1-.3.4-.5.8-.5h2.7c.5 0 .9.4.9.9v4.2c0 .5-.4.9-.9.9H19c-8 0-14.8-6.5-14.8-14.5 0-.5.4-.9.9-.9z"/>
  </svg>
)}
function IconMail(props){return(
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="#444" strokeWidth="1.8"/>
    <path d="M4 7l8 6 8-6" fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}
function IconGlobe(props){return(
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="#444" strokeWidth="1.8"/>
    <ellipse cx="12" cy="12" rx="4.6" ry="9" fill="none" stroke="#444" strokeWidth="1.5"/>
    <path d="M3 12h18M12 3a16 16 0 0 0 0 18" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)}
function IconIn(props){return(
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="#444" strokeWidth="1.8"/>
    <path d="M8 17v-6M8 8.5h0M12 17v-3.4c0-1.6 1.1-2.6 2.5-2.6 1.3 0 2.5 1 2.5 2.6V17" fill="none" stroke="#444" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)}
function IconArrow(props){return(
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path d="M9 5l7 7-7 7" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}

/* ===== Маленькие ч/б картинки для сервис-карточек (инлайн) ===== */
function IlloMap(){return(
  <svg viewBox="0 0 600 260" className="card-img" aria-hidden="true">
    <rect width="600" height="260" fill="none"/>
    <g stroke="#999" strokeWidth="1.2" fill="none" opacity=".9">
      <path d="M30 200L150 120 260 140 360 90 470 120 560 80" />
      <path d="M90 70l120 50 110-60 140 90 95-45" />
    </g>
    <g fill="#444">
      <circle cx="150" cy="120" r="5"/><circle cx="260" cy="140" r="5"/>
      <circle cx="360" cy="90" r="5"/><circle cx="470" cy="120" r="5"/>
      <circle cx="90" cy="70" r="5"/><circle cx="560" cy="80" r="5"/>
    </g>
  </svg>
)}
function IlloDash(){return(
  <svg viewBox="0 0 600 260" className="card-img" aria-hidden="true">
    <rect x="40" y="30" width="520" height="50" rx="10" fill="none" stroke="#999"/>
    <rect x="40" y="95" width="260" height="120" rx="12" fill="none" stroke="#999"/>
    <rect x="320" y="95" width="240" height="120" rx="12" fill="none" stroke="#999"/>
    <path d="M70 190a60 60 0 1 0 0-120" fill="none" stroke="#444" strokeWidth="8" strokeLinecap="round"/>
    <polyline points="340,200 360,140 390,170 430,110 540,200" fill="none" stroke="#444" strokeWidth="6" strokeLinecap="round"/>
  </svg>
)}
function IlloTurnkey(){return(
  <svg viewBox="0 0 600 260" className="card-img" aria-hidden="true">
    <rect x="50" y="40" width="500" height="180" rx="16" fill="none" stroke="#999"/>
    <rect x="80" y="70" width="200" height="120" rx="12" fill="none" stroke="#444"/>
    <rect x="320" y="70" width="200" height="120" rx="12" fill="none" stroke="#444"/>
    <path d="M280 130h40" stroke="#444" strokeWidth="6" strokeLinecap="round"/>
  </svg>
)}
function IlloBrand(){return(
  <svg viewBox="0 0 600 260" className="card-img" aria-hidden="true">
    <rect x="60" y="60" width="480" height="140" rx="18" fill="none" stroke="#999"/>
    <text x="300" y="140" textAnchor="middle" fontFamily="ui-sans-serif,system-ui" fontSize="54" fontWeight="700" fill="#444">BRAND</text>
  </svg>
)}

export default function Home() {
  const [drawer, setDrawer] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  /* Плавное появление блоков при скролле */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('reveal-in')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="page">
      {/* ===== Topbar ===== */}
      <header className="topbar">
        <div className="left-tools">
          <a className="icon-pill" href="tel:+14388091901" aria-label="Call">
            <IconPhone/>
          </a>
          <a className="icon-pill" href="#contact" aria-label="Email">
            <IconMail/>
          </a>
          <button className="icon-pill" aria-label="Language" onClick={()=>setLangOpen(v=>!v)}>
            <IconGlobe/>
          </button>
          {langOpen && (
            <div className="lang-pop">
              <a href="#en" onClick={()=>setLangOpen(false)}>English</a>
              <a href="#fr" onClick={()=>setLangOpen(false)}>Français</a>
            </div>
          )}
        </div>

        {/* Логотип (крупнее, во всю высоту хэдера) */}
        <div className="brand-mark" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Maison Global Partners">
          {/* компактный монохромный логотип */}
          <svg viewBox="0 0 120 40" className="logo-svg" aria-hidden="true">
            <path d="M16 30l10-20 10 20h-6l-4-8-4 8z" fill="#2f2f30"/>
            <path d="M48 28h-6V12h6l4 8 4-8h6v16h-6v-9l-4 8-4-8v9z" fill="#2f2f30"/>
          </svg>
        </div>

        <button className="icon-pill" aria-label="Menu" onClick={()=>setDrawer(true)}>
          <span className="ico-burger"/>
        </button>
      </header>

      {/* Drawer */}
      {drawer && <div className="overlay" onClick={()=>setDrawer(false)} />}
      {drawer && (
        <aside className="drawer" role="dialog" aria-label="Site menu">
          <button className="drawer-close" onClick={()=>setDrawer(false)}>×</button>
          <ul className="drawer-list">
            <li><a href="#about">About</a><IconArrow /></li>
            <li><a href="#services">Services</a><IconArrow /></li>
            <li><a href="#contact">Contact</a><IconArrow /></li>
            <li><a href="#legal">Legal</a><IconArrow /></li>
            <li><a href="#fr">Français</a><IconArrow /></li>
          </ul>
        </aside>
      )}

      {/* ===== Hero ===== */}
      <section className="hero section reveal" id="about">
        <h1 className="hero-title">Maison Global Partners</h1>
        <p className="hero-tagline">
          Global sourcing<br/>and supply-chain solutions
        </p>
        <div className="btnbar">
          <a className="neumorphic-btn" href="#contact">Contact</a>
          <a className="neumorphic-btn" href="#services">Services</a>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="section reveal">
        <h2>How we deliver value</h2>

        <div className="cards">
          <article className="card">
            <IlloMap/>
            <h3>Global Sourcing</h3>
            <p>Supplier scouting across the Americas, Europe and Asia; due diligence, quality and logistics to secure the best quality-to-cost ratio.</p>
          </article>

          <article className="card">
            <IlloDash/>
            <h3>Supply-Chain Optimisation</h3>
            <p>End-to-end planning & logistics with data visibility and risk mitigation. DDP/EXW scenarios to drive overall costs down.</p>
          </article>

          <article className="card">
            <IlloTurnkey/>
            <h3>Turnkey Solutions</h3>
            <p>From idea to shelf: product BOM, specification, QA, packaging and compliant documentation — end-to-end.</p>
          </article>

          <article className="card">
            <IlloBrand/>
            <h3>Branding</h3>
            <p>Naming, identity and packaging that work together, drive value & trust, and remain aligned to market goals.</p>
          </article>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="section reveal">
        <h2>Contact</h2>

        {/* компактная форма */}
        <form className="contact-form" onSubmit={(e)=>{e.preventDefault(); alert('Message sent');}}>
          <div className="form-row">
            <input required name="name" placeholder="Your name" />
            <input required type="email" name="email" placeholder="Email" />
          </div>
          <textarea rows={4} name="message" placeholder="Message" required />
          <div className="form-actions">
            <button className="neumorphic-btn" type="submit">Send</button>
          </div>
        </form>

        {/* карточки контактов */}
        <div className="mailbox">
          <a className="mail" href="tel:+14388091901">
            <IconPhone /><span>+1 (438) 809-1901</span>
          </a>

          <div className="mail note">for inquiries</div>
          <a className="mail" href="mailto:welcome@maisongp.com">
            <IconMail /><span>welcome@maisongp.com</span>
          </a>

          <div className="mail note">for partners</div>
          <a className="mail" href="mailto:partners@maisongp.com">
            <IconMail /><span>partners@maisongp.com</span>
          </a>

          <div className="mail note">for careers</div>
          <a className="mail" href="mailto:careers@maisongp.com">
            <IconMail /><span>careers@maisongp.com</span>
          </a>

          <a className="mail" href="https://www.linkedin.com/company/maison-global-partners/" target="_blank" rel="noopener">
            <IconIn /><span>LinkedIn</span>
          </a>

          <p className="based">Based in Montreal, Quebec, Canada.</p>
        </div>
      </section>

      {/* ===== Legal (якорь) ===== */}
      <section id="legal" className="section reveal">
        <h3>Legal</h3>
        <p className="lead">© {new Date().getFullYear()} Maison Global Partners. All rights reserved.</p>
      </section>

      {/* Кнопка «вверх» */}
      <a href="#about" className="backtotop" aria-label="Back to top">↑</a>
    </main>
  );
}
