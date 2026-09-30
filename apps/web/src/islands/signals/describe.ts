/**
 * How a signal reads (PLAN §7.3, research/03 §6.12): one sentence per type built from
 * `NotificationDTO.data` (keys documented in docs/backlog/WP-43.md and WP-60.md), the glyph of its
 * kind, where it leads and the quoted excerpt. Shared by the header bell and `/signals`.
 *
 * Grouped signals (`groupCount > 1`, «5 new comments on AmmoUi») switch to the plural sentence.
 */
import type { NotificationDTO, NotificationType } from '@sotf/contracts/notifications';
import { type Locale, localizePath } from '@sotf/i18n';
import {
  ArrowUpCircle,
  AtSign,
  Award,
  BadgeCheck,
  Bug,
  CircleAlert,
  CircleHelp,
  Flag,
  Layers,
  type LucideIcon,
  Megaphone,
  MessageSquare,
  PackagePlus,
  Reply,
  ShieldCheck,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react';
import { badgeName, st, stOptional } from './i18n.ts';

export type SignalTone = 'signal' | 'success' | 'warning' | 'danger' | 'neutral';

export interface SignalView {
  /** The sentence («Stack Mod v3.1 is out — you follow it»). */
  text: string;
  /** Short quote under the sentence (comment or review excerpt, rejection reason). */
  excerpt: string | null;
  icon: LucideIcon;
  tone: SignalTone;
  /** Where the signal leads (localized for public pages), or null. */
  href: string | null;
  /** Download shortcut of a new version («Download»). */
  downloadHref: string | null;
}

const str = (value: unknown): string | null => (typeof value === 'string' && value.trim() ? value : null);
const num = (value: unknown): number | null => (typeof value === 'number' && Number.isFinite(value) ? value : null);

function modName(signal: NotificationDTO): string {
  return str(signal.data.modName) ?? (signal.target?.title || st('signals_unknown_mod'));
}

function actorName(signal: NotificationDTO): string {
  return signal.actor?.displayName ?? st('signals_someone');
}

/** «first-blueprint» → «First blueprint» (badge keys are stable slugs; the catalogue has the art). */
function humanizeKey(key: string): string {
  const words = key.replace(/[-_]+/g, ' ').trim();
  return words ? words[0]?.toUpperCase() + words.slice(1) : key;
}

function statusSentence(signal: NotificationDTO, mod: string): { text: string; tone: SignalTone; icon: LucideIcon } {
  const status = str(signal.data.status) ?? 'other';
  const from = str(signal.data.from);
  // Version decisions (WP-51) carry the version label; `?` keeps the sentence readable without it.
  const version = str(signal.data.version) ?? '?';
  switch (status) {
    case 'published':
      return {
        text:
          from === 'pending' || from === null
            ? st('signals_status_approved', { mod })
            : st('signals_status_republished', { mod }),
        tone: 'success',
        icon: BadgeCheck,
      };
    case 'rejected':
      return { text: st('signals_status_rejected', { mod }), tone: 'danger', icon: CircleAlert };
    case 'pending':
    case 'changes_requested':
      return { text: st('signals_status_changes_requested', { mod }), tone: 'warning', icon: Wrench };
    case 'version_approved':
      return { text: st('signals_status_version_approved', { mod, version }), tone: 'success', icon: BadgeCheck };
    case 'version_rejected':
      return { text: st('signals_status_version_rejected', { mod, version }), tone: 'danger', icon: CircleAlert };
    case 'version_changes_requested':
      return { text: st('signals_status_version_changes_requested', { mod, version }), tone: 'warning', icon: Wrench };
    case 'version_held':
      return { text: st('signals_status_version_held', { mod, version }), tone: 'warning', icon: ShieldCheck };
    case 'unlisted':
      return { text: st('signals_status_unlisted', { mod }), tone: 'warning', icon: ShieldCheck };
    case 'archived':
      return { text: st('signals_status_archived', { mod }), tone: 'neutral', icon: ShieldCheck };
    case 'removed':
      return { text: st('signals_status_removed', { mod }), tone: 'danger', icon: CircleAlert };
    default:
      return { text: st('signals_status_changed', { mod }), tone: 'neutral', icon: ShieldCheck };
  }
}

/**
 * The reason of a moderation decision in the reader's locale. `reason` stores the English wording
 * of the template, a blank line and the ranger's note (`@sotf/core` `resolveReason`); with a
 * built-in template (`signals_template_<key>`, 13 locales) the wording is replaced and the note
 * kept as written. Custom templates keep the stored text.
 */
export function moderationReason(reason: string | null, templateKey: string | null): string | null {
  if (!templateKey) return reason;
  const wording = stOptional(`signals_template_${templateKey}`);
  if (!wording) return reason;
  const note = reason ? reason.split('\n\n').slice(1).join('\n\n').trim() : '';
  return note ? `${wording}\n\n${note}` : wording;
}

function awardSentence(kind: string | null, mod: string): string {
  switch (kind) {
    case 'mod_of_week':
      return st('signals_award_mod_of_week', { mod });
    case 'mod_of_month':
      return st('signals_award_mod_of_month', { mod });
    case 'build_of_month':
      return st('signals_award_build_of_month', { mod });
    case 'staff_pick':
      return st('signals_award_staff_pick', { mod });
    default:
      return st('signals_award_generic', { mod });
  }
}

function compose(signal: NotificationDTO): Omit<SignalView, 'href' | 'downloadHref'> {
  const count = Math.max(1, signal.groupCount);
  const mod = modName(signal);
  const actor = actorName(signal);
  const excerpt = str(signal.data.excerpt);
  const type: NotificationType = signal.type;
  switch (type) {
    case 'mod.version_published': {
      const version = str(signal.data.version) ?? '';
      return {
        text:
          count > 1
            ? st('signals_version_published_grouped', { mod, count })
            : st('signals_version_published', { mod, version }),
        excerpt: null,
        icon: ArrowUpCircle,
        tone: 'signal',
      };
    }
    case 'creator.mod_published':
      return {
        text: st('signals_creator_published', { actor, mod, kind: str(signal.data.kind) ?? 'mod' }),
        excerpt: null,
        icon: PackagePlus,
        tone: 'signal',
      };
    case 'comment.on_my_mod': {
      const bug = signal.data.isBugReport === true;
      return {
        text:
          count > 1
            ? st('signals_comment_on_mod_grouped', { mod, count })
            : bug
              ? st('signals_bug_report_on_mod', { actor, mod })
              : st('signals_comment_on_mod', { actor, mod }),
        excerpt: count > 1 ? null : excerpt,
        icon: bug && count === 1 ? Bug : MessageSquare,
        tone: bug && count === 1 ? 'warning' : 'neutral',
      };
    }
    case 'comment.reply':
      return {
        text:
          count > 1 ? st('signals_comment_reply_grouped', { mod, count }) : st('signals_comment_reply', { actor, mod }),
        excerpt: count > 1 ? null : excerpt,
        icon: Reply,
        tone: 'neutral',
      };
    case 'comment.mention':
      return {
        text: st('signals_comment_mention', { actor, mod }),
        excerpt,
        icon: AtSign,
        tone: 'signal',
      };
    case 'review.on_my_mod': {
      const rating = num(signal.data.rating);
      return {
        text:
          count > 1
            ? st('signals_review_on_mod_grouped', { mod, count })
            : st('signals_review_on_mod', { mod, rating: rating ?? 0, actor }),
        excerpt: count > 1 ? null : excerpt,
        icon: Star,
        tone: 'neutral',
      };
    }
    case 'review.reply':
      return { text: st('signals_review_reply', { mod }), excerpt, icon: Reply, tone: 'neutral' };
    case 'compat.broken_on_my_mod': {
      const build = str(signal.data.build) ?? st('signals_current_build');
      const status = str(signal.data.status) === 'broken' ? 'broken' : 'mixed';
      return {
        text: st('signals_compat_broken', { mod, build, status }),
        excerpt: null,
        icon: CircleAlert,
        tone: status === 'broken' ? 'danger' : 'warning',
      };
    }
    case 'compat.acknowledged': {
      const version = str(signal.data.version);
      return {
        text: version ? st('signals_compat_fixed_in', { mod, version }) : st('signals_compat_acknowledged', { mod }),
        excerpt: null,
        icon: Wrench,
        tone: 'success',
      };
    }
    case 'compat.prompt':
      return {
        text: st('signals_compat_prompt', { build: str(signal.data.build) ?? st('signals_current_build') }),
        excerpt: null,
        icon: CircleHelp,
        tone: 'signal',
      };
    case 'review.update_prompt':
      return {
        text: st('signals_review_update_prompt', { mod, version: str(signal.data.version) ?? '' }),
        excerpt: null,
        icon: Star,
        tone: 'signal',
      };
    case 'kit.added_my_mod':
      return {
        text: st('signals_kit_added_my_mod', {
          actor,
          mod,
          kit: str(signal.data.kitName) ?? signal.target?.title ?? '',
        }),
        excerpt: null,
        icon: Layers,
        tone: 'neutral',
      };
    case 'kit.updated_followed':
      return {
        text: st('signals_kit_updated_followed', { kit: str(signal.data.kitName) ?? signal.target?.title ?? '' }),
        excerpt: null,
        icon: Layers,
        tone: 'signal',
      };
    case 'kit.comment':
      return {
        text: st('signals_kit_comment', { actor, kit: str(signal.data.kitName) ?? signal.target?.title ?? '' }),
        excerpt,
        icon: MessageSquare,
        tone: 'neutral',
      };
    case 'kit.comment_reply':
      return {
        text: st('signals_kit_comment_reply', { actor, kit: str(signal.data.kitName) ?? signal.target?.title ?? '' }),
        excerpt,
        icon: Reply,
        tone: 'neutral',
      };
    case 'coauthor.invited':
      return {
        text: st('signals_coauthor_invited', { actor, mod }),
        excerpt: null,
        icon: Users,
        tone: 'signal',
      };
    case 'patch.breaking_build':
      return {
        text: st('signals_patch_breaking', { build: str(signal.data.build) ?? signal.target?.title ?? '' }),
        excerpt: null,
        icon: CircleAlert,
        tone: 'warning',
      };
    case 'mod.status_changed': {
      const sentence = statusSentence(signal, mod);
      return { ...sentence, excerpt: moderationReason(str(signal.data.reason), str(signal.data.templateKey)) };
    }
    case 'milestone.reached': {
      const threshold = num(signal.data.threshold) ?? 0;
      return {
        text: st('signals_milestone', { mod, threshold }),
        excerpt: null,
        icon: TrendingUp,
        tone: 'success',
      };
    }
    case 'badge.awarded': {
      if (signal.data.welcome === true) {
        return {
          text: st('signals_badge_welcome', { count: num(signal.data.badgeCount) ?? 0 }),
          excerpt: null,
          icon: Award,
          tone: 'success',
        };
      }
      const key = str(signal.data.badgeKey) ?? signal.target?.title ?? '';
      return {
        text: st('signals_badge_awarded', { badge: badgeName(key) ?? humanizeKey(key) }),
        excerpt: null,
        icon: Award,
        tone: 'success',
      };
    }
    case 'award.won':
      return {
        text: awardSentence(str(signal.data.awardKind), mod),
        excerpt: null,
        icon: Trophy,
        tone: 'success',
      };
    case 'report.resolved':
      return {
        text: str(signal.data.action) === 'dismiss' ? st('signals_report_dismissed') : st('signals_report_resolved'),
        excerpt: null,
        icon: Flag,
        tone: 'neutral',
      };
    case 'system.announcement': {
      const title = signal.target?.title?.trim();
      return {
        text: title ? st('signals_announcement_titled', { title }) : st('signals_announcement'),
        excerpt: null,
        icon: Megaphone,
        tone: str(signal.data.level) === 'critical' || str(signal.data.level) === 'warning' ? 'warning' : 'signal',
      };
    }
    case 'creator.weekly_report':
      return { text: st('signals_weekly_report'), excerpt: null, icon: TrendingUp, tone: 'neutral' };
  }
}

function linkOf(signal: NotificationDTO, locale: Locale): string | null {
  const path = signal.target?.path ?? (signal.type === 'system.announcement' ? str(signal.data.href) : null);
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  if (!path.startsWith('/') || path.startsWith('//')) return null;
  return localizePath(path, locale);
}

/**
 * Download route of the new version (`mod.version_published` targets the version page of the mod:
 * `/mods/:user/:slug/versions/:version` or the mod page); null when the path has no mod base.
 */
function downloadOf(signal: NotificationDTO): string | null {
  if (signal.type !== 'mod.version_published' || signal.groupCount > 1) return null;
  const version = str(signal.data.version);
  const path = signal.target?.path;
  if (!version || !path) return null;
  const match = /^(\/mods\/[^/]+\/[^/#?]+)/.exec(path);
  if (!match?.[1]) return null;
  // Downloads are never localized: the web route lives at the bare path (PLAN §2.8).
  return `${match[1]}/download/${encodeURIComponent(version)}`;
}

export function describeSignal(signal: NotificationDTO, locale: Locale): SignalView {
  return { ...compose(signal), href: linkOf(signal, locale), downloadHref: downloadOf(signal) };
}

/** Classes of the glyph disc per tone (tokens of `@sotf/ui`). */
export const TONE_CLASSES: Readonly<Record<SignalTone, string>> = {
  signal: 'bg-signal-soft text-signal',
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  danger: 'bg-danger-soft text-danger',
  neutral: 'bg-fg/8 text-fg-muted',
};
