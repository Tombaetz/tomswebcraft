"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useState } from "react";

const text = "Moderne Websites.";

export default function HeroHeadline() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollY } = useScroll();

  const floatingY = useTransform(
    scrollY,
    [0, 500],
    [0, -12]
  );

  return (
    <div className="flex justify-center items-center text-center px-6">

      <motion.h1
        style={{
          y: floatingY,
        }}
        className="
          flex
          flex-wrap
          justify-center
          text-white
          font-semibold
          tracking-tight
          leading-[0.95]
          max-w-6xl
          text-6xl
          sm:text-7xl
          md:text-8xl
          lg:text-[120px]
        "
      >

        {text.split("").map((char, index) => {

          const distance =
            hoveredIndex === null
              ? 999
              : Math.abs(index - hoveredIndex);

          const scale =
            distance === 0
              ? 1.12
              : distance === 1
              ? 1.07
              : distance === 2
              ? 1.03
              : 1;

          const opacity =
            distance <= 2 ? 1 : 0.92;

          return (
            <motion.span
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                scale,
                opacity,
                y: distance === 0 ? -4 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                mass: 0.8,
              }}
              className="
                inline-block
                cursor-default
                will-change-transform
              "
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
}
