"use client";

export default function About() {
  return (
    <main className="about-page">
      {/* Фон: неоморфные ленты со свечением */}
      <div className="flow-canvas" aria-hidden="true">
        <div className="ribbon r1" />
        <div className="ribbon r2" />
        <div className="ribbon r3" />
        <div className="ribbon r4" />
      </div>

      {/* Хлебные крошки */}
      <nav className="breadcrumbs">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <span>About</span>
      </nav>

      {/* About Us */}
      <section className="section glass">
        <h2>About Us</h2>
        <p>
          <strong>Maison Global Partners</strong> is a boutique consultancy
          specialising in international procurement and supply-chain management.
          We help companies find reliable vendors worldwide, optimise sourcing
          strategies, and build transparent processes that reduce risk and
          increase efficiency.
        </p>
        <p>
          Our approach combines global expertise with a refined sense of detail.
          We believe in clarity, reliability and precision — the architecture of
          flow that turns complexity into results.
        </p>
      </section>

      {/* What we believe */}
      <section className="section glass">
        <h2>What we believe</h2>
        <p>
          Every partnership should be built on trust and clear execution. With
          MGP, businesses get more than a purchasing partner — they get a
          strategic ally who safeguards ambitions, reduces risk and drives
          efficiency while preserving brand intent.
        </p>
      </section>

      {/* Message from the Founder — ярко выраженное стекло + шире колонка */}
      <section className="section glass-bright founder-wrap">
        <h2>Message from the Founder</h2>
        <blockquote className="founder-quote">
          <p>“Guiding your vision worldwide, with strength and grace.”</p>
          <p>
            At Maison Global Partners, we believe true strength lies in clarity,
            resilience and trust. Over the past decade we have navigated complex
            supply chains across continents — negotiating with vendors,
            implementing transparent processes, and turning uncertainty into
            reliability.
          </p>
          <p>
            MGP was founded with a simple mission: protect ambitions and turn
            intent into flow. We don’t just manage supply chains — we create
            order, mitigate risk and transform precision into growth.
          </p>
        </blockquote>
      </section>
    </main>
  );
}
