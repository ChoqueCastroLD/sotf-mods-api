/**
 * `/developers` (T0-32): the public API guide. The prose is Markdown per locale (English
 * authoritative); the tables of limits and deprecated routes are generated from
 * `@sotf/contracts`, so they never drift from what the API enforces.
 */
import type { MarkdownInstance } from 'astro';
import { z } from 'zod';
import { docCollection } from '../../components/content/docs.ts';

export const DevelopersFrontmatter = z.object({
  title: z.string().min(3),
  description: z.string().min(50).max(170),
  anchors: z.array(z.string().regex(/^[a-z][a-z0-9-]*$/)).min(1),
});

/** Last substantive change of the guide. */
export const DEVELOPERS_UPDATED = '2026-09-30';

/**
 * `Sunset` announced by the deprecated legacy routes (mirror of `LEGACY_SUNSET` in
 * `apps/api/src/legacy/index.ts`; docs/backlog/WP-73.md asks to move it into the contracts).
 */
export const LEGACY_SUNSET_DATE = '2027-12-31';

type Module = MarkdownInstance<Record<string, unknown>>;

export const developersDoc = docCollection(import.meta.glob<Module>('./*.md', { eager: true }), DevelopersFrontmatter);
