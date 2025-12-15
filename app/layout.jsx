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
        {/* Background flows — ONLY on Home */}
        <FlowBackground scope="home" />

        {/* Main content */}
        {children}

        {/* Analytics must be inside <body>, but outside main content */}
        <Analytics />

        {/* Global footer */}
        <Footer />
      </body>
    </html>
  );
}
