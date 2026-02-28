# @bridge-ui/styles

Optional Tailwind preset and class recipes for BridgeUI.

> **This package is opt-in.** Components work without it — bring your own styling.

## Contents

- **`/src/preset.ts`** — Tailwind preset mapping `@bridge-ui/tokens` CSS variables to theme extensions
- **`/src/recipes.ts`** — Class recipes for Button and Dialog
- **`/src/base.css`** — Minimal optional CSS reset

## Setup

```bash
pnpm add @bridge-ui/styles @bridge-ui/tokens tailwindcss
```

```js
// tailwind.config.js
import { bridgeUIPreset } from "@bridge-ui/styles/preset";
export default { presets: [bridgeUIPreset], content: ["./src/**/*.{ts,tsx,svelte}"] };
```

## Usage

```ts
import { buttonRecipe, dialogSlotRecipe } from "@bridge-ui/styles/recipes";

// Pass to the component's recipe prop
<Button intent="primary" recipe={buttonRecipe}>Click</Button>
```

## Sideeffects

- `"sideEffects": ["*.css"]` — CSS files have side effects
- TypeScript is `"sideEffects": false` — fully tree-shakeable
