/**
 * RedLoader `manifest.json` and BuildShare blueprint schemas, plus the automatic checks of a
 * published file (PLAN §7.4 "Checks automáticos", T0-04, T0-24). Shared by the upload wizard
 * (fflate in the browser, WP-74) and the inspection job (yauzl in the worker, WP-40).
 *
 * RedLoader reads manifests with Newtonsoft.Json, which matches property names case-insensitively
 * (`SonsSdk/ManifestData.cs`: Id, Name, Author, Version, Description, GameVersion, LoaderVersion,
 * Platform, Dependencies, LogColor, Url, Priority, Type). The parser does the same.
 */
import { z } from 'zod';
import { HexColor, Platform, SemverString } from './common.ts';
import { dto } from './dto.ts';

// -----------------------------------------------------------------------------------------------
// Issues
// -----------------------------------------------------------------------------------------------

export const MANIFEST_ISSUE_CODES = [
  'invalid_json',
  'not_an_object',
  'missing_id',
  'invalid_id',
  'missing_version',
  'invalid_version',
  'invalid_type',
  'invalid_platform',
  'invalid_dependencies',
  'invalid_log_color',
  'invalid_url',
  'invalid_priority',
  'invalid_field',
  'missing_guid',
  'missing_name',
  'missing_description',
  'invalid_number_of_elements',
  'invalid_data',
  'invalid_thumbnail',
] as const;
export const ManifestIssueCode = z.enum(MANIFEST_ISSUE_CODES);
export type ManifestIssueCode = z.infer<typeof ManifestIssueCode>;

export const ManifestIssueDTO = dto(
  'ManifestIssueDTO',
  z.object({
    code: ManifestIssueCode,
    severity: z.enum(['error', 'warning']),
    field: z.string().describe('Canonical field name (`version`, `Data.Version`…); empty for the whole file'),
    message: z.string(),
  }),
  {
    description: 'A problem found while reading a manifest or blueprint.',
    examples: [
      { code: 'invalid_version', severity: 'error', field: 'version', message: 'expected a semantic version (x.y.z)' },
    ],
  },
);
export type ManifestIssue = z.infer<typeof ManifestIssueDTO>;

// -----------------------------------------------------------------------------------------------
// Case-insensitive key normalisation (Newtonsoft semantics)
// -----------------------------------------------------------------------------------------------

function normaliseKeys(value: unknown, canonical: readonly string[]): unknown {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return value;
  const byLower = new Map(canonical.map((key) => [key.toLowerCase(), key]));
  const out: Record<string, unknown> = {};
  for (const [key, v] of Object.entries(value)) {
    const target = byLower.get(key.toLowerCase());
    // First occurrence wins (Newtonsoft keeps the last one, but duplicates only differ in case
    // in broken files; we report them instead of guessing).
    if (target && !(target in out)) out[target] = v;
  }
  return out;
}

