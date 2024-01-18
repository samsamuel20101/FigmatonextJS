import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "267px auto", //for sidebar layout
        "sidebar-collapsed": "62px auto", //for collapsed sidebar layout
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("daisyui")],
}
