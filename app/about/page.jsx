"use client";

export default function About() {
  return (
    <main className="about-wrap">
      {/* фоновая графика – прокручивается вместе со страницей */}
      <div className="flow-canvas" aria-hidden="true">
        <span className="ribbon r1" />
        <span className="ribbon r2" />
        <span className="ribbon r3" />
        <span className="ribbon r4" />
      </div>

      <section className="section">
        <div className="glass">
          <h1 className="page-title">About Us</h1>
          <p>
            <strong>Maison Global Partners</strong> is a boutique consultancy
            specialising in international procurement and supply-chain
            management. We help companies find reliable vendors worldwide,
            optimise sourcing strategies, and build transparent processes that
            reduce risk and increase efficiency.
          </p>
          <p>
            Our approach combines global expertise with a refined sense of
            detail. We believe in clarity, reliability and precision — the
            architecture of flow that turns complexity into results.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="glass">
          <h2>What we believe</h2>
          <p>
            Every partnership should be built on trust and clear execution.
            With MGP, businesses get more than a purchasing partner — they get a
            strategic ally who safeguards ambitions, reduces risk and drives
            efficiency while preserving brand intent.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="glass glass-strong">
          <h2>Message from the Founder</h2>
          <blockquote className="founder-glass">
            <p className="lead-quote">
              “Guiding your vision worldwide, with strength and grace.”
            </p>
            <p>
              At Maison Global Partners, we believe true strength lies in
              clarity, resilience and trust. Over the past decade we have
              navigated complex supply chains across continents — negotiating
              with vendors, implementing transparent processes and turning
              uncertainty into reliability.
            </p>
            <p>
              MGP was founded with a simple mission: protect ambitions and turn
              intent into flow. We don’t just manage supply chains — we create
              order, mitigate risk and transform precision into growth.
            </p>
          </blockquote>
        </div>
      </section>

      <footer className="about-foot">
        © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
      </footer>
    </main>
  );
}
