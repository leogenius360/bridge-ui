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
 * <Button intent="primary" recipe={buttonRecipe}>Click me</Button>
 *
 * // Unstyled
 * <Button className="my-custom-button">Click me</Button>
 * ```
 */
export interface ReactButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    Omit<ButtonProps, "onClick" | "aria-disabled"> {
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
      intent = ButtonDefaults.intent,
      variant = ButtonDefaults.variant,
      size = ButtonDefaults.size,
      shape = ButtonDefaults.shape,
      loading = ButtonDefaults.loading,
      fullWidth = ButtonDefaults.fullWidth,
      type = ButtonDefaults.type,
      disabled,
      loadingText,
      iconBefore,
      iconAfter,
      className,
      recipe,
      ...htmlProps
    },
    ref,
  ) => {
    const recipeClass = recipe
      ? recipe({ intent, variant, size, shape, loading, disabled: !!disabled, fullWidth })
      : "";

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={cn(recipeClass, className)}
        {...htmlProps}
      >
        {loading ? (
          <>
            <span aria-hidden="true" className="bui-loading-icon" />
            {loadingText ?? children}
          </>
        ) : (
          <>
            {iconBefore ? (
              <span aria-hidden="true" className="bui-icon bui-icon-before">
                {iconBefore as React.ReactNode}
              </span>
            ) : null}
            {children}
            {iconAfter ? (
              <span aria-hidden="true" className="bui-icon bui-icon-after">
                {iconAfter as React.ReactNode}
              </span>
            ) : null}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "BridgeUI.Button";
