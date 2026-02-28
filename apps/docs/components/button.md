# Button

The `Button` component supports semantic colors, visual variants, sizes, radius, loading state, and start/end content — matching HeroUI conventions.

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
| `radius` | `Radius` | `"md"` | Border radius |
| `isLoading` | `boolean` | `false` | Show loading state |
| `isDisabled` | `boolean` | `false` | Disable the button |
| `isIconOnly` | `boolean` | `false` | Icon-only mode (square aspect) |
| `fullWidth` | `boolean` | `false` | Fill container width |
| `disableRipple` | `boolean` | `false` | Disable ripple effect |
| `disableAnimation` | `boolean` | `false` | Disable animations |
| `startContent` | `ReactNode` | — | Content before the label |
| `endContent` | `ReactNode` | — | Content after the label |
| `spinner` | `ReactNode` | — | Custom spinner element |
| `spinnerPlacement` | `"start" \| "end"` | `"start"` | Spinner position |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Native button type |
| `recipe` | `(props?) => string` | — | Class recipe (opt-in styling) |
| `className` | `string` | — | Additional classes |

## Color

```tsx
<Button color="default" recipe={buttonRecipe}>Default</Button>
<Button color="primary" recipe={buttonRecipe}>Primary</Button>
<Button color="secondary" recipe={buttonRecipe}>Secondary</Button>
<Button color="tertiary" recipe={buttonRecipe}>Tertiary</Button>
<Button color="danger" recipe={buttonRecipe}>Danger</Button>
<Button color="success" recipe={buttonRecipe}>Success</Button>
<Button color="warning" recipe={buttonRecipe}>Warning</Button>
```

## Variants

```tsx
<Button color="primary" variant="solid" recipe={buttonRecipe}>Solid</Button>
<Button color="primary" variant="bordered" recipe={buttonRecipe}>Bordered</Button>
<Button color="primary" variant="light" recipe={buttonRecipe}>Light</Button>
<Button color="primary" variant="flat" recipe={buttonRecipe}>Flat</Button>
<Button color="primary" variant="faded" recipe={buttonRecipe}>Faded</Button>
<Button color="primary" variant="shadow" recipe={buttonRecipe}>Shadow</Button>
<Button color="primary" variant="ghost" recipe={buttonRecipe}>Ghost</Button>
```

## Sizes

```tsx
<Button size="xs" recipe={buttonRecipe}>XS</Button>
<Button size="sm" recipe={buttonRecipe}>SM</Button>
<Button size="md" recipe={buttonRecipe}>MD</Button>
<Button size="lg" recipe={buttonRecipe}>LG</Button>
<Button size="xl" recipe={buttonRecipe}>XL</Button>
```

## Radius

```tsx
<Button radius="none" recipe={buttonRecipe}>None</Button>
<Button radius="xs" recipe={buttonRecipe}>XS</Button>
<Button radius="sm" recipe={buttonRecipe}>SM</Button>
<Button radius="md" recipe={buttonRecipe}>MD</Button>
<Button radius="lg" recipe={buttonRecipe}>LG</Button>
<Button radius="xl" recipe={buttonRecipe}>XL</Button>
<Button radius="full" recipe={buttonRecipe}>Full</Button>
```

## Loading

```tsx
<Button isLoading recipe={buttonRecipe}>Loading…</Button>
<Button isLoading spinnerPlacement="end" recipe={buttonRecipe}>Saving…</Button>
```

## Unstyled (BYO)

```tsx
<Button className="my-custom-button">Custom styled</Button>
```
