/**
 * Email templates known to the outbox and the payload each one needs (PLAN §7.3). Producers (core
 * services) queue `{ template, payload }`; the `email.send` job validates the payload with these
 * schemas and renders it with @sotf/emails in the recipient's locale. Payloads carry data, never
 * translated text, so a template can be fixed or re-translated before a retry.
 *
 * Groups: `auth.*` and `account.*` (WP-30). Notification templates (WP-43) are added here the same
 * way (additive).
 */
import { OPS_ALERT_KEYS } from '@sotf/contracts/admin';
import { z } from 'zod';

const Url = z.string().url();
const Name = z.string().min(1).max(64);
const Iso = z.string().datetime({ offset: true });

export const EMAIL_TEMPLATE_PAYLOADS = {
  'auth.verify_email': z.object({ displayName: Name, url: Url, expiresHours: z.number().int().positive() }),
  'auth.password_reset': z.object({ displayName: Name, url: Url, expiresMinutes: z.number().int().positive() }),
  'auth.password_changed': z.object({ displayName: Name, changedAt: Iso, resetUrl: Url, sessionsUrl: Url }),
  'auth.email_change_confirm': z.object({
    displayName: Name,
    url: Url,
    newEmail: z.string().max(254),
    expiresHours: z.number().int().positive(),
  }),
  'auth.email_change_notice': z.object({
    displayName: Name,
    newEmailMasked: z.string().max(254),
    requestedAt: Iso,
    securityUrl: Url,
  }),
  'account.export_ready': z.object({ displayName: Name, url: Url, expiresAt: Iso }),
  'account.deletion_scheduled': z.object({
    displayName: Name,
    executeAfter: Iso,
    cancelUrl: Url,
    mode: z.enum(['archive_mods', 'keep_mods_anonymous']),
  }),
  'account.deletion_cancelled': z.object({ displayName: Name, cancelledAt: Iso }),
  'account.deletion_completed': z.object({ displayName: Name }),
  /** Operator alert of PLAN §10.3 (English only: it goes to the site admins). */
  'ops.alert': z.object({
    key: z.enum(OPS_ALERT_KEYS),
    summary: z.string().max(300),
    details: z.array(z.string().max(300)).max(30),
    checkedAt: Iso,
    opsUrl: Url,
  }),
} as const;

export type EmailTemplate = keyof typeof EMAIL_TEMPLATE_PAYLOADS;
export const EMAIL_TEMPLATES = Object.keys(EMAIL_TEMPLATE_PAYLOADS) as [EmailTemplate, ...EmailTemplate[]];
export type EmailTemplatePayload<T extends EmailTemplate> = z.infer<(typeof EMAIL_TEMPLATE_PAYLOADS)[T]>;

export function isEmailTemplate(value: string): value is EmailTemplate {
  return Object.hasOwn(EMAIL_TEMPLATE_PAYLOADS, value);
}

/** Validates a stored payload for its template (throws a ZodError). */
export function parseTemplatePayload<T extends EmailTemplate>(template: T, payload: unknown): EmailTemplatePayload<T> {
  return EMAIL_TEMPLATE_PAYLOADS[template].parse(payload) as EmailTemplatePayload<T>;
}

/** `a***@example.com`: an address shown to its previous owner without disclosing it. */
export function maskEmail(email: string): string {
  const at = email.lastIndexOf('@');
  if (at <= 0) return '***';
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  return `${local.slice(0, 1)}***@${domain}`;
}
