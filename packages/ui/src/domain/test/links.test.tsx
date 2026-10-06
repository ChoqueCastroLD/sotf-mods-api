/**
 * Localised profile links (WP-54/WP-62/WP-63/WP-64 backlogs) and the `ui-domain` catalogue
 * mirror (WP-94 backlog).
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import type { ReactElement } from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import {
  BuildCard,
  CommentItem,
  DomainI18nProvider,
  englishDomainI18n,
  ModCard,
  profilePath,
  ReviewCard,
} from '../index.ts';
import en from '../messages/en.json' with { type: 'json' };
import { build, comment, mod, review } from './fixtures.ts';

const spanish = { ...englishDomainI18n, locale: 'es', href: (path: string) => `/es${path}` };

function hrefs(element: ReactElement, localized: boolean): string[] {
  const html = renderToString(localized ? <DomainI18nProvider value={spanish}>{element}</DomainI18nProvider> : element);
  return [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1] ?? '').filter((h) => h.includes('/profile/'));
}

describe('profile links', () => {
  it('encode the handle', () => {
    expect(profilePath("Axel's mods")).toBe("/profile/Axel's%20mods");
  });

  const cases: Array<[string, ReactElement, string]> = [
    ['ModCard', <ModCard key="m" mod={mod} />, mod.userHandle],
    ['BuildCard', <BuildCard key="b" build={build} />, build.userHandle],
    ['ReviewCard', <ReviewCard key="r" review={review} />, review.author?.handle ?? ''],
    ['CommentItem', <CommentItem key="i" comment={comment} />, comment.author?.handle ?? ''],
  ];

  it.each(cases)('%s links to the locale-less profile by default', (_name, element, handle) => {
    expect(hrefs(element, false)).toContain(profilePath(handle));
  });

  it.each(cases)('%s localises the profile link through DomainI18n.href', (_name, element, handle) => {
    const links = hrefs(element, true);
    expect(links).toContain(`/es${profilePath(handle)}`);
    expect(links).not.toContain(profilePath(handle));
  });
});

describe('ui-domain catalogue', () => {
  it('the bundled English source mirrors @sotf/i18n messages/ui-domain/en.json', () => {
    const path = fileURLToPath(new URL('../../../../i18n/messages/ui-domain/en.json', import.meta.url));
    const i18n = JSON.parse(readFileSync(path, 'utf8')) as Record<string, string>;
    const { $schema: _schema, ...bundled } = en;
    expect(bundled).toEqual(i18n);
  });
});
