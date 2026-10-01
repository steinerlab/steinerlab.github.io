import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
        display: ["Space Grotesk", "Geist Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        abyss: "#050b18", // page background (dark)
        hull: "#0b1526", // card / surface (dark)
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
