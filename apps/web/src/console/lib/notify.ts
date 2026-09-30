/**
 * Toasts for shell code without sonner in the shell bundle: `notify.error(…)` loads
 * `@sotf/ui/toast` on first use. The `<Toaster>` itself mounts lazily too (`components/LazyToaster`)
 * when the browser is idle or at the first toast; sonner replays toasts created before it
 * subscribes, so nothing is lost. Route screens may import `toast` from `@sotf/ui/toast` directly.
 */
import type { ToastOptions } from '@sotf/ui/toast';

type ToastModule = typeof import('@sotf/ui/toast');

let loading: Promise<ToastModule> | null = null;
const listeners = new Set<() => void>();

/** Loads the toast module once (and asks the lazy Toaster to mount). */
export function loadToasts(): Promise<ToastModule> {
  if (!loading) {
    loading = import('@sotf/ui/toast');
    for (const listener of listeners) listener();
  }
  return loading;
}

/** Called when a toast is requested before the Toaster mounted. */
export function onToastsRequested(listener: () => void): () => void {
  listeners.add(listener);
  if (loading) listener();
  return () => listeners.delete(listener);
}

type Kind = 'success' | 'info' | 'warning' | 'error';

function show(kind: Kind, title: string, options?: ToastOptions): void {
  loadToasts().then(
    ({ toast }) => toast[kind](title, options),
    (error: unknown) => console.error('[console] toasts unavailable', error),
  );
}

export const notify = {
  success: (title: string, options?: ToastOptions) => show('success', title, options),
  info: (title: string, options?: ToastOptions) => show('info', title, options),
  warning: (title: string, options?: ToastOptions) => show('warning', title, options),
  error: (title: string, options?: ToastOptions) => show('error', title, options),
};
