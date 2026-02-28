// Types + contracts
export type { Color, Size, Variant, Shape, BridgeComponentProps } from "./tokens/index.js";

// A11y helpers
export type {
  AriaLabelProps,
  AriaDisabledProps,
  AriaExpandableProps,
  AriaSelectedProps,
  AriaLive,
} from "./a11y/index.js";
export { AriaRole } from "./a11y/index.js";
export type { AriaRole as AriaRoleType } from "./a11y/index.js";

// Component contracts
export type { ButtonSlot, ButtonProps } from "./components/button.js";
export { ButtonSlots, ButtonRecipeKeys, ButtonDefaults } from "./components/button.js";

export type { DialogSlot, DialogProps } from "./components/dialog.js";
export { DialogSlots, DialogRecipeKeys, DialogDefaults } from "./components/dialog.js";

// Recipe types
export type {
  RecipeFn,
  ClassRecipeFn,
  SlotRecipeFn,
  VariantMap,
  ButtonRecipeProps,
  DialogRecipeProps,
} from "./recipes/index.js";
