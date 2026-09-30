/**
 * Unit tests of the R2 pass helpers (WP-84 backlog, testing phase): the legacy sanitiser behind
 * B8 (research/02 §4: `mojaosada`, `stashvehicles`, `removemaxobjectcap`), content sniffing,
 * download names of B17, the SeaweedFS sample selection and the recategorisation CSV.
 */
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { downloadNameOf, type VersionRow } from '../backfills-r2/b17.ts';
import { selectSample } from '../backfills-r2/cli/copy-sample.ts';
import { bareType, sniffImageType } from '../backfills-r2/content-type.ts';
import { legacySanitize, recoverableDescription } from '../backfills-r2/legacy-sanitize.ts';
import { CSV_COLUMNS, toCsv } from '../backfills-r2/suggest-categories.ts';

/** [modId, slug, name, manifest.description, stored shortDescription, manifestId] */
type ManifestRow = [number, string, string | null, string, string, string];
const manifests = JSON.parse(
  readFileSync(new URL('../snapshot/public-api-2026-09-29/manifests.json', import.meta.url), 'utf8'),
) as ManifestRow[];

describe('legacy sanitiser (B8)', () => {
  it('reproduces the three research cases', () => {
    const row = (slug: string) => manifests.find((m) => m[1] === slug) as ManifestRow;
    const mojaosada = row('mojaosada');
    expect(legacySanitize(mojaosada[3])).toBe(mojaosada[4]);
    expect(recoverableDescription(mojaosada[3], mojaosada[4])).toBe(
      'Zostań wodzem! N (Buduj), V (Przenoś), K (Niewidzialność).',
    );

    const stash = row('stashvehicles');
    expect(stash[3]).toBe('Overrides dropping -> stash vehicles');
    expect(legacySanitize(stash[3])).toBe('Overrides dropping - stash vehicles');
    expect(recoverableDescription(stash[3], stash[4])).toBe('Overrides dropping -> stash vehicles');

    // Only a trailing space: the form trimmed it, nothing was lost.
    const cap = row('removemaxobjectcap');
    expect(recoverableDescription(cap[3], cap[4])).toBeNull();
  });

  it('recovers exactly the damaged descriptions of the snapshot and nothing else', () => {
    // B8 only reads string descriptions (`jsonb_typeof(...) = 'string'`); some snapshot rows have none.
    const recovered = manifests
      .filter(([, , , description, stored]) => typeof description === 'string' && typeof stored === 'string')
      .filter(([, , , description, stored]) => recoverableDescription(description, stored) !== null)
      .map((m) => m[1]);
    expect(recovered.sort()).toEqual(['mojaosada', 'stashvehicles']);
  });

  it('follows DOMPurify: text without < is not escaped, text with < is serialised', () => {
    expect(legacySanitize('Fish & chips -> 100%')).toBe('Fish & chips - 100%');
    expect(legacySanitize('a < b & c')).toBe('a &lt; b &amp; c');
    expect(legacySanitize('keep &amp; as typed')).toBe('keep &amp; as typed');
    // Not reproducible without a browser: tags, or a character reference next to a `<`.
    expect(legacySanitize('<b>bold</b>')).toBeNull();
    expect(legacySanitize('1 < 2 &amp; 3')).toBeNull();
    expect(legacySanitize('')).toBe('');
  });

  it('never proposes a fix that the legacy pipeline would not produce', () => {
    expect(recoverableDescription('Same text', 'Same text')).toBeNull();
    expect(recoverableDescription('Árbol', 'Something else')).toBeNull();
    expect(recoverableDescription('', 'x')).toBeNull();
    expect(recoverableDescription('Line one\r\nline two ', 'Line oneline two')).toBeNull();
  });
});

