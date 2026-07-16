"use client";

import { motion } from "framer-motion";
import {
  FogBack,
  FogFront,
  FogGlow,
  FogWrapper,
} from "./styles";

export function Fog() {
  return (
    <FogWrapper aria-hidden="true">
      <FogGlow />

      <FogBack
        as={motion.div}
        animate={{
          x: ["-5%", "6%", "-5%"],
          opacity: [0.28, 0.42, 0.28],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <FogFront
        as={motion.div}
        animate={{
          x: ["6%", "-5%", "6%"],
          opacity: [0.34, 0.5, 0.34],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </FogWrapper>
  );
}