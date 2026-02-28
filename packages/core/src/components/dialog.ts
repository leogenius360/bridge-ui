import type { BridgeComponentProps } from "../tokens/index.js";
import type { AriaLabelProps } from "../a11y/index.js";

/**
 * Slot names for the Dialog component.
 */
export const DialogSlots = {
  root: "root",
  backdrop: "backdrop",
  positioner: "positioner",
  content: "content",
  header: "header",
  title: "title",
  description: "description",
  body: "body",
  footer: "footer",
  closeTrigger: "closeTrigger",
} as const;

export type DialogSlot = (typeof DialogSlots)[keyof typeof DialogSlots];

/**
 * Variant recipe keys for the Dialog component.
 */
export const DialogRecipeKeys = {
  size: "size",
  scrollBehavior: "scrollBehavior",
  centered: "centered",
} as const;

/**
 * Props contract for the BridgeUI Dialog component.
 */
export interface DialogProps extends BridgeComponentProps, AriaLabelProps {
  /** Whether the dialog is open */
  open?: boolean;
  /** Controlled open state handler */
  onOpenChange?: (open: boolean) => void;
  /** Whether the dialog renders a backdrop/overlay */
  hasBackdrop?: boolean;
  /** Whether the dialog is centered vertically */
  centered?: boolean;
  /** Scroll behavior when content overflows */
  scrollBehavior?: "inside" | "outside";
  /** Whether pressing Escape closes the dialog */
  closeOnEscape?: boolean;
  /** Whether clicking the backdrop closes the dialog */
  closeOnBackdropClick?: boolean;
  /** ARIA role for the dialog element */
  role?: "dialog" | "alertdialog";
  /** Dialog title (for aria-label if title slot not used) */
  title?: string;
}

/**
 * Default values for DialogProps.
 */
export const DialogDefaults: Partial<DialogProps> = {
  open: false,
  hasBackdrop: true,
  centered: false,
  scrollBehavior: "outside",
  closeOnEscape: true,
  closeOnBackdropClick: true,
  role: "dialog",
};
