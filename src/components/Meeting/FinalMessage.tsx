"use client";

import type { MotionValue } from "framer-motion";
import { motion } from "framer-motion";
import {
  FinalMessageContainer,
  FinalMessageDate,
  FinalMessageDivider,
  FinalMessageText,
  FinalMessageTitle,
} from "./styles";

interface FinalMessageProps {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export function FinalMessage({
  opacity,
  y,
}: FinalMessageProps) {
  return (
    <FinalMessageContainer
      as={motion.div}
      style={{
        opacity,
        y,
      }}
    >
      <FinalMessageDate>15 de julho de 2026</FinalMessageDate>

      <FinalMessageTitle>
        Algumas amizades
        <span>não acontecem por acaso.</span>
      </FinalMessageTitle>

      <FinalMessageDivider aria-hidden="true">
        <span />
        <strong>✦</strong>
        <span />
      </FinalMessageDivider>

      <FinalMessageText>
        Elas simplesmente encontram o caminho.
        <strong>Obrigado por esse primeiro ano. 🌸</strong>
      </FinalMessageText>
    </FinalMessageContainer>
  );
}