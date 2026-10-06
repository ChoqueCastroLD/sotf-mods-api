/**
 * The sentence of one notification in the recipient's locale ("Kelvin commented on AmmoUi", "5 new
 * comments on AmmoUi"). Grouped notifications (`count > 1`) use the counted variant of the message.
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
    case 'request.comment':
      return many
        ? m.emails_notify_item_request_comment_many({ count, request: mod }, o)
        : m.emails_notify_item_request_comment({ actor, request: mod }, o);
    case 'request.adopted':
      return m.emails_notify_item_request_adopted({ actor, request: mod }, o);
    case 'request.fulfilled':
      return m.emails_notify_item_request_fulfilled({ mod }, o);
    case 'review.update_prompt':
      return m.emails_notify_item_review_update_prompt({ mod, version: item.version ?? '' }, o);
    case 'coauthor.invited':
      return m.emails_notify_item_coauthor_invited({ actor, mod }, o);
    case 'mod.status_changed':
      return m.emails_notify_item_status({ status: item.status ?? 'other', mod }, o);
    case 'jam.phase':
      return m.emails_notify_item_jam_phase({ phase: item.status ?? 'other', jam: mod }, o);
    case 'report.resolved':
      return m.emails_notify_item_report_resolved({ action: item.reportAction ?? 'dismiss' }, o);
    case 'system.announcement':
      return m.emails_notify_item_announcement({}, o);
    default:
      return m.emails_notify_item_announcement({}, o);
  }
}
