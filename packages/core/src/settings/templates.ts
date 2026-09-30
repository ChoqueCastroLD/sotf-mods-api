/**
 * Moderation reason templates (`SiteSetting.moderationTemplates`, PLAN §7.4 "Plantillas de motivo
 * editables e i18n"). A decision that needs a reason (`reject`, `request_changes`, `remove`)
 * names a template, adds a free note, or both; the stored `statusReason` is the English text of
 * the template followed by the note, and the notification carries the `templateKey` so every
 * locale can render its own wording.
 *
 * The built-in list below is used until an admin saves their own through
 * `PUT /admin/settings/moderationTemplates`.
 */
import type { SITE_SETTING_SCHEMAS } from '@sotf/contracts/admin';
import type { Executor } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { queryOne } from '../follows/sql.ts';
import { errors } from '../kernel/errors.ts';

export type ModerationTemplate = z.output<(typeof SITE_SETTING_SCHEMAS)['moderationTemplates']>[number];
export type TemplateAction = ModerationTemplate['action'];

export const DEFAULT_MODERATION_TEMPLATES: ModerationTemplate[] = [
  {
    key: 'reupload_without_permission',
    action: 'reject',
    messages: {
      en: 'This looks like a reupload of someone else’s work without their permission.',
      es: 'Parece una resubida del trabajo de otra persona sin su permiso.',
    },
  },
  {
    key: 'malware_detected',
    action: 'reject',
    messages: {
      en: 'The file was flagged as malicious by the security scan.',
      es: 'El análisis de seguridad marcó el archivo como malicioso.',
    },
  },
  {
    key: 'broken_or_empty',
    action: 'reject',
    messages: {
      en: 'The file is broken, empty or does not load with RedLoader.',
      es: 'El archivo está roto, vacío o no carga con RedLoader.',
    },
  },
  {
    key: 'not_a_mod',
    action: 'reject',
    messages: {
      en: 'This upload is not a Sons of the Forest mod or build.',
      es: 'Esta subida no es un mod ni una build de Sons of the Forest.',
    },
  },
  {
    key: 'duplicate',
    action: 'reject',
    messages: {
      en: 'This duplicates a mod that is already listed. Publish a new version of it instead.',
      es: 'Duplica un mod que ya está publicado. Publica una versión nueva de ese mod.',
    },
  },
  {
    key: 'spam',
    action: 'reject',
    messages: { en: 'Spam or advertising.', es: 'Spam o publicidad.' },
  },
  {
    key: 'missing_description',
    action: 'request_changes',
    messages: {
      en: 'Please describe what the mod does, how to install it and how to use it.',
      es: 'Describe qué hace el mod, cómo instalarlo y cómo usarlo.',
    },
  },
  {
    key: 'missing_screenshots',
    action: 'request_changes',
    messages: {
      en: 'Please add at least one screenshot that shows the mod in game.',
      es: 'Añade al menos una captura que muestre el mod en el juego.',
    },
  },
  {
    key: 'wrong_category',
    action: 'request_changes',
    messages: {
      en: 'Please move the mod to the category that matches what it does.',
      es: 'Mueve el mod a la categoría que corresponde a lo que hace.',
    },
  },
  {
    key: 'nsfw_unmarked',
    action: 'request_changes',
    messages: {
      en: 'The mod contains adult content: please mark it as NSFW.',
      es: 'El mod tiene contenido para adultos: márcalo como NSFW.',
    },
  },
  {
    key: 'credit_original_author',
    action: 'request_changes',
    messages: {
      en: 'Please credit the original author and link their work.',
      es: 'Menciona al autor original y enlaza su trabajo.',
    },
  },
  {
    key: 'rules_violation',
    action: 'remove',
    messages: {
      en: 'Removed for breaking the site rules.',
      es: 'Retirado por incumplir las normas del sitio.',
    },
  },
  {
    key: 'malware_confirmed',
    action: 'remove',
    messages: {
      en: 'Removed: the file was confirmed to be malicious.',
      es: 'Retirado: se confirmó que el archivo es malicioso.',
    },
  },
  {
    key: 'copyright_claim',
    action: 'remove',
    messages: {
      en: 'Removed after a valid copyright claim.',
      es: 'Retirado tras una reclamación de derechos de autor válida.',
    },
  },
];

/** The templates in force (the saved setting, or the built-in list). */
export async function loadModerationTemplates(exec: Executor): Promise<ModerationTemplate[]> {
  const row = await queryOne<{ value: unknown }>(
    exec,
    sql`SELECT "value" FROM "SiteSetting" WHERE "key" = 'moderationTemplates'`,
  );
  if (!row || !Array.isArray(row.value)) return DEFAULT_MODERATION_TEMPLATES;
  const list = (row.value as unknown[]).filter(
    (t): t is ModerationTemplate =>
      typeof t === 'object' &&
      t !== null &&
      typeof (t as ModerationTemplate).key === 'string' &&
      typeof (t as ModerationTemplate).action === 'string' &&
      typeof (t as ModerationTemplate).messages === 'object',
  );
  return list.length > 0 ? list : DEFAULT_MODERATION_TEMPLATES;
}

export interface ResolvedReason {
  /** Stored in `statusReason` / the audit reason (English template text + note). */
  text: string | null;
  templateKey: string | null;
}

/**
 * The reason of a decision. Throws `VALIDATION_FAILED` for an unknown template or a template of
 * another action.
 */
export function resolveReason(
  templates: readonly ModerationTemplate[],
  action: string,
  templateKey: string | undefined,
  note: string | undefined,
): ResolvedReason {
  const cleanNote = note?.trim() || null;
  if (!templateKey) return { text: cleanNote, templateKey: null };
  const template = templates.find((t) => t.key === templateKey);
  if (!template) {
    throw errors.validation('Unknown reason template', [
      { path: 'templateKey', code: 'unknown_template', message: `no template "${templateKey}"` },
    ]);
  }
  if (template.action !== action) {
    throw errors.validation('This template belongs to another action', [
      { path: 'templateKey', code: 'template_action_mismatch', message: `template is for "${template.action}"` },
    ]);
  }
  const base = template.messages.en ?? Object.values(template.messages).find((m) => typeof m === 'string') ?? '';
  const text = [base.trim(), cleanNote].filter((part): part is string => Boolean(part)).join('\n\n');
  return { text: text === '' ? null : text.slice(0, 2000), templateKey };
}
