import { zipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { checkAgainstMod, highestSemver, inspectionStatus } from './checks.ts';
import { bufferSource, httpRangeSource } from './reader.ts';
import { inspectZip } from './zip.ts';

const enc = (text: string) => new TextEncoder().encode(text);
const manifest = (over: Record<string, unknown> = {}) =>
  enc(JSON.stringify({ id: 'AxelModMenu', name: 'Axel Mod Menu', version: '1.3.8', type: 'Mod', ...over }));

function zip(files: Record<string, Uint8Array>, level: 0 | 9 = 9): Buffer {
  return Buffer.from(zipSync(files, { level }));
}

async function inspect(files: Record<string, Uint8Array>, level: 0 | 9 = 9) {
  return inspectZip(bufferSource(zip(files, level)));
}

const codes = (flags: ReadonlyArray<{ code: string }>) => flags.map((f) => f.code).sort();

describe('zip inspection (PLAN §7.4 automatic checks)', () => {
  it('passes a valid mod zip and reads the shallowest manifest', async () => {
    const result = await inspect({
      'AxelModMenu/manifest.json': manifest(),
      'AxelModMenu/AxelModMenu.dll': enc('MZ binary'),
      'AxelModMenu/Deep/Nested/manifest.json': manifest({ id: 'Other' }),
      'AxelModMenu.dll': enc('MZ'),
    });
    expect(result.flags).toEqual([]);
    expect(inspectionStatus(result.flags)).toBe('passed');
    expect(result.manifest).toMatchObject({ id: 'AxelModMenu', version: '1.3.8', type: 'Mod', dependencies: [] });
    expect(result.manifestPath).toBe('AxelModMenu/manifest.json');
    expect(result.entriesTotal).toBe(4);
    expect(result.entries.find((e) => e.path === 'AxelModMenu/AxelModMenu.dll')?.crc32).toBeGreaterThan(0);
    expect(result.ratio).toBeGreaterThan(0);
  });

  it('refuses a zip bomb (compression ratio > 100)', async () => {
    const result = await inspect({ 'manifest.json': manifest(), 'Big/zeros.bin': new Uint8Array(4 * 1024 * 1024) });
    expect(codes(result.flags)).toContain('zip_bomb_ratio');
    expect(inspectionStatus(result.flags)).toBe('failed');
    // Unsafe archives are never read further.
    expect(result.manifest).toBeNull();
  });

  it('refuses zip slip and absolute paths', async () => {
    const slip = await inspect({ 'manifest.json': manifest(), '../x.dll': enc('MZ') });
    expect(slip.flags).toContainEqual(
      expect.objectContaining({ code: 'zip_slip', path: '../x.dll', severity: 'error' }),
    );
    const nested = await inspect({ 'manifest.json': manifest(), 'Mod/../../evil.dll': enc('MZ') });
    expect(codes(nested.flags)).toContain('zip_slip');
    const absolute = await inspect({ 'manifest.json': manifest(), '/etc/passwd.txt': enc('x') });
    expect(codes(absolute.flags)).toContain('absolute_path');
  });

  it('flags executables and unknown extensions for human review without failing', async () => {
    const result = await inspect({
      'manifest.json': manifest(),
      'Mod/setup.exe': enc('MZ'),
      'Mod/notes.xyz': enc('?'),
    });
    expect(result.flags).toContainEqual(
      expect.objectContaining({ code: 'extension_flagged', severity: 'warning', path: 'Mod/setup.exe' }),
    );
    expect(result.flags).toContainEqual(
      expect.objectContaining({ code: 'extension_not_allowed', path: 'Mod/notes.xyz' }),
    );
    expect(inspectionStatus(result.flags)).toBe('flagged');
    expect(result.manifest?.id).toBe('AxelModMenu');
  });

  it('keeps at most 20 flags of one kind', async () => {
    const files: Record<string, Uint8Array> = { 'manifest.json': manifest() };
    for (let i = 0; i < 30; i += 1) files[`Mod/tool${i}.bat`] = enc('@echo off');
    const result = await inspect(files);
    const flagged = result.flags.filter((f) => f.code === 'extension_flagged');
    expect(flagged).toHaveLength(21);
    expect(flagged[20]).toMatchObject({ path: null, detail: 'more entries omitted' });
  });

  it('reports missing, broken and non-semver manifests as errors', async () => {
    expect(codes((await inspect({ 'Mod/Mod.dll': enc('MZ') })).flags)).toEqual(['manifest_missing']);
    expect(codes((await inspect({ 'manifest.json': enc('{not json') })).flags)).toEqual(['manifest_invalid']);
    expect(codes((await inspect({ 'manifest.json': manifest({ version: 'one' }) })).flags)).toContain(
      'version_not_semver',
    );
    expect(codes((await inspect({ 'manifest.json': manifest({ type: 'Plugin' }) })).flags)).toContain(
      'manifest_invalid',
    );
  });

  it('turns a non-zip file into a flag instead of throwing', async () => {
    const result = await inspectZip(bufferSource(Buffer.from('this is not a zip')));
    expect(codes(result.flags)).toEqual(['zip_invalid']);
  });
});

function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (const byte of data) {
    crc ^= byte;
    for (let k = 0; k < 8; k += 1) crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  }
  return (crc ^ 0xffffffff) >>> 0;
}

