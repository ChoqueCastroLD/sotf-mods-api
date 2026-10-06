/**
 * Localized labels of the codes Basecamp receives from the API (statuses, attention kinds, inbox
 * types, channels, referrers…). One switch per enum: every message is referenced statically.
 */
import type { BadgeVariant } from '@sotf/ui/badge';
import type {
  AnalyticsRange,
  AttentionKind,
  DownloadChannel,
  InboxItem,
  InboxType,
  KpiKey,
  ModStatus,
  Transition,
  VersionStatus,
} from './api.ts';
import { bt } from './i18n.ts';

export function modStatusLabel(status: ModStatus): string {
  switch (status) {
    case 'published':
      return bt('basecamp_status_published');
    case 'pending':
      return bt('basecamp_status_pending');
    case 'unlisted':
      return bt('basecamp_status_unlisted');
    case 'rejected':
      return bt('basecamp_status_rejected');
    case 'archived':
      return bt('basecamp_status_archived');
    case 'removed':
      return bt('basecamp_status_removed');
  }
}

export function modStatusVariant(status: ModStatus): BadgeVariant {
  switch (status) {
    case 'published':
      return 'success';
    case 'pending':
      return 'signal';
    case 'unlisted':
    case 'archived':
      return 'neutral';
    case 'rejected':
      return 'warning';
    case 'removed':
      return 'danger';
  }
}

export function versionStatusLabel(status: VersionStatus): string {
  switch (status) {
    case 'active':
      return bt('basecamp_version_status_active');
    case 'pending':
      return bt('basecamp_version_status_pending');
    case 'rejected':
      return bt('basecamp_version_status_rejected');
    case 'yanked':
      return bt('basecamp_version_status_yanked');
    case 'file_missing':
      return bt('basecamp_version_status_file_missing');
  }
}

export function versionStatusVariant(status: VersionStatus): BadgeVariant {
  switch (status) {
    case 'active':
      return 'success';
    case 'pending':
      return 'signal';
    case 'rejected':
    case 'file_missing':
      return 'danger';
    case 'yanked':
      return 'warning';
  }
}

export type ScanVerdict = 'pending' | 'clean' | 'suspicious' | 'malicious' | 'unknown' | 'false_positive';

export function scanVerdictLabel(verdict: ScanVerdict): string {
  switch (verdict) {
    case 'pending':
      return bt('basecamp_scan_pending');
    case 'clean':
      return bt('basecamp_scan_clean');
    case 'suspicious':
      return bt('basecamp_scan_suspicious');
    case 'malicious':
      return bt('basecamp_scan_malicious');
    case 'unknown':
      return bt('basecamp_scan_unknown');
    case 'false_positive':
      return bt('basecamp_scan_false_positive');
  }
}

export function scanVerdictVariant(verdict: ScanVerdict): BadgeVariant {
  switch (verdict) {
    case 'clean':
    case 'false_positive':
      return 'success';
    case 'suspicious':
      return 'warning';
    case 'malicious':
      return 'danger';
    case 'pending':
    case 'unknown':
      return 'neutral';
  }
}

export function kpiLabel(key: KpiKey): string {
  switch (key) {
    case 'downloads7d':
      return bt('basecamp_kpi_downloads_7d');
    case 'downloads30d':
      return bt('basecamp_kpi_downloads_30d');
    case 'followers':
      return bt('basecamp_kpi_followers');
    case 'rating':
      return bt('basecamp_kpi_rating');
    case 'compatWorksShare':
      return bt('basecamp_kpi_field_reports');
    case 'views7d':
      return bt('basecamp_kpi_views_7d');
  }
}

export function rangeLabel(range: AnalyticsRange): string {
  switch (range) {
    case '7d':
      return bt('basecamp_range_7d');
    case '30d':
      return bt('basecamp_range_30d');
    case '90d':
      return bt('basecamp_range_90d');
    case 'all':
      return bt('basecamp_range_all');
  }
}

/** «Needs attention» sentence of one row. */
export function attentionText(kind: AttentionKind, count: number, name: string): string {
  switch (kind) {
    case 'broken_on_current':
      return bt('basecamp_attention_broken', { count, name });
    case 'unanswered_questions':
      return bt('basecamp_attention_questions', { count, name });
    case 'missing_gallery':
      return bt('basecamp_attention_gallery', { count, name });
    case 'missing_source':
      return bt('basecamp_attention_source', { name });
    case 'unanswered_reviews':
      return bt('basecamp_attention_reviews', { count, name });
    case 'rejected':
      return bt('basecamp_attention_rejected', { name });
  }
}

export function attentionAction(kind: AttentionKind): string {
  switch (kind) {
    case 'broken_on_current':
      return bt('basecamp_attention_broken_action');
    case 'unanswered_questions':
      return bt('basecamp_attention_questions_action');
    case 'missing_gallery':
      return bt('basecamp_attention_gallery_action');
    case 'missing_source':
      return bt('basecamp_attention_source_action');
    case 'unanswered_reviews':
      return bt('basecamp_attention_reviews_action');
    case 'rejected':
      return bt('basecamp_attention_rejected_action');
  }
}

