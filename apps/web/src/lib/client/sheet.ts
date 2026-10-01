/**
 * Bottom sheet for server-rendered pages (`components/layout/Sheet.astro`), on the native
 * `<dialog>`: `showModal()` gives the focus trap, the inert page, Escape and the Android back
 * gesture for free; this module adds what makes it feel like an app:
 *
 * - drag to dismiss from the grip, the header or (when the body does not scroll, or is scrolled
 *   to the top) the body itself, with velocity-aware release and rubber-banding;
 * - optional snap points: `data-snaps="0.5 1"` (fractions of the available height, ascending;
 *   `data-snap-initial` picks the starting one). Dragging up from a snap goes to the next, down
 *   from the lowest dismisses;
 * - animated open/close (transform only; instant under reduced motion);
 * - tap on the scrim closes it; taps on links inside close it before navigating.
 *
 * Markup contract (see `Sheet.astro`): `<dialog data-sheet>` > `[data-sheet-panel]` >
 * `[data-sheet-grip]`, `[data-sheet-drag]` (header), `[data-sheet-body]`. Openers are any element
 * with `data-sheet-open="<dialog id>"` (bound by `sheet-loader.ts`, which loads this module on first use); `[data-sheet-close]` closes. Open state is exposed as
 * `aria-expanded` on the opener, and `sheet:open` / `sheet:close` bubble from the dialog.
 */
import { rubberBand } from './gesture.ts';
import { haptic } from './haptics.ts';

export const DISMISS_DISTANCE_RATIO = 0.4;
export const DISMISS_VELOCITY = 0.55; // px per ms
export const FLING_LOOKAHEAD_MS = 160;
export const DRAG_START_PX = 6;

export interface ReleaseInput {
  /** Current offset from the fully open position (px, ≥ 0 when pulled down). */
  y: number;
  /** Release velocity (px per ms, positive = downwards). */
  velocity: number;
  /** Resting offsets of the snap points, ascending (the fully open position is the smallest). */
  offsets: readonly number[];
  /** Panel height: the offset at which the sheet is fully hidden. */
  height: number;
}

export type ReleaseResult = { kind: 'dismiss' } | { kind: 'snap'; index: number; offset: number };

/** Where a released drag ends: the nearest resting place after a short fling, or dismissed. */
export function resolveRelease({ y, velocity, offsets, height }: ReleaseInput): ReleaseResult {
  const lowest = offsets.length > 0 ? Math.max(...offsets) : 0;
  const projected = y + velocity * FLING_LOOKAHEAD_MS;
  const beyondLowest = projected - lowest;
  const room = Math.max(height - lowest, 1);
  if (velocity > DISMISS_VELOCITY && y >= lowest - 4) return { kind: 'dismiss' };
  if (beyondLowest > room * DISMISS_DISTANCE_RATIO) return { kind: 'dismiss' };
  let best = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const [index, offset] of offsets.entries()) {
    const distance = Math.abs(offset - projected);
    if (distance < bestDistance) {
      best = index;
      bestDistance = distance;
    }
  }
  return { kind: 'snap', index: best, offset: offsets[best] ?? 0 };
}

interface SheetState {
  offsets: number[];
  snap: number;
  height: number;
  closing: boolean;
  opener: HTMLElement | null;
  cleanup: () => void;
}

const states = new WeakMap<HTMLDialogElement, SheetState>();

