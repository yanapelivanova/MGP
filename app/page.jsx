// app/page.jsx
export default function Home() {
  return (
    <main className="page">

      {/* HERO */}
      <section className="hero">
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
      <section className="section" id="about">
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

          <div id="contact">
            <h3>Contact</h3>
            <div className="chips">
              <a className="neumorphic-btn" href="mailto:welcome@maisongp.com">
                welcome@maisongp.com
              </a>
              <a className="neumorphic-btn" href="mailto:partners@maisongp.com">
                partners@maisongp.com
              </a>
              <a className="neumorphic-btn" href="mailto:careers@maisongp.com">
                careers@maisongp.com
              </a>
            </div>
          </div>
        </div>

        <footer className="foot">
          © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
        </footer>
      </section>

    </main>
  );
}
