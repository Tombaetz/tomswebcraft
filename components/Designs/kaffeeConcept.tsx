"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Atmosphäre",
    text: "Warme Farben, ruhige Kontraste und organische Oberflächen erzeugen ein gemütliches digitales Café Gefühl.",
    emoji: "☕",
  },
  {
    title: "Gemütlichkeit",
    text: "Das Design soll sich langsam, ruhig und natürlich anfühlen statt technisch oder steril.",
    emoji: "🪵",
  },
  {
    title: "Momente",
    text: "Der Fokus liegt auf echten Gesprächen, kleinen Momenten und emotionaler Wiedererkennung.",
    emoji: "✨",
  },
];

export default function kaffeConcept() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.section
      layout
      transition={{
        layout: {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="
        relative
        overflow-hidden

        rounded-[48px]

        border
        border-[#D7B28A]/10

        bg-[#120D0B]

        shadow-[0_0_120px_rgba(0,0,0,0.45)]
      "
    >

      {/* BACKGROUND */}
      {/* BACKGROUND */}
<div
  className="
    absolute
    inset-0

    bg-[radial-gradient(circle_at_top,rgba(255,220,180,0.10),transparent_55%)]
  "
/>

<div
  className="
    absolute
    inset-0

    bg-gradient-to-b
    from-[#120D0A]
    via-[#2A1B14]
    to-[#F3ECE4]
  "
/>

{/* WARM VIGNETTE */}
<div
  className="
    absolute
    inset-0

    bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.18)_100%)]
  "
/>
      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          px-6
          sm:px-10
          md:px-16

          pt-10
          md:pt-14

          pb-24
        "
      >

        {/* TOP */}
        <div className="flex justify-end mb-20">

          <button
            className="
              px-6
              py-3

              rounded-full

              border
              border-[#D7B28A]/10

              bg-white/[0.03]

              text-[#F3ECE4]/70

              transition-all
              duration-500

              hover:bg-white/[0.06]
            "
          >
            Kontakt
          </button>

        </div>

        {/* LABEL */}
        <p
          className="
            text-[#F3ECE4]/35

            uppercase
            tracking-[0.35em]

            text-[11px]

            mb-10
          "
        >
          Kaffee Concept
        </p>

        {/* HERO */}
        <div
          className="
            relative

            min-h-[320px]
            md:min-h-[420px]

            overflow-hidden
          "
        >

          {/* HEADLINE */}
          <motion.div
            animate={{
              opacity: isOpen ? 0 : 1,
              x: isOpen ? -180 : 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-0
              top-0
              z-10
            "
          >

            <h1
              className="
                text-[#F3ECE4]

                text-5xl
                sm:text-6xl
                md:text-8xl

                leading-[0.92]
                tracking-tight
                font-semibold
              "
            >
              Coffee is
              <br />
              more than
              <br />
              a drink.
            </h1>

          </motion.div>

          {/* BRAND */}
          <motion.div
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : 120,
            }}
            transition={{
              duration: 1.2,
              delay: isOpen ? 0.25 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              right-8
              md:right-16
              top-10
              z-10
            "
          >

            <div className="flex items-center gap-5">

              {/* LOGO */}
              <div
                className="
                  w-14
                  h-14

                  rounded-full

                  border
                  border-[#D7B28A]/20

                  bg-[#2A1D17]

                  flex
                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    w-6
                    h-6

                    rounded-full

                    border
                    border-[#F3ECE4]/60
                  "
                />

              </div>

              <div>

                <p className="text-[#F3ECE4]/35 text-xs tracking-[0.3em] uppercase mb-1">
                  Café
                </p>

                <h2
                  className="
                    text-[#F3ECE4]

                    text-4xl
                    md:text-6xl

                    font-semibold
                    tracking-tight
                    leading-none
                  "
                >
                  Noir Café
                </h2>

              </div>

            </div>

          </motion.div>

          {/* COFFEE */}
          <motion.div
            animate={{
              left: isOpen ? "0%" : "72%",
              x: isOpen ? 0 : "-50%",
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              top-6
              z-20
            "
          >

            {/* STEAM */}
            <motion.div
              animate={{
                y: [-2, -12, -2],
                opacity: [0.2, 0.45, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2

                flex
                gap-2
              "
            >

              <div className="w-[2px] h-10 rounded-full bg-white/20 blur-[1px]" />
              <div className="w-[2px] h-14 rounded-full bg-white/20 blur-[1px]" />
              <div className="w-[2px] h-10 rounded-full bg-white/20 blur-[1px]" />

            </motion.div>

            {/* CUP */}
            <div
              className="
                relative

                w-[120px]
                h-[120px]

                sm:w-[150px]
                sm:h-[150px]

                md:w-[210px]
                md:h-[210px]

                rounded-full

                bg-[#2A1D17]

                border
                border-[#D7B28A]/10

                shadow-[0_30px_80px_rgba(0,0,0,0.4)]

                flex
                items-center
                justify-center
              "
            >

              <div
                className="
                  w-[90px]
                  h-[90px]

                  sm:w-[110px]
                  sm:h-[110px]

                  md:w-[160px]
                  md:h-[160px]

                  rounded-full

                  bg-[radial-gradient(circle,#6B4632_0%,#3A241A_70%)]

                  border
                  border-black/20
                "
              />

            </div>

          </motion.div>

        </div>

        {/* DIVIDER */}
        <motion.div
          animate={{
            opacity: isOpen ? 0 : 1,
            y: isOpen ? 10 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            h-px
            w-32

            mt-8
            mb-10

            bg-gradient-to-r
            from-[#D7B28A]
            to-transparent
          "
        />

        {/* TEXT */}
        <motion.p
          animate={{
            opacity: isOpen ? 0 : 1,
            y: isOpen ? 10 : 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            max-w-2xl

            text-[#F3ECE4]/55

            text-base
            md:text-lg

            leading-relaxed
          "
        >
          Ein ruhiger Ort für Gespräche, Wärme und hochwertige
          Momente. Digitale Atmosphäre übersetzt in ein
          minimalistisches Café Konzept.
        </motion.p>

        {/* BUTTON */}
        <div className="flex justify-center mt-20">

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              items-center
              justify-center

              w-16
              h-16

              rounded-full

              border
              border-[#D7B28A]/10

              bg-white/[0.04]

              text-[#F3ECE4]/70

              transition-all
              duration-500

              hover:bg-white/[0.07]
            "
          >

            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>

          </button>

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
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >

              <div className="pt-24 grid md:grid-cols-3 gap-6">

                {features.map((item) => (

                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      rounded-[36px]

                      border
                      border-[#D7B28A]/10

                      bg-white/[0.03]

                      p-8
                    "
                  >

                    <div
                      className="
                        w-16
                        h-16

                        rounded-2xl

                        bg-white/[0.04]

                        border
                        border-white/10

                        flex
                        items-center
                        justify-center

                        text-3xl

                        mb-8
                      "
                    >
                      {item.emoji}
                    </div>

                    <h3
                      className="
                        text-[#F3ECE4]

                        text-2xl

                        font-semibold

                        tracking-tight

                        mb-4
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="text-[#F3ECE4]/55 leading-relaxed">
                      {item.text}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.section>
  );
}