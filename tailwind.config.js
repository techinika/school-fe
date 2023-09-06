/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ucla-blue": {
          hex: "#3e78b2ff",
          hsl: "hsla(210, 48%, 47%, 1)",
          rgb: "rgba(62, 120, 178, 1)",
        },
        "cobalt-blue": {
          hex: "#004ba8ff",
          hsl: "hsla(213, 100%, 33%, 1)",
          rgb: "rgba(0, 75, 168, 1)",
        },
        "outer-space": {
          hex: "#252525",
          hsl: "hsla(210, 10%, 32%, 1)",
          rgb: "rgba(74, 82, 90, 1)",
        },
        "raisin-black": {
          hex: "#212121",
          hsl: "hsla(214, 9%, 15%, 1)",
          rgb: "rgba(36, 39, 43, 1)",
        },
        black: {
          hex: "#07070aff",
          hsl: "hsla(240, 18%, 3%, 1)",
          rgb: "rgba(7, 7, 10, 1)",
        },
      },
    },
  },
  plugins: [],
};
