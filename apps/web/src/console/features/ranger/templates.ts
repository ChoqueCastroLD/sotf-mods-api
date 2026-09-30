/**
 * Reason templates in the ranger's locale (PLAN §7.4 «Plantillas de motivo editables e i18n»).
 *
 * Built-in templates are translated in the `ranger` catalog; custom templates saved by an admin
 * carry their own wording per locale (`messages[locale]`, English as the fallback). The API
 * stores the English text + the note in `statusReason` and sends the `templateKey` to the author,
 * whose Signals render it in the author's own locale.
 */
import { m } from '@sotf/i18n/messages';
import { activeLocale } from '../../lib/messages.ts';
import type { ModerationAction, ReasonTemplate } from './api.ts';

/** Short name of a template (menu entry). */
export function templateTitle(template: ReasonTemplate): string {
  const builtIn = builtInTitle(template.key);
  if (builtIn) return builtIn;
  return template.key.replaceAll('_', ' ').replace(/^./, (first) => first.toUpperCase());
}

/** Full wording shown to the ranger before sending (the author reads it in their locale). */
export function templateText(template: ReasonTemplate): string {
  if (template.messages) {
    const locale = activeLocale();
    const text = template.messages[locale] ?? template.messages.en;
    if (text) return text;
    const first = Object.values(template.messages).find((value): value is string => typeof value === 'string');
    if (first) return first;
  }
  return builtInText(template.key) ?? templateTitle(template);
}

export function templatesFor(templates: readonly ReasonTemplate[], action: ModerationAction): ReasonTemplate[] {
  return templates.filter((template) => template.action === action);
}

function builtInTitle(key: string): string | null {
  switch (key) {
    case 'reupload_without_permission':
      return m.ranger_template_reupload_without_permission_title();
    case 'malware_detected':
      return m.ranger_template_malware_detected_title();
    case 'broken_or_empty':
      return m.ranger_template_broken_or_empty_title();
    case 'not_a_mod':
      return m.ranger_template_not_a_mod_title();
    case 'duplicate':
      return m.ranger_template_duplicate_title();
    case 'spam':
      return m.ranger_template_spam_title();
    case 'missing_description':
      return m.ranger_template_missing_description_title();
    case 'missing_screenshots':
      return m.ranger_template_missing_screenshots_title();
    case 'wrong_category':
      return m.ranger_template_wrong_category_title();
    case 'nsfw_unmarked':
      return m.ranger_template_nsfw_unmarked_title();
    case 'credit_original_author':
      return m.ranger_template_credit_original_author_title();
    case 'rules_violation':
      return m.ranger_template_rules_violation_title();
    case 'malware_confirmed':
      return m.ranger_template_malware_confirmed_title();
    case 'copyright_claim':
      return m.ranger_template_copyright_claim_title();
    default:
      return null;
  }
}

function builtInText(key: string): string | null {
  switch (key) {
    case 'reupload_without_permission':
      return m.ranger_template_reupload_without_permission();
    case 'malware_detected':
      return m.ranger_template_malware_detected();
    case 'broken_or_empty':
      return m.ranger_template_broken_or_empty();
    case 'not_a_mod':
      return m.ranger_template_not_a_mod();
    case 'duplicate':
      return m.ranger_template_duplicate();
    case 'spam':
      return m.ranger_template_spam();
    case 'missing_description':
      return m.ranger_template_missing_description();
    case 'missing_screenshots':
      return m.ranger_template_missing_screenshots();
    case 'wrong_category':
      return m.ranger_template_wrong_category();
    case 'nsfw_unmarked':
      return m.ranger_template_nsfw_unmarked();
    case 'credit_original_author':
      return m.ranger_template_credit_original_author();
    case 'rules_violation':
      return m.ranger_template_rules_violation();
    case 'malware_confirmed':
      return m.ranger_template_malware_confirmed();
    case 'copyright_claim':
      return m.ranger_template_copyright_claim();
    default:
      return null;
  }
}
