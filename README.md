# BridgeUI

Bridge UI aims to do **semantic component API + multi-framework support + minimal styling opinionatedness** as a unified system.

## What makes BridgeUI different?

| Capability | BridgeUI | React libs | Tailwind kits | Headless libs |
|---|:---:|:---:|:---:|:---:|
| Semantic design API | ✅ | ✓ | ✓ | ❌ |
| Multi-framework | ✅ | ❌ | partial | partial |
| Optional styling | ✅ | ❌ | ❌ | ✅ |
| Headless behavior | ✅ | ✓ | ❌ | ✅ |

## Architecture — 3 layers

```
┌─────────────────────────────────────┐
│  @bridge-ui/styles  (optional)      │  Tailwind preset + class recipes
├─────────────────────────────────────┤
│  @bridge-ui/core    (contract)      │  Props, slots, variant schemas, a11y
├─────────────────────────────────────┤
│  @bridge-ui/react   (React)         │  React components
│  @bridge-ui/svelte  (Svelte)        │  Svelte components
└─────────────────────────────────────┘
```

## Monorepo structure (pnpm + turbo + changesets)

```
bridge-ui/
├─ apps/
│  ├─ docs/                   # VitePress documentation
│  ├─ playground-react/       # React testbed (Vite)
│  └─ playground-svelte/      # SvelteKit testbed (Vite)
│
├─ packages/
│  ├─ core/                   # Framework-agnostic contracts + recipes
│  ├─ tokens/                 # CSS variable themes
│  ├─ styles/                 # Optional Tailwind preset + recipes
│  ├─ react/                  # React components
│  ├─ svelte/                 # Svelte components
│  └─ utils/                  # Shared utilities (cn, slots, etc.)
│
└─ tooling/
   ├─ tsconfig/               # Shared TypeScript configs
   └─ eslint/                 # Shared ESLint configs
```

## Getting started

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start React playground
pnpm --filter playground-react dev

# Start Svelte playground
pnpm --filter playground-svelte dev

# Start docs
pnpm --filter docs dev
```

## Styling modes

### Mode A — Library styling (Tailwind)

```tsx
import { Button } from "@bridge-ui/react";
import { buttonRecipe } from "@bridge-ui/styles/recipes";

<Button intent="primary" recipe={buttonRecipe}>Click</Button>
```

### Mode B — Unstyled / BYO

```tsx
import { Button } from "@bridge-ui/react";

<Button className="my-custom-button">Click</Button>
```

## Design rules

- No CSS imports in `@bridge-ui/react` or `@bridge-ui/svelte`
- `"sideEffects": false` on all non-CSS packages
- ESM-first with per-component deep imports
- `@bridge-ui/core` has no runtime weight (types and constants only)

## License

MIT

