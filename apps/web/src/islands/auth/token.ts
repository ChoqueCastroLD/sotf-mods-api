/**
 * Single-use tokens of the email links (`/reset-password?token=`, `/verify-email?token=`).
 *
 * The island takes the token out of the address bar as soon as it runs (so it does not linger in
 * the history, screenshots or the `Referer` of third-party frames such as Turnstile) and keeps it
 * in the history entry's state, which survives a reload of the same tab.
 */
import { stripUrlParams } from './flags.ts';

export const TOKEN_PARAM = 'token';
const STATE_KEY = 'sotfEmailToken';

/** Same bounds as `EmailToken` of `@sotf/contracts/auth`. */
export function isPlausibleToken(value: string | null | undefined): value is string {
  return typeof value === 'string' && value.length >= 16 && value.length <= 512 && !/\s/.test(value);
}

/** Reads the token (URL first, then the history state) and removes it from the URL. */
export function takeEmailToken(win: Window = window): string | null {
  const fromUrl = new URLSearchParams(win.location.search).get(TOKEN_PARAM);
  const state = win.history.state as Record<string, unknown> | null;
  const fromState = typeof state?.[STATE_KEY] === 'string' ? (state[STATE_KEY] as string) : null;
  const token = fromUrl ?? fromState;
  if (fromUrl !== null) {
    win.history.replaceState({ ...(state ?? {}), [STATE_KEY]: fromUrl }, '');
    stripUrlParams([TOKEN_PARAM], win);
  }
  return isPlausibleToken(token) ? token : null;
}

/** Forgets the token after it was consumed (a reload then shows the «done» or «invalid» state). */
export function forgetEmailToken(win: Window = window): void {
  const state = win.history.state as Record<string, unknown> | null;
  if (!state || !(STATE_KEY in state)) return;
  const { [STATE_KEY]: _removed, ...rest } = state;
  win.history.replaceState(rest, '');
}
