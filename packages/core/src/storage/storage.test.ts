import { describe, expect, it } from 'vitest';
import { createStorage, sharedBucketWarning, storageConfigFromEnv } from './client.ts';
import {
  asciiFilename,
  attachmentDisposition,
  buildDownloadName,
  encodeRfc5987,
  versionDownloadName,
} from './disposition.ts';
import {
  buildFileKey,
  encodeStorageKey,
  exportKey,
  incomingKey,
  isSafeKey,
  mediaOriginalKey,
  mediaVariantKey,
  modFileKey,
  ogImageKey,
  publicObjectUrl,
  safeName,
  storageKeyFromPublicUrl,
} from './keys.ts';

const R2 = 'https://r2.sotf-mods.com';

describe('encodeStorageKey / publicObjectUrl (PLAN §2.8)', () => {
  it.each([
    ['1790458408372_arctic fox savage.png', '1790458408372_arctic%20fox%20savage.png'],
    ["1775413983720_axel's-mod-menu_1.3.8.zip", "1775413983720_axel's-mod-menu_1.3.8.zip"],
    ['1765726049138_virginia-wardrobe-18+_thumbnail.png', '1765726049138_virginia-wardrobe-18%2B_thumbnail.png'],
    ['1734_skeletal-chainsaw(alpha)_1.1.5.zip', '1734_skeletal-chainsaw(alpha)_1.1.5.zip'],
    [
      'download/1722123985521_virginia-wardrobe-18 _0.0.3.zip',
      'download/1722123985521_virginia-wardrobe-18%20_0.0.3.zip',
    ],
    ['mods/20/415/axels-mod-menu-1.3.9.zip', 'mods/20/415/axels-mod-menu-1.3.9.zip'],
  ])('%s', (key, encoded) => {
    expect(encodeStorageKey(key)).toBe(encoded);
    expect(publicObjectUrl(`${R2}/`, key)).toBe(`${R2}/${encoded}`);
    expect(publicObjectUrl(R2, key)).not.toContain('+');
  });
});

describe('key scheme', () => {
  it('builds only [a-z0-9._/-] keys', () => {
    const keys = [
      modFileKey(20, 415, "Axel's Mod Menu", '1.3.9'),
      buildFileKey(88, 530, 'Große Hütte (v2)'),
      mediaOriginalKey('0192F3A4-7C1E-7B9A-9E1D-2C4F6A8B0C1D', 'PNG'),
      mediaVariantKey('0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d', 640, 'avif'),
      ogImageKey('mod', 20, '3F9A1C'),
      incomingKey(12, '0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f'),
      exportKey(12, '0192f3a6-2c3d-7e4f-9a51-6b7c8d9e0f1a'),
    ];
    expect(keys).toEqual([
      'mods/20/415/axels-mod-menu-1.3.9.zip',
      'builds/88/530/grosse-hutte-v2.json',
      'media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/original.png',
      'media/0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d/640.avif',
      'og/mod/20-3f9a1c.png',
      'incoming/12/0192f3a5-1b2c-7d3e-8f40-5a6b7c8d9e0f',
      'exports/12/0192f3a6-2c3d-7e4f-9a51-6b7c8d9e0f1a.zip',
    ]);
    for (const key of keys) expect(isSafeKey(key)).toBe(true);
  });

  it('rejects unsafe keys and ids', () => {
    expect(isSafeKey('mods/../x.zip')).toBe(false);
    expect(isSafeKey('/mods/1.zip')).toBe(false);
    expect(isSafeKey("mods/1/axel's.zip")).toBe(false);
    expect(isSafeKey('mods//1.zip')).toBe(false);
    expect(() => incomingKey(12, '../etc')).toThrow(TypeError);
    expect(() => mediaOriginalKey('abc', 'exe')).toThrow(TypeError);
  });

  it('safeName never returns an empty or dangerous name', () => {
    expect(safeName('')).toBe('file');
    expect(safeName('...')).toBe('file');
    expect(safeName('Ñandú ÆØ  -- mod!!')).toBe('nandu-aeo-mod');
    expect(safeName('a'.repeat(200))).toHaveLength(80);
    expect(safeName('v1..2')).toBe('v1.2');
  });

  it('extracts keys from legacy public URLs (raw or encoded, `+` literal)', () => {
    expect(storageKeyFromPublicUrl(`${R2}/1790458408372_arctic%20fox%20savage.png`, [R2])).toBe(
      '1790458408372_arctic fox savage.png',
    );
    expect(storageKeyFromPublicUrl(`${R2}/1765726049138_virginia-wardrobe-18+_thumbnail.png`, [R2])).toBe(
      '1765726049138_virginia-wardrobe-18+_thumbnail.png',
    );
    expect(storageKeyFromPublicUrl(`${R2}/a%zz.zip`, [R2])).toBe('a%zz.zip');
    expect(storageKeyFromPublicUrl('https://example.com/x.zip', [R2])).toBeNull();
    expect(storageKeyFromPublicUrl(`${R2}/`, [R2])).toBeNull();
    expect(storageKeyFromPublicUrl(null, [R2])).toBeNull();
  });
});

