// app/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot section" role="contentinfo">
      <p>© {year} Maison Global Partners. All rights reserved.</p>
    </footer>
  );
}
