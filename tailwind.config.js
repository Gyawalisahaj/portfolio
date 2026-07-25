/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "var(--paper)",
          raised: "var(--paper-raised)",
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          faint: "var(--ink-faint)",
        },
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        brick: {
          DEFAULT: "var(--brick)",
          dark: "var(--brick-dark)",
          tint: "var(--brick-tint)",
        },
        moss: {
          DEFAULT: "var(--moss)",
          tint: "var(--moss-tint)",
        },
        indigo: {
          DEFAULT: "var(--indigo)",
          tint: "var(--indigo-tint)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
