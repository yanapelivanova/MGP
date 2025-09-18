// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg tracking-wide">Maison Global Partners</h3>
            <p className="text-sm text-white/60">
              Architecture of Flow — guiding your vision worldwide with elegant structure and precise execution.
            </p>
          </div>

          {/* Explore */}
          <nav className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider text-white/60">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#solutions" className="link">Solutions</a></li>
              <li><a href="#pricing" className="link">Pricing</a></li>
              <li><a href="#contact" className="link">Contact</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider text-white/60">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="icon-badge">✉️</span>
                <a className="link" href="mailto:welcome@maisongp.com">welcome@maisongp.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="icon-badge">🤝</span>
                <a className="link" href="mailto:partners@maisongp.com">partners@maisongp.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="icon-badge">💼</span>
                <a className="link" href="mailto:careers@maisongp.com">careers@maisongp.com</a>
              </li>
            </ul>

            <a href="#contact" className="btn mt-4 w-full sm:w-auto">Start a Project →</a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
