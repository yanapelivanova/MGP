import { Mail, Handshake, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-white/30 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-800">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Maison Global Partners</h3>
          <p className="text-gray-600 leading-relaxed">
            Architecture of Flow — guiding your vision worldwide with elegant
            structure and precise execution.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li><a href="#solutions" className="hover:text-black transition">Solutions</a></li>
            <li><a href="#pricing" className="hover:text-black transition">Pricing</a></li>
            <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={18} className="opacity-70" />
              <a href="mailto:welcome@maisongp.com" className="hover:text-black transition">
                welcome@maisongp.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Handshake size={18} className="opacity-70" />
              <a href="mailto:partners@maisongp.com" className="hover:text-black transition">
                partners@maisongp.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Briefcase size={18} className="opacity-70" />
              <a href="mailto:careers@maisongp.com" className="hover:text-black transition">
                careers@maisongp.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t border-white/10 py-4">
        © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
      </div>
    </footer>
  );
}
