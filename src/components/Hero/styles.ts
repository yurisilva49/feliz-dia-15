"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.section)`
  position: relative;
  display: flex;
  min-height: 100svh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 32px 24px;
  isolation: isolate;
  background:
    radial-gradient(
      circle at 75% 25%,
      rgba(255, 215, 237, 0.3),
      transparent 28%
    ),
    linear-gradient(
      180deg,
      #15112f 0%,
      #35234e 36%,
      #74436f 67%,
      #d783a8 100%
    );

  &::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    content: "";
    background:
      radial-gradient(
        circle at 50% 115%,
        rgba(255, 210, 229, 0.72),
        transparent 44%
      ),
      linear-gradient(
        180deg,
        rgba(8, 7, 27, 0.13),
        rgba(74, 34, 73, 0.04)
      );
  }

  &::after {
    position: absolute;
    z-index: 20;
    inset: 0;
    pointer-events: none;
    content: "";
    background: radial-gradient(
      circle at center,
      transparent 31%,
      rgba(12, 8, 30, 0.32) 100%
    );
  }
`;

export const StarsLayer = styled.div`
  position: absolute;
  z-index: 0;
  inset: 0;
  pointer-events: none;
`;

export const Star = styled.span<{
  $left: number;
  $top: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 50%;
  background: #fff8fc;
  box-shadow:
    0 0 8px rgba(255, 255, 255, 0.9),
    0 0 18px rgba(255, 206, 235, 0.75);

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    background: rgba(255, 255, 255, 0.75);
    transform: translate(-50%, -50%);
  }

  &::before {
    width: ${({ $size }) => `${$size * 3}px`};
    height: 1px;
  }

  &::after {
    width: 1px;
    height: ${({ $size }) => `${$size * 3}px`};
  }
`;

export const MoonGlow = styled.div`
  position: absolute;
  top: 4%;
  right: 5%;
  z-index: 0;
  width: clamp(240px, 34vw, 480px);
  aspect-ratio: 1;
  border-radius: 50%;
  pointer-events: none;
  background: rgba(255, 211, 235, 0.2);
  filter: blur(65px);

  @media (max-width: 900px) {
    top: 6%;
    right: -7%;
    width: 360px;
  }

  @media (max-width: 600px) {
    top: 5%;
    right: -24%;
    width: 280px;
    filter: blur(50px);
  }

  @media (max-width: 430px) {
    top: 6%;
    right: -29%;
    width: 240px;
  }
`;

export const Moon = styled.div`
  position: absolute;
  top: 9%;
  right: 9%;
  z-index: 1;
  width: clamp(165px, 23vw, 330px);
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  opacity: 0.86;
  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(255, 255, 255, 0.85),
      transparent 20%
    ),
    linear-gradient(135deg, #fffaff 0%, #fce5f1 58%, #e9b7d0 100%);

  @media (max-width: 900px) {
    top: 10%;
    right: -2%;
    width: 245px;
  }

  @media (max-width: 600px) {
    top: 8%;
    right: -18%;
    width: 190px;
    opacity: 0.78;
  }

  @media (max-width: 430px) {
    top: 8%;
    right: -23%;
    width: 165px;
    opacity: 0.74;
  }
`;

