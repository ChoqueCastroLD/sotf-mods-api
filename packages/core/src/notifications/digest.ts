/**
 * Email of signals (PLAN §7.3, §2.9 `notifications.digest`): every signal with a pending email
 * (`emailedAt IS NULL`) is mailed according to the recipient's **current** preference for its type:
 *
 * - `instant`: the `10m` run (every 10 minutes, plus the 30-second flush that instant signals
 *   schedule) sends one email per user with everything pending;
 * - `daily` (07:00 UTC) and `weekly` (Monday 08:00 UTC): one digest per user;
 * - `off` (changed after the signal was created), already read, or an address that cannot receive
 *   mail (deleted, banned, unverified): the signal is marked handled and nothing is sent.
 *
 * Each email is an "EmailOutbox" row written in the same transaction that marks its signals
 * `emailedAt`, then delivered right after the commit (retried by later runs if delivery fails).
 * Signals of the legacy mention queue (B18) are mailed to unverified addresses too, as the
 * legacy cron did.
 */
import { createHash } from 'node:crypto';
import type { EmailFrequency, NotificationType } from '@sotf/contracts/notifications';
import { emailOutbox, notification, user, withTx } from '@sotf/db';
import { and, asc, eq, gt, inArray, isNull } from 'drizzle-orm';
import { displayNameOf, localeOf } from '../auth/users.ts';
import {
  deliverNotificationEmail,
  type NotificationEmailPayload,
  type NotificationMailer,
  type SignalEmailItem,
} from './email.ts';
import { forcedEmail, isNotificationType, preferenceMatrix } from './preferences.ts';
import { loadUserRefs } from './refs.ts';
import { createUnsubscribeToken, type UnsubscribeScope, unsubscribeUrls } from './unsubscribe.ts';

export type DigestCadence = Exclude<EmailFrequency, 'off'>;

/** How far back each run looks for pending signals. */
const LOOKBACK_DAYS: Record<DigestCadence, number> = { instant: 3, daily: 3, weekly: 9 };
/** Items listed in one email (the rest is summarised as "and N more"). */
export const MAX_EMAIL_ITEMS = 20;

export interface DigestDeps extends NotificationMailer {
  /** `PUBLIC_SITE_URL`. */
  siteUrl: string;
  /** `APP_SECRET` (unsubscribe tokens). */
  appSecret: string;
}

export interface DigestResult {
  users: number;
  emails: number;
  signals: number;
  dropped: number;
  delivered: Record<string, number>;
}

export function cadenceOfRun(frequency: '10m' | 'daily' | 'weekly'): DigestCadence {
  return frequency === '10m' ? 'instant' : frequency;
}