describe('content types', () => {
  const bytes = (...values: number[]) => new Uint8Array(values);
  const ascii = (text: string, pad = 0) => new Uint8Array([...Buffer.from(text, 'latin1'), ...new Array(pad).fill(0)]);

  it('sniffs images by magic number, never by extension', () => {
    expect(sniffImageType(bytes(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0))).toBe('image/png');
    expect(sniffImageType(bytes(0xff, 0xd8, 0xff, 0xe0))).toBe('image/jpeg');
    expect(sniffImageType(ascii('GIF89a'))).toBe('image/gif');
    expect(sniffImageType(ascii('RIFF\0\0\0\0WEBPVP8 '))).toBe('image/webp');
    expect(sniffImageType(ascii('\0\0\0\x1cftypavif'))).toBe('image/avif');
    expect(sniffImageType(ascii('\0\0\0\x18ftypheic'))).toBe('image/heic');
    expect(sniffImageType(ascii('BM', 10))).toBe('image/bmp');
    expect(sniffImageType(ascii('PK\x03\x04'))).toBeNull();
    expect(sniffImageType(bytes())).toBeNull();
  });

  it('normalises Content-Type values', () => {
    expect(bareType('Application/X-Zip-Compressed; charset=binary')).toBe('application/x-zip-compressed');
    expect(bareType(null)).toBeNull();
    expect(bareType('')).toBeNull();
  });
});

describe('B17 download names', () => {
  const base: VersionRow = {
    id: 1,
    version: '1.2.0',
    storageKey: "1766549349465_Regi's Modding Library.zip",
    extension: '.zip',
    filename: null,
    modName: "Regi's Modding Library",
    modType: 'Library',
  };

  it('names zips `<Name> <version>.zip` and builds `<Name>.json`', () => {
    expect(downloadNameOf(base, 'zip')).toBe("Regi's Modding Library 1.2.0.zip");
    expect(downloadNameOf({ ...base, modName: 'Cabin / Dock', modType: 'Build' }, 'json')).toBe('Cabin - Dock.json');
  });

  it('falls back to the file name, then to the key without timestamp prefixes', () => {
    expect(downloadNameOf({ ...base, modName: null, filename: 'Axel.zip' }, 'zip')).toBe('Axel.zip');
    expect(
      downloadNameOf({ ...base, modName: ' ', storageKey: 'a/1766549349465_1742657717567_My Mod.zip' }, 'zip'),
    ).toBe('My Mod.zip');
  });
});

describe('SeaweedFS sample', () => {
  type HeadRow = [string, number | string, string, number, number | null, string | null];
  const heads = JSON.parse(
    readFileSync(new URL('../snapshot/public-api-2026-09-29/heads.json', import.meta.url), 'utf8'),
  ) as HeadRow[];

  it('is deterministic, small and covers the legacy oddities', () => {
    const sample = selectSample(heads, 20);
    expect(selectSample(heads, 20)).toEqual(sample);
    expect(sample.length).toBeGreaterThanOrEqual(10);
    expect(sample.length).toBeLessThanOrEqual(30);
    expect(new Set(sample.map((p) => p.key)).size).toBe(sample.length);
    const reasons = new Set(sample.map((p) => p.why));
    for (const why of ['version key with a space', 'BuildShare JSON', 'image served as application/octet-stream']) {
      expect(reasons, why).toContain(why);
    }
    expect(sample.every((p) => p.size <= 10 * 1024 * 1024)).toBe(true);
  });
});

describe('recategorisation CSV', () => {
  it('is RFC 4180 with the import header and escapes spreadsheet formulas', () => {
    const csv = toCsv([
      {
        modId: 7,
        categorySlug: 'quality-of-life',
        tagSlugs: ['ui', 'inventory'],
        slug: '=cmd',
        name: 'Axel, "the" menu',
        currentCategory: 'qol',
        source: 'rules',
        confidence: 0.9,
        ruleCategory: 'quality-of-life',
        ruleConfidence: 0.9,
        ruleKeywords: ['menu'],
        llmCategory: null,
        llmConfidence: null,
        llmReason: '@evil\nline',
      } as Parameters<typeof toCsv>[0][number],
    ]);
    const [header, line] = csv.split(/\r?\n/);
    expect(header).toBe(CSV_COLUMNS.join(','));
    expect(header?.startsWith('modId,categorySlug,tagSlugs')).toBe(true);
    expect(line).toContain('7,quality-of-life,ui;inventory,\'=cmd,"Axel, ""the"" menu",qol,rules,0.90');
    expect(csv).toContain(`"'@evil\nline"`);
  });
});
