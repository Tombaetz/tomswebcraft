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
    <div className="flex items-center justify-center min-h-[420px] overflow-hidden pt-24">

      <div className="flex items-center justify-center gap-10">

        {/* LEFT BRACKET */}
        <motion.div
          animate={{
            x: showingWord ? 28 : 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[120px]
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
        <div className="relative flex items-center justify-center w-[340px] h-[160px]">

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
                className="flex items-end gap-4"
              >

               <div className="flex items-end gap-3">

              <div className="w-4 h-16 rounded-full bg-[#F3F4F6]" />

              <div className="w-4 h-28 rounded-full bg-[#E9B44C]" />

              <div className="w-4 h-16 rounded-full bg-[#F3F4F6]" />

              </div>
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
                  letterSpacing: "0.4em",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  letterSpacing: "0.22em",
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(12px)",
                  letterSpacing: "0.4em",
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  text-white/90
                  text-3xl
                  md:text-5xl
                  uppercase
                  font-extralight
                  tracking-[0.22em]
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
            x: showingWord ? -28 : 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[120px]
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