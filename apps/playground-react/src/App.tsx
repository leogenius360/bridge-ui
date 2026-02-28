import React from "react";
import { Button, Dialog, useDisclosure } from "@bridge-ui/react";
import { buttonRecipe, dialogSlotRecipe } from "@bridge-ui/styles/recipes";

export default function App() {
  const dialog = useDisclosure();

  return (
    <div className="min-h-screen bg-bui-bg text-bui-fg p-8">
      <h1 className="text-3xl font-bold mb-2">BridgeUI React Playground</h1>
      <p className="text-bui-fg-muted mb-8">
        Semantic component API · Multi-framework · Optional Tailwind styling
      </p>

      {/* ── Buttons ─────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button — colors</h2>
        <div className="flex flex-wrap gap-3">
          {(
            [
              "default",
              "primary",
              "secondary",
              "danger",
              "success",
              "warning",
            ] as const
          ).map((color) => (
            <Button key={color} color={color} recipe={buttonRecipe}>
              {color}
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button — variants</h2>
        <div className="flex flex-wrap gap-3">
          {(["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"] as const).map((variant) => (
            <Button key={variant} color="primary" variant={variant} recipe={buttonRecipe}>
              {variant}
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button — sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          {(["sm", "md", "lg"] as const).map((size) => (
            <Button key={size} color="primary" size={size} recipe={buttonRecipe}>
              {size}
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button — radius</h2>
        <div className="flex flex-wrap items-center gap-3">
          {(["none", "sm", "md", "lg", "full"] as const).map((radius) => (
            <Button key={radius} color="primary" radius={radius} recipe={buttonRecipe}>
              {radius}
            </Button>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button — loading & disabled</h2>
        <div className="flex flex-wrap gap-3">
          <Button color="primary" isLoading recipe={buttonRecipe}>
            Loading…
          </Button>
          <Button color="primary" isDisabled recipe={buttonRecipe}>
            Disabled
          </Button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Button — unstyled (BYO)</h2>
        <Button className="border-2 border-dashed border-gray-400 px-4 py-2 rounded text-gray-700">
          Unstyled button — your styles
        </Button>
      </section>

      {/* ── Dialog ──────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Dialog</h2>
        <Button color="primary" recipe={buttonRecipe} onClick={dialog.onOpen}>
          Open Dialog
        </Button>
        <Dialog
          open={dialog.open}
          onOpenChange={dialog.onOpenChange}
          title="Example Dialog"
          description="This is a BridgeUI dialog component with Tailwind styling."
          slotRecipe={dialogSlotRecipe}
          footer={
            <Button color="primary" recipe={buttonRecipe} onClick={dialog.onClose}>
              Close
            </Button>
          }
        >
          <p>Dialog body content goes here.</p>
        </Dialog>
      </section>
    </div>
  );
}
