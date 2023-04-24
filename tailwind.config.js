/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#FF577F",
        "primary-focus": "#FF427F",
        "primary-negative": "#59323F",
        gray4: "#121214",
        gray3: "#212529",
        gray2: "#343B41",
        gray1: "#868E96",
        gray0: "#F8F9FA",
        sucess: "#3FE864",
        negative: "#E83F5B",
      },
    },
  },
  plugins: [],
};
