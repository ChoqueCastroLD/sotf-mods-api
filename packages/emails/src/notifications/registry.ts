/**
 * Registry of the notification templates (WP-43) keyed like the outbox `template` column, and
 * `renderNotificationEmail()` used by the worker's notification jobs. Payloads are validated by
 * @sotf/core (`NOTIFICATION_EMAIL_PAYLOADS`) before rendering.
 */
import { isLocale, type Locale } from '@sotf/i18n';
import { creatorWeeklyEmail } from '../creator/weekly-report.ts';
import { renderEmail } from '../layout/render.ts';
import { type NotificationTemplateContext, type NotificationTemplateOutput, signalsEmail } from './signals-email.ts';

// biome-ignore lint/suspicious/noExplicitAny: payloads are validated by @sotf/core before rendering
type TemplateFn = (payload: any, context: NotificationTemplateContext) => NotificationTemplateOutput;

export const NOTIFICATION_EMAIL_RENDERERS = {
  'notify.signals': signalsEmail,
  'notify.creator_weekly': creatorWeeklyEmail,
} as const satisfies Record<string, TemplateFn>;

export type NotificationEmailTemplate = keyof typeof NOTIFICATION_EMAIL_RENDERERS;

export function isNotificationEmailTemplate(value: string): value is NotificationEmailTemplate {
  return Object.hasOwn(NOTIFICATION_EMAIL_RENDERERS, value);
}

export interface RenderedNotificationEmail {
  subject: string;
  html: string;
  text: string;
}

/** Renders a notification template in `locale` (unknown locales fall back to English). */
export async function renderNotificationEmail(
  template: NotificationEmailTemplate,
  locale: string,
  payload: unknown,
  siteUrl: string,
): Promise<RenderedNotificationEmail> {
  const resolved: Locale = isLocale(locale) ? locale : 'en';
  const fn: TemplateFn = NOTIFICATION_EMAIL_RENDERERS[template];
  const { subject, element } = fn(payload, { locale: resolved, siteUrl });
  const { html, text } = await renderEmail(element);
  return { subject, html, text };
}
