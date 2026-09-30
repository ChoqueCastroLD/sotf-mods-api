/**
 * Configuration shared by the notification job groups (notifications, digests, discord,
 * legacy-mentions): the email transport and sender, the public URLs and the coexistence flag.
 * Tests pass explicit options; production reads the worker environment once, lazily.
 */
import { createTransport, type EmailTransport } from '@sotf/core/email/index';
import type { NotificationEmailRenderer, NotificationMailer } from '@sotf/core/notifications/index';
import { renderNotificationEmail } from '@sotf/emails/notifications/index';
import type { JobContext } from '../../define-job.ts';
import { parseWorkerEnv } from '../../env.ts';

export interface NotificationJobOptions {
  transport: EmailTransport;
  /** `EMAIL_FROM`. */
  from: string;
  /** `PUBLIC_SITE_URL`. */
  siteUrl: string;
  /** `R2_PUBLIC_BASE_URL` (avatars in Discord embeds). */
  mediaBaseUrl: string;
  /** `LEGACY_COEXIST`: while true the legacy cron owns "PendingMention". */
  legacyCoexist: boolean;
  /** Discord webhook HTTP client (tests inject a fake). */
  fetch?: typeof fetch;
}

export type NotificationOptionsSource = NotificationJobOptions | (() => NotificationJobOptions);

export function notificationOptionsFromEnv(): NotificationJobOptions {
  const env = parseWorkerEnv();
  return {
    transport: createTransport(env),
    from: env.EMAIL_FROM,
    siteUrl: env.PUBLIC_SITE_URL,
    mediaBaseUrl: env.R2_PUBLIC_BASE_URL,
    legacyCoexist: env.LEGACY_COEXIST,
  };
}

/** Resolves the options once (the environment is read on the first job, not at import). */
export function lazyOptions(source?: NotificationOptionsSource): () => NotificationJobOptions {
  let resolved: NotificationJobOptions | null = null;
  return () => {
    resolved ??= typeof source === 'function' ? source() : (source ?? notificationOptionsFromEnv());
    return resolved;
  };
}

export function notificationRenderer(siteUrl: string): NotificationEmailRenderer {
  return (template, locale, payload) => renderNotificationEmail(template, locale, payload, siteUrl);
}

/** The mailer + URLs the core notification services need, for one job run. */
export function mailerFor(
  options: NotificationJobOptions,
  { ctx }: JobContext,
): NotificationMailer & { siteUrl: string; appSecret: string } {
  return {
    db: ctx.db,
    transport: options.transport,
    render: notificationRenderer(options.siteUrl),
    from: options.from,
    clock: ctx.clock,
    log: ctx.log,
    siteUrl: options.siteUrl,
    appSecret: ctx.appSecret,
  };
}
