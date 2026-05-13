"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const pricing = [
  {
    title: "Starter",
    price: "€299",
    features: [
      "Moderne One-Page Website",
      "Mobile Optimierung",
      "Klare und ruhige Nutzerführung",
      "Kontaktmöglichkeit integriert",
    ],
  },
  {
    title: "Business",
    price: "€699",
    features: [
      "Mehrere Unterseiten",
      "Individuelles modernes Design",
      "Optimierte Nutzererfahrung",
      "Schnelle Ladezeiten",
    ],
  },
  {
    title: "Premium",
    price: "€1299",
    features: [
      "Komplett individuelle Experience",
      "Erweiterte Animationen",
      "Premium Design System",
      "Starke digitale Markenwirkung",
    ],
  },
];

export default function PricingSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <section className="px-6 pb-40 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <div className="text-center mb-20">

        <p className="text-white/35 uppercase tracking-[0.3em] text-sm mb-4">
          Preise
        </p>

        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Transparent. Klar. Fair.
        </h2>

      </div>

      {/* PRICING */}
      <div className="grid md:grid-cols-3 gap-6 items-start">

        {pricing.map((plan, index) => {

          const isActive = activeCard === index;

          return (
            <motion.div
              key={plan.title}
              layout
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              onClick={() =>
                setActiveCard(isActive ? null : index)
              }
              transition={{
                layout: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className={`
                relative
                rounded-[42px]
                border
                overflow-hidden
                cursor-pointer
                p-8
                backdrop-blur-3xl
                transition-all
                duration-500
                self-start

                ${
                  isActive
                    ? "border-white/20 bg-white/[0.08] shadow-[0_0_80px_rgba(255,255,255,0.06)]"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06]"
                }
              `}
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

              <div className="relative z-10">

                <h3 className="text-3xl font-semibold mb-5 tracking-tight">
                  {plan.title}
                </h3>

                <p className="text-5xl font-bold tracking-tight">
                  {plan.price}
                </p>

                <AnimatePresence>

                  {isActive && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >

                      <div className="pt-8 mt-8 border-t border-white/10 space-y-4">

                        {plan.features.map((feature) => (

                          <motion.div
                            key={feature}
                            initial={{
                              opacity: 0,
                              y: 6,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.35,
                            }}
                            className="text-white/60 text-sm tracking-tight"
                          >
                            {feature}
                          </motion.div>

                        ))}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* SERVICE HEADER */}
      <div className="mt-24 mb-10 text-center">

        <p className="text-white/30 uppercase tracking-[0.3em] text-sm mb-4">
          Langfristige Betreuung
        </p>

        <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Kontinuierliche Pflege & Weiterentwicklung
        </h3>

      </div>

      {/* LONG TERM CARD */}
      <motion.div
        layout
        onHoverStart={() => setServiceOpen(true)}
        onHoverEnd={() => setServiceOpen(false)}
        onClick={() => setServiceOpen(!serviceOpen)}
        transition={{
          layout: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className={`
          relative
          rounded-[44px]
          border
          overflow-hidden
          cursor-pointer
          backdrop-blur-3xl
          transition-all
          duration-500

          ${
            serviceOpen
              ? "border-white/20 bg-white/[0.08] shadow-[0_0_80px_rgba(255,255,255,0.06)]"
              : "border-white/10 bg-white/[0.04] hover:bg-white/[0.06]"
          }
        `}
      >

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

        <div className="relative z-10 p-8 md:p-12">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

            <div>

              <p className="text-white/35 uppercase tracking-[0.25em] text-sm mb-5">
                Betreuung & Entwicklung
              </p>

              <h3 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Langfristiger Service
              </h3>

            </div>

            <div className="md:text-right">

              <p className="text-6xl md:text-7xl font-bold tracking-tight">
                €49,99
              </p>

              <p className="text-white/40 mt-3 text-sm tracking-tight">
                monatlich
              </p>

            </div>

          </div>

          <AnimatePresence>

            {serviceOpen && (

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
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >

                <div className="pt-10 mt-10 border-t border-white/10 grid md:grid-cols-2 gap-6">

                  <div className="text-white/60 leading-relaxed">
                    Laufende Anpassungen und technische Pflege damit die Website
                    langfristig modern, stabil und hochwertig bleibt.
                  </div>

                  <div className="space-y-4 text-white/55 text-sm">

                    <div>Regelmäßige Updates</div>

                    <div>Design-Anpassungen</div>

                    <div>Technische Betreuung</div>

                    <div>Langfristige Optimierung</div>

                  </div>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </motion.div>

    </section>
  );
}