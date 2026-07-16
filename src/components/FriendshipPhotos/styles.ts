"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  padding: 120px 24px 140px;
  background:
    radial-gradient(
      circle at 15% 25%,
      rgba(255, 203, 226, 0.5),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 70%,
      rgba(210, 184, 255, 0.45),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      #d783a8 0%,
      #f4bfd4 26%,
      #fbe3ed 64%,
      #e8d9fa 100%
    );

  &::before {
    position: absolute;
    inset: 0;
    pointer-events: none;
    content: "";
    background:
      radial-gradient(
        circle at 20% 20%,
        rgba(255, 255, 255, 0.7) 0 2px,
        transparent 3px
      ),
      radial-gradient(
        circle at 70% 35%,
        rgba(255, 255, 255, 0.6) 0 2px,
        transparent 3px
      );
    background-size: 150px 150px;
    opacity: 0.45;
  }

  &::after {
    position: absolute;
    right: -12%;
    bottom: -240px;
    left: -12%;
    height: 390px;
    border-radius: 50%;
    pointer-events: none;
    content: "";
    background: rgba(255, 248, 252, 0.6);
    filter: blur(55px);
  }

  @media (max-width: 700px) {
    padding: 100px 18px 120px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: min(1120px, 100%);
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  max-width: 720px;
  margin: 0 auto 85px;
  text-align: center;

  @media (max-width: 700px) {
    margin-bottom: 60px;
  }
`;

export const Eyebrow = styled.p`
  margin-bottom: 17px;
  color: #95517c;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  color: #54334f;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(42px, 6.5vw, 72px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2px;

  span {
    display: block;
    margin-top: 11px;
    color: #c05d8c;
    font-size: 0.78em;
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: 500px) {
    font-size: 41px;
    letter-spacing: -1px;
  }
`;

export const SectionDescription = styled.p`
  max-width: 610px;
  margin: 26px auto 0;
  color: #77566e;
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.75;

  @media (max-width: 500px) {
    max-width: 330px;
    line-height: 1.65;
  }
`;

export const PhotosArea = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(240px, 350px) 190px minmax(240px, 350px);
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: minmax(220px, 310px) 100px minmax(220px, 310px);
    gap: 15px;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const PhotoFrame = styled(motion.figure)<{
  $rotation: number;
}>`
  position: relative;
  width: 100%;
  padding: 14px 14px 23px;
  border: 1px solid rgba(117, 61, 93, 0.12);
  border-radius: 8px;
  background: linear-gradient(145deg, #fffdfd, #fff4f8);
  box-shadow:
    0 30px 70px rgba(103, 52, 86, 0.2),
    0 8px 18px rgba(103, 52, 86, 0.1);
  transform: rotate(${({ $rotation }) => `${$rotation}deg`});
  transform-origin: center;
  will-change: transform;

  &::before {
    position: absolute;
    top: -18px;
    left: 50%;
    width: 76px;
    height: 28px;
    content: "";
    background: rgba(255, 222, 232, 0.77);
    box-shadow: 0 3px 8px rgba(108, 55, 88, 0.08);
    transform: translateX(-50%) rotate(-2deg);
  }

  @media (max-width: 700px) {
    width: min(310px, 86vw);
  }
`;

export const Photo = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 3px;
  object-fit: cover;
  object-position: center;
  background: #edd2df;
  filter: saturate(0.92) contrast(1.02);
`;

export const PhotoCaption = styled.figcaption`
  display: flex;
  margin-top: 17px;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;

  span {
    color: #613b58;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    font-style: italic;
  }

  small {
    color: #957188;
    font-size: 12px;
    letter-spacing: 0.4px;
  }
`;

export const Connection = styled.div`
  position: relative;
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: center;

  > span {
    position: absolute;
    z-index: 2;
    display: grid;
    width: 46px;
    height: 46px;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    color: #fff8c9;
    font-size: 22px;
    background: rgba(190, 94, 141, 0.82);
    box-shadow:
      0 0 18px rgba(255, 186, 216, 0.85),
      0 0 38px rgba(208, 127, 178, 0.45);
    backdrop-filter: blur(6px);
  }

  @media (max-width: 700px) {
    width: 80px;
    height: 125px;
  }
`;

export const ConnectionGlow = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(184, 94, 142, 0),
    rgba(255, 255, 255, 0.95),
    rgba(184, 94, 142, 0)
  );
  box-shadow:
    0 0 10px rgba(255, 255, 255, 0.9),
    0 0 23px rgba(204, 92, 149, 0.58);
  transform-origin: center;

  @media (max-width: 700px) {
    width: 3px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(184, 94, 142, 0),
      rgba(255, 255, 255, 0.95),
      rgba(184, 94, 142, 0)
    );
  }
`;

export const Sparkle = styled.span<{
  $top: number;
  $left: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  z-index: 1;
  width: 7px;
  height: 7px;
  pointer-events: none;
  background: #fff9d6;
  box-shadow:
    0 0 9px rgba(255, 255, 255, 0.95),
    0 0 20px rgba(255, 211, 235, 0.75);

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    background: rgba(255, 255, 255, 0.9);
    transform: translate(-50%, -50%);
  }

  &::before {
    width: 25px;
    height: 1px;
  }

  &::after {
    width: 1px;
    height: 25px;
  }
`;

export const FloatingHeart = styled.span`
  position: absolute;
  top: 18%;
  right: 8%;
  z-index: 1;
  color: rgba(174, 75, 128, 0.24);
  font-family: Georgia, serif;
  font-size: clamp(70px, 10vw, 140px);
  line-height: 1;
  pointer-events: none;

  @media (max-width: 700px) {
    top: 24%;
    right: -8%;
  }
`;