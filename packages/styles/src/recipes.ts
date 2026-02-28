import { cn } from "@bridge-ui/utils";
import type { ButtonRecipeProps, DialogRecipeProps } from "@bridge-ui/core/recipes";
import type { SlotRecipeFn, ClassRecipeFn } from "@bridge-ui/core/recipes";
import type { ButtonSlot } from "@bridge-ui/core/button";
import type { DialogSlot } from "@bridge-ui/core/dialog";

// ─── Button recipe ─────────────────────────────────────────────────────────

const buttonBase =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const buttonColorVariants: Record<string, Record<string, string>> = {
  solid: {
    default: "bg-[var(--bui-color-default-bg)] text-[var(--bui-color-default-fg)] hover:bg-[var(--bui-color-default-hover-bg)] border border-[var(--bui-color-default-border)]",
    primary: "bg-[var(--bui-color-primary-bg)] text-[var(--bui-color-primary-fg)] hover:bg-[var(--bui-color-primary-hover-bg)]",
    secondary: "bg-[var(--bui-color-secondary-bg)] text-[var(--bui-color-secondary-fg)] hover:bg-[var(--bui-color-secondary-hover-bg)]",
    danger: "bg-[var(--bui-color-danger-bg)] text-[var(--bui-color-danger-fg)] hover:bg-[var(--bui-color-danger-hover-bg)]",
    success: "bg-[var(--bui-color-success-bg)] text-[var(--bui-color-success-fg)] hover:bg-[var(--bui-color-success-hover-bg)]",
    warning: "bg-[var(--bui-color-warning-bg)] text-[var(--bui-color-warning-fg)] hover:bg-[var(--bui-color-warning-hover-bg)]",
  },
  bordered: {
    default: "border border-[var(--bui-color-default-border)] text-[var(--bui-color-default-fg)] bg-transparent hover:bg-[var(--bui-color-default-hover-bg)]",
    primary: "border border-[var(--bui-color-primary-border)] text-[var(--bui-color-primary-bg)] bg-transparent hover:bg-[var(--bui-color-primary-50)]",
    secondary: "border border-[var(--bui-color-secondary-border)] text-[var(--bui-color-secondary-bg)] bg-transparent hover:bg-[var(--bui-color-secondary-50)]",
    danger: "border border-[var(--bui-color-danger-border)] text-[var(--bui-color-danger-bg)] bg-transparent hover:bg-[var(--bui-color-danger-50)]",
    success: "border border-[var(--bui-color-success-border)] text-[var(--bui-color-success-bg)] bg-transparent hover:bg-[var(--bui-color-success-50)]",
    warning: "border border-[var(--bui-color-warning-border)] text-[var(--bui-color-warning-bg)] bg-transparent hover:bg-[var(--bui-color-warning-50)]",
  },
  light: {
    default: "text-[var(--bui-color-default-fg)] bg-transparent hover:bg-[var(--bui-color-default-hover-bg)]",
    primary: "text-[var(--bui-color-primary-bg)] bg-transparent hover:bg-[var(--bui-color-primary-50)]",
    secondary: "text-[var(--bui-color-secondary-bg)] bg-transparent hover:bg-[var(--bui-color-secondary-50)]",
    danger: "text-[var(--bui-color-danger-bg)] bg-transparent hover:bg-[var(--bui-color-danger-50)]",
    success: "text-[var(--bui-color-success-bg)] bg-transparent hover:bg-[var(--bui-color-success-50)]",
    warning: "text-[var(--bui-color-warning-bg)] bg-transparent hover:bg-[var(--bui-color-warning-50)]",
  },
  flat: {
    default: "bg-[var(--bui-color-default-bg)] text-[var(--bui-color-default-fg)]",
    primary: "bg-[var(--bui-color-primary-100)] text-[var(--bui-color-primary-800)]",
    secondary: "bg-[var(--bui-color-secondary-100)] text-[var(--bui-color-secondary-800)]",
    danger: "bg-[var(--bui-color-danger-100)] text-[var(--bui-color-danger-800)]",
    success: "bg-[var(--bui-color-success-100)] text-[var(--bui-color-success-700)]",
    warning: "bg-[var(--bui-color-warning-100)] text-[var(--bui-color-warning-700)]",
  },
  faded: {
    default: "border border-[var(--bui-color-default-border)] bg-[var(--bui-color-default-bg)] text-[var(--bui-color-default-fg)]",
    primary: "border border-[var(--bui-color-default-border)] bg-[var(--bui-color-default-bg)] text-[var(--bui-color-primary-bg)]",
    secondary: "border border-[var(--bui-color-default-border)] bg-[var(--bui-color-default-bg)] text-[var(--bui-color-secondary-bg)]",
    danger: "border border-[var(--bui-color-default-border)] bg-[var(--bui-color-default-bg)] text-[var(--bui-color-danger-bg)]",
    success: "border border-[var(--bui-color-default-border)] bg-[var(--bui-color-default-bg)] text-[var(--bui-color-success-bg)]",
    warning: "border border-[var(--bui-color-default-border)] bg-[var(--bui-color-default-bg)] text-[var(--bui-color-warning-bg)]",
  },
  shadow: {
    default: "bg-[var(--bui-color-default-bg)] text-[var(--bui-color-default-fg)] shadow-[var(--bui-shadow-md)] hover:shadow-[var(--bui-shadow-lg)]",
    primary: "bg-[var(--bui-color-primary-bg)] text-[var(--bui-color-primary-fg)] shadow-[var(--bui-shadow-md)] hover:shadow-[var(--bui-shadow-lg)]",
    secondary: "bg-[var(--bui-color-secondary-bg)] text-[var(--bui-color-secondary-fg)] shadow-[var(--bui-shadow-md)] hover:shadow-[var(--bui-shadow-lg)]",
    danger: "bg-[var(--bui-color-danger-bg)] text-[var(--bui-color-danger-fg)] shadow-[var(--bui-shadow-md)] hover:shadow-[var(--bui-shadow-lg)]",
    success: "bg-[var(--bui-color-success-bg)] text-[var(--bui-color-success-fg)] shadow-[var(--bui-shadow-md)] hover:shadow-[var(--bui-shadow-lg)]",
    warning: "bg-[var(--bui-color-warning-bg)] text-[var(--bui-color-warning-fg)] shadow-[var(--bui-shadow-md)] hover:shadow-[var(--bui-shadow-lg)]",
  },
  ghost: {
    default: "border border-[var(--bui-color-default-border)] text-[var(--bui-color-default-fg)] bg-transparent hover:bg-[var(--bui-color-default-bg)]",
    primary: "border border-[var(--bui-color-primary-border)] text-[var(--bui-color-primary-bg)] bg-transparent hover:bg-[var(--bui-color-primary-bg)] hover:text-[var(--bui-color-primary-fg)]",
    secondary: "border border-[var(--bui-color-secondary-border)] text-[var(--bui-color-secondary-bg)] bg-transparent hover:bg-[var(--bui-color-secondary-bg)] hover:text-[var(--bui-color-secondary-fg)]",
    danger: "border border-[var(--bui-color-danger-border)] text-[var(--bui-color-danger-bg)] bg-transparent hover:bg-[var(--bui-color-danger-bg)] hover:text-[var(--bui-color-danger-fg)]",
    success: "border border-[var(--bui-color-success-border)] text-[var(--bui-color-success-bg)] bg-transparent hover:bg-[var(--bui-color-success-bg)] hover:text-[var(--bui-color-success-fg)]",
    warning: "border border-[var(--bui-color-warning-border)] text-[var(--bui-color-warning-bg)] bg-transparent hover:bg-[var(--bui-color-warning-bg)] hover:text-[var(--bui-color-warning-fg)]",
  },
};

