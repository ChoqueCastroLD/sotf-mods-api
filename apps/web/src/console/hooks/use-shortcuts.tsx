/**
 * Console keyboard shortcuts. One `keydown` listener for the whole console; screens register
 * bindings while mounted:
 *
 *   useShortcut('j', selectNext, { description: () => m.ranger_next_item() });
 *
 * Bindings with a description appear in the «Keyboard shortcuts» dialog (`?`). Everything is off
 * when the user disabled shortcuts (`settings.keyboardShortcuts`, WCAG 2.1.4).
 */
import { createContext, type ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { parseKeys, ShortcutMatcher } from '../lib/shortcuts.ts';

export interface RegisteredShortcut {
  id: number;
  keys: string;
  description?: () => string;
  run: () => void;
}

interface ShortcutsContextValue {
  enabled: boolean;
  register: (shortcut: Omit<RegisteredShortcut, 'id'>) => () => void;
  list: () => RegisteredShortcut[];
  subscribe: (listener: () => void) => () => void;
}

const ShortcutsContext = createContext<ShortcutsContextValue | null>(null);

export function ShortcutsProvider({ enabled, children }: { enabled: boolean; children?: ReactNode }) {
  const registry = useRef(new Map<number, RegisteredShortcut>());
  const listeners = useRef(new Set<() => void>());
  const nextId = useRef(1);

  const value = useMemo<ShortcutsContextValue>(() => {
    const notify = () => {
      for (const listener of listeners.current) listener();
    };
    return {
      enabled,
      register: (shortcut) => {
        parseKeys(shortcut.keys);
        const id = nextId.current++;
        registry.current.set(id, { ...shortcut, id });
        notify();
        return () => {
          registry.current.delete(id);
          notify();
        };
      },
      list: () => [...registry.current.values()],
      subscribe: (listener) => {
        listeners.current.add(listener);
        return () => listeners.current.delete(listener);
      },
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const matcher = new ShortcutMatcher();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      // Later registrations win (a screen can override a global binding while mounted).
      const binding = matcher.match(event, [...registry.current.values()].reverse());
      if (!binding) return;
      event.preventDefault();
      binding.run();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enabled]);

  return <ShortcutsContext.Provider value={value}>{children}</ShortcutsContext.Provider>;
}

function useShortcutsContext(): ShortcutsContextValue {
  const value = useContext(ShortcutsContext);
  if (!value) throw new Error('useShortcut must be used inside the console');
  return value;
}

export interface UseShortcutOptions {
  /** Label in the shortcuts dialog (omit to keep the binding unlisted). */
  description?: () => string;
  enabled?: boolean;
}

/** Registers `keys` (`'?'`, `'g b'`) while the component is mounted. */
export function useShortcut(keys: string, run: () => void, options: UseShortcutOptions = {}): void {
  const { register } = useShortcutsContext();
  const runRef = useRef(run);
  runRef.current = run;
  const descriptionRef = useRef(options.description);
  descriptionRef.current = options.description;
  const active = options.enabled ?? true;
  const described = options.description !== undefined;
  useEffect(() => {
    if (!active) return;
    return register({
      keys,
      run: () => runRef.current(),
      ...(described ? { description: () => descriptionRef.current?.() ?? '' } : {}),
    });
  }, [register, keys, active, described]);
}

/** Registered bindings with a description (the help dialog) and whether shortcuts are on. */
export function useShortcutList(): { enabled: boolean; shortcuts: RegisteredShortcut[] } {
  const { enabled, list, subscribe } = useShortcutsContext();
  const [shortcuts, setShortcuts] = useState(() => list());
  useEffect(() => {
    setShortcuts(list());
    return subscribe(() => setShortcuts(list()));
  }, [list, subscribe]);
  return { enabled, shortcuts: shortcuts.filter((shortcut) => shortcut.description) };
}