/** `https://sotf-mods.com` + `/es` (non-English) + path. */
export function localizedUrl(siteUrl: string, locale: string, path: string): string {
  const base = siteUrl.replace(/\/+$/, '');
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${base}${prefix}${path === '/' && prefix ? '' : path}`;
}

function str(value: unknown): string | null {
  return typeof value === 'string' && value !== '' ? value : null;
}

function int(value: unknown): number | null {
  return typeof value === 'number' && Number.isInteger(value) ? value : null;
}

interface PendingRow {
  id: number;
  type: string;
  actorId: number | null;
  data: Record<string, unknown>;
  readAt: Date | null;
  createdAt: Date;
}

function toItem(row: PendingRow, locale: string, siteUrl: string, actorName: string | null): SignalEmailItem {
  const d = row.data;
  const path = str(d.targetPath);
  const rating = int(d.rating);
  return {
    type: row.type as NotificationType,
    count: Math.max(1, int(d.count) ?? 1),
    actorName,
    modName: str(d.modName) ?? (row.type === 'patch.breaking_build' ? null : str(d.targetTitle)),
    url: path?.startsWith('/') ? localizedUrl(siteUrl, locale, path) : null,
    excerpt: str(d.excerpt)?.slice(0, 400) ?? null,
    version: str(d.version),
    rating: rating !== null && rating >= 1 && rating <= 5 ? rating : null,
    status: str(d.status),
    reason: str(d.reason)?.slice(0, 500) ?? null,
    build: str(d.build),
    threshold: int(d.threshold),
    awardKind: str(d.awardKind),
    badgeKey: str(d.badgeKey),
    reportAction: str(d.action),
    createdAt: row.createdAt.toISOString(),
  };
}

/** Users with at least one pending signal in the look-back window. */
async function usersWithPending(deps: DigestDeps, since: Date): Promise<number[]> {
  const rows = await deps.db
    .selectDistinct({ userId: notification.userId })
    .from(notification)
    .where(and(isNull(notification.emailedAt), gt(notification.createdAt, since)));
  return rows.map((r) => r.userId).sort((a, b) => a - b);
}

/**
 * Sends the emails of one cadence. Returns counters (for logs and tests). Safe to run
 * concurrently: pending rows are locked with `SKIP LOCKED` and each email has a dedupe key.
 */
export async function sendSignalEmails(deps: DigestDeps, cadence: DigestCadence): Promise<DigestResult> {
  const now = deps.clock.now();
  const since = new Date(now.getTime() - LOOKBACK_DAYS[cadence] * 24 * 3600 * 1000);
  const result: DigestResult = { users: 0, emails: 0, signals: 0, dropped: 0, delivered: {} };
  for (const userId of await usersWithPending(deps, since)) {
    const outboxId = await withTx(deps.db, async (tx) => {
      const pending = (await tx
        .select({
          id: notification.id,
          type: notification.type,
          actorId: notification.actorId,
          data: notification.data,
          readAt: notification.readAt,
          createdAt: notification.createdAt,
        })
        .from(notification)
        .where(and(eq(notification.userId, userId), isNull(notification.emailedAt), gt(notification.createdAt, since)))
        .orderBy(asc(notification.createdAt), asc(notification.id))
        .for('update', { skipLocked: true })) as PendingRow[];
      if (pending.length === 0) return null;

      const [account] = await tx
        .select({
          email: user.email,
          name: user.name,
          displayName: user.displayName,
          slug: user.slug,
          settings: user.settings,
          emailVerifiedAt: user.emailVerifiedAt,
          deletedAt: user.deletedAt,
          bannedAt: user.bannedAt,
        })
        .from(user)
        .where(eq(user.id, userId));
      const matrix = await preferenceMatrix(tx, userId);
      const drop: number[] = [];
      const send: PendingRow[] = [];
      for (const row of pending) {
        if (!isNotificationType(row.type)) {
          drop.push(row.id);
          continue;
        }
        const forced = forcedEmail(row.type, row.data);
        const wanted: EmailFrequency = forced ? 'instant' : (matrix.get(row.type)?.email ?? 'off');
        if (wanted === 'off' || (row.readAt !== null && !forced)) {
          drop.push(row.id);
          continue;
        }
        if (wanted !== cadence) continue;
        const legacy = row.data.legacy === true;
        const reachable =
          account && !account.deletedAt && !account.bannedAt && (account.emailVerifiedAt !== null || legacy);
        if (!reachable) {
          drop.push(row.id);
          continue;
        }
        send.push(row);
      }
      if (drop.length > 0) {
        await tx.update(notification).set({ emailedAt: now }).where(inArray(notification.id, drop));
        result.dropped += drop.length;
      }
      if (send.length === 0 || !account) return null;

      const locale = localeOf(account);
      const actors = await loadUserRefs(
        tx,
        send.map((r) => r.actorId).filter((id): id is number => id !== null),
      );
      // Newest first in the email.
      const ordered = [...send].reverse();
      const items = ordered
        .slice(0, MAX_EMAIL_ITEMS)
        .map((row) =>
          toItem(row, locale, deps.siteUrl, row.actorId !== null ? (actors.get(row.actorId)?.name ?? null) : null),
        );
      const types = new Set(send.map((r) => r.type));
      const scope: UnsubscribeScope =
        types.size === 1 ? `type:${[...types][0] as NotificationType}` : `cadence:${cadence}`;
      const token = createUnsubscribeToken(deps.appSecret, {
        userId,
        scope,
        iat: Math.floor(now.getTime() / 1000),
      });
      const payload: NotificationEmailPayload<'notify.signals'> = {
        displayName: displayNameOf(account),
        cadence,
        items,
        moreCount: Math.max(0, send.length - items.length),
        signalsUrl: localizedUrl(deps.siteUrl, locale, '/signals'),
        unsubscribe: unsubscribeUrls(deps.siteUrl, token, locale),
      };
      const fingerprint = createHash('sha256')
        .update(send.map((r) => `${r.id}:${String(r.data.count ?? 1)}:${r.createdAt.toISOString()}`).join(','))
        .digest('hex')
        .slice(0, 32);
      const [inserted] = await tx
        .insert(emailOutbox)
        .values({
          userId,
          toEmail: account.email.trim(),
          template: 'notify.signals',
          locale,
          payload: payload as unknown as Record<string, unknown>,
          dedupeKey: `notify:${cadence}:${userId}:${fingerprint}`,
          status: 'queued',
          sendAfter: now,
        })
        .onConflictDoNothing({ target: emailOutbox.dedupeKey })
        .returning({ id: emailOutbox.id });
      await tx
        .update(notification)
        .set({ emailedAt: now })
        .where(
          inArray(
            notification.id,
            send.map((r) => r.id),
          ),
        );
      result.signals += send.length;
      result.users += 1;
      return inserted?.id ?? null;
    });
    if (outboxId !== null) {
      result.emails += 1;
      const outcome = await deliverNotificationEmail(deps, outboxId);
      result.delivered[outcome] = (result.delivered[outcome] ?? 0) + 1;
    }
  }
  return result;
}
