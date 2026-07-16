"use client";

import { motion } from "framer-motion";
import {
  Flower,
  FlowerCenter,
  FlowerPetal,
  GrassBlade,
  GroundBack,
  GroundFront,
  GroundGlow,
  GroundWrapper,
  SmallPlant,
} from "./styles";

const grass = [
  { left: 4, height: 28, rotate: -8, delay: 0.2 },
  { left: 8, height: 40, rotate: 5, delay: 0.7 },
  { left: 13, height: 32, rotate: -4, delay: 1.1 },
  { left: 18, height: 48, rotate: 8, delay: 0.3 },
  { left: 25, height: 29, rotate: -10, delay: 1.4 },
  { left: 31, height: 43, rotate: 4, delay: 0.8 },
  { left: 39, height: 35, rotate: -6, delay: 1.7 },
  { left: 46, height: 50, rotate: 6, delay: 0.5 },
  { left: 54, height: 31, rotate: -7, delay: 1.3 },
  { left: 62, height: 46, rotate: 8, delay: 0.9 },
  { left: 70, height: 34, rotate: -5, delay: 1.9 },
  { left: 77, height: 42, rotate: 5, delay: 0.4 },
  { left: 84, height: 30, rotate: -8, delay: 1.2 },
  { left: 91, height: 47, rotate: 7, delay: 0.6 },
  { left: 96, height: 33, rotate: -4, delay: 1.5 },
];

const flowers = [
  { left: 11, bottom: 46, scale: 0.8, delay: 0.2 },
  { left: 23, bottom: 58, scale: 0.65, delay: 1 },
  { left: 36, bottom: 49, scale: 0.9, delay: 0.5 },
  { left: 51, bottom: 64, scale: 0.72, delay: 1.4 },
  { left: 67, bottom: 52, scale: 0.84, delay: 0.8 },
  { left: 81, bottom: 61, scale: 0.68, delay: 1.6 },
  { left: 92, bottom: 45, scale: 0.78, delay: 0.3 },
];

export function Ground() {
  return (
    <GroundWrapper aria-hidden="true">
      <GroundGlow />

      <GroundBack
        as={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <GroundFront
        as={motion.div}
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.3, delay: 0.15, ease: "easeOut" }}
      />

      {grass.map((blade, index) => (
        <GrassBlade
          key={index}
          $left={blade.left}
          $height={blade.height}
          $rotate={blade.rotate}
          as={motion.span}
          animate={{
            rotate: [blade.rotate, blade.rotate + 4, blade.rotate],
          }}
          transition={{
            duration: 4,
            delay: blade.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {flowers.map((flower, index) => (
        <SmallPlant
          key={index}
          $left={flower.left}
          $bottom={flower.bottom}
          $scale={flower.scale}
          as={motion.div}
          animate={{
            y: [0, -3, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 4.5,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower>
            <FlowerPetal $rotation={0} />
            <FlowerPetal $rotation={72} />
            <FlowerPetal $rotation={144} />
            <FlowerPetal $rotation={216} />
            <FlowerPetal $rotation={288} />
            <FlowerCenter />
          </Flower>
        </SmallPlant>
      ))}
    </GroundWrapper>
  );
}