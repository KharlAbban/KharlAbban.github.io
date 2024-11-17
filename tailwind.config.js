/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lt-theme-primary": "#f6f6f6",
        "lt-theme-secondary": "#D8D8D8",
        "lt-prim-text-color": "#07090F",
        "lt-sec-text-color": "#F6F6F6",
        "lt-comp-bg": "#185177",
        "lt-sec-bg": "#f07605",
        "hover-bg": "#121829",
        "text-constant": "#F6F6F6",

        "dt-theme-primary": "#07090F",
        "dt-theme-secondary": "#13192A",
        "dt-prim-text-color": "#F6F6F6",
        "dt-sec-text-color": "#07090F",
        "dt-comp-bg": "#EF7706",
        "dt-sec-bg": "#185177",
        "dt-nav-bg": "#171213"
      },
      fontFamily: {
        "josefin": "Josefin Sans",
        "ribeye": "Ribeye Marrow"
      }
    },
  },
  plugins: []
}

