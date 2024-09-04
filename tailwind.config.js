/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibmPlexSans: ["IbmPlexSans"],
        microExtendFLF: ["MicroExtendFLF"],
      },
      screens: {
        "lt-1596": { max: "1520px", min: "640px" },
        "bt-827": { min: "827px" },
        "lt-827": { max: "827px" },
        "lt-1024": { max: "1024px" },
      },
    },
  },
  plugins: [],
};
