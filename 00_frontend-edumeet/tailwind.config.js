/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        4: "4",
      },
      borderRadius: {
        half: "50%",
      },
      colors: {
        yellow: "#FFB400",
        p2: "#3C52D9",
        p3: "#C8EA80",
        p4: "#EAEDFF",
        p5: "#FFFFFF",
        s1: "#080D27",
        s2: "#0C1838",
        s3: "#334679",
        s4: "#1959AD",
        s5: "#263466",
        black: {
          DEFAULT: "#1D1D1D",
          100: "#05091D",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["Poppins", "sans-serif"], // Set Poppins as default sans-serif
      },
    },
  },
  plugins: [],
};
