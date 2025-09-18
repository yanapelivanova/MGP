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
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
