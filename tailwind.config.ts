import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu,Cantarell",
        "Helvetica",
        "sans-serif",
      ],
      serif: ["PPEditorialNew"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
