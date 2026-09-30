/**
 * Makes wizard state acceptable to `PATCH /drafts/:id` (the `DraftData` contract): half-typed
 * values (a URL being written, a one-letter name) must never make the autosave fail. Invalid list
 * items are dropped, then any remaining invalid top-level field — the same degradation the API
 * applies to stored drafts. The fields keep showing what the creator typed; only the saved copy
 * waits until the value is valid. Loaded lazily with the first save (keeps Zod out of the route).
 */
import '../../../lib/zod-config.ts';
import { DraftData } from '@sotf/contracts/studio';

type Data = DraftData;

const LIST_FIELDS = ['supportLinks', 'dependencies', 'gallery', 'tagSlugs', 'testedGameBuildIds'] as const;

export function sanitizeDraftData(data: Data): Data {
  const first = DraftData.safeParse(data);
  if (first.success) return first.data;

  const record: Record<string, unknown> = { ...data };
  // Drop the invalid items of lists first (one bad support link must not erase the others).
  for (const issue of first.error.issues) {
    const [key, index] = issue.path;
    if (typeof key !== 'string' || typeof index !== 'number') continue;
    if (!(LIST_FIELDS as readonly string[]).includes(key)) continue;
    const list = record[key];
    if (Array.isArray(list)) record[key] = list.map((item, i) => (i === index ? undefined : item));
  }
  for (const key of LIST_FIELDS) {
    const list = record[key];
    if (Array.isArray(list)) record[key] = list.filter((item) => item !== undefined);
  }
  const second = DraftData.safeParse(record);
  if (second.success) return second.data;
  for (const issue of second.error.issues) {
    const key = issue.path[0];
    if (typeof key !== 'string') continue;
    if (key === 'version' && issue.path.length > 1) {
      const version = { ...(record.version as Record<string, unknown>) };
      delete version[String(issue.path[1])];
      record.version = version;
    } else {
      delete record[key];
    }
  }
  const third = DraftData.safeParse(record);
  return third.success ? third.data : { ...(data.step !== undefined ? { step: data.step } : {}) };
}