interface RawEntry {
  name: string;
  data: Uint8Array;
  /** Deflate entry with this zip64 uncompressed size in the central directory (the data stays 1 byte). */
  zip64Size?: bigint;
}

/** A zip written by hand, to control what the end record says (the libraries never write a lying one). */
function rawZip(entries: RawEntry[], endRecordCount: number = entries.length): Buffer {
  const parts: Buffer[] = [];
  const directory: Buffer[] = [];
  let offset = 0;
  for (const entry of entries) {
    const name = Buffer.from(entry.name);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(45, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt32LE(crc32(entry.data), 14);
    local.writeUInt32LE(entry.data.length, 18);
    local.writeUInt32LE(entry.data.length, 22);
    local.writeUInt16LE(name.length, 26);
    parts.push(local, name, Buffer.from(entry.data));

    const extra = Buffer.alloc(entry.zip64Size === undefined ? 0 : 12);
    if (entry.zip64Size !== undefined) {
      extra.writeUInt16LE(1, 0);
      extra.writeUInt16LE(8, 2);
      extra.writeBigUInt64LE(entry.zip64Size, 4);
    }
    const header = Buffer.alloc(46);
    header.writeUInt32LE(0x02014b50, 0);
    header.writeUInt16LE(45, 4);
    header.writeUInt16LE(45, 6);
    header.writeUInt16LE(0x0800, 8);
    header.writeUInt16LE(entry.zip64Size === undefined ? 0 : 8, 10);
    header.writeUInt32LE(crc32(entry.data), 16);
    header.writeUInt32LE(entry.data.length, 20);
    header.writeUInt32LE(entry.zip64Size === undefined ? entry.data.length : 0xffffffff, 24);
    header.writeUInt16LE(name.length, 28);
    header.writeUInt16LE(extra.length, 30);
    header.writeUInt32LE(offset, 42);
    directory.push(header, name, extra);
    offset += 30 + name.length + entry.data.length;
  }
  const central = Buffer.concat(directory);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(endRecordCount, 8);
  end.writeUInt16LE(endRecordCount, 10);
  end.writeUInt32LE(central.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...parts, central, end]);
}

