/**
 * The console's `<Toaster>` (one per document), mounted when the browser is idle after boot or
 * as soon as a toast is requested — sonner stays out of the shell bundle.
 */
import { lazy, Suspense, useEffect, useState } from 'react';
import { loadToasts, onToastsRequested } from '../lib/notify.ts';

const Toaster = lazy(() => loadToasts().then((module) => ({ default: module.Toaster })));

const IDLE_TIMEOUT_MS = 2000;

export function LazyToaster() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mount = () => setMounted(true);
    const off = onToastsRequested(mount);
    const idle = typeof window.requestIdleCallback === 'function';
    const handle = idle
      ? window.requestIdleCallback(mount, { timeout: IDLE_TIMEOUT_MS })
      : window.setTimeout(mount, IDLE_TIMEOUT_MS);
    return () => {
      off();
      if (idle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, []);
  if (!mounted) return null;
  return (
    <Suspense fallback={null}>
      {/* Phones: clear the bottom tabs and sticky action bars. */}
      <Toaster mobileOffset="calc(5.25rem + env(safe-area-inset-bottom))" />
    </Suspense>
  );
}
