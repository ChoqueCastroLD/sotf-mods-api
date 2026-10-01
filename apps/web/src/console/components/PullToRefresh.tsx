/**
 * Pull-to-refresh for phones (native «drag down at the top to reload»): when the page is scrolled
 * to the top and a finger drags it down past the threshold, every active query is refetched and a
 * small radar indicator shows progress. Touch only, vertical drags only, disabled while a modal
 * is open, honors `prefers-reduced-motion` (no spring) and stays out of the way of horizontal
 * scrollers and inputs. The browser's own overscroll refresh is turned off for the console
 * (`overscroll-behavior-y: contain` on the root) so the two never fight.
 */
import { Icon } from '@sotf/ui/icons';
import { useIsFetching, useQueryClient } from '@tanstack/react-query';
import { RefreshCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const THRESHOLD = 72;
const MAX_PULL = 110;

export function PullToRefresh({ label }: { label: string }) {
  const queryClient = useQueryClient();
  const fetching = useIsFetching() > 0;
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const state = useRef({ y: 0, x: 0, active: false, locked: false, pull: 0 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: coarse)').matches) return;
    const root = document.documentElement;
    root.style.overscrollBehaviorY = 'contain';

    const blocked = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(
        target.closest(
          'input, textarea, select, [contenteditable], [role="dialog"], dialog, [data-no-pull], .cm-editor, [data-radix-scroll-area-viewport]',
        ),
      );

    const onStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      const s = state.current;
      s.active = window.scrollY <= 0 && event.touches.length === 1 && !blocked(event.target);
      s.locked = false;
      s.pull = 0;
      if (touch) {
        s.y = touch.clientY;
        s.x = touch.clientX;
      }
    };
    const onMove = (event: TouchEvent) => {
      const s = state.current;
      const touch = event.touches[0];
      if (!s.active || !touch) return;
      const dy = touch.clientY - s.y;
      const dx = touch.clientX - s.x;
      if (!s.locked) {
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
          s.active = false;
          return;
        }
        if (dy < 8) {
          if (dy < -8) s.active = false;
          return;
        }
        s.locked = true;
      }
      if (window.scrollY > 0) {
        s.active = false;
        setPull(0);
        return;
      }
      if (event.cancelable) event.preventDefault();
      s.pull = Math.min(MAX_PULL, dy * 0.5);
      setPull(s.pull);
    };
    const onEnd = () => {
      const s = state.current;
      if (!s.active) return;
      const fire = s.pull >= THRESHOLD;
      s.active = false;
      s.locked = false;
      s.pull = 0;
      setPull(0);
      if (!fire) return;
      setRefreshing(true);
      const min = new Promise((resolve) => window.setTimeout(resolve, 700));
      void Promise.all([queryClient.refetchQueries({ type: 'active' }).catch(() => undefined), min]).then(() =>
        setRefreshing(false),
      );
    };

    document.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd, { passive: true });
    document.addEventListener('touchcancel', onEnd, { passive: true });
    return () => {
      root.style.overscrollBehaviorY = '';
      document.removeEventListener('touchstart', onStart);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onEnd);
      document.removeEventListener('touchcancel', onEnd);
    };
  }, [queryClient]);

  const shown = refreshing ? THRESHOLD * 0.75 : pull;
  if (shown <= 0) return null;
  const progress = Math.min(1, shown / THRESHOLD);
  return (
    <div
      role="status"
      aria-label={label}
      className="pointer-events-none fixed inset-x-0 top-[calc(env(safe-area-inset-top)+3.5rem)] z-(--z-dropdown) flex justify-center md:hidden"
    >
      <span
        className="flex size-10 items-center justify-center rounded-full border border-border-strong bg-overlay text-primary shadow-md"
        style={{ transform: `translateY(${shown * 0.6}px) scale(${0.6 + progress * 0.4})`, opacity: progress }}
      >
        <Icon
          icon={RefreshCw}
          size={18}
          className={refreshing || fetching ? 'animate-sweep' : undefined}
          style={refreshing ? undefined : { transform: `rotate(${progress * 270}deg)` }}
        />
      </span>
    </div>
  );
}
