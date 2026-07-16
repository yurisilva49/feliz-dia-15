"use client";

import type { MotionStyle } from "framer-motion";
import { Artwork, SakuraWrapper } from "./styles";

type SakuraSvgProps = {
  style?: MotionStyle;
};

const flowers = [
  // Galho superior
  { x: 52, y: 100, scale: 1.08, rotate: -12 },
  { x: 106, y: 77, scale: 0.92, rotate: 10 },
  { x: 165, y: 75, scale: 0.79, rotate: -8 },
  { x: 224, y: 94, scale: 0.69, rotate: 14 },
  { x: 283, y: 112, scale: 0.57, rotate: -11 },
  { x: 340, y: 103, scale: 0.47, rotate: 18 },
  { x: 403, y: 87, scale: 0.38, rotate: -13 },

  // Ramificação superior
  { x: 134, y: 35, scale: 0.78, rotate: 13 },
  { x: 195, y: 28, scale: 0.65, rotate: -10 },
  { x: 253, y: 43, scale: 0.54, rotate: 17 },
  { x: 302, y: 60, scale: 0.43, rotate: -12 },

  // Galho central
  { x: 57, y: 285, scale: 1, rotate: 11 },
  { x: 114, y: 266, scale: 0.84, rotate: -13 },
  { x: 174, y: 275, scale: 0.72, rotate: 9 },
  { x: 233, y: 303, scale: 0.61, rotate: -9 },
  { x: 289, y: 330, scale: 0.51, rotate: 14 },
  { x: 344, y: 318, scale: 0.42, rotate: -14 },

  // Ramificação central alta
  { x: 144, y: 205, scale: 0.69, rotate: -15 },
  { x: 198, y: 181, scale: 0.58, rotate: 12 },
  { x: 251, y: 182, scale: 0.49, rotate: -9 },

  // Galho inferior
  { x: 48, y: 487, scale: 0.94, rotate: -10 },
  { x: 102, y: 489, scale: 0.79, rotate: 12 },
  { x: 157, y: 514, scale: 0.66, rotate: -13 },
  { x: 207, y: 550, scale: 0.55, rotate: 10 },
  { x: 254, y: 567, scale: 0.45, rotate: -10 },

  // Galho descendente
  { x: 67, y: 668, scale: 0.84, rotate: 12 },
  { x: 113, y: 705, scale: 0.68, rotate: -11 },
  { x: 152, y: 752, scale: 0.55, rotate: 13 },
  { x: 183, y: 804, scale: 0.42, rotate: -8 },
];

const leaves = [
  { x: 83, y: 127, scale: 0.85, rotate: -26 },
  { x: 142, y: 108, scale: 0.74, rotate: 24 },
  { x: 205, y: 118, scale: 0.67, rotate: -17 },
  { x: 267, y: 139, scale: 0.57, rotate: 27 },
  { x: 323, y: 128, scale: 0.49, rotate: -20 },
  { x: 382, y: 111, scale: 0.41, rotate: 22 },

  { x: 159, y: 59, scale: 0.64, rotate: -28 },
  { x: 219, y: 65, scale: 0.55, rotate: 23 },
  { x: 273, y: 78, scale: 0.46, rotate: -22 },

  { x: 90, y: 313, scale: 0.82, rotate: 21 },
  { x: 151, y: 305, scale: 0.72, rotate: -25 },
  { x: 211, y: 327, scale: 0.62, rotate: 25 },
  { x: 268, y: 352, scale: 0.52, rotate: -20 },
  { x: 325, y: 342, scale: 0.44, rotate: 24 },

  { x: 166, y: 229, scale: 0.61, rotate: 24 },
  { x: 221, y: 211, scale: 0.52, rotate: -25 },

  { x: 75, y: 522, scale: 0.78, rotate: -21 },
  { x: 131, y: 537, scale: 0.66, rotate: 25 },
  { x: 183, y: 572, scale: 0.56, rotate: -22 },
  { x: 231, y: 589, scale: 0.47, rotate: 23 },

  { x: 89, y: 702, scale: 0.67, rotate: 23 },
  { x: 134, y: 744, scale: 0.55, rotate: -23 },
  { x: 172, y: 790, scale: 0.45, rotate: 22 },
];

const loosePetals = [
  { x: 437, y: 91, rotate: 24, scale: 1 },
  { x: 468, y: 171, rotate: -31, scale: 0.85 },
  { x: 407, y: 250, rotate: 47, scale: 0.75 },
  { x: 438, y: 346, rotate: -18, scale: 0.9 },
  { x: 369, y: 428, rotate: 32, scale: 0.72 },
  { x: 319, y: 603, rotate: -42, scale: 0.8 },
  { x: 248, y: 784, rotate: 20, scale: 0.7 },
];

