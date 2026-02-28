# @bridge-ui/react

React components for BridgeUI — semantic colors, optional Tailwind styling, powered by [Ark UI](https://ark-ui.com) / [Zag.js](https://zagjs.com) for accessible headless behavior.

## Installation

```bash
pnpm add @bridge-ui/react @bridge-ui/core

# Optional styling
pnpm add @bridge-ui/styles @bridge-ui/tokens
```

## Components

- `Button` — Semantic button with colors, variants, sizes, radius, loading state
- `Dialog` — Accessible modal dialog with backdrop, slots

## Hooks

- `useDisclosure` — Manage open/close state for dialogs, drawers, etc.

## Usage

```tsx
// With Tailwind styling
import { Button } from "@bridge-ui/react";
import { buttonRecipe } from "@bridge-ui/styles/recipes";

<Button color="primary" recipe={buttonRecipe}>Click</Button>

// Without styling (BYO)
<Button className="my-button">Click</Button>
```

## Tree-shaking

```ts
// Barrel import (convenient)
import { Button } from "@bridge-ui/react";

// Deep import (optimal)
import { Button } from "@bridge-ui/react/button";
```

## Key design rules

- `"sideEffects": false` — no CSS side effects
- No CSS imports inside this package
- Styling is opt-in via the `recipe`/`slotRecipe` props
