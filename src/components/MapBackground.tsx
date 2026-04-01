import { useEffect, useRef } from "react";

/**
 * Декоративный фон: упрощённые контуры Беларуси и России
 * + анимированный самолёт вдоль маршрута Минск → Москва
 */
export default function MapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <svg
        viewBox="0 0 1200 700"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Градиент фона */}
          <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="hsl(217,91%,60%)" stopOpacity="0.07" />
            <stop offset="100%" stopColor="hsl(217,91%,60%)" stopOpacity="0" />
          </radialGradient>

          {/* Свечение вокруг маршрута */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Мягкое свечение для самолёта */}
          <filter id="planeglow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Тире для маршрута */}
          <marker id="routeDot" viewBox="0 0 4 4" refX="2" refY="2" markerWidth="4" markerHeight="4">
            <circle cx="2" cy="2" r="1.5" fill="hsl(217,91%,70%)" opacity="0.6" />
          </marker>

          {/* Маска для плавного появления контуров снизу */}
          <linearGradient id="maskGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="85%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fadeMask">
            <rect width="1200" height="700" fill="url(#maskGrad)" />
          </mask>
        </defs>

        {/* Фоновое свечение */}
        <rect width="1200" height="700" fill="url(#bgGlow)" />

        {/* ─── Группа карт (упрощённые контуры) ──────────────────── */}
        <g mask="url(#fadeMask)" opacity="0.55">

          {/* === РОССИЯ (очень упрощённый западный контур) === */}
          <path
            d="
              M 660 30
              L 720 28
              L 790 35
              L 860 50
              L 930 75
              L 990 110
              L 1050 155
              L 1100 195
              L 1140 235
              L 1170 270
              L 1190 305
              L 1195 340
              L 1185 380
              L 1165 415
              L 1135 445
              L 1100 470
              L 1060 490
              L 1010 505
              L 960 515
              L 900 520
              L 840 518
              L 780 510
              L 720 498
              L 665 485
              L 615 470
              L 575 455
              L 545 438
              L 520 418
              L 500 395
              L 490 370
              L 493 345
              L 505 320
              L 523 297
              L 545 278
              L 567 262
              L 585 246
              L 592 230
              L 590 215
              L 582 200
              L 568 185
              L 552 172
              L 536 158
              L 522 140
              L 515 120
              L 517 100
              L 528 82
              L 545 66
              L 565 53
              L 590 41
              L 620 33
              Z
            "
            fill="hsl(217,60%,50%)"
            fillOpacity="0.06"
            stroke="hsl(217,91%,65%)"
            strokeWidth="1"
            strokeOpacity="0.35"
          />

          {/* Метка России */}
          <text
            x="830"
            y="300"
            fontSize="13"
            fontFamily="sans-serif"
            letterSpacing="3"
            fill="hsl(217,91%,75%)"
            fillOpacity="0.45"
            textAnchor="middle"
          >
            РОССИЯ
          </text>

          {/* === БЕЛАРУСЬ (упрощённый контур) === */}
          <path
            d="
              M 390 295
              L 420 278
              L 455 268
              L 490 265
              L 518 270
              L 540 282
              L 555 300
              L 560 322
              L 558 345
              L 548 365
              L 530 382
              L 507 393
              L 480 398
              L 452 396
              L 426 386
              L 406 370
              L 393 350
              L 388 328
              Z
            "
            fill="hsl(217,60%,55%)"
            fillOpacity="0.1"
            stroke="hsl(217,91%,70%)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />

          {/* Метка Беларуси */}
          <text
            x="475"
            y="338"
            fontSize="9"
            fontFamily="sans-serif"
            letterSpacing="2"
            fill="hsl(217,91%,80%)"
            fillOpacity="0.55"
            textAnchor="middle"
          >
            БЕЛАРУСЬ
          </text>

          {/* Граница РБ—РФ (пунктир) */}
          <line
            x1="553"
            y1="270"
            x2="555"
            y2="398"
            stroke="hsl(217,91%,70%)"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="4 5"
          />

          {/* Точки городов */}
          {/* Минск */}
          <circle cx="471" cy="333" r="4" fill="hsl(217,91%,70%)" fillOpacity="0.8" filter="url(#glow)" />
          <circle cx="471" cy="333" r="8" fill="none" stroke="hsl(217,91%,70%)" strokeWidth="0.8" strokeOpacity="0.4" />
          <text x="471" y="322" fontSize="8" fontFamily="sans-serif" fill="hsl(217,91%,85%)" fillOpacity="0.7" textAnchor="middle">Минск</text>

          {/* Москва */}
          <circle cx="710" cy="270" r="5" fill="hsl(217,91%,75%)" fillOpacity="0.85" filter="url(#glow)" />
          <circle cx="710" cy="270" r="10" fill="none" stroke="hsl(217,91%,70%)" strokeWidth="0.8" strokeOpacity="0.35" />
          <text x="710" y="258" fontSize="8" fontFamily="sans-serif" fill="hsl(217,91%,85%)" fillOpacity="0.7" textAnchor="middle">Москва</text>

          {/* Санкт-Петербург */}
          <circle cx="680" cy="175" r="3.5" fill="hsl(217,91%,70%)" fillOpacity="0.6" />
          <text x="680" y="165" fontSize="7" fontFamily="sans-serif" fill="hsl(217,91%,80%)" fillOpacity="0.5" textAnchor="middle">С-Петербург</text>

          {/* Маршрутная линия Минск → Москва (пунктир) */}
          <path
            d="M 471 333 Q 590 240 710 270"
            fill="none"
            stroke="hsl(217,91%,70%)"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="6 5"
          />

          {/* Маршрутная линия Москва → Санкт-Петербург */}
          <path
            d="M 710 270 Q 695 220 680 175"
            fill="none"
            stroke="hsl(217,91%,70%)"
            strokeWidth="0.8"
            strokeOpacity="0.25"
            strokeDasharray="5 6"
          />

          {/* Маршрутная линия Москва → Краснодар */}
          <path
            d="M 710 270 Q 740 370 770 440"
            fill="none"
            stroke="hsl(217,91%,70%)"
            strokeWidth="0.8"
            strokeOpacity="0.2"
            strokeDasharray="5 6"
          />

          {/* Маршрутная линия Москва → Казань */}
          <path
            d="M 710 270 Q 800 265 870 255"
            fill="none"
            stroke="hsl(217,91%,70%)"
            strokeWidth="0.8"
            strokeOpacity="0.2"
            strokeDasharray="5 6"
          />

          {/* Маршрутная линия Минск → Гродно */}
          <path
            d="M 471 333 Q 435 315 408 305"
            fill="none"
            stroke="hsl(217,91%,70%)"
            strokeWidth="0.7"
            strokeOpacity="0.2"
            strokeDasharray="4 6"
          />

          {/* Город: Краснодар */}
          <circle cx="770" cy="440" r="3" fill="hsl(217,91%,70%)" fillOpacity="0.5" />
          <text x="770" y="430" fontSize="7" fontFamily="sans-serif" fill="hsl(217,91%,85%)" fillOpacity="0.45" textAnchor="middle">Краснодар</text>

          {/* Город: Казань */}
          <circle cx="870" cy="255" r="3" fill="hsl(217,91%,70%)" fillOpacity="0.5" />
          <text x="870" y="245" fontSize="7" fontFamily="sans-serif" fill="hsl(217,91%,85%)" fillOpacity="0.45" textAnchor="middle">Казань</text>

          {/* Город: Гродно */}
          <circle cx="408" cy="305" r="2.5" fill="hsl(217,91%,70%)" fillOpacity="0.45" />
          <text x="408" y="296" fontSize="6.5" fontFamily="sans-serif" fill="hsl(217,91%,85%)" fillOpacity="0.4" textAnchor="middle">Гродно</text>

          {/* Город: Гомель (РБ) */}
          <circle cx="510" cy="390" r="2.5" fill="hsl(217,91%,70%)" fillOpacity="0.45" />
          <text x="510" y="381" fontSize="6.5" fontFamily="sans-serif" fill="hsl(217,91%,85%)" fillOpacity="0.4" textAnchor="middle">Гомель</text>

          {/* Маршрутная линия Минск → Гомель */}
          <path
            d="M 471 333 Q 492 362 510 390"
            fill="none"
            stroke="hsl(217,91%,70%)"
            strokeWidth="0.7"
            strokeOpacity="0.18"
            strokeDasharray="4 6"
          />

          {/* Сетка (лёгкая) */}
          {[100, 200, 300, 400, 500, 600].map((y) => (
            <line
              key={`h${y}`}
              x1="300" y1={y} x2="1200" y2={y}
              stroke="hsl(217,91%,60%)"
              strokeWidth="0.3"
              strokeOpacity="0.08"
            />
          ))}
          {[350, 450, 550, 650, 750, 850, 950, 1050, 1150].map((x) => (
            <line
              key={`v${x}`}
              x1={x} y1="0" x2={x} y2="700"
              stroke="hsl(217,91%,60%)"
              strokeWidth="0.3"
              strokeOpacity="0.08"
            />
          ))}
        </g>

        {/* ─── Анимированный самолёт ──────────────────────────────── */}
        <g filter="url(#planeglow)">
          {/* Самолёт движется по кривой Минск → Москва */}
          <path
            id="flightPath"
            d="M 471 333 Q 590 230 710 270"
            fill="none"
          />

          {/* Иконка самолёта (SVG-путь) */}
          <g id="plane">
            <animateMotion
              dur="6s"
              repeatCount="indefinite"
              keyTimes="0;0.1;0.9;1"
              keyPoints="0;0;1;1"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
              rotate="auto"
            >
              <mpath href="#flightPath" />
            </animateMotion>

            {/* Корпус — нос вправо (направление движения) */}
            <path
              d="M 14 0 C 8 -3 -8 -3 -14 0 C -8 3 8 3 14 0 Z"
              fill="hsl(217,91%,80%)"
              fillOpacity="0.9"
            />
            {/* Крылья — растут от центра корпуса вперёд */}
            <path
              d="M 2 0 L -5 -11 L -9 -10 L -3 0 Z"
              fill="hsl(217,91%,85%)"
              fillOpacity="0.85"
            />
            <path
              d="M 2 0 L -5 11 L -9 10 L -3 0 Z"
              fill="hsl(217,91%,85%)"
              fillOpacity="0.85"
            />
            {/* Хвостовое оперение */}
            <path
              d="M -14 0 L -10 -5 L -8 -4 L -10 0 Z"
              fill="hsl(217,91%,80%)"
              fillOpacity="0.85"
            />

            {/* Шлейф сзади */}
            <line
              x1="-14" y1="0" x2="-30" y2="1"
              stroke="hsl(217,91%,80%)"
              strokeWidth="1"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
          </g>
        </g>

        {/* Нижний градиент-угасание */}
        <rect
          width="1200" height="200"
          y="500"
          fill="url(#fadeBottom)"
        />
        <defs>
          <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(222,20%,7%)" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(222,20%,7%)" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}