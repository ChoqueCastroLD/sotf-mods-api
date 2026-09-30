/**
 * Weekly creator report (WP-43, PLAN §7.3 `creator.weekly_report`): totals of the week with the
 * trend against the week before, the mods with activity and the week's highlights (milestones,
 * awards, badges), a button to Basecamp analytics and the one-click unsubscribe link.
 */
import { Button, Heading, Link, Section, Text } from '@react-email/components';
import { formatDate, formatPercent, type Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import { createElement as h, type ReactElement } from 'react';
import { EmailLayout } from '../layout/email-layout.ts';
import { emailColors, emailStyles } from '../layout/theme.ts';
import type { NotificationTemplateContext, NotificationTemplateOutput } from '../notifications/signals-email.ts';
import type { CreatorWeeklyPayload } from '../notifications/types.ts';

const styles = {
  stat: { ...emailStyles.text, margin: '0 0 4px', fontSize: '18px', fontWeight: 700 },
  row: { borderTop: `1px solid ${emailColors.border}`, padding: '10px 0' },
  subheading: { ...emailStyles.text, fontWeight: 700, margin: '16px 0 8px' },
} as const;

function trend(p: CreatorWeeklyPayload, locale: Locale): string {
  const o = { locale };
  const { downloads, downloadsPrevious } = p.totals;
  if (downloadsPrevious === 0 || downloads === downloadsPrevious) {
    return downloads === downloadsPrevious ? m.emails_notify_creator_trend_same({}, o) : '';
  }
  const ratio = Math.abs(downloads - downloadsPrevious) / downloadsPrevious;
  const percent = formatPercent(locale, ratio);
  return downloads > downloadsPrevious
    ? m.emails_notify_creator_trend_up({ percent }, o)
    : m.emails_notify_creator_trend_down({ percent }, o);
}

function highlightText(item: CreatorWeeklyPayload['highlights'][number], locale: Locale): string {
  const o = { locale };
  const mod = item.modName ?? '';
  if (item.kind === 'milestone') return m.emails_notify_item_milestone({ mod, threshold: item.threshold ?? 0 }, o);
  if (item.kind === 'award') return m.emails_notify_item_award({ kind: item.awardKind ?? 'other', mod }, o);
  return m.emails_notify_item_badge({}, o);
}

export function creatorWeeklyEmail(
  p: CreatorWeeklyPayload,
  c: NotificationTemplateContext,
): NotificationTemplateOutput {
  const { locale } = c;
  const o = { locale };
  const start = formatDate(locale, `${p.weekStart}T00:00:00.000Z`, 'medium');
  const end = formatDate(locale, `${p.weekEnd}T00:00:00.000Z`, 'medium');
  const change = trend(p, locale);
  const body: ReactElement[] = [
    h(Heading, { key: 'h', as: 'h1', style: emailStyles.heading }, m.emails_notify_creator_heading({}, o)),
    h(Text, { key: 'greet', style: emailStyles.text }, m.emails_notify_greeting({ name: p.displayName }, o)),
    h(Text, { key: 'intro', style: emailStyles.text }, m.emails_notify_creator_intro({ start, end }, o)),
    h(
      Section,
      { key: 'totals', style: { padding: '4px 0 8px' } },
      h(Text, { style: styles.stat }, m.emails_notify_creator_downloads({ count: p.totals.downloads }, o)),
      change ? h(Text, { style: emailStyles.muted }, change) : null,
      h(Text, { style: emailStyles.text }, m.emails_notify_creator_followers({ count: p.totals.followers }, o)),
      h(Text, { style: emailStyles.text }, m.emails_notify_creator_comments({ count: p.totals.comments }, o)),
      h(Text, { style: emailStyles.text }, m.emails_notify_creator_reviews({ count: p.totals.reviews }, o)),
    ),
  ];
  if (p.mods.length > 0) {
    body.push(h(Text, { key: 'top', style: styles.subheading }, m.emails_notify_creator_top_heading({}, o)));
    for (const [i, mod] of p.mods.entries()) {
      const stats = [
        m.emails_notify_creator_downloads({ count: mod.downloads }, o),
        m.emails_notify_creator_followers({ count: mod.followers }, o),
        m.emails_notify_creator_comments({ count: mod.comments }, o),
        m.emails_notify_creator_reviews({ count: mod.reviews }, o),
      ].join(' · ');
      body.push(
        h(
          Section,
          { key: `m${i}`, style: styles.row },
          h(
            Text,
            { style: { ...emailStyles.text, margin: '0 0 4px', fontWeight: 600 } },
            mod.url ? h(Link, { href: mod.url, style: { color: emailColors.link } }, mod.name) : mod.name,
          ),
          h(Text, { style: { ...emailStyles.muted, margin: 0 } }, stats),
        ),
      );
    }
  }
  if (p.highlights.length > 0) {
    body.push(h(Text, { key: 'hl', style: styles.subheading }, m.emails_notify_creator_highlights_heading({}, o)));
    for (const [i, item] of p.highlights.entries()) {
      body.push(
        h(
          Text,
          { key: `hl${i}`, style: { ...emailStyles.text, margin: '0 0 6px' } },
          `• ${highlightText(item, locale)}`,
        ),
      );
    }
  }
  body.push(
    h(
      Section,
      { key: 'cta', style: { padding: '16px 0 8px' } },
      h(Button, { href: p.basecampUrl, style: emailStyles.button }, m.emails_notify_creator_button({}, o)),
    ),
  );
  return {
    subject: m.emails_notify_creator_subject({ count: p.totals.downloads }, o),
    element: h(
      EmailLayout,
      {
        locale,
        siteUrl: c.siteUrl,
        preview: m.emails_notify_creator_preview({ start, end }, o),
        footer: {
          reason: m.emails_notify_creator_reason({}, o),
          unsubscribeUrl: p.unsubscribe.page,
          unsubscribeLabel: m.emails_notify_unsubscribe({}, o),
        },
      },
      ...body,
    ),
  };
}
