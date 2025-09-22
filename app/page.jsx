// app/page.jsx
export default function Home() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero" id="top">
        {/* ЛОГО */}
        <img
          className="logo-badge"
          src="/logo-badge.png"
          alt="Maison Global Partners logo"
        />

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
            <img className="mail-ico" src="/phone.svg" alt="" aria-hidden="true" />
            +1 (514) 555-1234
          </a>
          <a className="mail" href="mailto:welcome@maisongp.com">
            <img className="mail-ico" src="/mail.svg" alt="" aria-hidden="true" />
            welcome@maisongp.com
          </a>
          <a className="mail" href="mailto:partners@maisongp.com">
            <img className="mail-ico" src="/mail.svg" alt="" aria-hidden="true" />
            partners@maisongp.com
          </a>
          <a className="mail" href="mailto:careers@maisongp.com">
            <img className="mail-ico" src="/mail.svg" alt="" aria-hidden="true" />
            careers@maisongp.com
          </a>
          <a
            className="mail"
            href="https://www.linkedin.com/company/maison-global-partners"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mail-ico" src="/linkedin.svg" alt="" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="foot">
        © 2025 Maison Global Partners. All rights reserved.
      </footer>
    </main>
  );
}
