"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Container,
  Content,
  DateText,
  Description,
  Fog,
  FogLayer,
  GlowParticle,
  Moon,
  MoonCrater,
  MoonGlow,
  Petal,
  ScrollIndicator,
  Star,
  StarsLayer,
  Title,
} from "./styles";
import { SakuraSvg } from "@/components/SakuraSvg";

const stars = [
  { left: 7, top: 14, size: 4, delay: 0 },
  { left: 17, top: 30, size: 3, delay: 1.2 },
  { left: 28, top: 12, size: 5, delay: 2 },
  { left: 40, top: 25, size: 3, delay: 0.7 },
  { left: 51, top: 9, size: 4, delay: 1.7 },
  { left: 61, top: 20, size: 5, delay: 0.3 },
  { left: 72, top: 13, size: 3, delay: 2.4 },
  { left: 82, top: 28, size: 4, delay: 1 },
  { left: 91, top: 16, size: 3, delay: 1.9 },
  { left: 95, top: 39, size: 5, delay: 0.5 },
  { left: 12, top: 49, size: 3, delay: 2.8 },
  { left: 77, top: 46, size: 4, delay: 1.4 },
];

const petals = [
  { left: 4, duration: 13, delay: 1, drift: 30, size: 11 },
  { left: 10, duration: 16, delay: 4, drift: -22, size: 14 },
  { left: 17, duration: 12, delay: 2, drift: 28, size: 10 },
  { left: 24, duration: 17, delay: 7, drift: -26, size: 13 },
  { left: 31, duration: 14, delay: 0, drift: 20, size: 11 },
  { left: 40, duration: 16, delay: 5, drift: -24, size: 15 },
  { left: 49, duration: 12, delay: 3, drift: 30, size: 9 },
  { left: 57, duration: 18, delay: 8, drift: -28, size: 14 },
  { left: 65, duration: 14, delay: 1, drift: 22, size: 12 },
  { left: 73, duration: 16, delay: 6, drift: -24, size: 10 },
  { left: 81, duration: 13, delay: 3, drift: 26, size: 14 },
  { left: 89, duration: 17, delay: 9, drift: -22, size: 11 },
  { left: 96, duration: 15, delay: 4, drift: 20, size: 13 },
];

const particles = [
  { left: 8, delay: 0, duration: 8 },
  { left: 19, delay: 3, duration: 10 },
  { left: 31, delay: 1, duration: 9 },
  { left: 46, delay: 5, duration: 12 },
  { left: 59, delay: 2, duration: 8 },
  { left: 72, delay: 6, duration: 11 },
  { left: 84, delay: 4, duration: 9 },
  { left: 94, delay: 1.5, duration: 10 },
];




export function Hero() {
  const { scrollYProgress } = useScroll();

  const contentY = useTransform(scrollYProgress, [0, 0.28], [0, 90]);
  const sakuraY = useTransform(scrollYProgress, [0, 0.3], [0, 48]);
  const moonY = useTransform(scrollYProgress, [0, 0.3], [0, 28]);

  const sceneOpacity = useTransform(
    scrollYProgress,
    [0, 0.24, 0.4],
    [1, 0.95, 0.35],
  );

  return (
    <Container style={{ opacity: sceneOpacity }}>
      <StarsLayer>
        {stars.map((star, index) => (
          <Star
            key={index}
            as={motion.span}
            $left={star.left}
            $top={star.top}
            $size={star.size}
            animate={{
              opacity: [0.25, 1, 0.25],
              scale: [0.8, 1.35, 0.8],
            }}
            transition={{
              duration: 2.6,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </StarsLayer>

      <MoonGlow as={motion.div} style={{ y: moonY }} />

      <Moon
        as={motion.div}
        style={{ y: moonY }}
        animate={{
          boxShadow: [
            "0 0 45px rgba(255, 232, 245, 0.3)",
            "0 0 95px rgba(255, 232, 245, 0.58)",
            "0 0 45px rgba(255, 232, 245, 0.3)",
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MoonCrater $top={22} $left={29} $size={14} />
        <MoonCrater $top={54} $left={63} $size={20} />
        <MoonCrater $top={67} $left={31} $size={10} />
      </Moon>

      <SakuraSvg style={{ y: sakuraY }} />
      
      {particles.map((particle, index) => (
        <GlowParticle
          key={index}
          as={motion.span}
          $left={particle.left}
          initial={{
            y: "100vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {petals.map((petal, index) => (
        <Petal
          key={index}
          as={motion.span}
          $left={petal.left}
          $size={petal.size}
          initial={{
            y: "-10vh",
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "115vh",
            x: [0, petal.drift, -petal.drift, 0],
            rotate: [0, 120, 240, 360],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            y: {
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
            },
          }}
        />
      ))}

      <Content
        as={motion.div}
        style={{ y: contentY }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.25,
        }}
      >
        <DateText>15 de julho</DateText>

        <Title>
          Um ano de uma amizade
          <span>muito especial</span>
        </Title>

        <Description>
          Há exatamente um ano, duas histórias se encontraram e deram início a
          algo bonito.
        </Description>
      </Content>

      <FogLayer>
        <Fog
          as={motion.div}
          animate={{ x: ["-15%", "15%", "-15%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <Fog
          as={motion.div}
          $secondary
          animate={{ x: ["15%", "-12%", "15%"] }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </FogLayer>

      <ScrollIndicator
        as={motion.div}
        animate={{ y: [0, 9, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>Role para descobrir</span>
        <strong>⌄</strong>
      </ScrollIndicator>
    </Container>
  );
}