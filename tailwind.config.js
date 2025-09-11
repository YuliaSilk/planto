/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        footer: "var(--footer)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
         backgroundImage: {
      'border-gradient': 'linear-gradient(90deg, #50790B 0%, rgba(226,233,215,0.16) 29%, rgba(255,255,255,0) 49%, rgba(231,237,222,0.14) 69%, #50790B 100%)',
    },
    },
  },
  plugins: [],
};

export default config;