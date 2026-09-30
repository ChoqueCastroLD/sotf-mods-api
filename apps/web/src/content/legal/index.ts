/**
 * Legal pages (T0-14): `/privacy`, `/terms`, `/content-policy`, `/dmca` and `/cookies`.
 *
 * DRAFTS written from the actual behaviour of v2 (PLAN §9.3: data inventory, retention,
 * processors, cookies). They are published with a visible «pending legal review» notice until the
 * site owner has them reviewed; flip `reviewed` below when that happens. English is authoritative;
 * translations are courtesy copies (the pages say so).
 */
import type { MarkdownInstance } from 'astro';
import { z } from 'zod';
import { docCollection } from '../../components/content/docs.ts';

export const LEGAL_DOCS = ['privacy', 'terms', 'content-policy', 'dmca', 'cookies'] as const;
export type LegalDoc = (typeof LEGAL_DOCS)[number];

export interface LegalMeta {
  /** Last substantive change (ISO date), shown as «Last updated» and used as `dateModified`. */
  updated: string;
  /** `true` once a lawyer has reviewed the text (removes the draft notice). */
  reviewed: boolean;
}

export const LEGAL_META: Readonly<Record<LegalDoc, LegalMeta>> = {
  privacy: { updated: '2026-09-30', reviewed: false },
  terms: { updated: '2026-09-30', reviewed: false },
  'content-policy': { updated: '2026-09-30', reviewed: false },
  dmca: { updated: '2026-09-30', reviewed: false },
  cookies: { updated: '2026-09-30', reviewed: false },
};

/**
 * Contact points quoted by the texts. Placeholders until the owner confirms the mailboxes
 * (docs/backlog/WP-73.md); keep them in sync with the Markdown files.
 */
export const LEGAL_CONTACTS = {
  privacy: 'privacy@sotf-mods.com',
  legal: 'legal@sotf-mods.com',
  dmca: 'dmca@sotf-mods.com',
} as const;

export const LegalFrontmatter = z.object({
  title: z.string().min(3),
  description: z.string().min(50).max(170),
  anchors: z.array(z.string().regex(/^[a-z][a-z0-9-]*$/)).min(1),
});
export type LegalFrontmatter = z.infer<typeof LegalFrontmatter>;

type Module = MarkdownInstance<Record<string, unknown>>;

export const legalDocs = docCollection(import.meta.glob<Module>('./*/*.md', { eager: true }), LegalFrontmatter);

export function isLegalDoc(value: string): value is LegalDoc {
  return (LEGAL_DOCS as readonly string[]).includes(value);
}
