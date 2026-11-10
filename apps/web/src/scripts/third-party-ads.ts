/**
 * Adsterra social bar + popunder and HilltopAds popunder (owner decision 2026-11): for every
 * visitor, on every page except the ones whose URL carries a secret (password reset, email
 * verification, unsubscribe, account linking, shared logs: `body[data-private-url]`), where no
 * third-party code may read the address. Injected after `load` + idle so they never delay the
 * first paint; the CSP accepts their rotating HTTPS hosts (`THIRD_PARTY_AD_SOURCE`).
 */

const ADSTERRA_SOCIAL_BAR = 'https://bellnewyork.org/14/985d76fb190d5f0d91fba70825cbc20c';
const ADSTERRA_POPUNDER = 'https://accountut.com/1/ba99b3ac9b5528d42f4485bc3a767073';
const HILLTOP_POPUNDER =
  'https://crookedagreement.com/cvDv9L6.b/2_5ilmSFW_Qd9sN-zBY/x/NLj/Ul4/NQSr0/3aNUjWEc2gNFTZgS5O';

let started = false;

function inject(doc: Document, src: string, options: { cfasync?: boolean; settings?: boolean } = {}): void {
  const script = doc.createElement('script') as HTMLScriptElement & { settings?: object };
  if (options.cfasync) script.setAttribute('data-cfasync', 'false');
  // HilltopAds reads its options from `script.settings` (their snippet passes `{}`).
  if (options.settings) script.settings = {};
  script.src = src;
  script.async = true;
  script.referrerPolicy = 'no-referrer-when-downgrade';
  doc.body.append(script);
}

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
  if (started || !win || doc.body.hasAttribute('data-private-url')) return;
  started = true;
  await whenIdle(win);
  inject(doc, ADSTERRA_SOCIAL_BAR, { cfasync: true });
  inject(doc, ADSTERRA_POPUNDER, { cfasync: true });
  inject(doc, HILLTOP_POPUNDER, { settings: true });
}
