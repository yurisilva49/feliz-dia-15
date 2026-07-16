import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 220svh;
  background: #57508c;
`;

export const Scene = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  min-height: 100svh;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 50% 34%,
      rgba(255, 224, 240, 0.12),
      transparent 38%
    ),
    #57508c;
`;

export const MoonWrapper = styled.div`
  position: absolute;
  top: 6%;
  left: 50%;
  z-index: 1;
  width: clamp(330px, 42vw, 650px);
  aspect-ratio: 1;
  pointer-events: none;
  transform: translateX(-50%);

  @media (max-width: 900px) {
    top: 9%;
    width: 500px;
  }

  @media (max-width: 600px) {
    top: 13%;
    width: 350px;
  }

  @media (max-width: 430px) {
    top: 15%;
    width: 300px;
  }
`;

export const MoonGlow = styled.div`
  position: absolute;
  top: -2%;
  left: 50%;
  z-index: 1;

  width: clamp(420px, 42vw, 620px);
  height: clamp(420px, 42vw, 620px);

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(255, 243, 248, 0.22),
    rgba(255, 228, 242, 0.08),
    transparent 72%
  );

  filter: blur(65px);

  transform: translateX(-50%);

  pointer-events: none;

  @media (max-width: 900px) {
    top: -10%;
    width: 420px;
    height: 420px;
  }

  @media (max-width: 600px) {
   top: -10%;
    width: 320px;
    height: 320px;
  }
`;

export const MoonSphere = styled.div`
  position: absolute;
  top: 4%;
  left: 50%;

  z-index: 2;

  width: clamp(320px, 35vw, 470px);
  height: clamp(320px, 35vw, 470px);

  border-radius: 50%;

  transform: translateX(-50%);

  background:
    radial-gradient(
      circle at 32% 28%,
      rgba(180,180,180,.18) 0 7%,
      transparent 8%
    ),
    radial-gradient(
      circle at 68% 58%,
      rgba(180,180,180,.15) 0 10%,
      transparent 11%
    ),
    radial-gradient(
      circle at 48% 74%,
      rgba(180,180,180,.13) 0 6%,
      transparent 7%
    ),
    radial-gradient(
      circle at center,
      #fffef8 0%,
      #fff8ea 72%,
      #efe7d4 100%
    );

  box-shadow:
    0 0 60px rgba(255,255,240,.30),
    0 0 120px rgba(255,245,220,.18);

  pointer-events: none;

  @media (max-width: 900px) {
    top: 7%;
    width: 360px;
    height: 360px;
  }

  @media (max-width: 600px) {
    top: 9%;
    width: 260px;
    height: 260px;
  }
`;

export const MoonLight = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  width: 150%;
  height: 72%;
  border-radius: 50%;
  opacity: 0.38;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 236, 246, 0.72),
    transparent 67%
  );
  filter: blur(42px);
  transform: translate(-50%, -50%);
`;

export const MoonBody = styled.div`
  position: absolute;
  inset: 10%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  opacity: 0.9;
  background:
    radial-gradient(
      circle at 32% 27%,
      rgba(255, 255, 255, 0.95),
      transparent 21%
    ),
    radial-gradient(
      circle at 68% 72%,
      rgba(208, 159, 194, 0.16),
      transparent 32%
    ),
    linear-gradient(
      145deg,
      #fffaff 0%,
      #fce7f2 47%,
      #eab8d2 100%
    );

  &::after {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    content: "";
    background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.28),
      transparent 38%,
      rgba(155, 99, 145, 0.1)
    );
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
  opacity: 0.42;
  background:
    radial-gradient(
      circle at 35% 30%,
      rgba(255, 255, 255, 0.18),
      transparent 30%
    ),
    rgba(170, 112, 158, 0.2);
  box-shadow:
    inset 5px 5px 10px rgba(126, 76, 118, 0.12),
    inset -3px -3px 6px rgba(255, 255, 255, 0.12);
`;

export const GroundWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  height: 34%;
  pointer-events: none;

  @media (max-width: 700px) {
    height: 30%;
  }
`;

export const GroundGlow = styled.div`
  position: absolute;
  right: 8%;
  bottom: 18%;
  left: 8%;
  height: 45%;
  border-radius: 50%;
  opacity: 0.55;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 221, 236, 0.72),
    transparent 70%
  );
  filter: blur(38px);
`;

