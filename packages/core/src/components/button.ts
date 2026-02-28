import type { Color, Size, Variant, Shape, BridgeComponentProps } from "../tokens/index.js";
import type { AriaDisabledProps, AriaLabelProps } from "../a11y/index.js";

/**
 * Slot names for the Button component.
 */
export const ButtonSlots = {
  root: "root",
  icon: "icon",
  label: "label",
  loadingIcon: "loadingIcon",
} as const;

export type ButtonSlot = (typeof ButtonSlots)[keyof typeof ButtonSlots];

/**
 * Variant recipe keys for the Button component.
 */
export const ButtonRecipeKeys = {
  color: "color",
  size: "size",
  variant: "variant",
  shape: "shape",
  loading: "loading",
  disabled: "disabled",
  fullWidth: "fullWidth",
} as const;

/**
 * Props contract for the BridgeUI Button component.
 * This is the framework-agnostic specification.
 */
export interface ButtonProps extends BridgeComponentProps, AriaLabelProps, AriaDisabledProps {
  /** Semantic color scheme */
  color?: Color;
  /** Visual style variant */
  variant?: Variant;
  /** Size of the button */
  size?: Size;
  /** Shape / border-radius style */
  shape?: Shape;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Loading label for screen readers */
  loadingText?: string;
  /** Whether the button should fill its container width */
  fullWidth?: boolean;
  /** Icon placed before the label */
  iconBefore?: unknown;
  /** Icon placed after the label */
  iconAfter?: unknown;
  /** Native button type attribute */
  type?: "button" | "submit" | "reset";
  /** Click handler */
  onClick?: (event: unknown) => void;
}

/**
 * Default values for ButtonProps.
 */
export const ButtonDefaults: Partial<ButtonProps> = {
  color: "default",
  variant: "solid",
  size: "md",
  shape: "rounded",
  loading: false,
  fullWidth: false,
  type: "button",
};
