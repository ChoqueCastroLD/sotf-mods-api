/**
 * Outlet of an area layout route (`routes/basecamp.tsx`…): renders the matched child screen, or
 * «not found» when the URL matches the area layout but no screen.
 */
import { Outlet, useChildMatches } from '@tanstack/react-router';
import { NotFound } from './states.tsx';

export function AreaOutlet() {
  const children = useChildMatches();
  return children.length > 0 ? <Outlet /> : <NotFound />;
}
