"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Moderne Websites",
    description:
      "Elegante und performante Webseiten mit modernem Design und klarer Nutzerführung.",
  },
  {
    title: "Mobile Optimierung",
    description:
      "Optimiert für Smartphones, Tablets und moderne Nutzererfahrung.",
  },
  {
    title: "Wartung & Updates",
    description:
      "Technische Betreuung, schnelle Anpassungen und langfristige Stabilität.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-32">

      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-4">
          Services
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Digital. Modern. Klar.
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6">

        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.div
              layout
              key={index}
              onHoverStart={() => setActive(index)}
              onHoverEnd={() => setActive(null)}
              transition={{
                layout: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className={`
                relative
                overflow-hidden
                rounded-[36px]
                border
                p-8
                backdrop-blur-2xl
                cursor-pointer
                transition-all
                duration-500

                ${
                  isActive
                    ? "border-white/30 bg-white/10 shadow-[0_0_60px_rgba(255,255,255,0.08)] scale-[1.02]"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
                }
              `}
            >

              {/* Title */}
              <div className="flex items-center justify-between">

                <h3 className="text-2xl md:text-3xl font-medium tracking-tight">
                  {service.title}
                </h3>

                <motion.div
                  animate={{
                    rotate: isActive ? 45 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="text-white/30 text-3xl"
                >
                  +
                </motion.div>
              </div>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                  marginTop: isActive ? 24 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}