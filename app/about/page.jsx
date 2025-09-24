export const metadata = {
  title: "About — Maison Global Partners",
  description:
    "Maison Global Partners is a boutique consultancy in international procurement and supply-chain management.",
};

export default function AboutPage() {
  return (
    <main className="page about">
      <header className="section">
        <h1>About Us</h1>
        <p className="lead">
          Maison Global Partners is a boutique consultancy specializing in
          international procurement and supply-chain management. We combine
          global expertise with a refined sense of detail.
        </p>
      </header>

      <section className="section">
        <h2>What we believe</h2>
        <p className="prose">
          We believe that every partnership should be built on trust, clarity
          and precision. With MGP, businesses gain not only a purchasing
          partner, but also a strategic ally who safeguards ambitions and
          turns complexity into flow.
        </p>
      </section>

      <section id="founder-message" className="section founder">
        <h2>Message from the Founder</h2>
        <div className="founder-text">
          <p>
            {/* сюда твой текст  — выровнен по ширине и чуть шире блока */}
            Our approach is grounded in pragmatism and taste. We help companies
            find reliable vendors worldwide, optimize sourcing strategies,
            reduce risk and increase efficiency while preserving brand intent.
          </p>
        </div>
      </section>
    </main>
  );
}
