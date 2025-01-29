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
