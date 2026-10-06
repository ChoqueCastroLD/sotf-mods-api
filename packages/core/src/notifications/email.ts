/**
 * Notification emails (PLAN §7.3): templates, payload schemas and delivery through "EmailOutbox".
 *
 * Notification emails are written to the same transactional outbox as the account emails (WP-30)
 * and delivered by the notification jobs themselves (digests, legacy mentions, creator report):
 * the job that writes the row delivers it right after the commit, and every run of the 10-minute
 * digest retries rows left in `queued`/`retry` (and reclaims rows stuck in `sending`). Delivery has
 * the same guarantees as `deliverOutboxEmail`: claim → render → send with
 * `Idempotency-Key: outbox-<id>` → `sent`/`suppressed`, `retry` or `failed`.
 *
 * Every notification email carries `List-Unsubscribe` + `List-Unsubscribe-Post` (RFC 8058).
 */
import { NotificationType } from '@sotf/contracts/notifications';
import { type Database, emailOutbox } from '@sotf/db';
import { and, eq, inArray, like, lt, lte, or, sql } from 'drizzle-orm';
import { z } from 'zod';
import type { RenderedMessage } from '../email/deliver.ts';
import { EmailDeliveryError, type EmailTransport } from '../email/transports.ts';
import type { Clock } from '../kernel/clock.ts';
import type { Logger } from '../kernel/logger.ts';

const Url = z.string().url();
const Name = z.string().min(1).max(64);

const Unsubscribe = z.object({ oneClick: Url, page: Url });

export const SignalEmailItem = z.object({
  type: NotificationType,
  count: z.number().int().min(1),
  actorName: z.string().max(64).nullable(),
  modName: z.string().max(200).nullable(),
  /** Absolute URL of the target, when it has one. */
  url: Url.nullable(),
  excerpt: z.string().max(400).nullable(),
  version: z.string().max(64).nullable(),
  rating: z.number().int().min(1).max(5).nullable(),
  status: z.string().max(40).nullable(),
  /** Moderator's reason of a status change. */
  reason: z.string().max(500).nullable(),
  build: z.string().max(80).nullable(),
  threshold: z.number().int().positive().nullable(),
  awardKind: z.string().max(40).nullable(),
  badgeKey: z.string().max(80).nullable(),
  reportAction: z.string().max(20).nullable(),
  createdAt: z.string().datetime({ offset: true }),
});
export type SignalEmailItem = z.infer<typeof SignalEmailItem>;

export const CreatorWeeklyMod = z.object({
  name: z.string().max(200),
  url: Url.nullable(),
  downloads: z.number().int().nonnegative(),
  followers: z.number().int().nonnegative(),
  comments: z.number().int().nonnegative(),
  reviews: z.number().int().nonnegative(),
});

/** Payload schema of every notification template (the outbox `template` column). */
export const NOTIFICATION_EMAIL_PAYLOADS = {
  /** Instant batch, daily or weekly digest of signals. */
  'notify.signals': z.object({
    displayName: Name,
    cadence: z.enum(['instant', 'daily', 'weekly']),
    items: z.array(SignalEmailItem).min(1).max(50),
    /** Signals beyond `items` (shown as "and N more"). */
    moreCount: z.number().int().nonnegative(),
    signalsUrl: Url,
    unsubscribe: Unsubscribe,
  }),
  /** Monday report of a creator: "your mods: +X downloads…". */
  'notify.creator_weekly': z.object({
    displayName: Name,
    weekStart: z.string().date(),
    weekEnd: z.string().date(),
    totals: z.object({
      downloads: z.number().int().nonnegative(),
      downloadsPrevious: z.number().int().nonnegative(),
      followers: z.number().int().nonnegative(),
      comments: z.number().int().nonnegative(),
      reviews: z.number().int().nonnegative(),
    }),
    mods: z.array(CreatorWeeklyMod).max(10),
    basecampUrl: Url,
    unsubscribe: Unsubscribe,
  }),
} as const;

export type NotificationEmailTemplate = keyof typeof NOTIFICATION_EMAIL_PAYLOADS;
export type NotificationEmailPayload<T extends NotificationEmailTemplate> = z.infer<
  (typeof NOTIFICATION_EMAIL_PAYLOADS)[T]
>;
export const NOTIFICATION_EMAIL_TEMPLATES = Object.keys(NOTIFICATION_EMAIL_PAYLOADS) as [
  NotificationEmailTemplate,
  ...NotificationEmailTemplate[],
];

export function isNotificationEmailTemplate(value: string): value is NotificationEmailTemplate {
  return Object.hasOwn(NOTIFICATION_EMAIL_PAYLOADS, value);
}

/** Renders a notification template (the worker plugs @sotf/emails in). */
export type NotificationEmailRenderer = (
  template: NotificationEmailTemplate,
  locale: string,
  payload: unknown,
) => Promise<RenderedMessage>;

export interface NotificationMailer {
  db: Database;
  transport: EmailTransport;
  render: NotificationEmailRenderer;
  /** `EMAIL_FROM`. */
  from: string;
  clock: Clock;
  log: Logger;
}

