/**
 * Registry of the auth and account templates (WP-30) keyed like the outbox `template` column, and
 * `renderAccountEmail()` used by the worker's `email.send` job. Notification templates (WP-43) get
 * their own registry next to theirs; the job merges them.
 */
import { isLocale, type Locale } from '@sotf/i18n';
import {
  emailChangeConfirm,
  emailChangeNotice,
  newLogin,
  passwordChanged,
  passwordReset,
  securityChange,
  type TemplateContext,
  type TemplateOutput,
  verifyEmail,
} from '../auth/templates.ts';
import { renderEmail } from '../layout/render.ts';
import { deletionCancelled, deletionCompleted, deletionScheduled, exportReady, opsAlert } from './templates.ts';

// biome-ignore lint/suspicious/noExplicitAny: payloads are validated by @sotf/core before rendering
type TemplateFn = (payload: any, context: TemplateContext) => TemplateOutput;

export const ACCOUNT_EMAIL_TEMPLATES = {
  'auth.verify_email': verifyEmail,
  'auth.password_reset': passwordReset,
  'auth.password_changed': passwordChanged,
  'auth.email_change_confirm': emailChangeConfirm,
  'auth.email_change_notice': emailChangeNotice,
  'auth.new_login': newLogin,
  'auth.security_change': securityChange,
  'account.export_ready': exportReady,
  'account.deletion_scheduled': deletionScheduled,
  'account.deletion_cancelled': deletionCancelled,
  'account.deletion_completed': deletionCompleted,
  'ops.alert': opsAlert,
} as const satisfies Record<string, TemplateFn>;

export type AccountEmailTemplate = keyof typeof ACCOUNT_EMAIL_TEMPLATES;

export function isAccountEmailTemplate(value: string): value is AccountEmailTemplate {
  return Object.hasOwn(ACCOUNT_EMAIL_TEMPLATES, value);
}

export interface RenderedAccountEmail {
  subject: string;
  html: string;
  text: string;
}

/** Renders a template in `locale` (unknown locales fall back to English). */
export async function renderAccountEmail(
  template: AccountEmailTemplate,
  locale: string,
  payload: unknown,
  siteUrl: string,
): Promise<RenderedAccountEmail> {
  const resolved: Locale = isLocale(locale) ? locale : 'en';
  const fn: TemplateFn = ACCOUNT_EMAIL_TEMPLATES[template];
  const { subject, element } = fn(payload, { locale: resolved, siteUrl });
  const { html, text } = await renderEmail(element);
  return { subject, html, text };
}
