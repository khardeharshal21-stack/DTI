/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        honey: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#B45309',
        },
        brown: {
          800: '#3E2723',
          900: '#1B0000',
        }
      },
      backgroundImage: {
        'honeycomb': "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'69\\' viewBox=\\'0 0 40 69\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 34.5L20 0l20 34.5L20 69z\\' fill=\\'%23F59E0B\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
