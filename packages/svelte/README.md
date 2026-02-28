# @bridge-ui/svelte

Svelte components for BridgeUI — semantic colors, optional Tailwind styling, fully accessible.

## Installation

```bash
pnpm add @bridge-ui/svelte @bridge-ui/core

# Optional styling
pnpm add @bridge-ui/styles @bridge-ui/tokens
```

## Components

- `Button` — Semantic button with colors, variants, sizes, radius, loading state
- `Dialog` — Accessible modal dialog with backdrop, named slots

## Usage

```svelte
<script lang="ts">
  import { Button } from "@bridge-ui/svelte";
  import { buttonRecipe } from "@bridge-ui/styles/recipes";
</script>

<!-- With Tailwind styling -->
<Button color="primary" recipe={buttonRecipe}>Click</Button>

<!-- Without styling (BYO) -->
<Button class="my-button">Click</Button>
```

## Tree-shaking

```ts
// Barrel import
import { Button } from "@bridge-ui/svelte";

// Deep import (optimal)
import Button from "@bridge-ui/svelte/button";
```

## Key design rules

- `"sideEffects": false` — no CSS side effects
- No CSS imports inside this package
- Styling is opt-in via the `recipe`/`slotRecipe` props
