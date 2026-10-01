/**
 * Swipe actions for touch lists (native «mail» pattern): dragging a row toward the inline end
 * reveals the *start* action behind it, dragging toward the inline start reveals the *end*
 * action. Releasing past the threshold runs the action and the row springs back; releasing
 * before it simply closes. Touch and pen only (mice and keyboards keep the regular buttons) — a
 * swipe is always a shortcut, never the only way to do something, so the wrapped row must expose
 * the same actions as real controls. Honors RTL and `prefers-reduced-motion` (no spring, no peek).
 */

import { cn } from '@sotf/ui/cn';
import { type ReactNode, type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from 'react';

export type SwipeTone = 'primary' | 'success' | 'danger' | 'signal' | 'neutral';

export interface SwipeAction {
  /** Visible label behind the row (decorative: the row exposes the same action as a button). */
  label: string;
  icon: ReactNode;
  tone?: SwipeTone;
  onTrigger: () => void;
}

export interface SwipeRowProps {
  children: ReactNode;
  /** Revealed by dragging toward the inline end (right in LTR). */
  start?: SwipeAction | undefined;
  /** Revealed by dragging toward the inline start (left in LTR). */
  end?: SwipeAction | undefined;
  /** Hints the gesture once (a short nudge) when the row first appears. */
  peekKey?: string | undefined;
  className?: string | undefined;
}

const TONES: Record<SwipeTone, string> = {
  primary: 'bg-primary text-primary-fg',
  success: 'bg-success text-bg',
  danger: 'bg-danger text-danger-fg',
  signal: 'bg-signal text-bg',
  neutral: 'bg-raised text-fg',
};

const THRESHOLD = 88;
const MAX = 132;
const LOCK = 10;

function rubber(distance: number): number {
  const abs = Math.abs(distance);
  if (abs <= THRESHOLD) return distance;
  const over = abs - THRESHOLD;
  const damped = THRESHOLD + (MAX - THRESHOLD) * (1 - Math.exp(-over / 60));
  return Math.sign(distance) * damped;
}

const peeked = new Set<string>();

export function SwipeRow({ children, start, end, peekKey, className }: SwipeRowProps) {
  const root = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const state = useRef({ id: -1, x: 0, y: 0, locked: false, moved: false, rtl: false, crossed: false });
  const enabled = Boolean(start || end);

  // One short nudge the first time a row of its kind is shown, so the gesture is discoverable.
  useEffect(() => {
    if (!enabled || !peekKey || peeked.has(peekKey)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: coarse)').matches) return;
    peeked.add(peekKey);
    const open = window.setTimeout(() => setOffset(start ? 44 : -44), 700);
    const close = window.setTimeout(() => setOffset(0), 1250);
    return () => {
      window.clearTimeout(open);
      window.clearTimeout(close);
    };
  }, [enabled, peekKey, start]);

  if (!enabled) return <div className={className}>{children}</div>;

  const reset = () => {
    state.current.id = -1;
    state.current.locked = false;
    state.current.crossed = false;
    setDragging(false);
    setOffset(0);
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' || !event.isPrimary) return;
    const target = event.target as HTMLElement;
    if (target.closest('input, textarea, select, [data-no-swipe]')) return;
    const s = state.current;
    s.id = event.pointerId;
    s.x = event.clientX;
    s.y = event.clientY;
    s.locked = false;
    s.moved = false;
    s.crossed = false;
    s.rtl = root.current ? getComputedStyle(root.current).direction === 'rtl' : false;
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const s = state.current;
    if (event.pointerId !== s.id) return;
    const dx = event.clientX - s.x;
    const dy = event.clientY - s.y;
    if (!s.locked) {
      if (Math.abs(dy) > LOCK && Math.abs(dy) > Math.abs(dx)) {
        s.id = -1;
        return;
      }
      if (Math.abs(dx) < LOCK) return;
      s.locked = true;
      setDragging(true);
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {
        // The pointer may already be gone.
      }
    }
    s.moved = true;
    const logical = s.rtl ? -dx : dx;
    // Nothing behind the row on that side: a small rubber band only.
    const allowed = logical > 0 ? start : end;
    const value = allowed ? rubber(logical) : Math.sign(logical) * Math.min(Math.abs(logical) / 5, 14);
    const crossed = Math.abs(value) >= THRESHOLD && Boolean(allowed);
    if (crossed && !s.crossed) navigator.vibrate?.(8);
    s.crossed = crossed;
    setOffset(value);
  };

  const finish = (commit: boolean) => {
    const s = state.current;
    if (s.id === -1) return;
    const logical = offset;
    const action = logical > 0 ? start : end;
    const fire = commit && action && Math.abs(logical) >= THRESHOLD;
    reset();
    if (fire) action.onTrigger();
  };

  // A drag must not end in a tap on the row's link or button.
  const swallowClick = (event: React.MouseEvent) => {
    if (state.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      state.current.moved = false;
    }
  };

  const revealed = Math.abs(offset);
  const active = offset > 0 ? start : offset < 0 ? end : undefined;
  const crossed = revealed >= THRESHOLD;

  return (
    <div ref={root} className={cn('relative isolate overflow-hidden rounded-[inherit]', className)}>
      {active ? (
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 -z-10 flex items-center px-5 text-sm font-semibold',
            TONES[active.tone ?? 'neutral'],
            offset > 0 ? 'justify-start' : 'justify-end',
          )}
        >
          <span
            className={cn('flex items-center gap-2 transition-transform duration-(--dur-fast)', crossed && 'scale-105')}
          >
            {active.icon}
            <span>{active.label}</span>
          </span>
        </div>
      ) : null}
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={() => finish(true)}
        onPointerCancel={() => finish(false)}
        onClickCapture={swallowClick}
        style={{
          transform: offset === 0 && !dragging ? undefined : `translateX(${state.current.rtl ? -offset : offset}px)`,
        }}
        className={cn(
          'relative bg-surface [touch-action:pan-y]',
          dragging ? '' : 'transition-transform duration-(--dur-base) ease-(--ease-out)',
        )}
      >
        {children}
      </div>
    </div>
  );
}
