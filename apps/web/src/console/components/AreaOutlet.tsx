/**
 * Outlet of an area layout route (`routes/basecamp.tsx`…): renders the matched child screen, or
 * the area's empty state while the area has no screen at its root yet.
 */
import { Outlet, useChildMatches } from '@tanstack/react-router';
import { AreaPlaceholder } from './states.tsx';

export function AreaOutlet({ title }: { title: () => string }) {
  const children = useChildMatches();
  return children.length > 0 ? <Outlet /> : <AreaPlaceholder title={title()} />;
}
