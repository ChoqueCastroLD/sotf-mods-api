/**
 * Email job group (WP-30, PLAN §2.9, §7.3): `email.send` delivers one "EmailOutbox" row through the
 * configured transport (`EMAIL_TRANSPORT`: resend | mailpit | allowlist), rendering the template in
 * the recipient's locale with @sotf/emails. Retries back off (queue config: 6 retries); permanent
 * failures and the last attempt mark the row `failed`.
 *
 * Templates: the auth + account registry (WP-30). Notification templates (WP-43) are added to
 * `renderTemplate` the same way.
 */
import { queueConfig } from '@sotf/core';
import { createTransport, deliverOutboxEmail, type EmailRenderer, type EmailTransport } from '@sotf/core/email/index';
import { isAccountEmailTemplate, renderAccountEmail } from '@sotf/emails/account/index';
import { defineJob, defineJobGroup, type JobGroup } from '../../define-job.ts';
import type { WorkerEnv } from '../../env.ts';
import type { WorkerServices } from '../../services.ts';

export interface EmailJobOptions {
  transport: EmailTransport;
  /** `EMAIL_FROM`. */
  from: string;
  /** `PUBLIC_SITE_URL` (logo and footer links). */
  siteUrl: string;
}

/** Renders any known template (auth + account for now). */
export function templateRenderer(siteUrl: string): EmailRenderer {
  return async (template, locale, payload) => {
    if (isAccountEmailTemplate(template)) return renderAccountEmail(template, locale, payload, siteUrl);
    throw new Error(`no renderer for email template ${template}`);
  };
}

function optionsFromEnv(env: WorkerEnv): EmailJobOptions {
  return { transport: createTransport(env), from: env.EMAIL_FROM, siteUrl: env.PUBLIC_SITE_URL };
}

export function createEmailJobs(options?: EmailJobOptions | (() => EmailJobOptions)): JobGroup {
  let resolved: EmailJobOptions | null = null;
  const get = (services: WorkerServices): EmailJobOptions => {
    resolved ??= typeof options === 'function' ? options() : (options ?? optionsFromEnv(services.env));
    return resolved;
  };
  const retryLimit = queueConfig('email.send').retryLimit ?? 0;
  return defineJobGroup({
    name: 'email',
    jobs: [
      defineJob({
        queue: 'email.send',
        handler: async (data, { ctx, job, services }) => {
          const { transport, from, siteUrl } = get(services);
          return deliverOutboxEmail(
            { db: ctx.db, transport, render: templateRenderer(siteUrl), from, clock: ctx.clock, log: ctx.log },
            data.outboxId,
            { reclaimSending: job.retryCount > 0, lastAttempt: job.retryCount >= retryLimit },
          );
        },
      }),
    ],
  });
}

export default createEmailJobs();
