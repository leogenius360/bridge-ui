<script lang="ts">
  import type { ButtonProps } from "@bridge-ui/core/button";
  import { ButtonDefaults } from "@bridge-ui/core/button";
  import { cn } from "@bridge-ui/utils";

  // ── Props ──────────────────────────────────────────────────────────────
  let {
    color = ButtonDefaults.color,
    variant = ButtonDefaults.variant,
    size = ButtonDefaults.size,
    radius = ButtonDefaults.radius,
    isLoading = ButtonDefaults.isLoading ?? false,
    isDisabled = ButtonDefaults.isDisabled ?? false,
    isIconOnly = ButtonDefaults.isIconOnly ?? false,
    fullWidth = ButtonDefaults.fullWidth ?? false,
    disableAnimation = ButtonDefaults.disableAnimation ?? false,
    type = ButtonDefaults.type ?? "button",
    spinnerPlacement = ButtonDefaults.spinnerPlacement ?? "start",
    recipe = undefined,
    class: className = undefined,
    children,
    startContent,
    endContent,
    spinner,
    onclick,
    ...restProps
  }: {
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    radius?: ButtonProps["radius"];
    isLoading?: boolean;
    isDisabled?: boolean;
    isIconOnly?: boolean;
    fullWidth?: boolean;
    disableAnimation?: boolean;
    type?: "button" | "submit" | "reset";
    spinnerPlacement?: "start" | "end";
    recipe?: ((props?: Partial<ButtonProps>) => string) | undefined;
    class?: string;
    children?: import("svelte").Snippet;
    startContent?: import("svelte").Snippet;
    endContent?: import("svelte").Snippet;
    spinner?: import("svelte").Snippet;
    onclick?: (e: MouseEvent) => void;
    [key: string]: unknown;
  } = $props();

  // ── Derived ────────────────────────────────────────────────────────────
  let recipeClass = $derived(
    recipe
      ? recipe({ color, variant, size, radius, isLoading, isDisabled, isIconOnly, fullWidth, disableAnimation })
      : ""
  );
  let disabled = $derived(isDisabled || isLoading);
  let computedClass = $derived(cn(recipeClass, className));
</script>

<button
  {type}
  {disabled}
  aria-disabled={disabled}
  aria-busy={isLoading}
  class={computedClass}
  {onclick}
  {...restProps}
>
  {#if isLoading && spinnerPlacement === "start"}
    {#if spinner}
      {@render spinner()}
    {:else}
      <span aria-hidden="true" class="bui-spinner"></span>
    {/if}
  {:else if startContent}
    {@render startContent()}
  {/if}
  {#if children}
    {@render children()}
  {/if}
  {#if isLoading && spinnerPlacement === "end"}
    {#if spinner}
      {@render spinner()}
    {:else}
      <span aria-hidden="true" class="bui-spinner"></span>
    {/if}
  {:else if endContent}
    {@render endContent()}
  {/if}
</button>