export function inboxTypeLabel(type: InboxType): string {
  switch (type) {
    case 'comment':
      return bt('basecamp_inbox_type_comment');
    case 'bug':
      return bt('basecamp_inbox_type_bug');
    case 'review':
      return bt('basecamp_inbox_type_review');
    case 'compat':
      return bt('basecamp_inbox_type_compat');
  }
}

export function inboxStateLabel(state: InboxItem['state']): string {
  switch (state) {
    case 'open':
      return bt('basecamp_inbox_state_open');
    case 'answered':
      return bt('basecamp_inbox_state_answered');
    case 'resolved':
      return bt('basecamp_inbox_state_resolved');
  }
}

export function inboxStateVariant(state: InboxItem['state']): BadgeVariant {
  switch (state) {
    case 'open':
      return 'signal';
    case 'answered':
      return 'neutral';
    case 'resolved':
      return 'success';
  }
}

export function channelLabel(channel: DownloadChannel): string {
  switch (channel) {
    case 'web':
      return bt('basecamp_channel_web');
    case 'redmanager':
      return bt('basecamp_channel_redmanager');
    case 'client':
      return bt('basecamp_channel_client');
    case 'api':
      return bt('basecamp_channel_api');
    case 'unknown':
      return bt('basecamp_channel_unknown');
  }
}

export function transitionLabel(transition: Transition): string {
  switch (transition) {
    case 'archive':
      return bt('basecamp_action_archive');
    case 'unlist':
      return bt('basecamp_action_unlist');
    case 'publish':
      return bt('basecamp_action_publish');
    case 'request_removal':
      return bt('basecamp_action_request_removal');
    case 'resubmit':
      return bt('basecamp_action_resubmit');
  }
}

// -----------------------------------------------------------------------------------------------
// Referrers (PLAN §7.5: Google, Discord, YouTube, GitHub, AI assistants, internal or direct)
// -----------------------------------------------------------------------------------------------

export const REFERRER_GROUPS = ['google', 'discord', 'youtube', 'github', 'ai', 'internal', 'direct', 'other'] as const;
export type ReferrerGroup = (typeof REFERRER_GROUPS)[number];

const AI_DOMAINS = [
  'chatgpt.com',
  'chat.openai.com',
  'perplexity.ai',
  'copilot.microsoft.com',
  'copilot.com',
  'gemini.google.com',
  'bard.google.com',
  'claude.ai',
];

function isDomain(host: string, domain: string): boolean {
  return host === domain || host.endsWith(`.${domain}`);
}

/** Group of a referrer domain as stored by the API (host only; empty or «direct» for none). */
export function referrerGroup(raw: string): ReferrerGroup {
  const host = raw
    .trim()
    .toLowerCase()
    .replace(/^www\./, '');
  if (host === '' || host === 'direct' || host === '(direct)' || host === '-' || host === 'none') return 'direct';
  if (AI_DOMAINS.some((domain) => isDomain(host, domain)) || host.includes('copilot')) return 'ai';
  if (isDomain(host, 'sotf-mods.com') || host === 'internal' || host === '(internal)') return 'internal';
  if (/(^|\.)google\.[a-z.]+$/.test(host) || host === 'google') return 'google';
  if (isDomain(host, 'discord.com') || isDomain(host, 'discord.gg') || isDomain(host, 'discordapp.com')) {
    return 'discord';
  }
  if (isDomain(host, 'youtube.com') || isDomain(host, 'youtu.be')) return 'youtube';
  if (isDomain(host, 'github.com') || isDomain(host, 'github.io')) return 'github';
  return 'other';
}

export function referrerGroupLabel(group: ReferrerGroup): string {
  switch (group) {
    case 'google':
      return bt('basecamp_referrer_google');
    case 'discord':
      return bt('basecamp_referrer_discord');
    case 'youtube':
      return bt('basecamp_referrer_youtube');
    case 'github':
      return bt('basecamp_referrer_github');
    case 'ai':
      return bt('basecamp_referrer_ai');
    case 'internal':
      return bt('basecamp_referrer_internal');
    case 'direct':
      return bt('basecamp_referrer_direct');
    case 'other':
      return bt('basecamp_referrer_other');
  }
}

/** Name of a language code in the creator's language («Spanish»), or the code itself. */
export function languageName(code: string, displayLocale: string): string {
  try {
    const names = new Intl.DisplayNames([displayLocale], { type: 'language' });
    return names.of(code) ?? code;
  } catch {
    return code;
  }
}

/** Name of a country (ISO 3166-1 alpha-2) in the creator's language («Spain»), or the code itself. */
export function countryName(code: string, displayLocale: string): string {
  try {
    const names = new Intl.DisplayNames([displayLocale], { type: 'region' });
    return names.of(code) ?? code;
  } catch {
    return code;
  }
}
