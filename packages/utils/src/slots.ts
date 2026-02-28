/**
 * Slot merging utilities for BridgeUI components.
 * Allows consumers to override per-slot class names.
 */

/**
 * A record mapping slot names to class strings.
 */
export type SlotClasses<T extends string> = Partial<Record<T, string>>;

/**
 * Merge base slot classes with user-provided overrides.
 * The user's classes are appended to (not replacing) the base classes.
 *
 * @param base - The default classes from the recipe
 * @param overrides - Optional user-supplied overrides per slot
 * @returns A merged record of classes per slot
 *
 * @example
 * const base = { root: "flex items-center", icon: "w-4 h-4" };
 * const overrides = { root: "text-red-500" };
 * mergeSlots(base, overrides);
 * // => { root: "flex items-center text-red-500", icon: "w-4 h-4" }
 */
export function mergeSlots<T extends string>(
  base: Record<T, string>,
  overrides?: SlotClasses<T>,
): Record<T, string> {
  if (!overrides) return base;
  const result = { ...base };
  for (const key of Object.keys(overrides) as T[]) {
    const extra = overrides[key];
    if (extra) {
      result[key] = result[key] ? `${result[key]} ${extra}` : extra;
    }
  }
  return result;
}
