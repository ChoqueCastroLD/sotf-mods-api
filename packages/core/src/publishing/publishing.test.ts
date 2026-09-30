import { describe, expect, it } from 'vitest';
import { assertFetchableUrl, isPublicAddress, type SafeFetchError } from '../media/ssrf.ts';
import { legacyBuildColumns, legacyModSide, legacyMultiplayer } from './legacy.ts';
import { slugify } from './listing.ts';
import { decidePublication, PublicationRefused } from './policy.ts';
import { type PreflightFacts, preflight, preflightPasses, qualityScore } from './preflight.ts';

describe('publication policy (PLAN §7.4)', () => {
  it('auto-publishes new mods only for trusted authors, and builds with a valid blueprint', () => {
    expect(decidePublication({ kind: 'mod', modStatus: null, checks: 'passed', canSkipReview: true })).toEqual({
      modStatus: 'published',
      versionStatus: 'active',
      becomesLatest: true,
      publishFile: true,
    });
    expect(decidePublication({ kind: 'mod', modStatus: null, checks: 'passed', canSkipReview: false })).toEqual({
      modStatus: 'pending',
      versionStatus: 'pending',
      becomesLatest: true,
      publishFile: true,
    });
    expect(
      decidePublication({ kind: 'build', modStatus: null, checks: 'passed', canSkipReview: false }).modStatus,
    ).toBe('published');
    // A flagged file always waits (and stays out of the public bucket).
    expect(decidePublication({ kind: 'mod', modStatus: null, checks: 'flagged', canSkipReview: true })).toMatchObject({
      modStatus: 'pending',
      publishFile: false,
    });
  });

  it('new versions: active on visible mods, held when flagged, resubmission for rejected mods', () => {
    for (const status of ['published', 'unlisted', 'archived'] as const) {
      expect(decidePublication({ kind: 'mod', modStatus: status, checks: 'passed', canSkipReview: false })).toEqual({
        modStatus: status,
        versionStatus: 'active',
        becomesLatest: true,
        publishFile: true,
      });
      expect(decidePublication({ kind: 'mod', modStatus: status, checks: 'flagged', canSkipReview: true })).toEqual({
        modStatus: status,
        versionStatus: 'pending',
        becomesLatest: false,
        publishFile: false,
      });
    }
    expect(
      decidePublication({ kind: 'mod', modStatus: 'rejected', checks: 'passed', canSkipReview: true }),
    ).toMatchObject({
      modStatus: 'pending',
      versionStatus: 'pending',
      becomesLatest: true,
    });
    expect(() =>
      decidePublication({ kind: 'mod', modStatus: 'removed', checks: 'passed', canSkipReview: true }),
    ).toThrow(PublicationRefused);
  });
});

const listing = {
  kind: 'mod' as const,
  name: 'Axel Mod Menu',
  shortDescription: 'In-game menu',
  descriptionMd: 'x'.repeat(300),
  categorySlug: 'menus-sandbox',
  tagCount: 2,
  license: 'MIT',
  sourceUrl: 'https://github.com/x/y',
  platform: 'Client',
  galleryCount: 3,
  hasThumbnail: true,
};

const facts = (over: Partial<PreflightFacts> = {}): PreflightFacts => ({
  mode: 'new',
  listing,
  file: { state: 'passed', flags: [] },
  slugValid: true,
  slugTaken: false,
  manifestIdTaken: false,
  categoryValid: true,
  unknownTags: [],
  unknownDependencies: [],
  dependencyCycles: [],
  mediaPending: 0,
  mediaInvalid: 0,
  descriptionRawHtml: false,
  changelogMd: null,
  ...over,
});

