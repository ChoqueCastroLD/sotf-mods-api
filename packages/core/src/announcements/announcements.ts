/**
 * Global announcements (PLAN T0-28, §7.4 "Admin"): the banner shown at the top of every page.
 *
 * - Public: `GET /announcements/active?locale=` — announcements whose window contains "now",
 *   `patch` first, then `warning`, then `info`, newest start first; the message is resolved for
 *   the locale with English as fallback. Edge-cached 5 min under the `html` tag.
 * - Admin (👑, session < 12 h, `AuditLog`): list, create, replace, delete. Every write purges
 *   `html` (the banner is rendered into every page) and evicts the local caches.
 * - Creating an announcement whose window has already started emits `announcement.published`
 *   (a `system.announcement` signal for everyone). One that starts later is announced by the
 *   banner alone when its window opens.
 */
import type {
  ActiveAnnouncementsDTO,
  AnnouncementDTO,
  AnnouncementInputBody,
  AnnouncementListDTO,
} from '@sotf/contracts/admin';
import { LOCALES, type Locale } from '@sotf/contracts/common';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { recordAudit } from '../audit/audit.ts';
import { query, queryOne, toDate } from '../follows/sql.ts';
import { purge } from '../kernel/cache-tags.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import { publishCacheInvalidation } from '../kernel/notify.ts';
import { assertStaff } from '../moderation/guard.ts';

type Announcement = z.infer<typeof AnnouncementDTO>;
type AnnouncementInput = z.output<typeof AnnouncementInputBody>;
type ActiveAnnouncements = z.infer<typeof ActiveAnnouncementsDTO>;
type AnnouncementList = z.infer<typeof AnnouncementListDTO>;
type Level = Announcement['level'];

const LEVELS: readonly Level[] = ['info', 'warning', 'patch'];
const LEVEL_ORDER: Record<Level, number> = { patch: 0, warning: 1, info: 2 };

/** Local LRU tag of the active list. */
export const ANNOUNCEMENTS_CACHE_TAG = 'announcements';

interface AnnouncementRow {
  id: number;
  level: string;
  messageI18n: Record<string, unknown> | null;
  href: string | null;
  startsAt: Date | string;
  endsAt: Date | string | null;
  dismissible: boolean;
}

const COLUMNS = sql.raw(`"id", "level", "messageI18n", "href", "startsAt", "endsAt", "dismissible"`);

function levelOf(value: string): Level {
  return (LEVELS as readonly string[]).includes(value) ? (value as Level) : 'info';
}

/** Messages keyed by URL locale (unknown keys and empty strings dropped). */
function messagesOf(value: Record<string, unknown> | null): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  if (!value || typeof value !== 'object') return out;
  for (const locale of LOCALES) {
    const text = value[locale];
    if (typeof text === 'string' && text.trim() !== '') out[locale] = text.trim();
  }
  return out;
}

function iso(value: Date | string | null): string | null {
  return toDate(value)?.toISOString() ?? null;
}

function toDto(r: AnnouncementRow): Announcement {
  return {
    id: r.id,
    level: levelOf(r.level),
    messages: messagesOf(r.messageI18n),
    href: r.href,
    startsAt: iso(r.startsAt) ?? new Date(0).toISOString(),
    endsAt: iso(r.endsAt),
    dismissible: r.dismissible,
  };
}

function auditShape(a: Announcement): Record<string, unknown> {
  return {
    level: a.level,
    messages: a.messages,
    href: a.href,
    startsAt: a.startsAt,
    endsAt: a.endsAt,
    dismissible: a.dismissible,
  };
}

/** Site-relative paths or https URLs only (no `javascript:`, no protocol-relative `//host`). */
function cleanHref(href: string | null): string | null {
  const value = href?.trim() ?? '';
  if (value === '') return null;
  if (/^\/(?![/\\])/.test(value)) return value;
  try {
    const url = new URL(value);
    if (url.protocol === 'https:') return url.href;
  } catch {
    // fall through
  }
  throw errors.validation('The link must be a site path or an https URL', [
    { path: 'href', code: 'invalid_href', message: 'expected /path or https://…' },
  ]);
}

function validateInput(input: AnnouncementInput): { messages: Partial<Record<Locale, string>>; href: string | null } {
  const messages = messagesOf(input.messages as Record<string, unknown>);
  if (!messages.en) {
    throw errors.validation('The English message is required', [
      { path: 'messages.en', code: 'required', message: 'required' },
    ]);
  }
  for (const [locale, text] of Object.entries(messages)) {
    if (text.length > 300) {
      throw errors.validation('Messages are limited to 300 characters', [
        { path: `messages.${locale}`, code: 'too_long', message: 'max 300' },
      ]);
    }
  }
  if (input.endsAt && Date.parse(input.endsAt) <= Date.parse(input.startsAt)) {
    throw errors.validation('The end must be after the start', [
      { path: 'endsAt', code: 'invalid_window', message: 'endsAt ≤ startsAt' },
    ]);
  }
  return { messages, href: cleanHref(input.href) };
}

async function afterWrite(ctx: Ctx, tx: Executor, reason: string): Promise<void> {
  await publishCacheInvalidation(tx, [ANNOUNCEMENTS_CACHE_TAG]);
  await purge(ctx.jobs, ['html', 'home'], reason, { tx });
}

