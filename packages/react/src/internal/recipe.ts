import type { ClassRecipeFn } from "@bridge-ui/core/recipes";
import type { ButtonRecipeProps } from "@bridge-ui/core/recipes";

/**
 * Resolve the class recipe for a component.
 * Falls back to an unstyled empty string if no recipe is provided.
 */
export function resolveRecipe<P extends object>(
  recipe: ClassRecipeFn<P> | undefined,
  props: Partial<P>,
): string {
  if (!recipe) return "";
  return recipe(props);
}

/**
 * Merge an override class with a base class, where the override wins.
 */
export function overrideClass(base: string, override?: string): string {
  if (!override) return base;
  return `${base} ${override}`.trim();
}

/**
 * Validate that a value is a valid button recipe props shape.
 */
export function isButtonRecipeProps(val: unknown): val is Partial<ButtonRecipeProps> {
  return typeof val === "object" && val !== null;
}