describe('preflight and quality score', () => {
  it('scores the listing by gallery, description, source, platform, tags and licence', () => {
    expect(qualityScore(listing)).toBe(100);
    expect(qualityScore({ ...listing, galleryCount: 2, license: null })).toBe(67);
    expect(qualityScore({ ...listing, kind: 'build', sourceUrl: null, platform: null })).toBe(100);
    expect(qualityScore({ ...listing, descriptionMd: '  short  ', tagCount: 0, sourceUrl: null })).toBe(50);
  });

  it('passes a complete new mod with only ok rows', () => {
    const rows = preflight(facts());
    expect(rows.every((r) => r.severity === 'ok')).toBe(true);
    expect(preflightPasses(rows)).toBe(true);
  });

  it('blocks on file, slug, manifest id, category, tags and processing media; errors come first', () => {
    const rows = preflight(
      facts({
        file: {
          state: 'failed',
          flags: [
            { code: 'zip_slip', severity: 'error', path: '../x', detail: null },
            { code: 'zip_slip', severity: 'error', path: '../y', detail: null },
            { code: 'extension_flagged', severity: 'warning', path: 'a.exe', detail: null },
          ],
        },
        slugTaken: true,
        manifestIdTaken: true,
        categoryValid: false,
        unknownTags: ['nope'],
        mediaPending: 1,
        listing: { ...listing, license: null },
      }),
    );
    expect(preflightPasses(rows)).toBe(false);
    const errors = rows.filter((r) => r.severity === 'error').map((r) => r.code);
    expect(errors).toEqual([
      'file_failed',
      'zip_slip',
      'manifest_id_taken',
      'slug_taken',
      'category_invalid',
      'tags_unknown',
      'media_processing',
    ]);
    expect(rows.findIndex((r) => r.severity !== 'error')).toBe(errors.length);
    expect(rows.map((r) => r.code)).toContain('license_missing');
  });

  it('warns without blocking: flagged file, raw HTML, short description, missing links', () => {
    const rows = preflight(
      facts({
        file: { state: 'flagged', flags: [] },
        descriptionRawHtml: true,
        listing: {
          ...listing,
          descriptionMd: 'short',
          sourceUrl: null,
          platform: null,
          galleryCount: 0,
          hasThumbnail: false,
        },
      }),
    );
    expect(preflightPasses(rows)).toBe(true);
    expect(rows.filter((r) => r.severity === 'warning').map((r) => r.code)).toEqual([
      'file_flagged',
      'description_short',
      'description_raw_html',
      'thumbnail_missing',
      'gallery_below_3',
      'source_missing',
      'platform_missing',
    ]);
  });

  it('checks only the file, changelog and dependencies of a new version', () => {
    const rows = preflight(
      facts({ mode: 'version', changelogMd: '', unknownDependencies: ['Missing'], dependencyCycles: ['A→B→A'] }),
    );
    expect(rows.map((r) => r.code)).toEqual(['changelog_missing', 'dependency_unknown', 'dependency_cycle', 'file_ok']);
    expect(preflight(facts({ mode: 'version', changelogMd: '- fixed' })).map((r) => r.code)).toContain('changelog_ok');
    // Editing never re-checks the slug.
    expect(preflight(facts({ mode: 'edit', slugTaken: true })).map((r) => r.code)).not.toContain('slug_taken');
  });
});

describe('listing helpers', () => {
  it('proposes slugs with folded accents and no apostrophes', () => {
    expect(slugify("Axel's Mod Menu")).toBe('axels-mod-menu');
    expect(slugify('Écran — Über Kelvin!!')).toBe('ecran-uber-kelvin');
    expect(slugify('  --a--  ')).toBe('');
    expect(slugify('x'.repeat(100))).toHaveLength(80);
    expect(slugify(`${'a'.repeat(79)}-b`)).toBe('a'.repeat(79));
  });

  it('keeps the legacy columns coherent with the v2 fields', () => {
    expect(legacyModSide('Client')).toBe('client');
    expect(legacyModSide('Server')).toBe('server');
    expect(legacyModSide('Universal')).toBe('both');
    expect(legacyModSide(null)).toBeNull();
    expect(legacyMultiplayer('all_players')).toEqual({ isMultiplayerCompatible: true, requiresAllPlayers: true });
    expect(legacyMultiplayer('host_only')).toEqual({ isMultiplayerCompatible: true, requiresAllPlayers: false });
    expect(legacyMultiplayer('singleplayer_only')).toEqual({
      isMultiplayerCompatible: false,
      requiresAllPlayers: false,
    });
    expect(legacyMultiplayer(undefined)).toEqual({ isMultiplayerCompatible: false, requiresAllPlayers: false });
    expect(legacyBuildColumns(null)).toEqual({});
    expect(legacyBuildColumns({ guid: 'g', buildShareVersion: '1.2', numberOfElements: 40 })).toEqual({
      buildGuid: 'g',
      buildShareVersion: '1.2',
      numberOfElements: 40,
    });
  });
});

describe('SSRF guard of remote images (PLAN §9.1)', () => {
  it('accepts public unicast addresses only', () => {
    for (const ok of ['8.8.8.8', '1.1.1.1', '2606:4700:4700::1111']) expect(isPublicAddress(ok), ok).toBe(true);
    for (const bad of [
      '127.0.0.1',
      '10.1.2.3',
      '172.16.0.1',
      '192.168.1.1',
      '169.254.169.254',
      '100.64.0.1',
      '0.0.0.0',
      '224.0.0.1',
      '203.0.113.9',
      '::1',
      '::',
      'fc00::1',
      'fe80::1',
      '::ffff:127.0.0.1',
      '::ffff:7f00:1',
      '64:ff9b::a00:1',
      '2002:c0a8:0101::1',
      'not-an-ip',
    ]) {
      expect(isPublicAddress(bad), bad).toBe(false);
    }
  });

  it('accepts only https on the default port without credentials', () => {
    expect(assertFetchableUrl('https://i.imgur.com/a.png').hostname).toBe('i.imgur.com');
    const reasons = (url: string) => {
      try {
        assertFetchableUrl(url);
        return 'ok';
      } catch (error) {
        return (error as SafeFetchError).reason;
      }
    };
    expect(reasons('http://i.imgur.com/a.png')).toBe('scheme');
    expect(reasons('https://i.imgur.com:8443/a.png')).toBe('port');
    expect(reasons('https://user:pw@i.imgur.com/a.png')).toBe('credentials');
    expect(reasons('file:///etc/passwd')).toBe('scheme');
    expect(reasons('not a url')).toBe('invalid_url');
  });
});