function reducedMotion(win: Window): boolean {
  return win.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function parseSnaps(dialog: HTMLDialogElement): number[] {
  const raw = dialog.dataset.snaps;
  if (!raw) return [];
  const values = raw
    .split(/[\s,]+/)
    .map(Number)
    .filter((value) => Number.isFinite(value) && value > 0 && value <= 1);
  return [...new Set(values)].sort((a, b) => a - b);
}

function setOffset(dialog: HTMLDialogElement, y: number, progress: number): void {
  dialog.style.setProperty('--sheet-y', `${Math.round(y * 10) / 10}px`);
  dialog.style.setProperty('--sheet-progress', progress.toFixed(3));
}

function measure(dialog: HTMLDialogElement, state: SheetState, win: Window): void {
  const fractions = parseSnaps(dialog);
  const root = win.document.documentElement;
  const safeTop = Number.parseFloat(win.getComputedStyle(root).getPropertyValue('--safe-top')) || 0;
  if (fractions.length > 0) {
    const available = Math.max(win.innerHeight - safeTop - 12, 240);
    dialog.style.setProperty('--sheet-h', `${available}px`);
    dialog.setAttribute('data-has-snaps', '');
    state.height = available;
    // Ascending fractions → descending offsets; keep offsets ascending (top-most first).
    state.offsets = fractions.map((fraction) => Math.round(available * (1 - fraction))).reverse();
  } else {
    const panel = dialog.querySelector<HTMLElement>('[data-sheet-panel]');
    state.height = panel?.offsetHeight ?? 0;
    state.offsets = [0];
  }
}

/** `data-snap-initial` is a fraction from `data-snaps`; the default is the lowest one. */
function initialSnapIndex(dialog: HTMLDialogElement, state: SheetState): number {
  const fractions = parseSnaps(dialog).reverse();
  const wanted = Number(dialog.dataset.snapInitial);
  const index = fractions.indexOf(wanted);
  return index >= 0 ? index : Math.max(state.offsets.length - 1, 0);
}

function syncExpanded(dialog: HTMLDialogElement, state: SheetState): void {
  dialog.toggleAttribute('data-expanded', state.snap === 0);
}

export function openSheet(dialog: HTMLDialogElement, opener: HTMLElement | null = null, win: Window = window): void {
  if (dialog.open) return;
  let state = states.get(dialog);
  if (!state) {
    state = { offsets: [0], snap: 0, height: 0, closing: false, opener: null, cleanup: () => {} };
    states.set(dialog, state);
    state.cleanup = bindSheet(dialog, state, win);
  }
  state.opener = opener;
  state.closing = false;
  dialog.removeAttribute('data-closing');
  dialog.showModal();
  measure(dialog, state, win);
  state.snap = initialSnapIndex(dialog, state);
  setOffset(dialog, state.offsets[state.snap] ?? 0, 0);
  syncExpanded(dialog, state);
  opener?.setAttribute('aria-expanded', 'true');
  dialog.dispatchEvent(new CustomEvent('sheet:open', { bubbles: true }));
}

export function closeSheet(
  dialog: HTMLDialogElement,
  options: { immediate?: boolean } = {},
  win: Window = window,
): void {
  const state = states.get(dialog);
  if (!dialog.open || !state || state.closing) return;
  state.closing = true;
  const finish = () => {
    if (dialog.open) dialog.close();
  };
  const panel = dialog.querySelector<HTMLElement>('[data-sheet-panel]');
  if (options.immediate || !panel || reducedMotion(win)) {
    finish();
    return;
  }
  dialog.removeAttribute('data-dragging');
  dialog.setAttribute('data-closing', '');
  let done = false;
  const complete = () => {
    if (done) return;
    done = true;
    panel.removeEventListener('transitionend', onEnd);
    finish();
  };
  const onEnd = (event: TransitionEvent) => {
    if (event.target === panel && event.propertyName === 'transform') complete();
  };
  panel.addEventListener('transitionend', onEnd);
  win.setTimeout(complete, 420);
}

function bindSheet(dialog: HTMLDialogElement, state: SheetState, win: Window): () => void {
  const panel = dialog.querySelector<HTMLElement>('[data-sheet-panel]');
  const body = dialog.querySelector<HTMLElement>('[data-sheet-body]');
  const controller = new AbortController();
  const { signal } = controller;
  if (!panel) return () => controller.abort();

  // Reset when the dialog closes by any route (Escape, back gesture, form method=dialog).
  dialog.addEventListener(
    'close',
    () => {
      state.closing = false;
      dialog.removeAttribute('data-closing');
      dialog.removeAttribute('data-dragging');
      setOffset(dialog, 0, 0);
      state.opener?.setAttribute('aria-expanded', 'false');
      dialog.dispatchEvent(new CustomEvent('sheet:close', { bubbles: true }));
    },
    { signal },
  );
  dialog.addEventListener(
    'cancel',
    (event) => {
      event.preventDefault();
      closeSheet(dialog, {}, win);
    },
    { signal },
  );
  dialog.addEventListener(
    'click',
    (event) => {
      const target = event.target as Element | null;
      if (target === dialog) return closeSheet(dialog, {}, win);
      if (target?.closest('[data-sheet-close]')) return closeSheet(dialog, {}, win);
      const link = target?.closest('a[href]');
      if (link && !(event as MouseEvent).defaultPrevented) closeSheet(dialog, { immediate: true }, win);
    },
    { signal },
  );
  win.addEventListener('pagehide', () => closeSheet(dialog, { immediate: true }, win), { signal });
  win.addEventListener(
    'resize',
    () => {
      if (!dialog.open) return;
      measure(dialog, state, win);
      setOffset(dialog, state.offsets[state.snap] ?? 0, 0);
    },
    { signal },
  );

  // ---- Drag ------------------------------------------------------------------------------
  let dragging = false;
  let startY = 0;
  let startOffset = 0;
  let samples: Array<{ y: number; t: number }> = [];

  const offsetsMin = () => state.offsets[0] ?? 0;
  const beginDrag = (y: number) => {
    dragging = true;
    startY = y;
    startOffset = state.offsets[state.snap] ?? 0;
    samples = [{ y, t: win.performance.now() }];
    dialog.setAttribute('data-dragging', '');
  };
  const moveDrag = (y: number) => {
    samples.push({ y, t: win.performance.now() });
    if (samples.length > 6) samples.shift();
    let next = startOffset + (y - startY);
    if (next < offsetsMin()) next = offsetsMin() - rubberBand(offsetsMin() - next);
    const progress = Math.min(Math.max((next - offsetsMin()) / Math.max(state.height, 1), 0), 1);
    setOffset(dialog, next, progress);
  };
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    dialog.removeAttribute('data-dragging');
    const first = samples[0];
    const last = samples[samples.length - 1];
    const dt = first && last ? Math.max(last.t - first.t, 1) : 1;
    const velocity = first && last ? (last.y - first.y) / dt : 0;
    const current = Number.parseFloat(dialog.style.getPropertyValue('--sheet-y')) || 0;
    const result = resolveRelease({ y: current, velocity, offsets: state.offsets, height: state.height });
    if (result.kind === 'dismiss') {
      haptic('tick');
      closeSheet(dialog, {}, win);
      return;
    }
    if (result.index !== state.snap) haptic('select');
    state.snap = result.index;
    syncExpanded(dialog, state);
    setOffset(dialog, result.offset, 0);
  };

  const scrollable = () => (body ? body.scrollHeight > body.clientHeight + 1 : false);
  const dragZones = Array.from(panel.querySelectorAll<HTMLElement>('[data-sheet-grip], [data-sheet-drag]'));
  const startOnZone = (event: PointerEvent) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if ((event.target as Element).closest('button, a, input, select, textarea')) return;
    beginDrag(event.clientY);
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };
  for (const zone of dragZones) {
    zone.addEventListener('pointerdown', startOnZone, { signal });
    zone.addEventListener('pointermove', (event) => dragging && moveDrag(event.clientY), { signal });
    zone.addEventListener('pointerup', endDrag, { signal });
    zone.addEventListener('pointercancel', endDrag, { signal });
  }

  // The body drags the sheet only from its top edge (or when it has nothing to scroll). Touch
  // events, because the browser claims a pointer stream once it starts to scroll.
  let bodyTouchY = 0;
  let bodyArmed = false;
  body?.addEventListener(
    'touchstart',
    (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      bodyTouchY = touch.clientY;
      bodyArmed = !scrollable() || body.scrollTop <= 0;
    },
    { passive: true, signal },
  );
  body?.addEventListener(
    'touchmove',
    (event) => {
      const touch = event.touches[0];
      if (!touch || !bodyArmed) return;
      const dy = touch.clientY - bodyTouchY;
      if (!dragging) {
        const pullingDown = dy > DRAG_START_PX;
        const pullingUpFromSnap = dy < -DRAG_START_PX && hasHigherSnap();
        if (!pullingDown && !pullingUpFromSnap) {
          if (scrollable() && body.scrollTop > 0) bodyArmed = false;
          return;
        }
        if (pullingDown && scrollable() && body.scrollTop > 0) return;
        beginDrag(touch.clientY);
      }
      if (event.cancelable) event.preventDefault();
      moveDrag(touch.clientY);
    },
    { passive: false, signal },
  );
  const hasHigherSnap = () => (state.offsets[state.snap] ?? 0) > offsetsMin();
  body?.addEventListener('touchend', endDrag, { signal });
  body?.addEventListener('touchcancel', endDrag, { signal });

  return () => controller.abort();
}
