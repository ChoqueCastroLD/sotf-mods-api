/**
 * The listing ("ficha") of a mod, shared by the draft submission and `PATCH /studio/mods/:id`
 * (PLAN §5.2, §7.5 step 2): validated input → `"Mod"` columns (v2 and their legacy mirrors), tags
 * (`"_ModToTag"`) and the facts the preflight and the quality score need.
 */
import type { NewMod } from '@sotf/db';
import { type Executor, modToTag } from '@sotf/db';
import { eq, sql } from 'drizzle-orm';
import { errors } from '../kernel/errors.ts';
import { legacyModSide, legacyMultiplayer, type MultiplayerRoleValue, type PlatformValue } from './legacy.ts';
import type { ListingFacts, PublicationKind } from './preflight.ts';
import { findCategory, findTags } from './queries.ts';
import { hasRawHtml, legacyText, renderDescription } from './text.ts';

/** Editable listing fields (all optional: a PATCH only sends what changed). */
export interface ListingInput {
  name?: string | undefined;
  shortDescription?: string | undefined;
  descriptionMd?: string | undefined;
  categorySlug?: string | undefined;
  tagSlugs?: readonly string[] | undefined;
  license?: string | null | undefined;
  sourceUrl?: string | null | undefined;
  supportLinks?: ReadonlyArray<{ kind: string; url: string; label?: string | null | undefined }> | undefined;
  videoUrl?: string | null | undefined;
  nsfw?: boolean | undefined;
  contentLang?: string | null | undefined;
  platform?: PlatformValue | null | undefined;
  multiplayerRole?: MultiplayerRoleValue | null | undefined;
  dedicatedServer?: 'yes' | 'no' | 'partial' | 'unknown' | null | undefined;
  safeToRemove?: 'yes' | 'no' | 'unknown' | null | undefined;
  originalAuthor?: { name: string; url: string | null } | null | undefined;
}

/** Slug proposed for a name: `[a-z0-9-]`, accents folded, 2–80 characters. */
export function slugify(value: string): string {
  const slug = value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
  return slug.length >= 2 ? slug : '';
}

export const SLUG_PATTERN = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export interface ResolvedListing {
  columns: Partial<NewMod>;
  /** Tag ids to store (undefined: tags unchanged). */
  tagIds: number[] | undefined;
  /** Names of the changed fields (for `mod.updated`). */
  fields: string[];
}

/**
 * Resolves the input into `"Mod"` columns. `kind` selects the category family (builds use build
 * categories); `legacy` keeps the raw-HTML rendering of descriptions authored on the legacy site.
 * Unknown categories or tags are a VALIDATION_FAILED.
 */
