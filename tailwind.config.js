/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
        notojp: ["var(--font-notojp)"],
      },
      fontSize: {
        large: "var(--large)",
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
        body: "var(--bady)",
      },
      colors: {
        dark: "var(--foreground-color)",
        light: "var(--background-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        mute: "#a9a9a9",
        Light: "#fcfcfc",
        Dark: "#222",
      },
    },
  },
  plugins: [],
};
