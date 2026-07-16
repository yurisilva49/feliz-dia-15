"use client";

import { motion } from "framer-motion";
import {
  Connection,
  ConnectionGlow,
  Container,
  Content,
  Eyebrow,
  FloatingHeart,
  Photo,
  PhotoCaption,
  PhotoFrame,
  PhotosArea,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  Sparkle,
} from "./styles";

const sparkles = [
  { top: 8, left: 12, delay: 0 },
  { top: 18, left: 78, delay: 0.8 },
  { top: 48, left: 5, delay: 1.4 },
  { top: 65, left: 88, delay: 0.4 },
  { top: 84, left: 25, delay: 1.8 },
  { top: 76, left: 72, delay: 1 },
];

export function FriendshipPhotos() {
  return (
    <Container>
      {sparkles.map((sparkle, index) => (
        <Sparkle
          key={index}
          $top={sparkle.top}
          $left={sparkle.left}
          as={motion.span}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.75, 1.3, 0.75],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <FloatingHeart
        as={motion.span}
        animate={{
          y: [0, -12, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♡
      </FloatingHeart>

      <Content>
        <SectionHeader
          as={motion.div}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        >
          <Eyebrow>O começo de tudo</Eyebrow>

          <SectionTitle>
            Duas histórias
            <span>se encontraram</span>
          </SectionTitle>

          <SectionDescription>
            Em um dia aparentemente comum, nasceu uma conexão que tornaria os
            dias seguintes muito mais especiais.
          </SectionDescription>
        </SectionHeader>

        <PhotosArea>
          <PhotoFrame
            $rotation={-4}
            as={motion.figure}
            initial={{ opacity: 0, x: -90, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              rotate: -2,
              scale: 1.025,
            }}
          >
           <Photo
  src="/images/foto-dela.jpg"
  alt="Foto de uma amiga especial"
/>

            <PhotoCaption>
              <span>Ela</span>
              <small>Uma pessoa incrível</small>
            </PhotoCaption>
          </PhotoFrame>

          <Connection aria-hidden="true">
            <ConnectionGlow
              as={motion.div}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 1.4,
                delay: 0.35,
                ease: "easeInOut",
              }}
            />

            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 1.2,
                type: "spring",
              }}
            >
              ✦
            </motion.span>
          </Connection>

          <PhotoFrame
            $rotation={4}
            as={motion.figure}
            initial={{ opacity: 0, x: 90, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              rotate: 2,
              scale: 1.025,
            }}
          >
       <Photo
  src="/images/foto-minha.jpg"
  alt="Minha foto"
/>

            <PhotoCaption>
              <span>Eu</span>
              <small>Grato por esse encontro</small>
            </PhotoCaption>
          </PhotoFrame>
        </PhotosArea>
      </Content>
    </Container>
  );
}