/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config
  daisyui: {
    themes: ["aqua"],
    base: true,
    styled: true,
    prefix: ""
  }
}

