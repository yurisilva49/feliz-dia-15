"use client";

import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  padding: 125px 24px 150px;
  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(255, 208, 230, 0.28),
      transparent 29%
    ),
    radial-gradient(
      circle at 84% 70%,
      rgba(173, 153, 224, 0.3),
      transparent 32%
    ),
    linear-gradient(
      180deg,
      #e1c9e8 0%,
      #a878a5 42%,
      #5d416f 74%,
      #2e274f 100%
    );

  &::before {
    position: absolute;
    inset: 0;
    pointer-events: none;
    content: "";
    background:
      radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.55) 0 2px,
        transparent 3px
      ),
      radial-gradient(
        circle at 74% 55%,
        rgba(255, 255, 255, 0.45) 0 2px,
        transparent 3px
      );
    background-size: 170px 170px;
    opacity: 0.48;
  }

  @media (max-width: 700px) {
    padding: 100px 16px 120px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  width: min(1050px, 100%);
  margin: 0 auto;
`;

export const Intro = styled.div`
  max-width: 730px;
  margin: 0 auto 95px;
  text-align: center;

  @media (max-width: 700px) {
    margin-bottom: 70px;
  }
`;

export const Label = styled.p`
  margin-bottom: 17px;
  color: #875273;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 5px;
  text-transform: uppercase;

  @media (max-width: 600px) {
    color: #6d4563;
    letter-spacing: 3.5px;
  }
`;

export const Title = styled.h2`
  color: #50344e;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(42px, 6.5vw, 72px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -2px;

  span {
    display: block;
    margin-top: 11px;
    color: #b55e8b;
    font-size: 0.78em;
    font-style: italic;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    font-size: 40px;
    letter-spacing: -1px;
  }
`;

export const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 95px;

  @media (max-width: 700px) {
    gap: 66px;
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(255, 245, 250, 0),
    rgba(255, 235, 244, 0.95) 8%,
    rgba(255, 204, 228, 0.75) 82%,
    rgba(255, 245, 250, 0)
  );
  box-shadow:
    0 0 13px rgba(255, 228, 240, 0.62),
    0 0 28px rgba(202, 120, 167, 0.35);
  transform-origin: top;

  @media (max-width: 700px) {
    left: 25px;
  }
`;

export const EventCard = styled(motion.article)`
  width: min(400px, 100%);
  padding: 29px 31px;
  border: 1px solid rgba(255, 241, 247, 0.22);
  border-radius: 24px;
  background: rgba(255, 242, 247, 0.15);
  box-shadow:
    0 25px 60px rgba(28, 15, 41, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(14px);

  @media (max-width: 700px) {
    width: 100%;
    padding: 24px 22px;
    border-radius: 20px;
  }
`;

export const Marker = styled(motion.div)`
  position: relative;
  z-index: 3;
  display: grid;
  width: 60px;
  height: 60px;
  place-items: center;
  border: 2px solid rgba(255, 239, 247, 0.72);
  border-radius: 50%;
  color: white;
  font-size: 24px;
  background: linear-gradient(145deg, #c86d98, #744976);
  box-shadow:
    0 0 0 8px rgba(255, 222, 237, 0.1),
    0 0 24px rgba(255, 198, 225, 0.52),
    0 10px 25px rgba(37, 19, 51, 0.28);

  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;

export const TimelineItem = styled.div<{
  $side: "left" | "right";
}>`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 90px 1fr;
  align-items: center;

  ${({ $side }) =>
    $side === "left"
      ? css`
          ${EventCard} {
            grid-column: 1;
            justify-self: end;
          }

          ${Marker} {
            grid-column: 2;
          }
        `
      : css`
          ${EventCard} {
            grid-column: 3;
            justify-self: start;
          }

          ${Marker} {
            grid-column: 2;
          }
        `}

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 52px 1fr;
    align-items: start;

    ${Marker} {
      grid-row: 1;
      grid-column: 1;
      justify-self: center;
    }

    ${EventCard} {
      grid-row: 1;
      grid-column: 2;
      justify-self: stretch;
    }
  }
`;

export const Date = styled.p`
  margin-bottom: 10px;
  color: #ffe3ef;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2.3px;
  text-transform: uppercase;
`;

export const EventTitle = styled.h3`
  color: #fff8fc;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(25px, 3vw, 32px);
  font-weight: 500;
  line-height: 1.1;
`;

export const EventDescription = styled.p`
  margin-top: 15px;
  color: rgba(255, 242, 249, 0.82);
  font-size: 15px;
  line-height: 1.72;
`;