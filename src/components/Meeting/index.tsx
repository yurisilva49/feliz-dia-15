"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import { FinalMessage } from "./FinalMessage";
import { Fog } from "./Fog";
import { Ground } from "./Ground";
import { Merkaba } from "./Merkaba";
import { Moon } from "./Moon";
import { PetalRain } from "./PetalRain";
import { Silhouette } from "./Silhouette";
import { Stars } from "./Stars";
import { Container, Scene } from "./styles";

export function Meeting() {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["0vw", "24vw"],
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 0.65],
    ["0vw", "-24vw"],
  );

  const characterScale = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, 1.04],
  );

  const merkabaOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.72, 1],
    [0, 0.16, 0.28],
  );

  const merkabaScale = useTransform(
    scrollYProgress,
    [0.55, 0.82],
    [0.7, 1],
  );

  const merkabaRotate = useTransform(
    scrollYProgress,
    [0.55, 1],
    [0, 18],
  );

  const petalOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.72, 1],
    [0, 0.45, 1],
  );

 const finalMessageOpacity = useTransform(
  scrollYProgress,
  [0.55, 0.72, 0.9],
  [0, 0.8, 1],
);

const finalMessageY = useTransform(
  scrollYProgress,
  [0.55, 0.75],
  [35, 0],
);

  return (
    <Container ref={containerRef}>
      <Scene>
        <Stars />
        <Moon />
        <Ground />

        <Merkaba
          opacity={merkabaOpacity}
          scale={merkabaScale}
          rotate={merkabaRotate}
        />

        <Silhouette
          side="left"
          x={leftX}
          scale={characterScale}
        />

        <Silhouette
          side="right"
          x={rightX}
          scale={characterScale}
        />

        <FinalMessage
          opacity={finalMessageOpacity}
          y={finalMessageY}
        />

        <Fog />

        <PetalRain opacity={petalOpacity} />
      </Scene>
    </Container>
  );
}