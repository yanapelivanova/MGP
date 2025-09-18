import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maison Global Partners",
  description: "Architecture of Flow — Guiding your vision worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-neutral-900`}>
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg tracking-tight">
              Maison Global Partners
            </a>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-700">
              <a href="#solutions" className="hover:text-black transition">Solutions</a>
              <a href="#pricing" className="hover:text-black transition">Pricing</a>
              <a href="#contact" className="hover:text-black transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="pt-24">{children}</main>

        {/* FOOTER */}
        <footer
          id="contact"
          className="mt-24 border-t border-neutral-200/50 bg-white/60 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12 text-sm text-neutral-700">
            
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-semibold text-neutral-900 mb-4">Maison Global Partners</h3>
              <p className="text-neutral-600 leading-relaxed">
                Architecture of Flow — guiding your vision worldwide with elegant structure and precise execution.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="font-medium text-neutral-900 mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#solutions" className="hover:text-black transition">Solutions</a></li>
                <li><a href="#pricing" className="hover:text-black transition">Pricing</a></li>
                <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Emails */}
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

            {/* Column 4: CTA */}
            <div>
              <h4 className="font-medium text-neutral-900 mb-4">Start the Conversation</h4>
              <a
                href="mailto:welcome@maisongp.com"
                className="inline-block px-5 py-3 rounded-xl glass font-medium text-neutral-900 hover:bg-white/80 transition"
              >
                Start a Project →
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-200/50 py-6 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
