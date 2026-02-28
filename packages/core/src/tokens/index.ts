/**
 * BridgeUI semantic color values.
 * These map to design tokens and are used across all frameworks.
 */
export type Color =
  | "default"
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "danger";

/**
 * BridgeUI size values.
 */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * BridgeUI visual appearance/variant values.
 */
export type Variant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";

/**
 * BridgeUI radius values.
 */
export type Radius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

/**
 * Common props shared by all BridgeUI components.
 */
export interface BridgeComponentProps {
  /** Override class(es) applied to the root element */
  class?: string;
  /** Additional class(es) to merge with default classes */
  className?: string;
}
