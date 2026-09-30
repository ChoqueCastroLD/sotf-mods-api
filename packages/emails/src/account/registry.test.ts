import { LOCALES } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { describe, expect, it } from 'vitest';
import { ACCOUNT_EMAIL_TEMPLATES, type AccountEmailTemplate, renderAccountEmail } from './registry.ts';

const SITE = 'https://sotf-mods.com';
const URL_WITH_TOKEN = `${SITE}/verify-email?token=AbCdEfGhIjKlMnOpQrStUvWxYz0123456789-_AbCdE`;

const PAYLOADS: Record<AccountEmailTemplate, Record<string, unknown>> = {
  'auth.verify_email': { displayName: 'Kelvin', url: URL_WITH_TOKEN, expiresHours: 24 },
  'auth.password_reset': { displayName: 'Kelvin', url: `${SITE}/reset-password?token=abc`, expiresMinutes: 60 },
  'auth.password_changed': {
    displayName: 'Kelvin',
    changedAt: '2026-10-01T10:00:00.000Z',
    resetUrl: `${SITE}/forgot-password`,
    sessionsUrl: `${SITE}/settings/security`,
  },
  'auth.email_change_confirm': {
    displayName: 'Kelvin',
    url: URL_WITH_TOKEN,
    newEmail: 'new@example.test',
    expiresHours: 24,
  },
  'auth.email_change_notice': {
    displayName: 'Kelvin',
    newEmailMasked: 'n***@example.test',
    requestedAt: '2026-10-01T10:00:00.000Z',
    securityUrl: `${SITE}/settings/security`,
  },
  'account.export_ready': {
    displayName: 'Kelvin',
    url: 'https://storage.example.test/exports/1/x.zip?sig=1',
    expiresAt: '2026-10-02T10:00:00.000Z',
  },
  'account.deletion_scheduled': {
    displayName: 'Kelvin',
    executeAfter: '2026-10-15T10:00:00.000Z',
    cancelUrl: `${SITE}/settings/data`,
    mode: 'archive_mods',
  },
  'account.deletion_cancelled': { displayName: 'Kelvin', cancelledAt: '2026-10-02T10:00:00.000Z' },
  'account.deletion_completed': { displayName: 'Kelvin' },
};

describe('account email registry', () => {
  it('renders every template in every locale with a subject, HTML and text', async () => {
    for (const template of Object.keys(ACCOUNT_EMAIL_TEMPLATES) as AccountEmailTemplate[]) {
      for (const locale of LOCALES) {
        const out = await renderAccountEmail(template, locale, PAYLOADS[template], SITE);
        expect(out.subject.length, `${template} ${locale}`).toBeGreaterThan(5);
        expect(out.html).toMatch(/^<!DOCTYPE html/);
        expect(out.html).toContain('Kelvin');
        expect(out.text).toContain('Kelvin');
        expect(out.html).not.toContain('<script');
      }
    }
  });

  it('puts the action link in the button and the plain fallback', async () => {
    const out = await renderAccountEmail('auth.verify_email', 'es', PAYLOADS['auth.verify_email'], SITE);
    expect(out.subject).toBe(m.emails_auth_verify_subject({}, { locale: 'es' }));
    expect(out.html).toContain('lang="es"');
    expect(out.html.split(URL_WITH_TOKEN).length - 1).toBeGreaterThanOrEqual(2);
    expect(out.text).toContain(URL_WITH_TOKEN);
    expect(out.html).toContain(m.emails_auth_link_expiry_hours({ hours: 24 }, { locale: 'es' }));
  });

  it('formats dates in the recipient locale', async () => {
    const out = await renderAccountEmail(
      'account.deletion_scheduled',
      'de',
      PAYLOADS['account.deletion_scheduled'],
      SITE,
    );
    expect(out.text).toContain('15. Oktober 2026');
    expect(out.text).toContain(m.emails_auth_deletion_mode_archive({}, { locale: 'de' }));
  });

  it('falls back to English for unknown locales', async () => {
    const out = await renderAccountEmail(
      'account.deletion_completed',
      'xx',
      PAYLOADS['account.deletion_completed'],
      SITE,
    );
    expect(out.subject).toBe(m.emails_auth_deleted_subject({}, { locale: 'en' }));
  });
});
