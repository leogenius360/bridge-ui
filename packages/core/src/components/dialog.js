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
};
/**
 * Variant recipe keys for the Dialog component.
 */
export const DialogRecipeKeys = {
    size: "size",
    scrollBehavior: "scrollBehavior",
    centered: "centered",
};
/**
 * Default values for DialogProps.
 */
export const DialogDefaults = {
    open: false,
    hasBackdrop: true,
    centered: false,
    scrollBehavior: "outside",
    closeOnEscape: true,
    closeOnBackdropClick: true,
    role: "dialog",
};
//# sourceMappingURL=dialog.js.map