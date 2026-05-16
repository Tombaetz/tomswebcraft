"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { ChevronDown } from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function kaffeConcept() {
  const [isOpen, setIsOpen] = useState(false);

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

          pb-28
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
              right-4
              md:right-16
              top-10
              z-10
            "
          >

            <div className="flex items-center gap-3 md:gap-5">

              {/* LOGO */}
              <div
                className="
                  w-12
                  h-12

                  md:w-14
                  md:h-14

                  rounded-full

                  border
                  border-[#D7B28A]/20

                  bg-[#2A1D17]

                  flex
                  items-center
                  justify-center

                  shrink-0
                "
              >

                <div
                  className="
                    w-5
                    h-5

                    md:w-6
                    md:h-6

                    rounded-full

                    border
                    border-[#F3ECE4]/60
                  "
                />

              </div>

              <div className="pl-2 md:pl-4">

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

                    text-3xl
                    sm:text-4xl
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
              left: isOpen
                ? isMobile
                  ? "2%"
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
            <motion.div
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                relative

                w-[90px]
                h-[90px]

                sm:w-[130px]
                sm:h-[130px]

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
              "
            >

              {/* GLASS RING */}
              <div
                className="
                  absolute
                  inset-0

                  rounded-full

                  border
                  border-white/[0.06]

                  bg-[linear-gradient(145deg,rgba(255,255,255,0.06),transparent)]

                  backdrop-blur-[2px]
                "
              />

              {/* INNER COFFEE */}
              <div
                className="
                  relative

                  w-[70px]
                  h-[70px]

                  sm:w-[95px]
                  sm:h-[95px]

                  md:w-[160px]
                  md:h-[160px]

                  rounded-full

                  bg-[radial-gradient(circle,#6B4632_0%,#3A241A_70%)]

                  border
                  border-black/20

                  overflow-hidden
                "
              >

                {/* FOAM */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle,#F5E8DA_0%,#E8D8C7_58%,transparent_100%)]

                    opacity-95
                    contrast-125
                    brightness-105
                  "
                />

                {/* REFLECTION */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-[linear-gradient(120deg,rgba(255,255,255,0.14),transparent_45%)]

                    opacity-70
                  "
                />

              </div>

            </motion.div>

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

              <CoffeeCarousel />

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </motion.section>
  );
}

function CoffeeCarousel() {

  const sections = [
    {
      label: "Concept",
    },
    {
      label: "Bestseller",
    },
    {
      label: "Team",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {

    if (!autoPlay) return;

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev === sections.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [autoPlay]);

  return (

    <div className="pt-24">

      {/* MENU */}
      <div className="flex gap-3 mb-12">

        {sections.map((section, index) => (

          <button
            key={section.label}
            onClick={() => {
              setCurrent(index);
              setAutoPlay(false);
            }}
            className="
              relative

              flex-1

              h-[44px]

              rounded-full

              overflow-hidden

              border
              border-white/[0.06]

              bg-white/[0.03]
            "
          >

            {/* ACTIVE BG */}
            <motion.div
              animate={{
                opacity: current === index ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                absolute
                inset-0

                bg-[#D7B28A]/10
              "
            />

            {/* TIMER */}
            {autoPlay && current === index && (

              <motion.div
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-0
                  bottom-0

                  h-[2px]

                  bg-[#D7B28A]
                "
              />

            )}

            <div
              className="
                relative
                z-10

                h-full

                flex
                items-center
                justify-center

                text-sm
                tracking-tight

                text-[#F3ECE4]/70
              "
            >
              {section.label}
            </div>

          </button>

        ))}

      </div>

      {/* SLIDER */}
      <div className="overflow-hidden">

        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragStart={() => {
            setAutoPlay(false);
          }}
          onDragEnd={(e, info) => {

            if (info.offset.x < -80) {

              setCurrent((prev) =>
                prev === sections.length - 1
                  ? 0
                  : prev + 1
              );

            }

            if (info.offset.x > 80) {

              setCurrent((prev) =>
                prev === 0
                  ? sections.length - 1
                  : prev - 1
              );

            }

          }}
          animate={{
            x: `-${current * 100}%`,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex

            cursor-grab
            active:cursor-grabbing
          "
        >

          {/* PAGE 1 */}
          <div className="min-w-full">

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
                    y: -6,
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
                  "
                >

                  <div
                    className="
                      w-14
                      h-14

                      md:w-16
                      md:h-16

                      rounded-2xl

                      bg-white/[0.04]

                      border
                      border-white/10

                      flex
                      items-center
                      justify-center

                      text-2xl
                      md:text-3xl

                      mb-6
                    "
                  >
                    {item.emoji}
                  </div>

                  <h3
                    className="
                      text-[#F3ECE4]

                      text-xl
                      md:text-2xl

                      font-semibold

                      tracking-tight

                      mb-4
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-[#F3ECE4]/55 leading-relaxed text-sm md:text-base">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

          {/* PAGE 2 */}
          <div className="min-w-full">

            <div className="space-y-3">

              {[
                {
                  name: "Cappuccino",
                  price: "4.90€",
                  emoji: "☕",
                },
                {
                  name: "Vanilla Latte",
                  price: "5.40€",
                  emoji: "🥛",
                },
                {
                  name: "Cold Brew",
                  price: "4.50€",
                  emoji: "🧊",
                },
                {
                  name: "Croissant",
                  price: "3.20€",
                  emoji: "🥐",
                },
              ].map((item) => (

                <motion.div
                  key={item.name}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderColor: "rgba(215,178,138,0.12)",
                  }}
                  className="
                    rounded-[28px]

                    border
                    border-transparent

                    px-6
                    py-5

                    flex
                    items-center
                    justify-between

                    transition-all
                    duration-500
                  "
                >

                  <div className="flex items-center gap-5">

                    <div className="text-2xl">
                      {item.emoji}
                    </div>

                    <h3 className="text-[#F3ECE4] text-lg tracking-tight">
                      {item.name}
                    </h3>

                  </div>

                  <div className="text-[#F3ECE4]/45 text-sm">
                    {item.price}
                  </div>

                </motion.div>

              ))}

            </div>

          </div>

          {/* PAGE 3 */}
          <div className="min-w-full">

            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  name: "Lena",
                  role: "Barista & Atmosphäre",
                  emoji: "👩🏻",
                },
                {
                  name: "Noah",
                  role: "Coffee Roasting",
                  emoji: "🧔🏻",
                },
                {
                  name: "Mila",
                  role: "Community & Events",
                  emoji: "👩🏽",
                },
              ].map((person) => (

                <motion.div
                  key={person.name}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
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
                      w-20
                      h-20

                      rounded-full

                      bg-white/[0.04]

                      border
                      border-white/10

                      flex
                      items-center
                      justify-center

                      text-4xl

                      mb-8
                    "
                  >
                    {person.emoji}
                  </div>

                  <h3
                    className="
                      text-[#F3ECE4]

                      text-2xl

                      font-semibold

                      tracking-tight

                      mb-3
                    "
                  >
                    {person.name}
                  </h3>

                  <p className="text-[#F3ECE4]/55 leading-relaxed">
                    {person.role}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );
}