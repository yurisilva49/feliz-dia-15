"use client";

import { motion } from "framer-motion";
import { MoonGlow, MoonSphere } from "./styles";

export function Moon() {
  return (
    <>
      <MoonGlow
        as={motion.div}
        animate={{
          y: [0, -14, 0],
          opacity: [0.75, 1, 0.75],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MoonSphere
        as={motion.div}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}