/**
 * The sentence of one signal in the recipient's locale ("Kelvin commented on AmmoUi", "5 new
 * comments on AmmoUi"). Grouped signals (`count > 1`) use the counted variant of the message.
 */
import type { Locale } from '@sotf/i18n';
import { m } from '@sotf/i18n/messages';
import type { SignalEmailItem } from './types.ts';

export function signalText(item: SignalEmailItem, locale: Locale): string {
  const o = { locale };
  const actor = item.actorName ?? m.emails_notify_someone({}, o);
  const mod = item.modName ?? '';
  const count = item.count;
  const many = count > 1;
  switch (item.type) {
    case 'mod.version_published':
      return many
        ? m.emails_notify_item_version_published_many({ count, mod, version: item.version ?? '' }, o)
        : m.emails_notify_item_version_published({ mod, version: item.version ?? '' }, o);
    case 'creator.mod_published':
      return many
        ? m.emails_notify_item_creator_mod_published_many({ count, actor, mod }, o)
        : m.emails_notify_item_creator_mod_published({ actor, mod }, o);
    case 'comment.on_my_mod':
      return many
        ? m.emails_notify_item_comment_on_my_mod_many({ count, mod }, o)
        : m.emails_notify_item_comment_on_my_mod({ actor, mod }, o);
    case 'comment.reply':
      return many
        ? m.emails_notify_item_comment_reply_many({ count, mod }, o)
        : m.emails_notify_item_comment_reply({ actor, mod }, o);
    case 'comment.mention':
      return m.emails_notify_item_comment_mention({ actor, mod }, o);
    case 'review.on_my_mod':
      return many
        ? m.emails_notify_item_review_on_my_mod_many({ count, mod }, o)
        : m.emails_notify_item_review_on_my_mod({ actor, mod, rating: item.rating ?? 5 }, o);
    case 'review.reply':
      return m.emails_notify_item_review_reply({ mod }, o);
    case 'compat.broken_on_my_mod':
      return m.emails_notify_item_compat_broken({ status: item.status ?? 'mixed', mod, build: item.build ?? '' }, o);
    case 'compat.acknowledged':
      return m.emails_notify_item_compat_acknowledged({ mod }, o);
    case 'compat.prompt':
      return m.emails_notify_item_compat_prompt({ build: item.build ?? '' }, o);
    case 'review.update_prompt':
      return m.emails_notify_item_review_update_prompt({ mod, version: item.version ?? '' }, o);
    case 'kit.added_my_mod':
      return m.emails_notify_item_kit_added_my_mod({ mod }, o);
    case 'kit.updated_followed':
      return m.emails_notify_item_kit_updated_followed({ kit: mod }, o);
    case 'kit.comment':
      return m.emails_notify_item_kit_comment({ actor, kit: mod }, o);
    case 'kit.comment_reply':
      return m.emails_notify_item_kit_comment_reply({ actor, kit: mod }, o);
    case 'patch.breaking_build':
      return m.emails_notify_item_patch_breaking({ build: item.build ?? '' }, o);
    case 'mod.status_changed':
      return m.emails_notify_item_status({ status: item.status ?? 'other', mod }, o);
    case 'milestone.reached':
      return m.emails_notify_item_milestone({ mod, threshold: item.threshold ?? 0 }, o);
    case 'badge.awarded':
      return m.emails_notify_item_badge({}, o);
    case 'award.won':
      return m.emails_notify_item_award({ kind: item.awardKind ?? 'other', mod }, o);
    case 'report.resolved':
      return m.emails_notify_item_report_resolved({ action: item.reportAction ?? 'dismiss' }, o);
    case 'system.announcement':
      return m.emails_notify_item_announcement({}, o);
    default:
      return m.emails_notify_item_announcement({}, o);
  }
}
