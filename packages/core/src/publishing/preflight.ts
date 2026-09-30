/**
 * Review step of the publishing wizard (PLAN §7.5 step 6): the preflight rows ("✔ or ⚠ with a
 * link to each field") and the listing quality score (% of: gallery ≥ 3, description ≥ 300,
 * source code link, platform, tags and licence). Pure functions: the caller gathers the facts.
 *
 * A row's `code` is the suffix of the i18n key `studio_preflight_<code>`; `error` rows block the
 * submission, `warning` rows do not.
 */
import type { InspectionFlagDTO } from '@sotf/contracts/manifest';
import type { PreflightItemDTO } from '@sotf/contracts/studio';

export const QUALITY_RULES = { galleryMin: 3, descriptionMin: 300 } as const;

export type PublicationKind = 'mod' | 'build';

export interface ListingFacts {
  kind: PublicationKind;
  name: string | null;
  shortDescription: string | null;
  descriptionMd: string | null;
  categorySlug: string | null;
  tagCount: number;
  license: string | null;
  sourceUrl: string | null;
  platform: string | null;
  galleryCount: number;
  hasThumbnail: boolean;
}

/** Listing quality in % (builds have no source code or platform: those count as met). */
export function qualityScore(facts: ListingFacts): number {
  const build = facts.kind === 'build';
  const checks = [
    facts.galleryCount >= QUALITY_RULES.galleryMin,
    (facts.descriptionMd?.trim().length ?? 0) >= QUALITY_RULES.descriptionMin,
    build || Boolean(facts.sourceUrl),
    build || Boolean(facts.platform),
    facts.tagCount > 0,
    Boolean(facts.license),
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

export type FileState = 'none' | 'missing' | 'pending' | 'passed' | 'flagged' | 'failed' | 'expired';

export interface PreflightFacts {
  /** `version`: a new version of an existing mod (only the file, the changelog and dependencies). */
  mode: 'new' | 'version' | 'edit';
  listing: ListingFacts;
  file: { state: FileState; flags: readonly InspectionFlagDTO[] };
  slugValid: boolean;
  slugTaken: boolean;
  manifestIdTaken: boolean;
  categoryValid: boolean;
  unknownTags: readonly string[];
  unknownDependencies: readonly string[];
  dependencyCycles: readonly string[];
  mediaPending: number;
  mediaInvalid: number;
  descriptionRawHtml: boolean;
  changelogMd: string | null;
}

function item(field: string, severity: PreflightItemDTO['severity'], code: string): PreflightItemDTO {
  return { field, severity, code };
}

const FILE_STATE_ITEMS: Record<FileState, PreflightItemDTO | null> = {
  none: null,
  missing: item('file', 'error', 'file_missing'),
  pending: item('file', 'error', 'file_inspecting'),
  failed: item('file', 'error', 'file_failed'),
  expired: item('file', 'error', 'file_expired'),
  flagged: item('file', 'warning', 'file_flagged'),
  passed: item('file', 'ok', 'file_ok'),
};

/** Preflight rows, errors first. */
export function preflight(facts: PreflightFacts): PreflightItemDTO[] {
  const rows: PreflightItemDTO[] = [];
  const l = facts.listing;
  const listingMode = facts.mode !== 'version';

  const fileRow = FILE_STATE_ITEMS[facts.file.state];
  if (fileRow) rows.push(fileRow);
  const seen = new Set<string>();
  for (const f of facts.file.flags) {
    if (f.severity !== 'error' || seen.has(f.code)) continue;
    seen.add(f.code);
    rows.push(item('file', 'error', f.code));
  }
  if (facts.manifestIdTaken) rows.push(item('file', 'error', 'manifest_id_taken'));

  if (listingMode) {
    rows.push(
      l.name && l.name.trim().length >= 2 ? item('name', 'ok', 'name_ok') : item('name', 'error', 'name_missing'),
    );
    if (facts.mode === 'new') {
      if (!facts.slugValid) rows.push(item('slug', 'error', 'slug_invalid'));
      else if (facts.slugTaken) rows.push(item('slug', 'error', 'slug_taken'));
      else rows.push(item('slug', 'ok', 'slug_ok'));
    }
    rows.push(
      l.shortDescription?.trim()
        ? item('shortDescription', 'ok', 'short_description_ok')
        : item('shortDescription', 'error', 'short_description_missing'),
    );
    if (!l.categorySlug) rows.push(item('categorySlug', 'error', 'category_missing'));
    else if (!facts.categoryValid) rows.push(item('categorySlug', 'error', 'category_invalid'));
    else rows.push(item('categorySlug', 'ok', 'category_ok'));
    if (facts.unknownTags.length > 0) rows.push(item('tagSlugs', 'error', 'tags_unknown'));
    else rows.push(l.tagCount > 0 ? item('tagSlugs', 'ok', 'tags_ok') : item('tagSlugs', 'warning', 'tags_missing'));
    rows.push(
      (l.descriptionMd?.trim().length ?? 0) >= QUALITY_RULES.descriptionMin
        ? item('descriptionMd', 'ok', 'description_ok')
        : item('descriptionMd', 'warning', 'description_short'),
    );
    if (facts.descriptionRawHtml) rows.push(item('descriptionMd', 'warning', 'description_raw_html'));
    rows.push(
      l.hasThumbnail ? item('thumbnail', 'ok', 'thumbnail_ok') : item('thumbnail', 'warning', 'thumbnail_missing'),
    );
    rows.push(
      l.galleryCount >= QUALITY_RULES.galleryMin
        ? item('gallery', 'ok', 'gallery_ok')
        : item('gallery', 'warning', 'gallery_below_3'),
    );
    if (facts.mediaPending > 0) rows.push(item('gallery', 'error', 'media_processing'));
    if (facts.mediaInvalid > 0) rows.push(item('gallery', 'error', 'media_invalid'));
    if (l.kind === 'mod') {
      rows.push(l.sourceUrl ? item('sourceUrl', 'ok', 'source_ok') : item('sourceUrl', 'warning', 'source_missing'));
      rows.push(l.platform ? item('platform', 'ok', 'platform_ok') : item('platform', 'warning', 'platform_missing'));
    }
    rows.push(l.license ? item('license', 'ok', 'license_ok') : item('license', 'warning', 'license_missing'));
  } else {
    rows.push(
      facts.changelogMd?.trim()
        ? item('changelogMd', 'ok', 'changelog_ok')
        : item('changelogMd', 'warning', 'changelog_missing'),
    );
  }
  if (facts.unknownDependencies.length > 0) rows.push(item('dependencies', 'warning', 'dependency_unknown'));
  if (facts.dependencyCycles.length > 0) rows.push(item('dependencies', 'warning', 'dependency_cycle'));

  const order = { error: 0, warning: 1, ok: 2 } as const;
  return rows
    .map((row, i) => ({ row, i }))
    .sort((a, b) => order[a.row.severity] - order[b.row.severity] || a.i - b.i)
    .map((x) => x.row);
}

/** True when no row blocks the submission. */
export function preflightPasses(rows: readonly PreflightItemDTO[]): boolean {
  return rows.every((row) => row.severity !== 'error');
}
