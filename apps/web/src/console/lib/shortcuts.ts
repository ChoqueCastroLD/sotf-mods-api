/**
 * Keyboard shortcut matching (framework-free; the React side is `hooks/use-shortcuts.tsx`).
 *
 * A binding is one key (`?`, `[`, `j`; letters in lower case) or a two-key sequence separated by a space (`g b`: press
 * `g`, then `b` within {@link SEQUENCE_TIMEOUT_MS}). Keys are compared with `KeyboardEvent.key`
 * (layout-aware: `?` is whatever produces «?»). Shortcuts never fire while typing in a field,
 * with Ctrl/Meta/Alt held, or on repeated keydown events.
 */
export const SEQUENCE_TIMEOUT_MS = 1200;

export interface ShortcutBinding {
  keys: string;
  run: () => void;
}

export interface KeyEventLike {
  key: string;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
  repeat: boolean;
  target: EventTarget | null;
}

/** Whether the event comes from a place where typing must not trigger shortcuts. */
export function isTypingTarget(target: EventTarget | null): boolean {
  if (!target || typeof (target as Element).closest !== 'function') return false;
  const element = target as HTMLElement;
  if (element.isContentEditable) return true;
  return (
    element.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"], [role="textbox"]') !==
    null
  );
}

/** Splits `"g b"` into `['g', 'b']`; single keys keep their case (`?`, `J`). */
export function parseKeys(keys: string): string[] {
  const parts = keys.trim().split(/\s+/);
  if (parts.length === 0 || parts.length > 2 || parts.some((part) => part.length === 0)) {
    throw new Error(`invalid shortcut "${keys}"`);
  }
  return parts;
}

export class ShortcutMatcher {
  #pending: string | null = null;
  #pendingAt = 0;
  readonly #now: () => number;

  constructor(now: () => number = () => Date.now()) {
    this.#now = now;
  }

  /** The binding the event completes, or null. Updates the sequence state. */
  match(event: KeyEventLike, bindings: Iterable<ShortcutBinding>): ShortcutBinding | null {
    if (event.ctrlKey || event.metaKey || event.altKey || event.repeat || isTypingTarget(event.target)) {
      this.#pending = null;
      return null;
    }
    // Latin letters match regardless of Shift/Caps Lock; symbols (`?`, `[`) match as typed.
    const key = /^[A-Z]$/.test(event.key) ? event.key.toLowerCase() : event.key;
    const now = this.#now();
    const prefix = this.#pending !== null && now - this.#pendingAt <= SEQUENCE_TIMEOUT_MS ? this.#pending : null;
    this.#pending = null;
    let startsSequence = false;
    const list = [...bindings];
    if (prefix !== null) {
      for (const binding of list) {
        const [first, second] = parseKeys(binding.keys);
        if (second !== undefined && first === prefix && second === key) return binding;
      }
    }
    for (const binding of list) {
      const [first, second] = parseKeys(binding.keys);
      if (second === undefined && first === key) return binding;
      if (second !== undefined && first === key) startsSequence = true;
    }
    if (startsSequence) {
      this.#pending = key;
      this.#pendingAt = now;
    }
    return null;
  }

  reset(): void {
    this.#pending = null;
  }
}
