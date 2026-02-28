import type { Config } from "tailwindcss";

/**
 * BridgeUI Tailwind preset.
 *
 * Maps `@bridge-ui/tokens` CSS variables to Tailwind theme extensions,
 * so you can use Tailwind utilities that reference the BridgeUI token system.
 *
 * Usage:
 * ```js
 * // tailwind.config.js
 * import { bridgeUIPreset } from "@bridge-ui/styles/preset";
 * export default { presets: [bridgeUIPreset] };
 * ```
 */
export const bridgeUIPreset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        "bui-bg": "var(--bui-bg)",
        "bui-surface": "var(--bui-bg-surface)",
        "bui-fg": "var(--bui-fg)",
        "bui-fg-muted": "var(--bui-fg-muted)",
        "bui-border": "var(--bui-border)",
        primary: {
          DEFAULT: "var(--bui-color-primary-bg)",
          fg: "var(--bui-color-primary-fg)",
          border: "var(--bui-color-primary-border)",
          hover: "var(--bui-color-primary-hover-bg)",
          50: "var(--bui-color-primary-50)",
          100: "var(--bui-color-primary-100)",
          200: "var(--bui-color-primary-200)",
          300: "var(--bui-color-primary-300)",
          400: "var(--bui-color-primary-400)",
          500: "var(--bui-color-primary-500)",
          600: "var(--bui-color-primary-600)",
          700: "var(--bui-color-primary-700)",
          800: "var(--bui-color-primary-800)",
          900: "var(--bui-color-primary-900)",
        },
        secondary: {
          DEFAULT: "var(--bui-color-secondary-bg)",
          fg: "var(--bui-color-secondary-fg)",
          border: "var(--bui-color-secondary-border)",
          hover: "var(--bui-color-secondary-hover-bg)",
        },
        destructive: {
          DEFAULT: "var(--bui-color-destructive-bg)",
          fg: "var(--bui-color-destructive-fg)",
          border: "var(--bui-color-destructive-border)",
          hover: "var(--bui-color-destructive-hover-bg)",
        },
        success: {
          DEFAULT: "var(--bui-color-success-bg)",
          fg: "var(--bui-color-success-fg)",
          border: "var(--bui-color-success-border)",
          hover: "var(--bui-color-success-hover-bg)",
        },
        warning: {
          DEFAULT: "var(--bui-color-warning-bg)",
          fg: "var(--bui-color-warning-fg)",
          border: "var(--bui-color-warning-border)",
          hover: "var(--bui-color-warning-hover-bg)",
        },
        info: {
          DEFAULT: "var(--bui-color-info-bg)",
          fg: "var(--bui-color-info-fg)",
          border: "var(--bui-color-info-border)",
          hover: "var(--bui-color-info-hover-bg)",
        },
      },
      fontFamily: {
        sans: ["var(--bui-font-family-sans)"],
        mono: ["var(--bui-font-family-mono)"],
      },
      borderRadius: {
        "bui-sm": "var(--bui-radius-sm)",
        "bui-md": "var(--bui-radius-md)",
        "bui-lg": "var(--bui-radius-lg)",
        "bui-xl": "var(--bui-radius-xl)",
        "bui-full": "var(--bui-radius-full)",
      },
      boxShadow: {
        "bui-sm": "var(--bui-shadow-sm)",
        "bui-md": "var(--bui-shadow-md)",
        "bui-lg": "var(--bui-shadow-lg)",
        "bui-xl": "var(--bui-shadow-xl)",
      },
      transitionDuration: {
        bui: "var(--bui-transition-duration)",
      },
    },
  },
  plugins: [],
};
