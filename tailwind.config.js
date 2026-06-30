/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
        dark: "#1E293B",
      },
    },
  },
  plugins: [],
};