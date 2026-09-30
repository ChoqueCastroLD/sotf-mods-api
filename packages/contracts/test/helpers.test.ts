/** Pure helpers shared by API, worker and web. */
import { describe, expect, it } from 'vitest';
import {
  aggregateCompatStatus,
  allowedTransitions,
  bayesianRating,
  buildSizeClass,
  cacheHeaders,
  cacheTag,
  canTransition,
  classifyZipEntry,
  creatorTierFor,
  DisplayName,
  DOMAIN_EVENT_EXAMPLES,
  DOMAIN_EVENT_TYPES,
  decodeCursor,
  downloadPath,
  ERROR_CODES,
  ERROR_STATUS,
  encodeCursor,
  encodePathSegment,
  encodeSseFrame,
  encodeStorageKey,
  fieldErrorsFromZod,
  HandleInput,
  isCacheTag,
  isCountableDownloadRequest,
  isDomainEvent,
  isProblem,
  isUnsafeZipPath,
  JOB_PAYLOAD_EXAMPLES,
  JOB_PAYLOADS,
  JOB_QUEUES,
  JOB_SCHEDULES,
  kitShortPath,
  makeDomainEvent,
  maxUploadBytes,
  modPath,
  nextCreatorTier,
  nextSurvivorRank,
  normalizeKitCode,
  normalizeSlugForLookup,
  parseBuildShareBlueprint,
  parseBuildShareBlueprintText,
  parseDomainEvent,
  parseJobPayload,
  parseRedLoaderManifest,
  parseRedLoaderManifestText,
  parseSiteSetting,
  parseSseMessage,
  problem,
  profilePath,
  publicObjectUrl,
  resolveCacheTags,
  survivorRankFor,
  totalPages,
  UpdateSettingsBody,
} from '../src/index.ts';

describe('errors', () => {
  it('maps every code to its HTTP status', () => {
    expect(ERROR_STATUS).toMatchObject({
      VALIDATION_FAILED: 422,
      UNAUTHENTICATED: 401,
      FORBIDDEN: 403,
      EMAIL_NOT_VERIFIED: 403,
      NOT_FOUND: 404,
      GONE: 410,
      CONFLICT: 409,
      PAYLOAD_TOO_LARGE: 413,
      UNSUPPORTED_MEDIA_TYPE: 415,
      RATE_LIMITED: 429,
      TURNSTILE_REQUIRED: 403,
      SUSPENDED: 403,
      INTERNAL: 500,
      UNAVAILABLE: 503,
    });
    expect(ERROR_CODES).toHaveLength(Object.keys(ERROR_STATUS).length);
  });

  it('builds RFC 9457 problems from codes and Zod issues', () => {
    const parsed = HandleInput.safeParse('admin');
    expect(parsed.success).toBe(false);
    const errors = parsed.success ? [] : fieldErrorsFromZod(parsed.error);
    const body = problem('VALIDATION_FAILED', { instance: '/api/v2/auth/register', requestId: 'abc', errors });
    expect(body).toMatchObject({
      status: 422,
      code: 'VALIDATION_FAILED',
      type: 'https://sotf-mods.com/developers/errors#validation-failed',
    });
    expect(body.errors?.[0]?.message).toBe('this handle is reserved');
    expect(isProblem(body)).toBe(true);
    expect(isProblem({ status: false })).toBe(false);
    expect(problem('RATE_LIMITED', { instance: '/x', requestId: 'r', retryAfter: 30 }).retryAfter).toBe(30);
  });
});

