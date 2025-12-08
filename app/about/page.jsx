// app/about/page.jsx
"use client";

export default function AboutPage() {
  return (
    <main className="page about-page">
      {/* ---------- ABOUT US ---------- */}
      <section className="section section-tight">
        <div className="glass">
          <h2>About Us</h2>
          <p>
            <strong>Maison Global Partners</strong> is a global agency
            specializing in international procurement and supply-chain
            management. We help companies find reliable vendors worldwide,
            optimize their sourcing strategies, and build transparent processes
            that reduce risk and increase efficiency.
          </p>
        </div>
      </section>

      {/* ---------- WHAT WE BELIEVE ---------- */}
      <section className="section section-tight">
        <div className="glass">
          <h2>What we believe</h2>
          <p>
            Our approach combines global expertise with a refined sense of detail.
            We believe that every partnership should be built on trust, clarity,
            and precision. With MGP, businesses gain not only a purchasing partner,
            but also a strategic ally who safeguards ambitions and turns complexity
            into flow.
          </p>
        </div>
      </section>

      {/* ---------- MESSAGE FROM THE FOUNDER ---------- */}
      <section className="section section-tight">
        <div className="glass-strong founder-wrap">
          <h2>Message from the Founder</h2>

          <blockquote className="founder-quote">
            <p className="founder-line">
              “Guiding your vision worldwide, with strength and grace.”
            </p>
            <p>
              At Maison Global Partners, we believe that true strength lies in clarity,
              resilience, and trust.
            </p>
            <p>
              For more than a decade, I have navigated the complexities of global procurement
              and supply chains — negotiating with vendors across continents, building transparent
              processes, and turning uncertainty into reliability.
            </p>
            <p>
              Founding Maison Global Partners was not just a professional decision, but a personal mission.
              We stand for integrity, beauty in execution, and the architecture of flow.
            </p>
            <p>
              Our mission is to guide businesses with the same care, resilience, and strategy that once helped
              me turn uncertainty into stability. At MGP, we don’t just manage supply chains — we protect ambitions,
              create order, and turn trust into results.
            </p>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
