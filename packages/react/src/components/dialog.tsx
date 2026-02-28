import React from "react";
import type { DialogProps } from "@bridge-ui/core/dialog";
import { DialogDefaults } from "@bridge-ui/core/dialog";
import { cn } from "@bridge-ui/utils";

export type { DialogProps };

/**
 * Slot recipe type for Dialog — maps slot names to class strings.
 */
export type DialogSlotClasses = Partial<{
  root: string;
  backdrop: string;
  positioner: string;
  content: string;
  header: string;
  title: string;
  description: string;
  body: string;
  footer: string;
  closeTrigger: string;
}>;

export interface ReactDialogProps extends DialogProps {
  children?: React.ReactNode;
  /**
   * Optional slot recipe from `@bridge-ui/styles/recipes`.
   * Maps each slot name to a class string.
   * If omitted, no default classes are applied.
   */
  slotRecipe?: (props?: Partial<DialogProps>) => DialogSlotClasses;
  /**
   * Per-slot class overrides. Merged on top of `slotRecipe` output.
   */
  classes?: DialogSlotClasses;
  /** Render the dialog title */
  title?: string;
  /** Render a description below the title */
  description?: string;
  /** Footer content (e.g. action buttons) */
  footer?: React.ReactNode;
}

/**
 * BridgeUI React Dialog component.
 *
 * ## Styling modes
 * - **Styled**: Pass `slotRecipe` from `@bridge-ui/styles/recipes`.
 * - **Unstyled / BYO**: Pass `classes` per slot or `className` on the root.
 *
 * @example
 * ```tsx
 * import { dialogSlotRecipe } from "@bridge-ui/styles/recipes";
 * <Dialog open={open} onOpenChange={setOpen} slotRecipe={dialogSlotRecipe} title="Hello">
 *   Content here
 * </Dialog>
 * ```
 */
export const Dialog: React.FC<ReactDialogProps> = ({
  open = DialogDefaults.open,
  onOpenChange,
  hasBackdrop = DialogDefaults.hasBackdrop,
  centered = DialogDefaults.centered,
  scrollBehavior = DialogDefaults.scrollBehavior,
  closeOnEscape = DialogDefaults.closeOnEscape,
  closeOnBackdropClick = DialogDefaults.closeOnBackdropClick,
  role = DialogDefaults.role,
  title,
  description,
  footer,
  children,
  className,
  slotRecipe,
  classes,
}) => {
  const slots = slotRecipe
    ? slotRecipe({ centered, scrollBehavior } as Partial<DialogProps>)
    : ({} as DialogSlotClasses);

  const s = (slot: keyof DialogSlotClasses, extra?: string) =>
    cn(slots[slot], classes?.[slot], extra);

  // Handle Escape key
  React.useEffect(() => {
    if (!open || !closeOnEscape) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange?.(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, closeOnEscape, onOpenChange]);

  if (!open) return null;

  return (
    <div role="presentation" className={s("root", className)}>
      {hasBackdrop && (
        <div
          aria-hidden="true"
          className={s("backdrop")}
          onClick={closeOnBackdropClick ? () => onOpenChange?.(false) : undefined}
        />
      )}
      <div className={s("positioner")}>
        <div
          role={role}
          aria-modal="true"
          aria-label={title}
          className={s("content")}
        >
          {(title || description) && (
            <div className={s("header")}>
              <div>
                {title && <h2 className={s("title")}>{title}</h2>}
                {description && <p className={s("description")}>{description}</p>}
              </div>
              <button
                type="button"
                aria-label="Close dialog"
                className={s("closeTrigger")}
                onClick={() => onOpenChange?.(false)}
              >
                ✕
              </button>
            </div>
          )}
          <div className={s("body")}>{children}</div>
          {footer && <div className={s("footer")}>{footer}</div>}
        </div>
      </div>
    </div>
  );
};

Dialog.displayName = "BridgeUI.Dialog";
