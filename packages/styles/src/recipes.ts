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
    destructive: "bg-[var(--bui-color-destructive-bg)] text-[var(--bui-color-destructive-fg)] hover:bg-[var(--bui-color-destructive-hover-bg)]",
    success: "bg-[var(--bui-color-success-bg)] text-[var(--bui-color-success-fg)] hover:bg-[var(--bui-color-success-hover-bg)]",
    warning: "bg-[var(--bui-color-warning-bg)] text-[var(--bui-color-warning-fg)] hover:bg-[var(--bui-color-warning-hover-bg)]",
    info: "bg-[var(--bui-color-info-bg)] text-[var(--bui-color-info-fg)] hover:bg-[var(--bui-color-info-hover-bg)]",
    surface: "bg-[var(--bui-bg-surface)] text-[var(--bui-fg)] hover:bg-[var(--bui-bg)] border border-[var(--bui-border)]",
  },
  outline: {
    default: "border border-[var(--bui-color-default-border)] text-[var(--bui-color-default-fg)] hover:bg-[var(--bui-color-default-hover-bg)]",
    primary: "border border-[var(--bui-color-primary-border)] text-[var(--bui-color-primary-bg)] hover:bg-[var(--bui-color-primary-50)]",
    secondary: "border border-[var(--bui-color-secondary-border)] text-[var(--bui-color-secondary-bg)] hover:bg-[var(--bui-color-secondary-50)]",
    destructive: "border border-[var(--bui-color-destructive-border)] text-[var(--bui-color-destructive-bg)] hover:bg-[var(--bui-color-destructive-50)]",
    success: "border border-[var(--bui-color-success-border)] text-[var(--bui-color-success-bg)] hover:bg-[var(--bui-color-success-50)]",
    warning: "border border-[var(--bui-color-warning-border)] text-[var(--bui-color-warning-bg)] hover:bg-[var(--bui-color-warning-50)]",
    info: "border border-[var(--bui-color-info-border)] text-[var(--bui-color-info-bg)] hover:bg-[var(--bui-color-info-50)]",
    surface: "border border-[var(--bui-border)] text-[var(--bui-fg)] hover:bg-[var(--bui-bg)]",
  },
  ghost: {
    default: "text-[var(--bui-color-default-fg)] hover:bg-[var(--bui-color-default-hover-bg)]",
    primary: "text-[var(--bui-color-primary-bg)] hover:bg-[var(--bui-color-primary-50)]",
    secondary: "text-[var(--bui-color-secondary-bg)] hover:bg-[var(--bui-color-secondary-50)]",
    destructive: "text-[var(--bui-color-destructive-bg)] hover:bg-[var(--bui-color-destructive-50)]",
    success: "text-[var(--bui-color-success-bg)] hover:bg-[var(--bui-color-success-50)]",
    warning: "text-[var(--bui-color-warning-bg)] hover:bg-[var(--bui-color-warning-50)]",
    info: "text-[var(--bui-color-info-bg)] hover:bg-[var(--bui-color-info-50)]",
    surface: "text-[var(--bui-fg)] hover:bg-[var(--bui-bg)]",
  },
  subtle: {
    default: "bg-[var(--bui-color-default-bg)] text-[var(--bui-color-default-fg)]",
    primary: "bg-[var(--bui-color-primary-100)] text-[var(--bui-color-primary-800)]",
    secondary: "bg-[var(--bui-color-secondary-100)] text-[var(--bui-color-secondary-800)]",
    destructive: "bg-[var(--bui-color-destructive-100)] text-[var(--bui-color-destructive-800)]",
    success: "bg-[var(--bui-color-success-100)] text-[var(--bui-color-success-700)]",
    warning: "bg-[var(--bui-color-warning-100)] text-[var(--bui-color-warning-700)]",
    info: "bg-[var(--bui-color-info-100)] text-[var(--bui-color-info-700)]",
    surface: "bg-[var(--bui-bg)] text-[var(--bui-fg)]",
  },
  link: {
    default: "text-[var(--bui-color-default-fg)] underline-offset-4 hover:underline",
    primary: "text-[var(--bui-color-primary-bg)] underline-offset-4 hover:underline",
    secondary: "text-[var(--bui-color-secondary-bg)] underline-offset-4 hover:underline",
    destructive: "text-[var(--bui-color-destructive-bg)] underline-offset-4 hover:underline",
    success: "text-[var(--bui-color-success-bg)] underline-offset-4 hover:underline",
    warning: "text-[var(--bui-color-warning-bg)] underline-offset-4 hover:underline",
    info: "text-[var(--bui-color-info-bg)] underline-offset-4 hover:underline",
    surface: "text-[var(--bui-fg)] underline-offset-4 hover:underline",
  },
};

const buttonSizeClasses: Record<string, string> = {
  xs: "h-7 px-2 text-xs rounded-[var(--bui-radius-sm)]",
  sm: "h-8 px-3 text-sm rounded-[var(--bui-radius-md)]",
  md: "h-9 px-4 text-sm rounded-[var(--bui-radius-md)]",
  lg: "h-10 px-6 text-base rounded-[var(--bui-radius-md)]",
  xl: "h-12 px-8 text-lg rounded-[var(--bui-radius-lg)]",
};

const buttonShapeOverrides: Record<string, string> = {
  square: "rounded-none",
  rounded: "",
  pill: "rounded-[var(--bui-radius-full)]",
  circle: "rounded-[var(--bui-radius-full)] aspect-square px-0",
};

export const buttonRecipe: ClassRecipeFn<ButtonRecipeProps> = (props = {} as ButtonRecipeProps) => {
  const { color = "default", variant = "solid", size = "md", shape = "rounded", fullWidth = false } = props;

  const colorClass = buttonColorVariants[variant]?.[color] ?? buttonColorVariants["solid"]["default"];
  const sizeClass = buttonSizeClasses[size] ?? buttonSizeClasses["md"];
  const shapeClass = buttonShapeOverrides[shape] ?? "";

  return cn(buttonBase, colorClass, sizeClass, shapeClass, fullWidth ? "w-full" : "");
};

export const buttonSlotRecipe: SlotRecipeFn<ButtonRecipeProps, ButtonSlot> = (props = {} as ButtonRecipeProps) => {
  const root = buttonRecipe(props);
  return {
    root,
    icon: "shrink-0",
    label: "",
    loadingIcon: "animate-spin",
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
