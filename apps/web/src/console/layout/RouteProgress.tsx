/**
 * A 2 px line at the top of the viewport while a route is loading. It only appears when the
 * navigation takes longer than {@link SHOW_AFTER_MS}, so quick ones show nothing at all; the
 * previous screen stays in place and the skeleton only replaces it after `PENDING_MS`
 * (`router.ts`). Fixed and decorative: it never moves the page and is hidden from assistive
 * technology (the route announcer reports the new screen).
 */
import { useRouterState } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

const SHOW_AFTER_MS = 120;

export function RouteProgress() {
  const pending = useRouterState({ select: (state) => state.status === 'pending' });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!pending) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, [pending]);
  return (
    <div
      aria-hidden="true"
      data-route-progress={visible ? '' : undefined}
      className="pointer-events-none fixed inset-x-0 top-0 z-(--z-toast) h-0.5 overflow-hidden opacity-0 transition-opacity duration-(--dur-base) data-[route-progress]:opacity-100"
    >
      <div className="route-progress-bar h-full w-2/5 bg-primary" />
    </div>
  );
}
