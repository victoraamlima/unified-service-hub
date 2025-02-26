import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "460px",
        "2sm": "640px",
        md: "768px",
        "2md": "880px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1600px",
      },
    },
    colors: {
      "blue1": "rgba(27, 31, 38, 0.72)",
      "blue2": "rgba(0, 122, 255, 0.15)",
      "blue3": "#2D3748",
      "blue4": "#4F378B",
      "blue5": "#007AFF",
      "blue6": "#A0AEC0",
      "white1": "#FFFFFF",
      "white2": "#EBEDF0",
      "white3": "#FAFAFA",
      "green1": "#34C759",
      "green2": "#14AE5C",
      "green3": "#009951",
      "yellow1": "#FFCC00",
      "orange1": "#FF9500",
      "red1": "#FF3B30",
      "black1": "#000000",
      "black2": "#1E1E1E",
      "black3": "#8E8E93"
    }
  },
  plugins: [
    plugin(function ({ addVariant, e, theme, postcss }) {
      const screens = theme("screens");
      Object.keys(screens).forEach((screen) => {
        const size = screens[screen];
        const maxMediaQuery = `(max-width: ${size})`;

        addVariant(`max-${screen}`, ({ container, separator }) => {
          const rule = postcss.atRule({ name: "media", params: maxMediaQuery });
          rule.append(container.nodes);
          container.append(rule);
          rule.walkRules((rule) => {
            rule.selector = `.${e(
              `max-${screen}${separator}${rule.selector.slice(1)}`
            )}`;
          });
        });
      });
    }),
  ],
} satisfies Config;
