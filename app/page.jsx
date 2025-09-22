'use client';

import { useEffect } from 'react';

export default function Home() {
  // Scroll-reveal once on enter
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const openDrawer = () => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', closeDrawer);

    const drawer = document.createElement('div');
    drawer.className = 'drawer';

    const close = document.createElement('button');
    close.className = 'drawer-close';
    close.setAttribute('aria-label', 'Close menu');
    close.innerText = '×';
    close.addEventListener('click', closeDrawer);

    const list = document.createElement('ul');
    list.className = 'drawer-list';

    const makeItem = (href, label) => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href = href; a.className = 'drawer-item'; a.innerHTML = `<span>${label}</span><span class="arrow">›</span>`;
      li.appendChild(a); return li;
    };

    list.appendChild(makeItem('#about', 'About'));
    list.appendChild(makeItem('#services', 'Services'));
    list.appendChild(makeItem('#contact', 'Contact'));
    list.appendChild(makeItem('/legal', 'Legal'));
    list.appendChild(makeItem('/fr', 'Français'));

    drawer.append(close, list);
    document.body.append(overlay, drawer);

    function closeDrawer() {
      drawer.remove(); overlay.remove();
    }
  };

  return (
    <main className="page">
      {/* Topbar */}
      <header className="topbar">
        <a className="icon-pill" href="tel:+14388091901" aria-label="Call">
          <i className="ico phone" />
        </a>

        <div className="brand-mark" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo-mark.svg" alt="Maison Global Partners" />
        </div>

        <button className="icon-pill" aria-label="Menu" onClick={openDrawer}>
          <i className="ico menu" />
        </button>
      </header>

      {/* Hero */}
      <section className="hero" id="about" data-reveal>
        <h1 className="hero-title">Maison Global Partners</h1>
        <p className="hero-tagline">Global sourcing<br />and supply-chain solutions</p>
        <div className="btnbar">
          <a className="neumorphic-btn" href="#contact">Contact</a>
          <a className="neumorphic-btn" href="#services">Services</a>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <h2 data-reveal>How we deliver value</h2>

        <div className="cards">
          <article className="card" data-reveal data-delay="1">
            <img className="card-img" src="/svc-sourcing.png" alt="" loading="lazy" />
            <h3>Global Sourcing</h3>
            <p>Supplier scouting across the Americas, Europe and Asia: due-diligence, audits and negotiations to secure the best quality-to-cost ratio.</p>
          </article>

          <article className="card" data-reveal data-delay="2">
            <img className="card-img" src="/svc-supply.png" alt="" loading="lazy" />
            <h3>Supply-Chain Optimisation</h3>
            <p>Flow design, planning, logistics, RFPs with measurable savings and risk reduction. DDP/EXW scenarios with data-driven decisions.</p>
          </article>

          <article className="card" data-reveal data-delay="3">
            <img className="card-img" src="/svc-turnkey.png" alt="" loading="lazy" />
            <h3>Turnkey Solutions</h3>
            <p>From idea to market: product BOM, specification, QA, packaging and complete documentation — end-to-end.</p>
          </article>

          <article className="card" data-reveal data-delay="3">
            <img className="card-img" src="/svc-branding.png" alt="" loading="lazy" />
            <h3>Branding</h3>
            <p>Naming, identity and packaging that work together: clear value props, assets and channels aligned to unlock growth.</p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" data-reveal>Contact</h2>

        {/* Form */}
        <form className="contact-form" action="https://formspree.io/f/your-id" method="POST" data-reveal>
          <div className="form-row">
            <input name="name" type="text" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <textarea name="message" rows="4" placeholder="Message" required />
          <div style={{ marginTop: 10 }}>
            <button className="neumorphic-btn" type="submit">Send</button>
          </div>
        </form>

        {/* Contacts list */}
        <div className="mailbox" data-reveal data-delay="1">
          <a className="mail" href="tel:+14388091901">
            <img className="mail-ico" src="/ico-phone.svg" alt="" />
            +1 (438) 809-1901
          </a>

          <div className="mail" style={{ cursor:'default' }}>
            <img className="mail-ico" src="/ico-section.svg" alt="" />
            <strong>for inquiries</strong>
          </div>
          <a className="mail" href="mailto:welcome@maisongp.com">
            <img className="mail-ico" src="/ico-mail.svg" alt="" />
            welcome@maisongp.com
          </a>

          <div className="mail" style={{ cursor:'default' }}>
            <img className="mail-ico" src="/ico-section.svg" alt="" />
            <strong>for partners</strong>
          </div>
          <a className="mail" href="mailto:partners@maisongp.com">
            <img className="mail-ico" src="/ico-mail.svg" alt="" />
            partners@maisongp.com
          </a>

          <div className="mail" style={{ cursor:'default' }}>
            <img className="mail-ico" src="/ico-section.svg" alt="" />
            <strong>for careers</strong>
          </div>
          <a className="mail" href="mailto:careers@maisongp.com">
            <img className="mail-ico" src="/ico-mail.svg" alt="" />
            careers@maisongp.com
          </a>

          <a className="mail" href="https://www.linkedin.com/company/maison-global-partners/" target="_blank" rel="noopener">
            <img className="mail-ico" src="/ico-in.svg" alt="" />
            LinkedIn
          </a>

          <p className="based">Based in Montreal, Quebec, Canada.</p>
        </div>
      </section>
    </main>
  );
}
