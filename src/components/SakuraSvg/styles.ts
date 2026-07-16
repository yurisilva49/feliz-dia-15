"use client";

import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const gentleSway = keyframes`
  0%,
  100% {
    transform: rotate(-0.3deg) translateY(0);
  }

  50% {
    transform: rotate(0.45deg) translateY(-2px);
  }
`;

export const SakuraWrapper = styled(motion.div)`
  position: absolute;
  top: -1%;
  bottom: -2%;
  left: 0;
  z-index: 4;
  width: clamp(390px, 42vw, 650px);
  pointer-events: none;
  transform-origin: left center;
  filter: drop-shadow(12px 19px 25px rgba(24, 10, 35, 0.25));

  @media (max-width: 1100px) {
    top: 0;
    left: -45px;
    width: 580px;
  }

  @media (max-width: 800px) {
    top: -28px;
    left: -105px;
    width: 540px;
    height: 94%;
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    top: -42px;
    left: -128px;
    width: 485px;
    height: 87%;
    opacity: 0.86;
  }

  @media (max-width: 430px) {
    top: -48px;
    left: -138px;
    width: 455px;
    height: 82%;
    opacity: 0.82;
  }

  @media (max-width: 360px) {
    top: -48px;
    left: -148px;
    width: 430px;
    height: 80%;
    opacity: 0.8;
  }
`;

export const Artwork = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
  animation: ${gentleSway} 8s ease-in-out infinite;
  transform-origin: left center;
`;