"use client";

export default function AboutPage() {
  return (
    <main className="page">
      {/* ---------- BREADCRUMBS ---------- */}
      <nav className="breadcrumbs">
        <a href="/">Home</a> <span>/</span> <span>About</span>
      </nav>

      {/* ---------- ABOUT US ---------- */}
      <section className="section">
        <div
          className="card"
          style={{ maxWidth: 900, margin: "0 auto", padding: "28px 32px" }}
        >
          <h2>About Us</h2>
          <p>
            <strong>Maison Global Partners</strong> is a global agency
            specializing in international procurement and supply chain
            management. We help companies find reliable vendors worldwide,
            optimize their sourcing strategies, and build transparent processes
            that reduce risk and increase efficiency.
          </p>
        </div>
      </section>

      {/* ---------- WHAT WE BELIEVE ---------- */}
      <section className="section">
        <div
          className="card"
          style={{ maxWidth: 900, margin: "0 auto", padding: "28px 32px" }}
        >
          <h2>What we believe</h2>
          <p>
            Our approach combines global expertise with a refined sense of
            detail. We believe that every partnership should be built on trust,
            clarity, and precision. With MGP, businesses gain not only a
            purchasing partner, but also a strategic ally who safeguards
            ambitions and turns complexity into flow.
          </p>
        </div>
      </section>

      {/* ---------- MESSAGE FROM THE FOUNDER ---------- */}
      <section className="section" style={{ marginBottom: "40px" }}>
        <div
          className="glass-block"
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "36px 40px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.35)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <h2 style={{ marginBottom: 16 }}>Message from the Founder</h2>

          <blockquote style={{ margin: 0, lineHeight: 1.7 }}>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              “Guiding your vision worldwide, with strength and grace.”
            </p>
            <p>
              At Maison Global Partners, we believe that true strength lies in
              clarity, resilience, and trust.
            </p>
            <p>
              For more than a decade, I have navigated the complexities of
              global procurement and supply chains — negotiating with vendors
              across continents, building transparent processes, and turning
              uncertainty into reliability.
            </p>
            <p>
              Founding Maison Global Partners was not just a professional
              decision, but a personal mission. I have seen how chaos consumes
              resources, how poor choices erode potential, and how companies —
              like people — thrive only when they feel safe and supported. This
              is why we stand for integrity, beauty in execution, and the
              architecture of flow.
            </p>
            <p>
              Our mission is to guide businesses with the same care, resilience,
              and strategy that once helped me turn uncertainty into stability.
              At MGP, we don’t just manage supply chains — we protect ambitions,
              create order, and turn trust into results.
            </p>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
