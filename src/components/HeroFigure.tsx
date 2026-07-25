"use client";

import { motion, useReducedMotion } from "framer-motion";

// Hand-placed points reading as "signal found in noise" — the hero's visual thesis.
// Not real data; a diagram, not a chart, so no axis values are implied.
const POINTS: [number, number][] = [
  [30, 312], [55, 296], [80, 330], [105, 281], [130, 300],
  [155, 259], [180, 276], [205, 244], [230, 262], [255, 219],
  [280, 236], [305, 199], [330, 217], [355, 178], [380, 196],
  [405, 163], [430, 150], [455, 171], [480, 129], [505, 146],
  [530, 109], [555, 126], [580, 94], [605, 101],
];

export default function HeroFigure() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 640 380"
      className="w-full h-auto"
      role="img"
      aria-label="Diagram of a scatter plot with a fitted upward trend line"
    >
      {/* Axis */}
      <line x1="20" y1="345" x2="620" y2="345" stroke="var(--line-strong)" strokeWidth="1" />
      <line x1="20" y1="345" x2="20" y2="55" stroke="var(--line-strong)" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1={20 + i * 150}
          y1="345"
          x2={20 + i * 150}
          y2="350"
          stroke="var(--line-strong)"
          strokeWidth="1"
        />
      ))}

      {/* Fitted trend line */}
      <motion.path
        d="M 20 322 Q 320 230 615 92"
        fill="none"
        stroke="var(--brick)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Scatter points */}
      {POINTS.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={5}
          fill={i % 5 === 0 ? "var(--moss)" : "var(--ink)"}
          fillOpacity={i % 5 === 0 ? 0.75 : 0.35}
          initial={reduceMotion ? { opacity: i % 5 === 0 ? 0.75 : 0.35, scale: 1 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: i % 5 === 0 ? 0.75 : 0.35, scale: 1 }}
          transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.02 * i }}
        />
      ))}

      <text x="20" y="368" fontFamily="var(--font-mono)" fontSize="11" fill="var(--ink-faint)" letterSpacing="1.5">
        FIG. 1 — SIGNAL, FOUND IN NOISE
      </text>
    </svg>
  );
}
