/**
 * Discord announcer (PLAN §7.1 T0-31, §2.9 `discord.announce`).
 *
 * - `discordJobsForEvent(event)`: which domain events are announced (new mod, new version). NSFW content is never announced.
 * - `announceOnDiscord(deps, job)`: loads the mod, builds the message and posts it to every webhook
 *   of `SiteSetting.discordWebhooks` subscribed to the event (betas skipped where `excludeBeta`).
 *
 * Registry and retries: every delivery is written to "AuditLog" (`action = 'discord.announce'`,
 * the webhook identified by name and a hash of its URL, never the URL itself: it is a secret).
 * A webhook that already received an announcement is skipped, so the job can be retried after a
 * partial failure without duplicate posts. 429 and 5xx retry (the job throws); other 4xx are
 * permanent (recorded as failed, not retried).
 */
import { createHash } from 'node:crypto';
import { SITE_SETTING_SCHEMAS } from '@sotf/contracts/admin';
import type { DomainEvent } from '@sotf/contracts/domain-events';
import type { JobPayload } from '@sotf/contracts/jobs';
import { profilePath, versionsPath } from '@sotf/contracts/seo';
import {
  auditLog,
  category,
  type Database,
  type Executor,
  mod,
  modImage,
  modVersion,
  siteSetting,
  user,
} from '@sotf/db';
import { and, asc, desc, eq, sql } from 'drizzle-orm';
import { avatarUrlOf } from '../auth/users.ts';
import type { Logger } from '../kernel/logger.ts';
import { localizedUrl } from '../notifications/digest.ts';
import { loadModRef, plainExcerpt } from '../notifications/refs.ts';
import { buildDiscordMessage, type DiscordAnnouncement, type DiscordEvent, type DiscordMessage } from './payload.ts';

export type DiscordJob = JobPayload<'discord.announce'>;

export interface DiscordWebhook {
  name: string;
  url: string;
  events: DiscordEvent[];
  excludeBeta: boolean;
}

/** Announcements of a domain event (empty when it is not announced). */
export function discordJobsForEvent(event: DomainEvent): DiscordJob[] {
  switch (event.type) {
    case 'mod.published':
      return event.payload.nsfw ? [] : [{ event: 'mod.published', modId: event.payload.modId }];
    case 'version.published':
      return event.payload.nsfw
        ? []
        : [{ event: 'version.published', modId: event.payload.modId, versionId: event.payload.versionId }];
    default:
      return [];
  }
}

/** Stable identity of one announcement (dedupe key). */
export function announcementKey(job: DiscordJob): string {
  const detail = job.versionId ?? job.awardId ?? job.threshold ?? '';
  return `${job.event}:${job.modId}:${detail}`;
}

/** Configured webhooks (invalid settings are ignored with a warning). */
export async function loadDiscordWebhooks(db: Executor, log?: Logger): Promise<DiscordWebhook[]> {
  const [row] = await db
    .select({ value: siteSetting.value })
    .from(siteSetting)
    .where(eq(siteSetting.key, 'discordWebhooks'));
  if (!row) return [];
  const parsed = SITE_SETTING_SCHEMAS.discordWebhooks.safeParse(row.value);
  if (!parsed.success) {
    log?.warn({ issues: parsed.error.issues.length }, 'invalid SiteSetting.discordWebhooks, ignored');
    return [];
  }
  return parsed.data.map((w) => ({ name: w.name, url: w.url, events: [...w.events], excludeBeta: w.excludeBeta }));
}

function webhookHash(url: string): string {
  return createHash('sha256').update(url, 'utf8').digest('hex').slice(0, 16);
}

export interface DiscordDeps {
  db: Database;
  log: Logger;
  /** `PUBLIC_SITE_URL`. */
  siteUrl: string;
  /** `R2_PUBLIC_BASE_URL` (author avatars). */
  mediaBaseUrl: string;
  fetch?: typeof fetch;
  now?: () => Date;
  timeoutMs?: number;
}

