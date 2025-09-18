// app/layout.jsx
import './globals.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Maison Global Partners',
  description: 'Guiding your vision worldwide — Elegant structure. Precise execution.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
}
