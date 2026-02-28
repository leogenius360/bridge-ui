# Styling

BridgeUI supports two styling modes.

## Mode A — Library styling (Tailwind)

Use the `@bridge-ui/styles` package which ships a Tailwind preset and class recipes.

### Setup

```bash
pnpm add @bridge-ui/styles @bridge-ui/tokens tailwindcss
```

```js
// tailwind.config.js
import { bridgeUIPreset } from "@bridge-ui/styles/preset";
export default { presets: [bridgeUIPreset], content: ["./src/**/*.{ts,tsx,svelte}"] };
```

### Usage

Pass a `recipe` (or `slotRecipe`) to opt into library styling:

```tsx
import { Button } from "@bridge-ui/react";
import { buttonRecipe } from "@bridge-ui/styles/recipes";

<Button color="primary" variant="bordered" size="lg" recipe={buttonRecipe}>
  Styled button
</Button>
```

## Mode B — Unstyled / BYO

Omit the `recipe` prop and pass your own `className`:

```tsx
import { Button } from "@bridge-ui/react";

<Button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
  Custom button
</Button>
```

### Per-slot class overrides (Dialog)

For multi-slot components, use the `classes` prop:

```tsx
import { Dialog } from "@bridge-ui/react";
import { dialogSlotRecipe } from "@bridge-ui/styles/recipes";

<Dialog
  slotRecipe={dialogSlotRecipe}
  classes={{ title: "text-red-600", footer: "bg-gray-50" }}
  title="My Dialog"
>
  Content
</Dialog>
```

## Key design rules

- **No CSS imports in `@bridge-ui/react` or `@bridge-ui/svelte`.**  
  CSS lives only in `@bridge-ui/tokens` and `@bridge-ui/styles`.
- Both packages are `"sideEffects": false` for maximum tree-shaking.
- You can use the tokens (CSS variables) without Tailwind.
