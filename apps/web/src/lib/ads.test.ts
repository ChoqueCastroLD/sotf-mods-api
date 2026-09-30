import { ModCardDTO } from '@sotf/contracts/catalog';
import { exampleOf } from '@sotf/contracts/dto';
import { englishDomainI18n } from '@sotf/ui/domain';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import ExploreResults from '../components/explore/ExploreResults.tsx';
import { adUnitFor, feedAdAfter } from './ads.ts';
import { parseEnv } from './env.ts';

describe('ad placements (PLAN §8.5)', () => {
  it('needs both the publisher id and the unit id', () => {
    const off = parseEnv({ PUBLIC_ADSENSE_SLOT_FEED: '1234567890' });
    expect(adUnitFor(off, 'feed')).toBeNull();
    const on = parseEnv({ PUBLIC_ADSENSE_CLIENT: 'ca-pub-2799839819522052', PUBLIC_ADSENSE_SLOT_FEED: '1234567890' });
    expect(adUnitFor(on, 'feed')).toEqual({ client: 'ca-pub-2799839819522052', slot: '1234567890' });
    expect(adUnitFor(on, 'modSidebar')).toBeNull();
  });

  it('puts in-feed units after cards 6 and 18, never last', () => {
    expect(feedAdAfter(6, 24)).toBe(true);
    expect(feedAdAfter(18, 24)).toBe(true);
    expect(feedAdAfter(7, 24)).toBe(false);
    expect(feedAdAfter(6, 6)).toBe(false);
  });
});

describe('Explore in-feed units', () => {
  const base = ModCardDTO.parse(exampleOf(ModCardDTO));
  const items = Array.from({ length: 24 }, (_, index) => ({ ...base, id: index + 1 }) as ModCardDTO);
  const ad = { client: 'ca-pub-2799839819522052', slot: '1234567890' };
  const render = (props: Partial<Parameters<typeof ExploreResults>[0]>) =>
    renderToStaticMarkup(ExploreResults({ items, view: 'grid', locale: 'en', i18n: englishDomainI18n, ad, ...props }));
  const count = (html: string, needle: string) => html.split(needle).length - 1;

  it('renders two units in the grid of the first page, outside the items', () => {
    const html = render({});
    expect(count(html, 'data-explore-ad=""')).toBe(2);
    expect(count(html, 'data-ad-slot="1234567890"')).toBe(2);
    expect(count(html, 'data-explore-item=""')).toBe(24);
    // The first unit follows the 6th card.
    const sixth = html.indexOf('data-position="6"');
    const seventh = html.indexOf('data-position="7"');
    const unit = html.indexOf('data-explore-ad=""');
    expect(sixth).toBeLessThan(unit);
    expect(unit).toBeLessThan(seventh);
  });

  it('renders none on later pages, in other views or without a unit', () => {
    expect(render({ offset: 24 })).not.toContain('adsbygoogle');
    expect(render({ view: 'list' })).not.toContain('adsbygoogle');
    expect(render({ ad: null })).not.toContain('adsbygoogle');
  });
});
