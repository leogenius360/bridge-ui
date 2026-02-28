<script lang="ts">
  import type { ButtonProps } from "@bridge-ui/core/button";
  import { ButtonDefaults } from "@bridge-ui/core/button";
  import { cn } from "@bridge-ui/utils";

  // ── Props ──────────────────────────────────────────────────────────────
  /** Semantic color scheme */
  export let color: ButtonProps["color"] = ButtonDefaults.color;
  /** Visual variant */
  export let variant: ButtonProps["variant"] = ButtonDefaults.variant;
  /** Size */
  export let size: ButtonProps["size"] = ButtonDefaults.size;
  /** Border radius */
  export let radius: ButtonProps["radius"] = ButtonDefaults.radius;
  /** Loading state */
  export let isLoading: boolean = ButtonDefaults.isLoading ?? false;
  /** Disabled state */
  export let isDisabled: boolean = ButtonDefaults.isDisabled ?? false;
  /** Icon-only mode */
  export let isIconOnly: boolean = ButtonDefaults.isIconOnly ?? false;
  /** Full-width mode */
  export let fullWidth: boolean = ButtonDefaults.fullWidth ?? false;
  /** Disable animations */
  export let disableAnimation: boolean = ButtonDefaults.disableAnimation ?? false;
  /** Native button type */
  export let type: "button" | "submit" | "reset" = ButtonDefaults.type ?? "button";
  /** Spinner placement */
  export let spinnerPlacement: "start" | "end" = ButtonDefaults.spinnerPlacement ?? "start";
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
    ? recipe({ color, variant, size, radius, isLoading, isDisabled, isIconOnly, fullWidth, disableAnimation })
    : "";
  $: disabled = isDisabled || isLoading;
  $: computedClass = cn(recipeClass, className);
</script>

<button
  {type}
  disabled={disabled}
  aria-disabled={disabled}
  aria-busy={isLoading}
  class={computedClass}
  on:click
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  {...$$restProps}
>
  {#if isLoading && spinnerPlacement === "start"}
    <slot name="spinner">
      <span aria-hidden="true" class="bui-spinner" />
    </slot>
  {:else}
    <slot name="start-content" />
  {/if}
  <slot />
  {#if isLoading && spinnerPlacement === "end"}
    <slot name="spinner">
      <span aria-hidden="true" class="bui-spinner" />
    </slot>
  {:else}
    <slot name="end-content" />
  {/if}
</button>
