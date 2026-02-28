<script lang="ts">
  import { Button, Dialog } from "@bridge-ui/svelte";
  import { buttonRecipe, dialogSlotRecipe } from "@bridge-ui/styles/recipes";

  let dialogOpen = false;

  const colors = ["default", "primary", "secondary", "danger", "success", "warning"] as const;
  const variants = ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"] as const;
  const sizes = ["sm", "md", "lg"] as const;
  const radii = ["none", "sm", "md", "lg", "full"] as const;
</script>

<div class="min-h-screen bg-bui-bg text-bui-fg p-8">
  <h1 class="text-3xl font-bold mb-2">BridgeUI Svelte Playground</h1>
  <p class="text-bui-fg-muted mb-8">
    Semantic component API · Multi-framework · Optional Tailwind styling
  </p>

  <!-- Buttons — colors -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — colors</h2>
    <div class="flex flex-wrap gap-3">
      {#each colors as color}
        <Button {color} recipe={buttonRecipe}>{color}</Button>
      {/each}
    </div>
  </section>

  <!-- Buttons — variants -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — variants</h2>
    <div class="flex flex-wrap gap-3">
      {#each variants as variant}
        <Button color="primary" {variant} recipe={buttonRecipe}>{variant}</Button>
      {/each}
    </div>
  </section>

  <!-- Buttons — sizes -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — sizes</h2>
    <div class="flex flex-wrap items-center gap-3">
      {#each sizes as size}
        <Button color="primary" {size} recipe={buttonRecipe}>{size}</Button>
      {/each}
    </div>
  </section>

  <!-- Buttons — radius -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — radius</h2>
    <div class="flex flex-wrap items-center gap-3">
      {#each radii as radius}
        <Button color="primary" {radius} recipe={buttonRecipe}>{radius}</Button>
      {/each}
    </div>
  </section>

  <!-- Buttons — loading & disabled -->
  <section class="mb-10">
    <h2 class="text-xl font-semibold mb-4">Button — loading & disabled</h2>
    <div class="flex flex-wrap gap-3">
      <Button color="primary" isLoading={true} recipe={buttonRecipe}>Loading…</Button>
      <Button color="primary" isDisabled={true} recipe={buttonRecipe}>Disabled</Button>
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
    <Button color="primary" recipe={buttonRecipe} on:click={() => (dialogOpen = true)}>
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
        <Button color="primary" recipe={buttonRecipe} on:click={() => (dialogOpen = false)}>
          Close
        </Button>
      </svelte:fragment>
    </Dialog>
  </section>
</div>
