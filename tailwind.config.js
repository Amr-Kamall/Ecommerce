// tailwind.config.js
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lama: "#f35c7a",
      },
      screens: {
        navScreen: "1182px", // Custom breakpoint for extra small screens
        "3xl": "1600px", // Custom breakpoint for very large screens
        xs: "669px",
        xxs: "450px",
      },
    },
  },
  plugins: [],
};

module.exports = config;
