/**
 * Who is using the palette. The page never renders per-user HTML, so the palette asks the light
 * `GET /api/v2/me/summary` itself (only when the `sotf_li` hint cookie exists: guests never pay
 * for a request) to decide which commands make sense (Basecamp, Signals, Ranger Station…) and
 * whether Follow / Add to kit are offered. One request per page; a failure counts as guest and is
 * retried the next time the palette opens.
 */
export interface Session {
  signedIn: boolean;
  moderator: boolean;
  /** Own id and handle (you cannot follow yourself). */
  id: number | null;
  handle: string | null;
}

export const GUEST: Session = { signedIn: false, moderator: false, id: null, handle: null };

const HINT = /(?:^|;\s*)sotf_li=1(?:;|$)/;

/** Synchronous best guess (the hint cookie), used until the summary arrives. */
export function hintedSession(): Session {
  return typeof document !== 'undefined' && HINT.test(document.cookie)
    ? { signedIn: true, moderator: false, id: null, handle: null }
    : GUEST;
}

let pending: Promise<Session> | null = null;

export function loadSession(): Promise<Session> {
  if (!hintedSession().signedIn) return Promise.resolve(GUEST);
  if (!pending) {
    pending = fetch('/api/v2/me/summary', { credentials: 'same-origin', headers: { accept: 'application/json' } })
      .then(async (response) => {
        if (!response.ok) return GUEST;
        const body = (await response.json()) as { id?: unknown; handle?: unknown; role?: unknown };
        return {
          signedIn: true,
          moderator: body.role === 'moderator' || body.role === 'admin',
          id: typeof body.id === 'number' ? body.id : null,
          handle: typeof body.handle === 'string' ? body.handle : null,
        } satisfies Session;
      })
      .catch(() => {
        pending = null;
        return GUEST;
      });
  }
  return pending;
}
