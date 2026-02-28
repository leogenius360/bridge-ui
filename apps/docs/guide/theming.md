# Theming

BridgeUI ships a light theme by default and a dark theme that can be applied via a class or the `prefers-color-scheme` media query.

## Light theme (default)

The default theme is applied to `:root` automatically when you import `@bridge-ui/tokens/themes/default`.

## Dark theme

There are two ways to enable dark mode:

### 1. Class-based (recommended)

Add `data-theme="dark"` or the class `bui-dark` to your root element:

```html
<html data-theme="dark">…</html>
```

Toggle programmatically:

```ts
document.documentElement.setAttribute("data-theme", "dark");
document.documentElement.setAttribute("data-theme", "light");
```

### 2. System preference (automatic)

If you import `@bridge-ui/tokens/themes/dark`, the dark theme will also respond to the user's `prefers-color-scheme` media query automatically, unless the user has explicitly set `data-theme="light"` or added the `bui-light` class.

## Custom themes

You can create your own theme by overriding CSS variables:

```css
[data-theme="ocean"] {
  --bui-color-primary-bg: #0077b6;
  --bui-color-primary-fg: #ffffff;
  --bui-color-primary-hover-bg: #005a8e;
  /* override any token you want */
}
```
