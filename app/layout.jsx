import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

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

        {/* FOOTER (component) */}
        <Footer />
      </body>
    </html>
  );
}
