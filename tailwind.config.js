// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['"Space Grotesk"', ...fontFamily.sans],
        },
        // ↓↓↓ Ajoutez ce bloc de couleurs ↓↓↓
        colors: {
            'text-primary': 'rgb(var(--text-primary))',
            'text-secondary': 'rgb(var(--text-secondary))',
            'accent': 'rgb(var(--text-accent))',
            'border-color': 'var(--border-color)',
            'card-bg': 'var(--card-bg)',
            'modal-bg': 'var(--modal-bg)',
        }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};