const buttonSizeClasses: Record<string, string> = {
  sm: "h-8 px-3 text-sm gap-2 rounded-[var(--bui-radius-sm)]",
  md: "h-10 px-4 text-sm gap-2 rounded-[var(--bui-radius-md)]",
  lg: "h-12 px-6 text-base gap-3 rounded-[var(--bui-radius-lg)]",
};

const buttonRadiusOverrides: Record<string, string> = {
  none: "rounded-none",
  sm: "rounded-[var(--bui-radius-sm)]",
  md: "rounded-[var(--bui-radius-md)]",
  lg: "rounded-[var(--bui-radius-lg)]",
  full: "rounded-[var(--bui-radius-full)]",
};

export const buttonRecipe: ClassRecipeFn<ButtonRecipeProps> = (props = {} as ButtonRecipeProps) => {
  const { color = "default", variant = "solid", size = "md", radius, fullWidth = false, isIconOnly = false, isDisabled = false, disableAnimation = false } = props;

  const colorClass = buttonColorVariants[variant]?.[color] ?? buttonColorVariants["solid"]["default"];
  const sizeClass = buttonSizeClasses[size] ?? buttonSizeClasses["md"];
  const radiusClass = radius ? (buttonRadiusOverrides[radius] ?? "") : "";
  const iconOnlyClass = isIconOnly ? "px-0 aspect-square" : "";
  const disabledClass = isDisabled ? "opacity-50 pointer-events-none" : "";
  const animationClass = disableAnimation ? "" : "transition-all";

  return cn(buttonBase, colorClass, sizeClass, radiusClass, fullWidth ? "w-full" : "", iconOnlyClass, disabledClass, animationClass);
};

