/**
 * Route groups of the API (PLAN §5.1, §5.5): each group has its own error format, CORS and default
 * rate-limit bucket.
 *
 * - `v2`: `/api/v2/*` (problem+json errors).
 * - `legacy`: every other `/api/*` path (legacy `{status:false,…}` envelope).
 * - `internal`: `/internal/*` (Coolify network, `X-Internal-Auth`).
 * - `platform`: health, docs and anything else.
 */
export type Surface = 'v2' | 'legacy' | 'internal' | 'docs' | 'platform';

/** Path without the query string. */
export function pathOf(url: string): string {
  const q = url.indexOf('?');
  return q === -1 ? url : url.slice(0, q);
}

export function surfaceOf(url: string): Surface {
  const path = pathOf(url);
  if (path === '/api/v2' || path.startsWith('/api/v2/')) return 'v2';
  if (path === '/api/docs' || path.startsWith('/api/docs/')) return 'docs';
  if (path === '/api' || path.startsWith('/api/')) return 'legacy';
  if (path === '/internal' || path.startsWith('/internal/')) return 'internal';
  return 'platform';
}
