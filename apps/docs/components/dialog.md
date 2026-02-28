# Dialog

The `Dialog` component provides an accessible modal dialog with optional backdrop.

## Import

```tsx
// React
import { Dialog, useDisclosure } from "@bridge-ui/react";

// Svelte
import Dialog from "@bridge-ui/svelte/dialog";
```

## Basic usage

```tsx
import { Dialog, Button, useDisclosure } from "@bridge-ui/react";
import { dialogSlotRecipe, buttonRecipe } from "@bridge-ui/styles/recipes";

function App() {
  const { open, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" recipe={buttonRecipe} onClick={onOpen}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onOpenChange={onOpenChange}
        title="My Dialog"
        description="A description of the dialog."
        slotRecipe={dialogSlotRecipe}
        footer={<Button recipe={buttonRecipe} onClick={() => onOpenChange(false)}>Close</Button>}
      >
        <p>Dialog body content</p>
      </Dialog>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | `false` | Whether the dialog is open |
| `onOpenChange` | `(open: boolean) => void` | — | Open state change handler |
| `title` | `string` | — | Dialog title |
| `description` | `string` | — | Dialog description |
| `hasBackdrop` | `boolean` | `true` | Render a backdrop overlay |
| `centered` | `boolean` | `false` | Center dialog vertically |
| `scrollBehavior` | `"inside" \| "outside"` | `"outside"` | Overflow scroll behavior |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `closeOnBackdropClick` | `boolean` | `true` | Close on backdrop click |
| `role` | `"dialog" \| "alertdialog"` | `"dialog"` | ARIA role |
| `slotRecipe` | `(props?) => SlotClasses` | — | Per-slot class recipe |
| `classes` | `DialogSlotClasses` | — | Per-slot class overrides |
| `footer` | `ReactNode` | — | Footer content (React) |

## Per-slot overrides

```tsx
<Dialog
  slotRecipe={dialogSlotRecipe}
  classes={{
    title: "text-destructive",
    content: "max-w-2xl",
  }}
  title="Custom styled"
>
  Content
</Dialog>
```

## Unstyled (BYO)

```tsx
<Dialog
  open={open}
  onOpenChange={setOpen}
  classes={{
    backdrop: "fixed inset-0 bg-black/40",
    positioner: "fixed inset-0 flex items-center justify-center",
    content: "bg-white rounded-lg p-6 shadow-xl max-w-md w-full",
  }}
>
  Content
</Dialog>
```
