import "./globals.css";
import Footer from "./components/Footer";
import FlowBackground from "./components/FlowBackground";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Maison Global Partners",
  description: "Architecture of Flow — Guiding your vision worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* временно везде, чтобы убедиться, что дуги есть */}
        <FlowBackground scope="all" />

        {children}

        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
