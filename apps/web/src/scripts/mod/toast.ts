/**
 * Compatibility entry of the page toast: `toast(message, action?, kind?)` goes through the shared
 * toast bus (`lib/client/toast.ts`: stacking, merged repeats, pause on hover/focus, swipe).
 * Actions (Undo, Report) keep the longer 10 s window; errors stay until dismissed.
 */
import { toast as bus, type ToastKind } from '../../lib/client/toast.ts';

export interface ToastAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

export function toast(message: string, action?: ToastAction, kind: Exclude<ToastKind, 'progress'> = 'info'): void {
  bus[kind](message, action ? { action, duration: 10_000 } : undefined);
}
