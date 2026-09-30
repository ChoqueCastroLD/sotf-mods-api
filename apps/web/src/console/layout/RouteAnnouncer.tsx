/**
 * Accessible client-side navigation: after each route change (not the first render) the new
 * document title is announced in a polite live region and focus moves to `<main>`, so keyboard
 * and screen-reader users start at the new content — as with a full page load.
 */
import { useRouterState } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';

export function RouteAnnouncer({ mainId }: { mainId: string }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const status = useRouterState({ select: (state) => state.status });
  const first = useRef(true);
  const announced = useRef(pathname);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status !== 'idle') return;
    if (first.current) {
      first.current = false;
      return;
    }
    if (announced.current === pathname) return;
    announced.current = pathname;
    // Titles are set in effects of the new screen: read it on the next frame.
    const frame = requestAnimationFrame(() => {
      setMessage(document.title);
      const main = document.getElementById(mainId);
      if (main && !main.contains(document.activeElement)) main.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, status, mainId]);

  return (
    <p aria-live="polite" aria-atomic="true" className="sr-only">
      {message}
    </p>
  );
}
