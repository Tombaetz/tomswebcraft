"use client";

import { motion } from "framer-motion";

export default function CTA_End() {
  return (
    <section
      id="contact"
      className="px-6 pb-40 max-w-5xl mx-auto text-center"
    >

      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[44px]
          border
          border-white/10
          bg-gradient-to-br
          from-white/[0.07]
          to-white/[0.03]
          backdrop-blur-3xl
          p-12
          md:p-20
        "
      >

        {/* OUTER LIGHT */}
        <motion.div
          initial={{
            opacity: 0.25,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            -inset-[2px]
            rounded-[46px]
            pointer-events-none

            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]

            blur-2xl
          "
        />

        {/* EDGE SHIMMER */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            absolute
            inset-0
            rounded-[44px]
            pointer-events-none

            shadow-[0_0_120px_rgba(255,255,255,0.14)]
          "
        />

        {/* SOFT CENTER LIGHT */}
        <motion.div
          initial={{
            opacity: 0.35,
            scale: 1,
          }}
          whileHover={{
            opacity: 0.65,
            scale: 1.08,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            pointer-events-none

            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_65%)]
          "
        />

        {/* AMBIENT TEXTURE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            pointer-events-none

            bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03))]
          "
        />

        {/* CONTENT */}
        <div className="relative z-10">

          <h3
            className="
              text-4xl
              md:text-6xl
              font-semibold
              tracking-tight
              leading-tight
              text-white
            "
          >
            Bereit für eine moderne
            <br />
            Website?
          </h3>

          <p
            className="
              mt-8
              text-white/50
              text-lg
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Digitale Oberflächen mit Fokus auf Klarheit,
            Atmosphäre und moderne Nutzererfahrung.
          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.035,
              y: -2,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 18,
            }}
            className="
              group/button
              relative
              mt-12
              px-10
              py-4
              rounded-full
              bg-white
              text-black
              font-medium
              overflow-hidden

              shadow-[0_0_50px_rgba(255,255,255,0.12)]
            "
          >

            {/* BUTTON SHINE */}
            <motion.div
              initial={{
                x: "-140%",
              }}
              whileHover={{
                x: "240%",
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                top-0
                left-0
                h-full
                w-1/3
                rotate-12
                bg-white/50
                blur-xl
              "
            />

            {/* BUTTON LIGHT */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover/button:opacity-100
                transition-opacity
                duration-700

                bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),transparent_35%)]
              "
            />

            <span className="relative z-10 tracking-tight">
              Kontakt aufnehmen
            </span>

          </motion.button>

        </div>

      </motion.div>

    </section>
  );
}
