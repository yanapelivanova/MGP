"use client";

export default function AboutPage() {
  return (
    <main className="page">
      {/* ---------- HERO / TITLE ---------- */}
      <section className="section glass-block">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-tagline">
          Guiding your vision worldwide<br />with clarity and flow.
        </p>
      </section>

      {/* ---------- COMPANY BLOCK ---------- */}
      <section className="section glass-block">
        <h2>Maison Global Partners</h2>
        <p>
          <strong>Maison Global Partners</strong> is a boutique consultancy specializing in 
          international procurement and supply chain solutions.  
          We help companies find reliable vendors worldwide, optimize 
          their sourcing strategies, and build transparent processes 
          that reduce risk and increase efficiency.
        </p>
        <p>
          Our approach combines global expertise with refined detail. 
          Every partnership is built on trust, clarity, and precision.  
          With MGP, businesses gain not only a purchasing partner, but 
          also a strategic ally who safeguards ambitions and transforms 
          complexity into flow.
        </p>
      </section>

      {/* ---------- BELIEFS ---------- */}
      <section className="section glass-block">
        <h2>What We Believe</h2>
        <p>
          We believe that resilience, transparency, and design-thinking 
          form the foundation of sustainable growth.  
          Our work is guided by three principles:
        </p>
        <ul>
          <li><strong>Integrity</strong> — clarity and honesty in all partnerships.</li>
          <li><strong>Precision</strong> — beauty in execution and detail.</li>
          <li><strong>Flow</strong> — turning complexity into elegant solutions.</li>
        </ul>
      </section>

      {/* ---------- FOUNDER’S MESSAGE ---------- */}
      <section className="section glass-block founder-block">
        <h2>Message from the Founder</h2>
        <blockquote>
          <p style={{ fontWeight: 600 }}>
            “Guiding your vision worldwide, with strength and grace.”
          </p>
          <p>
            For more than a decade, I have navigated the complexities of 
            global procurement and supply chains — negotiating with vendors 
            across continents, building transparent processes, and turning 
            uncertainty into reliability.
          </p>
          <p>
            Founding <strong>Maison Global Partners</strong> was not just a 
            professional decision, but a personal mission: to help companies 
            feel safe, supported, and empowered to grow.  
            We don’t just manage supply chains — we protect ambitions, 
            create order, and transform trust into results.
          </p>
        </blockquote>
      </section>
    </main>
  );
}
