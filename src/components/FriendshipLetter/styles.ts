"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  padding: 125px 24px 150px;
  background:
    radial-gradient(
      circle at 15% 30%,
      rgba(255, 220, 235, 0.78),
      transparent 30%
    ),
    radial-gradient(
      circle at 84% 72%,
      rgba(205, 183, 239, 0.55),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      #e8d9fa 0%,
      #f4e8f5 35%,
      #f8edf2 68%,
      #e1c9e8 100%
    );

  &::before {
    position: absolute;
    inset: 0;
    pointer-events: none;
    content: "";
    opacity: 0.35;
    background-image:
      linear-gradient(
        45deg,
        rgba(130, 80, 115, 0.035) 25%,
        transparent 25%
      ),
      linear-gradient(
        -45deg,
        rgba(130, 80, 115, 0.035) 25%,
        transparent 25%
      );
    background-position:
      0 0,
      12px 12px;
    background-size: 24px 24px;
  }

  @media (max-width: 700px) {
    padding: 100px 16px 120px;
  }
`;

export const SectionIntro = styled.div`
  position: relative;
  z-index: 2;
  max-width: 760px;
  margin: 0 auto 70px;
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 48px;
  }
`;

export const SectionLabel = styled.p`
  margin-bottom: 17px;
  color: #915579;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media (max-width: 500px) {
    letter-spacing: 3.5px;
  }
`;

export const SectionTitle = styled.h2`
  color: #55364f;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(42px, 6.4vw, 72px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2px;

  span {
    display: block;
    margin-top: 11px;
    color: #bd638f;
    font-size: 0.78em;
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: 500px) {
    font-size: 40px;
    letter-spacing: -1px;
  }
`;

export const Letter = styled.article`
  position: relative;
  z-index: 3;
  width: min(820px, 100%);
  margin: 0 auto;
  padding: 68px 75px 58px;
  border: 1px solid rgba(112, 68, 94, 0.13);
  border-radius: 8px;
  color: #62495a;
  background:
    linear-gradient(
      rgba(255, 253, 249, 0.93),
      rgba(255, 248, 248, 0.96)
    ),
    repeating-linear-gradient(
      0deg,
      transparent 0 30px,
      rgba(150, 91, 120, 0.055) 30px 31px
    );
  box-shadow:
    0 35px 90px rgba(79, 42, 70, 0.2),
    0 10px 25px rgba(79, 42, 70, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.95);
  transform-style: preserve-3d;

  &::before,
  &::after {
    position: absolute;
    width: 95px;
    height: 38px;
    content: "";
    background: rgba(230, 194, 208, 0.58);
    box-shadow: 0 4px 10px rgba(79, 42, 70, 0.08);
  }

  &::before {
    top: -17px;
    left: 45px;
    transform: rotate(-5deg);
  }

  &::after {
    right: 45px;
    bottom: -17px;
    transform: rotate(-5deg);
  }

  @media (max-width: 700px) {
    padding: 55px 29px 47px;

    &::before,
    &::after {
      width: 68px;
      height: 29px;
    }

    &::before {
      left: 26px;
    }

    &::after {
      right: 26px;
    }
  }

  @media (max-width: 420px) {
    padding-right: 22px;
    padding-left: 22px;
  }
`;

export const Ornament = styled.div<{
  $bottom?: boolean;
}>`
  display: flex;
  margin-bottom: ${({ $bottom }) => ($bottom ? "0" : "39px")};
  margin-top: ${({ $bottom }) => ($bottom ? "42px" : "0")};
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #c17a9c;

  span {
    width: 85px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(178, 104, 144, 0.58),
      transparent
    );
  }

  strong {
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 500px) {
    span {
      width: 55px;
    }
  }
`;

export const LetterHeader = styled.header`
  margin-bottom: 38px;

  small {
    display: block;
    margin-top: 8px;
    color: #a48194;
    font-size: 12px;
    letter-spacing: 1.2px;
  }
`;

export const LetterTitle = styled.h3`
  color: #5a3851;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(35px, 5vw, 49px);
  font-style: italic;
  font-weight: 400;
`;

export const LetterBody = styled.div`
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(17px, 2vw, 20px);
  line-height: 1.95;

  p + p {
    margin-top: 25px;
  }

  p:first-child::first-letter {
    float: left;
    margin: 6px 10px 0 0;
    color: #bf668f;
    font-size: 58px;
    line-height: 0.75;
  }

  @media (max-width: 500px) {
    font-size: 17px;
    line-height: 1.85;

    p + p {
      margin-top: 21px;
    }
  }
`;

export const LetterFooter = styled.footer`
  display: flex;
  margin-top: 50px;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
`;

export const Signature = styled.div`
  display: flex;
  color: #846678;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 15px;
  font-style: italic;
  flex-direction: column;
  gap: 5px;

  strong {
    color: #5a3851;
    font-size: 29px;
    font-weight: 400;
  }
`;

export const LetterSeal = styled.div`
  display: grid;
  width: 72px;
  height: 72px;
  place-items: center;
  border: 3px double rgba(255, 225, 230, 0.55);
  border-radius: 50%;
  color: #ffe9ef;
  background:
    radial-gradient(
      circle at 33% 28%,
      rgba(255, 255, 255, 0.2),
      transparent 20%
    ),
    linear-gradient(145deg, #bd587d, #873c64);
  box-shadow:
    0 9px 18px rgba(96, 38, 69, 0.23),
    inset 0 2px 5px rgba(255, 255, 255, 0.18);
  cursor: default;

  span {
    grid-row: 1;
    grid-column: 1;
    font-family: Georgia, serif;
    font-size: 25px;
    line-height: 1;
  }

  small {
    grid-row: 1;
    grid-column: 1;
    margin-top: 35px;
    font-size: 8px;
    letter-spacing: 2px;
  }

  @media (max-width: 500px) {
    width: 62px;
    height: 62px;

    span {
      font-size: 22px;
    }

    small {
      margin-top: 30px;
    }
  }
`;

export const FloatingPetal = styled.span<{
  $top: number;
  $left: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  z-index: 1;
  width: 18px;
  height: 11px;
  border-radius: 80% 20% 70% 30%;
  opacity: 0.55;
  pointer-events: none;
  background: linear-gradient(135deg, #fff8fc, #d886ad);
  box-shadow: 0 0 13px rgba(211, 122, 170, 0.28);
`;

export const DecorativeFlower = styled.div`
  position: absolute;
  top: 12%;
  left: 6%;
  z-index: 1;
  opacity: 0.3;
  font-size: clamp(60px, 9vw, 120px);
  pointer-events: none;
  filter: blur(0.3px);

  @media (max-width: 700px) {
    top: 15%;
    left: -5%;
    opacity: 0.2;
  }
`;

export const FinalMessage = styled.p`
  margin-top: 42px;
  color: #9a7088;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 17px;
  font-style: italic;
  line-height: 1.8;
  text-align: center;
  opacity: 0.82;

  @media (max-width: 500px) {
    font-size: 15px;
    line-height: 1.7;
    margin-top: 36px;
  }
`;