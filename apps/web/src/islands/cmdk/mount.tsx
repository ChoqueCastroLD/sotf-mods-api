/**
 * Lazy entry of the palette (imported by `Trigger.ts` only on intent or when opening): mounts
 * one React root in a `<div data-cmdk-host>` at the end of `<body>` and exposes `open`, `close`
 * and `toggle`. Nothing of this chunk (React, cmdk, MiniSearch, messages) loads with the page.
 */

import { matchLocale } from '@sotf/i18n';
import { flushSync } from 'react-dom';
import { createRoot, type Root } from 'react-dom/client';
import { loadMessages } from './i18n.ts';
import { type OpenRequest, Palette } from './Palette.tsx';

let root: Root | null = null;
let host: HTMLElement | null = null;
let current: (OpenRequest & { nonce: number }) | null = null;
let previousFocus: HTMLElement | null = null;
let beforeFocusReturn: (() => void) | undefined;
let nonce = 0;

// The page-locale messages start loading with this chunk (on intent), in parallel with its imports.
const pageLocale = () => matchLocale(document.documentElement.lang) ?? 'en';
loadMessages(pageLocale()).catch(() => {});

function ensureRoot(): Root {
  if (root && host?.isConnected) return root;
  host = document.createElement('div');
  host.dataset.cmdkHost = '';
  document.body.append(host);
  root = createRoot(host);
  return root;
}

function render(): void {
  const target = ensureRoot();
  if (!current || !host) {
    // Synchronous, so the background is no longer `inert` when focus is restored.
    flushSync(() => target.render(null));
    return;
  }
  target.render(<Palette key={current.nonce} request={current} host={host} onClose={close} />);
}

export function isOpen(): boolean {
  return current !== null;
}

export interface OpenOptions extends OpenRequest {
  /** Called right before focus goes back to `returnFocus` (fields that open the palette on focus). */
  beforeFocusReturn?: () => void;
}

export function open({ beforeFocusReturn: hook, ...request }: OpenOptions): void {
  if (current) {
    // Already open (e.g. the hero field focused while open): keep it, just refocus the field.
    host?.querySelector<HTMLInputElement>('[cmdk-input]')?.focus();
    return;
  }
  const active = document.activeElement;
  previousFocus = request.returnFocus ?? (active instanceof HTMLElement && active !== document.body ? active : null);
  beforeFocusReturn = hook;
  nonce += 1;
  current = { ...request, nonce };
  const opening = current;
  // Rendering waits for the text (a few ms after the first intent); a failed catalogue load still
  // opens the palette rather than leaving the shortcut dead (keys are shown as a last resort).
  loadMessages(pageLocale()).then(
    () => {
      if (current === opening) render();
    },
    () => {
      if (current === opening) render();
    },
  );
}

export function close(restoreFocus = true): void {
  if (!current) return;
  current = null;
  render();
  const target = previousFocus;
  const hook = beforeFocusReturn;
  previousFocus = null;
  beforeFocusReturn = undefined;
  if (restoreFocus && target?.isConnected) {
    // The header/hero fields open the palette on focus: tell the trigger this focus is a return.
    hook?.();
    target.focus({ preventScroll: true });
  }
}

export function toggle(request: OpenOptions): void {
  if (current) close(true);
  else open(request);
}
