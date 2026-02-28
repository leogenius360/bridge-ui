<script lang="ts">
  import type { ButtonProps } from "@bridge-ui/core/button";
  import { ButtonDefaults } from "@bridge-ui/core/button";
  import { cn } from "@bridge-ui/utils";

  // ── Props ──────────────────────────────────────────────────────────────
  /** Semantic intent */
  export let intent: ButtonProps["intent"] = ButtonDefaults.intent;
  /** Visual variant */
  export let variant: ButtonProps["variant"] = ButtonDefaults.variant;
  /** Size */
  export let size: ButtonProps["size"] = ButtonDefaults.size;
  /** Shape */
  export let shape: ButtonProps["shape"] = ButtonDefaults.shape;
  /** Loading state */
  export let loading: boolean = ButtonDefaults.loading ?? false;
  /** Loading label for screen readers */
  export let loadingText: string | undefined = undefined;
  /** Full-width mode */
  export let fullWidth: boolean = ButtonDefaults.fullWidth ?? false;
  /** Disabled state */
  export let disabled: boolean = false;
  /** Native button type */
  export let type: "button" | "submit" | "reset" = ButtonDefaults.type ?? "button";
  /**
   * Optional class recipe from `@bridge-ui/styles/recipes`.
   * If omitted, no library classes are applied.
   */
  export let recipe: ((props?: Partial<ButtonProps>) => string) | undefined = undefined;
  /** Additional class(es) to merge with recipe output */
  let className: string | undefined = undefined;
  export { className as class };

  // ── Derived ────────────────────────────────────────────────────────────
  $: recipeClass = recipe
    ? recipe({ intent, variant, size, shape, loading, disabled, fullWidth })
    : "";
  $: isDisabled = disabled || loading;
  $: computedClass = cn(recipeClass, className);
</script>

<button
  {type}
  disabled={isDisabled}
  aria-disabled={isDisabled}
  aria-busy={loading}
  class={computedClass}
  on:click
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  {...$$restProps}
>
  {#if loading}
    <span aria-hidden="true" class="bui-loading-icon" />
    <slot>{loadingText}</slot>
  {:else}
    <slot name="icon-before" />
    <slot />
    <slot name="icon-after" />
  {/if}
</button>
