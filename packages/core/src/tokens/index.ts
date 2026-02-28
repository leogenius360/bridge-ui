/**
 * BridgeUI semantic intent values.
 * These map to design tokens and are used across all frameworks.
 */
export type Intent =
  | "default"
  | "primary"
  | "secondary"
  | "surface"
  | "destructive"
  | "success"
  | "warning"
  | "info";

/**
 * BridgeUI size values.
 */
export type Size = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * BridgeUI visual appearance/variant values.
 */
export type Variant = "solid" | "outline" | "ghost" | "subtle" | "link";

/**
 * BridgeUI shape values.
 */
export type Shape = "square" | "rounded" | "pill" | "circle";

/**
 * Common props shared by all BridgeUI components.
 */
export interface BridgeComponentProps {
  /** Override class(es) applied to the root element */
  class?: string;
  /** Additional class(es) to merge with default classes */
  className?: string;
}
