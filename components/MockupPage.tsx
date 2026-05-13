"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "navbar",
    explanation:
      "Die Navigation soll ruhig, klar und selbstverständlich wirken. Nutzer sollen sich sofort orientieren können ohne nachdenken zu müssen. Gute Navigation fühlt sich fast unsichtbar an.",
  },
  {
    id: "hero",
    explanation:
      "Die Hero Section erzeugt den ersten emotionalen Eindruck. Sie soll Vertrauen, Klarheit und moderne Qualität vermitteln bevor überhaupt gelesen wird.",
  },
  {
    id: "services",
    explanation:
      "Klare strukturierte Bereiche reduzieren mentale Überforderung und helfen Nutzern schneller zu verstehen welche Leistungen angeboten werden.",
  },
  {
    id: "about",
    explanation:
      "Persönliche Bereiche schaffen Vertrauen und geben der Website Charakter. Menschen möchten verstehen mit wem sie arbeiten.",
  },
  {
    id: "footer",
    explanation:
      "Selbst kleine Details wie Footer und Abschlussbereiche vermitteln Professionalität, Struktur und ein vollständiges Gesamtgefühl.",
  },
];

export default function MockupPage() {
  const [active, setActive] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");

  const current = sections.find((s) => s.id === active);

  useEffect(() => {
    if (!current) {
      setTypedText("");
      return;
    }

    let index = 0;

    setTypedText("");

    const interval = setInterval(() => {
      setTypedText(current.explanation.slice(0, index));
      index++;

      if (index > current.explanation.length) {
        clearInterval(interval);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="px-6 py-40 max-w-7xl mx-auto">

      {/* Label */}
      <div className="text-center mb-16">
        <p className="text-white/30 uppercase tracking-[0.35em] text-sm">
          Simple can be harder than complex
        </p>
      </div>

      {/* Outer Container */}
      <motion.div
        layout
        transition={{
          layout: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="
          relative
          rounded-[56px]
          border
          border-white/10
          bg-gradient-to-br
          from-white/[0.05]
          to-white/[0.02]
          backdrop-blur-3xl
          shadow-[0_0_120px_rgba(255,255,255,0.03)]
          overflow-hidden
          p-4
          md:p-8
        "
      >

        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

        {/* Browser */}
        <div
          className="
            relative
            rounded-[40px]
            border
            border-white/10
            overflow-hidden
            bg-[#090D14]
          "
        >

          {/* Browser Bar */}
          <div className="flex items-center gap-2 px-6 py-5 border-b border-white/10 bg-white/[0.02]">

            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />

            <div className="ml-6 h-3 w-40 rounded-full bg-white/10" />
          </div>

          {/* Website */}
          <div className="p-5 md:p-8 space-y-5">

            {/* NAVBAR */}
            <InteractiveSection
              id="navbar"
              active={active}
              setActive={setActive}
              typedText={typedText}
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex items-end gap-1">
                    <div className="w-1.5 h-5 rounded-full bg-[#F3F4F6]" />
                    <div className="w-1.5 h-8 rounded-full bg-[#E9B44C]" />
                    <div className="w-1.5 h-5 rounded-full bg-[#F3F4F6]" />
                  </div>

                  <span className="text-white/80 text-sm tracking-tight">
                    Max Fitness Coach
                  </span>
                </div>

                <div className="hidden md:flex items-center gap-6 text-xs text-white/35">
                  <span>Services</span>
                  <span>Projects</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

            </InteractiveSection>

            {/* HERO */}
            <InteractiveSection
              id="hero"
              active={active}
              setActive={setActive}
              typedText={typedText}
            >

              <div className="space-y-6">

                <div className="space-y-5">

                  <h2 className="text-2xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-tight">
                    "Design als Schnittstelle zwischen Mensch und Bedürfnis"
                  </h2>

                  <p className="text-white/45 text-sm md:text-lg max-w-2xl leading-relaxed">
                    Minimalistische Websites mit Fokus auf Vertrauen,
                    Klarheit und moderne Nutzererfahrung.
                  </p>

                </div>

              </div>

            </InteractiveSection>

            {/* SERVICES */}
            <InteractiveSection
              id="services"
              active={active}
              setActive={setActive}
              typedText={typedText}
            >

              <div className="grid md:grid-cols-3 gap-4">

                {[
                  "Mobile Optimierung",
                  "Moderne Oberflächen",
                  "Schnelle Ladezeiten",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      transition-all
                      duration-500
                      hover:bg-white/[0.05]
                    "
                  >

                    <div className="h-11 w-11 rounded-2xl bg-white/[0.06] mb-5" />

                    <h3 className="text-white/80 text-sm font-medium tracking-tight">
                      {item}
                    </h3>

                  </div>
                ))}
              </div>

            </InteractiveSection>

            {/* ABOUT */}
            <InteractiveSection
              id="about"
              active={active}
              setActive={setActive}
              typedText={typedText}
            >

              <div className="flex flex-col md:flex-row gap-6 md:items-center">

                <div className="w-20 h-20 rounded-full bg-white/[0.05] border border-white/10" />

                <div className="space-y-3">

                  <h3 className="text-white text-xl font-medium tracking-tight">
                    Meine Person
                  </h3>

                  <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-2xl">
                    Fokus auf moderne Web Experiences, klare Designs
                    und digitale Identität mit Wiedererkennungswert.
                  </p>

                </div>
              </div>

            </InteractiveSection>

            {/* FOOTER */}
            <InteractiveSection
              id="footer"
              active={active}
              setActive={setActive}
              typedText={typedText}
            >

              <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

                <div className="text-white/30 text-sm">
                  © 2026 Max Fitness Coach
                </div>

                <div className="flex gap-5 text-xs text-white/25">
                  <span>Impressum</span>
                  <span>Datenschutz</span>
                  <span>Kontakt</span>
                </div>

              </div>

            </InteractiveSection>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* INTERACTIVE SECTION */

function InteractiveSection({
  children,
  id,
  active,
  setActive,
  typedText,
}: any) {
  const isActive = active === id;

  return (
    <motion.div
      layout
      onHoverStart={() => setActive(id)}
      onHoverEnd={() => setActive(null)}
      onClick={() => setActive(isActive ? null : id)}
      transition={{
        layout: {
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={`
        rounded-[34px]
        border
        overflow-hidden
        cursor-pointer
        transition-all
        duration-500
        p-6
        md:p-8

        ${
          isActive
            ? "border-white/20 bg-white/[0.05] backdrop-blur-3xl shadow-[0_0_60px_rgba(255,255,255,0.03)] scale-[1.015]"
            : "border-white/10 bg-white/[0.02] hover:bg-white/[0.03]"
        }
      `}
    >

      {children}

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -12,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >

            <div className="pt-6 border-t border-white/10 mt-6">

              <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-3xl">
                {typedText}
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}