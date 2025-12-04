// app/layout.jsx
import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Maison Global Partners",
  description: "Architecture of Flow — Guiding your vision worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Шрифты: Cormorant Garamond (300/400/500) + Inter (300/400/500/600) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
