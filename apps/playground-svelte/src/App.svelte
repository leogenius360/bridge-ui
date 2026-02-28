<script lang="ts">
  import { Button, Dialog } from "@bridge-ui/svelte";
  import { buttonRecipe, dialogSlotRecipe } from "@bridge-ui/styles/recipes";

  let dialogOpen = false;

  const intents = ["default", "primary", "secondary", "destructive", "success", "warning", "info"] as const;
  const variants = ["solid", "outline", "ghost", "subtle", "link"] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
</script>

<div class="min-h-screen bg-bui-bg text-bui-fg p-8">
  <h1 class="text-3xl font-bold mb-2">BridgeUI Svelte Playground</h1>
  <p class="text-bui-fg-muted mb-8">
    Semantic component API · Multi-framework · Optional Tailwind styling
  </p>

  <!-- Buttons — intents -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — intents</h2>
    <div class="flex flex-wrap gap-3">
      {#each intents as intent}
        <Button {intent} recipe={buttonRecipe}>{intent}</Button>
      {/each}
    </div>
  </section>

  <!-- Buttons — variants -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — variants</h2>
    <div class="flex flex-wrap gap-3">
      {#each variants as variant}
        <Button intent="primary" {variant} recipe={buttonRecipe}>{variant}</Button>
      {/each}
    </div>
  </section>

  <!-- Buttons — sizes -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — sizes</h2>
    <div class="flex flex-wrap items-center gap-3">
      {#each sizes as size}
        <Button intent="primary" {size} recipe={buttonRecipe}>{size}</Button>
      {/each}
    </div>
  </section>

  <!-- Buttons — loading & disabled -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — loading & disabled</h2>
    <div class="flex flex-wrap gap-3">
      <Button intent="primary" loading={true} recipe={buttonRecipe}>Loading…</Button>
      <Button intent="primary" disabled={true} recipe={buttonRecipe}>Disabled</Button>
    </div>
  </section>

  <!-- Button — unstyled -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — unstyled (BYO)</h2>
    <Button class="border-2 border-dashed border-gray-400 px-4 py-2 rounded text-gray-700">
      Unstyled button — your styles
    </Button>
  </section>

  <!-- Dialog -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Dialog</h2>
    <Button intent="primary" recipe={buttonRecipe} on:click={() => (dialogOpen = true)}>
      Open Dialog
    </Button>
    <Dialog
      open={dialogOpen}
      on:open-change={(e) => (dialogOpen = e.detail.open)}
      title="Example Dialog"
      description="This is a BridgeUI Svelte dialog with Tailwind styling."
      slotRecipe={dialogSlotRecipe}
    >
      <p>Dialog body content goes here.</p>
      <svelte:fragment slot="footer">
        <Button intent="primary" recipe={buttonRecipe} on:click={() => (dialogOpen = false)}>
          Close
        </Button>
      </svelte:fragment>
    </Dialog>
  </section>
</div>
