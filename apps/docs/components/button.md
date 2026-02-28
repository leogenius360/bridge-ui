# Button

The `Button` component supports semantic intents, visual variants, sizes, shapes, loading state, and icons.

## Import

```tsx
// React — convenient barrel import
import { Button } from "@bridge-ui/react";

// React — deep import (best for tree-shaking)
import { Button } from "@bridge-ui/react/button";

// Svelte
import Button from "@bridge-ui/svelte/button";
```

## Basic usage

```tsx
import { buttonRecipe } from "@bridge-ui/styles/recipes";

<Button intent="primary" recipe={buttonRecipe}>Click me</Button>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `intent` | `Intent` | `"default"` | Semantic color intent |
| `variant` | `Variant` | `"solid"` | Visual style |
| `size` | `Size` | `"md"` | Button size |
| `shape` | `Shape` | `"rounded"` | Border radius shape |
| `loading` | `boolean` | `false` | Show loading state |
| `loadingText` | `string` | — | Screen reader text during loading |
| `fullWidth` | `boolean` | `false` | Fill container width |
| `disabled` | `boolean` | `false` | Disable the button |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Native button type |
| `recipe` | `(props?) => string` | — | Class recipe (opt-in styling) |
| `className` | `string` | — | Additional classes |

## Intent

```tsx
<Button intent="default" recipe={buttonRecipe}>Default</Button>
<Button intent="primary" recipe={buttonRecipe}>Primary</Button>
<Button intent="secondary" recipe={buttonRecipe}>Secondary</Button>
<Button intent="destructive" recipe={buttonRecipe}>Destructive</Button>
<Button intent="success" recipe={buttonRecipe}>Success</Button>
<Button intent="warning" recipe={buttonRecipe}>Warning</Button>
<Button intent="info" recipe={buttonRecipe}>Info</Button>
```

## Variants

```tsx
<Button intent="primary" variant="solid" recipe={buttonRecipe}>Solid</Button>
<Button intent="primary" variant="outline" recipe={buttonRecipe}>Outline</Button>
<Button intent="primary" variant="ghost" recipe={buttonRecipe}>Ghost</Button>
<Button intent="primary" variant="subtle" recipe={buttonRecipe}>Subtle</Button>
<Button intent="primary" variant="link" recipe={buttonRecipe}>Link</Button>
```

## Sizes

```tsx
<Button size="xs" recipe={buttonRecipe}>XS</Button>
<Button size="sm" recipe={buttonRecipe}>SM</Button>
<Button size="md" recipe={buttonRecipe}>MD</Button>
<Button size="lg" recipe={buttonRecipe}>LG</Button>
<Button size="xl" recipe={buttonRecipe}>XL</Button>
```

## Loading

```tsx
<Button loading recipe={buttonRecipe}>Loading…</Button>
<Button loading loadingText="Saving…" recipe={buttonRecipe}>Save</Button>
```

## Unstyled (BYO)

```tsx
<Button className="my-custom-button">Custom styled</Button>
```
