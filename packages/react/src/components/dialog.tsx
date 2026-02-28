import React from "react";
import {
  DialogRoot,
  DialogBackdrop,
  DialogPositioner,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
} from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
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
 * BridgeUI React Dialog component — powered by Ark UI / Zag.js.
 *
 * Uses Ark UI's Dialog primitives for accessible, headless dialog behavior
 * (focus trap, scroll lock, Escape key, backdrop click) while BridgeUI
 * provides the styling layer via `slotRecipe` and `classes` props.
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

  return (
    <DialogRoot
      open={open}
      onOpenChange={(details) => onOpenChange?.(details.open)}
      closeOnEscape={closeOnEscape}
      closeOnInteractOutside={closeOnBackdropClick}
      role={role}
      lazyMount
      unmountOnExit
    >
      <Portal>
        {hasBackdrop && <DialogBackdrop className={s("backdrop")} />}
        <DialogPositioner className={s("positioner")}>
          <DialogContent className={s("content", className)}>
            {(title || description) && (
              <div className={s("header")}>
                <div>
                  {title && (
                    <DialogTitle className={s("title")}>{title}</DialogTitle>
                  )}
                  {description && (
                    <DialogDescription className={s("description")}>
                      {description}
                    </DialogDescription>
                  )}
                </div>
                <DialogCloseTrigger className={s("closeTrigger")} aria-label="Close dialog">
                  ✕
                </DialogCloseTrigger>
              </div>
            )}
            <div className={s("body")}>{children}</div>
            {footer && <div className={s("footer")}>{footer}</div>}
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
};

Dialog.displayName = "BridgeUI.Dialog";
