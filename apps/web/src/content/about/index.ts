/** `/about` (research/03 §6.15): who runs SOTF Mods, what it is and is not, and the fan disclaimer. */
import type { MarkdownInstance } from 'astro';
import { z } from 'zod';
import { docCollection } from '../../components/content/docs.ts';

export const AboutFrontmatter = z.object({
  title: z.string().min(3),
  description: z.string().min(50).max(170),
  anchors: z.array(z.string().regex(/^[a-z][a-z0-9-]*$/)).min(1),
});

/** Last substantive change of the page. */
export const ABOUT_UPDATED = '2026-09-30';

type Module = MarkdownInstance<Record<string, unknown>>;

export const aboutDoc = docCollection(import.meta.glob<Module>('./*.md', { eager: true }), AboutFrontmatter);
