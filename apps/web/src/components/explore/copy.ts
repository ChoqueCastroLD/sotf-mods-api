/**
 * Editorial copy of the category hubs: the intro of each of the 12 v2 categories (PLAN T0-06)
 * lives in the `explore` namespace (`explore_category_intro_<slug>`), so it is translated and
 * checked like every other string; it doubles as the meta description (≤ 160 characters).
 * Build categories and any category without its own intro use a generic sentence.
 */
import { CATEGORY_SLUGS } from '@sotf/contracts/common';
import { m } from '@sotf/i18n/messages';

type MessageFn = () => string;

export function categoryIntro(slug: string, name: string, kind: 'mod' | 'build'): string {
  if ((CATEGORY_SLUGS as readonly string[]).includes(slug)) {
    const key = `explore_category_intro_${slug.replace(/-/g, '_')}`;
    const fn = (m as unknown as Record<string, MessageFn | undefined>)[key];
    if (fn) return fn();
  }
  return kind === 'build'
    ? m.explore_category_intro_builds_generic({ category: name })
    : m.explore_category_intro_generic({ category: name });
}
