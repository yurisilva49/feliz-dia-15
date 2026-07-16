"use client";

import { motion } from "framer-motion";
import {
  Container,
  Content,
  Date,
  EventCard,
  EventDescription,
  EventTitle,
  Intro,
  Label,
  Line,
  Marker,
  Timeline,
  TimelineItem,
  Title,
} from "./styles";

const events = [
  {
    date: "15 de julho de 2025",
    title: "O nosso primeiro encontro",
    description:
      "Uma madrugada de conversa que parecia comum, mas que acabou iniciando algo muito especial.",
    side: "left",
    symbol: "🌸",
  },
  {
    date: "Os primeiros meses",
    title: "Madrugadas e descobertas",
    description:
      "Conversas sobre assuntos que poucas pessoas entendem, intimidade crescendo e uma conexão cada vez mais forte.",
    side: "right",
    symbol: "🌙",
  },
  {
    date: "Com o passar do tempo",
    title: "Uma amizade cada vez mais firme",
    description:
      "Passamos a compartilhar sonhos, planos, ideias, sentimentos e partes importantes das nossas vidas.",
    side: "left",
    symbol: "✨",
  },
  {
    date: "2026",
    title: "Novas ideias e novos caminhos",
    description:
      "A amizade se tornou força, inspiração e combustível para continuar evoluindo e construindo novos projetos.",
    side: "right",
    symbol: "🦋",
  },
  {
    date: "15 de julho de 2026",
    title: "Um ano depois",
    description:
      "Chegamos ao primeiro aniversário de uma amizade que mudou a minha forma de pensar, sentir e viver.",
    side: "left",
    symbol: "💙",
  },
];

export function FriendshipTimeline() {
  return (
    <Container id="linha-do-tempo">
      <Content>
        <Intro
          as={motion.div}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        >
          <Label>Um ano em pequenos momentos</Label>

          <Title>
            A história que fomos
            <span>construindo juntos</span>
          </Title>
        </Intro>

        <Timeline>
          <Line
            as={motion.div}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />

          {events.map((event, index) => (
            <TimelineItem
              key={event.title}
              $side={event.side as "left" | "right"}
            >
              <EventCard
                as={motion.article}
                initial={{
                  opacity: 0,
                  x: event.side === "left" ? -70 : 70,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <Date>{event.date}</Date>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
              </EventCard>

              <Marker
                as={motion.div}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.25 + index * 0.08,
                  type: "spring",
                  stiffness: 220,
                }}
              >
                {event.symbol}
              </Marker>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </Container>
  );
}