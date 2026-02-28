import type { Intent, Size, Variant, Shape, BridgeComponentProps } from "../tokens/index.js";
import type { AriaDisabledProps, AriaLabelProps } from "../a11y/index.js";
/**
 * Slot names for the Button component.
 */
export declare const ButtonSlots: {
    readonly root: "root";
    readonly icon: "icon";
    readonly label: "label";
    readonly loadingIcon: "loadingIcon";
};
export type ButtonSlot = (typeof ButtonSlots)[keyof typeof ButtonSlots];
/**
 * Variant recipe keys for the Button component.
 */
export declare const ButtonRecipeKeys: {
    readonly intent: "intent";
    readonly size: "size";
    readonly variant: "variant";
    readonly shape: "shape";
    readonly loading: "loading";
    readonly disabled: "disabled";
    readonly fullWidth: "fullWidth";
};
/**
 * Props contract for the BridgeUI Button component.
 * This is the framework-agnostic specification.
 */
export interface ButtonProps extends BridgeComponentProps, AriaLabelProps, AriaDisabledProps {
    /** Semantic intent controlling color scheme */
    intent?: Intent;
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
export declare const ButtonDefaults: Partial<ButtonProps>;
//# sourceMappingURL=button.d.ts.map