"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import {
  MerkabaGlow,
  MerkabaSvg,
  MerkabaWrapper,
} from "./styles";

interface MerkabaProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
}

export function Merkaba({
  opacity,
  scale,
  rotate,
}: MerkabaProps) {
  return (
    <MerkabaWrapper
      as={motion.div}
      style={{
        opacity,
        scale,
        rotate,
      }}
      aria-hidden="true"
    >
      <MerkabaGlow />

      <MerkabaSvg
        viewBox="0 0 420 420"
        role="presentation"
      >
        <defs>
          <linearGradient
            id="merkaba-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#fff9d8" />
            <stop offset="48%" stopColor="#ffd3eb" />
            <stop offset="100%" stopColor="#c9b8ff" />
          </linearGradient>

          <filter
            id="merkaba-glow"
            x="-70%"
            y="-70%"
            width="240%"
            height="240%"
          >
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          fill="none"
          stroke="url(#merkaba-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#merkaba-glow)"
        >
          <path d="M 210 48 L 350 285 L 70 285 Z" />
          <path d="M 210 372 L 70 135 L 350 135 Z" />

          <circle cx="210" cy="210" r="105" />
          <circle cx="210" cy="210" r="145" opacity="0.45" />

          <path d="M 210 48 L 210 372" opacity="0.55" />
          <path d="M 70 135 L 350 285" opacity="0.45" />
          <path d="M 350 135 L 70 285" opacity="0.45" />
        </g>

        <circle
          cx="210"
          cy="210"
          r="9"
          fill="#fff7d8"
          opacity="0.9"
        />
      </MerkabaSvg>
    </MerkabaWrapper>
  );
}