function stripBom(text: string): string {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

function parseJsonText(text: string): { ok: true; value: unknown } | { ok: false; message: string } {
  try {
    return { ok: true, value: JSON.parse(stripBom(text)) };
  } catch (error) {
    return { ok: false, message: error instanceof Error ? error.message : 'invalid JSON' };
  }
}

// -----------------------------------------------------------------------------------------------
// RedLoader manifest
// -----------------------------------------------------------------------------------------------

export const MANIFEST_FIELDS = [
  'id',
  'name',
  'author',
  'version',
  'description',
  'gameVersion',
  'loaderVersion',
  'platform',
  'dependencies',
  'logColor',
  'url',
  'priority',
  'type',
] as const;

export const MANIFEST_TYPES = ['Mod', 'Library'] as const;

/** Mod id: what RedLoader uses as folder name and what `Mod.mod_id` stores. */
export const ManifestModId = z
  .string()
  .trim()
  .min(1)
  .max(128)
  .regex(/^[A-Za-z0-9._-]+$/, 'letters, digits, ".", "_" and "-" only');

const LogColorInput = z
  .string()
  .trim()
  .transform((value) => (value.startsWith('#') ? value : `#${value}`))
  .pipe(z.string().regex(/^#[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?$/, 'expected #RRGGBB'))
  .transform((value) => value.slice(0, 7).toUpperCase());

/** Normalised manifest (canonical camelCase keys, `logColor` as `#RRGGBB`). */
export const RedLoaderManifest = z.object({
  id: ManifestModId,
  name: z.string().trim().max(120).optional(),
  author: z.string().trim().max(120).optional(),
  version: SemverString,
  description: z.string().max(4000).optional(),
  gameVersion: z.string().trim().max(40).optional(),
  loaderVersion: z.string().trim().max(40).optional(),
  platform: Platform.optional(),
  dependencies: z
    .union([z.array(z.string()), z.string().transform((csv) => csv.split(','))])
    .transform((list) => [...new Set(list.map((dep) => dep.trim()).filter((dep) => dep.length > 0))])
    .pipe(z.array(ManifestModId).max(50))
    .default([]),
  logColor: LogColorInput.optional(),
  url: z.string().trim().max(2048).optional(),
  priority: z.number().int().min(-10_000).max(10_000).optional(),
  type: z.enum(MANIFEST_TYPES),
});
export type RedLoaderManifest = z.output<typeof RedLoaderManifest>;

/** Manifest as returned by the API (after normalisation). */
export const RedLoaderManifestDTO = dto(
  'RedLoaderManifestDTO',
  z.object({
    id: z.string(),
    name: z.string().optional(),
    author: z.string().optional(),
    version: z.string(),
    description: z.string().optional(),
    gameVersion: z.string().optional(),
    loaderVersion: z.string().optional(),
    platform: Platform.optional(),
    dependencies: z.array(z.string()),
    logColor: HexColor.optional(),
    url: z.string().optional(),
    priority: z.number().int().optional(),
    type: z.enum(MANIFEST_TYPES),
  }),
  {
    description: 'RedLoader manifest.json (normalised).',
    examples: [
      {
        id: 'AxelModMenu',
        name: "Axel's Mod Menu",
        author: 'ImAxel',
        version: '1.3.8',
        description: 'In-game mod menu',
        gameVersion: '1.0.4',
        loaderVersion: '0.8.6',
        platform: 'Client',
        dependencies: ['SonsAxLib'],
        logColor: '#FF9900',
        url: "https://sotf-mods.com/mods/imaxel/axel's-mod-menu",
        priority: 0,
        type: 'Mod',
      },
    ],
  },
);

const MANIFEST_FIELD_CODES: Partial<Record<string, ManifestIssueCode>> = {
  id: 'invalid_id',
  version: 'invalid_version',
  type: 'invalid_type',
  platform: 'invalid_platform',
  dependencies: 'invalid_dependencies',
  logColor: 'invalid_log_color',
  url: 'invalid_url',
  priority: 'invalid_priority',
};

/** Optional fields whose invalid value is dropped with a warning instead of failing. */
const MANIFEST_SOFT_FIELDS = new Set([
  'name',
  'author',
  'description',
  'gameVersion',
  'loaderVersion',
  'logColor',
  'url',
  'priority',
]);

export type ParseResult<T> = { ok: true; value: T; warnings: ManifestIssue[] } | { ok: false; issues: ManifestIssue[] };

/**
 * Parses a RedLoader manifest (already decoded JSON). Missing optional metadata only produces
 * warnings; a missing or invalid `id`, `version` or `type` is an error.
 */
export function parseRedLoaderManifest(input: unknown): ParseResult<RedLoaderManifest> {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    return {
      ok: false,
      issues: [{ code: 'not_an_object', severity: 'error', field: '', message: 'manifest.json must be a JSON object' }],
    };
  }
  const record = normaliseKeys(input, MANIFEST_FIELDS) as Record<string, unknown>;
  const warnings: ManifestIssue[] = [];
  const errors: ManifestIssue[] = [];

  // First pass: drop invalid soft fields with a warning.
  for (const field of MANIFEST_SOFT_FIELDS) {
    if (record[field] === undefined || record[field] === null) {
      delete record[field];
      continue;
    }
    const shape = RedLoaderManifest.shape[field as keyof typeof RedLoaderManifest.shape];
    const result = shape.safeParse(record[field]);
    if (!result.success) {
      warnings.push({
        code: MANIFEST_FIELD_CODES[field] ?? 'invalid_field',
        severity: 'warning',
        field,
        message: result.error.issues[0]?.message ?? 'invalid value',
      });
      delete record[field];
    }
  }
  if (record.id === undefined)
    errors.push({ code: 'missing_id', severity: 'error', field: 'id', message: 'manifest.json must contain an id' });
  if (record.version === undefined) {
    errors.push({
      code: 'missing_version',
      severity: 'error',
      field: 'version',
      message: 'manifest.json must contain a version',
    });
  }
  if (record.dependencies === null) delete record.dependencies;

  const parsed = RedLoaderManifest.safeParse(record);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0] ?? '');
      if (errors.some((e) => e.field === field)) continue;
      errors.push({
        code: MANIFEST_FIELD_CODES[field] ?? 'invalid_field',
        severity: 'error',
        field,
        message: issue.message,
      });
    }
  }
  if (errors.length > 0 || !parsed.success) return { ok: false, issues: [...errors, ...warnings] };
  for (const field of ['name', 'author', 'description', 'platform'] as const) {
    if (parsed.data[field] === undefined) {
      warnings.push({ code: 'invalid_field', severity: 'warning', field, message: `${field} is missing` });
    }
  }
  return { ok: true, value: parsed.data, warnings };
}

