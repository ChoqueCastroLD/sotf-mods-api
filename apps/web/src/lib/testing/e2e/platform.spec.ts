/**
 * Web platform e2e (WP-22, tag @platform): real status codes and `lang`, hreflang cluster, theme
 * without FOUC, `/ads.txt`, legacy redirects, cache headers and no `Set-Cookie` on public pages,
 * plus axe on the 404 in both themes.
 */
import { AxeBuilder } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const ADS_TXT = 'google.com, pub-2799839819522052, DIRECT, f08c47fec0942fa0';
const HREFLANGS = ['en', 'es', 'de', 'fr', 'it', 'nl', 'pl', 'pt-BR', 'ru', 'sv', 'tr', 'zh-Hans', 'ja', 'x-default'];

test.describe('@platform', () => {
  test('/nope → real 404 in English, cached briefly at the edge, no cookies', async ({ page }) => {
    const response = await page.goto('/nope');
    expect(response?.status()).toBe(404);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('h1')).toHaveText('You wandered off the trail.');
    await expect(page).toHaveTitle('Page not found | SOTF Mods');
    const headers = response?.headers() ?? {};
    expect(headers['set-cookie']).toBeUndefined();
    expect(headers['cache-control']).toBe('public, max-age=0, must-revalidate');
    expect(headers['cloudflare-cdn-cache-control']).toContain('max-age=60');
    expect(headers['cache-tag']).toBe('html,locale:en');
    expect(headers['x-sotf-cache-tags']).toBeUndefined();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  });

  test('/es/nope → lang="es" and Spanish copy', async ({ page }) => {
    const response = await page.goto('/es/nope');
    expect(response?.status()).toBe(404);
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.locator('h1')).toHaveText('Te saliste del sendero.');
    expect(response?.headers()['cache-tag']).toBe('html,locale:es');
    await expect(page.locator('header a[href="/es/mods"]').first()).toBeAttached();
  });

  test('hreflang cluster: 13 locales + x-default with localized URLs', async ({ page, baseURL }) => {
    await page.goto('/de/some/missing/page?page=2');
    const links = page.locator('head link[rel="alternate"][hreflang]');
    await expect(links).toHaveCount(HREFLANGS.length);
    expect(await links.evaluateAll((nodes) => nodes.map((node) => node.getAttribute('hreflang')))).toEqual(HREFLANGS);
    await expect(page.locator('head link[hreflang="pt-BR"]')).toHaveAttribute(
      'href',
      `${baseURL}/pt/some/missing/page?page=2`,
    );
    await expect(page.locator('head link[hreflang="x-default"]')).toHaveAttribute(
      'href',
      `${baseURL}/some/missing/page?page=2`,
    );
    // The footer language switcher offers the same 13 links, in their own language.
    await expect(page.locator('footer details a[hreflang]')).toHaveCount(13);
  });

  test('stored Day theme is applied before the first frame (no FOUC)', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('sotf-theme', 'light');
      requestAnimationFrame(() => {
        (window as unknown as { __firstFrame: unknown }).__firstFrame = {
          theme: document.documentElement.dataset.theme,
          background: getComputedStyle(document.documentElement).backgroundColor,
        };
      });
    });
    await page.goto('/nope');
    const firstFrame = await page.evaluate(() => (window as unknown as { __firstFrame: unknown }).__firstFrame);
    expect(firstFrame).toEqual({ theme: 'light', background: 'rgb(245, 244, 236)' });
  });

  test('Night is the server default; the footer toggle switches and persists the theme', async ({ page }) => {
    await page.goto('/nope');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.locator('footer [data-theme-toggle] label').nth(1).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    expect(await page.evaluate(() => localStorage.getItem('sotf-theme'))).toBe('light');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('/ads.txt is byte-for-byte the legacy file', async ({ request }) => {
    const response = await request.get('/ads.txt');
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toBe('text/plain; charset=utf-8');
    expect(response.headers()['set-cookie']).toBeUndefined();
    expect((await response.body()).toString('utf8')).toBe(ADS_TXT);
  });

  test('generic legacy redirects and trailing slashes', async ({ request }) => {
    const cases: Array<[string, number, string | null]> = [
      ['/mods/', 301, '/mods'],
      ['/es/mods/', 301, '/es/mods'],
      ['/loader', 301, '/install'],
      ['/es/loader', 301, '/es/install'],
      ['/upload', 301, '/basecamp/new/mod'],
      ['/upload-build', 301, '/basecamp/new/build'],
      ['/user/login', 301, '/login'],
      ['/user/logout', 301, '/logout'],
      ['/artifacts', 301, '/'],
      ['/@imaxel', 301, '/profile/imaxel'],
      ['/static/images/logo.png', 301, '/brand/logo-horizontal-night.png'],
      ['/static/images/hd_thumbnail.png', 301, '/brand/og-default.png'],
      ['/en/mods', 301, '/mods'],
      ['/images/1690000000_mod.png', 410, null],
      ['/404', 404, null],
    ];
    for (const [path, status, location] of cases) {
      const response = await request.get(path, { maxRedirects: 0 });
      expect(response.status(), path).toBe(status);
      const target = response.headers().location;
      if (location === null) expect(target, path).toBeUndefined();
      else expect(new URL(target ?? '', 'http://x').pathname, path).toBe(location);
      expect(response.headers()['set-cookie'], path).toBeUndefined();
    }
  });

  test('brand assets, manifest and health are served', async ({ request }) => {
    for (const path of [
      '/favicon.svg',
      '/favicon.ico',
      '/brand/topo.svg',
      '/brand/field-kit.svg',
      '/manifest.webmanifest',
    ]) {
      expect((await request.get(path)).status(), path).toBe(200);
    }
    const health = await request.get('/healthz');
    expect(await health.json()).toMatchObject({ status: 'ok', service: 'web' });
    expect(health.headers()['cache-control']).toBe('no-store');
  });

  for (const theme of ['dark', 'light'] as const) {
    test(`404 has no serious or critical axe violations (${theme})`, async ({ page }) => {
      await page.addInitScript((value) => localStorage.setItem('sotf-theme', value), theme);
      await page.goto('/nope');
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
      const blocking = results.violations.filter((violation) =>
        ['serious', 'critical'].includes(violation.impact ?? ''),
      );
      expect(
        blocking.map((violation) => `${violation.id}: ${violation.nodes.map((node) => node.target).join(' | ')}`),
      ).toEqual([]);
    });
  }

  test('no console errors on the 404 (besides the document status itself)', async ({ page, baseURL }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      // Chrome logs the 404 status of the document itself; that is the point of the page.
      if (message.type() === 'error' && message.location().url !== `${baseURL}/nope`) errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('/nope');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });
});
