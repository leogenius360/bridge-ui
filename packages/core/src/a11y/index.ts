/**
 * Accessible label helpers for BridgeUI components.
 * No DOM references — pure type/constant utilities.
 */

/** ARIA roles used by BridgeUI components */
export const AriaRole = {
  button: "button",
  dialog: "dialog",
  alertdialog: "alertdialog",
  menu: "menu",
  menuitem: "menuitem",
  listbox: "listbox",
  option: "option",
  combobox: "combobox",
  tab: "tab",
  tablist: "tablist",
  tabpanel: "tabpanel",
} as const;

export type AriaRole = (typeof AriaRole)[keyof typeof AriaRole];

/** Helper type for components that accept an aria-label or aria-labelledby */
export interface AriaLabelProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

/** Helper type for components that can be disabled */
export interface AriaDisabledProps {
  disabled?: boolean;
  "aria-disabled"?: boolean;
}

/** Helper type for expandable/collapsible components */
export interface AriaExpandableProps {
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
}

/** Helper type for components that can be selected */
export interface AriaSelectedProps {
  "aria-selected"?: boolean;
  "aria-checked"?: boolean;
}

/** Helper type for live region announcements */
export type AriaLive = "off" | "polite" | "assertive";
