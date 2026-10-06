/**
 * Base layout of every transactional email (PLAN §7.3; templates by WP-30 and WP-43): header with the logo,
 * content slot, and a footer with the tagline, why the recipient got the email and the links to
 * notification settings, privacy and (for notification emails) one-click unsubscribe.
 *
 * Written with `createElement` (no JSX) so Node runs it natively in development. Texts come from
 * @sotf/i18n in the recipient's locale; the per-template strings (`reason`, the unsubscribe label)
 * are passed in already translated.
 */
import { Body, Container, Head, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components';
import { type Locale, toHtmlLang } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { createElement as h, type ReactNode } from 'react';
import { emailColors, emailStyles } from './theme.ts';

export interface EmailFooterOptions {
  /** Why the recipient receives this email (translated by the template). */
  reason?: string;
  /** One-click unsubscribe URL (RFC 8058; notification emails). */
  unsubscribeUrl?: string;
  /** Label of the unsubscribe link (translated by the template). Required with `unsubscribeUrl`. */
  unsubscribeLabel?: string;
}

export interface EmailLayoutProps {
  locale: Locale;
  /** Absolute site origin (`PUBLIC_SITE_URL`), used for the logo and footer links. */
  siteUrl: string;
  /** Inbox preview text (≤ 90 characters are shown). */
  preview: string;
  children?: ReactNode;
  footer?: EmailFooterOptions;
}

/** `https://sotf-mods.com` + localized path (English has no prefix). */
export function siteLink(siteUrl: string, locale: Locale, path: string): string {
  const base = siteUrl.replace(/\/+$/, '');
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${base}${prefix}${path === '/' && prefix ? '' : path}`;
}

export function EmailLayout(props: EmailLayoutProps): ReactNode {
  const { locale, siteUrl, preview, children, footer = {} } = props;
  if (footer.unsubscribeUrl && !footer.unsubscribeLabel) {
    throw new TypeError('EmailLayout: unsubscribeLabel is required with unsubscribeUrl');
  }
  const opts = { locale };
  const base = siteUrl.replace(/\/+$/, '');
  const footerLinks: ReactNode[] = [
    h(
      Link,
      { key: 'settings', href: siteLink(base, locale, '/settings/notifications'), style: emailStyles.footerLink },
      m.common_account_settings({}, opts),
    ),
    ' · ',
    h(
      Link,
      { key: 'privacy', href: siteLink(base, locale, '/privacy'), style: emailStyles.footerLink },
      m.common_footer_privacy({}, opts),
    ),
  ];
  if (footer.unsubscribeUrl) {
    footerLinks.push(
      ' · ',
      h(
        Link,
        { key: 'unsubscribe', href: footer.unsubscribeUrl, style: emailStyles.footerLink },
        footer.unsubscribeLabel,
      ),
    );
  }

  return h(
    Html,
    { lang: toHtmlLang(locale), dir: 'ltr' },
    h(
      Head,
      null,
      h('meta', { name: 'color-scheme', content: 'light' }),
      h('meta', { name: 'supported-color-schemes', content: 'light' }),
    ),
    h(Preview, null, preview),
    h(
      Body,
      { style: emailStyles.body },
      h(
        Container,
        { style: emailStyles.container },
        h(
          Section,
          { style: emailStyles.header },
          h(
            Link,
            { href: siteLink(base, locale, '/') },
            h(Img, {
              src: `${base}/brand/logo-sm.png`,
              alt: 'SOTF Mods',
              width: 152,
              height: 40,
              style: { display: 'block', border: 0 },
            }),
          ),
        ),
        h(Section, { style: emailStyles.content }, children),
        h(Section, { style: { padding: '0 32px' } }, h(Hr, { style: emailStyles.hr })),
        h(
          Section,
          { style: emailStyles.footerBox },
          h(Text, { style: { ...emailStyles.footer, color: emailColors.fgMuted } }, m.common_tagline({}, opts)),
          footer.reason ? h(Text, { style: emailStyles.footer }, footer.reason) : null,
          h(Text, { style: emailStyles.footer }, ...footerLinks),
        ),
      ),
    ),
  );
}
