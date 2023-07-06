/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "40px",
      margin: "auto",
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "focus-in-slide": {
          "0%": {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
            transform: "scale(0.95)",
            filter: "blur(12px)",
          },
          "100%": {
            opacity: 1,
            clipPath: "inset(0)",
            transform: "scale(1)",
            filter: "blur(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(1em)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
