"use client";

import { motion } from "framer-motion";
import {
  Container,
  DecorativeFlower,
  FloatingPetal,
  Letter,
  LetterBody,
  LetterFooter,
  LetterHeader,
  LetterSeal,
  LetterTitle,
  Ornament,
  SectionIntro,
  SectionLabel,
  SectionTitle,
  Signature,
  FinalMessage,
} from "./styles";

const floatingPetals = [
  { top: 8, left: 12, delay: 0 },
  { top: 18, left: 84, delay: 1.2 },
  { top: 45, left: 7, delay: 2 },
  { top: 58, left: 91, delay: 0.7 },
  { top: 83, left: 18, delay: 1.6 },
  { top: 88, left: 78, delay: 2.4 },
];

export function FriendshipLetter() {
  return (
    <Container id="carta">
      {floatingPetals.map((petal, index) => (
        <FloatingPetal
          key={index}
          $top={petal.top}
          $left={petal.left}
          as={motion.span}
          animate={{
            y: [0, 14, 0],
            x: [0, 7, 0],
            rotate: [0, 35, 0],
          }}
          transition={{
            duration: 5,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <DecorativeFlower
        aria-hidden="true"
        as={motion.div}
        animate={{
          rotate: [-3, 3, -3],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌸
      </DecorativeFlower>

      <SectionIntro
        as={motion.div}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.9 }}
      >
        <SectionLabel>Algumas palavras para você</SectionLabel>

        <SectionTitle>
          Uma carta para uma
          <span>amizade especial</span>
        </SectionTitle>
      </SectionIntro>

      <Letter
        as={motion.article}
        initial={{
          opacity: 0,
          y: 70,
          rotateX: 8,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{
          duration: 1.1,
          ease: "easeOut",
        }}
      >
        <Ornament aria-hidden="true">
          <span />
          <strong>✦</strong>
          <span />
        </Ornament>

        <LetterHeader>
          <LetterTitle>Para você,</LetterTitle>
          <small>15 de julho de 2026</small>
        </LetterHeader>

     <LetterBody>
  <p>
    Hoje faz exatamente um ano desde o dia em que nossas histórias se
    encontraram.
  </p>

  <p>
    Eu estava refletindo nesses dias sobre como a sua chegada mudou
    completamente a minha vida, alterando a minha forma de pensar, de agir,
    de sentir e de viver.
  </p>

  <p>
    Eu quero te transmitir tudo o que eu puder de intenções boas e positivas
    enquanto você lê isso. Quero que você entenda que você é amada e que
    consiga absorver e internalizar esse sentimento.
  </p>

  <p>
    Há um ano, eu estava conhecendo uma garota que imaginei que seria apenas
    mais uma pessoa com quem eu conversaria por um tempo e depois nunca mais
    falaria, alguém de quem talvez eu nem lembrasse da existência.
  </p>

  <p>
    Mas, naquela primeira madrugada de conversa, eu já senti algo diferente.
  </p>

  <p>
    Ela se interessou por tudo o que eu tinha para falar, por cada assunto
    que normalmente ninguém se importava. Naquele primeiro dia, eu já senti
    uma energia muito forte e intensa. Quanto mais ela perguntava e eu
    respondia — sobre os assuntos e sobre mim — mais eu sentia que, na
    verdade, estava resgatando uma parte de mim mesmo.
  </p>

  <p>
    Isso começou a ficar claro no meu inconsciente e, aos poucos, foi tomando
    forma. Quanto mais os dias passavam e mais íntimos ficávamos, mais esse
    sentimento crescia.
  </p>

  <p>
    Nos três primeiros meses, foram madrugadas conversando sobre coisas que
    poucas pessoas entendem. A cada dia, sentíamos mais forte a nossa conexão
    mental e até mesmo uma certa telepatia. Aos poucos, também fomos
    conhecendo a vida um do outro.
  </p>

  <p>
    Nos três meses seguintes, começamos a compartilhar cada vez mais a nossa
    intimidade, como se aquilo fosse a coisa mais natural do mundo, como se
    nos conhecêssemos há muitos anos.
  </p>

  <p>
    Então começamos a sentir algo muito forte, principalmente eu. Era como se
    uma voz dentro de mim dissesse:
  </p>

  <p
    style={{
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: 600,
    }}
  >
    "Nós precisamos nos conhecer pessoalmente."
  </p>

  <p>
    E essa ideia ficou completamente fixa na minha mente.
  </p>

  <p>
    Então 2026 chegou.
  </p>

  <p>
    Confesso que, no começo de janeiro, passou pela minha cabeça que, por
    algum motivo, nós acabaríamos ficando mais distantes.
  </p>

  <p>
    Mas aconteceu exatamente o contrário.
  </p>

  <p>
    Nossa amizade continuou cada vez mais forte.
  </p>

  <p>
    Cada vez mais firme.
  </p>

  <p>
    Essa amizade me deu força para continuar todos os meus projetos,
    literalmente do absoluto zero. Ela também virou combustível para novas
    ideias, novas perspectivas e novos sonhos.
  </p>

  <p>
    A minha consciência expandiu duas, três, quatro... talvez cinco vezes
    mais com a sua presença na minha vida.
  </p>

  <p>
    E, de repente, quando eu percebi...
  </p>

  <p>
    Nossa amizade havia completado um ano.
  </p>

  <p>
    Eu simplesmente não consigo descrever o quanto sou grato por ter você.
  </p>

  <p>
    Pela sua atenção.
    <br />
    Pela sua presença.
    <br />
    Por estarmos evoluindo juntos.
    <br />
    Por termos planos em comum.
    <br />
    Pela vontade de nos conhecermos pessoalmente.
    <br />
    Pelos objetivos que compartilhamos.
  </p>

  <p>
    Tudo isso me dá ânimo para continuar em todas as áreas da minha vida.
  </p>

  <p>
    Eu desejo, do fundo do coração, que a nossa amizade continue por muito
    tempo.
  </p>

  <p>
    E quero que você sinta, de verdade, que você é amada.
  </p>

  <p>
    Esta carta existe para dizer exatamente isso.
  </p>

  <p>
    Que a nossa amizade continue crescendo.
  </p>

  <p>
    Que continuemos nos verticalizando, evoluindo como pessoas e melhorando
    as nossas vidas, tanto no aspecto espiritual quanto no material, até o
    dia em que finalmente nos conheceremos pessoalmente.
  </p>

  <p
    style={{
      textAlign: "center",
      fontWeight: 600,
      marginTop: 40,
    }}
  >
    Obrigado por esse primeiro ano.
    <br />
    Que venham muitos outros. 🌸
  </p>
</LetterBody>
        <LetterFooter>
          <Signature>
            Com carinho,
             <strong>Yuri 🌸</strong>
          </Signature>

          <LetterSeal
            aria-hidden="true"
            as={motion.div}
            whileHover={{
              scale: 1.08,
              rotate: 8,
            }}
            transition={{
              type: "spring",
              stiffness: 230,
              damping: 14,
            }}
          >
            <span>15</span>
            <small>VII</small>
          </LetterSeal>
        </LetterFooter>

     <FinalMessage
  as={motion.p}
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true, amount: 0.6 }}
  transition={{
    duration: 1,
    delay: 0.25,
    ease: "easeOut",
  }}
>
  “Algumas pessoas entram na nossa vida sem fazer barulho...
  <br />
  e acabam se tornando uma das partes mais bonitas dela.” 🌸
</FinalMessage>


        <Ornament $bottom aria-hidden="true">
          <span />
          <strong>✦</strong>
          <span />
        </Ornament>
      </Letter>
    </Container>
  );
}