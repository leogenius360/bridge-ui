/**
 * Merges class names together, filtering out falsy values.
 * A lightweight alternative to clsx for simple use-cases.
 *
 * @example
 * cn("base", condition && "active", undefined, "extra")
 * // => "base active extra"
 */
export function cn(...inputs: (string | boolean | null | undefined)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Merges class names and deduplicates tokens.
 * Use this when combining library defaults with user overrides.
 *
 * @example
 * mergeClasses("px-4 py-2 text-sm", "text-lg px-6")
 * // => "py-2 text-lg px-6"  (later values win per-prefix)
 */
export function mergeClasses(...inputs: (string | undefined | null)[]): string {
  const seen = new Map<string, string>();
  for (const input of inputs) {
    if (!input) continue;
    for (const token of input.split(/\s+/)) {
      if (!token) continue;
      // Use the prefix (everything before the last `-`) as the key
      const dashIndex = token.lastIndexOf("-");
      const prefix = dashIndex > 0 ? token.slice(0, dashIndex) : token;
      seen.set(prefix, token);
    }
  }
  return Array.from(seen.values()).join(" ");
}