/** Same as `parseRedLoaderManifest` from the raw file text (handles a UTF-8 BOM). */
export function parseRedLoaderManifestText(text: string): ParseResult<RedLoaderManifest> {
  const json = parseJsonText(text);
  if (!json.ok)
    return { ok: false, issues: [{ code: 'invalid_json', severity: 'error', field: '', message: json.message }] };
  return parseRedLoaderManifest(json.value);
}

// -----------------------------------------------------------------------------------------------
// BuildShare blueprint (`.json`)
// -----------------------------------------------------------------------------------------------

export const BLUEPRINT_FIELDS = [
  'Guid',
  'Name',
  'Author',
  'Description',
  'Position',
  'Size',
  'NumberOfElements',
  'Data',
  'Thumbnail',
] as const;

const StringLike = z.union([z.string(), z.number()]).transform(String);

const BlueprintData = z
  .union([
    z.string().transform((text, ctx) => {
      const json = parseJsonText(text);
      if (!json.ok) {
        ctx.addIssue({ code: 'custom', message: `Data is not valid JSON: ${json.message}` });
        return z.NEVER;
      }
      return json.value;
    }),
    z.record(z.string(), z.unknown()),
  ])
  .pipe(
    z.preprocess(
      (value) => normaliseKeys(value, ['Version', 'Structures']),
      z.object({ Version: StringLike.pipe(z.string().min(1).max(40)), Structures: z.array(z.unknown()).optional() }),
    ),
  );

export const BuildShareBlueprint = z.object({
  Guid: StringLike.pipe(z.string().trim().min(1).max(128)),
  Name: z.string().trim().min(1).max(120),
  Author: z.string().trim().max(120).optional(),
  Description: z.string().max(4000),
  NumberOfElements: z.number().int().nonnegative(),
  Data: BlueprintData,
  Thumbnail: z.string().max(12_000_000).optional().describe('Base64 PNG (≈ 500 KB)'),
  Position: z.unknown().optional(),
  Size: z.unknown().optional(),
});

/** What the platform keeps from a blueprint (`ModVersion.buildMeta` + card data). */
export interface BlueprintSummary {
  guid: string;
  name: string;
  description: string;
  author: string | null;
  numberOfElements: number;
  buildShareVersion: string;
  structuresCount: number | null;
  sizeClass: BuildSizeClass;
  /** Base64 PNG without the data URL prefix, or null. */
  thumbnailBase64: string | null;
}

