"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

const slides = [
  {
    id: "concept",
    label: "Concept",

    content: (
      <div className="grid md:grid-cols-3 gap-6">

        {[
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
        ].map((item) => (

          <motion.div
            key={item.title}
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              rounded-[36px]
              border
              border-[#D7B28A]/10
              bg-white/[0.03]
              p-6
              md:p-8
              backdrop-blur-xl
            "
          >

            <div
              className="
                w-14
                h-14

                rounded-2xl

                bg-white/[0.04]

                border
                border-white/10

                flex
                items-center
                justify-center

                text-2xl

                mb-6
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
    ),
  },

  {
    id: "bestseller",
    label: "Bestseller",

    content: (
      <div className="grid md:grid-cols-3 gap-4">

        {[
          {
            emoji: "☕",
            name: "Cappuccino",
            price: "4.90€",
          },
          {
            emoji: "🥐",
            name: "Butter Croissant",
            price: "3.50€",
          },
          {
            emoji: "🍰",
            name: "Cheesecake",
            price: "5.20€",
          },
        ].map((item) => (

          <motion.div
            key={item.name}
            whileHover={{
              borderColor: "rgba(215,178,138,0.18)",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              rounded-[32px]

              border
              border-transparent

              p-8

              transition-all
              duration-500
            "
          >

            <div className="text-5xl mb-8">
              {item.emoji}
            </div>

            <h3
              className="
                text-[#F3ECE4]
                text-2xl
                font-semibold
                tracking-tight
                mb-2
              "
            >
              {item.name}
            </h3>

            <p className="text-[#D7B28A] text-lg">
              {item.price}
            </p>

          </motion.div>

        ))}

      </div>
    ),
  },

  {
    id: "team",
    label: "Team",

    content: (
      <div className="grid md:grid-cols-3 gap-6">

        {[
          {
            emoji: "👨🏻‍🍳",
            name: "Leon",
            role: "Head Barista",
          },
          {
            emoji: "👩🏽‍💻",
            name: "Mia",
            role: "Digital Experience",
          },
          {
            emoji: "🧔🏼",
            name: "Noah",
            role: "Roasting & Concept",
          },
        ].map((item) => (

          <div
            key={item.name}
            className="
              rounded-[36px]

              border
              border-[#D7B28A]/10

              bg-white/[0.03]

              p-8
            "
          >

            <div className="text-5xl mb-8">
              {item.emoji}
            </div>

            <h3
              className="
                text-[#F3ECE4]
                text-2xl
                font-semibold
                mb-2
              "
            >
              {item.name}
            </h3>

            <p className="text-[#F3ECE4]/55">
              {item.role}
            </p>

          </div>

        ))}

      </div>
    ),
  },
];

export default function kaffeConcept() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSlide, setActiveSlide] =
    useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === slides.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0
        ? slides.length - 1
        : prev - 1
    );
  };

  const isMobile =
    typeof window !== "undefined" &&
    window.innerWidth < 768;

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

          pb-40
          md:pb-24
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

                text-4xl
                sm:text-5xl
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

          {/* MOVING COFFEE */}
          <motion.div
            animate={{
              left: isOpen
                ? isMobile
                  ? "4%"
                  : "0%"
                : isMobile
                ? "78%"
                : "72%",

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

            <div className="flex items-center gap-4 md:gap-6">

              {/* CUP */}
              <div
                className="
                  relative

                  w-[92px]
                  h-[92px]

                  sm:w-[110px]
                  sm:h-[110px]

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

                  overflow-hidden

                  shrink-0
                "
              >

                {/* STEAM */}
                <motion.div
                  animate={{
                    y: [-2, -10, -2],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -top-8
                    left-1/2
                    -translate-x-1/2

                    flex
                    gap-2
                  "
                >

                  <div className="w-[2px] h-10 rounded-full bg-white/10 blur-[1px]" />
                  <div className="w-[2px] h-14 rounded-full bg-white/10 blur-[1px]" />
                  <div className="w-[2px] h-10 rounded-full bg-white/10 blur-[1px]" />

                </motion.div>

                {/* INNER */}
                <div
                  className="
                    w-[72px]
                    h-[72px]

                    sm:w-[88px]
                    sm:h-[88px]

                    md:w-[160px]
                    md:h-[160px]

                    rounded-full

                    bg-[radial-gradient(circle,#F6EBDD_0%,#E7D5C3_58%,#D7C0AB_100%)]

                    shadow-[inset_0_10px_30px_rgba(0,0,0,0.12)]
                  "
                />

              </div>

              {/* BRAND */}
              <motion.div
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : 80,
                }}
                transition={{
                  duration: 1,
                  delay: isOpen ? 0.2 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  flex-col

                  pr-6
                  md:pr-0
                "
              >

                <p
                  className="
                    text-[#F3ECE4]/35

                    text-[10px]
                    md:text-xs

                    tracking-[0.3em]

                    uppercase

                    mb-1
                  "
                >
                  Café
                </p>

                <h2
                  className="
                    text-[#F3ECE4]

                    text-[38px]
                    sm:text-5xl
                    md:text-6xl

                    font-semibold

                    tracking-tight
                    leading-none

                    whitespace-nowrap
                  "
                >
                  Noir Café
                </h2>

              </motion.div>

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
            max-w-[90%]
            md:max-w-2xl

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

              active:scale-[0.96]
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

              {/* CATEGORY NAV */}
              <div
                className="
                  relative

                  flex
                  items-center
                  justify-center

                  mb-12
                  pt-20
                "
              >

                {/* CENTERED BUTTONS */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    md:gap-3
                  "
                >

                  {slides.map((item, index) => (

                    <button
                      key={item.id}
                      onClick={() =>
                        setActiveSlide(index)
                      }
                      className={`
                        px-4 py-2 rounded-full transition-all duration-500
                        ${
                          activeSlide === index
                            ? "bg-[#F3ECE4] text-black"
                            : "bg-white/[0.04] text-[#F3ECE4]/55 hover:bg-white/[0.08]"
                        }
                      `}
                    >
                      {item.label}
                    </button>

                  ))}

                </div>

                {/* DESKTOP ARROWS */}
                <div
                  className="
                    hidden
                    md:flex

                    items-center
                    gap-3

                    absolute
                    right-0
                  "
                >

                  <button
                    onClick={prevSlide}
                    className="
                      w-12
                      h-12

                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.04]

                      flex
                      items-center
                      justify-center

                      hover:bg-white/[0.08]

                      transition-all
                    "
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="
                      w-12
                      h-12

                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.04]

                      flex
                      items-center
                      justify-center

                      hover:bg-white/[0.08]

                      transition-all
                    "
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>

                </div>

              </div>

              {/* SWIPE */}
              <motion.div
                drag={isMobile ? "x" : false}
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.08}
                onDragEnd={(e, info) => {

                  if (info.offset.x < -80) {
                    nextSlide();
                  }

                  if (info.offset.x > 80) {
                    prevSlide();
                  }
                }}
              >

                <AnimatePresence mode="wait">

                  <motion.div
                    key={activeSlide}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -40,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {slides[activeSlide].content}
                  </motion.div>

                </AnimatePresence>

              </motion.div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.section>
  );
}
