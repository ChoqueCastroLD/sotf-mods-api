/**
 * Signals email (WP-43, PLAN §7.3): the instant batch and the daily/weekly digests share this body.
 * One row per signal (sentence, optional quoted excerpt or moderator reason, "View" link), "and N
 * more", a button to `/signals` and the footer with the reason and the one-click unsubscribe link.
 * Written with `createElement` (no JSX) like the layout.
 */
import { Button, Heading, Link, Section, Text } from '@react-email/components';
import type { Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { createElement as h, type ReactElement } from 'react';
import { digestCopy } from '../digests/copy.ts';
import { EmailLayout } from '../layout/email-layout.ts';
import { emailColors, emailStyles } from '../layout/theme.ts';
import { signalText } from './item-text.ts';
import type { SignalEmailItem, SignalsPayload } from './types.ts';

export interface NotificationTemplateContext {
  locale: Locale;
  siteUrl: string;
}

export interface NotificationTemplateOutput {
  subject: string;
  element: ReactElement;
}

const styles = {
  item: { borderTop: `1px solid ${emailColors.border}`, padding: '12px 0' },
  line: { ...emailStyles.text, margin: '0 0 6px', fontWeight: 600 },
  quote: {
    ...emailStyles.muted,
    borderLeft: `3px solid ${emailColors.border}`,
    margin: '0 0 6px',
    padding: '2px 0 2px 12px',
  },
  view: { color: emailColors.link, fontSize: '14px', textDecoration: 'underline' },
} as const;

function itemRow(item: SignalEmailItem, index: number, locale: Locale): ReactElement {
  const o = { locale };
  const children: ReactElement[] = [h(Text, { key: 'line', style: styles.line }, signalText(item, locale))];
  if (item.excerpt) children.push(h(Text, { key: 'quote', style: styles.quote }, item.excerpt));
  if (item.type === 'mod.status_changed' && item.reason) {
    children.push(
      h(Text, { key: 'reason', style: styles.quote }, m.emails_notify_item_status_reason({ reason: item.reason }, o)),
    );
  }
  if (item.url) {
    children.push(
      h(
        Text,
        { key: 'view', style: { margin: 0 } },
        h(Link, { href: item.url, style: styles.view }, m.emails_notify_view({}, o)),
      ),
    );
  }
  return h(Section, { key: `i${index}`, style: styles.item }, ...children);
}

/** Total signals the email represents (grouped rows count once per signal folded in). */
function signalCount(p: SignalsPayload): number {
  return p.items.reduce((n, item) => n + item.count, 0) + p.moreCount;
}

export function signalsEmail(p: SignalsPayload, c: NotificationTemplateContext): NotificationTemplateOutput {
  const { locale } = c;
  const o = { locale };
  const total = signalCount(p);
  const copy = digestCopy(p.cadence, total, locale);
  const first = p.items[0] ? signalText(p.items[0], locale) : '';
  const body: ReactElement[] = [
    h(Heading, { key: 'h', as: 'h1', style: emailStyles.heading }, copy.heading),
    h(Text, { key: 'greet', style: emailStyles.text }, m.emails_notify_greeting({ name: p.displayName }, o)),
    h(Text, { key: 'intro', style: emailStyles.text }, copy.intro),
    ...p.items.map((item, i) => itemRow(item, i, locale)),
  ];
  if (p.moreCount > 0) {
    body.push(h(Text, { key: 'more', style: emailStyles.muted }, m.emails_notify_more({ count: p.moreCount }, o)));
  }
  body.push(
    h(
      Section,
      { key: 'cta', style: { padding: '16px 0 8px' } },
      h(Button, { href: p.signalsUrl, style: emailStyles.button }, m.emails_notify_open_signals({}, o)),
    ),
  );
  return {
    subject: copy.subject,
    element: h(
      EmailLayout,
      {
        locale,
        siteUrl: c.siteUrl,
        preview: m.emails_notify_preview({ count: total, first }, o),
        footer: {
          reason: copy.reason,
          unsubscribeUrl: p.unsubscribe.page,
          unsubscribeLabel: m.emails_notify_unsubscribe({}, o),
        },
      },
      ...body,
    ),
  };
}
