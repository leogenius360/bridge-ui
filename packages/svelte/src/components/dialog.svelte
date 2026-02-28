<script lang="ts">
  import {
    Dialog as ArkDialog,
  } from "@ark-ui/svelte/dialog";
  import { Portal } from "@ark-ui/svelte/portal";
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
  let {
    open = DialogDefaults.open ?? false,
    onOpenChange,
    hasBackdrop = DialogDefaults.hasBackdrop ?? true,
    centered = DialogDefaults.centered ?? false,
    scrollBehavior = DialogDefaults.scrollBehavior ?? "outside",
    closeOnEscape = DialogDefaults.closeOnEscape ?? true,
    closeOnBackdropClick = DialogDefaults.closeOnBackdropClick ?? true,
    role = DialogDefaults.role ?? "dialog",
    title = undefined,
    description = undefined,
    slotRecipe = undefined,
    classes = {},
    class: className = undefined,
    children,
    footer,
  }: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    hasBackdrop?: boolean;
    centered?: boolean;
    scrollBehavior?: "inside" | "outside";
    closeOnEscape?: boolean;
    closeOnBackdropClick?: boolean;
    role?: "dialog" | "alertdialog";
    title?: string;
    description?: string;
    slotRecipe?: ((props?: Partial<DialogProps>) => DialogSlotClasses) | undefined;
    classes?: DialogSlotClasses;
    class?: string;
    children?: import("svelte").Snippet;
    footer?: import("svelte").Snippet;
  } = $props();

  function handleOpenChange(details: { open: boolean }) {
    onOpenChange?.(details.open);
  }

  // ── Derived ────────────────────────────────────────────────────────────
  let slots = $derived(slotRecipe ? slotRecipe({ centered, scrollBehavior }) : ({} as DialogSlotClasses));
  function s(slot: keyof DialogSlotClasses, extra?: string) {
    return cn(slots[slot], classes[slot], extra);
  }
</script>

<ArkDialog.Root
  {open}
  onOpenChange={handleOpenChange}
  closeOnEscape={closeOnEscape}
  closeOnInteractOutside={closeOnBackdropClick}
  {role}
  lazyMount
  unmountOnExit
>
  <Portal>
    {#if hasBackdrop}
      <ArkDialog.Backdrop class={s("backdrop")} />
    {/if}
    <ArkDialog.Positioner class={s("positioner")}>
      <ArkDialog.Content class={s("content", className)}>
        {#if title || description}
          <div class={s("header")}>
            <div>
              {#if title}
                <ArkDialog.Title class={s("title")}>{title}</ArkDialog.Title>
              {/if}
              {#if description}
                <ArkDialog.Description class={s("description")}>{description}</ArkDialog.Description>
              {/if}
            </div>
            <ArkDialog.CloseTrigger class={s("closeTrigger")} aria-label="Close dialog">
              ✕
            </ArkDialog.CloseTrigger>
          </div>
        {/if}
        <div class={s("body")}>
          {#if children}
            {@render children()}
          {/if}
        </div>
        {#if footer}
          <div class={s("footer")}>
            {@render footer()}
          </div>
        {/if}
      </ArkDialog.Content>
    </ArkDialog.Positioner>
  </Portal>
</ArkDialog.Root>
