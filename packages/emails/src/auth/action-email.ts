/**
 * Shared body of the account emails (WP-30): greeting, heading, paragraphs, an optional call to
 * action with its plain link fallback, and closing notes, inside the brand `EmailLayout`. Written
 * with `createElement` (no JSX) like the layout.
 */
import { Button, Heading, Link, Section, Text } from '@react-email/components';
import { formatDateTime, type Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { createElement as h, type ReactElement } from 'react';
import { EmailLayout } from '../layout/email-layout.ts';
import { emailColors, emailStyles } from '../layout/theme.ts';

export interface ActionEmailProps {
  locale: Locale;
  siteUrl: string;
  preview: string;
  name: string;
  heading: string;
  paragraphs: readonly string[];
  action?: { label: string; url: string };
  /** Small print after the button (expiry, "wasn't you?"). */
  notes?: readonly string[];
  /** Extra link under the notes (e.g. "Review your sessions"). */
  secondaryLink?: { label: string; url: string };
  /** Footer reason (defaults to the generic account reason). */
  reason?: string;
}

export function ActionEmail(props: ActionEmailProps): ReactElement {
  const { locale } = props;
  const opts = { locale };
  const children: ReactElement[] = [
    h(Heading, { key: 'h', as: 'h1', style: emailStyles.heading }, props.heading),
    h(Text, { key: 'greet', style: emailStyles.text }, m.emails_auth_greeting({ name: props.name }, opts)),
    ...props.paragraphs.map((text, i) => h(Text, { key: `p${i}`, style: emailStyles.text }, text)),
  ];
  if (props.action) {
    children.push(
      h(
        Section,
        { key: 'cta', style: { padding: '8px 0 16px' } },
        h(Button, { href: props.action.url, style: emailStyles.button }, props.action.label),
      ),
      h(Text, { key: 'fallback', style: emailStyles.muted }, m.emails_auth_link_fallback({}, opts)),
      h(
        Text,
        { key: 'url', style: { ...emailStyles.muted, wordBreak: 'break-all' as const } },
        h(Link, { href: props.action.url, style: { color: emailColors.link } }, props.action.url),
      ),
    );
  }
  for (const [i, note] of (props.notes ?? []).entries()) {
    children.push(h(Text, { key: `n${i}`, style: emailStyles.muted }, note));
  }
  if (props.secondaryLink) {
    children.push(
      h(
        Text,
        { key: 'secondary', style: emailStyles.muted },
        h(Link, { href: props.secondaryLink.url, style: { color: emailColors.link } }, props.secondaryLink.label),
      ),
    );
  }
  return h(
    EmailLayout,
    {
      locale,
      siteUrl: props.siteUrl,
      preview: props.preview,
      footer: { reason: props.reason ?? m.emails_auth_reason_account({}, opts) },
    },
    ...children,
  );
}

/** `12 Oct 2026, 10:00` in the recipient's locale (UTC; the message says so). */
export function emailDateTime(locale: Locale, iso: string): string {
  return formatDateTime(locale, new Date(iso), 'long', 'short');
}
