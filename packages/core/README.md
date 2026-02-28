# @bridge-ui/core

Framework-agnostic contracts, types, recipes, and slot definitions for BridgeUI.

## What's in here

- **`/src/tokens`** — Semantic type definitions (`Intent`, `Size`, `Variant`, `Shape`)
- **`/src/components`** — Per-component prop contracts (`ButtonProps`, `DialogProps`)
- **`/src/recipes`** — Recipe type definitions used by `@bridge-ui/styles`
- **`/src/a11y`** — ARIA type helpers (pure types, no DOM)

## Key design rules

- No DOM imports
- No framework imports
- No CSS
- `"sideEffects": false` — fully tree-shakeable
- Pure TypeScript types and constants only

## Usage

```ts
import type { ButtonProps, Intent } from "@bridge-ui/core";
import { ButtonSlots, ButtonDefaults } from "@bridge-ui/core";
```
