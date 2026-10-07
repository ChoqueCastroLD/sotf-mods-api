/**
 * Toasts of the public site: the one place transient feedback appears (saved, copied, followed,
 * failed, undo). Vanilla on purpose (the shared boot module has a size budget and the islands
 * must not pull in a toast library); the look matches `@sotf/ui/toast`, which the console uses.
 *
 * - Stacks at most {@link MAX_VISIBLE}; the rest wait their turn.
 * - The same message while it is on screen is merged (a counter appears), not repeated.
 * - Pauses while hovered or focused, and while the tab is hidden. Swipe sideways to dismiss on
 *   touch screens.
 * - Success, info and warning go away by themselves; errors stay until dismissed. Progress
 *   toasts stay until the promise settles, then become a success or an error in place.
 * - One action («Undo», «Retry», or a link such as «View»).
 * - Polite messages go to a polite live region, errors and warnings to an assertive one.
 *   Both exist in the page before the first toast (`BaseLayout`), so they are announced.
 * - Sits above the phone tab bar and the sticky download bar (`--toast-bottom`, `global.css`).
 */
export type ToastKind = 'success' | 'info' | 'warning' | 'error' | 'progress';

export interface ToastAction {
  label: string;
  onClick?: () => void;
  /** Renders a link («View»); `onClick` still runs first. */
  href?: string;
}

export interface ToastOptions {
  description?: string;
  action?: ToastAction;
  /** Stable id: calling again with it updates the toast in place. */
  id?: string;
  /** Milliseconds; `Infinity` keeps it until dismissed. */
  duration?: number;
  /** Runs once when the toast goes away for any reason. */
  onClose?: () => void;
}

export const MAX_VISIBLE = 3;
export const TOAST_DURATION_MS = 5000;
const EXIT_MS = 180;
const SWIPE_DISTANCE_PX = 72;
const SWIPE_VELOCITY = 0.45;

interface Entry {
  key: string;
  kind: ToastKind;
  message: string;
  options: ToastOptions;
  count: number;
  el: HTMLElement | null;
  duration: number;
  timer: number | undefined;
  /** Time left when the timer was paused. */
  remaining: number;
  startedAt: number;
  holds: number;
  shown: boolean;
  closed: boolean;
}

const entries = new Map<string, Entry>();
const queue: Entry[] = [];
let sequence = 0;

const SVG_ATTRS =
  'xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';
const ICONS: Record<ToastKind, string> = {
  success: `<svg ${SVG_ATTRS} class="text-success"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  info: `<svg ${SVG_ATTRS} class="text-signal"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`,
  warning: `<svg ${SVG_ATTRS} class="text-warning"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/></svg>`,
  error: `<svg ${SVG_ATTRS} class="text-danger"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
  progress:
    '<span class="size-[18px] animate-spin rounded-full border-2 border-signal/30 border-t-signal motion-reduce:animate-none"></span>',
};
const CLOSE_ICON = `<svg ${SVG_ATTRS.replace('width="18" height="18"', 'width="16" height="16"')}><path d="M18 6 6 18M6 6l12 12"/></svg>`;

interface Regions {
  root: HTMLElement;
  polite: HTMLElement;
  assertive: HTMLElement;
  close: string;
}

function regions(doc: Document = document): Regions {
  let root = doc.querySelector<HTMLElement>('[data-toast-region]');
  if (!root) {
    root = doc.createElement('div');
    root.setAttribute('data-toast-region', '');
    doc.body.append(root);
  }
  let polite = root.querySelector<HTMLElement>('[data-toast-polite]');
  if (!polite) {
    polite = doc.createElement('div');
    polite.setAttribute('data-toast-polite', '');
    polite.setAttribute('role', 'status');
    polite.setAttribute('aria-live', 'polite');
    root.append(polite);
  }
  let assertive = root.querySelector<HTMLElement>('[data-toast-assertive]');
  if (!assertive) {
    assertive = doc.createElement('div');
    assertive.setAttribute('data-toast-assertive', '');
    assertive.setAttribute('role', 'alert');
    assertive.setAttribute('aria-live', 'assertive');
    root.append(assertive);
  }
  return { root, polite, assertive, close: root.dataset.labelClose || 'Close' };
}

