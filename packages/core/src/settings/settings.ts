/**
 * Site settings (`"SiteSetting"`, PLAN §7.4 "Admin": Discord webhooks, limits, feature flags, ads,
 * KelvinSeek and the moderation reason templates). One JSON value per key, validated with
 * `SITE_SETTING_SCHEMAS[key]` of `@sotf/contracts/admin` on every write.
 *
 * - `GET /admin/settings/:key` returns the stored value, or the built-in default (with
 *   `updatedAt: null`) when the key was never written.
 * - `PUT /admin/settings/:key` replaces the value (👑, session < 12 h) and appends an `AuditLog`
 *   row with the previous and new values (secret-bearing fields such as webhook URLs masked).
 *   Consumers re-read the table (KelvinSeek every 30 s, the Discord announcer per job); the
 *   `setting:{key}` notice evicts process caches that keep a copy.
 */
import {
  parseSiteSetting,
  SITE_SETTING_KEYS,
  type SITE_SETTING_SCHEMAS,
  type SiteSettingDTO,
  type SiteSettingKey,
} from '@sotf/contracts/admin';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit, redactSecrets } from '../audit/audit.ts';
import { queryOne, toDate } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { assertStaff } from '../moderation/guard.ts';
import { DEFAULT_MODERATION_TEMPLATES } from './templates.ts';

type SiteSetting = z.infer<typeof SiteSettingDTO>;

/** Values used when a key was never written (the KelvinSeek default comes from the environment). */
export interface SettingDefaults {
  kelvinseek: { enabled: boolean; model: string; dailyBudgetUsd: number; timeoutMs: number };
}

export function defaultSettingValue(key: SiteSettingKey, defaults: SettingDefaults): unknown {
  switch (key) {
    case 'ads':
      return { enabled: false, clientId: null, slots: {} };
    case 'discordWebhooks':
      return [];
    case 'moderationTemplates':
      return DEFAULT_MODERATION_TEMPLATES;
    case 'limits':
      return {};
    case 'kelvinseek':
      return defaults.kelvinseek;
    case 'featureFlags':
      return {};
  }
}

export function isSiteSettingKey(value: string): value is SiteSettingKey {
  return (SITE_SETTING_KEYS as readonly string[]).includes(value);
}

interface SettingRow {
  value: unknown;
  updatedAt: Date | string | null;
  updatedById: number | null;
}

async function loadRow(exec: Executor, key: SiteSettingKey): Promise<SettingRow | null> {
  return queryOne<SettingRow>(
    exec,
    sql`SELECT "value", "updatedAt", "updatedById" FROM "SiteSetting" WHERE "key" = ${key}`,
  );
}

/**
 * The stored value of a key when it is valid for its schema, otherwise null (callers fall back to
 * their default). For services that read settings (moderation templates, limits…).
 */
export async function loadSettingValue<K extends SiteSettingKey>(
  exec: Executor,
  key: K,
): Promise<z.output<(typeof SITE_SETTING_SCHEMAS)[K]> | null> {
  const row = await loadRow(exec, key);
  if (!row) return null;
  const parsed = parseSiteSetting(key, row.value);
  return parsed.success ? parsed.data : null;
}

/** `GET /admin/settings/:key`. */
export async function getSiteSetting(ctx: Ctx, defaults: SettingDefaults, key: SiteSettingKey): Promise<SiteSetting> {
  await assertStaff(ctx, 'admin.settings');
  const row = await loadRow(ctx.db, key);
  if (!row) return { key, value: defaultSettingValue(key, defaults), updatedAt: null, updatedById: null };
  return {
    key,
    value: row.value,
    updatedAt: toDate(row.updatedAt)?.toISOString() ?? null,
    updatedById: row.updatedById,
  };
}

/** `PUT /admin/settings/:key`. */
export async function putSiteSetting(ctx: Ctx, key: SiteSettingKey, value: unknown): Promise<SiteSetting> {
  const actor = await assertStaff(ctx, 'admin.settings');
  const parsed = parseSiteSetting(key, value);
  if (!parsed.success) {
    throw errors.validation(
      `Invalid value for the "${key}" setting`,
      parsed.error.issues.slice(0, 20).map((issue) => ({
        path: ['value', ...issue.path.map(String)].join('.'),
        code: issue.code,
        message: issue.message,
      })),
    );
  }
  if (key === 'moderationTemplates') assertUniqueTemplateKeys(parsed.data as Array<{ key: string }>);
  const now = ctx.clock.now();
  const json = JSON.stringify(parsed.data);
  return ctx.db.transaction(async (tx) => {
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtextextended(${`SiteSetting:${key}`}, 0))`);
    const before = await loadRow(tx, key);
    const saved = await queryOne<SettingRow>(
      tx,
      sql`INSERT INTO "SiteSetting" ("key", "value", "updatedById", "updatedAt")
          VALUES (${key}, ${json}::jsonb, ${actor.userId}, ${now.toISOString()}::timestamptz)
          ON CONFLICT ("key") DO UPDATE SET "value" = EXCLUDED."value", "updatedById" = EXCLUDED."updatedById",
                                            "updatedAt" = EXCLUDED."updatedAt"
          RETURNING "value", "updatedAt", "updatedById"`,
    );
    if (!saved) throw new Error('SiteSetting upsert returned no row');
    await recordAudit(tx, ctx, {
      action: 'setting.update',
      targetType: 'setting',
      targetId: null,
      before: { key, value: before ? redactSecrets(before.value) : null },
      after: { key, value: redactSecrets(parsed.data) },
    });
    await publishCacheInvalidation(tx, [`setting:${key}`]);
    return {
      key,
      value: saved.value,
      updatedAt: toDate(saved.updatedAt)?.toISOString() ?? now.toISOString(),
      updatedById: saved.updatedById,
    };
  });
}

function assertUniqueTemplateKeys(list: ReadonlyArray<{ key: string }>): void {
  const seen = new Set<string>();
  for (const [index, t] of list.entries()) {
    if (seen.has(t.key)) {
      throw errors.validation('Template keys must be unique', [
        { path: `value.${index}.key`, code: 'duplicate', message: `duplicate key "${t.key}"` },
      ]);
    }
    seen.add(t.key);
  }
}