export const GroundBack = styled.div`
  position: absolute;
  right: -8%;
  bottom: -18%;
  left: -8%;
  height: 92%;
  border-radius: 50% 50% 0 0 / 42% 44% 0 0;
  background:
    radial-gradient(
      circle at 35% 24%,
      rgba(255, 225, 239, 0.16),
      transparent 25%
    ),
    linear-gradient(180deg, #8d6a91 0%, #59486c 58%, #312d4f 100%);
  box-shadow:
    inset 0 14px 30px rgba(255, 221, 236, 0.08),
    0 -18px 45px rgba(75, 52, 84, 0.2);

  @media (max-width: 700px) {
    right: -25%;
    left: -25%;
    height: 95%;
  }
`;

export const GroundFront = styled.div`
  position: absolute;
  right: -14%;
  bottom: -34%;
  left: -14%;
  height: 88%;
  border-radius: 50% 50% 0 0 / 36% 42% 0 0;
  background:
    repeating-linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.018) 0 4px,
      transparent 4px 19px
    ),
    linear-gradient(180deg, #55445f 0%, #332e4c 55%, #24233d 100%);
  box-shadow:
    inset 0 16px 26px rgba(255, 213, 232, 0.05),
    0 -12px 35px rgba(37, 30, 57, 0.2);

  @media (max-width: 700px) {
    right: -30%;
    left: -30%;
    height: 92%;
  }
`;

export const GrassBlade = styled.span<{
  $left: number;
  $height: number;
  $rotate: number;
}>`
  position: absolute;
  bottom: 20%;
  left: ${({ $left }) => `${$left}%`};
  z-index: 5;
  width: 3px;
  height: ${({ $height }) => `${$height}px`};
  border-radius: 100% 100% 0 0;
  background: linear-gradient(
    180deg,
    #d5a8c5 0%,
    #83647f 55%,
    #51435f 100%
  );
  box-shadow: 0 0 7px rgba(230, 177, 207, 0.16);
  transform: rotate(${({ $rotate }) => `${$rotate}deg`});
  transform-origin: bottom center;

  &::after {
    position: absolute;
    top: 35%;
    left: 1px;
    width: 13px;
    height: 4px;
    border-radius: 100%;
    content: "";
    background: #8f6c88;
    transform: rotate(-33deg);
    transform-origin: left center;
  }

  @media (max-width: 600px) {
    bottom: 17%;
    transform: scale(0.8) rotate(${({ $rotate }) => `${$rotate}deg`});
  }
`;

export const SmallPlant = styled.div<{
  $left: number;
  $bottom: number;
  $scale: number;
}>`
  position: absolute;
  bottom: ${({ $bottom }) => `${$bottom}px`};
  left: ${({ $left }) => `${$left}%`};
  z-index: 6;
  width: 44px;
  height: 55px;
  transform: translateX(-50%) scale(${({ $scale }) => $scale});
  transform-origin: bottom center;

  &::before {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 3px;
    height: 34px;
    border-radius: 999px;
    content: "";
    background: linear-gradient(180deg, #aa7594, #564761);
    transform: translateX(-50%);
  }

  @media (max-width: 600px) {
    bottom: ${({ $bottom }) => `${Math.max(32, $bottom - 10)}px`};
  }
`;

export const Flower = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 34px;
  height: 34px;
  transform: translateX(-50%);
`;

export const FlowerPetal = styled.span<{
  $rotation: number;
}>`
  position: absolute;
  top: 0;
  left: 11px;
  width: 12px;
  height: 19px;
  border-radius: 75% 25% 70% 30%;
  background: linear-gradient(180deg, #fff8fc, #e994ba);
  box-shadow:
    inset 1px 1px 3px rgba(255, 255, 255, 0.55),
    0 3px 7px rgba(143, 68, 113, 0.2);
  transform: rotate(${({ $rotation }) => `${$rotation}deg`});
  transform-origin: 50% 100%;
`;

export const FlowerCenter = styled.span`
  position: absolute;
  top: 13px;
  left: 13px;
  z-index: 3;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffe4a4;
  box-shadow:
    0 0 7px rgba(255, 231, 169, 0.8),
    0 0 13px rgba(239, 153, 195, 0.45);
`;

export const StarsWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
`;

export const Star = styled.span<{
  $left: number;
  $top: number;
  $size: number;
}>`
  position: absolute;

  left: ${({ $left }) => `${$left}%`};
  top: ${({ $top }) => `${$top}%`};

  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  border-radius: 50%;

  background: #fffafc;

  box-shadow:
    0 0 8px rgba(255,255,255,.95),
    0 0 22px rgba(255,213,233,.55);

  &::before{
    content:"";
    position:absolute;

    left:50%;
    top:50%;

    width:${({ $size }) => $size * 3}px;
    height:1px;

    transform:translate(-50%,-50%);

    background:white;
    opacity:.75;
  }

  &::after{
    content:"";
    position:absolute;

    left:50%;
    top:50%;

    width:1px;
    height:${({ $size }) => $size * 3}px;

    transform:translate(-50%,-50%);

    background:white;
    opacity:.75;
  }
`;

export const FogWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 9%;
  left: 0;
  z-index: 7;
  height: 210px;
  overflow: hidden;
  pointer-events: none;

  @media (max-width: 700px) {
    bottom: 8%;
    height: 165px;
  }
`;

export const FogGlow = styled.div`
  position: absolute;
  right: 15%;
  bottom: 0;
  left: 15%;
  height: 90%;
  border-radius: 50%;
  opacity: 0.6;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 236, 246, 0.78),
    transparent 72%
  );
  filter: blur(42px);
