# Button

The `Button` component supports semantic colors, visual variants, sizes, shapes, loading state, and icons.

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

<Button color="primary" recipe={buttonRecipe}>Click me</Button>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `color` | `Color` | `"default"` | Semantic color scheme |
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

## Color

```tsx
<Button color="default" recipe={buttonRecipe}>Default</Button>
<Button color="primary" recipe={buttonRecipe}>Primary</Button>
<Button color="secondary" recipe={buttonRecipe}>Secondary</Button>
<Button color="destructive" recipe={buttonRecipe}>Destructive</Button>
<Button color="success" recipe={buttonRecipe}>Success</Button>
<Button color="warning" recipe={buttonRecipe}>Warning</Button>
<Button color="info" recipe={buttonRecipe}>Info</Button>
```

## Variants

```tsx
<Button color="primary" variant="solid" recipe={buttonRecipe}>Solid</Button>
<Button color="primary" variant="outline" recipe={buttonRecipe}>Outline</Button>
<Button color="primary" variant="ghost" recipe={buttonRecipe}>Ghost</Button>
<Button color="primary" variant="subtle" recipe={buttonRecipe}>Subtle</Button>
<Button color="primary" variant="link" recipe={buttonRecipe}>Link</Button>
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
