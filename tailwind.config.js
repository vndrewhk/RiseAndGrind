/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes: {
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(100px)" },
          "50%": { transform: "translateY(-20px)" },
          "80%": { transform: "translateY(10px)" },

          "100%": { opacity: 1, transform: "translate(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          30: { opacity: 0.5 },
          "50%": { opacity: 0.7 },
          "80%": { opacity: 0.9 },

          "100%": { opacity: 1 },
        },
      },
      animation: {
        "slide-up": "slideUp 1s ease-out",
        "fade-in": "fadeIn 1s ease-in",
      },
    },
  },
  plugins: [],
};
