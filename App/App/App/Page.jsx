"use client";

import { useState } from "react";
import { ArrowRight, Globe2, Boxes, Settings2, Palette, BadgeCheck, Sparkles } from "lucide-react";

export default function MGP() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-neutral-900 text-white grid place-items-center font-semibold">MGP</div>
              <div className="absolute -top-2 -right-2 h-6 w-6">
                <svg viewBox="0 0 48 48" className="opacity-60">
                  <path d="M2 40C18 16 30 10 46 8" fill="none" stroke="#0a0a0a" strokeWidth="1.5"/>
                  <path d="M44 6 l2 6 l-6 -2 z" fill="#0a0a0a"/>
                </svg>
              </div>
            </div>
            <span className="font-medium tracking-wide">Maison Global Partners</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#solutions" className="hover:opacity-70">Solutions</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="tel:+14388091901" className="text-sm text-neutral-700 hover:underline">📞 438-809-1901</a>
            <a href="#contact" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-xs">Contact <ArrowRight size={14}/></a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="uppercase tracking-[.25em] text-xs text-neutral-600">The architecture of flow</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-light leading-tight">
            Your vision, <span className="font-medium">worldwide</span>
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-700">Guiding your vision worldwide — from sourcing the right manufacturer to delivering a finished product. Elegant structure. Precise execution.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white">Start a project <ArrowRight size={18}/></a>
            <a href="#solutions" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300">See solutions</a>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-medium">Our Solutions</h2>
        <p className="mt-2 text-neutral-600">Clarity and structure in global trade.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Card icon={<Globe2/>} title="Global sourcing" lines={["Identify and validate manufacturers","Vendor due diligence & sampling","Negotiation & contract support"]} />
          <Card icon={<Boxes/>} title="End-to-end supply solutions" lines={["From purchase order to delivery","Logistics & customs coordination","Turnkey execution"]} />
          <Card icon={<Settings2/>} title="Supply chain optimization" lines={["Cost reduction & redesign","Lead-time & risk mitigation","Process mapping"]} />
          <Card icon={<Palette/>} title="Branding & private label" lines={["Product identity & packaging","Market-ready specifications","Vendor brief & QC for brand"]} />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-medium">Pricing</h2>
          <p className="mt-2 text-neutral-600">Transparent fees aligned with your outcomes.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-lg font-medium">Global sourcing</h3>
              <p className="mt-2 text-sm text-neutral-600">Fixed fee per validated manufacturer.</p>
              <p className="mt-6 text-3xl font-semibold">$5,000</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Supplier shortlist (3–5)</li>
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Due diligence & samples</li>
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Negotiation support</li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-neutral-900 bg-white p-6">
              <h3 className="text-lg font-medium">Turnkey supply solutions</h3>
              <p className="mt-2 text-sm text-neutral-600">End-to-end execution, from PO to delivery.</p>
              <p className="mt-6 text-3xl font-semibold">15% / 10%</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Up to $200k — 15%</li>
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> $200k+ — 10%</li>
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Logistics & customs coordination</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-lg font-medium">Supply optimization</h3>
              <p className="mt-2 text-sm text-neutral-600">Cost, lead-time and risk improvements.</p>
              <p className="mt-6 text-3xl font-semibold">from $5,000</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Baseline & roadmap</li>
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Renegotiation & redesign</li>
                <li className="flex items-center gap-2"><BadgeCheck size={16}/> Implementation support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium">About MGP</h2>
            <p className="mt-4 text-neutral-700">Maison Global Partners is a Montréal-based boutique agency guiding business visions worldwide. We blend sourcing, supply chain and branding into a single, elegant workflow.</p>
            <ul className="mt-6 grid gap-2 text-neutral-800">
              <li className="flex items-center gap-2"><Sparkles size={16}/> Precision</li>
              <li className="flex items-center gap-2"><Sparkles size={16}/> Trust</li>
              <li className="flex items-center gap-2"><Sparkles size={16}/> Elegant execution</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <p className="text-sm text-neutral-600">How we work</p>
            <ol className="mt-4 list-decimal pl-5 space-y-3 text-neutral-800">
              <li>Discovery → scope, timelines, budget.</li>
              <li>Sourcing → shortlist, samples, validation.</li>
              <li>Execution → PO, production, QC.</li>
              <li>Logistics → shipping, customs, delivery.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-medium">Start a conversation</h2>
          <p className="mt-2 text-neutral-600">Tell us about your product and goals. We’ll propose a tailored path.</p>

          <form
            action="https://formspree.io/f/xgvlbvpv"
            method="POST"
            className="mt-8 grid md:grid-cols-2 gap-4"
          >
            <input required name="name" placeholder="Your name" className="rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900"/>
            <input required name="email" type="email" placeholder="Email" className="rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900"/>
            <select name="service" className="rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900">
              <option>Global sourcing</option>
              <option>Turnkey supply solutions</option>
              <option>Supply optimization</option>
              <option>Branding & private label</option>
            </select>
            <input name="budget" placeholder="Budget (optional)" className="rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900"/>
            <textarea name="message" placeholder="Project details" className="md:col-span-2 min-h-[120px] rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-900"/>
            <input type="hidden" name="_subject" value="New inquiry — Maison Global Partners"/>
            <button className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-white">
              Send inquiry <ArrowRight size={18}/>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 border-t border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-900 text-white grid place-items-center text-xs font-semibold">MGP</div>
            <div>
              <p className="text-sm font-medium">Maison Global Partners</p>
              <p className="text-xs text-neutral-600">Your vision, worldwide</p>
              <p className="text-xs text-neutral-600"><a href="tel:+14388091901" className="hover:underline">📞 438-809-1901</a></p>
            </div>
          </div>
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Maison Global Partners. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

// Reusable card
function Card({ icon, title, lines }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800">{icon}</div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
        {lines.map((l, i) => (
          <li key={i} className="flex items-center gap-2"><BadgeCheck size={16}/>{l}</li>
        ))}
      </ul>
    </div>
  );
            }
