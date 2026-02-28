# Introduction

**BridgeUI** is a semantic, multi-framework UI component library with optional styling, powered by [Ark UI](https://ark-ui.com) and [Zag.js](https://zagjs.com) for headless, accessible component behavior.

## What makes BridgeUI different?

Most UI libraries make you choose between:

- A React-only component kit with strong styling opinions (MUI, Chakra, HeroUI)
- A Tailwind utility collection with no behavior layer (daisyUI, HyperUI)
- A headless primitive library with no design semantics (Radix, Ark UI)

BridgeUI combines all three:

| Capability | BridgeUI | React libs | Tailwind kits | Headless libs |
|---|:---:|:---:|:---:|:---:|
| Semantic design API | ✅ | ✓ | ✓ | ❌ |
| Multi-framework | ✅ | ❌ | partial | partial |
| Optional styling | ✅ | ❌ | ❌ | ✅ |
| Headless behavior | ✅ | ✓ | ❌ | ✅ |

## Architecture

BridgeUI has three layers:

```
┌─────────────────────────────────┐
│  @bridge-ui/styles  (optional)  │  Tailwind preset + class recipes
├─────────────────────────────────┤
│  @bridge-ui/core    (contract)  │  Props, slots, variant schemas
├─────────────────────────────────┤
│  @bridge-ui/react               │  React components (Ark UI / Zag.js)
│  @bridge-ui/svelte              │  Svelte components (Ark UI / Zag.js)
└─────────────────────────────────┘
```

### Behavior layer

`@bridge-ui/react` and `@bridge-ui/svelte` implement the component API
using [Ark UI](https://ark-ui.com) (powered by [Zag.js](https://zagjs.com))
for accessible, headless behavior — including focus trapping, scroll lock,
keyboard navigation, and ARIA attributes.

### Contract layer

`@bridge-ui/core` defines:

- TypeScript prop interfaces for every component
- Slot name constants
- Variant schema types
- A11y helpers (pure types, no DOM)

### Style layer

Two modes:

**Mode A — Library styling (Tailwind)**

```tsx
import { buttonRecipe } from "@bridge-ui/styles/recipes";
<Button color="primary" recipe={buttonRecipe}>Click</Button>
```

**Mode B — Unstyled / BYO**

```tsx
// No recipe import needed
<Button className="my-custom-button">Click</Button>
```