`;

export const FogBack = styled.div`
  position: absolute;
  right: -15%;
  bottom: -34px;
  left: -15%;
  height: 145px;
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse at 18% 54%,
      rgba(255, 247, 251, 0.82),
      transparent 43%
    ),
    radial-gradient(
      ellipse at 48% 48%,
      rgba(246, 224, 239, 0.7),
      transparent 47%
    ),
    radial-gradient(
      ellipse at 78% 56%,
      rgba(255, 245, 250, 0.8),
      transparent 43%
    );
  filter: blur(26px);

  @media (max-width: 700px) {
    bottom: -28px;
    height: 120px;
    filter: blur(22px);
  }
`;

export const FogFront = styled.div`
  position: absolute;
  right: -20%;
  bottom: -58px;
  left: -20%;
  height: 180px;
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse at 24% 46%,
      rgba(255, 251, 253, 0.88),
      transparent 42%
    ),
    radial-gradient(
      ellipse at 58% 52%,
      rgba(247, 227, 241, 0.78),
      transparent 46%
    ),
    radial-gradient(
      ellipse at 86% 48%,
      rgba(255, 248, 252, 0.84),
      transparent 41%
    );
  filter: blur(32px);

  @media (max-width: 700px) {
    bottom: -48px;
    height: 150px;
    filter: blur(27px);
  }
`;



export const CharacterWrapper = styled.div<{
  $side: "left" | "right";
}>`
  position: absolute;
  right: ${({ $side }) => ($side === "right" ? "10%" : "auto")};
  bottom: 9%;
  left: ${({ $side }) => ($side === "left" ? "10%" : "auto")};
  z-index: 8;
  width: clamp(150px, 17vw, 245px);
  height: clamp(310px, 36vw, 500px);
  pointer-events: none;
  transform-origin: bottom center;

  @media (max-width: 1000px) {
    right: ${({ $side }) => ($side === "right" ? "5%" : "auto")};
    left: ${({ $side }) => ($side === "left" ? "5%" : "auto")};
    width: 210px;
    height: 420px;
  }

  @media (max-width: 700px) {
    right: ${({ $side }) => ($side === "right" ? "-1%" : "auto")};
    bottom: 8%;
    left: ${({ $side }) => ($side === "left" ? "-1%" : "auto")};
    width: 150px;
    height: 310px;
  }

  @media (max-width: 480px) {
    right: ${({ $side }) => ($side === "right" ? "-7%" : "auto")};
    left: ${({ $side }) => ($side === "left" ? "-7%" : "auto")};
    width: 135px;
    height: 280px;
  }
`;

export const CharacterImageCrop = styled.div`
  position: absolute;
  z-index: 2;
  inset: 0;
  overflow: hidden;
`;

export const CharacterImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center bottom;
  pointer-events: none;
  user-select: none;
  filter:
    drop-shadow(0 16px 16px rgba(24, 14, 40, 0.28))
    saturate(1.02)
    contrast(1.02);
`;

export const CharacterGlow = styled.div`
  position: absolute;
  right: -40%;
  bottom: -3%;
  left: -40%;
  z-index: 0;
  height: 72%;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 211, 235, 0.32),
    transparent 68%
  );
  filter: blur(30px);
`;

export const CharacterShadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 1;
  width: 78%;
  height: 7%;
  border-radius: 50%;
  opacity: 0.32;
  background: rgba(27, 19, 47, 0.78);
  filter: blur(9px);
  transform: translateX(-50%);
`;

export const MerkabaWrapper = styled.div`
  position: absolute;
  top: 34%;
  left: 50%;
  z-index: 3;
  width: clamp(330px, 42vw, 620px);
  aspect-ratio: 1;
  pointer-events: none;
  transform: translateX(-50%);
  transform-origin: center;

  @media (max-width: 700px) {
    top: 38%;
    width: 340px;
  }

  @media (max-width: 480px) {
    top: 40%;
    width: 285px;
  }
