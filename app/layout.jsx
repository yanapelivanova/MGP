import "./globals.css";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
  title: "Maison Global Partners",
  description: "Your vision, worldwide.",
  openGraph: {
    title: "Maison Global Partners",
    description: "The architecture of flow — sourcing, supply chain, branding.",
    url: "https://maisongp.com",
    siteName: "Maison Global Partners",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "MGP" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Global Partners",
    description: "Your vision, worldwide.",
    images: ["/og.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans bg-neutral-50 text-neutral-900">
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
