import "./globals.css";

export const metadata = {
  title: "Maison Global Partners",
  description: "Guiding your ideas worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
