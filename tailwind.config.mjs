/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 40px rgba(0, 0, 0, 0.12)",
        card: "0 18px 45px rgba(15, 23, 42, 0.22)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.35), transparent 34%), radial-gradient(circle at 80% 0%, rgba(99, 102, 241, 0.3), transparent 28%), radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.24), transparent 34%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
