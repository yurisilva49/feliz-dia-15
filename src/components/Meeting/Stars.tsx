"use client";

import { motion } from "framer-motion";
import { Star, StarsWrapper } from "./styles";

const stars = [
  { x: 8, y: 12, size: 3, delay: 0 },
  { x: 17, y: 26, size: 2, delay: 0.6 },
  { x: 29, y: 10, size: 4, delay: 1.1 },
  { x: 40, y: 18, size: 2, delay: 0.3 },
  { x: 51, y: 8, size: 3, delay: 1.6 },
  { x: 63, y: 22, size: 4, delay: 0.8 },
  { x: 74, y: 12, size: 2, delay: 1.4 },
  { x: 84, y: 28, size: 3, delay: 0.5 },
  { x: 94, y: 16, size: 2, delay: 2.2 },
  { x: 12, y: 40, size: 2, delay: 1 },
  { x: 81, y: 45, size: 3, delay: 0.2 },
];

export function Stars() {
  return (
    <StarsWrapper aria-hidden="true">
      {stars.map((star, index) => (
        <Star
          key={index}
          $left={star.x}
          $top={star.y}
          $size={star.size}
          as={motion.span}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 3.2,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </StarsWrapper>
  );
}