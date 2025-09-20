// app/page.jsx
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "28px",
        background: "#ffffff", // белый фон
      }}
    >
      <h1 style={{ fontSize: "28px", color: "#333", margin: 0 }}>
        Maison Global Partners
      </h1>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a className="neumorphic-btn" href="/contact">Contact</a>
        <a
          className="neumorphic-btn"
          href="https://www.linkedin.com/company/maison-global-partners/"
          target="_blank" rel="noopener"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
