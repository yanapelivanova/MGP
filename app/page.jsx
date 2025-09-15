import { ArrowRight, Globe2, Boxes, Settings2, Palette, BadgeCheck, Sparkles } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <p className="uppercase tracking-[.25em] text-xs text-neutral-600">The architecture of flow</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-light leading-tight">
            Your vision, <span className="font-medium">worldwide</span>
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-700">
            Guiding your vision worldwide — from sourcing the right manufacturer to delivering a finished product. 
            Elegant structure. Precise execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white"
            >
              Start a project <ArrowRight size={18}/>
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-neutral-300"
            >
              See solutions
            </a>
            {/* Contact button с автофокусом */}
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                  document.querySelector('input[name="name"]')?.focus();
                }, 600); // ждём пока прокрутка дойдёт
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-xs"
            >
              Contact <ArrowRight size={14}/>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
            }
