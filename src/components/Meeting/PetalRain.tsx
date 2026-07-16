"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { Petal, PetalRainWrapper } from "./styles";

interface PetalRainProps {
  opacity: MotionValue<number>;
}

const petals = [
  { left: 2, size: 12, duration: 8, delay: 0, drift: 35 },
  { left: 6, size: 16, duration: 10, delay: 1.2, drift: -28 },
  { left: 10, size: 10, duration: 7, delay: 2.4, drift: 42 },
  { left: 14, size: 14, duration: 11, delay: 0.7, drift: -36 },
  { left: 18, size: 11, duration: 9, delay: 3.1, drift: 30 },
  { left: 22, size: 17, duration: 12, delay: 1.8, drift: -40 },
  { left: 26, size: 13, duration: 8.5, delay: 0.3, drift: 45 },
  { left: 30, size: 9, duration: 10.5, delay: 2.8, drift: -32 },
  { left: 34, size: 15, duration: 9.5, delay: 1, drift: 36 },
  { left: 38, size: 12, duration: 12.5, delay: 3.6, drift: -44 },
  { left: 42, size: 17, duration: 8.8, delay: 0.5, drift: 38 },
  { left: 46, size: 10, duration: 11.4, delay: 2.1, drift: -29 },
  { left: 50, size: 15, duration: 9.2, delay: 1.5, drift: 47 },
  { left: 54, size: 11, duration: 12, delay: 3.3, drift: -36 },
  { left: 58, size: 16, duration: 8.2, delay: 0.9, drift: 32 },
  { left: 62, size: 13, duration: 10.8, delay: 2.6, drift: -42 },
  { left: 66, size: 9, duration: 9.7, delay: 1.3, drift: 39 },
  { left: 70, size: 17, duration: 12.3, delay: 3.8, drift: -31 },
  { left: 74, size: 12, duration: 8.7, delay: 0.2, drift: 44 },
  { left: 78, size: 15, duration: 11.2, delay: 2.2, drift: -39 },
  { left: 82, size: 10, duration: 9.1, delay: 1.7, drift: 31 },
  { left: 86, size: 16, duration: 12.7, delay: 3, drift: -45 },
  { left: 90, size: 13, duration: 8.4, delay: 0.6, drift: 37 },
  { left: 94, size: 11, duration: 10.4, delay: 2.9, drift: -34 },
  { left: 98, size: 15, duration: 9.8, delay: 1.1, drift: 43 },
];

export function PetalRain({ opacity }: PetalRainProps) {
  return (
    <PetalRainWrapper
      as={motion.div}
      style={{ opacity }}
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <Petal
          key={index}
          $left={petal.left}
          $size={petal.size}
          as={motion.span}
          initial={{
            y: "-15vh",
            x: 0,
            rotate: 0,
          }}
          animate={{
            y: "120vh",
            x: [
              0,
              petal.drift,
              -petal.drift * 0.7,
              petal.drift * 0.4,
              0,
            ],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            y: {
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: 5.5,
              delay: petal.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      ))}
    </PetalRainWrapper>
  );
}