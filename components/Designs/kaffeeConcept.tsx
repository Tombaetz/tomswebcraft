"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const products = [
  {
    title: "Cappuccino",
    description: "Sanfter Milchschaum trifft auf kräftigen Espresso.",
    emoji: "☕",
  },
  {
    title: "Cold Brew",
    description: "Langsam extrahiert für einen ruhigen, klaren Geschmack.",
    emoji: "🧊",
  },
  {
    title: "Signature Roast",
    description: "Warme Röstaromen mit leichter Schokoladennote.",
    emoji: "🌰",
  },
];

const team = [
  {
    name: "Lena",
    role: "Barista",
    emoji: "✨",
  },
  {
    name: "Noah",
    role: "Roastery",
    emoji: "☕",
  },
  {
    name: "Mila",
    role: "Service",
    emoji: "🤎",
  },
];

export default function KaffeeConcept() {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, 1.06]
  );

  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="
        overflow-hidden
        rounded-[42px]
        border
        border-white/10
        bg-[#0F0B09]
      "
    >

      {/* HERO */}
      <div className="relative min-h-[720px] overflow-hidden group">

        {/* BG */}
        <motion.div
          style={{
            scale: heroScale,
          }}
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_center,rgba(120,72,32,0.35),transparent_60%)]

            transition
            duration-700
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CAPPUCCINO GRADIENT */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-[#0F0B09]
            via-[#1B140F]
            to-[#F6F1EA]
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10

            min-h-[720px]

            flex
            flex-col
            justify-between

            p-6
            sm:p-8
            md:p-12
          "
        >

          {/* TOP */}
          <div>

            {/* NAV */}
            <div className="flex items-center justify-between mb-24">

              <div className="flex items-center gap-3">

                <div
                  className="
                    w-10
                    h-10

                    rounded-full

                    bg-[#F6F1EA]/10

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center
                  "
                >
                  ☕
                </div>

                <span className="text-[#F6F1EA] tracking-tight text-sm sm:text-base">
                  NOIR CAFÉ
                </span>

              </div>

              <button
                className="
                  px-5
                  py-2.5

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.04]

                  text-[#F6F1EA]/70
                  text-sm

                  transition-all
                  duration-500

                  hover:bg-white
                  hover:text-black
                "
              >
                Kontakt
              </button>

            </div>

            {/* HERO TEXT */}
            <div className="max-w-4xl">

              <p className="text-[#F6F1EA]/40 uppercase tracking-[0.35em] text-[11px] mb-6">
                Kaffee Concept
              </p>

              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  md:text-8xl

                  leading-[0.92]
                  tracking-tight
                  font-semibold

                  text-[#F6F1EA]
                "
              >
                Coffee is
                <br />
                more than
                <br />
                a drink.
              </h1>

              <div className="h-px w-32 bg-gradient-to-r from-[#D7B28A] to-transparent mt-10 mb-10" />

              <p
                className="
                  max-w-2xl

                  text-[#F6F1EA]/60

                  text-base
                  md:text-xl

                  leading-relaxed
                "
              >
                Ein ruhiger Ort für Gespräche, Wärme und
                hochwertige Momente. Digitale Atmosphäre
                übersetzt in ein minimalistisches Café Konzept.
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center pt-16">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                flex
                items-center
                justify-center

                w-14
                h-14

                rounded-full

                border
                border-black/10

                bg-[#F6F1EA]/40

                backdrop-blur-xl

                transition-all
                duration-500

                hover:scale-[1.04]
              "
            >

              <ChevronDown
                className={`
                  w-5
                  h-5
                  text-[#0F0B09]

                  transition-all
                  duration-500

                  ${isOpen ? "rotate-180" : ""}
                `}
              />

            </button>

          </div>

        </div>

      </div>

      {/* EXPANDED */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: -20,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden bg-[#F6F1EA]"
          >

            <div className="px-5 sm:px-8 md:px-12 py-24 space-y-28">

              {/* PRODUCTS */}
              <div>

                <div className="mb-14">

                  <p className="text-black/35 uppercase tracking-[0.35em] text-[11px] mb-4">
                    Auswahl
                  </p>

                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#0F0B09]">
                    Lieblingsprodukte.
                  </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-6">

                  {products.map((product) => (

                    <motion.div
                      key={product.title}
                      whileHover={{
                        y: -5,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        rounded-[34px]

                        border
                        border-black/5

                        bg-white/60

                        p-8

                        transition-all
                        duration-500

                        hover:border-black/10
                      "
                    >

                      <div className="text-5xl mb-8">
                        {product.emoji}
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight text-[#0F0B09] mb-4">
                        {product.title}
                      </h3>

                      <p className="text-black/50 leading-relaxed">
                        {product.description}
                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

              {/* TEAM */}
              <div>

                <div className="mb-14">

                  <p className="text-black/35 uppercase tracking-[0.35em] text-[11px] mb-4">
                    Menschen
                  </p>

                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#0F0B09]">
                    Das Team.
                  </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-6">

                  {team.map((member) => (

                    <motion.div
                      key={member.name}
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="
                        rounded-[34px]

                        border
                        border-black/5

                        bg-white/50

                        p-8
                      "
                    >

                      <div
                        className="
                          w-20
                          h-20

                          rounded-full

                          bg-[#E7D8C7]

                          flex
                          items-center
                          justify-center

                          text-3xl

                          mb-8
                        "
                      >
                        {member.emoji}
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight text-[#0F0B09]">
                        {member.name}
                      </h3>

                      <p className="text-black/45 mt-3">
                        {member.role}
                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  );
}