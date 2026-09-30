/**
 * `/install` guide (T0-33, research/03 §6.7): one Markdown file per locale, English authoritative.
 * Every translation has the same sections in the same order (`INSTALL_ANCHORS`), so deep links
 * such as `/install#redloader` (mod page install dialog) and `/install#oneclick` (the retired
 * one-click installer redirect) land on the same section in every language.
 */
import type { MarkdownInstance } from 'astro';
import { z } from 'zod';
import { docCollection } from '../../components/content/docs.ts';

/** Section anchors, in order: the first four are the numbered steps of the rail. */
export const INSTALL_ANCHORS = [
  'check',
  'redloader',
  'mods',
  'verify',
  'antivirus',
  'bepinex',
  'update',
  'dedicated',
  'troubleshooting',
  'oneclick',
] as const;
export type InstallAnchor = (typeof INSTALL_ANCHORS)[number];
export const INSTALL_STEPS: readonly InstallAnchor[] = ['check', 'redloader', 'mods', 'verify'];

/**
 * What the guide was last checked against («Verified with …»). Update it whenever someone walks
 * through the guide on a fresh install; the date is also the article's `dateModified`.
 */
export const INSTALL_VERIFIED = {
  game: '1.0',
  redLoader: '0.8.6',
  date: '2026-09-30',
} as const;

/** First publication of the guide (the legacy `/loader` page it replaces). */
export const INSTALL_PUBLISHED = '2023-03-01';

/** Official download locations of the loader and the manager (also linked from the text). */
export const LOADER_LINKS = {
  redLoader: 'https://github.com/ToniMacaroni/RedLoader/releases',
  redManager: 'https://github.com/ToniMacaroni/RedManager/releases',
} as const;

const Faq = z.object({ q: z.string().min(5), a: z.string().min(20) });

export const InstallFrontmatter = z.object({
  /** Visible `<h1>`. */
  title: z.string().min(5),
  /** `<title>` without the site suffix (≤ 60 characters with it). */
  seoTitle: z.string().min(5).max(70),
  /** Meta description (≤ 160). */
  description: z.string().min(50).max(170),
  /** Answer-first summary (≈ 50 words). */
  tldr: z.string().min(50),
  anchors: z.array(z.enum(INSTALL_ANCHORS)).length(INSTALL_ANCHORS.length),
  /** Short labels of the sections for the rail and the mobile stepper. */
  nav: z.record(z.enum(INSTALL_ANCHORS), z.string().min(2).max(40)),
  faq: z.array(Faq).min(4),
});
export type InstallFrontmatter = z.infer<typeof InstallFrontmatter>;

type Module = MarkdownInstance<Record<string, unknown>>;

export const installGuide = docCollection(import.meta.glob<Module>('./*.md', { eager: true }), InstallFrontmatter);
