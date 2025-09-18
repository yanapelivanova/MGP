export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center text-center px-6 w-full">
        {/* затемнение поверх фона */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-sm tracking-widest text-white/80 uppercase mb-3">
            The Architecture of Flow
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Your vision,<br />worldwide
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Guiding your vision worldwide — from sourcing the right manufacturer 
            to delivering a finished product. Elegant structure. Precise execution.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="rounded-2xl bg-white/10 px-6 py-3 text-lg text-white 
                         backdrop-blur-md border border-white/20 shadow-lg 
                         hover:bg-white/20 transition-all"
            >
              Start a Project →
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Solutions</h2>
        <p className="text-gray-700">
          We provide tailored sourcing, logistics, and supply chain solutions to help your business
          scale globally with confidence and precision.
        </p>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 max-w-5xl w-full text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <p className="text-gray-700">
          Transparent and flexible pricing options designed to match your project’s scale.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-5xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Reach out to us for inquiries, partnerships, or project discussions.
        </p>
        <a
          href="mailto:welcome@maisongp.com"
          className="rounded-xl bg-black px-6 py-3 text-lg text-white 
                     shadow-md hover:bg-gray-800 transition-all"
        >
          Email Us →
        </a>
      </section>
    </main>
  );
}
