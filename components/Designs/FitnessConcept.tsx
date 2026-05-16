"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Sauna",
    text: "Regeneration und mentale Ruhe nach intensiven Trainingseinheiten.",
    emoji: "♨️",
    bg: "from-orange-400/20 to-red-500/10",
  },
  {
    title: "Massage",
    text: "Gezielte Entspannung für Performance und Fokus.",
    emoji: "💆",
    bg: "from-neutral-300/10 to-white/5",
  },
  {
    title: "Recovery Zone",
    text: "Moderne Recovery Bereiche für langfristige Leistungsfähigkeit.",
    emoji: "🛋️",
    bg: "from-cyan-400/10 to-blue-500/10",
  },
];

const pricing = [
  {
    title: "Starter",
    price: "39€",
    text: "Zugang zu allen Trainingsbereichen.",
  },
  {
    title: "Performance",
    price: "69€",
    text: "Inklusive Sauna und Recovery Bereich.",
  },
  {
    title: "Elite",
    price: "99€",
    text: "Kompletter Zugang inklusive Wellness und Coaching.",
  },
];

export default function FitnessConcept() {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 1.08]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0]
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
        bg-[#171717]
      "
    >

      {/* PREVIEW */}

      <div className="relative min-h-[620px] overflow-hidden group">

        {/* IMAGE */}
        <motion.img
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/40" />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-black/10
            via-black/30
            to-[#171717]
          "
        />

        {/* LIGHT */}
        <div
          className="
            absolute
            inset-0

            opacity-0
            group-hover:opacity-100

            transition
            duration-700

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10

            h-full

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

            {/* NAVBAR */}
            <div className="flex items-center justify-between mb-20 md:mb-24 gap-4">

              <div className="flex items-center gap-3 shrink-0">

                <div className="flex items-end gap-1">
                  <div className="w-1.5 h-5 rounded-full bg-white" />
                  <div className="w-1.5 h-9 rounded-full bg-white" />
                  <div className="w-1.5 h-5 rounded-full bg-white" />
                </div>

                <span className="text-white text-sm sm:text-lg tracking-tight whitespace-nowrap">
                  VANTA PERFORMANCE
                </span>

              </div>

              <div className="hidden md:flex items-center gap-3">

                {["Training", "Recovery", "Membership"].map((item) => (
                  <button
                    key={item}
                    className="
                      px-5
                      py-2.5

                      rounded-full

                      border
                      border-white/10

                      bg-white/[0.04]

                      text-sm
                      text-white/75

                      transition-all
                      duration-500

                      hover:bg-white
                      hover:text-black
                      hover:scale-[1.03]
                    "
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

            {/* HERO */}
            <div className="max-w-4xl">

              <p className="text-white/40 uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs mb-6">
                Fitness Concept
              </p>

              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  md:text-7xl
                  lg:text-8xl

                  font-semibold
                  tracking-tight
                  leading-[0.95]

                  text-white

                  break-words
                "
              >
                Built for
                <br />
                disciplined minds.
              </h2>

              <p
                className="
                  mt-6
                  sm:mt-8

                  text-white/60

                  text-base
                  sm:text-lg
                  md:text-xl

                  leading-relaxed

                  max-w-2xl
                "
              >
                Moderne Performance Experience mit dunkler
                Ästhetik, kontrollierter Energie und
                cinematic Motion.
              </p>

            </div>

          </div>

          {/* EXPAND BUTTON */}
          <div className="flex justify-center pt-16">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                group/button
                relative

                flex
                items-center
                justify-center

                w-14
                h-14

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                transition-all
                duration-500

                hover:border-white/20
                hover:bg-white/[0.06]
              "
            >

              <ChevronDown
                className={`
                  w-5
                  h-5
                  text-white/55

                  transition-all
                  duration-500

                  ${isOpen ? "rotate-180" : ""}
                `}
              />

              <div
                className="
                  absolute
                  inset-0

                  rounded-full

                  opacity-0
                  group-hover/button:opacity-100

                  transition
                  duration-500

                  bg-white/5
                  blur-xl
                "
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
            className="overflow-hidden"
          >

            <div className="px-5 sm:px-6 md:px-10 pb-24 pt-10 space-y-24 bg-[#171717]">

              {/* INFO */}
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

                <div
                  className="
                    rounded-[34px]
                    border
                    border-white/10
                    bg-[#202020]

                    p-7
                    sm:p-8
                    md:p-12
                  "
                >

                  <p className="text-white/35 uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-5">
                    Atmosphäre
                  </p>

                  <h3
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-5xl

                      font-semibold
                      tracking-tight
                      leading-tight

                      text-white

                      break-words
                    "
                  >
                    Fokus auf klare Energie und kontrollierte Intensität.
                  </h3>

                </div>

                <div
                  className="
                    rounded-[34px]
                    border
                    border-white/10
                    bg-[#202020]

                    p-7
                    sm:p-8
                    md:p-12

                    flex
                    items-end
                  "
                >

                  <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                    Das Konzept verbindet starke Kontraste,
                    reduzierte Typografie und hochwertige
                    Oberflächen zu einer modernen digitalen
                    Performance Experience.
                  </p>

                </div>

              </div>

              {/* FEATURES */}
              <div>

                <div className="mb-10">

                  <p className="text-white/35 uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-4">
                    Features
                  </p>

                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white break-words">
                    Training und Recovery.
                  </h3>

                </div>

                <div
                  className="
                    flex
                    gap-5
                    overflow-x-auto
                    pb-4

                    snap-x
                    snap-mandatory
                    scroll-smooth

                    cursor-grab
                    active:cursor-grabbing

                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                  "
                >

                  {features.map((feature) => (
                    <motion.div
                      whileHover={{
                        y: -6,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      key={feature.title}
                      className="
                        min-w-[85%]
                        sm:min-w-[420px]

                        snap-center

                        rounded-[34px]
                        overflow-hidden

                        border
                        border-white/10

                        bg-[#202020]

                        shrink-0
                      "
                    >

                      <div
  className={`
    relative
    h-[320px]
    overflow-hidden

    flex
    items-center
    justify-center

    bg-gradient-to-br
    ${feature.bg}
  `}
>

  {/* LIGHT */}
  <div
    className="
      absolute
      inset-0

      bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]
    "
  />

  {/* EMOJI */}
  <motion.div
    whileHover={{
      scale: 1.08,
      rotate: -3,
    }}
    transition={{
      duration: 0.45,
    }}
    className="
      relative
      z-10

      text-[110px]
      sm:text-[140px]

      select-none

      drop-shadow-[0_0_30px_rgba(255,255,255,0.12)]
    "
  >
    {feature.emoji}
  </motion.div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

</div>

                      <div className="p-6 sm:p-7">

                        <h4 className="text-xl sm:text-2xl font-semibold text-white mb-3 break-words">
                          {feature.title}
                        </h4>

                        <p className="text-white/55 leading-relaxed text-sm sm:text-base">
                          {feature.text}
                        </p>

                      </div>

                    </motion.div>
                  ))}

                </div>

              </div>

              {/* PRICING */}
              <div>

                <div className="mb-10">

                  <p className="text-white/35 uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-4">
                    Memberships
                  </p>

                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white break-words">
                    Mitgliedschaften.
                  </h3>

                </div>

                <div className="grid md:grid-cols-3 gap-6">

                  {pricing.map((item) => (
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      key={item.title}
                      className="
                        rounded-[34px]

                        border
                        border-white/10

                        bg-[#202020]

                        p-7
                        sm:p-8
                      "
                    >

                      <h4 className="text-2xl font-semibold text-white mb-6">
                        {item.title}
                      </h4>

                      <p className="text-5xl sm:text-6xl font-semibold tracking-tight text-white mb-8 break-words">
                        {item.price}
                      </p>

                      <p className="text-white/55 leading-relaxed text-sm sm:text-base">
                        {item.text}
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