import type { Color, Size, Variant, Radius, BridgeComponentProps } from "../tokens/index.js";
import type { AriaDisabledProps, AriaLabelProps } from "../a11y/index.js";

/**
 * Slot names for the Button component.
 */
export const ButtonSlots = {
  root: "root",
  icon: "icon",
  label: "label",
  spinner: "spinner",
} as const;

export type ButtonSlot = (typeof ButtonSlots)[keyof typeof ButtonSlots];

/**
 * Variant recipe keys for the Button component.
 */
export const ButtonRecipeKeys = {
  color: "color",
  size: "size",
  variant: "variant",
  radius: "radius",
  isLoading: "isLoading",
  isDisabled: "isDisabled",
  isIconOnly: "isIconOnly",
  fullWidth: "fullWidth",
  disableAnimation: "disableAnimation",
} as const;

/**
 * Props contract for the BridgeUI Button component.
 * This is the framework-agnostic specification — aligned with HeroUI conventions.
 */
export interface ButtonProps extends BridgeComponentProps, AriaLabelProps, AriaDisabledProps {
  /** Semantic color scheme */
  color?: Color;
  /** Visual style variant */
  variant?: Variant;
  /** Size of the button */
  size?: Size;
  /** Border radius */
  radius?: Radius;
  /** Whether the button is in a loading state */
  isLoading?: boolean;
  /** Whether the button is disabled */
  isDisabled?: boolean;
  /** Whether the button should display as icon-only (square aspect ratio) */
  isIconOnly?: boolean;
  /** Whether the button should fill its container width */
  fullWidth?: boolean;
  /** Whether to disable ripple effect */
  disableRipple?: boolean;
  /** Whether to disable animations */
  disableAnimation?: boolean;
  /** Content placed before the label */
  startContent?: unknown;
  /** Content placed after the label */
  endContent?: unknown;
  /** Custom spinner element */
  spinner?: unknown;
  /** Spinner placement when loading */
  spinnerPlacement?: "start" | "end";
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
  radius: "md",
  isLoading: false,
  isDisabled: false,
  isIconOnly: false,
  fullWidth: false,
  disableRipple: false,
  disableAnimation: false,
  spinnerPlacement: "start",
  type: "button",
};
