import { useState, useCallback } from "react";

/**
 * Hook to manage open/close state for dialogs, drawers, popovers, etc.
 *
 * @example
 * const { open, onOpen, onClose, onToggle } = useDisclosure();
 */
export function useDisclosure(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const onToggle = useCallback(() => setOpen((v) => !v), []);
  const onOpenChange = useCallback((nextOpen: boolean) => setOpen(nextOpen), []);

  return { open, onOpen, onClose, onToggle, onOpenChange };
}
