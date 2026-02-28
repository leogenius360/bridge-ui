<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import type { DialogProps } from "@bridge-ui/core/dialog";
  import { DialogDefaults } from "@bridge-ui/core/dialog";
  import { cn } from "@bridge-ui/utils";

  type DialogSlotClasses = Partial<{
    root: string;
    backdrop: string;
    positioner: string;
    content: string;
    header: string;
    title: string;
    description: string;
    body: string;
    footer: string;
    closeTrigger: string;
  }>;

  // ── Props ──────────────────────────────────────────────────────────────
  export let open: boolean = DialogDefaults.open ?? false;
  export let hasBackdrop: boolean = DialogDefaults.hasBackdrop ?? true;
  export let centered: boolean = DialogDefaults.centered ?? false;
  export let scrollBehavior: "inside" | "outside" = DialogDefaults.scrollBehavior ?? "outside";
  export let closeOnEscape: boolean = DialogDefaults.closeOnEscape ?? true;
  export let closeOnBackdropClick: boolean = DialogDefaults.closeOnBackdropClick ?? true;
  export let role: "dialog" | "alertdialog" = DialogDefaults.role ?? "dialog";
  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;
  /**
   * Optional slot recipe from `@bridge-ui/styles/recipes`.
   */
  export let slotRecipe: ((props?: Partial<DialogProps>) => DialogSlotClasses) | undefined = undefined;
  /** Per-slot class overrides */
  export let classes: DialogSlotClasses = {};
  let className: string | undefined = undefined;
  export { className as class };

  const dispatch = createEventDispatcher<{ "open-change": { open: boolean } }>();

  function close() {
    open = false;
    dispatch("open-change", { open: false });
  }

  function handleBackdropClick() {
    if (closeOnBackdropClick) close();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (closeOnEscape && e.key === "Escape") close();
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);
  });
  onDestroy(() => {
    document.removeEventListener("keydown", handleKeydown);
  });

  // ── Derived ────────────────────────────────────────────────────────────
  $: slots = slotRecipe ? slotRecipe({ centered, scrollBehavior }) : ({} as DialogSlotClasses);
  $: s = (slot: keyof DialogSlotClasses, extra?: string) =>
    cn(slots[slot], classes[slot], extra);
</script>

{#if open}
  <div role="presentation" class={s("root", className)}>
    {#if hasBackdrop}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div aria-hidden="true" class={s("backdrop")} on:click={handleBackdropClick} />
    {/if}
    <div class={s("positioner")}>
      <div {role} aria-modal="true" aria-label={title} class={s("content")}>
        {#if title || description}
          <div class={s("header")}>
            <div>
              {#if title}
                <h2 class={s("title")}>{title}</h2>
              {/if}
              {#if description}
                <p class={s("description")}>{description}</p>
              {/if}
            </div>
            <button
              type="button"
              aria-label="Close dialog"
              class={s("closeTrigger")}
              on:click={close}
            >
              ✕
            </button>
          </div>
        {/if}
        <div class={s("body")}>
          <slot />
        </div>
        <slot name="footer">
          {#if $$slots.footer}
            <div class={s("footer")}>
              <slot name="footer" />
            </div>
          {/if}
        </slot>
      </div>
    </div>
  </div>
{/if}
