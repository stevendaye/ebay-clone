import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        MarketSansRegular: "MarketSansRegular",
        MarketSansSemiBold: "MarketSansSemiBold",
      },
      screens: {
        "1010px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".position-unset-important": {
          position: "unset !important",
        },
        ".w-auto-important": {
          width: "auto !important",
        },
        ".h-auto-important": {
          height: "auto-important",
        },
        ".overflow-clip-margin": {
          "overflow-clip-margin": "content-box",
        },
        ".overflow-clip": {
          overflow: "clip",
        },
      });
    },
    lineClamp,
  ],
};