describe('pagination', () => {
  it('round-trips opaque cursors and rejects tampered ones', () => {
    const cursor = encodeCursor({ createdAt: '2026-09-28T18:04:11.123Z', id: 97 });
    expect(cursor).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(decodeCursor(cursor)).toEqual({ createdAt: '2026-09-28T18:04:11.123Z', id: '97' });
    const uuid = encodeCursor({ createdAt: '2026-09-28T18:04:11Z', id: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d' });
    expect(decodeCursor(uuid)?.id).toBe('0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d');
    for (const bad of ['', 'x', '!!!!', encodeCursor({ createdAt: '2026-09-28T18:04:11Z', id: 1 }).slice(0, -3)]) {
      expect(decodeCursor(bad)).toBeNull();
    }
    expect(() => encodeCursor({ createdAt: 'yesterday', id: 1 })).toThrow();
  });

  it('computes total pages', () => {
    expect(totalPages(0, 24)).toBe(0);
    expect(totalPages(25, 24)).toBe(2);
  });
});

describe('cache', () => {
  it('validates and resolves cache tags', () => {
    expect(isCacheTag('mod:20')).toBe(true);
    expect(isCacheTag('category:quality-of-life')).toBe(true);
    expect(isCacheTag('mod:abc')).toBe(false);
    expect(isCacheTag('html')).toBe(true);
    expect(isCacheTag('random')).toBe(false);
    expect(cacheTag.mod(20)).toBe('mod:20');
    expect(resolveCacheTags(['mod:{id}', 'list:mods', 'mod:{id}'], { id: 20 })).toEqual(['mod:20', 'list:mods']);
    expect(resolveCacheTags(['user:{id}'], {})).toEqual([]);
  });

  it('renders the header policy of PLAN §2.7', () => {
    expect(
      cacheHeaders({ kind: 'public', browserMaxAge: 0, edgeMaxAge: 60, staleWhileRevalidate: 600, tags: [] }, [
        'mod:20',
        'legacy',
      ]),
    ).toEqual({
      'cache-control': 'public, max-age=0',
      'cloudflare-cdn-cache-control': 'public, max-age=60, stale-while-revalidate=600',
      'cache-tag': 'mod:20,legacy',
    });
    expect(cacheHeaders({ kind: 'private' })).toEqual({ 'cache-control': 'private, no-store' });
    expect(cacheHeaders({ kind: 'no-store' })).toEqual({ 'cache-control': 'no-store' });
  });
});

describe('downloads and URLs', () => {
  it('encodes R2 keys per segment exactly as PLAN §2.8 (research/01 §6.2 table)', () => {
    expect(encodeStorageKey('1790458408372_arctic fox savage.png')).toBe('1790458408372_arctic%20fox%20savage.png');
    expect(encodeStorageKey("1775413983720_axel's-mod-menu_1.3.8.zip")).toBe("1775413983720_axel's-mod-menu_1.3.8.zip");
    expect(encodeStorageKey('1765726049138_virginia-wardrobe-18+_thumbnail.png')).toBe(
      '1765726049138_virginia-wardrobe-18%2B_thumbnail.png',
    );
    expect(encodeStorageKey('x_skeletal-chainsaw(alpha)_1.1.5.zip')).toBe('x_skeletal-chainsaw(alpha)_1.1.5.zip');
    expect(encodeStorageKey('mods/20/412/axel mod.zip')).toBe('mods/20/412/axel%20mod.zip');
    expect(publicObjectUrl('https://r2.sotf-mods.com/', '/a b.zip')).toBe('https://r2.sotf-mods.com/a%20b.zip');
  });

  it('counts only GET without Range (or bytes=0-) and without prefetch', () => {
    expect(isCountableDownloadRequest({ method: 'GET' })).toBe(true);
    expect(isCountableDownloadRequest({ method: 'get', range: 'bytes=0-' })).toBe(true);
    expect(isCountableDownloadRequest({ method: 'HEAD' })).toBe(false);
    expect(isCountableDownloadRequest({ method: 'GET', range: 'bytes=100-' })).toBe(false);
    expect(isCountableDownloadRequest({ method: 'GET', range: 'bytes=0-0' })).toBe(false);
    expect(isCountableDownloadRequest({ method: 'GET', secPurpose: 'prefetch;prerender' })).toBe(false);
  });

  it('builds canonical paths keeping legacy slugs readable', () => {
    expect(modPath('mod', 'imaxel', "axel's-mod-menu")).toBe("/mods/imaxel/axel's-mod-menu");
    expect(modPath('library', 'imaxel', 'sonsaxlib')).toBe('/mods/imaxel/sonsaxlib');
    expect(modPath('build', 'szalonakobita', 'mountianhouse')).toBe('/builds/szalonakobita/mountianhouse');
    expect(modPath('mod', 'x', 'virginia-wardrobe-18+')).toBe('/mods/x/virginia-wardrobe-18+');
    expect(encodePathSegment('a b/c?')).toBe('a%20b%2Fc%3F');
    expect(downloadPath('imaxel', "axel's-mod-menu", '1.3.8')).toBe("/mods/imaxel/axel's-mod-menu/download/1.3.8");
    expect(profilePath('imaxel')).toBe('/profile/imaxel');
    expect(normalizeSlugForLookup("Axel's-Mod--Menu (v2)")).toBe('axels-mod-menu-v2');
    expect(normalizeSlugForLookup('stack_mod')).toBe('stackmod');
  });

  it('computes upload limits', () => {
    expect(maxUploadBytes('mod_file', false)).toBe(200 * 1024 * 1024);
    expect(maxUploadBytes('mod_file', true)).toBe(500 * 1024 * 1024);
    expect(maxUploadBytes('build_file', true)).toBe(20 * 1024 * 1024);
  });
});

describe('RedLoader manifest', () => {
  const manifest = {
    Id: 'AxelModMenu',
    Name: "Axel's Mod Menu",
    Author: 'ImAxel',
    Version: '1.3.8',
    Description: 'In-game mod menu',
    GameVersion: '1.0.4',
    LoaderVersion: '0.8.6',
    Platform: 'Client',
    Dependencies: ['SonsAxLib'],
    LogColor: 'ff9900',
    Url: "https://sotf-mods.com/mods/imaxel/axel's-mod-menu",
    Priority: 0,
    Type: 'Mod',
  };

  it('reads keys case-insensitively and normalises values', () => {
    const result = parseRedLoaderManifest(manifest);
    expect(result).toMatchObject({ ok: true, warnings: [] });
    expect(result.ok && result.value).toMatchObject({
      id: 'AxelModMenu',
      logColor: '#FF9900',
      dependencies: ['SonsAxLib'],
      platform: 'Client',
    });
  });

  it('handles a BOM, CSV dependencies and soft errors', () => {
    const text = `\uFEFF${JSON.stringify({ id: 'X', version: '1.0.0', type: 'Library', dependencies: 'A, B,,A', logColor: 'nope' })}`;
    const result = parseRedLoaderManifestText(text);
    expect(result.ok && result.value.dependencies).toEqual(['A', 'B']);
    expect(result.ok && result.warnings.map((w) => w.code)).toContain('invalid_log_color');
  });

  it('rejects manifests without id, semver version or type', () => {
    expect(parseRedLoaderManifestText('{')).toMatchObject({ ok: false, issues: [{ code: 'invalid_json' }] });
    expect(parseRedLoaderManifest([])).toMatchObject({ ok: false, issues: [{ code: 'not_an_object' }] });
    const missing = parseRedLoaderManifest({ type: 'Mod' });
    expect(missing.ok ? [] : missing.issues.map((i) => i.code)).toEqual(
      expect.arrayContaining(['missing_id', 'missing_version']),
    );
    const bad = parseRedLoaderManifest({ id: 'X', version: 'notsemver', type: 'Plugin' });
    expect(bad.ok ? [] : bad.issues.map((i) => i.code)).toEqual(
      expect.arrayContaining(['invalid_version', 'invalid_type']),
    );
  });
});

describe('BuildShare blueprint', () => {
  const blueprint = {
    Name: 'MountianHouse',
    Guid: 'e215ede2e4d742398c72aaca62496c10',
    Author: 'Natka',
    Description: 'My Description',
    NumberOfElements: 4125,
    Data: JSON.stringify({ Version: '0.0.16', Structures: [1, 2, 3] }),
    Thumbnail: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
  };

  it('parses the JSON-in-string Data and extracts the metadata', () => {
    const result = parseBuildShareBlueprint(blueprint);
    expect(result.ok && result.value).toMatchObject({
      guid: 'e215ede2e4d742398c72aaca62496c10',
      buildShareVersion: '0.0.16',
      numberOfElements: 4125,
      structuresCount: 3,
      sizeClass: 'L',
      author: 'Natka',
    });
    expect(result.ok && result.value.thumbnailBase64?.startsWith('iVBOR')).toBe(true);
  });

  it('accepts Data as an object and reports invalid structure', () => {
    expect(parseBuildShareBlueprint({ ...blueprint, Data: { version: 1 } })).toMatchObject({
      ok: true,
      value: { buildShareVersion: '1' },
    });
    const broken = parseBuildShareBlueprintText(JSON.stringify({ Name: 'x', Data: '{oops' }));
    expect(broken.ok ? [] : broken.issues.map((i) => i.code)).toEqual(
      expect.arrayContaining(['missing_guid', 'invalid_data']),
    );
  });

  it('classifies sizes', () => {
    expect([10, 500, 1999, 2000, 7999, 8000].map(buildSizeClass)).toEqual(['S', 'M', 'M', 'L', 'L', 'XL']);
  });
});

describe('zip checks', () => {
  it('classifies entries and detects zip slip', () => {
    expect(classifyZipEntry('AxelModMenu.dll')).toBe('allowed');
    expect(classifyZipEntry('Mod/Assets/icons.BUNDLE')).toBe('allowed');
    expect(classifyZipEntry('installer.bat')).toBe('flagged');
    expect(classifyZipEntry('notes.docx')).toBe('not_allowed');
    expect(classifyZipEntry('folder/')).toBe('allowed');
    expect(isUnsafeZipPath('../evil.dll')).toBe(true);
    expect(isUnsafeZipPath('a\\..\\b')).toBe(true);
    expect(isUnsafeZipPath('/etc/passwd')).toBe(true);
    expect(isUnsafeZipPath('C:/x')).toBe(true);
    expect(isUnsafeZipPath('Mod/..hidden/file.txt')).toBe(false);
  });
});

describe('kits', () => {
  it('normalises share codes (Crockford base32)', () => {
    expect(normalizeKitCode('kit-7q2m-4f')).toBe('KIT-7Q2M-4F');
    expect(normalizeKitCode('7Q2M4F')).toBe('KIT-7Q2M-4F');
    expect(normalizeKitCode('KIT 7QOM LF')).toBe('KIT-7Q0M-1F');
    expect(normalizeKitCode('KIT-7Q2M-4U')).toBeNull();
    expect(normalizeKitCode('short')).toBeNull();
    expect(kitShortPath('KIT-7Q2M-4F')).toBe('/k/7Q2M4F');
  });
});

describe('users', () => {
  it('validates handles and display names', () => {
    expect(HandleInput.parse(' New-Survivor ')).toBe('new-survivor');
    // `deleted-<id>` belongs to anonymised accounts.
    expect(HandleInput.safeParse('deleted-42').success).toBe(false);
    expect(HandleInput.safeParse('undeleted-42').success).toBe(true);
    for (const bad of ['ab', 'a--b', '-abc', 'abc-', 'über', 'basecamp', 'x'.repeat(25)]) {
      expect(HandleInput.safeParse(bad).success, bad).toBe(false);
    }
    expect(DisplayName.parse('  Ｊüan 日本  ')).toBe('Ｊüan 日本');
    expect(DisplayName.safeParse(' a ').success).toBe(false);
  });

  it('requires the adult confirmation to enable NSFW', () => {
    expect(UpdateSettingsBody.safeParse({ nsfwOptIn: true }).success).toBe(false);
    expect(UpdateSettingsBody.safeParse({ nsfwOptIn: true, confirmAdult: true }).success).toBe(true);
    expect(UpdateSettingsBody.safeParse({ nsfwOptIn: false }).success).toBe(true);
  });
});

describe('gamification, reviews and compatibility rules', () => {
  it('computes ranks and tiers from PLAN §7.2', () => {
    expect([0, 49, 50, 150, 399, 1000, 2500, 6000, 15000].map(survivorRankFor)).toEqual([
      'castaway',
      'castaway',
      'scavenger',
      'forager',
      'forager',
      'builder',
      'pathfinder',
      'veteran',
      'legend',
    ]);
    expect(nextSurvivorRank(120)).toEqual({ key: 'forager', xpNeeded: 30 });
    expect(nextSurvivorRank(20000)).toBeNull();
    expect([999, 1000, 117_719, 374_864, 1_000_000].map(creatorTierFor)).toEqual([
      null,
      'campfire',
      'treehouse',
      'treehouse',
      'landmark',
    ]);
    expect(nextCreatorTier(374_864)).toEqual({ key: 'fortress', downloadsNeeded: 125_136 });
  });

  it('computes the Bayesian mean and the compat aggregate', () => {
    expect(bayesianRating(0, 0)).toBe(4);
    expect(bayesianRating(65, 14)).toBeCloseTo((5 * 4 + 65) / 19);
    expect(aggregateCompatStatus({ works: 2, partial: 0, broken: 0 })).toBe('untested');
    expect(aggregateCompatStatus({ works: 7, partial: 2, broken: 1 })).toBe('works');
    expect(aggregateCompatStatus({ works: 1, partial: 1, broken: 2 })).toBe('broken');
    expect(aggregateCompatStatus({ works: 2, partial: 1, broken: 1 })).toBe('mixed');
  });

  it('follows the moderation status machine of PLAN §7.4', () => {
    expect(canTransition('pending', 'published', 'moderator')).toBe(true);
    expect(canTransition('pending', 'published', 'author')).toBe(false);
    expect(canTransition('removed', 'published', 'moderator')).toBe(false);
    expect(canTransition('removed', 'published', 'admin')).toBe(true);
    expect(allowedTransitions('published', 'author').sort()).toEqual(['archived', 'unlisted']);
    expect(allowedTransitions('rejected', 'author')).toEqual(['pending']);
  });
});

describe('domain events, jobs and SSE', () => {
  const meta = { id: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d', occurredAt: '2026-09-29T10:00:00.000Z', actorId: 12 };

  it.each(DOMAIN_EVENT_TYPES.map((type) => [type]))('%s example is a valid event', (type) => {
    const event = makeDomainEvent(type, DOMAIN_EVENT_EXAMPLES[type] as never, meta);
    expect(parseDomainEvent(JSON.parse(JSON.stringify(event)))).toEqual(event);
  });

  it('rejects unknown types and wrong payloads', () => {
    expect(() => parseDomainEvent({ ...meta, type: 'mod.exploded', payload: {} })).toThrow();
    expect(() => parseDomainEvent({ ...meta, type: 'mod.updated', payload: { modId: 'x' } })).toThrow();
    const event = parseDomainEvent({ ...meta, type: 'kit.deleted', payload: { kitId: 5, ownerId: 12 } });
    expect(isDomainEvent(event, 'kit.deleted') && event.payload.kitId).toBe(5);
  });

  it('declares valid queue names, payload examples and schedules', () => {
    for (const queue of JOB_QUEUES) expect(queue).toMatch(/^[\w.\-/]+$/);
    for (const [queue, example] of Object.entries(JOB_PAYLOAD_EXAMPLES)) {
      expect(JOB_PAYLOADS[queue as keyof typeof JOB_PAYLOADS].safeParse(example).success, queue).toBe(true);
    }
    for (const schedule of JOB_SCHEDULES) {
      expect(() => parseJobPayload(schedule.queue, schedule.data), schedule.queue).not.toThrow();
      expect(schedule.cron.split(' ')).toHaveLength(5);
    }
    expect(Object.keys(JOB_PAYLOAD_EXAMPLES).sort()).toEqual(JOB_QUEUES.filter((q) => q !== 'domain.event').sort());
  });

  it('encodes and parses SSE frames', () => {
    const frame = encodeSseFrame({
      event: 'notification',
      id: '5001',
      data: { id: 5001, type: 'comment.reply', unreadCount: 2 },
    });
    expect(frame).toBe('id: 5001\nevent: notification\ndata: {"id":5001,"type":"comment.reply","unreadCount":2}\n\n');
    expect(parseSseMessage('mod.updated', '{"modId":20}', '7')).toEqual({
      event: 'mod.updated',
      id: '7',
      data: { modId: 20 },
    });
    expect(parseSseMessage('mod.updated', 'not json')).toBeNull();
    expect(parseSseMessage('unknown', '{}')).toBeNull();
  });

  it('validates site settings per key', () => {
    expect(
      parseSiteSetting('kelvinseek', { enabled: true, model: 'gpt-4o-mini', dailyBudgetUsd: 3, timeoutMs: 8000 })
        .success,
    ).toBe(true);
    expect(
      parseSiteSetting('discordWebhooks', [{ name: 'x', url: 'https://example.com/hook', events: ['mod.published'] }])
        .success,
    ).toBe(false);
  });
});
