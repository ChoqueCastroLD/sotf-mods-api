/**
 * One-shot flags in the sign-in URL (PLAN §4.6: `/login?registered`, `?reset` → the flag becomes a
 * toast). The legacy site linked `/login?registered=true` after sign-up and `/login?reset=true`
 * after a password reset; v2 keeps both (old emails, bookmarks) and adds `verified` (after the
 * email link) and `expired` (the console lost its session). Flags are removed from the address
 * bar once shown, so a reload or a shared link does not repeat them.
 */

export const LOGIN_FLAGS = ['registered', 'reset', 'verified', 'expired'] as const;
export type LoginFlag = (typeof LOGIN_FLAGS)[number];

export interface FlagToast {
  flag: LoginFlag;
  kind: 'success' | 'info';
  messageKey: 'auth_flag_registered' | 'auth_flag_reset' | 'auth_flag_verified' | 'auth_flag_expired';
}

/** Legacy values were `true`; a bare `?registered` counts too. `false`/`0` do not. */
function isOn(value: string | null): boolean {
  if (value === null) return false;
  return !['0', 'false', 'no', 'off'].includes(value.trim().toLowerCase());
}

/** Toasts to show for the flags present in `params` (in {@link LOGIN_FLAGS} order). */
export function flagToasts(params: URLSearchParams): FlagToast[] {
  const out: FlagToast[] = [];
  for (const flag of LOGIN_FLAGS) {
    if (!isOn(params.get(flag))) continue;
    switch (flag) {
      case 'registered':
        out.push({ flag, kind: 'success', messageKey: 'auth_flag_registered' });
        break;
      case 'reset':
        out.push({ flag, kind: 'success', messageKey: 'auth_flag_reset' });
        break;
      case 'verified':
        out.push({ flag, kind: 'success', messageKey: 'auth_flag_verified' });
        break;
      case 'expired':
        out.push({ flag, kind: 'info', messageKey: 'auth_flag_expired' });
        break;
    }
  }
  return out;
}

/** The same URL without the flags (and without the parameters in `extra`, e.g. a token). */
export function withoutParams(href: string, extra: readonly string[] = []): string {
  const url = new URL(href);
  for (const name of [...LOGIN_FLAGS, ...extra]) url.searchParams.delete(name);
  return `${url.pathname}${url.search}${url.hash}`;
}

/** Replaces the current history entry with the flag-less URL (no navigation). */
export function stripUrlParams(extra: readonly string[] = [], win: Window = window): void {
  const clean = withoutParams(win.location.href, extra);
  if (clean !== `${win.location.pathname}${win.location.search}${win.location.hash}`) {
    win.history.replaceState(win.history.state, '', clean);
  }
}
