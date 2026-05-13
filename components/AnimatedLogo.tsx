"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Websites",
  "Automation",
  "Systems",
  "AI",
  "Design",
];

export default function AnimatedLogo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % (words.length + 2));
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const showingWord = step > 0 && step <= words.length;

  return (
    <div className="flex items-center justify-center min-h-[320px] md:min-h-[420px] overflow-hidden pt-16 md:pt-24 px-4">

      <div className="flex items-center justify-center gap-4 md:gap-10">

        {/* LEFT BRACKET */}
        <motion.div
          animate={{
            x: showingWord ? 18 : 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[70px]
            md:text-[160px]
            font-thin
            text-[#FF6B35]
            leading-none
            select-none
          "
        >
          {"{"}
        </motion.div>

        {/* CENTER */}
        <div className="relative flex items-center justify-center w-[220px] md:w-[340px] h-[120px] md:h-[160px]">

          <AnimatePresence mode="wait">

            {/* DEFAULT LOGO */}
            {!showingWord && (
              <motion.div
                key="logo"
                initial={{
                  opacity: 0,
                  scale: 0.92,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-end gap-2 md:gap-3"
              >

                {/* LEFT BAR */}
                <div className="w-2 md:w-4 h-10 md:h-16 rounded-full bg-[#F3F4F6]" />

                {/* CENTER BAR */}
                <div className="w-2 md:w-4 h-16 md:h-28 rounded-full bg-[#E9B44C]" />

                {/* RIGHT BAR */}
                <div className="w-2 md:w-4 h-10 md:h-16 rounded-full bg-[#F3F4F6]" />

              </motion.div>
            )}

            {/* WORDS */}
            {showingWord && (
              <motion.div
                key={words[step - 1]}
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(12px)",
                  letterSpacing: "0.3em",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  letterSpacing: "0.12em",
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(12px)",
                  letterSpacing: "0.3em",
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  text-white/90
                  text-lg
                  md:text-5xl
                  uppercase
                  font-extralight
                  tracking-[0.12em]
                  md:tracking-[0.22em]
                  whitespace-nowrap
                  select-none
                "
              >
                {words[step - 1]}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* RIGHT BRACKET */}
        <motion.div
          animate={{
            x: showingWord ? -18 : 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[70px]
            md:text-[160px]
            font-thin
            text-[#FF6B35]
            leading-none
            select-none
          "
        >
          {"}"}
        </motion.div>

      </div>
    </div>
  );
}