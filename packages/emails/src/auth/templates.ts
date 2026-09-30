/**
 * Authentication emails (WP-30, T0-13): verification, password reset, password changed, email
 * change confirmation (new address) and notice (old address). Each template returns its subject
 * and element; `renderTemplate` (../account/registry.ts) renders them with `renderEmail`.
 * Payload shapes mirror `EMAIL_TEMPLATE_PAYLOADS` of @sotf/core (validated before rendering).
 */
import type { Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { createElement as h, type ReactElement } from 'react';
import { ActionEmail, emailDateTime } from './action-email.ts';

export interface TemplateContext {
  locale: Locale;
  siteUrl: string;
}

export interface TemplateOutput {
  subject: string;
  element: ReactElement;
}

export interface VerifyEmailPayload {
  displayName: string;
  url: string;
  expiresHours: number;
}

export function verifyEmail(p: VerifyEmailPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_verify_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_verify_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_verify_heading({}, o),
      paragraphs: [m.emails_auth_verify_body({}, o)],
      action: { label: m.emails_auth_verify_button({}, o), url: p.url },
      notes: [m.emails_auth_link_expiry_hours({ hours: p.expiresHours }, o), m.emails_auth_ignore({}, o)],
    }),
  };
}

export interface PasswordResetPayload {
  displayName: string;
  url: string;
  expiresMinutes: number;
}

export function passwordReset(p: PasswordResetPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_reset_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_reset_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_reset_heading({}, o),
      paragraphs: [m.emails_auth_reset_body({}, o)],
      action: { label: m.emails_auth_reset_button({}, o), url: p.url },
      notes: [m.emails_auth_reset_expiry({ minutes: p.expiresMinutes }, o), m.emails_auth_ignore({}, o)],
    }),
  };
}

export interface PasswordChangedPayload {
  displayName: string;
  changedAt: string;
  resetUrl: string;
  sessionsUrl: string;
}

export function passwordChanged(p: PasswordChangedPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_password_changed_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_password_changed_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_password_changed_heading({}, o),
      paragraphs: [
        m.emails_auth_password_changed_body({ when: emailDateTime(c.locale, p.changedAt) }, o),
        m.emails_auth_password_changed_not_you({}, o),
      ],
      action: { label: m.emails_auth_password_changed_button({}, o), url: p.resetUrl },
      secondaryLink: { label: m.emails_auth_review_sessions({}, o), url: p.sessionsUrl },
    }),
  };
}

export interface EmailChangeConfirmPayload {
  displayName: string;
  url: string;
  newEmail: string;
  expiresHours: number;
}

export function emailChangeConfirm(p: EmailChangeConfirmPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_email_change_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_email_change_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_email_change_heading({}, o),
      paragraphs: [m.emails_auth_email_change_body({ email: p.newEmail }, o)],
      action: { label: m.emails_auth_email_change_button({}, o), url: p.url },
      notes: [m.emails_auth_link_expiry_hours({ hours: p.expiresHours }, o), m.emails_auth_ignore({}, o)],
    }),
  };
}

export interface EmailChangeNoticePayload {
  displayName: string;
  newEmailMasked: string;
  requestedAt: string;
  securityUrl: string;
}

export function emailChangeNotice(p: EmailChangeNoticePayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  return {
    subject: m.emails_auth_email_notice_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_email_notice_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_email_notice_heading({}, o),
      paragraphs: [
        m.emails_auth_email_notice_body({ when: emailDateTime(c.locale, p.requestedAt), email: p.newEmailMasked }, o),
        m.emails_auth_email_notice_not_you({}, o),
      ],
      action: { label: m.emails_auth_email_notice_button({}, o), url: p.securityUrl },
    }),
  };
}

export interface NewLoginPayload {
  displayName: string;
  device: string | null;
  country: string | null;
  signedInAt: string;
  sessionsUrl: string;
  resetUrl: string;
}

export function newLogin(p: NewLoginPayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  const details: string[] = [];
  if (p.device) details.push(m.emails_auth_new_login_device({ device: p.device }, o));
  if (p.country) details.push(m.emails_auth_new_login_country({ country: p.country }, o));
  return {
    subject: m.emails_auth_new_login_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_new_login_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_new_login_heading({}, o),
      paragraphs: [
        m.emails_auth_new_login_body({ when: emailDateTime(c.locale, p.signedInAt) }, o),
        ...details,
        m.emails_auth_new_login_not_you({}, o),
      ],
      action: { label: m.emails_auth_new_login_button({}, o), url: p.resetUrl },
      secondaryLink: { label: m.emails_auth_review_sessions({}, o), url: p.sessionsUrl },
    }),
  };
}

export interface SecurityChangePayload {
  displayName: string;
  change: 'totp_enabled' | 'totp_disabled' | 'recovery_codes_regenerated' | 'passkey_added' | 'passkey_removed';
  changedAt: string;
  securityUrl: string;
  resetUrl: string;
}

export function securityChange(p: SecurityChangePayload, c: TemplateContext): TemplateOutput {
  const o = { locale: c.locale };
  const args = { when: emailDateTime(c.locale, p.changedAt) };
  const body = {
    totp_enabled: m.emails_auth_security_change_totp_enabled(args, o),
    totp_disabled: m.emails_auth_security_change_totp_disabled(args, o),
    recovery_codes_regenerated: m.emails_auth_security_change_recovery_codes(args, o),
    passkey_added: m.emails_auth_security_change_passkey_added(args, o),
    passkey_removed: m.emails_auth_security_change_passkey_removed(args, o),
  }[p.change];
  return {
    subject: m.emails_auth_security_change_subject({}, o),
    element: h(ActionEmail, {
      ...c,
      preview: m.emails_auth_security_change_preview({}, o),
      name: p.displayName,
      heading: m.emails_auth_security_change_heading({}, o),
      paragraphs: [body, m.emails_auth_security_change_not_you({}, o)],
      action: { label: m.emails_auth_security_change_button({}, o), url: p.securityUrl },
      secondaryLink: { label: m.emails_auth_new_login_button({}, o), url: p.resetUrl },
    }),
  };
}
