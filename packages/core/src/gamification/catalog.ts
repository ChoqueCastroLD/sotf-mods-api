/**
 * Badge catalog (PLAN §7.2 "Insignias T0"): the code (`BADGES` in `@sotf/contracts/gamification`)
 * is the source of truth; `syncBadgeCatalog` upserts it into `"Badge"` (group, icon, flags, sort
 * order and the machine-readable criteria) and retires rows whose key left the code (never
 * deleted: earned badges keep pointing at them). Names and hints live in the i18n messages
 * (`badges_<key>_*`), never here.
 *
 * The sync is idempotent and cheap: the nightly evaluation and B16 run it, and `badgeIds` runs it
 * on demand when a code badge is missing from the table.
 */
import { BADGES, type BadgeKey } from '@sotf/contracts/gamification';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import { query } from '../follows/sql.ts';

/** Minimum review body (characters) that counts as "a review with text" (XP rule and badge). */
export const REVIEW_TEXT_MIN = 80;
/** Contributions between 00:00 and 04:00 local time needed for `night-owl`. */
export const NIGHT_OWL_TARGET = 5;
/** Local hour (exclusive) that ends the night-owl window. */
export const NIGHT_OWL_END_HOUR = 4;

/**
 * Machine-readable criteria stored in `"Badge"."criteria"` (and served as progress targets):
 * `metric` names the counter evaluated by `rules.ts`, `target` its threshold.
 */
export const BADGE_CRITERIA: Readonly<Record<BadgeKey, { metric: string; target: number; manual?: boolean }>> = {
  'original-survivor-2023': { metric: 'account_created_year:2023', target: 1 },
  'original-survivor-2024': { metric: 'account_created_year:2024', target: 1 },
  'original-survivor-2025': { metric: 'account_created_year:2025', target: 1 },
  'original-survivor-2026': { metric: 'account_created_year:2026', target: 1 },
  'crash-landing': { metric: 'published_mods', target: 1 },
  'first-blueprint': { metric: 'published_builds', target: 1 },
  'pillar-of-the-island': { metric: 'library_dependents_other_authors', target: 3 },
  'patch-day-hero': { metric: 'compatible_release_days_after_breaking_build', target: 7 },
  'island-favorite': { metric: 'mod_rating_4_5_with_reviews', target: 20 },
  'well-documented': { metric: 'mod_quality_score', target: 100 },
  'first-field-report': { metric: 'field_reports', target: 1 },
  'field-medic': { metric: 'field_reports_matching_consensus', target: 10 },
  'bug-hunter': { metric: 'bug_reports_resolved', target: 5 },
  'first-review': { metric: 'reviews_with_text', target: 1 },
  'voice-of-the-island': { metric: 'helpful_votes_received', target: 50 },
  'helping-hand': { metric: 'comments_solution_or_pinned', target: 5 },
  cartographer: { metric: 'public_kit_followers', target: 10 },
  'survived-day-one': { metric: 'onboarding_completed', target: 1 },
  'mod-of-the-week': { metric: 'award:mod_of_week', target: 1 },
  'staff-pick': { metric: 'award:staff_pick', target: 1 },
  'verified-creator': { metric: 'role:verified_creator', target: 1 },
  ranger: { metric: 'role:moderator', target: 1 },
  translator: { metric: 'manual', target: 1, manual: true },
  'night-owl': { metric: 'night_contributions', target: NIGHT_OWL_TARGET },
};

export const BADGE_KEY_SET: ReadonlySet<string> = new Set(BADGES.map((b) => b.key));

export function isBadgeKey(key: string): key is BadgeKey {
  return BADGE_KEY_SET.has(key);
}

export interface BadgeSyncResult {
  upserted: number;
  retired: number;
}

/** Upserts the code catalog into `"Badge"` and retires unknown keys. Idempotent. */
export async function syncBadgeCatalog(exec: Executor): Promise<BadgeSyncResult> {
  const rows = BADGES.map((b, index) => ({
    key: b.key,
    group: b.group,
    icon: b.icon,
    isSecret: b.secret,
    isRepeatable: b.repeatable,
    sortOrder: (index + 1) * 10,
    criteria: BADGE_CRITERIA[b.key],
  }));
  const upserted = await exec.execute(sql`
    INSERT INTO "Badge" ("key", "group", "tier", "icon", "criteria", "isSecret", "isRepeatable", "sortOrder", "retiredAt")
    SELECT r."key", r."group", 1, r."icon", r."criteria", r."isSecret", r."isRepeatable", r."sortOrder", NULL
      FROM jsonb_to_recordset(${JSON.stringify(rows)}::jsonb)
           AS r("key" text, "group" text, "icon" text, "criteria" jsonb, "isSecret" boolean, "isRepeatable" boolean,
                "sortOrder" integer)
    ON CONFLICT ("key") DO UPDATE SET
      "group" = EXCLUDED."group", "icon" = EXCLUDED."icon", "criteria" = EXCLUDED."criteria",
      "isSecret" = EXCLUDED."isSecret", "isRepeatable" = EXCLUDED."isRepeatable",
      "sortOrder" = EXCLUDED."sortOrder", "retiredAt" = NULL
    WHERE ("Badge"."group", "Badge"."icon", "Badge"."criteria", "Badge"."isSecret", "Badge"."isRepeatable",
           "Badge"."sortOrder", "Badge"."retiredAt")
          IS DISTINCT FROM
          (EXCLUDED."group", EXCLUDED."icon", EXCLUDED."criteria", EXCLUDED."isSecret", EXCLUDED."isRepeatable",
           EXCLUDED."sortOrder", NULL::timestamptz)`);
  const keys = `{${BADGES.map((b) => `"${b.key}"`).join(',')}}`;
  const retired = await exec.execute(sql`
    UPDATE "Badge" SET "retiredAt" = now()
     WHERE "retiredAt" IS NULL AND NOT ("key" = ANY(${keys}::text[]))`);
  return { upserted: upserted.rowCount ?? 0, retired: retired.rowCount ?? 0 };
}

/** `key → id` of the active catalog; syncs the catalog first when a code badge is missing. */
export async function badgeIds(exec: Executor): Promise<Map<string, number>> {
  const load = async () =>
    new Map(
      (
        await query<{ id: number; key: string }>(exec, sql`SELECT "id", "key" FROM "Badge" WHERE "retiredAt" IS NULL`)
      ).map((r) => [r.key, Number(r.id)]),
    );
  const ids = await load();
  if (BADGES.every((b) => ids.has(b.key))) return ids;
  await syncBadgeCatalog(exec);
  return load();
}
