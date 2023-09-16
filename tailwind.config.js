/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      foreground: "#fff",
      "landing-page": "#2F1F14",
      nav: "#6F4436",
      footer: " #291600",
      reviews: "#655546",
      discover: "#DBBCA1",
      "discover-foreground": "#DBBCA1",
    },
    extend: {},
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