describe('hostile archives', () => {
  it('flags central directory entries that the end record does not count', async () => {
    // The end record says 1 entry; a reader that goes to the end of the directory also extracts the second.
    const zip = rawZip(
      [
        { name: 'manifest.json', data: manifest() },
        { name: '../../Mods/evil.dll', data: enc('MZ') },
      ],
      1,
    );
    const result = await inspectZip(bufferSource(zip));
    expect(result.entries.map((e) => e.path)).toEqual(['manifest.json']);
    expect(result.flags).toContainEqual(
      expect.objectContaining({
        code: 'zip_invalid',
        severity: 'error',
        detail: expect.stringContaining('does not count'),
      }),
    );
    expect(inspectionStatus(result.flags)).toBe('failed');
    expect(result.manifest).toBeNull();
  });

  it('does not flag an honest end record', async () => {
    const zip = rawZip([
      { name: 'manifest.json', data: manifest() },
      { name: 'Mod.dll', data: enc('MZ') },
    ]);
    const result = await inspectZip(bufferSource(zip));
    expect(result.flags).toEqual([]);
    expect(result.entriesTotal).toBe(2);
  });

  it('refuses control characters in entry names and keeps U+0000 out of what is stored (jsonb cannot hold it)', async () => {
    const zip = rawZip([
      { name: 'manifest.json', data: manifest() },
      { name: 'Mod/evil.dll\u0000.txt', data: enc('MZ') },
    ]);
    const result = await inspectZip(bufferSource(zip));
    expect(result.flags).toContainEqual(
      expect.objectContaining({
        code: 'zip_invalid',
        severity: 'error',
        detail: 'control characters in the entry name',
      }),
    );
    expect(JSON.stringify([result.entries, result.flags])).not.toContain('\\u0000');
  });

  it('replaces U+0000 and lone surrogates in manifest strings (jsonb cannot hold them)', async () => {
    const result = await inspect({
      'manifest.json': enc(
        '{"id":"AxelModMenu","version":"1.3.8","type":"Mod","name":"Axel\\u0000Menu","author":"x\\ud800y","description":"ok"}',
      ),
    });
    expect(result.flags).toEqual([]);
    expect(result.manifest?.name).toBe('Axel\uFFFDMenu');
    expect(result.manifest?.author).toBe('x\uFFFDy');
    expect(JSON.stringify(result.manifest)).not.toMatch(/\\u0000|\\ud800/i);
  });

  it('keeps raw NUL bytes of a broken manifest out of the flag details', async () => {
    const result = await inspect({ 'manifest.json': Buffer.from('{"id":"A\u0000B"') });
    const detail = result.flags.find((f) => f.code === 'manifest_invalid')?.detail ?? '';
    expect(detail).not.toContain('\u0000');
    expect(JSON.stringify(result.flags)).not.toContain('\\u0000');
  });

  it('keeps the uncompressed total within what the database column can hold (zip64 sizes)', async () => {
    const huge = 2n ** 62n;
    const zip = rawZip(
      ['manifest.json', 'a.bin', 'b.bin', 'c.bin'].map((name) => ({ name, data: enc('x'), zip64Size: huge })),
    );
    const result = await inspectZip(bufferSource(zip));
    expect(codes(result.flags)).toContain('zip_bomb_ratio');
    expect(result.uncompressedBytes).toBe(Number.MAX_SAFE_INTEGER);
    expect(result.entries.every((entry) => Number.isSafeInteger(entry.size))).toBe(true);
    // bigint column: 9.22e18; the clamped value always fits.
    expect(result.uncompressedBytes as number).toBeLessThan(2 ** 63);
  });
});

describe('range reads of an upload', () => {
  it('send If-Match so a swapped object fails the read instead of mixing two files', async () => {
    const seen: Array<Record<string, string>> = [];
    const body = Buffer.from('0123456789');
    const fetchStub = (async (_url: string | URL | Request, init?: RequestInit) => {
      const headers = Object.fromEntries(new Headers(init?.headers).entries());
      seen.push(headers);
      const [from = 0, to = 0] = (headers.range ?? '').replace('bytes=', '').split('-').map(Number);
      return new Response(body.subarray(from, to + 1), { status: 206 });
    }) as typeof fetch;
    const source = httpRangeSource('https://store.invalid/o', body.length, { fetch: fetchStub, ifMatch: '"abc"' });
    expect((await source.read(2, 6)).toString()).toBe('2345');
    expect(seen[0]).toMatchObject({ range: 'bytes=0-9', 'if-match': '"abc"' });
    const plain = httpRangeSource('https://store.invalid/o', body.length, { fetch: fetchStub });
    await plain.read(2, 6);
    expect(seen[1]).not.toHaveProperty('if-match');
  });
});

describe('checks against the target mod', () => {
  const target = { manifestId: 'AxelModMenu', existingVersions: ['1.2.0', '1.3.8', 'v1.3.9-beta.1', 'legacy'] };

  it('requires the same manifest id and a greater semver', () => {
    expect(checkAgainstMod({ id: 'AxelModMenu', version: '1.4.0' }, target)).toEqual([]);
    expect(codes(checkAgainstMod({ id: 'Other', version: '1.4.0' }, target))).toEqual(['manifest_id_mismatch']);
    expect(codes(checkAgainstMod({ id: 'AxelModMenu', version: '1.3.0' }, target))).toEqual(['version_not_greater']);
    expect(checkAgainstMod({ id: 'AxelModMenu', version: 'v1.3.8' }, target)[0]?.detail).toMatch(/already exists/);
    expect(codes(checkAgainstMod({ id: 'AxelModMenu', version: 'soon' }, target))).toEqual(['version_not_semver']);
    // A release is greater than its pre-release.
    expect(checkAgainstMod({ id: 'AxelModMenu', version: '1.3.9' }, target)).toEqual([]);
  });

  it('finds the highest semver, ignoring non-semver legacy versions', () => {
    expect(highestSemver(['1.2.0', 'legacy', '1.10.0', '1.9.9'])).toBe('1.10.0');
    expect(highestSemver(['legacy'])).toBeNull();
  });
});