/** Attempts per row before it becomes `failed` (same budget as `email.send`). */
export const NOTIFICATION_EMAIL_MAX_ATTEMPTS = 7;
/** A row in `sending` for longer than this belongs to a crashed worker and is claimed again. */
const STUCK_SENDING_MS = 15 * 60_000;
const TEMPLATE_PREFIX = 'notify.';

/** RFC 8058 headers of a payload. */
export function listUnsubscribeHeaders(payload: { unsubscribe: { oneClick: string } }): Record<string, string> {
  return {
    'List-Unsubscribe': `<${payload.unsubscribe.oneClick}>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  };
}

export type NotificationDeliveryOutcome = 'sent' | 'suppressed' | 'skipped' | 'retry' | 'failed';

/** Delivers one outbox row written by the notification jobs. Never throws for delivery errors. */
export async function deliverNotificationEmail(
  mailer: NotificationMailer,
  outboxId: number,
): Promise<NotificationDeliveryOutcome> {
  const now = mailer.clock.now();
  const stuck = new Date(now.getTime() - STUCK_SENDING_MS);
  const [row] = await mailer.db
    .update(emailOutbox)
    .set({ status: 'sending', attempts: sql`${emailOutbox.attempts} + 1`, error: null, sendAfter: now })
    .where(
      and(
        eq(emailOutbox.id, outboxId),
        like(emailOutbox.template, `${TEMPLATE_PREFIX}%`),
        or(
          inArray(emailOutbox.status, ['queued', 'retry']),
          and(eq(emailOutbox.status, 'sending'), lt(emailOutbox.sendAfter, stuck)),
        ),
      ),
    )
    .returning();
  if (!row) return 'skipped';

  const fail = async (message: string, final: boolean) => {
    await mailer.db
      .update(emailOutbox)
      .set({ status: final ? 'failed' : 'retry', error: message.slice(0, 500) })
      .where(eq(emailOutbox.id, outboxId));
  };

  if (!isNotificationEmailTemplate(row.template)) {
    await fail(`unknown template ${row.template}`, true);
    return 'failed';
  }
  let rendered: RenderedMessage;
  let headers: Record<string, string>;
  try {
    const payload = NOTIFICATION_EMAIL_PAYLOADS[row.template].parse(row.payload);
    rendered = await mailer.render(row.template, row.locale, payload);
    headers = { ...listUnsubscribeHeaders(payload), ...rendered.headers };
  } catch (error) {
    await fail(`render: ${(error as Error).message}`, true);
    mailer.log.error({ outboxId, template: row.template, err: error }, 'notification email render failed');
    return 'failed';
  }
  try {
    const result = await mailer.transport.send({
      from: mailer.from,
      to: row.toEmail,
      subject: rendered.subject,
      html: rendered.html,
      text: rendered.text,
      headers,
      idempotencyKey: `outbox-${row.id}`,
    });
    await mailer.db
      .update(emailOutbox)
      .set({
        status: result.suppressed ? 'suppressed' : 'sent',
        providerId: result.providerId,
        sentAt: result.suppressed ? null : mailer.clock.now(),
      })
      .where(eq(emailOutbox.id, outboxId));
    return result.suppressed ? 'suppressed' : 'sent';
  } catch (error) {
    const permanent = error instanceof EmailDeliveryError && error.permanent;
    const final = permanent || row.attempts >= NOTIFICATION_EMAIL_MAX_ATTEMPTS;
    await fail((error as Error).message, final);
    mailer.log.warn({ outboxId, template: row.template, permanent, final }, 'notification email delivery failed');
    return final ? 'failed' : 'retry';
  }
}

/**
 * Retries notification rows waiting in the outbox (`queued`/`retry`, or stuck in `sending`), with
 * an exponential pause between attempts (1, 2, 4… minutes, at most an hour).
 */
export async function retryPendingNotificationEmails(
  mailer: NotificationMailer,
  limit = 200,
): Promise<Record<NotificationDeliveryOutcome, number>> {
  const now = mailer.clock.now();
  const stuck = new Date(now.getTime() - STUCK_SENDING_MS);
  const rows = await mailer.db
    .select({ id: emailOutbox.id })
    .from(emailOutbox)
    .where(
      and(
        like(emailOutbox.template, `${TEMPLATE_PREFIX}%`),
        or(
          and(
            inArray(emailOutbox.status, ['queued', 'retry']),
            lte(
              sql`${emailOutbox.sendAfter} + least(interval '1 hour', interval '1 minute' * power(2, greatest(${emailOutbox.attempts} - 1, 0)))`,
              now,
            ),
          ),
          and(eq(emailOutbox.status, 'sending'), lt(emailOutbox.sendAfter, stuck)),
        ),
      ),
    )
    .orderBy(emailOutbox.id)
    .limit(limit);
  const outcomes: Record<NotificationDeliveryOutcome, number> = {
    sent: 0,
    suppressed: 0,
    skipped: 0,
    retry: 0,
    failed: 0,
  };
  for (const { id } of rows) outcomes[await deliverNotificationEmail(mailer, id)] += 1;
  return outcomes;
}
