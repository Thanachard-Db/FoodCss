/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ['./templates/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        angsana: ["Angsana New"],
        athiti: ["Athiti"],
        sarabun:["Sarabun"],
        mitr:["Mitr"],
        prompt:["Prompt"]
      }
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
}

