# Getting Started

## Installation

BridgeUI is a pnpm monorepo. Install the packages you need:

```bash
# React
pnpm add @bridge-ui/react @bridge-ui/core

# Svelte
pnpm add @bridge-ui/svelte @bridge-ui/core

# Optional: Tailwind styling
pnpm add @bridge-ui/styles @bridge-ui/tokens

# Optional: Design tokens only (CSS variables)
pnpm add @bridge-ui/tokens
```

## Quick start — React with Tailwind

### 1. Import the tokens CSS

```css
/* app.css or globals.css */
@import "@bridge-ui/tokens/themes/default";
@import "@bridge-ui/tokens/themes/dark"; /* optional */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Add the Tailwind preset

```js
// tailwind.config.js
import { bridgeUIPreset } from "@bridge-ui/styles/preset";

export default {
  presets: [bridgeUIPreset],
  content: ["./src/**/*.{ts,tsx}"],
};
```

### 3. Use a component

```tsx
import { Button } from "@bridge-ui/react";
import { buttonRecipe } from "@bridge-ui/styles/recipes";

function App() {
  return (
    <Button color="primary" recipe={buttonRecipe}>
      Hello BridgeUI
    </Button>
  );
}
```

## Quick start — React unstyled (BYO)

No Tailwind, no tokens — just bring your own styles:

```tsx
import { Button } from "@bridge-ui/react";

function App() {
  return (
    <Button className="my-button">
      Hello BridgeUI
    </Button>
  );
}
```

## Quick start — Svelte

```svelte
<script lang="ts">
  import { Button } from "@bridge-ui/svelte";
  import { buttonRecipe } from "@bridge-ui/styles/recipes";
</script>

<Button color="primary" recipe={buttonRecipe}>Hello BridgeUI</Button>
```
