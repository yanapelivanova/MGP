export const metadata = {
  title: "About — Maison Global Partners",
  description:
    "Maison Global Partners is a boutique consultancy specialising in international procurement and supply-chain management.",
};

export default function AboutPage() {
  return (
    <main className="page">
      {/* ---------- Breadcrumbs ---------- */}
      <nav className="breadcrumbs section" aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">›</span>
        <span className="current">About</span>
      </nav>

      {/* ---------- About Us ---------- */}
      <section className="section">
        <h1>About Us</h1>
        <div className="about-wrap">
          <p>
            <strong>Maison Global Partners</strong> is a boutique consultancy
            specialising in international procurement and supply-chain
            management. We combine global expertise with a refined sense of
            detail.
          </p>
        </div>
      </section>

      {/* ---------- What we believe ---------- */}
      <section className="section">
        <h2>What we believe</h2>
        <div className="about-wrap">
          <p>
            We believe that every partnership should be built on trust, clarity
            and precision. With MGP, businesses gain not only a purchasing
            partner, but also a strategic ally who safeguards ambitions and
            turns complexity into flow.
          </p>
        </div>
      </section>

      {/* ---------- Founder Message ---------- */}
      <section className="section">
        <h2>Message from the Founder</h2>
        <div className="founder-wrap">
          <blockquote className="founder-quote">
            Our approach is grounded in pragmatism and taste. We help companies
            find reliable vendors worldwide, optimise sourcing strategies,
            reduce risk and increase efficiency while preserving brand intent.
          </blockquote>
        </div>
      </section>
    </main>
  );
}
