// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';

/** jsdom has no Cookie Store API; the script reads `document.cookie`, so tests write it. */
function setCookie(value: string): void {
  // biome-ignore lint/suspicious/noDocumentCookie: test fixture for code that reads document.cookie
  document.cookie = value;
}

async function run(setup: () => void): Promise<string[]> {
  vi.resetModules();
  document.body.innerHTML = '';
  for (const attr of [...document.body.attributes]) document.body.removeAttribute(attr.name);
  setup();
  const { initThirdPartyAds } = await import('./third-party-ads.ts');
  vi.stubGlobal('requestIdleCallback', (callback: () => void) => callback());
  await initThirdPartyAds(document);
  return [...document.querySelectorAll('script')].map((script) => script.src);
}

afterEach(() => {
  setCookie('sotf_li=; max-age=0; path=/');
  vi.unstubAllGlobals();
});

describe('third-party ads', () => {
  it('load the HilltopAds popunder for guests while ads are on, nothing while they are off', async () => {
    const { ADS_ENABLED } = await import('./third-party-ads.ts');
    const sources = await run(() => {});
    if (!ADS_ENABLED) {
      expect(sources).toEqual([]);
      return;
    }
    expect(sources).toHaveLength(1);
    expect(sources[0]).toMatch(/^https:\/\/crookedagreement\.com\//);
  });

  it('never load for signed-in members', async () => {
    expect(await run(() => setCookie('sotf_li=1; path=/'))).toEqual([]);
  });

  it('never load on private URLs', async () => {
    expect(await run(() => document.body.setAttribute('data-private-url', ''))).toEqual([]);
  });
});
