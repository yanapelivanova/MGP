// app/page.jsx
export default function Home() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        {/* ЛОГО */}
        <img src="/logo.png" alt="MGP logo" className="logo-hero" />
        <h1>Maison Global Partners</h1>

        <div className="btnbar">
          <a className="neumorphic-btn" href="/contact">Contact</a>
          <a
            className="neumorphic-btn"
            href="https://www.linkedin.com/company/maison-global-partners/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <h2>Maison Global Partners</h2>
        <p className="lead">
          Architecture of Flow — guiding your vision worldwide with elegant
          structure and precise execution.
        </p>

        <div className="grid">
          <div>
            <h3>Explore</h3>
            <div className="chips">
              <a className="chip" href="/#solutions">Solutions</a>
              <a className="chip" href="/#pricing">Pricing</a>
              <a className="chip" href="/contact">Contact</a>
            </div>
          </div>

          {/* EMAIL CONTAINER с минимальными иконками */}
          <div>
            <h3>Contact</h3>
            <div className="mailbox">
              <a className="mail" href="mailto:welcome@maisongp.com">
                {/* минималистичный конверт */}
                <svg className="mail-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" fill="none" stroke="#777" strokeWidth="1.4" />
                  <path d="M4 7.5l8 6 8-6" fill="none" stroke="#777" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span>welcome@maisongp.com</span>
              </a>

              <a className="mail" href="mailto:partners@maisongp.com">
                <svg className="mail-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" fill="none" stroke="#777" strokeWidth="1.4" />
                  <path d="M4 7.5l8 6 8-6" fill="none" stroke="#777" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span>partners@maisongp.com</span>
              </a>

              <a className="mail" href="mailto:careers@maisongp.com">
                <svg className="mail-ico" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Z" fill="none" stroke="#777" strokeWidth="1.4" />
                  <path d="M4 7.5l8 6 8-6" fill="none" stroke="#777" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span>careers@maisongp.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* один-единственный футер */}
        <footer className="foot">
          © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
