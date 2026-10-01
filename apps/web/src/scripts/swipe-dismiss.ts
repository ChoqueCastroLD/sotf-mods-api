/**
 * Swipe down to dismiss a floating bottom sheet (the language prompts on phones). Touch only, the
 * sheet follows the finger and a flick or a pull of a third of its height calls `onDismiss`
 * (which should hide it the same way its close button does); otherwise it springs back.
 * Idempotent per element; ignores taps on controls and horizontal gestures.
 */

const PHONE = '(max-width: 47.99rem)';
const bound = new WeakSet<HTMLElement>();

export function enableSwipeDismiss(element: HTMLElement, onDismiss: () => void, win: Window = window): void {
  if (bound.has(element)) return;
  bound.add(element);
  let startY = 0;
  let startX = 0;
  let lastY = 0;
  let lastTime = 0;
  let velocity = 0;
  let dragging = false;
  let tracking = false;

  const settle = () => {
    element.style.transition = 'transform 0.2s ease-out';
    element.style.transform = '';
    element.addEventListener(
      'transitionend',
      () => {
        element.style.transition = '';
      },
      { once: true },
    );
  };

  element.addEventListener(
    'touchstart',
    (event) => {
      const touch = event.touches[0];
      if (!touch || event.touches.length !== 1 || !win.matchMedia(PHONE).matches) return;
      tracking = true;
      dragging = false;
      startX = touch.clientX;
      startY = lastY = touch.clientY;
      lastTime = event.timeStamp;
      velocity = 0;
    },
    { passive: true },
  );
  element.addEventListener(
    'touchmove',
    (event) => {
      const touch = event.touches[0];
      if (!tracking || !touch) return;
      const dy = touch.clientY - startY;
      if (!dragging) {
        if (Math.abs(touch.clientX - startX) > 10 || dy < -6) {
          tracking = false;
          return;
        }
        if (dy < 8) return;
        dragging = true;
        element.style.transition = 'none';
      }
      const dt = event.timeStamp - lastTime;
      if (dt > 0) velocity = (touch.clientY - lastY) / dt;
      lastY = touch.clientY;
      lastTime = event.timeStamp;
      element.style.transform = `translateY(${Math.max(0, dy - 8)}px)`;
      event.preventDefault();
    },
    { passive: false },
  );
  const end = (event: TouchEvent) => {
    if (!tracking) return;
    tracking = false;
    if (!dragging) return;
    dragging = false;
    const height = element.getBoundingClientRect().height || 1;
    const pulled = lastY - startY;
    if (event.type === 'touchend' && (pulled > height * 0.33 || velocity > 0.55)) {
      element.style.transition = 'transform 0.18s ease-in';
      element.style.transform = `translateY(${height + 24}px)`;
      win.setTimeout(() => {
        onDismiss();
        element.style.transition = '';
        element.style.transform = '';
      }, 170);
      return;
    }
    settle();
  };
  element.addEventListener('touchend', end, { passive: true });
  element.addEventListener('touchcancel', end, { passive: true });
}
