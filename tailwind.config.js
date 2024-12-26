/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    backgroundImage: {
      'hero-bg': "url('./assets/bg-home-main.png')",
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'dmsans': ['DM Sans', 'serif'],
    },
    colors: {
      'customGreen': '#2C2F24',
      'customRed':"#AD343E",
      'customGray':"#DBDFD0"
    },
    activeLink:{
      backgroundColor: '#DBDFD0',
      borderRadius:'9999px',
      color:'customGreen',
    }
  },
};
export const plugins = [];

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
