/**
 * Touch (and trackpad/mouse) gestures of the gallery lightbox, bound once to its slide track:
 *
 * - pinch with two fingers (or Ctrl + wheel / trackpad pinch) zooms the picture under the fingers,
 *   up to 5×; double tap or double click toggles 2.5×;
 * - one finger pans a zoomed picture (slides stop scrolling meanwhile);
 * - one finger dragging a picture that is not zoomed vertically dismisses the lightbox: the
 *   picture follows the finger, the black backdrop fades, a flick or a pull of ~15 % of the screen
 *   closes it (touch/pen only; the horizontal swipe between slides stays the native scroll-snap).
 *
 * `touch-action: pan-x` keeps vertical gestures with us while the browser still scrolls the slides
 * horizontally; zoomed, the track switches to `touch-action: none`.
 */

interface Point {
  x: number;
  y: number;
}

interface ZoomState {
  scale: number;
  x: number;
  y: number;
}

const MAX_SCALE = 5;
const DOUBLE_TAP_SCALE = 2.5;
const CLOSE_DISTANCE = 0.15;
const FLICK_SPEED = 0.5;

function distance(a: Point, b: Point): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function bindLightboxGestures(dialog: HTMLDialogElement, track: HTMLElement, win: Window = window): void {
  const reduceMotion = () => win.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pointers = new Map<number, Point>();
  const state: ZoomState = { scale: 1, x: 0, y: 0 };
  let target: HTMLElement | null = null; // the <img> being transformed
  let frame: HTMLElement | null = null; // the <figure> moved by the dismissal drag
  let mode: 'idle' | 'pan' | 'pinch' | 'dismiss' | 'maybe' = 'idle';
  let startPoint: Point = { x: 0, y: 0 };
  let startState: ZoomState = { ...state };
  let pinchStart = { distance: 1, mid: { x: 0, y: 0 } };
  let lastTap = { time: 0, x: 0, y: 0 };
  let dragDy = 0;
  let velocity = 0;
  let lastMove = { y: 0, time: 0 };

  const slideAt = (event: Event): { img: HTMLElement; figure: HTMLElement } | null => {
    const element = event.target as Element | null;
    const img = element?.closest('[data-lightbox-slide]')?.querySelector<HTMLElement>('picture img');
    const figure = img?.closest<HTMLElement>('figure');
    return img && figure ? { img, figure } : null;
  };

  const apply = (animate: boolean) => {
    if (!target) return;
    target.style.transition = animate && !reduceMotion() ? 'transform 0.22s var(--ease-out, ease-out)' : 'none';
    target.style.transform =
      state.scale === 1 && state.x === 0 && state.y === 0
        ? ''
        : `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`;
  };

  const setZoomed = (zoomed: boolean) => {
    track.style.touchAction = zoomed ? 'none' : '';
    track.style.overflowX = zoomed ? 'hidden' : '';
    dialog.toggleAttribute('data-zoomed', zoomed);
  };

  const center = (el: HTMLElement): Point => {
    const rect = el.getBoundingClientRect();
    // The rect includes the current transform; the untransformed centre is what we need.
    return { x: rect.left + rect.width / 2 - state.x, y: rect.top + rect.height / 2 - state.y };
  };

  const clamp = () => {
    if (!target) return;
    if (state.scale <= 1) {
      state.x = 0;
      state.y = 0;
      return;
    }
    const base = target.getBoundingClientRect();
    const width = base.width / state.scale;
    const height = base.height / state.scale;
    const limitX = Math.max(0, (width * state.scale - win.innerWidth) / 2 + 24);
    const limitY = Math.max(0, (height * state.scale - win.innerHeight) / 2 + 24);
    state.x = Math.max(-limitX, Math.min(limitX, state.x));
    state.y = Math.max(-limitY, Math.min(limitY, state.y));
  };

  const zoomAbout = (scale: number, about: Point, from: ZoomState) => {
    if (!target) return;
    const c = center(target);
    const next = Math.max(1, Math.min(MAX_SCALE, scale));
    const ratio = next / from.scale;
    // Keep the point under `about` fixed: T' = about - (about - T) * ratio (centre-relative).
    const ax = about.x - c.x;
    const ay = about.y - c.y;
    state.scale = next;
    state.x = ax - (ax - from.x) * ratio;
    state.y = ay - (ay - from.y) * ratio;
  };

  const resetZoom = (animate = false) => {
    if (state.scale === 1 && state.x === 0 && state.y === 0) return;
    state.scale = 1;
    state.x = 0;
    state.y = 0;
    apply(animate);
    setZoomed(false);
  };

  const resetDrag = (animate: boolean) => {
    if (frame) {
      frame.style.transition = animate && !reduceMotion() ? 'transform 0.22s var(--ease-out, ease-out)' : 'none';
      frame.style.transform = '';
    }
    dialog.style.removeProperty('--lb-progress');
    dialog.removeAttribute('data-dismissing');
    dragDy = 0;
  };

  track.addEventListener('pointerdown', (event) => {
    const slide = slideAt(event);
    if (!slide) return;
    if ((event.target as Element).closest('[data-youtube-facade]')) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size === 1) {
      target = slide.img;
      frame = slide.figure;
      startPoint = { x: event.clientX, y: event.clientY };
      startState = { ...state };
      mode = state.scale > 1 ? 'pan' : 'maybe';
      velocity = 0;
      lastMove = { y: event.clientY, time: event.timeStamp };
      // Double tap / double click.
      const now = event.timeStamp;
      if (now - lastTap.time < 320 && Math.hypot(event.clientX - lastTap.x, event.clientY - lastTap.y) < 28) {
        lastTap = { time: 0, x: 0, y: 0 };
        if (state.scale > 1) resetZoom(true);
        else {
          zoomAbout(DOUBLE_TAP_SCALE, { x: event.clientX, y: event.clientY }, { scale: 1, x: 0, y: 0 });
          clamp();
          apply(true);
          setZoomed(true);
        }
        mode = 'idle';
        event.preventDefault();
        return;
      }
      lastTap = { time: now, x: event.clientX, y: event.clientY };
    } else if (pointers.size === 2 && target) {
      const [a, b] = [...pointers.values()] as [Point, Point];
      pinchStart = { distance: distance(a, b) || 1, mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } };
      startState = { ...state };
      mode = 'pinch';
      resetDrag(false);
      try {
        track.setPointerCapture(event.pointerId);
      } catch {
        // Capture is best-effort.
      }
    }
  });

  track.addEventListener('pointermove', (event) => {
    if (!pointers.has(event.pointerId) || !target) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (mode === 'pinch' && pointers.size >= 2) {
      const [a, b] = [...pointers.values()] as [Point, Point];
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const scale = (startState.scale * distance(a, b)) / pinchStart.distance;
      zoomAbout(scale, pinchStart.mid, startState);
      // Follow the fingers' travel too.
      state.x += mid.x - pinchStart.mid.x;
      state.y += mid.y - pinchStart.mid.y;
      apply(false);
      setZoomed(true);
      event.preventDefault();
      return;
    }
    const dx = event.clientX - startPoint.x;
    const dy = event.clientY - startPoint.y;
    if (mode === 'pan') {
      state.x = startState.x + dx;
      state.y = startState.y + dy;
      clamp();
      apply(false);
      return;
    }
    if (mode === 'maybe' && event.pointerType !== 'mouse') {
      if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx) * 1.3) {
        mode = 'dismiss';
        dialog.setAttribute('data-dismissing', '');
        try {
          track.setPointerCapture(event.pointerId);
        } catch {
          // Best-effort.
        }
      }
    }
    if (mode === 'dismiss' && frame) {
      const dt = event.timeStamp - lastMove.time;
      if (dt > 0) velocity = (event.clientY - lastMove.y) / dt;
      lastMove = { y: event.clientY, time: event.timeStamp };
      dragDy = dy;
      frame.style.transition = 'none';
      frame.style.transform = `translate3d(0, ${dy}px, 0) scale(${Math.max(0.8, 1 - Math.abs(dy) / (win.innerHeight * 2.5))})`;
      dialog.style.setProperty('--lb-progress', String(Math.max(0, 1 - Math.abs(dy) / (win.innerHeight * 0.55))));
      event.preventDefault();
    }
  });

  const end = (event: PointerEvent) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.delete(event.pointerId);
    if (mode === 'pinch') {
      if (pointers.size < 2) {
        if (state.scale < 1.05) {
          resetZoom(true);
        } else {
          clamp();
          apply(true);
          setZoomed(true);
        }
        // The remaining finger may keep panning.
        const rest = [...pointers.values()][0];
        mode = pointers.size === 1 && state.scale > 1 ? 'pan' : 'idle';
        if (rest) {
          startPoint = rest;
          startState = { ...state };
        }
      }
      return;
    }
    if (pointers.size > 0) return;
    if (mode === 'dismiss') {
      const quick = Math.abs(velocity) > FLICK_SPEED && event.type === 'pointerup';
      if (event.type === 'pointerup' && (Math.abs(dragDy) > win.innerHeight * CLOSE_DISTANCE || quick)) {
        if (frame) {
          frame.style.transition = reduceMotion() ? 'none' : 'transform 0.18s ease-in, opacity 0.18s ease-in';
          frame.style.transform = `translate3d(0, ${dragDy > 0 ? '100%' : '-100%'}, 0)`;
        }
        win.setTimeout(
          () => {
            dialog.close();
            resetDrag(false);
          },
          reduceMotion() ? 0 : 160,
        );
      } else {
        resetDrag(true);
      }
    } else if (mode === 'pan') {
      clamp();
      apply(true);
    }
    mode = 'idle';
  };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);

  track.addEventListener('dblclick', (event) => {
    // Mouse: the pointerdown pair above already toggled; keep native selection quiet.
    event.preventDefault();
  });

  track.addEventListener(
    'wheel',
    (event) => {
      if (!event.ctrlKey && state.scale === 1) return;
      const slide = slideAt(event);
      if (!slide) return;
      event.preventDefault();
      target = slide.img;
      const factor = Math.exp(-event.deltaY * (event.ctrlKey ? 0.01 : 0.002));
      const from = { ...state };
      zoomAbout(state.scale * factor, { x: event.clientX, y: event.clientY }, from);
      if (state.scale < 1.02) resetZoom(false);
      else {
        clamp();
        apply(false);
        setZoomed(true);
      }
    },
    { passive: false },
  );

  // A new slide starts unzoomed (arrows, thumbnails and swipes while not zoomed).
  let lastIndex = -1;
  track.addEventListener(
    'scroll',
    () => {
      const index = Math.round(Math.abs(track.scrollLeft) / (track.clientWidth || 1));
      if (index !== lastIndex) {
        if (lastIndex !== -1) resetZoom(false);
        lastIndex = index;
      }
    },
    { passive: true },
  );

  dialog.addEventListener('close', () => {
    pointers.clear();
    mode = 'idle';
    resetZoom(false);
    resetDrag(false);
  });
}
