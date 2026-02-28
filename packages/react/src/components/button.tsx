import React from "react";
import type { ButtonProps } from "@bridge-ui/core/button";
import { ButtonDefaults } from "@bridge-ui/core/button";
import { cn } from "@bridge-ui/utils";

export type { ButtonProps };

/**
 * BridgeUI React Button component.
 *
 * ## Styling modes
 * - **Styled** (default): Pass a `recipe` prop with a class recipe from `@bridge-ui/styles/recipes`.
 * - **Unstyled / BYO**: Pass `className` directly and omit `recipe`.
 *
 * @example
 * ```tsx
 * // Styled
 * import { buttonRecipe } from "@bridge-ui/styles/recipes";
 * <Button color="primary" recipe={buttonRecipe}>Click me</Button>
 *
 * // Unstyled
 * <Button className="my-custom-button">Click me</Button>
 * ```
 */
export interface ReactButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "color" | "disabled">,
    Omit<ButtonProps, "onClick" | "aria-disabled" | "disabled"> {
  children?: React.ReactNode;
  /**
   * Optional class recipe from `@bridge-ui/styles/recipes`.
   * If omitted, no default classes are applied — you bring your own styles.
   */
  recipe?: (props?: Partial<ButtonProps>) => string;
}

export const Button = React.forwardRef<HTMLButtonElement, ReactButtonProps>(
  (
    {
      children,
      color = ButtonDefaults.color ?? "default",
      variant = ButtonDefaults.variant,
      size = ButtonDefaults.size,
      radius = ButtonDefaults.radius,
      isLoading = ButtonDefaults.isLoading,
      isDisabled: isDisabledProp = ButtonDefaults.isDisabled,
      isIconOnly = ButtonDefaults.isIconOnly,
      fullWidth = ButtonDefaults.fullWidth,
      disableRipple = ButtonDefaults.disableRipple,
      disableAnimation = ButtonDefaults.disableAnimation,
      type = ButtonDefaults.type,
      startContent,
      endContent,
      spinner,
      spinnerPlacement = ButtonDefaults.spinnerPlacement,
      className,
      recipe,
      ...htmlProps
    },
    ref,
  ) => {
    const recipeClass = recipe
      ? recipe({ color, variant, size, radius, isLoading, isDisabled: !!isDisabledProp, isIconOnly, fullWidth, disableAnimation })
      : "";

    const isDisabled = isDisabledProp || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        className={cn(recipeClass, className)}
        {...htmlProps}
      >
        {isLoading && spinnerPlacement === "start" ? (
          spinner ? (
            <span aria-hidden="true">{spinner as React.ReactNode}</span>
          ) : (
            <span aria-hidden="true" className="bui-spinner" />
          )
        ) : startContent ? (
          <span aria-hidden="true" className="bui-icon bui-start-content">
            {startContent as React.ReactNode}
          </span>
        ) : null}
        {children}
        {isLoading && spinnerPlacement === "end" ? (
          spinner ? (
            <span aria-hidden="true">{spinner as React.ReactNode}</span>
          ) : (
            <span aria-hidden="true" className="bui-spinner" />
          )
        ) : endContent ? (
          <span aria-hidden="true" className="bui-icon bui-end-content">
            {endContent as React.ReactNode}
          </span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = "BridgeUI.Button";
