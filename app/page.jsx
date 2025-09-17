export default function HomePage() {
  return (
    <main className="wrap">
      <section className="card">
        <img className="logo" src="assets/logo.png" alt="MGP logo" />

        <h1>Maison Global Partners</h1>
        <p className="tagline">
          Linking markets, ideas, and people to create possibilities and bring ambitions to life.
        </p>

        <div className="btnbar">
          {/* Кнопка на страницу контактов */}
          <a className="pill" href="/contact">
            <span className="dot" />
            <span className="label">Contact</span>
          </a>

          {/* LinkedIn */}
          <a
            className="pill secondary"
            href="https://www.linkedin.com/company/maison-global-partners/"
            target="_blank"
            rel="noopener"
          >
            <span className="dot" />
            <span className="label">LinkedIn</span>
          </a>
        </div>

        <footer className="foot">
          © {new Date().getFullYear()} Maison Global Partners · Montreal
        </footer>
      </section>
    </main>
  );
}
