/**
 * One polite toast at a time (`[data-mod-toast]`, `role=status`): a message and an optional
 * action (Undo, Report). Stays 6 s, or 10 s with an action; pauses while hovered or focused.
 */

let hideTimer: number | undefined;

export interface ToastAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

export function toast(message: string, action?: ToastAction, doc: Document = document): void {
  const region = doc.querySelector<HTMLElement>('[data-mod-toast]');
  if (!region) return;
  window.clearTimeout(hideTimer);
  region.replaceChildren();
  const box = doc.createElement('div');
  box.className =
    'pointer-events-auto flex max-w-md items-center gap-3 rounded-lg border border-border-strong bg-raised px-4 py-3 text-sm text-fg shadow-lg';
  const text = doc.createElement('p');
  text.className = 'min-w-0 flex-1';
  text.textContent = message;
  box.append(text);
  if (action) {
    const control = action.href ? doc.createElement('a') : doc.createElement('button');
    if (control instanceof HTMLAnchorElement && action.href) control.href = action.href;
    if (control instanceof HTMLButtonElement) control.type = 'button';
    control.className =
      'inline-flex min-h-11 shrink-0 items-center font-semibold text-link underline underline-offset-3 md:min-h-8';
    control.textContent = action.label;
    control.addEventListener('click', () => {
      action.onClick?.();
      dismiss();
    });
    box.append(control);
  }
  const dismiss = () => {
    window.clearTimeout(hideTimer);
    region.replaceChildren();
  };
  const schedule = () => {
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(dismiss, action ? 10_000 : 6000);
  };
  box.addEventListener('pointerenter', () => window.clearTimeout(hideTimer));
  box.addEventListener('pointerleave', schedule);
  box.addEventListener('focusin', () => window.clearTimeout(hideTimer));
  box.addEventListener('focusout', schedule);
  region.append(box);
  schedule();
}