describe('Content-Disposition', () => {
  it('has an ASCII fallback and the exact UTF-8 name', () => {
    expect(attachmentDisposition("Axel's Mod Menu 1.3.9.zip")).toBe(
      `attachment; filename="Axel's Mod Menu 1.3.9.zip"; filename*=UTF-8''Axel%27s%20Mod%20Menu%201.3.9.zip`,
    );
    expect(attachmentDisposition('Große "Hütte" 1.0.json')).toBe(
      `attachment; filename="Grosse Hutte 1.0.json"; filename*=UTF-8''Gro%C3%9Fe%20%22H%C3%BCtte%22%201.0.json`,
    );
    expect(attachmentDisposition('a\r\nSet-Cookie: x')).not.toMatch(/[\r\n]/);
    expect(asciiFilename('日本')).toBe('__');
    expect(encodeRfc5987('(x)*')).toBe('%28x%29%2A');
    expect(versionDownloadName('Regi/Lib', '1.0', '.ZIP')).toBe('Regi-Lib 1.0.zip');
    // Builds: `<Name>.json` (their version is a UUIDv7), the same name B17 gives legacy builds.
    expect(buildDownloadName(' Natka Cabin ')).toBe('Natka Cabin.json');
    expect(buildDownloadName('A/B')).toBe('A-B.json');
  });
});

describe('storageConfigFromEnv', () => {
  const base = { R2_BUCKET: 'sotf-mods', R2_PRIVATE_BUCKET: 'sotf-mods-private', R2_PUBLIC_BASE_URL: `${R2}/` };
  it('is null without credentials or endpoint', () => {
    expect(storageConfigFromEnv(base)).toBeNull();
    expect(storageConfigFromEnv({ ...base, R2_ACCESS_KEY_ID: 'a', R2_SECRET_ACCESS_KEY: 'b' })).toBeNull();
  });
  it('derives the R2 endpoint from the account id; R2_ENDPOINT wins', () => {
    const creds = { ...base, R2_ACCESS_KEY_ID: 'a', R2_SECRET_ACCESS_KEY: 'b' };
    expect(storageConfigFromEnv({ ...creds, R2_ACCOUNT_ID: 'acc' })?.endpoint).toBe(
      'https://acc.r2.cloudflarestorage.com',
    );
    const local = storageConfigFromEnv({ ...creds, R2_ACCOUNT_ID: 'acc', R2_ENDPOINT: 'http://127.0.0.1:47333/' });
    expect(local).toMatchObject({ endpoint: 'http://127.0.0.1:47333', publicBaseUrl: R2, publicBucket: 'sotf-mods' });
    expect(local?.presignEndpoint).toBeUndefined();
  });
  it('signs browser uploads for R2_PUBLIC_ENDPOINT and server reads for the internal endpoint', async () => {
    const config = storageConfigFromEnv({
      ...base,
      R2_ACCESS_KEY_ID: 'a',
      R2_SECRET_ACCESS_KEY: 'b',
      R2_ENDPOINT: 'http://seaweedfs:8333',
      R2_PUBLIC_ENDPOINT: 'http://127.0.0.1:47533/',
    });
    expect(config).toMatchObject({ endpoint: 'http://seaweedfs:8333', presignEndpoint: 'http://127.0.0.1:47533' });
    const storage = createStorage(config as NonNullable<typeof config>);
    try {
      const put = await storage.presignPut({
        bucket: 'sotf-mods-private',
        key: 'incoming/1/x.zip',
        contentType: 'application/zip',
        contentLength: 10,
        expiresInSeconds: 60,
      });
      expect(put.url.startsWith('http://127.0.0.1:47533/sotf-mods-private/incoming/1/x.zip?')).toBe(true);
      const part = await storage.presignPart({
        bucket: 'sotf-mods-private',
        key: 'incoming/1/x.zip',
        uploadId: 'u1',
        partNumber: 1,
        contentLength: 10,
        expiresInSeconds: 60,
      });
      expect(part.startsWith('http://127.0.0.1:47533/')).toBe(true);
      const get = await storage.presignGet('sotf-mods-private', 'incoming/1/x.zip', 60);
      expect(get.startsWith('http://seaweedfs:8333/')).toBe(true);
    } finally {
      storage.destroy();
    }
  });
});

describe('sharedBucketWarning', () => {
  it('warns when the private bucket is the public one (incoming/, quarantine/ and exports/ would be public)', () => {
    expect(sharedBucketWarning({ publicBucket: 'sotf-mods', privateBucket: 'sotf-mods' })).toMatch(
      /incoming\/, quarantine\/ and exports\//,
    );
    expect(sharedBucketWarning({ publicBucket: 'sotf-mods', privateBucket: 'sotf-mods-private' })).toBeNull();
  });
});
