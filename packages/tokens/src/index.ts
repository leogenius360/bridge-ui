/**
 * Token name registry and typing helpers for BridgeUI.
 * These are string constants — no runtime DOM or CSS-in-JS.
 */

/** All semantic color intent token names */
export const IntentTokenNames = [
  "default",
  "primary",
  "secondary",
  "surface",
  "destructive",
  "success",
  "warning",
  "info",
] as const;

export type IntentTokenName = (typeof IntentTokenNames)[number];

/** Token name builders */
export const token = {
  /** Returns a CSS variable reference: var(--bui-{name}) */
  ref: (name: string): string => `var(--bui-${name})`,
  /** Returns a raw CSS variable name: --bui-{name} */
  name: (name: string): string => `--bui-${name}`,
  /** Returns an intent color reference */
  intentBg: (intent: IntentTokenName): string => `var(--bui-color-${intent}-bg)`,
  intentFg: (intent: IntentTokenName): string => `var(--bui-color-${intent}-fg)`,
  intentBorder: (intent: IntentTokenName): string => `var(--bui-color-${intent}-border)`,
  intentHoverBg: (intent: IntentTokenName): string => `var(--bui-color-${intent}-hover-bg)`,
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
