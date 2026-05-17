"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

  const [activeFeature, setActiveFeature] =
    useState(1);

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

  const nextFeature = () => {
    setActiveFeature((prev) =>
      prev === features.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevFeature = () => {
    setActiveFeature((prev) =>
      prev === 0
        ? features.length - 1
        : prev - 1
    );
  };

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

        {/* HERO IMAGE */}
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

                {[
                  "Training",
                  "Recovery",
                  "Membership",
                ].map((item) => (
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
                Konzept für moderne Fitnessmarken mit Fokus auf Premium-Atmosphäre und mobile Nutzerführung.
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

            <div className="px-4 sm:px-6 md:px-10 pb-24 pt-10 space-y-24 bg-[#171717]">

              {/* INFO */}
              <div className="grid lg:grid-cols-2 gap-5 md:gap-8">

                <div
                  className="
                    rounded-[30px]
                    border
                    border-white/10
                    bg-[#202020]
                    p-6
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
                    "
                  >
                    Fokus auf klare Energie und kontrollierte Intensität.
                  </h3>

                </div>

                <div
                  className="
                    rounded-[30px]
                    border
                    border-white/10
                    bg-[#202020]
                    p-6
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

                <div className="mb-10 flex items-end justify-between gap-6">

                  <div>

                    <p className="text-white/35 uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-4">
                      Features
                    </p>

                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white">
                      Training und Recovery.
                    </h3>

                  </div>

                  {/* DESKTOP ARROWS */}
                  <div className="hidden md:flex items-center gap-3">

                    <button
                      onClick={prevFeature}
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
                      onClick={nextFeature}
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

                {/* 3D STACK */}
                <div
                  className="
                    relative

                    h-[440px]
                    sm:h-[520px]

                    flex
                    items-center
                    justify-center

                    overflow-hidden
                  "
                >

                  {features.map((feature, index) => {

                    const offset =
                      index - activeFeature;

                    const isActive =
                      offset === 0;

                    return (

                      <motion.div
                        key={feature.title}
                        drag="x"
                        dragElastic={0.08}
                        dragConstraints={{
                          left: 0,
                          right: 0,
                        }}
                        onDragEnd={(e, info) => {

                          if (info.offset.x < -70) {
                            nextFeature();
                          }

                          if (info.offset.x > 70) {
                            prevFeature();
                          }
                        }}
                        animate={{
                          x:
                            offset === 0
                              ? 0
                              : offset < 0
                              ? -230
                              : 230,

                          scale:
                            isActive
                              ? 1
                              : 0.92,

                          opacity:
                            isActive
                              ? 1
                              : 0.72,

                          rotateY:
                            offset < 0
                              ? 16
                              : offset > 0
                              ? -16
                              : 0,

                          filter:
                            isActive
                              ? "blur(0px)"
                              : "blur(1px)",

                          zIndex:
                            isActive
                              ? 20
                              : 10,
                        }}
                        transition={{
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          transformStyle:
                            "preserve-3d",
                        }}
                        className="
                          absolute

                          w-[82vw]
                          sm:w-[72vw]
                          md:w-[620px]

                          rounded-[34px]
                          overflow-hidden

                          border
                          border-white/10

                          bg-[#202020]

                          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
                        "
                      >

                        {/* EMOJI AREA */}
                        <div
                          className={`
                            relative
                            h-[220px]
                            sm:h-[300px]

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

                              text-[72px]
                              sm:text-[130px]

                              select-none

                              drop-shadow-[0_0_30px_rgba(255,255,255,0.12)]
                            "
                          >
                            {feature.emoji}
                          </motion.div>

                          {/* OVERLAY */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        </div>

                        {/* TEXT */}
                        <div className="p-5 sm:p-7">

                          <h4 className="text-lg sm:text-2xl font-semibold text-white mb-3">
                            {feature.title}
                          </h4>

                          <p className="text-white/55 leading-relaxed text-sm sm:text-base">
                            {feature.text}
                          </p>

                        </div>

                      </motion.div>

                    );
                  })}

                </div>

                {/* MOBILE INDICATORS */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">

                  {features.map((_, index) => (

                    <button
                      key={index}
                      onClick={() =>
                        setActiveFeature(index)
                      }
                      className={`
                        h-2 rounded-full transition-all duration-500

                        ${
                          activeFeature === index
                            ? "w-10 bg-white"
                            : "w-2 bg-white/20"
                        }
                      `}
                    />

                  ))}

                </div>

              </div>

              {/* PRICING */}
              <div>

                <div className="mb-10">

                  <p className="text-white/35 uppercase tracking-[0.25em] text-[10px] sm:text-xs mb-4">
                    Memberships
                  </p>

                  <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white">
                    Mitgliedschaften.
                  </h3>

                </div>

                <div className="grid md:grid-cols-3 gap-5">

                  {pricing.map((item) => (
                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      key={item.title}
                      className="
                        rounded-[30px]
                        border
                        border-white/10
                        bg-[#202020]
                        p-6
                        sm:p-8
                      "
                    >

                      <h4 className="text-2xl font-semibold text-white mb-6">
                        {item.title}
                      </h4>

                      <p className="text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-8">
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