/** A failed post that is worth retrying (rate limit, Discord outage, network). */
export class DiscordRetryableError extends Error {
  override readonly name = 'DiscordRetryableError';
}

const ENTITIES: Record<string, string> = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" };

/**
 * Changelog for the embed description (Markdown is rendered by Discord, mentions never ping in
 * embeds): legacy HTML entities decoded, tags and images removed, line breaks kept.
 */
export function changelogForDiscord(source: string | null): string {
  return (source ?? '')
    .replace(/&(?:amp|lt|gt|quot|#39);/g, (e) => ENTITIES[e] ?? e)
    .replace(/<[^>]*>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Loads what the message needs; null when the mod must not be announced (any more). */
export async function loadAnnouncement(deps: DiscordDeps, job: DiscordJob): Promise<DiscordAnnouncement | null> {
  // Awards and milestones are no longer announced (jobs queued before the removal are dropped).
  if (job.event !== 'mod.published' && job.event !== 'version.published') return null;
  const ref = await loadModRef(deps.db, job.modId);
  if (ref?.status !== 'published' || ref.nsfw || !ref.path || !ref.authorHandle) return null;
  const [row] = await deps.db
    .select({
      shortDescription: mod.shortDescription,
      logColor: mod.logColor,
      imageUrl: mod.imageUrl,
      categoryName: category.name,
      authorImageUrl: user.imageUrl,
      authorAvatarMediaId: user.avatarMediaId,
    })
    .from(mod)
    .leftJoin(category, eq(category.id, mod.categoryId))
    .leftJoin(user, eq(user.id, mod.userId))
    .where(eq(mod.id, job.modId));
  if (!row) return null;
  const [image] = await deps.db
    .select({ url: modImage.url })
    .from(modImage)
    .where(eq(modImage.modId, job.modId))
    .orderBy(
      desc(modImage.isPrimary),
      desc(modImage.isThumbnail),
      asc(sql`coalesce(${modImage.position}, 0)`),
      asc(modImage.id),
    )
    .limit(1);
  const imageUrl =
    [image?.url, row.imageUrl].find((u): u is string => typeof u === 'string' && /^https:\/\//.test(u)) ?? null;
  const announcement: DiscordAnnouncement = {
    event: job.event,
    mod: {
      name: ref.name,
      kind: ref.kind,
      url: localizedUrl(deps.siteUrl, 'en', ref.path),
      shortDescription: plainExcerpt(row.shortDescription, 350),
      color: row.logColor,
      imageUrl,
      categoryName: row.categoryName,
    },
    author: {
      name: ref.authorName ?? ref.authorHandle,
      url: localizedUrl(deps.siteUrl, 'en', profilePath(ref.authorHandle)),
      iconUrl: await avatarUrlOf(
        deps.db,
        { avatarMediaId: row.authorAvatarMediaId, imageUrl: row.authorImageUrl ?? '' },
        deps.mediaBaseUrl,
      ),
    },
    at: (deps.now?.() ?? new Date()).toISOString(),
  };
  if (job.event === 'version.published') {
    if (!job.versionId) return null;
    const [v] = await deps.db
      .select({
        version: modVersion.version,
        channel: modVersion.channel,
        status: modVersion.status,
        changelogMd: modVersion.changelogMd,
        changelog: modVersion.changelog,
        modId: modVersion.modId,
      })
      .from(modVersion)
      .where(eq(modVersion.id, job.versionId));
    if (!v || v.modId !== job.modId || v.status !== 'active') return null;
    // The first version of a mod is announced as the new mod itself.
    const [others] = await deps.db
      .select({ n: sql<number>`count(*)::int` })
      .from(modVersion)
      .where(and(eq(modVersion.modId, job.modId), eq(modVersion.status, 'active')));
    if ((others?.n ?? 0) <= 1) return null;
    announcement.version = {
      version: v.version,
      channel: v.channel,
      changelog: changelogForDiscord(v.changelogMd ?? v.changelog),
      url: localizedUrl(deps.siteUrl, 'en', versionsPath(ref.kind, ref.authorHandle, ref.slug, v.version)),
    };
  }
  return announcement;
}

async function alreadyDelivered(db: Executor, key: string, hook: string): Promise<boolean> {
  const [row] = await db
    .select({ id: auditLog.id })
    .from(auditLog)
    .where(
      and(
        eq(auditLog.action, 'discord.announce'),
        sql`${auditLog.after}->>'key' = ${key}`,
        sql`${auditLog.after}->>'webhook' = ${hook}`,
        sql`${auditLog.after}->>'status' = 'sent'`,
      ),
    )
    .limit(1);
  return Boolean(row);
}

async function post(
  deps: DiscordDeps,
  url: string,
  message: DiscordMessage,
): Promise<{ status: number; id: string | null }> {
  const doFetch = deps.fetch ?? fetch;
  const target = new URL(url);
  target.searchParams.set('wait', 'true');
  let response: Response;
  try {
    response = await doFetch(target, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'user-agent': 'SOTF-Mods-Announcer (https://sotf-mods.com, 2)' },
      body: JSON.stringify(message),
      signal: AbortSignal.timeout(deps.timeoutMs ?? 10_000),
    });
  } catch (error) {
    throw new DiscordRetryableError(`discord unreachable: ${(error as Error).name}`);
  }
  const body = (await response.json().catch(() => null)) as { id?: string } | null;
  return { status: response.status, id: body?.id ?? null };
}

export interface AnnounceResult {
  status: 'skipped' | 'announced';
  reason?: string;
  sent: string[];
  failed: string[];
}

/** Posts one announcement to its webhooks. Throws `DiscordRetryableError` to retry the job. */
export async function announceOnDiscord(deps: DiscordDeps, job: DiscordJob): Promise<AnnounceResult> {
  const hooks = (await loadDiscordWebhooks(deps.db, deps.log)).filter((h) => h.events.includes(job.event));
  if (hooks.length === 0) return { status: 'skipped', reason: 'no webhook', sent: [], failed: [] };
  const announcement = await loadAnnouncement(deps, job);
  if (!announcement) return { status: 'skipped', reason: 'not announceable', sent: [], failed: [] };
  const message = buildDiscordMessage(announcement);
  const key = announcementKey(job);
  const result: AnnounceResult = { status: 'announced', sent: [], failed: [] };
  let retry: string | null = null;
  for (const hook of hooks) {
    if (announcement.version?.channel === 'beta' && hook.excludeBeta) continue;
    const hash = webhookHash(hook.url);
    if (await alreadyDelivered(deps.db, key, hash)) continue;
    let outcome: { status: number; id: string | null };
    try {
      outcome = await post(deps, hook.url, message);
    } catch (error) {
      retry = (error as Error).message;
      deps.log.warn({ webhook: hook.name, key }, 'discord webhook unreachable');
      continue;
    }
    const ok = outcome.status >= 200 && outcome.status < 300;
    const retryable = outcome.status === 429 || outcome.status >= 500;
    if (!ok && retryable) {
      retry = `discord ${outcome.status}`;
      deps.log.warn({ webhook: hook.name, key, status: outcome.status }, 'discord webhook will be retried');
      continue;
    }
    await deps.db.insert(auditLog).values({
      actorId: null,
      action: 'discord.announce',
      targetType: 'mod',
      targetId: job.modId,
      after: {
        key,
        event: job.event,
        webhook: hash,
        webhookName: hook.name,
        status: ok ? 'sent' : 'failed',
        httpStatus: outcome.status,
        messageId: outcome.id,
      },
    });
    if (ok) result.sent.push(hook.name);
    else {
      result.failed.push(hook.name);
      deps.log.error({ webhook: hook.name, key, status: outcome.status }, 'discord webhook rejected the announcement');
    }
  }
  if (retry) throw new DiscordRetryableError(retry);
  return result;
}
