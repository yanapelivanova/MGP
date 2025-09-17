export default function ContactPage() {
  return (
    <main className="wrap">
      <section className="card">
        <h1>Contact</h1>
        <p className="tagline">Let’s build elegant structures where ambitions come to life.</p>

        <div className="btnbar">
          <a className="pill" href="tel:+14388091901">
            <span className="dot" /> +1 (438) 809-1901
          </a>
          <a className="pill" href="mailto:info@maisongp.com">
            <span className="dot" /> info@maisongp.com
          </a>
          <a className="pill"
             href="https://www.linkedin.com/company/maison-global-partners/"
             target="_blank" rel="noopener">
            <span className="dot" /> LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