`;

export const MerkabaGlow = styled.div`
  position: absolute;
  inset: 18%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 223, 239, 0.42),
    rgba(204, 184, 255, 0.14),
    transparent 72%
  );
  filter: blur(35px);
`;

export const MerkabaSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
`;

export const PetalRainWrapper = styled.div`
  position: absolute;
  z-index: 20;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

export const Petal = styled.span<{
  $left: number;
  $size: number;
}>`
  position: absolute;
  top: -40px;
  left: ${({ $left }) => `${$left}%`};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size * 0.7}px`};
  border-radius: 80% 20% 72% 28%;
  background:
    radial-gradient(
      circle at 28% 24%,
      rgba(255, 255, 255, 0.85),
      transparent 25%
    ),
    linear-gradient(
      135deg,
      #fff8fc 0%,
      #f7b9d4 48%,
      #d76e9f 100%
    );
  box-shadow:
    0 0 8px rgba(255, 229, 241, 0.65),
    0 4px 9px rgba(108, 50, 94, 0.16);
`;

export const FinalMessageContainer = styled.div`
  position: absolute;
  top: 13%;
  right: 0;
  left: 0;
  z-index: 15;
  width: min(720px, calc(100% - 48px));
  margin: 0 auto;
  padding: 0 8px;
  text-align: center;
  pointer-events: none;
  text-shadow: 0 8px 30px rgba(28, 17, 55, 0.42);

  @media (max-width: 900px) {
    top: 15%;
    width: min(640px, calc(100% - 40px));
  }

  @media (max-width: 700px) {
    top: 17%;
    width: calc(100% - 28px);
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    top: 18%;
    width: calc(100% - 20px);
    padding: 0 5px;
  }

  @media (max-width: 370px) {
    top: 19%;
    width: calc(100% - 16px);
  }
`;

export const FinalMessageDate = styled.p`
  margin-bottom: 14px;
  color: rgba(255, 237, 247, 0.82);
  font-size: clamp(8px, 2.5vw, 11px);
  font-weight: 800;
  line-height: 1.4;
  letter-spacing: clamp(2px, 1vw, 5px);
  text-transform: uppercase;

  @media (max-width: 480px) {
    margin-bottom: 11px;
  }
`;

export const FinalMessageTitle = styled.h2`
  max-width: 100%;
  color: #fffafd;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(29px, 6.8vw, 64px);
  font-weight: 500;
  line-height: 1.04;
  letter-spacing: -1.3px;
  overflow-wrap: break-word;

  span {
    display: block;
    margin-top: 9px;
    color: #ffd0e4;
    font-size: 0.72em;
    font-style: italic;
    font-weight: 400;
    line-height: 1.08;
  }

  @media (max-width: 480px) {
    font-size: clamp(28px, 9vw, 36px);
    letter-spacing: -0.8px;

    span {
      margin-top: 7px;
      font-size: 0.7em;
    }
  }

  @media (max-width: 370px) {
    font-size: 27px;
  }
`;

export const FinalMessageDivider = styled.div`
  display: flex;
  margin: 24px auto 22px;
  align-items: center;
  justify-content: center;
  gap: 11px;
  color: #fff3bd;

  span {
    width: clamp(38px, 9vw, 75px);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 236, 245, 0.75),
      transparent
    );
  }

  strong {
    font-size: 14px;
    font-weight: 400;
    text-shadow:
      0 0 8px rgba(255, 249, 207, 0.9),
      0 0 18px rgba(255, 200, 225, 0.65);
  }

  @media (max-width: 480px) {
    margin: 18px auto 17px;
    gap: 8px;

    strong {
      font-size: 12px;
    }
  }
`;

export const FinalMessageText = styled.p`
  display: flex;
  width: min(520px, 100%);
  margin: 0 auto;
  color: rgba(255, 242, 249, 0.88);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(14px, 2.1vw, 20px);
  line-height: 1.65;
  flex-direction: column;
  gap: 7px;
  overflow-wrap: break-word;

  strong {
    color: #fff9d9;
    font-size: 0.92em;
    font-style: italic;
    font-weight: 400;
    line-height: 1.55;
  }

  @media (max-width: 480px) {
    width: min(300px, 100%);
    font-size: 14px;
    line-height: 1.55;
    gap: 6px;
  }

  @media (max-width: 370px) {
    width: min(270px, 100%);
    font-size: 13px;
  }
`;