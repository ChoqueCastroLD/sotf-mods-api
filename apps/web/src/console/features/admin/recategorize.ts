/**
 * Row model of the bulk recategorisation table: keyword-rule suggestions of the API and lines of a
 * CSV (WP-84) merged per mod, the admin's edits, and the confirmed changes sent to
 * `POST /admin/recategorize` in batches of ≤ 500.
 *
 * Tags: the API replaces the whole tag set of a mod when a change carries `tagSlugs`, and its
 * suggestions do not say which tags a mod has now. Chosen tags are therefore **added** to the
 * mod's current public tags (read before applying); when those cannot be read (the mod is not
 * public) the change keeps the tags untouched.
 */
import { currentTagsOf, type RecategorizeChange, type Suggestion } from './api.ts';
import { ADMIN_LIMITS } from './constants.ts';
import type { CsvSuggestion } from './csv.ts';

export type ModRef = Suggestion['mod'];

export interface RecatRow {
  modId: number;
  mod: ModRef | null;
  /** Display name (the mod's, or the CSV's, or `#id`). */
  name: string;
  /** Category slug now (`undefined`: not known, a CSV line for a mod the rules did not flag). */
  currentCategory: string | null | undefined;
  suggestedCategory: string;
  /** The category that will be applied (the suggestion unless edited). */
  category: string;
  /** Tags that will be added. */
  tags: string[];
  confidence: number | null;
  reason: string;
  source: 'rules' | 'csv';
}

export function rowsFromSuggestions(suggestions: readonly Suggestion[]): RecatRow[] {
  return suggestions.map((suggestion) => ({
    modId: suggestion.mod.id,
    mod: suggestion.mod,
    name: suggestion.mod.name,
    currentCategory: suggestion.currentCategory,
    suggestedCategory: suggestion.suggestedCategory,
    category: suggestion.suggestedCategory,
    tags: suggestion.suggestedTags.slice(0, ADMIN_LIMITS.recategorizeTagsMax),
    confidence: suggestion.confidence,
    reason: suggestion.reason,
    source: 'rules',
  }));
}

export interface CsvMergeResult {
  rows: RecatRow[];
  added: number;
  updated: number;
  skipped: Array<{ line: number; reason: 'unknown-mod' | 'unknown-category' | 'duplicate'; value: string }>;
  droppedTags: number;
}

/**
 * Merges CSV lines into the table: a line for a listed mod replaces its suggestion (category, tags,
 * confidence, reason); other lines add rows. Unknown categories and manifest ids that match no
 * listed mod are skipped; unknown tags are dropped.
 */
export function mergeCsv(
  rows: readonly RecatRow[],
  lines: readonly CsvSuggestion[],
  categories: ReadonlySet<string>,
  tags: ReadonlySet<string>,
): CsvMergeResult {
  const byId = new Map(rows.map((row) => [row.modId, row]));
  const byManifest = new Map<string, number>();
  for (const row of rows) if (row.mod) byManifest.set(row.mod.manifestId.toLowerCase(), row.modId);
  const seen = new Set<number>();
  const result: CsvMergeResult = { rows: [], added: 0, updated: 0, skipped: [], droppedTags: 0 };
  const next = new Map(byId);
  const order = rows.map((row) => row.modId);

  for (const line of lines) {
    const modId = line.modId ?? (line.manifestId ? byManifest.get(line.manifestId.toLowerCase()) : undefined);
    if (modId === undefined) {
      result.skipped.push({ line: line.line, reason: 'unknown-mod', value: line.manifestId ?? '' });
      continue;
    }
    if (seen.has(modId)) {
      result.skipped.push({ line: line.line, reason: 'duplicate', value: String(modId) });
      continue;
    }
    if (!categories.has(line.categorySlug)) {
      result.skipped.push({ line: line.line, reason: 'unknown-category', value: line.categorySlug });
      continue;
    }
    seen.add(modId);
    const knownTags = line.tagSlugs.filter((tag) => tags.has(tag));
    result.droppedTags += line.tagSlugs.length - knownTags.length;
    const chosenTags = knownTags.slice(0, ADMIN_LIMITS.recategorizeTagsMax);
    const existing = next.get(modId);
    if (existing) {
      result.updated += 1;
      next.set(modId, {
        ...existing,
        suggestedCategory: line.categorySlug,
        category: line.categorySlug,
        tags: chosenTags,
        confidence: line.confidence ?? existing.confidence,
        reason: line.reason ?? existing.reason,
        source: 'csv',
      });
    } else {
      result.added += 1;
      order.push(modId);
      next.set(modId, {
        modId,
        mod: null,
        name: line.name ?? `#${modId}`,
        currentCategory: line.currentCategory ?? undefined,
        suggestedCategory: line.categorySlug,
        category: line.categorySlug,
        tags: chosenTags,
        confidence: line.confidence,
        reason: line.reason ?? '',
        source: 'csv',
      });
    }
  }
  result.rows = order.map((id) => next.get(id)).filter((row): row is RecatRow => row !== undefined);
  return result;
}

/** Runs `task` over `items` with at most `limit` in flight. */
async function mapLimit<T, R>(items: readonly T[], limit: number, task: (item: T) => Promise<R>): Promise<R[]> {
  const out = new Array<R>(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const index = next;
      next += 1;
      out[index] = await task(items[index] as T);
    }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}

export interface PlannedChanges {
  changes: RecategorizeChange[];
  /** Rows whose tags could not be added (current tags unreadable). */
  tagsSkipped: number;
}

/** Turns the selected rows into API changes (reading current tags when tags are added). */
export async function planChanges(rows: readonly RecatRow[], withTags: boolean): Promise<PlannedChanges> {
  let tagsSkipped = 0;
  const changes = await mapLimit(rows, 6, async (row): Promise<RecategorizeChange> => {
    const base = { modId: row.modId, categorySlug: row.category };
    if (!withTags || row.tags.length === 0) return base;
    const current = await currentTagsOf(row.modId);
    if (current === null) {
      tagsSkipped += 1;
      return base;
    }
    const merged = [...new Set([...current, ...row.tags])];
    if (merged.length === current.length) return base;
    // A mod keeps every tag it has: with no room left (≤ 5 per change) nothing is added.
    if (current.length >= ADMIN_LIMITS.recategorizeTagsMax) {
      tagsSkipped += 1;
      return base;
    }
    return { ...base, tagSlugs: merged.slice(0, ADMIN_LIMITS.recategorizeTagsMax) };
  });
  return { changes, tagsSkipped };
}

/** Splits changes into API batches. */
export function batches<T>(items: readonly T[], size: number = ADMIN_LIMITS.recategorizeBatch): T[][] {
  const out: T[][] = [];
  for (let index = 0; index < items.length; index += size) out.push(items.slice(index, index + size));
  return out;
}
