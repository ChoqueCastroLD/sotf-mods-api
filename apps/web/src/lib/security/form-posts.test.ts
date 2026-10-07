import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const PAGES = fileURLToPath(new URL('../../pages', import.meta.url));

function pageFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? pageFiles(path) : path.endsWith('.astro') ? [path] : [];
  });
}

/**
 * A page that posts a native `<form>` to the Astro server is checked by Astro's origin check
 * (`security.checkOrigin`: the `Origin` header must equal the site origin). With
 * `Referrer-Policy: no-referrer` browsers send `Origin: null` on same-origin POSTs, so the form
 * would always fail with «Cross-site POST form submissions are forbidden» (the `/unsubscribe`
 * confirmation did). Those pages must use a policy that keeps the origin on same-origin requests.
 */
describe('pages with a native POST form', () => {
  const withForms = pageFiles(PAGES).filter((file) =>
    /<form[^>]*method=["']post["']/i.test(readFileSync(file, 'utf8')),
  );

  it('finds the logout and unsubscribe forms', () => {
    const names = withForms.map((file) => file.slice(PAGES.length));
    expect(names).toEqual(expect.arrayContaining(['/logout.astro', '/unsubscribe.astro']));
  });

  it.each(withForms.map((file) => [file.slice(PAGES.length), file] as const))(
    '%s does not send Origin: null (no `no-referrer` policy)',
    (_name, file) => {
      expect(readFileSync(file, 'utf8')).not.toMatch(/referrer-policy['"]\s*,\s*['"]no-referrer['"]/i);
    },
  );
});
