/**
 * Delivery of one outbox row (the `email.send` job, PLAN §2.9). Idempotent and safe under retries:
 *
 * 1. Claim: `queued`/`retry` → `sending` (attempts + 1) in one UPDATE. A row left in `sending` by
 *    a crashed worker is reclaimed only on a pg-boss retry (`reclaimSending`). `sent`,
 *    `suppressed` and `failed` rows are final: the job returns without sending again.
 * 2. Render the template in the row's locale (validated payload) and send it.
 * 3. `sent` (+ provider id) / `suppressed`; on error `retry` (re-thrown so pg-boss backs off) or
 *    `failed` for permanent errors and the last attempt.
 *
 * Resend receives `Idempotency-Key: outbox-<id>`, so a retry after an ambiguous failure does not
 * produce a second email.
 */
import { type Database, emailOutbox } from '@sotf/db';
import { and, eq, inArray, sql } from 'drizzle-orm';
import type { Clock } from '../kernel/clock.ts';
import type { Logger } from '../kernel/logger.ts';
import { type EmailTemplate, isEmailTemplate, parseTemplatePayload } from './templates.ts';
import { EmailDeliveryError, type EmailTransport } from './transports.ts';

export interface RenderedMessage {
  subject: string;
  html: string;
  text: string;
  headers?: Record<string, string>;
}

/** Renders a template (the worker plugs @sotf/emails in). */
export type EmailRenderer = (template: EmailTemplate, locale: string, payload: unknown) => Promise<RenderedMessage>;

export interface DeliverDeps {
  db: Database;
  transport: EmailTransport;
  render: EmailRenderer;
  /** `EMAIL_FROM` (`SOTF Mods <noreply@sotf-mods.com>`). */
  from: string;
  clock: Clock;
  log: Logger;
}

export interface DeliverOptions {
  /** True on pg-boss retries: a row stuck in `sending` may be claimed again. */
  reclaimSending?: boolean;
  /** True on the last attempt: a failure becomes final (`failed`) instead of `retry`. */
  lastAttempt?: boolean;
}

export type DeliverOutcome = 'sent' | 'suppressed' | 'skipped' | 'failed';

export async function deliverOutboxEmail(
  deps: DeliverDeps,
  outboxId: number,
  options: DeliverOptions = {},
): Promise<DeliverOutcome> {
  const claimable = options.reclaimSending ? ['queued', 'retry', 'sending'] : ['queued', 'retry'];
  const [row] = await deps.db
    .update(emailOutbox)
    .set({ status: 'sending', attempts: sql`${emailOutbox.attempts} + 1`, error: null })
    .where(and(eq(emailOutbox.id, outboxId), inArray(emailOutbox.status, claimable)))
    .returning();
  if (!row) {
    deps.log.debug({ outboxId }, 'email already handled');
    return 'skipped';
  }

  const fail = async (message: string, final: boolean): Promise<void> => {
    await deps.db
      .update(emailOutbox)
      .set({ status: final ? 'failed' : 'retry', error: message.slice(0, 500) })
      .where(eq(emailOutbox.id, outboxId));
  };

  if (!isEmailTemplate(row.template)) {
    await fail(`unknown template ${row.template}`, true);
    deps.log.error({ outboxId, template: row.template }, 'email with an unknown template');
    return 'failed';
  }

  let rendered: RenderedMessage;
  try {
    const payload = parseTemplatePayload(row.template, row.payload);
    rendered = await deps.render(row.template, row.locale, payload);
  } catch (error) {
    await fail(`render: ${(error as Error).message}`, true);
    deps.log.error({ outboxId, template: row.template, err: error }, 'email render failed');
    return 'failed';
  }

  try {
    const result = await deps.transport.send({
      from: deps.from,
      to: row.toEmail,
      subject: rendered.subject,
      html: rendered.html,
      text: rendered.text,
      ...(rendered.headers ? { headers: rendered.headers } : {}),
      idempotencyKey: `outbox-${row.id}`,
    });
    await deps.db
      .update(emailOutbox)
      .set({
        status: result.suppressed ? 'suppressed' : 'sent',
        providerId: result.providerId,
        sentAt: result.suppressed ? null : deps.clock.now(),
      })
      .where(eq(emailOutbox.id, outboxId));
    deps.log.info(
      { outboxId, template: row.template, transport: deps.transport.name, suppressed: Boolean(result.suppressed) },
      'email delivered',
    );
    return result.suppressed ? 'suppressed' : 'sent';
  } catch (error) {
    const permanent = error instanceof EmailDeliveryError && error.permanent;
    const final = permanent || Boolean(options.lastAttempt);
    await fail((error as Error).message, final);
    deps.log.warn({ outboxId, template: row.template, permanent, final }, 'email delivery failed');
    if (final) return 'failed';
    throw error;
  }
}
