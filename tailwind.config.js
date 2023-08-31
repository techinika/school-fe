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
        "chefchaouen-blue": "#4392f1ff",
        "dark-blue": "00487c",
        "text-color": "#3e6680",
        "lavender-web": "#e3ebffff",
        "alice-blue": "#e7f0ffff",
        vermilion: "#dc493aff",
      },
    },
  },
  plugins: [],
};
