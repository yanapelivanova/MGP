// app/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot" aria-label="Website footer">
      <p>© {year} Maison Global Partners. All rights reserved.</p>
    </footer>
  );
}
  
