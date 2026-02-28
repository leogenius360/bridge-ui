import type { Intent, Size, Variant } from "../tokens/index.js";

/**
 * A recipe is a function that accepts variant props and returns
 * a set of class names (or class name record for multi-slot components).
 */
export type RecipeFn<Props extends object, Result> = (props?: Partial<Props>) => Result;

/**
 * A single-slot recipe returns a string of class names.
 */
export type ClassRecipeFn<Props extends object> = RecipeFn<Props, string>;

/**
 * A multi-slot recipe returns a record mapping slot names to class strings.
 */
export type SlotRecipeFn<Props extends object, Slots extends string> = RecipeFn<
  Props,
  Record<Slots, string>
>;

/**
 * Variant map used to define recipe variants.
 * Maps each variant key to its possible values and associated classes.
 */
export type VariantMap<K extends string, V extends string> = Record<K, Record<V, string>>;

/**
 * Button recipe variant props.
 */
export interface ButtonRecipeProps {
  intent: Intent;
  size: Size;
  variant: Variant;
  shape: "square" | "rounded" | "pill" | "circle";
  loading: boolean;
  disabled: boolean;
  fullWidth: boolean;
}

/**
 * Dialog recipe variant props.
 */
export interface DialogRecipeProps {
  size: Size;
  scrollBehavior: "inside" | "outside";
  centered: boolean;
}
