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
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Massage",
    text: "Gezielte Entspannung für Performance und Fokus.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Recovery Zone",
    text: "Moderne Recovery Bereiche für langfristige Leistungsfähigkeit.",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1600&auto=format&fit=crop",
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

            p-8
            md:p-12
          "
        >

          {/* TOP */}
          <div>

            {/* NAVBAR */}
            <div className="flex items-center justify-between mb-24">

              <div className="flex items-center gap-3">

                <div className="flex items-end gap-1">
                  <div className="w-1.5 h-5 rounded-full bg-white" />
                  <div className="w-1.5 h-9 rounded-full bg-white" />
                  <div className="w-1.5 h-5 rounded-full bg-white" />
                </div>

                <span className="text-white text-lg tracking-tight">
                  VANTA PERFORMANCE
                </span>

              </div>

              <div className="flex items-center gap-3">

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

              <p className="text-white/40 uppercase tracking-[0.35em] text-xs mb-6">
                Fitness Concept
              </p>

              <h2
                className="
                  text-5xl
                  md:text-8xl

                  font-semibold
                  tracking-tight
                  leading-[0.95]

                  text-white
                "
              >
                Built for
                <br />
                disciplined minds.
              </h2>

              <p
                className="
                  mt-8
                  text-white/60
                  text-lg
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

            <div className="px-6 md:px-10 pb-24 pt-10 space-y-24 bg-[#171717]">

              {/* INFO */}
              <div className="grid lg:grid-cols-2 gap-8">

                <div
                  className="
                    rounded-[34px]
                    border
                    border-white/10
                    bg-[#202020]

                    p-8
                    md:p-12
                  "
                >

                  <p className="text-white/35 uppercase tracking-[0.3em] text-xs mb-5">
                    Atmosphäre
                  </p>

                  <h3
                    className="
                      text-3xl
                      md:text-5xl

                      font-semibold
                      tracking-tight
                      leading-tight

                      text-white
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

                    p-8
                    md:p-12

                    flex
                    items-end
                  "
                >

                  <p className="text-white/60 text-lg leading-relaxed">
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

                  <p className="text-white/35 uppercase tracking-[0.3em] text-xs mb-4">
                    Features
                  </p>

                  <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
                    Training und Recovery.
                  </h3>

                </div>

                <div
                  className="
                    flex
                    gap-6
                    overflow-x-auto
                    pb-4

                    snap-x
                    snap-mandatory

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
                        min-w-[340px]
                        md:min-w-[420px]

                        snap-start

                        rounded-[34px]
                        overflow-hidden

                        border
                        border-white/10

                        bg-[#202020]
                      "
                    >

                      <div className="relative h-[320px] overflow-hidden">

                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="
                            h-full
                            w-full
                            object-cover

                            transition
                            duration-700

                            hover:scale-105
                          "
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                      </div>

                      <div className="p-7">

                        <h4 className="text-2xl font-semibold text-white mb-3">
                          {feature.title}
                        </h4>

                        <p className="text-white/55 leading-relaxed">
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

                  <p className="text-white/35 uppercase tracking-[0.3em] text-xs mb-4">
                    Memberships
                  </p>

                  <h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
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

                        p-8
                      "
                    >

                      <h4 className="text-2xl font-semibold text-white mb-6">
                        {item.title}
                      </h4>

                      <p className="text-6xl font-semibold tracking-tight text-white mb-8">
                        {item.price}
                      </p>

                      <p className="text-white/55 leading-relaxed">
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