function isReducedMotion(): boolean {
  return typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function stopTimer(entry: Entry): void {
  if (entry.timer !== undefined) window.clearTimeout(entry.timer);
  entry.timer = undefined;
}

function startTimer(entry: Entry): void {
  stopTimer(entry);
  if (!Number.isFinite(entry.remaining) || entry.holds > 0 || entry.closed || !entry.shown) return;
  entry.startedAt = Date.now();
  entry.timer = window.setTimeout(() => {
    // Nobody is looking at a background tab: give the reader a moment after coming back.
    if (document.hidden) {
      entry.remaining = 1500;
      startTimer(entry);
    } else close_(entry);
  }, entry.remaining);
}

function hold(entry: Entry): void {
  if (entry.holds++ === 0 && entry.timer !== undefined) {
    entry.remaining = Math.max(400, entry.remaining - (Date.now() - entry.startedAt));
    stopTimer(entry);
  }
}

function release(entry: Entry): void {
  entry.holds = Math.max(0, entry.holds - 1);
  if (entry.holds === 0) startTimer(entry);
}

function button(doc: Document, className: string, label: string): HTMLButtonElement {
  const control = doc.createElement('button');
  control.type = 'button';
  control.className = className;
  control.textContent = label;
  return control;
}

const ACTION_CLASS =
  'inline-flex h-8 shrink-0 items-center rounded-sm px-2 text-sm font-semibold text-link hover:bg-fg/8 focus-visible:outline-2 focus-visible:outline-focus';

function paint(entry: Entry, close: string): HTMLElement {
  const doc = document;
  const el = entry.el ?? doc.createElement('div');
  el.className =
    'pointer-events-auto flex w-full items-start gap-3 rounded-lg border bg-overlay p-3 pe-2 text-fg shadow-lg inset-shadow-highlight ' +
    (entry.kind === 'error' ? 'border-danger/50' : 'border-border');
  el.dataset.toast = entry.kind;
  el.replaceChildren();
  const icon = doc.createElement('span');
  icon.className = 'mt-0.5 flex shrink-0';
  icon.innerHTML = ICONS[entry.kind];
  const body = doc.createElement('div');
  body.className = 'flex min-w-0 flex-1 flex-col gap-0.5';
  const title = doc.createElement('p');
  title.className = 'text-sm font-medium break-words';
  title.textContent = entry.message;
  if (entry.count > 1) {
    const badge = doc.createElement('span');
    badge.className = 'ms-2 rounded-full bg-fg/10 px-1.5 py-0.5 text-xs font-semibold text-fg-muted tabular-nums';
    badge.textContent = String(entry.count);
    title.append(badge);
  }
  body.append(title);
  if (entry.options.description) {
    const detail = doc.createElement('p');
    detail.className = 'text-sm text-fg-muted break-words';
    detail.textContent = entry.options.description;
    body.append(detail);
  }
  el.append(icon, body);
  const action = entry.options.action;
  if (action) {
    const run = () => {
      action.onClick?.();
      close_(entry);
    };
    if (action.href) {
      const link = doc.createElement('a');
      link.href = action.href;
      link.className = ACTION_CLASS;
      link.textContent = action.label;
      link.addEventListener('click', run);
      el.append(link);
    } else {
      const control = button(doc, ACTION_CLASS, action.label);
      control.addEventListener('click', run);
      el.append(control);
    }
  }
  const dismiss = doc.createElement('button');
  dismiss.type = 'button';
  dismiss.setAttribute('aria-label', close);
  dismiss.className =
    'flex size-8 shrink-0 items-center justify-center rounded-sm text-fg-subtle hover:bg-fg/8 hover:text-fg focus-visible:outline-2 focus-visible:outline-focus';
  dismiss.innerHTML = CLOSE_ICON;
  dismiss.addEventListener('click', () => close_(entry));
  el.append(dismiss);
  return el;
}

/** Wires hover, focus and swipe once per element. */
function wire(entry: Entry, el: HTMLElement): void {
  if (el.dataset.wired) return;
  el.dataset.wired = '1';
  el.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') hold(entry);
  });
  el.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') release(entry);
  });
  el.addEventListener('focusin', () => hold(entry));
  el.addEventListener('focusout', () => release(entry));

  let startX = 0;
  let startAt = 0;
  let dragging = false;
  el.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' || (event.target as Element).closest('a, button')) return;
    dragging = true;
    startX = event.clientX;
    startAt = event.timeStamp;
    hold(entry);
    try {
      el.setPointerCapture(event.pointerId);
    } catch {
      // Not capturable (synthetic or finished pointer): the drag still works while it stays on the toast.
    }
    el.style.transition = 'none';
  });
  el.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    const dx = event.clientX - startX;
    el.style.translate = `${dx}px 0`;
    el.style.opacity = String(Math.max(0.2, 1 - Math.abs(dx) / 260));
  });
  const end = (event: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    const dx = event.clientX - startX;
    const speed = Math.abs(dx) / Math.max(1, event.timeStamp - startAt);
    el.style.transition = '';
    release(entry);
    if (Math.abs(dx) > SWIPE_DISTANCE_PX || (speed > SWIPE_VELOCITY && Math.abs(dx) > 24)) {
      el.style.translate = `${dx < 0 ? -120 : 120}% 0`;
      el.style.opacity = '0';
      close_(entry);
    } else {
      el.style.translate = '';
      el.style.opacity = '';
    }
  };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);
}

