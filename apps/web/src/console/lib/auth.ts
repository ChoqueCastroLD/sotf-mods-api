/**
 * Session helpers of the console guard (PLAN §4.3: «Un 401 lleva a `/login?next=<ruta>`»).
 *
 * The API sets the non-sensitive hint cookie `sotf_li=1` at sign-in (next to the HttpOnly session
 * cookie). Without it the console does not even ask the API: it goes straight to the login page.
 * With it, `GET /api/v2/me` decides (an expired session answers 401 → login).
 */
import { hasSignedInHint } from '../../scripts/account-hint.ts';

export const LOGIN_PATH = '/login';

/** Console paths are the only valid `next` targets built here (never another origin). */
export function safeNext(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//') || path.startsWith('/\\')) return '/dashboard';
  return path;
}

/** `/login?next=<current console path + search + hash>`. */
export function loginUrl(next: string): string {
  return `${LOGIN_PATH}?next=${encodeURIComponent(safeNext(next))}`;
}

/** Path + query + hash of a location-like object. */
export function currentPath(location: Pick<Location, 'pathname' | 'search' | 'hash'> = window.location): string {
  return `${location.pathname}${location.search}${location.hash}`;
}

/** Whether the browser carries the signed-in hint cookie. */
export function hasSessionHint(cookie: string = document.cookie): boolean {
  return hasSignedInHint(cookie);
}

let redirecting = false;

/**
 * Leaves the SPA for the login page (a full navigation: `/login` is an Astro page). Uses
 * `replace` so Back does not return to a console screen that would bounce again. Idempotent.
 */
export function redirectToLogin(next: string = currentPath()): void {
  if (redirecting) return;
  redirecting = true;
  window.location.replace(loginUrl(next));
}

/** Test hook: allow another redirect in the same document. */
export function resetLoginRedirect(): void {
  redirecting = false;
}