export const BUILD_SIZE_CLASSES = ['S', 'M', 'L', 'XL'] as const;
export type BuildSizeClass = (typeof BUILD_SIZE_CLASSES)[number];

/** Upper bounds (exclusive) of the S, M and L classes by `numberOfElements`; XL above. */
export const BUILD_SIZE_THRESHOLDS = { S: 500, M: 2_000, L: 8_000 } as const;

export function buildSizeClass(numberOfElements: number): BuildSizeClass {
  if (numberOfElements < BUILD_SIZE_THRESHOLDS.S) return 'S';
  if (numberOfElements < BUILD_SIZE_THRESHOLDS.M) return 'M';
  if (numberOfElements < BUILD_SIZE_THRESHOLDS.L) return 'L';
  return 'XL';
}

const BLUEPRINT_FIELD_CODES: Partial<Record<string, ManifestIssueCode>> = {
  Guid: 'missing_guid',
  Name: 'missing_name',
  Description: 'missing_description',
  NumberOfElements: 'invalid_number_of_elements',
  Data: 'invalid_data',
  Thumbnail: 'invalid_thumbnail',
};

const BASE64 = /^[A-Za-z0-9+/]+={0,2}$/;

/** Validates a BuildShare blueprint (`Guid`, `Name`, `Description`, `Data.Version`, `NumberOfElements`). */
export function parseBuildShareBlueprint(input: unknown): ParseResult<BlueprintSummary> {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    return {
      ok: false,
      issues: [{ code: 'not_an_object', severity: 'error', field: '', message: 'the blueprint must be a JSON object' }],
    };
  }
  const record = normaliseKeys(input, BLUEPRINT_FIELDS);
  const parsed = BuildShareBlueprint.safeParse(record);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue): ManifestIssue => {
      const field = String(issue.path[0] ?? '');
      const sub = issue.path.slice(1).map(String);
      return {
        code: BLUEPRINT_FIELD_CODES[field] ?? 'invalid_field',
        severity: 'error',
        field: [field, ...sub].filter(Boolean).join('.'),
        message: issue.message,
      };
    });
    return { ok: false, issues };
  }
  const bp = parsed.data;
  const warnings: ManifestIssue[] = [];
  let thumbnail: string | null = null;
  if (bp.Thumbnail) {
    const raw = bp.Thumbnail.replace(/^data:image\/png;base64,/, '').replace(/\s+/g, '');
    if (BASE64.test(raw)) thumbnail = raw;
    else
      warnings.push({
        code: 'invalid_thumbnail',
        severity: 'warning',
        field: 'Thumbnail',
        message: 'Thumbnail is not base64',
      });
  }
  return {
    ok: true,
    warnings,
    value: {
      guid: bp.Guid,
      name: bp.Name,
      description: bp.Description,
      author: bp.Author && bp.Author.length > 0 ? bp.Author : null,
      numberOfElements: bp.NumberOfElements,
      buildShareVersion: bp.Data.Version,
      structuresCount: bp.Data.Structures ? bp.Data.Structures.length : null,
      sizeClass: buildSizeClass(bp.NumberOfElements),
      thumbnailBase64: thumbnail,
    },
  };
}

/** Same as `parseBuildShareBlueprint` from the raw file text. */
export function parseBuildShareBlueprintText(text: string): ParseResult<BlueprintSummary> {
  const json = parseJsonText(text);
  if (!json.ok)
    return { ok: false, issues: [{ code: 'invalid_json', severity: 'error', field: '', message: json.message }] };
  return parseBuildShareBlueprint(json.value);
}

