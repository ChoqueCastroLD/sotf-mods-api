/**
 * Versions (PLAN §5.2 "Catálogo", §5.4 `VersionDTO`, T0-04). Read endpoints by WP-33, writes live
 * in `studio.ts` (WP-40).
 *
 * Versions are ordered by semver (major, minor, patch, pre-release rules) and then `createdAt`;
 * builds (uuid v7 versions) by date. BuildShare shows 1.0.10 > 1.0.2.
 */
import { z } from 'zod';
import { cache } from './cache.ts';
import {
  Count,
  DependencyKind,
  EntityId,
  GameBuildRefDTO,
  IdParam,
  IsoDateTime,
  ManifestId,
  ModRefDTO,
  Platform,
  Sha256Hex,
  SitePath,
  VersionChannel,
  VersionStatus,
  VersionString,
} from './common.ts';
import { CompatAggregateDTO } from './compat.ts';
import { dto, exampleOf, examplesOf } from './dto.ts';
import { API_V2_PREFIX, defineEndpoint } from './endpoint.ts';

export const SCAN_VERDICTS = ['pending', 'clean', 'suspicious', 'malicious', 'unknown', 'false_positive'] as const;
export const ScanVerdict = z.enum(SCAN_VERDICTS);
export type ScanVerdict = z.infer<typeof ScanVerdict>;

export const ScanSummaryDTO = dto(
  'ScanSummaryDTO',
  z.object({
    verdict: ScanVerdict,
    engine: z.string(),
    positives: Count.nullable(),
    total: Count.nullable(),
    permalink: z.string().nullable(),
    scannedAt: IsoDateTime.nullable(),
  }),
  {
    description: 'Public security report of a version (VirusTotal by SHA-256).',
    examples: [
      {
        verdict: 'clean',
        engine: 'virustotal',
        positives: 0,
        total: 71,
        permalink:
          'https://www.virustotal.com/gui/file/9f2c0a4f1f0d6b1e2c3a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90',
        scannedAt: '2026-09-26T21:40:00.000Z',
      },
    ],
  },
);
export type ScanSummaryDTO = z.infer<typeof ScanSummaryDTO>;

export const DEPENDENCY_STATES = ['ok', 'missing', 'unlisted', 'archived', 'removed'] as const;
export const DependencyState = z.enum(DEPENDENCY_STATES);

export const DependencyDTO = dto(
  'DependencyDTO',
  z.object({
    manifestId: ManifestId.describe('Id declared in the manifest dependencies'),
    kind: DependencyKind,
    versionRange: z.string().nullable(),
    state: DependencyState.describe('`missing` = not available on the site'),
    mod: ModRefDTO.nullable(),
  }),
  {
    description: 'A dependency resolved against `manifestId`.',
    examples: [
      {
        manifestId: 'SonsAxLib',
        kind: 'required',
        versionRange: null,
        state: 'ok',
        mod: {
          id: 31,
          kind: 'library',
          manifestId: 'SonsAxLib',
          name: 'SonsAxLib',
          slug: 'sonsaxlib',
          userHandle: 'imaxel',
          canonicalPath: '/mods/imaxel/sonsaxlib',
          status: 'published',
          nsfw: false,
          thumbnailUrl: null,
        },
      },
      { manifestId: 'ModAPI', kind: 'optional', versionRange: '>=1.2.0', state: 'missing', mod: null },
    ],
  },
);
export type DependencyDTO = z.infer<typeof DependencyDTO>;

export const VersionDTO = dto(
  'VersionDTO',
  z.object({
    id: EntityId,
    modId: EntityId,
    version: VersionString,
    isLatest: z.boolean(),
    channel: VersionChannel,
    status: VersionStatus,
    statusReason: z.string().nullable().describe('Yank reason or rejection reason'),
    changelogHtml: z.string(),
    publishedAt: IsoDateTime,
    fileName: z.string().nullable(),
    fileSize: Count.nullable().describe('Bytes (null until the R2 pass measured it)'),
    sha256: Sha256Hex.nullable(),
    downloadPath: SitePath.describe('`/mods/:user/:slug/download/:version` (302 to R2)'),
    gameVersionDeclared: z.string().nullable(),
    loaderVersionDeclared: z.string().nullable(),
    platform: Platform.nullable(),
    testedGameBuilds: z.array(GameBuildRefDTO),
    dependencies: z.array(DependencyDTO),
    scan: ScanSummaryDTO.nullable(),
    compat: z.array(CompatAggregateDTO),
    downloadsCount: Count,
  }),
  {
    description: 'One published version of a mod or build.',
    examples: [
      {
        id: 412,
        modId: 20,
        version: '1.3.8',
        isLatest: true,
        channel: 'release',
        status: 'active',
        statusReason: null,
        changelogHtml: '<p>Fixed noclip causing issues with riding ziplines and character physics override</p>',
        publishedAt: '2026-09-26T21:33:31.396Z',
        fileName: "Axel's Mod Menu 1.3.8.zip",
        fileSize: 1_254_310,
        sha256: '9f2c0a4f1f0d6b1e2c3a4b5c6d7e8f90a1b2c3d4e5f60718293a4b5c6d7e8f90',
        downloadPath: "/mods/imaxel/axel's-mod-menu/download/1.3.8",
        gameVersionDeclared: '1.0.4',
        loaderVersionDeclared: '0.8.6',
        platform: 'Client',
        testedGameBuilds: [{ id: 7, label: '1.0.4', isCurrent: true, isBreaking: true }],
        dependencies: [...examplesOf(DependencyDTO).slice(0, 1)],
        scan: exampleOf(ScanSummaryDTO),
        compat: [...examplesOf(CompatAggregateDTO)],
        downloadsCount: 5_120,
      },
    ],
  },
);
export type VersionDTO = z.infer<typeof VersionDTO>;

export const VersionListDTO = dto('VersionListDTO', z.object({ items: z.array(VersionDTO) }), {
  description: 'Every version of a mod (semver order, newest first; builds by date).',
  examples: [{ items: [exampleOf(VersionDTO)] }],
});

/** `:versionIdOrString`: numeric id or the version string (`1.3.8`, `latest`). */
export const VersionSelector = z.string().min(1).max(64);

const base = `${API_V2_PREFIX}/mods/:id/versions`;

export const versionsEndpoints = {
  list: defineEndpoint({
    id: 'versions.list',
    owner: 'WP-33',
    method: 'GET',
    path: base,
    summary: 'Versions of a mod (semver order)',
    description: 'Includes file size, SHA-256, security scan, compatibility and downloads per version.',
    auth: 'public',
    params: z.object({ id: IdParam }),
    response: VersionListDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
  get: defineEndpoint({
    id: 'versions.get',
    owner: 'WP-33',
    method: 'GET',
    path: `${base}/:version`,
    summary: 'One version by id, version string or `latest`',
    auth: 'public',
    params: z.object({ id: IdParam, version: VersionSelector }),
    response: VersionDTO,
    errors: ['NOT_FOUND', 'GONE'],
    cache: cache.publicApi(['mod:{id}']),
    rateLimit: 'anonymousRead',
  }),
} as const;