export function SakuraSvg({ style }: SakuraSvgProps) {
  return (
    <SakuraWrapper
      style={style}
      initial={{ opacity: 0, x: -55 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.7,
        ease: "easeOut",
      }}
      aria-hidden="true"
    >
      <Artwork
        viewBox="0 0 560 900"
        preserveAspectRatio="xMinYMid meet"
        role="presentation"
      >
        <defs>
          <linearGradient
            id="mainBranchGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#1a1023" />
            <stop offset="28%" stopColor="#6b3b59" />
            <stop offset="65%" stopColor="#442645" />
            <stop offset="100%" stopColor="#201229" />
          </linearGradient>

          <linearGradient
            id="branchHighlight"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          <radialGradient id="petalGradient" cx="36%" cy="24%" r="78%">
            <stop offset="0%" stopColor="#fffafd" />
            <stop offset="28%" stopColor="#ffdce9" />
            <stop offset="66%" stopColor="#f09fc3" />
            <stop offset="100%" stopColor="#c75a8f" />
          </radialGradient>

          <linearGradient id="leafGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#df7eaa" />
            <stop offset="45%" stopColor="#9b527f" />
            <stop offset="100%" stopColor="#493058" />
          </linearGradient>

          <filter
            id="branchShadow"
            x="-35%"
            y="-35%"
            width="190%"
            height="190%"
          >
            <feDropShadow
              dx="8"
              dy="12"
              stdDeviation="9"
              floodColor="#13091e"
              floodOpacity="0.34"
            />
          </filter>

          <filter
            id="flowerGlow"
            x="-65%"
            y="-65%"
            width="230%"
            height="230%"
          >
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="4"
              floodColor="#ff8fc4"
              floodOpacity="0.29"
            />
          </filter>

          <g id="sakuraFlower">
            <ellipse
              cx="0"
              cy="-20"
              rx="14"
              ry="24"
              fill="url(#petalGradient)"
            />

            <ellipse
              cx="0"
              cy="-20"
              rx="14"
              ry="24"
              fill="url(#petalGradient)"
              transform="rotate(72)"
            />

            <ellipse
              cx="0"
              cy="-20"
              rx="14"
              ry="24"
              fill="url(#petalGradient)"
              transform="rotate(144)"
            />

            <ellipse
              cx="0"
              cy="-20"
              rx="14"
              ry="24"
              fill="url(#petalGradient)"
              transform="rotate(216)"
            />

            <ellipse
              cx="0"
              cy="-20"
              rx="14"
              ry="24"
              fill="url(#petalGradient)"
              transform="rotate(288)"
            />

            <circle cx="0" cy="0" r="7" fill="#ffd98f" />
            <circle cx="-3" cy="-2" r="2" fill="#fff5c3" />
          </g>

          <g id="sakuraLeaf">
            <path
              d="M 0 0 C 15 -16 40 -13 54 0 C 37 17 14 18 0 0 Z"
              fill="url(#leafGradient)"
            />

            <path
              d="M 5 0 C 19 0 35 0 48 0"
              fill="none"
              stroke="#f5bdd5"
              strokeOpacity="0.36"
              strokeWidth="1.5"
            />
          </g>
        </defs>

        {/* GALHOS PRINCIPAIS PONTUDOS */}
        <g filter="url(#branchShadow)">
          {/* Galho superior */}
          <path
            d="
              M -95 96
              C 5 99, 82 107, 152 123
              C 225 140, 292 157, 344 151
              C 386 147, 421 125, 455 94

              C 430 126, 394 153, 347 166
              C 287 181, 221 161, 149 145
              C 76 129, 4 119, -95 122
              Z
            "
            fill="url(#mainBranchGradient)"
          />

          {/* Ponta triangular real do galho superior */}
          <path
            d="
              M 344 151
              C 390 143, 427 119, 455 94
              L 445 116
              C 417 141, 384 159, 347 166
              Z
            "
            fill="url(#mainBranchGradient)"
          />

          {/* Galho central */}
          <path
            d="
              M -91 278
              C 2 267, 76 274, 145 298
              C 207 320, 244 355, 295 360
              C 329 364, 359 349, 392 314

              C 369 355, 337 379, 296 383
              C 239 389, 200 348, 139 324
              C 71 297, 2 291, -91 306
              Z
            "
            fill="url(#mainBranchGradient)"
          />

          {/* Ponta triangular real do galho central */}
          <path
            d="
              M 295 360
              C 335 361, 363 341, 392 314
              L 382 336
              C 356 365, 330 380, 296 383
              Z
            "
            fill="url(#mainBranchGradient)"
          />

          {/* Galho inferior */}
          <path
            d="
              M -94 468
              C 3 447, 65 458, 118 490
              C 158 514, 184 548, 227 561
              C 251 569, 275 564, 306 545

              C 284 574, 257 591, 226 586
              C 178 578, 148 542, 109 517
              C 58 485, 0 474, -94 496
              Z
            "
            fill="url(#mainBranchGradient)"
          />

          {/* Ponta triangular real do galho inferior */}
          <path
            d="
              M 227 561
              C 258 571, 282 561, 306 545
              L 296 564
              C 275 583, 252 591, 226 586
              Z
            "
            fill="url(#mainBranchGradient)"
          />

          {/* Galho descendente */}
          <path
            d="
              M -82 625
              C 1 611, 53 624, 84 654
              C 112 681, 123 726, 154 769
              C 166 786, 178 801, 197 817

              C 173 806, 155 792, 139 773
              C 104 732, 95 690, 70 668
              C 42 643, -2 634, -82 650
              Z
            "
            fill="url(#mainBranchGradient)"
          />

          {/* Ponta triangular descendente */}
          <path
            d="
              M 154 769
              C 170 792, 181 805, 197 817
              L 177 808
              C 160 795, 149 783, 139 773
              Z
            "
            fill="url(#mainBranchGradient)"
          />
        </g>

        {/* RAMIFICAÇÕES PONTUDAS */}
        <g fill="url(#mainBranchGradient)">
          {/* Superior ascendente */}
          <path
            d="
              M 88 119
              C 121 82, 165 45, 230 25
              C 193 51, 155 89, 126 126
              Z
            "
          />

          <path
            d="
              M 225 26
              C 271 11, 311 14, 350 31
              C 310 22, 269 23, 230 36
              Z
            "
          />

          {/* Superior horizontal */}
          <path
            d="
              M 158 133
              C 211 105, 272 98, 342 116
              C 281 109, 224 117, 174 143
              Z
            "
          />

          <path
            d="
              M 337 115
              C 375 125, 405 148, 430 189
              C 405 158, 375 138, 341 128
              Z
            "
          />

          {/* Superior externa */}
          <path
            d="
              M 252 155
              C 300 178, 349 181, 407 153
              C 363 185, 309 191, 263 169
              Z
            "
          />

          <path
            d="
              M 402 154
              C 425 140, 445 116, 464 81
              C 450 120, 433 146, 409 164
              Z
            "
          />

          {/* Central alta */}
          <path
            d="
              M 96 287
              C 132 244, 180 208, 247 188
              C 203 216, 162 251, 127 295
              Z
            "
          />

          <path
            d="
              M 241 189
              C 281 176, 321 179, 369 207
              C 324 189, 282 187, 246 201
              Z
            "
          />

          {/* Central horizontal */}
          <path
            d="
              M 170 317
              C 223 302, 279 314, 335 352
              C 282 325, 230 317, 180 329
              Z
            "
          />

          <path
            d="
              M 330 350
              C 363 368, 388 400, 405 443
              C 383 407, 358 381, 329 365
              Z
            "
          />

          {/* Central inferior */}
          <path
            d="
              M 238 360
              C 278 393, 316 411, 365 402
              C 322 420, 278 406, 245 376
              Z
            "
          />

          {/* Inferior superior */}
          <path
            d="
              M 74 480
              C 112 448, 155 435, 211 444
              C 166 448, 127 464, 93 492
              Z
            "
          />

          <path
            d="
              M 204 445
              C 240 449, 272 471, 303 513
              C 272 483, 241 465, 208 459
              Z
            "
          />

          {/* Inferior horizontal */}
          <path
            d="
              M 136 518
              C 181 504, 225 514, 268 548
              C 224 525, 184 520, 145 532
              Z
            "
          />

          <path
            d="
              M 263 547
              C 291 566, 311 596, 321 634
              C 305 601, 286 576, 261 559
              Z
            "
          />

          {/* Descendente lateral */}
          <path
            d="
              M 66 650
              C 106 628, 147 627, 190 651
              C 150 638, 113 640, 77 660
              Z
            "
          />

          <path
            d="
              M 184 650
              C 217 669, 237 700, 244 742
              C 230 706, 210 681, 181 664
              Z
            "
          />

          {/* Descendente final */}
          <path
            d="
              M 103 700
              C 140 693, 174 708, 204 744
              C 173 717, 142 705, 110 711
              Z
            "
          />

          <path
            d="
              M 199 741
              C 222 768, 232 798, 230 837
              C 225 801, 214 773, 196 753
              Z
            "
          />
        </g>

        {/* FLORES */}
        <g filter="url(#flowerGlow)">
          {flowers.map((flower, index) => (
            <use
              key={`flower-${index}`}
              href="#sakuraFlower"
              transform={`
                translate(${flower.x} ${flower.y})
                rotate(${flower.rotate})
                scale(${flower.scale})
              `}
            />
          ))}
        </g>

        {/* FOLHAS */}
        <g>
          {leaves.map((leaf, index) => (
            <use
              key={`leaf-${index}`}
              href="#sakuraLeaf"
              transform={`
                translate(${leaf.x} ${leaf.y})
                rotate(${leaf.rotate})
                scale(${leaf.scale})
              `}
            />
          ))}
        </g>

        {/* PÉTALAS SOLTAS */}
        <g fill="url(#petalGradient)" opacity="0.92">
          {loosePetals.map((petal, index) => (
            <path
              key={`loose-petal-${index}`}
              d="M 0 0 C 8 -9 20 -7 25 1 C 18 14 7 16 0 0 Z"
              transform={`
                translate(${petal.x} ${petal.y})
                rotate(${petal.rotate})
                scale(${petal.scale})
              `}
            />
          ))}
        </g>
      </Artwork>
    </SakuraWrapper>
  );
}