// -----------------------------------------------------------------------------------------------
// Public
// -----------------------------------------------------------------------------------------------

/** `GET /announcements/active?locale=`. */
export async function listActiveAnnouncements(ctx: Ctx, locale: Locale): Promise<ActiveAnnouncements> {
  const now = ctx.clock.now().toISOString();
  const list = await query<AnnouncementRow>(
    ctx.db,
    sql`SELECT ${COLUMNS} FROM "Announcement"
         WHERE "startsAt" <= ${now}::timestamptz AND ("endsAt" IS NULL OR "endsAt" > ${now}::timestamptz)
         ORDER BY "startsAt" DESC, "id" DESC
         LIMIT 20`,
  );
  const items = list
    .map(toDto)
    .sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level])
    .map((a) => ({
      id: a.id,
      level: a.level,
      message: a.messages[locale] ?? a.messages.en ?? '',
      href: a.href,
      dismissible: a.dismissible,
      endsAt: a.endsAt,
    }))
    .filter((a) => a.message !== '');
  return { items };
}

// -----------------------------------------------------------------------------------------------
// Admin
// -----------------------------------------------------------------------------------------------

/** `GET /admin/announcements`: every announcement, newest start first. */
export async function listAnnouncements(ctx: Ctx): Promise<AnnouncementList> {
  await assertStaff(ctx, 'admin.announcements');
  const list = await query<AnnouncementRow>(
    ctx.db,
    sql`SELECT ${COLUMNS} FROM "Announcement" ORDER BY "startsAt" DESC, "id" DESC LIMIT 500`,
  );
  return { items: list.map(toDto) };
}

/** `POST /admin/announcements`. */
export async function createAnnouncement(ctx: Ctx, input: AnnouncementInput): Promise<Announcement> {
  const actor = await assertStaff(ctx, 'admin.announcements');
  const { messages, href } = validateInput(input);
  const now = ctx.clock.now();
  return ctx.db.transaction(async (tx) => {
    const row = await queryOne<AnnouncementRow>(
      tx,
      sql`INSERT INTO "Announcement" ("level", "messageI18n", "href", "startsAt", "endsAt", "dismissible", "createdById")
          VALUES (${input.level}, ${JSON.stringify(messages)}::jsonb, ${href}, ${input.startsAt}::timestamptz,
                  ${input.endsAt ?? null}::timestamptz, ${input.dismissible}, ${actor.userId})
          RETURNING ${COLUMNS}`,
    );
    if (!row) throw new Error('Announcement insert returned no row');
    const dto = toDto(row);
    await recordAudit(tx, ctx, {
      action: 'announcement.create',
      targetType: 'announcement',
      targetId: dto.id,
      after: auditShape(dto),
    });
    const started = Date.parse(dto.startsAt) <= now.getTime();
    const notEnded = dto.endsAt === null || Date.parse(dto.endsAt) > now.getTime();
    if (started && notEnded) {
      await ctx.jobs.emitNew(tx, 'announcement.published', { announcementId: dto.id }, { actorId: actor.userId });
    }
    await afterWrite(ctx, tx, 'announcement created');
    return dto;
  });
}

/** `PUT /admin/announcements/:id`. */
export async function updateAnnouncement(ctx: Ctx, id: number, input: AnnouncementInput): Promise<Announcement> {
  await assertStaff(ctx, 'admin.announcements');
  const { messages, href } = validateInput(input);
  return ctx.db.transaction(async (tx) => {
    const before = await queryOne<AnnouncementRow>(
      tx,
      sql`SELECT ${COLUMNS} FROM "Announcement" WHERE "id" = ${id} FOR UPDATE`,
    );
    if (!before) throw errors.notFound('Announcement');
    const row = await queryOne<AnnouncementRow>(
      tx,
      sql`UPDATE "Announcement" SET "level" = ${input.level}, "messageI18n" = ${JSON.stringify(messages)}::jsonb,
                 "href" = ${href}, "startsAt" = ${input.startsAt}::timestamptz,
                 "endsAt" = ${input.endsAt ?? null}::timestamptz, "dismissible" = ${input.dismissible}
           WHERE "id" = ${id}
       RETURNING ${COLUMNS}`,
    );
    if (!row) throw errors.notFound('Announcement');
    const dto = toDto(row);
    await recordAudit(tx, ctx, {
      action: 'announcement.update',
      targetType: 'announcement',
      targetId: id,
      before: auditShape(toDto(before)),
      after: auditShape(dto),
    });
    await afterWrite(ctx, tx, 'announcement updated');
    return dto;
  });
}

/** `DELETE /admin/announcements/:id`. */
export async function deleteAnnouncement(ctx: Ctx, id: number): Promise<void> {
  await assertStaff(ctx, 'admin.announcements');
  await ctx.db.transaction(async (tx) => {
    const before = await queryOne<AnnouncementRow>(
      tx,
      sql`DELETE FROM "Announcement" WHERE "id" = ${id} RETURNING ${COLUMNS}`,
    );
    if (!before) throw errors.notFound('Announcement');
    await recordAudit(tx, ctx, {
      action: 'announcement.delete',
      targetType: 'announcement',
      targetId: id,
      before: auditShape(toDto(before)),
    });
    // Signals already sent for it are withdrawn by nobody: they stay in the users' history.
    await afterWrite(ctx, tx, 'announcement deleted');
  });
}
