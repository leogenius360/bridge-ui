import { SvelteComponent } from "svelte";
import type { ButtonProps } from "@bridge-ui/core/button";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: import("@bridge-ui/core/tokens").Color | undefined;
        variant?: import("@bridge-ui/core/tokens").Variant | undefined;
        size?: import("@bridge-ui/core/tokens").Size | undefined;
        shape?: import("@bridge-ui/core/tokens").Shape | undefined;
        loading?: boolean | undefined;
        loadingText?: string | undefined | undefined;
        fullWidth?: boolean | undefined;
        disabled?: boolean | undefined;
        type?: "button" | "submit" | "reset" | undefined;
        recipe?: ((props?: Partial<ButtonProps>) => string) | undefined | undefined;
        class?: string | undefined | undefined;
    };
    events: {
        click: PointerEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        'icon-before': {};
        'icon-after': {};
    };
    exports?: undefined;
    bindings?: undefined;
};
type ButtonProps_ = typeof __propDef.props;
export { ButtonProps_ as ButtonProps };
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps_, ButtonEvents, ButtonSlots> {
}
//# sourceMappingURL=button.svelte.d.ts.map