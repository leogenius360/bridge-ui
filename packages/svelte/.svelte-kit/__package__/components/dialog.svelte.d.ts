import { SvelteComponent } from "svelte";
import type { DialogProps } from "@bridge-ui/core/dialog";
declare const __propDef: {
    props: {
        open?: boolean;
        hasBackdrop?: boolean;
        centered?: boolean;
        scrollBehavior?: "inside" | "outside";
        closeOnEscape?: boolean;
        closeOnBackdropClick?: boolean;
        role?: "dialog" | "alertdialog";
        title?: string | undefined;
        description?: string | undefined;
        /**
           * Optional slot recipe from `@bridge-ui/styles/recipes`.
           */ slotRecipe?: ((props?: Partial<DialogProps>) => Partial<{
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
        }>) | undefined;
        /** Per-slot class overrides */ classes?: Partial<{
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
        class?: string | undefined;
    };
    events: {
        "open-change": CustomEvent<{
            open: boolean;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        footer: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
type DialogProps_ = typeof __propDef.props;
export { DialogProps_ as DialogProps };
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponent<DialogProps_, DialogEvents, DialogSlots> {
}
//# sourceMappingURL=dialog.svelte.d.ts.map