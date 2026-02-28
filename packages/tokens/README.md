# @bridge-ui/tokens

CSS variable-based design tokens and themes for BridgeUI.

## Contents

- **`/themes/default.css`** — Light theme (`:root` variables)
- **`/themes/dark.css`** — Dark theme (`[data-theme="dark"]` + `prefers-color-scheme`)
- **`/src/index.ts`** — Token name registry and TypeScript helpers

## Usage

```css
/* Import in your global stylesheet */
@import "@bridge-ui/tokens/themes/default";
@import "@bridge-ui/tokens/themes/dark"; /* optional */
```

```ts
import { token, IntentTokenNames } from "@bridge-ui/tokens";

token.colorBg("primary"); // "var(--bui-color-primary-bg)"
```

## Token naming

All tokens use the `--bui-` prefix. See `themes/default.css` for the full list.
