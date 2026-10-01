/**
 * Bottom-sheet behaviour of the entity dialogs on phones (`ModDialog.astro`): swipe down on the
 * header (grabber) or on the body when it is scrolled to the top to dismiss, with the sheet
 * following the finger, the backdrop fading with it and a flick or a pull past a third of the
 * height closing it. Touch only, so mouse and keyboard users never see it; the dialog keeps its
 * native semantics (focus trap, Esc, inert page). Respects `prefers-reduced-motion` (no spring).
 */

const PHONE = '(max-width: 47.99rem)';
const CLOSE_RATIO = 0.33;
const FLICK_SPEED = 0.55; // px per ms

const bound = new WeakSet<HTMLDialogElement>();

export function bindSheetDrag(dialog: HTMLDialogElement, win: Window = window): void {
  if (bound.has(dialog) || dialog.dataset.sheetSize === 'full') return;
  bound.add(dialog);
  const body = dialog.querySelector<HTMLElement>('[data-sheet-body]') ?? dialog;
  const header = dialog.querySelector<HTMLElement>('[data-sheet-header]');
  let startY = 0;
  let startX = 0;
  let lastY = 0;
  let lastTime = 0;
  let velocity = 0;
  let tracking = false;
  let dragging = false;
  let fromHeader = false;

  const reset = (animate: boolean) => {
    dialog.removeAttribute('data-dragging');
    if (!animate) dialog.style.transition = 'none';
    dialog.style.transform = '';
    dialog.style.removeProperty('--sheet-progress');
    if (!animate) requestAnimationFrame(() => dialog.style.removeProperty('transition'));
  };

  dialog.addEventListener(
    'touchstart',
    (event) => {
      if (!win.matchMedia(PHONE).matches || event.touches.length !== 1) return;
      const touch = event.touches[0];
      if (!touch) return;
      const target = event.target as Element | null;
      fromHeader = Boolean(header && target && header.contains(target));
      // Inside the body, only when it is at the very top (otherwise it is a normal scroll).
      const scroller = target?.closest<HTMLElement>('[data-sheet-body], dialog') ?? body;
      if (!fromHeader && scroller.scrollTop > 0) return;
      if (!fromHeader && target?.closest('textarea, input, select, [data-sheet-nodrag], [contenteditable]')) return;
      tracking = true;
      dragging = false;
      startX = touch.clientX;
      startY = lastY = touch.clientY;
      lastTime = event.timeStamp;
      velocity = 0;
    },
    { passive: true },
  );

  dialog.addEventListener(
    'touchmove',
    (event) => {
      if (!tracking) return;
      const touch = event.touches[0];
      if (!touch) return;
      const dy = touch.clientY - startY;
      const dx = touch.clientX - startX;
      if (!dragging) {
        if (dy < 8 || Math.abs(dx) > dy) {
          // Upwards or sideways: not a dismissal.
          if (dy < -4 || Math.abs(dx) > 12) tracking = false;
          return;
        }
        dragging = true;
        dialog.setAttribute('data-dragging', '');
      }
      event.preventDefault();
      const dt = event.timeStamp - lastTime;
      if (dt > 0) velocity = (touch.clientY - lastY) / dt;
      lastY = touch.clientY;
      lastTime = event.timeStamp;
      const offset = Math.max(0, dy - 8);
      dialog.style.transform = `translateY(${offset}px)`;
      const height = dialog.getBoundingClientRect().height || 1;
      dialog.style.setProperty('--sheet-progress', String(Math.max(0.15, 1 - offset / height)));
    },
    { passive: false },
  );

  const finish = (event: TouchEvent) => {
    if (!tracking) return;
    tracking = false;
    if (!dragging) return;
    dragging = false;
    const height = dialog.getBoundingClientRect().height || 1;
    const offset = lastY - startY;
    const quick = velocity > FLICK_SPEED && event.type === 'touchend';
    dialog.removeAttribute('data-dragging');
    if (event.type === 'touchend' && (offset > height * CLOSE_RATIO || quick)) {
      const reduce = win.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        dialog.close();
        reset(false);
        return;
      }
      dialog.style.transform = `translateY(${height}px)`;
      dialog.addEventListener(
        'transitionend',
        () => {
          dialog.close();
          reset(false);
        },
        { once: true },
      );
      // Safety net when no transition fires (hidden tab, reduced effects).
      win.setTimeout(() => {
        if (dialog.open) {
          dialog.close();
          reset(false);
        }
      }, 350);
      return;
    }
    reset(true);
  };
  dialog.addEventListener('touchend', finish, { passive: true });
  dialog.addEventListener('touchcancel', finish, { passive: true });
}
