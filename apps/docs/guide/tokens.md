# Design Tokens

BridgeUI uses CSS custom properties (variables) for all design values.

## Installing

```bash
pnpm add @bridge-ui/tokens
```

## Using a theme

```css
/* Import the default (light) theme */
@import "@bridge-ui/tokens/themes/default";

/* Optionally also import the dark theme */
@import "@bridge-ui/tokens/themes/dark";
```

## Token naming convention

All tokens are prefixed with `--bui-` to avoid conflicts.

### Semantic color tokens

| Token | Description |
|---|---|
| `--bui-color-primary-bg` | Background for primary color |
| `--bui-color-primary-fg` | Foreground/text for primary color |
| `--bui-color-primary-border` | Border color for primary color |
| `--bui-color-primary-hover-bg` | Hover background for primary color |

Same pattern for: `default`, `secondary`, `danger`, `success`, `warning`.

### Global semantic tokens

| Token | Description |
|---|---|
| `--bui-bg` | Page background |
| `--bui-bg-surface` | Card/surface background |
| `--bui-fg` | Default text color |
| `--bui-fg-muted` | Muted text color |
| `--bui-border` | Default border color |

### Spacing

`--bui-spacing-xs` / `sm` / `md` / `lg` / `xl`

### Border radius

`--bui-radius-none` / `sm` / `md` / `lg` / `xl` / `full`

### Shadows

`--bui-shadow-sm` / `md` / `lg` / `xl`

## TypeScript helpers

```ts
import { token, ColorTokenNames } from "@bridge-ui/tokens";

// Get a CSS variable reference
token.ref("color-primary-bg"); // "var(--bui-color-primary-bg)"
token.colorBg("primary");      // "var(--bui-color-primary-bg)"
```
