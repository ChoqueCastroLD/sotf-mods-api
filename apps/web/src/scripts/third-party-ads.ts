/**
 * HilltopAds popunder (owner decision 2026-11-12; Adsterra removed): for guests only (signed-in
 * members, flagged by the `sotf_li` hint cookie, never see ads), on every page except the ones whose
 * URL carries a secret (password reset, email verification, unsubscribe, account linking, shared
 * logs: `body[data-private-url]`), where no third-party code may read the address. Injected after
 * `load` + idle so it never delays the first paint; the CSP accepts its rotating HTTPS hosts
 * (`THIRD_PARTY_AD_SOURCE`).
 */

const HILLTOP_POPUNDER =
  'https://crookedagreement.com/cND/9Q6.bw2/5llXS-WDQY9/NLzOY-xGNsjRUf4yNKS/0/3dNRjaEQ2VNPTEgW5B';

/** Ads switch: `false` turns every ad off (owner decision 2026-11-14, temporary). */
export const ADS_ENABLED = false;

/** The non-sensitive hint cookie the API sets at sign-in (`lib/site.ts` SIGNED_IN_HINT_COOKIE). */
const SIGNED_IN = /(?:^|;\s*)sotf_li=1(?:;|$)/;

let started = false;

function whenIdle(win: Window): Promise<void> {
  const loaded =
    win.document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise<void>((resolve) => win.addEventListener('load', () => resolve(), { once: true }));
  return loaded.then(
    () =>
      new Promise<void>((resolve) => {
        const idle = (win as Window & { requestIdleCallback?: Window['requestIdleCallback'] }).requestIdleCallback;
        if (idle) idle.call(win, () => resolve(), { timeout: 3000 });
        else win.setTimeout(resolve, 1000);
      }),
  );
}

export async function initThirdPartyAds(doc: Document = document): Promise<void> {
  const win = doc.defaultView;
  if (!ADS_ENABLED || started || !win || doc.body.hasAttribute('data-private-url') || SIGNED_IN.test(doc.cookie))
    return;
  started = true;
  await whenIdle(win);
  const script = doc.createElement('script') as HTMLScriptElement & { settings?: object };
  // HilltopAds reads its options from `script.settings` (their snippet passes `{}`).
  script.settings = {};
  script.src = HILLTOP_POPUNDER;
  script.async = true;
  script.referrerPolicy = 'no-referrer-when-downgrade';
  doc.body.append(script);
}
