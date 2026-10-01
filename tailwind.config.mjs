import defaultTheme from "tailwindcss/defaultTheme";

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // Public Sans: headings, navigation, metadata. Literata: reading text.
        sans: ["Public Sans Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Literata Variable", "Georgia", ...defaultTheme.fontFamily.serif],
        mono: defaultTheme.fontFamily.mono,
      },
      colors: {
        // Values live in global.css so light/dark swap in one place.
        paper: token("paper"),
        ink: token("ink"),
        muted: token("muted"),
        rule: token("rule"),
        water: token("water"),
        "water-soft": token("water-soft"),
      },
      maxWidth: {
        measure: "40rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
