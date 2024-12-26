/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    backgroundImage: {
      'hero-bg': "url('./assets/bg-home-main.png')",
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
    },
  },
};
export const plugins = [];

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
