# @bridge-ui/utils

Shared utility functions for BridgeUI packages.

## Functions

### `cn(...classes)`

Merge class names, filtering out falsy values.

```ts
import { cn } from "@bridge-ui/utils";
cn("base", condition && "active", undefined); // "base active"
```

### `mergeClasses(...classes)`

Merge classes with last-value-wins deduplication by prefix.

```ts
import { mergeClasses } from "@bridge-ui/utils";
mergeClasses("px-4 py-2 text-sm", "text-lg px-6"); // "py-2 text-lg px-6"
```

### `mergeSlots(base, overrides)`

Merge per-slot class records for multi-slot components.

```ts
import { mergeSlots } from "@bridge-ui/utils";
mergeSlots({ root: "flex", icon: "w-4" }, { root: "text-red-500" });
// { root: "flex text-red-500", icon: "w-4" }
```
