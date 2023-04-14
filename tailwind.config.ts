import { type Config } from "tailwindcss";

export default {
  daisyui: {
    themes: ["night", "winter"],
  },
  // darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config;
