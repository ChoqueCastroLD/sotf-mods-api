/**
 * Transactional outbox for email (PLAN §6.4 "EmailOutbox", §2.9): a service writes the row and
 * enqueues `email.send {outboxId}` **in the same transaction**, so an email exists if and only if
 * the business change commits, and the worker retries delivery independently of the request.
 *
 * Statuses: `queued` → `sending` → `sent` · `suppressed` (allowlist transport) · `failed` (retries
 * exhausted) · `retry` (a failed attempt that pg-boss will run again). `dedupeKey` makes a queue
 * call idempotent (a duplicate key is ignored and returns the existing id).
 */
import type { Executor } from '@sotf/db';
import { emailOutbox } from '@sotf/db';
import { eq } from 'drizzle-orm';
import type { Jobs } from '../kernel/jobs.ts';
import { type EmailTemplate, type EmailTemplatePayload, parseTemplatePayload } from './templates.ts';

export const OUTBOX_STATUSES = ['queued', 'sending', 'retry', 'sent', 'suppressed', 'failed'] as const;
export type OutboxStatus = (typeof OUTBOX_STATUSES)[number];

export interface QueueEmailInput<T extends EmailTemplate> {
  userId: number | null;
  to: string;
  template: T;
  locale: string;
  payload: EmailTemplatePayload<T>;
  /** Idempotency key (e.g. `verify:<tokenId>`). */
  dedupeKey?: string;
  /** Deliver no earlier than this instant. */
  sendAfter?: Date;
}

/**
 * Inserts the outbox row and enqueues its delivery. Pass the transaction of the business write.
 * Returns the outbox id (the existing one when `dedupeKey` was already queued).
 */
export async function queueEmail<T extends EmailTemplate>(
  tx: Executor,
  jobs: Jobs,
  input: QueueEmailInput<T>,
): Promise<number> {
  const payload = parseTemplatePayload(input.template, input.payload);
  const [row] = await tx
    .insert(emailOutbox)
    .values({
      userId: input.userId,
      toEmail: input.to.trim(),
      template: input.template,
      locale: input.locale,
      payload: payload as Record<string, unknown>,
      dedupeKey: input.dedupeKey ?? null,
      status: 'queued',
      ...(input.sendAfter ? { sendAfter: input.sendAfter } : {}),
    })
    .onConflictDoNothing({ target: emailOutbox.dedupeKey })
    .returning({ id: emailOutbox.id });
  if (!row) {
    const [existing] = await tx
      .select({ id: emailOutbox.id })
      .from(emailOutbox)
      .where(eq(emailOutbox.dedupeKey, input.dedupeKey as string));
    if (!existing) throw new Error('email outbox: dedupe conflict without an existing row');
    return existing.id;
  }
  await jobs.enqueue(
    'email.send',
    { outboxId: row.id },
    { tx, ...(input.sendAfter ? { startAfter: input.sendAfter } : {}) },
  );
  return row.id;
}
