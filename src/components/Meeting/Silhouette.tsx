"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";

import {
  CharacterGlow,
  CharacterImage,
  CharacterImageCrop,
  CharacterShadow,
  CharacterWrapper,
} from "./styles";

interface SilhouetteProps {
  side: "left" | "right";
  x: MotionValue<string>;
  scale: MotionValue<number>;
}

export function Silhouette({
  side,
  x,
  scale,
}: SilhouetteProps) {
  const isLeft = side === "left";

  const imageSource = isLeft
    ? "/images/elaa.png"
    : "/images/euu.png";

  return (
    <CharacterWrapper
      $side={side}
      as={motion.div}
      style={{
        x,
        scale,
      }}
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(7px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.2,
        delay: isLeft ? 0.1 : 0.3,
        ease: "easeOut",
      }}
      aria-hidden="true"
    >
      <CharacterGlow
        as={motion.div}
        animate={{
          opacity: [0.18, 0.38, 0.18],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <CharacterShadow />

      <CharacterImageCrop>
        <CharacterImage
          src={imageSource}
          alt=""
          draggable={false}
        />
      </CharacterImageCrop>
    </CharacterWrapper>
  );
}