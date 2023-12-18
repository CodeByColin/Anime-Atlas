export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light: "#F9F6EE",
        neon: {
          DEFAULT: "#3bf",
          dark: "#39f",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