export const BuildMetaDTO = dto(
  'BuildMetaDTO',
  z.object({
    guid: z.string(),
    buildshareVersion: z.string(),
    elements: z.number().int().nonnegative(),
    structures: z.number().int().nonnegative().nullable(),
    blueprintAuthor: z.string().nullable(),
    sizeClass: z.enum(BUILD_SIZE_CLASSES),
  }),
  {
    description: 'Blueprint metadata stored per build version (`ModVersion.buildMeta`).',
    examples: [
      {
        guid: 'e215ede2e4d742398c72aaca62496c10',
        buildshareVersion: '0.0.16',
        elements: 4125,
        structures: 312,
        blueprintAuthor: 'Natka',
        sizeClass: 'L',
      },
    ],
  },
);
export type BuildMetaDTO = z.infer<typeof BuildMetaDTO>;

// -----------------------------------------------------------------------------------------------
// Automatic checks of a published file (PLAN §7.4)
// -----------------------------------------------------------------------------------------------

const MB = 1024 * 1024;

export const FILE_CHECKS = {
  /** Compression ratio above which a zip is treated as a bomb. */
  maxCompressionRatio: 100,
  maxEntries: 5_000,
  maxModBytes: 200 * MB,
  maxModBytesVerified: 500 * MB,
  maxBuildBytes: 20 * MB,
  /** Extensions allowed inside a mod zip. */
  allowedExtensions: [
    'dll',
    'json',
    'png',
    'jpg',
    'jpeg',
    'bundle',
    'assets',
    'txt',
    'md',
    'cfg',
    'ini',
    'ogg',
    'wav',
    'mp3',
    'xml',
  ],
  /** Extensions that are flagged for human review. */
  flaggedExtensions: ['exe', 'bat', 'cmd', 'ps1', 'vbs', 'scr', 'msi', 'lnk'],
} as const;

export const INSPECTION_FLAG_CODES = [
  'zip_invalid',
  'zip_bomb_ratio',
  'zip_too_many_entries',
  'zip_slip',
  'absolute_path',
  'manifest_missing',
  'manifest_invalid',
  'manifest_id_mismatch',
  'version_not_semver',
  'version_not_greater',
  'extension_not_allowed',
  'extension_flagged',
  'file_too_large',
  'blueprint_invalid',
  'scan_detections',
] as const;
export const InspectionFlagCode = z.enum(INSPECTION_FLAG_CODES);
export type InspectionFlagCode = z.infer<typeof InspectionFlagCode>;

export const InspectionFlagDTO = dto(
  'InspectionFlagDTO',
  z.object({
    code: InspectionFlagCode,
    severity: z.enum(['error', 'warning']).describe('`error` blocks publication; `warning` sends it to human review'),
    path: z.string().nullable().describe('Zip entry concerned, if any'),
    detail: z.string().nullable(),
  }),
  {
    description: 'Result of one automatic check.',
    examples: [
      {
        code: 'extension_flagged',
        severity: 'warning',
        path: 'AxelModMenu/installer.bat',
        detail: '.bat files need review',
      },
    ],
  },
);
export type InspectionFlagDTO = z.infer<typeof InspectionFlagDTO>;

/** Classifies a zip entry by extension. Directories (trailing `/`) are `allowed`. */
export function classifyZipEntry(path: string): 'allowed' | 'flagged' | 'not_allowed' {
  if (path.endsWith('/')) return 'allowed';
  const name = path.slice(path.lastIndexOf('/') + 1);
  const dot = name.lastIndexOf('.');
  const ext = dot > 0 ? name.slice(dot + 1).toLowerCase() : '';
  if ((FILE_CHECKS.flaggedExtensions as readonly string[]).includes(ext)) return 'flagged';
  if ((FILE_CHECKS.allowedExtensions as readonly string[]).includes(ext)) return 'allowed';
  return 'not_allowed';
}

/** True for entry names that escape the extraction directory (zip slip) or are absolute. */
export function isUnsafeZipPath(path: string): boolean {
  const normalised = path.replaceAll('\\', '/');
  if (normalised.startsWith('/') || /^[A-Za-z]:/.test(normalised)) return true;
  return normalised.split('/').some((segment) => segment === '..');
}
