/**
 * Token name registry and typing helpers for BridgeUI.
 * These are string constants — no runtime DOM or CSS-in-JS.
 */

/** All semantic color token names */
export const ColorTokenNames = [
  "default",
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "danger",
] as const;

export type ColorTokenName = (typeof ColorTokenNames)[number];

/** Token name builders */
export const token = {
  /** Returns a CSS variable reference: var(--bui-{name}) */
  ref: (name: string): string => `var(--bui-${name})`,
  /** Returns a raw CSS variable name: --bui-{name} */
  name: (name: string): string => `--bui-${name}`,
  /** Returns a color background token reference */
  colorBg: (color: ColorTokenName): string => `var(--bui-color-${color}-bg)`,
  colorFg: (color: ColorTokenName): string => `var(--bui-color-${color}-fg)`,
  colorBorder: (color: ColorTokenName): string => `var(--bui-color-${color}-border)`,
  colorHoverBg: (color: ColorTokenName): string => `var(--bui-color-${color}-hover-bg)`,
} as const;

/**
 * Theme registry entry.
 */
export interface ThemeEntry {
  name: string;
  cssPath: string;
}

/**
 * Built-in theme registry.
 */
export const themes: ThemeEntry[] = [
  { name: "default", cssPath: "@bridge-ui/tokens/themes/default" },
  { name: "dark", cssPath: "@bridge-ui/tokens/themes/dark" },
];
