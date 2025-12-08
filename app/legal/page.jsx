// app/legal/page.jsx
"use client";

import GlassCard from "../components/GlassCard";

export default function LegalPage() {
  return (
    <main className="page">
      <section className="section section-tight" style={{ maxWidth: 900, margin: "0 auto" }}>
        <GlassCard>
          <h1 className="text-3xl font-display mb-4">Legal</h1>

          <p className="lead">
            Здесь будут размещены юридические сведения, политика конфиденциальности,
            условия сотрудничества и другая обязательная информация Maison Global Partners.
          </p>
        </GlassCard>
      </section>
    </main>
  );
}
