import type { BridgeComponentProps } from "../tokens/index.js";
import type { AriaLabelProps } from "../a11y/index.js";
/**
 * Slot names for the Dialog component.
 */
export declare const DialogSlots: {
    readonly root: "root";
    readonly backdrop: "backdrop";
    readonly positioner: "positioner";
    readonly content: "content";
    readonly header: "header";
    readonly title: "title";
    readonly description: "description";
    readonly body: "body";
    readonly footer: "footer";
    readonly closeTrigger: "closeTrigger";
};
export type DialogSlot = (typeof DialogSlots)[keyof typeof DialogSlots];
/**
 * Variant recipe keys for the Dialog component.
 */
export declare const DialogRecipeKeys: {
    readonly size: "size";
    readonly scrollBehavior: "scrollBehavior";
    readonly centered: "centered";
};
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
export declare const DialogDefaults: Partial<DialogProps>;
//# sourceMappingURL=dialog.d.ts.map