export const buttonSlotRecipe: SlotRecipeFn<ButtonRecipeProps, ButtonSlot> = (props = {} as ButtonRecipeProps) => {
  const root = buttonRecipe(props);
  return {
    root,
    icon: "shrink-0",
    label: "",
    spinner: "animate-spin",
  };
};

// ─── Dialog recipe ─────────────────────────────────────────────────────────

const dialogSizeClasses: Record<string, string> = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export const dialogSlotRecipe: SlotRecipeFn<DialogRecipeProps, DialogSlot> = (props = {} as DialogRecipeProps) => {
  const { size = "md", centered = false, scrollBehavior = "outside" } = props;

  const sizeClass = dialogSizeClasses[size] ?? dialogSizeClasses["md"];

  return {
    root: "",
    backdrop: "fixed inset-0 z-[var(--bui-z-overlay)] bg-black/50 backdrop-blur-sm",
    positioner: cn(
      "fixed inset-0 z-[var(--bui-z-modal)] flex",
      centered ? "items-center justify-center" : "items-start justify-center pt-16",
      scrollBehavior === "outside" ? "overflow-y-auto" : "overflow-hidden",
    ),
    content: cn(
      "relative w-full bg-[var(--bui-bg-surface)] shadow-[var(--bui-shadow-xl)] rounded-[var(--bui-radius-lg)]",
      "flex flex-col",
      sizeClass,
      scrollBehavior === "inside" ? "max-h-[calc(100vh-8rem)] overflow-hidden" : "",
    ),
    header: "flex items-center justify-between px-6 py-4 border-b border-[var(--bui-border)]",
    title: "text-lg font-semibold text-[var(--bui-fg)]",
    description: "text-sm text-[var(--bui-fg-muted)] mt-1",
    body: cn("px-6 py-4 flex-1", scrollBehavior === "inside" ? "overflow-y-auto" : ""),
    footer: "flex items-center justify-end gap-2 px-6 py-4 border-t border-[var(--bui-border)]",
    closeTrigger:
      "absolute right-4 top-4 rounded-[var(--bui-radius-sm)] opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2",
  };
};
