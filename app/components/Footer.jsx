export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 border-t border-neutral-200/50 bg-white/60 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-sm text-neutral-700">
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-neutral-900 mb-4">Maison Global Partners</h3>
          <p className="text-neutral-600 leading-relaxed">
            Architecture of Flow — guiding your vision worldwide with elegant structure and precise execution.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-medium text-neutral-900 mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#solutions" className="hover:text-black transition">Solutions</a></li>
            <li><a href="#pricing" className="hover:text-black transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>

        {/* Emails */}
        <div>
          <h4 className="font-medium text-neutral-900 mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>
              <span className="block text-neutral-500 text-xs">General</span>
              <a href="mailto:welcome@maisongp.com" className="font-medium hover:text-black">welcome@maisongp.com</a>
            </li>
            <li>
              <span className="block text-neutral-500 text-xs">Partners</span>
              <a href="mailto:partners@maisongp.com" className="font-medium hover:text-black">partners@maisongp.com</a>
            </li>
            <li>
              <span className="block text-neutral-500 text-xs">Careers</span>
              <a href="mailto:careers@maisongp.com" className="font-medium hover:text-black">careers@maisongp.com</a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-medium text-neutral-900 mb-4">Start the Conversation</h4>
          <a
            href="mailto:welcome@maisongp.com"
            className="inline-block px-5 py-3 rounded-xl bg-white/70 border border-neutral-200/70 backdrop-blur-md font-medium text-neutral-900 hover:bg-white/90 transition"
          >
            Start a Project →
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-200/50 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
      </div>
    </footer>
  );
}
