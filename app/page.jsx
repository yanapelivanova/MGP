// app/page.jsx
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        {/* ЛОГО */}
        <img
          className="logo-hero"
          src="/logo/mgp-badge.png"
          alt="Maison Global Partners — logo"
          width={560}
          height={560}
          loading="eager"
          decoding="async"
        />

        <h1>Maison Global Partners</h1>

        {/* КНОПКИ */}
        <div className="btnbar">
          <a className="neumorphic-btn" href="#contact">Contact</a>
          <a
            className="neumorphic-btn"
            href="https://www.linkedin.com/company/maison-global-partners"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ОСНОВНОЙ КОНТЕНТ */}
      <section className="section">
        <h2>Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant
          structure and precise execution.
        </p>

        <div className="grid">
          <div>
            <h3>Explore</h3>
            <div className="chips" aria-label="Explore">
              <a className="chip" href="/solutions">Solutions</a>
              <a className="chip" href="/pricing">Pricing</a>
              <a className="chip" href="#contact">Contact</a>
            </div>
          </div>

          <div id="contact">
            <h3>Contact</h3>
            <div className="mailbox">
              <a className="mail" href="mailto:welcome@maisongp.com">
                <svg className="mail-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 6h20v12H2z" fill="none"/><path d="M2 6l10 7L22 6" />
                </svg>
                welcome@maisongp.com
              </a>
              <a className="mail" href="mailto:partners@maisongp.com">
                <svg className="mail-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 6h20v12H2z" fill="none"/><path d="M2 6l10 7L22 6" />
                </svg>
                partners@maisongp.com
              </a>
              <a className="mail" href="mailto:careers@maisongp.com">
                <svg className="mail-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 6h20v12H2z" fill="none"/><path d="M2 6l10 7L22 6" />
                </svg>
                careers@maisongp.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ЕДИНСТВЕННЫЙ ФУТЕР */}
      <Footer />
    </main>
  );
}
