/**
 * The real catalog: complete in the 13 locales and `.generated/` up to date (the same checks as
 * `pnpm i18n:check`, so `pnpm test` fails on a broken catalog too).
 */
import { describe, expect, it } from 'vitest';
import { LOCALES } from '../src/locales.ts';
import { loadCatalog } from '../tools/catalog.ts';
import { buildGenerated, diffGenerated } from '../tools/compile.ts';
import { validateCatalog } from '../tools/validate.ts';

describe('message catalog', () => {
  const validated = validateCatalog(loadCatalog(process.cwd()));

  it('has no errors or warnings', () => {
    expect(validated.diagnostics).toEqual([]);
  });

  it('ships the base namespaces of WP-13 in every locale', () => {
    const namespaces = loadCatalog(process.cwd()).namespaces.map((namespace) => namespace.name);
    expect(namespaces).toEqual(expect.arrayContaining(['common', 'errors', 'meta']));
    const size = validated.messages.get('en')?.size ?? 0;
    expect(size).toBeGreaterThan(150);
    for (const locale of LOCALES) expect(validated.messages.get(locale)?.size, locale).toBe(size);
  });

  it('keeps .generated/ in sync with the sources', async () => {
    const files = await buildGenerated(process.cwd(), validated.messages);
    expect(diffGenerated(process.cwd(), files)).toEqual([]);
  });
});
