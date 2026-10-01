/**
 * Pull to refresh for the installed app (PLAN «mobile native feel»). A browser tab already has
 * its own (Chrome Android, Safari), so the gesture is only drawn where it is missing: a
 * standalone/fullscreen window on a touch device (an iOS home-screen app has none, and the
 * layout turns the page's own rubber band off with `overscroll-behavior-y: none`).
 *
 * Only on feed-like pages (`BaseLayout` renders `[data-ptr]` for them). The page must be at the
 * very top, nothing modal may be open and the touch must not start in a field or inside a
 * nested scroller that has somewhere to go. Pull past the threshold, let go, the page reloads
 * (the server HTML is the source of truth, so a reload is the honest refresh).
 *
 * The indicator is a waypoint diamond that turns while you pull and spins while it reloads;
 * `lib/client/haptics.ts` adds a tick when the threshold is crossed.
 */
import { rubberBand } from '../lib/client/gesture.ts';
import { haptic } from '../lib/client/haptics.ts';

export const PULL_THRESHOLD_PX = 72;
export const PULL_MAX_PX = 110;
export const PULL_START_PX = 8;

export type PullState = 'idle' | 'pulling' | 'ready' | 'loading';

export function pullDistance(rawDy: number): number {
  return Math.min(rubberBand(rawDy, 160), PULL_MAX_PX);
}

export function pullState(distance: number): PullState {
  if (distance <= 0) return 'idle';
  return distance >= PULL_THRESHOLD_PX ? 'ready' : 'pulling';
}

/** Installed app window on a touch device (no browser chrome, so no native pull-to-refresh). */
export function isInstalledTouchApp(win: Window = window): boolean {
  const standalone =
    win.matchMedia('(display-mode: standalone)').matches ||
    win.matchMedia('(display-mode: fullscreen)').matches ||
    (win.navigator as Navigator & { standalone?: boolean }).standalone === true;
  return standalone && win.matchMedia('(pointer: coarse)').matches;
}

function insideScrollerWithRoom(target: Element | null): boolean {
  for (let el = target; el && el !== document.body; el = el.parentElement) {
    const style = getComputedStyle(el);
    const scrollsY = /(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight;
    if (scrollsY && el.scrollTop > 0) return true;
  }
  return false;
}

export function initPullToRefresh(win: Window = window): (() => void) | null {
  const doc = win.document;
  const root = doc.documentElement;
  const indicator = doc.querySelector<HTMLElement>('[data-ptr]');
  if (!indicator || !isInstalledTouchApp(win)) return null;
  const label = indicator.querySelector<HTMLElement>('[data-ptr-label]');
  const text = {
    pulling: indicator.dataset.labelPull ?? '',
    ready: indicator.dataset.labelRelease ?? '',
    loading: indicator.dataset.labelLoading ?? '',
  };

  root.setAttribute('data-ptr-active', '');
  let startY = 0;
  let tracking = false;
  let pulling = false;
  let state: PullState = 'idle';
  let busy = false;

  const paint = (distance: number, next: PullState) => {
    root.style.setProperty('--ptr-pull', String(Math.round(distance)));
    root.style.setProperty('--ptr-progress', Math.min(distance / PULL_THRESHOLD_PX, 1).toFixed(3));
    if (next !== state) {
      if (next === 'ready') haptic('select');
      state = next;
      indicator.dataset.state = next;
      if (label && next !== 'idle') label.textContent = text[next];
    }
  };
  const reset = () => {
    root.setAttribute('data-ptr-releasing', '');
    paint(0, 'idle');
    win.setTimeout(() => root.removeAttribute('data-ptr-releasing'), 400);
  };

  const onStart = (event: TouchEvent) => {
    if (busy || event.touches.length !== 1) return;
    if (win.scrollY > 1 || doc.querySelector('dialog[open], [popover]:popover-open')) return;
    const target = event.target as Element | null;
    if (target?.closest('input, textarea, select, [contenteditable="true"], [data-no-ptr]')) return;
    if (insideScrollerWithRoom(target)) return;
    root.removeAttribute('data-ptr-releasing');
    startY = event.touches[0]?.clientY ?? 0;
    tracking = true;
    pulling = false;
  };
  const onMove = (event: TouchEvent) => {
    if (!tracking) return;
    const dy = (event.touches[0]?.clientY ?? 0) - startY;
    if (!pulling) {
      if (dy < -PULL_START_PX || win.scrollY > 1) {
        tracking = false;
        return;
      }
      if (dy < PULL_START_PX) return;
      pulling = true;
    }
    if (event.cancelable) event.preventDefault();
    const distance = pullDistance(dy - PULL_START_PX);
    paint(distance, pullState(distance));
  };
  const onEnd = () => {
    if (!tracking) return;
    tracking = false;
    if (!pulling) return;
    pulling = false;
    if (state === 'ready') {
      busy = true;
      haptic('confirm');
      root.setAttribute('data-ptr-releasing', '');
      paint(PULL_THRESHOLD_PX, 'loading');
      win.setTimeout(() => win.location.reload(), 350);
    } else {
      reset();
    }
  };

  const options = { passive: false } as const;
  doc.addEventListener('touchstart', onStart, { passive: true });
  doc.addEventListener('touchmove', onMove, options);
  doc.addEventListener('touchend', onEnd);
  doc.addEventListener('touchcancel', onEnd);
  return () => {
    doc.removeEventListener('touchstart', onStart);
    doc.removeEventListener('touchmove', onMove);
    doc.removeEventListener('touchend', onEnd);
    doc.removeEventListener('touchcancel', onEnd);
    root.removeAttribute('data-ptr-active');
  };
}