function mount(entry: Entry): void {
  const { polite, assertive, close } = regions();
  const el = paint(entry, close);
  entry.el = el;
  wire(entry, el);
  const target = entry.kind === 'error' || entry.kind === 'warning' ? assertive : polite;
  if (el.parentElement !== target) {
    el.dataset.state = 'enter';
    target.append(el);
    // One frame later the transition runs from the entering state.
    requestAnimationFrame(() => {
      if (!entry.closed) el.dataset.state = 'open';
    });
  }
  entry.shown = true;
  entry.remaining = entry.duration;
  startTimer(entry);
}

function pump(): void {
  while (queue.length > 0 && visibleCount() < MAX_VISIBLE) {
    const next = queue.shift() as Entry;
    if (!next.closed) mount(next);
  }
}

function visibleCount(): number {
  let count = 0;
  for (const entry of entries.values()) if (entry.shown && !entry.closed) count++;
  return count;
}

function close_(entry: Entry): void {
  if (entry.closed) return;
  entry.closed = true;
  stopTimer(entry);
  entries.delete(entry.key);
  const index = queue.indexOf(entry);
  if (index >= 0) queue.splice(index, 1);
  const el = entry.el;
  entry.options.onClose?.();
  if (!el) {
    pump();
    return;
  }
  const remove = () => {
    el.remove();
    pump();
  };
  el.dataset.state = 'exit';
  if (isReducedMotion()) remove();
  else window.setTimeout(remove, EXIT_MS);
}

function defaultDuration(kind: ToastKind): number {
  if (kind === 'error' || kind === 'progress') return Number.POSITIVE_INFINITY;
  return kind === 'warning' ? 8000 : TOAST_DURATION_MS;
}

function show(kind: ToastKind, message: string, options: ToastOptions = {}): string {
  const key = options.id ?? `${kind}:${message}:${options.description ?? ''}`;
  const existing = entries.get(key);
  if (existing && !existing.closed) {
    // Same toast: update it in place (explicit id) or count the repeat (same text).
    existing.kind = kind;
    existing.message = message;
    existing.options = options;
    existing.duration = options.duration ?? defaultDuration(kind);
    if (options.id === undefined) existing.count++;
    else existing.count = 1;
    if (existing.shown) {
      mount(existing);
      const el = existing.el;
      if (el && !isReducedMotion() && options.id === undefined) {
        el.animate?.([{ scale: '1.03' }, { scale: '1' }], { duration: 160 });
      }
    }
    return key;
  }
  const entry: Entry = {
    key,
    kind,
    message,
    options,
    count: 1,
    el: null,
    duration: options.duration ?? defaultDuration(kind),
    timer: undefined,
    remaining: 0,
    startedAt: 0,
    holds: 0,
    shown: false,
    closed: false,
  };
  entries.set(key, entry);
  if (visibleCount() < MAX_VISIBLE && queue.length === 0) mount(entry);
  else queue.push(entry);
  return key;
}

export interface ProgressMessages<T> {
  loading: string;
  success: string | ((value: T) => string);
  error: string | ((error: unknown) => string);
}

export const toast = {
  success: (message: string, options?: ToastOptions) => show('success', message, options),
  info: (message: string, options?: ToastOptions) => show('info', message, options),
  warning: (message: string, options?: ToastOptions) => show('warning', message, options),
  error: (message: string, options?: ToastOptions) => show('error', message, options),
  /** Stays until updated (same `id`) or dismissed. */
  loading: (message: string, options?: ToastOptions) => show('progress', message, options),
  /** A progress toast that becomes a success or an error when `promise` settles. */
  progress<T>(promise: Promise<T>, messages: ProgressMessages<T>, options: Omit<ToastOptions, 'id'> = {}): string {
    const id = `progress-${++sequence}`;
    show('progress', messages.loading, { ...options, id });
    promise.then(
      (value) =>
        show('success', typeof messages.success === 'function' ? messages.success(value) : messages.success, {
          ...options,
          id,
        }),
      (error: unknown) =>
        show('error', typeof messages.error === 'function' ? messages.error(error) : messages.error, {
          ...options,
          id,
        }),
    );
    return id;
  },
  dismiss(id?: string): void {
    if (id === undefined) {
      for (const entry of [...entries.values()]) close_(entry);
      return;
    }
    const entry = entries.get(id);
    if (entry) close_(entry);
  },
};

/** Test helper: forget every toast. */
export function resetToasts(): void {
  for (const entry of entries.values()) stopTimer(entry);
  entries.clear();
  queue.length = 0;
  document.querySelector('[data-toast-region]')?.remove();
}

/** `show(message, undo?, kind?)`: the shape the profile and build page scripts were written against. */
export interface PageToast {
  show(message: string, undo?: () => void, kind?: Exclude<ToastKind, 'progress'>): void;
}

/** Toast with an optional «Undo» (label read from the region, localised by the layout). */
export function pageToast(): PageToast {
  return {
    show(message, undo, kind = undo ? 'success' : 'info') {
      const label = document.querySelector<HTMLElement>('[data-toast-region]')?.dataset.labelUndo ?? 'Undo';
      toast[kind](message, undo ? { action: { label, onClick: undo }, duration: 10_000 } : undefined);
    },
  };
}
