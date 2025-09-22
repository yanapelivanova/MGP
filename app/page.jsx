// app/page.jsx

function IconMail(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.3l8 4.9 8-4.9V8H4zm16 8V9.9l-7.4 4.6a2 2 0 0 1-2.2 0L3 9.9V16a0 0 0 0 0 0 0h17z"/>
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1L6.6 10.8z"/>
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.2 8.2h3.5V22H1.2V8.2zm6.2 0h3.3v1.9h.05c.46-.86 1.6-1.77 3.3-1.77C17.7 8.3 20 10 20 13.7V22h-3.5v-7c0-1.7-.03-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7V22H8V8.2z"/>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero" id="top">
        {/* ЛОГО — путь /logo.png, как у тебя в /public */}
        <div className="brand-card">
          <img className="logo-hero" src="/logo.png" alt="MGP logo" />
        </div>

        <h1>Maison Global Partners</h1>

        <div className="btnbar">
          <a className="neumorphic-btn" href="#contact">Contact</a>
          <a
            className="neumorphic-btn"
            href="https://www.linkedin.com/company/maison-global-partners"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h2>Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant
          structure and precise execution.
        </p>
      </section>

      {/* EXPLORE */}
      <section className="section" id="explore">
        <h3>Explore</h3>
        <div className="chips">
          <a className="chip" href="#solutions">Solutions</a>
          <a className="chip" href="#pricing">Pricing</a>
          <a className="chip" href="#contact">Contact</a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h3>Contact</h3>

        <div className="mailbox">
          <a className="mail" href="tel:+15145551234">
            <IconPhone className="mail-ico" />
            +1 (514) 555-1234
          </a>

          <a className="mail" href="mailto:welcome@maisongp.com">
            <IconMail className="mail-ico" />
            welcome@maisongp.com
          </a>

          <a className="mail" href="mailto:partners@maisongp.com">
            <IconMail className="mail-ico" />
            partners@maisongp.com
          </a>

          <a className="mail" href="mailto:careers@maisongp.com">
            <IconMail className="mail-ico" />
            careers@maisongp.com
          </a>

          <a
            className="mail"
            href="https://www.linkedin.com/company/maison-global-partners"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn className="mail-ico" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER – без дублей */}
      <footer className="foot">
        © 2025 Maison Global Partners. All rights reserved.
      </footer>
    </main>
  );
}