export async function resolveListing(
  exec: Executor,
  input: ListingInput,
  options: { kind: 'mod' | 'library' | 'build'; legacy: boolean; now: Date },
): Promise<ResolvedListing> {
  const columns: Partial<NewMod> = {};
  const fields: string[] = [];
  const set = <K extends keyof NewMod>(field: string, key: K, value: NewMod[K]) => {
    columns[key] = value;
    if (!fields.includes(field)) fields.push(field);
  };

  if (input.name !== undefined) set('name', 'name', input.name.trim());
  if (input.shortDescription !== undefined) set('shortDescription', 'shortDescription', input.shortDescription.trim());
  if (input.descriptionMd !== undefined) {
    const rendered = renderDescription(input.descriptionMd, { legacy: options.legacy });
    set('descriptionMd', 'descriptionMd', input.descriptionMd);
    columns.descriptionHtml = rendered.html;
    columns.renderVersion = rendered.renderVersion;
    columns.description = legacyText(input.descriptionMd);
  }
  if (input.categorySlug !== undefined) {
    const category = await findCategory(exec, input.categorySlug, options.kind);
    if (!category) {
      throw errors.validation('Unknown category', [
        { path: 'categorySlug', code: 'category_invalid', message: `unknown category ${input.categorySlug}` },
      ]);
    }
    set('categorySlug', 'categoryId', category.id);
  }
  let tagIds: number[] | undefined;
  if (input.tagSlugs !== undefined) {
    const tags = await findTags(exec, input.tagSlugs);
    if (tags.unknown.length > 0) {
      throw errors.validation('Unknown tags', [
        { path: 'tagSlugs', code: 'tags_unknown', message: `unknown tags: ${tags.unknown.join(', ')}` },
      ]);
    }
    tagIds = tags.ids;
    fields.push('tagSlugs');
  }
  if (input.license !== undefined) set('license', 'license', input.license);
  if (input.sourceUrl !== undefined) set('sourceUrl', 'sourceUrl', input.sourceUrl);
  if (input.supportLinks !== undefined) {
    set(
      'supportLinks',
      'supportLinks',
      input.supportLinks.map((link) => ({
        kind: link.kind,
        url: link.url,
        ...(link.label ? { label: link.label } : {}),
      })),
    );
  }
  if (input.videoUrl !== undefined) set('videoUrl', 'videoUrl', input.videoUrl);
  if (input.nsfw !== undefined) set('nsfw', 'isNSFW', input.nsfw);
  if (input.contentLang !== undefined) set('contentLang', 'contentLang', input.contentLang);
  if (input.platform !== undefined) {
    set('platform', 'platform', input.platform);
    columns.modSide = legacyModSide(input.platform);
  }
  if (input.multiplayerRole !== undefined) {
    set('multiplayerRole', 'multiplayerRole', input.multiplayerRole);
    Object.assign(columns, legacyMultiplayer(input.multiplayerRole));
  }
  if (input.dedicatedServer !== undefined) set('dedicatedServer', 'dedicatedServer', input.dedicatedServer);
  if (input.safeToRemove !== undefined) set('safeToRemove', 'safeToRemove', input.safeToRemove);
  if (input.originalAuthor !== undefined) {
    set('originalAuthor', 'originalAuthorName', input.originalAuthor?.name.trim() ?? null);
    columns.originalAuthorUrl = input.originalAuthor?.url ?? null;
  }
  if (fields.length > 0) {
    columns.updatedAt = options.now;
    columns.editedAt = options.now;
  }
  return { columns, tagIds, fields };
}

/** Replaces the tags of a mod. */
export async function setModTags(tx: Executor, modId: number, tagIds: readonly number[]): Promise<void> {
  await tx.delete(modToTag).where(eq(modToTag.A, modId));
  const unique = [...new Set(tagIds)];
  if (unique.length > 0) await tx.insert(modToTag).values(unique.map((B) => ({ A: modId, B })));
}

/** Facts of a stored mod for the quality score and the preflight. */
export async function storedListingFacts(exec: Executor, modId: number, kind: PublicationKind): Promise<ListingFacts> {
  const res = await exec.execute<{
    name: string;
    shortDescription: string;
    descriptionMd: string | null;
    description: string;
    categorySlug: string | null;
    tagCount: number;
    license: string | null;
    sourceUrl: string | null;
    platform: string | null;
    galleryCount: number;
    hasThumbnail: boolean;
  }>(sql`
    SELECT m."name", m."shortDescription", m."descriptionMd", m."description", c."slug" AS "categorySlug",
           (SELECT count(*)::int FROM "_ModToTag" t WHERE t."A" = m."id") AS "tagCount",
           m."license", m."sourceUrl", m."platform",
           (SELECT count(*)::int FROM "ModImage" i WHERE i."modId" = m."id" AND NOT i."isThumbnail") AS "galleryCount",
           (m."thumbnailMediaId" IS NOT NULL OR coalesce(m."imageUrl", '') <> '') AS "hasThumbnail"
      FROM "Mod" m LEFT JOIN "Category" c ON c."id" = m."categoryId"
     WHERE m."id" = ${modId}`);
  const r = res.rows[0];
  if (!r) throw errors.notFound('Mod');
  return {
    kind,
    name: r.name,
    shortDescription: r.shortDescription,
    descriptionMd: r.descriptionMd ?? r.description,
    categorySlug: r.categorySlug,
    tagCount: Number(r.tagCount),
    license: r.license,
    sourceUrl: r.sourceUrl,
    platform: r.platform,
    galleryCount: Number(r.galleryCount),
    hasThumbnail: r.hasThumbnail === true,
  };
}

/** True when the Markdown carries raw HTML that the `full` profile will show as text. */
export function rawHtmlWarning(md: string | null | undefined, legacy: boolean): boolean {
  return !legacy && typeof md === 'string' && hasRawHtml(md);
}