export const MoonCrater = styled.span<{
  $top: number;
  $left: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  width: ${({ $size }) => `${$size}%`};
  aspect-ratio: 1;
  border-radius: 50%;
  opacity: 0.35;
  background: rgba(174, 119, 161, 0.28);
  box-shadow: inset 4px 4px 7px rgba(129, 84, 125, 0.15);
`;

export const SakuraScene = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  width: clamp(470px, 52vw, 800px);
  pointer-events: none;
  filter: drop-shadow(13px 20px 24px rgba(24, 10, 35, 0.28));

  @media (max-width: 1000px) {
    left: -110px;
    width: 660px;
  }

  @media (max-width: 700px) {
    left: -255px;
    width: 590px;
    opacity: 0.88;
  }

  @media (max-width: 480px) {
    left: -280px;
    width: 540px;
    opacity: 0.82;
  }
`;

export const Branch = styled.div<{
  $top: number;
  $left: number;
  $width: number;
  $height: number;
  $rotation: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  width: ${({ $width }) => `${$width}%`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: 0 999px 999px 0;
  background:
    repeating-linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.035) 0 3px,
      transparent 3px 15px
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.09),
      transparent 42%
    ),
    linear-gradient(180deg, #63375b 0%, #2a1735 100%);
  box-shadow: 0 8px 13px rgba(19, 8, 29, 0.23);
  transform: rotate(${({ $rotation }) => `${$rotation}deg`});
  transform-origin: left center;

  &::before,
  &::after {
    position: absolute;
    right: 8%;
    width: 43%;
    height: 46%;
    border-radius: 999px;
    content: "";
    background: linear-gradient(180deg, #4a294b, #281631);
    transform-origin: left center;
  }

  &::before {
    top: -23%;
    transform: rotate(-24deg);
  }

  &::after {
    bottom: -22%;
    transform: rotate(22deg);
  }
`;

export const Twig = styled.div<{
  $top: number;
  $left: number;
  $width: number;
  $rotation: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  width: ${({ $width }) => `${$width}%`};
  height: 9px;
  border-radius: 999px;
  background: linear-gradient(180deg, #63375b, #281531);
  box-shadow: 0 4px 8px rgba(20, 9, 30, 0.17);
  transform: rotate(${({ $rotation }) => `${$rotation}deg`});
  transform-origin: left center;

  &::before,
  &::after {
    position: absolute;
    right: 4%;
    width: 52%;
    height: 7px;
    border-radius: 999px;
    content: "";
    background: #2e1837;
    transform-origin: left center;
  }

  &::before {
    top: -5px;
    transform: rotate(24deg);
  }

  &::after {
    bottom: -5px;
    transform: rotate(-21deg);
  }
`;

export const Leaf = styled.span<{
  $top: number;
  $left: number;
  $size: number;
  $rotation: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  z-index: 2;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size * 0.6}px`};
  border-radius: 95% 10% 95% 12%;
  opacity: 0.94;
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18),
      transparent 38%
    ),
    linear-gradient(135deg, #de79a7 0%, #925078 47%, #493057 100%);
  box-shadow:
    inset 1px 1px 3px rgba(255, 255, 255, 0.16),
    0 4px 8px rgba(24, 10, 35, 0.21);
  transform: rotate(${({ $rotation }) => `${$rotation}deg`});

  &::before {
    position: absolute;
    top: 48%;
    left: 8%;
    width: 84%;
    height: 1px;
    content: "";
    background: rgba(255, 219, 237, 0.4);
    transform: rotate(-4deg);
  }

  &::after {
    position: absolute;
    top: 46%;
    left: -24%;
    width: 34%;
    height: 2px;
    border-radius: 999px;
    content: "";
    background: #5f365c;
  }
`;

export const BlossomCluster = styled.div<{
  $top: number;
  $left: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  z-index: 3;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  filter: drop-shadow(0 5px 8px rgba(117, 41, 91, 0.2));

  > span:last-child {
    position: absolute;
    top: 42%;
    left: 42%;
    z-index: 4;
    width: 17%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #ffd991;
    box-shadow:
      0 0 6px rgba(255, 224, 155, 0.9),
      0 0 13px rgba(255, 178, 214, 0.65);
  }
`;

export const Blossom = styled.span<{
  $rotation: number;
}>`
  position: absolute;
  top: 3%;
  left: 35%;
  width: 31%;
  height: 48%;
  border-radius: 68% 32% 62% 38%;
  background:
    radial-gradient(
      circle at 50% 78%,
      rgba(221, 95, 154, 0.9),
      transparent 24%
    ),
    linear-gradient(
      180deg,
      #fffafd 0%,
      #ffd5e7 30%,
      #f4a9ca 61%,
      #d96b9f 100%
    );
  box-shadow:
    inset 2px 1px 5px rgba(255, 255, 255, 0.72),
    inset -2px -3px 5px rgba(164, 64, 121, 0.14),
    0 4px 9px rgba(157, 60, 119, 0.24);
  transform: rotate(${({ $rotation }) => `${$rotation}deg`});
  transform-origin: 50% 100%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 8;
  width: min(720px, 100%);
  padding: 34px 30px;
  text-align: center;
  text-shadow: 0 7px 28px rgba(30, 12, 45, 0.42);

  @media (max-width: 1000px) {
    width: min(670px, 90%);
    margin-left: 90px;
  }

  @media (max-width: 700px) {
    width: 94%;
    margin-top: 70px;
    margin-left: 0;
    padding: 28px 18px;
  }
`;

export const DateText = styled.p`
  margin-bottom: 20px;
  color: rgba(255, 237, 247, 0.95);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 6px;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 11px;
    letter-spacing: 4px;
  }
`;

export const Title = styled.h1`
  color: #fff9fc;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(42px, 7vw, 78px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2px;

  span {
    display: block;
    margin-top: 14px;
    color: #ffc3dc;
    font-size: 0.78em;
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: 500px) {
    font-size: 39px;
    letter-spacing: -1px;
  }
`;

export const Description = styled.p`
  max-width: 570px;
  margin: 28px auto 0;
  color: rgba(255, 244, 250, 0.89);
  font-size: clamp(16px, 2.2vw, 20px);
  line-height: 1.7;

  @media (max-width: 500px) {
    max-width: 320px;
    margin-top: 22px;
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const Petal = styled.span<{
  $left: number;
  $size: number;
}>`
  position: absolute;
  top: -35px;
  left: ${({ $left }) => `${$left}%`};
  z-index: 12;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${Math.max(8, $size * 0.72)}px`};
  border-radius: 75% 25% 68% 32%;
  pointer-events: none;
  background: linear-gradient(
    135deg,
    #fff9fc 0%,
    #f8bbd5 45%,
    #d86da0 100%
  );
  box-shadow: 0 0 12px rgba(255, 171, 210, 0.45);
`;

export const GlowParticle = styled.span<{
  $left: number;
}>`
  position: absolute;
  bottom: -10px;
  left: ${({ $left }) => `${$left}%`};
  z-index: 4;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  pointer-events: none;
  background: #fff4c8;
  box-shadow:
    0 0 8px #fff2b5,
    0 0 20px rgba(255, 232, 160, 0.75);
`;

export const FogLayer = styled.div`
  position: absolute;
  bottom: -25px;
  left: 0;
  z-index: 6;
  width: 100%;
  height: 210px;
  overflow: hidden;
  pointer-events: none;
`;

export const Fog = styled.div<{
  $secondary?: boolean;
}>`
  position: absolute;
  right: -15%;
  bottom: ${({ $secondary }) => ($secondary ? "-45px" : "5px")};
  left: -15%;
  height: ${({ $secondary }) => ($secondary ? "170px" : "130px")};
  border-radius: 50%;
  opacity: ${({ $secondary }) => ($secondary ? 0.3 : 0.42)};
  background:
    radial-gradient(
      ellipse at 20% 50%,
      rgba(255, 238, 247, 0.95),
      transparent 44%
    ),
    radial-gradient(
      ellipse at 55% 55%,
      rgba(245, 213, 234, 0.82),
      transparent 48%
    ),
    radial-gradient(
      ellipse at 82% 42%,
      rgba(255, 239, 248, 0.84),
      transparent 43%
    );
  filter: blur(${({ $secondary }) => ($secondary ? "28px" : "22px")});

  ${({ $secondary }) =>
    $secondary &&
    css`
      transform: scale(1.2);
    `}
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  z-index: 15;
  display: flex;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  color: rgba(255, 241, 248, 0.84);

  span {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
  }

  strong {
    margin-top: 2px;
    font-size: 30px;
    font-weight: 400;
  }
`;