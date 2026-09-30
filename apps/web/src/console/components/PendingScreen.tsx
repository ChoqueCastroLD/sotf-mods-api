/**
 * Loading states. `PendingScreen` is the router's pending component (shown only when a route
 * takes longer than 300 ms: `defaultPendingMs`), a skeleton with the geometry of a console page
 * (heading, toolbar, list). `BootScreen` covers the whole viewport while the session is checked.
 */

import { useUiTranslate } from '@sotf/ui/labels';
import { Skeleton, SkeletonGroup } from '@sotf/ui/skeleton';
import { RadarSpinner } from '@sotf/ui/spinner';

export function PendingScreen() {
  return (
    <SkeletonGroup delayMs={0} className="flex flex-col gap-6">
      <Skeleton className="h-9 w-64 max-w-full" />
      <div className="flex gap-3">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-28" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    </SkeletonGroup>
  );
}

export function BootScreen({ label }: { label?: string }) {
  const ui = useUiTranslate();
  return (
    <div role="status" aria-live="polite" className="flex min-h-dvh flex-1 flex-col items-center justify-center gap-3">
      <RadarSpinner size={32} className="text-signal" />
      <p className="readout">{label ?? ui('ui_loading')}</p>
    </div>
  );
}
