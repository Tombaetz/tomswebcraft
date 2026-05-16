"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "navbar",
    explanation:
      "Navigation sollte sich selbstverständlich anfühlen. Klarheit reduziert mentale Reibung.",
  },
  {
    id: "hero",
    explanation:
      "Der erste Eindruck entscheidet. Ruhe schafft Vertrauen und digitale Qualität.",
  },
  {
    id: "services",
    explanation:
      "Klare Strukturen helfen Menschen schneller zu verstehen worum es geht.",
  },
  {
    id: "about",
    explanation:
      "Persönlichkeit schafft Vertrauen. Menschen möchten wissen mit wem sie arbeiten.",
  },
  {
    id: "footer",
    explanation:
      "Auch kleine Details vermitteln Professionalität und Sorgfalt.",
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
    }, 14);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="px-6 py-44 max-w-7xl mx-auto">

      {/* LABEL */}
      <div className="text-center mb-20">

        <p className="text-white/25 uppercase tracking-[0.35em] text-[11px]">
          Simple can be harder than complex
        </p>

      </div>

      {/* OUTER */}
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
          from-white/[0.04]
          to-white/[0.015]

          overflow-hidden

          p-4
          md:p-8
        "
      >

        {/* AMBIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

        {/* BROWSER */}
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

          {/* TOP BAR */}
          <div className="flex items-center gap-2 px-6 py-5 border-b border-white/10 bg-white/[0.015]">

            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />

            <div className="ml-6 h-3 w-40 rounded-full bg-white/10" />

          </div>

          {/* WEBSITE */}
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
                    TomWebCraft
                  </span>

                </div>

                <div className="hidden md:flex items-center gap-6 text-xs text-white/30">

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

              <div className="space-y-8">

                <div className="space-y-8">

                  <h2 className="text-3xl md:text-6xl font-semibold tracking-tight text-white max-w-4xl leading-[1]">

                    Design als Schnittstelle
                    zwischen Mensch und Bedürfnis

                  </h2>

                  <div className="h-px w-32 bg-gradient-to-r from-[#E9B44C]/60 to-transparent" />

                  <p className="text-white/45 text-sm md:text-lg max-w-2xl leading-relaxed">

                    Digitale Oberflächen sollten sich ruhig,
                    hochwertig und natürlich anfühlen.

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
                  {
                    title: "Mobile Optimierung",
                    emoji: "📱",
                    featured: false,
                  },
                  {
                    title: "Moderne Oberflächen",
                    emoji: "✦",
                    featured: true,
                  },
                  {
                    title: "Schnelle Ladezeiten",
                    emoji: "⚡",
                    featured: false,
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className={`
                      rounded-[28px]
                      border
                      p-6

                      transition-all
                      duration-500

                      ${
                        item.featured
                          ? "border-white/15 bg-white/[0.05] md:scale-[1.03]"
                          : "border-white/10 bg-white/[0.03]"
                      }
                    `}
                  >

                    {/* ICON */}
                    <div
                      className="
                        h-14
                        w-14

                        rounded-2xl

                        bg-white/[0.04]

                        border
                        border-white/10

                        flex
                        items-center
                        justify-center

                        mb-5

                        text-2xl
                      "
                    >
                      {item.emoji}
                    </div>

                    <h3 className="text-white/80 text-sm font-medium tracking-tight">
                      {item.title}
                    </h3>

                  </motion.div>
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

                {/* ICON */}
                <div
                  className="
                    w-20
                    h-20

                    rounded-full

                    bg-white/[0.04]

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-3xl

                    shrink-0
                  "
                >
                  ✦
                </div>

                <div className="space-y-3">

                  <h3 className="text-white text-xl font-medium tracking-tight">
                    Über mich
                  </h3>

                  <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-2xl">

                    Ich heiße Tom, komme aus Erfurt und studiere
                    Angewandte Informatik an der FH Erfurt.
                    Mein Fokus liegt darauf digitale Oberflächen
                    zu entwickeln, die sich natürlich,
                    modern und hochwertig anfühlen.

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

                <div className="text-white/25 text-[11px] uppercase tracking-[0.18em]">
                  © 2026 TomWebCraft
                </div>

                <div className="flex gap-5 text-[11px] uppercase tracking-[0.18em] text-white/20">

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
            ? "border-white/20 bg-white/[0.045] scale-[1.01]"
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
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >

            <div className="pt-6 border-t border-white/10 mt-6">

              <p className="text-white/55 leading-relaxed text-sm md:text-base max-w-2xl">
                {typedText}
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}