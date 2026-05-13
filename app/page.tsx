import PricingSection from "@/components/PricingSection";
import AnimatedLogo from "@/components/AnimatedLogo";

export default function TomWebCraftLanding() {
  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="w-full px-6 py-5 flex items-center justify-between border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/50">
        <div className="flex items-center gap-3">

  {/* Logo */}
  <div className="flex items-end gap-1">

    <div className="w-1.5 h-6 rounded-full bg-[#F3F4F6]" />

    <div className="w-1.5 h-10 rounded-full bg-[#E9B44C]" />

    <div className="w-1.5 h-6 rounded-full bg-[#F3F4F6]" />

  </div>

  {/* Text */}
  <h1 className="text-xl font-semibold tracking-tight text-white">
    TomWebCraft
  </h1>

</div>

        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#about" className="hover:text-white transition">
            Über mich
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projekte
          </a>
          <a href="#contact" className="hover:text-white transition">
            Kontakt
          </a>
        </nav>

        <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition">
          Anfrage
        </button>
      </header>

      <AnimatedLogo />


      {/* Hero */}
      <section className="px-6 pt-32 pb-24 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-white/70 mb-8">
          Moderne Websites für Unternehmen
        </div>

        <h2 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight max-w-5xl mx-auto">
          Moderne Websites.
          <br />
          Schnell, elegant und mobil optimiert.
        </h2>

        <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Ich entwickle moderne Websites für kleine Unternehmen und lokale
          Dienstleister. Minimalistisches Design, schnelle Ladezeiten und ein
          professioneller Auftritt auf allen Geräten.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition shadow-2xl">
            Projekt starten
          </button>

          <button className="px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
            Beispiele ansehen
          </button>
        </div>
      </section>

      {/* Feature Card */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-14 shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-4">
                TomWebCraft
              </p>

              <h3 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Websites, die modern wirken und Vertrauen schaffen.
              </h3>

              <p className="mt-6 text-white/60 leading-relaxed text-lg">
                Fokus auf klare Designs, moderne Animationen und schnelle
                Nutzererfahrung. Entwickelt für Unternehmen, die online
                professionell auftreten möchten.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[30px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 shadow-2xl">
                <div className="rounded-2xl bg-black border border-white/10 p-6">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="h-6 w-2/3 rounded-full bg-white/10" />
                    <div className="h-4 w-full rounded-full bg-white/5" />
                    <div className="h-4 w-5/6 rounded-full bg-white/5" />
                    <div className="h-4 w-4/6 rounded-full bg-white/5" />
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-28 rounded-2xl bg-white/5 border border-white/5" />
                    <div className="h-28 rounded-2xl bg-white/5 border border-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-[0.25em] text-sm mb-4">
            Services
          </p>

          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Was ich anbiete
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Moderne Websites",
              text: "Minimalistische und professionelle Websites für Unternehmen und lokale Dienstleister.",
            },
            {
              title: "Mobile Optimierung",
              text: "Optimiert für Smartphones, Tablets und moderne Nutzererfahrung.",
            },
            {
              title: "Wartung & Updates",
              text: "Hosting, kleine Änderungen und langfristige Betreuung auf Wunsch.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 mb-6" />
              <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
              <p className="text-white/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      

      <PricingSection />


      {/* About */}
      <section id="about" className="px-6 pb-32 max-w-5xl mx-auto text-center">
        <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16">
          <p className="text-white/40 uppercase tracking-[0.25em] text-sm mb-4">
            Über mich
          </p>

          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Hi, ich bin Tom aus Erfurt.
          </h3>

          <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
            Ich studiere Angewandte Informatik an der Fachhochschule Erfurt und
            beschäftige mich intensiv mit modernem Webdesign und digitalen
            Systemen. Mein Fokus liegt auf schnellen, modernen und klaren
            Websites für kleine Unternehmen.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-white/40 uppercase tracking-[0.25em] text-sm mb-4">
              Projekte
            </p>

            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Beispielprojekte
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-white/10 to-white/5" />

              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">
                  Projekt {item}
                </h4>

                <p className="text-white/60 leading-relaxed">
                  Modernes Webdesign mit Fokus auf Geschwindigkeit,
                  Benutzerfreundlichkeit und minimalistischer Ästhetik.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 pb-32 max-w-5xl mx-auto text-center">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Bereit für eine moderne Website?
            </h3>

            <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Lass uns gemeinsam eine moderne und professionelle Website für dein
              Unternehmen entwickeln.
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition shadow-2xl">
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-white/40 text-sm">
        © 2026 TomWebCraft • Modern Web Design
      </footer>
    </main>
  )
}