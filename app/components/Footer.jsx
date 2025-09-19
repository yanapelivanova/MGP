// app/components/Footer.jsx
import GlassCard from "./GlassCard";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-16 px-6 mt-20 bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Левая часть */}
          <div>
            <h3 className="text-xl font-serif mb-4">Maison Global Partners</h3>
            <p className="text-gray-600 text-sm max-w-sm">
              Architecture of Flow — guiding your vision worldwide with elegant
              structure and precise execution.
            </p>
          </div>

          {/* Правая часть */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><a href="#solutions" className="hover:underline">Solutions</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* Все почты в одной карточке */}
            <GlassCard>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
                Contact
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <a href="mailto:welcome@maisongp.com" className="hover:underline">
                    welcome@maisongp.com
                  </a>
                </li>
                <li>
                  <a href="mailto:partners@maisongp.com" className="hover:underline">
                    partners@maisongp.com
                  </a>
                </li>
                <li>
                  <a href="mailto:careers@maisongp.com" className="hover:underline">
                    careers@maisongp.com
                  </a>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
