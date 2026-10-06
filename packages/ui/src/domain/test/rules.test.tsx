/// <reference types="node" />
/**
 * The rules the domain components promise (PLAN §3.3, §3.9, research/03 §5): status is icon +
 * text, ad slots reserve their height, the grid ModCard turns compact below 260 px of its own
 * width (checked in the compiled CSS), constants mirror @sotf/contracts, and the helpers are
 * correct at their edges.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { REACTION_EMOJI } from '@sotf/contracts/comments';
import { COMPAT_STATUSES, CREATOR_TIER_KEYS, SURVIVOR_RANK_KEYS } from '@sotf/contracts/common';
import { BADGES, CREATOR_TIERS } from '@sotf/contracts/gamification';
import { REVIEW_RULES } from '@sotf/contracts/reviews';
import tailwindcss from '@tailwindcss/vite';
import { renderToString } from 'react-dom/server';
import { build, type Rolldown } from 'vite';
import { describe, expect, it } from 'vitest';
import { FIELD_KIT_NAMES } from '../../../../brand/src/field-kit.ts';
import {
  AD_FORMATS,
  AD_MIN_HEIGHT,
  AdSlot,
  BadgeStamp,
  COMPAT_STATUS_VALUES,
  CompatBadge,
  createDomainTranslate,
  DOMAIN_MESSAGE_KEYS,
  DomainI18nProvider,
  englishDomainI18n,
  formatBytes,
  formatIcu,
  initialsOf,
  MOD_CARD_COMPACT_BELOW,
  ModCard,
  nextFilterState,
  niceTicks,
  RATING_MIN_REVIEWS,
  RankStamp,
  REACTION_GLYPHS,
  reportShares,
  SPOTLIGHT_TIERS,
  seriesColor,
  sparklinePoints,
  TierStamp,
  withSlot,
} from '../index.ts';
import en from '../messages/en.json' with { type: 'json' };
import { mod, modWithoutImage } from './fixtures.ts';

const DOMAIN_DIR = fileURLToPath(new URL('..', import.meta.url));
const PACKAGE_ROOT = fileURLToPath(new URL('../../..', import.meta.url));

function textOf(html: string): string {
  return html
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

describe('CompatBadge: always icon + text', () => {
  for (const status of COMPAT_STATUS_VALUES) {
    for (const [build, short] of [
      ['1.0.4', false],
      ['1.0.4', true],
      [null, false],
    ] as const) {
      it(`${status} (build ${build ?? 'none'}${short ? ', short' : ''})`, () => {
        const html = renderToString(<CompatBadge status={status} build={build} short={short} />);
        expect(html).toMatch(/<svg[^>]*aria-hidden="true"/);
        const text = textOf(html);
        expect(text.length).toBeGreaterThan(2);
        if (build && !short) expect(text).toContain(build);
      });
    }
  }

  it('covers exactly the contract statuses', () => {
    expect([...COMPAT_STATUS_VALUES].sort()).toEqual([...COMPAT_STATUSES].sort());
  });

  it('no longer shows compatibility, awards or featured badges inside a ModCard', () => {
    const broken = { ...modWithoutImage, compatStatus: 'broken' as const, isFeatured: true, awards: mod.awards };
    for (const variant of ['grid', 'row', 'compact', 'feature', 'list'] as const) {
      const html = renderToString(<ModCard mod={broken} variant={variant} currentBuild="1.0.4" />);
      expect(html).not.toContain('data-compat');
      expect(textOf(html)).not.toMatch(/Broken|Works on|Not verified|Mod of the week/i);
    }
    // The grid and row cards keep «Featured» out of the cover badges.
    expect(textOf(renderToString(<ModCard mod={broken} />))).not.toMatch(/Featured/);
  });
});

describe('AdSlot reserves its height', () => {
  for (const format of AD_FORMATS) {
    it(format, () => {
      const html = renderToString(<AdSlot format={format} client="ca-pub-0000000000000000" slot="1" />);
      const [small, large] = AD_MIN_HEIGHT[format];
      expect(html).toContain(`min-h-[${small}px]`);
      expect(html).toContain(`md:min-h-[${large}px]`);
      // The site's units are AdSense in-article (fluid) units.
      expect(html).toContain('data-ad-format="fluid"');
      expect(html).toContain('data-ad-layout="in-article"');
      expect(textOf(html)).toContain('Advertisement');
    });
  }
});

describe('ModCard container query', () => {
  it('switches to the compact layout below 260 px', () => {
    expect(MOD_CARD_COMPACT_BELOW).toBe(260);
    const html = renderToString(<ModCard mod={mod} />);
    expect(html).toContain('@container/card');
    for (const utility of ['@max-[260px]/card:flex-row', '@max-[260px]/card:size-10', '@max-[260px]/card:hidden']) {
      expect(html).toContain(utility);
    }
  });

  it('compiles to a named container query at 260 px', async () => {
    const result = await build({
      configFile: false,
      root: PACKAGE_ROOT,
      logLevel: 'silent',
      plugins: [tailwindcss()],
      build: {
        write: false,
        cssMinify: 'lightningcss',
        rollupOptions: { input: { ui: 'src/tokens.css' } },
      },
    });
    const outputs = (Array.isArray(result) ? result : [result]) as Rolldown.RolldownOutput[];
    const css = outputs
      .flatMap((output) => output.output)
      .filter((file): file is Rolldown.OutputAsset => file.type === 'asset' && file.fileName.endsWith('.css'))
      .map((file) => String(file.source))
      .join('\n');
    expect(css).toContain('.\\@container\\/card{container:card/inline-size}');
    const query = /@container card (?:not \(width>=260px\)|\(width<260px\))\{/.exec(css);
    expect(query).not.toBeNull();
    const block = css.slice(query?.index ?? 0, (query?.index ?? 0) + 2_000);
    expect(block).toContain('.\\@max-\\[260px\\]\\/card\\:hidden{display:none}');
    expect(block).toContain('.\\@max-\\[260px\\]\\/card\\:flex-row{flex-direction:row}');
  }, 60_000);
});

describe('constants mirror @sotf/contracts', () => {
  it('public stars threshold', () => {
    expect(RATING_MIN_REVIEWS).toBe(REVIEW_RULES.publicStarsMinReviews);
  });

  it('reaction glyphs', () => {
    expect(REACTION_GLYPHS).toEqual(REACTION_EMOJI);
  });

  it('spotlight tiers', () => {
    expect([...SPOTLIGHT_TIERS].sort()).toEqual(
      CREATOR_TIERS.filter((tier) => tier.spotlight)
        .map((tier) => tier.key)
        .sort(),
    );
  });

  it('every rank and tier has a stamp label', () => {
    for (const rank of SURVIVOR_RANK_KEYS)
      expect(textOf(renderToString(<RankStamp rank={rank} />)).length).toBeGreaterThan(5);
    for (const tier of CREATOR_TIER_KEYS) {
      const html = renderToString(<TierStamp tier={tier} iconMode="inline" />);
      expect(html).toContain('<svg');
      expect(textOf(html)).toMatch(/Creator tier\s*:\s*\S/);
    }
  });

  it('every catalogue badge icon renders (Lucide map or Field kit)', () => {
    for (const badge of BADGES) {
      const html = renderToString(<BadgeStamp name={badge.key} icon={badge.icon} iconMode="inline" />);
      if (FIELD_KIT_NAMES.includes(badge.icon as never)) continue;
      // Lucide icons carry their own class name; the fallback would be `lucide-award`.
      expect(html, badge.icon).toContain(`lucide-${badge.icon}`);
    }
  });
});

describe('i18n catalogue (ui-domain namespace)', () => {
  const source = readdirSync(DOMAIN_DIR)
    .filter((file) => /\.tsx?$/.test(file))
    .map((file) => readFileSync(`${DOMAIN_DIR}/${file}`, 'utf8'))
    .join('\n');

  it('uses the namespace prefix and parses as ICU', () => {
    for (const key of DOMAIN_MESSAGE_KEYS) {
      expect(key).toMatch(/^ui_domain_[a-z0-9_]+$/);
      expect(key.length).toBeLessThanOrEqual(80);
      const message = en[key];
      expect(message.trim()).toBe(message);
      expect(message).not.toMatch(/<[a-z]/i);
      expect(() => formatIcu(message, {})).not.toThrow();
    }
  });

  it('every key is used by a component', () => {
    const dynamic = new Set(Object.keys(REACTION_GLYPHS).map((kind) => `ui_domain_reaction_${kind}`));
    // Award labels left the cards (awards are gone from the UI); the keys wait for the copy cleanup.
    const retired = new Set([
      'ui_domain_award_mod_of_week',
      'ui_domain_award_build_of_month',
      'ui_domain_award_mod_of_month',
      // The version table no longer shows compatibility reports.
      'ui_domain_versions_col_reports',
    ]);
    const unused = DOMAIN_MESSAGE_KEYS.filter(
      (key) => !dynamic.has(key) && !retired.has(key) && !source.includes(`'${key}'`),
    );
    expect(unused).toEqual([]);
  });

  it('falls back to English for missing keys and formats numbers per locale', () => {
    const t = createDomainTranslate({ ui_domain_kit_mods: '{count, plural, one {# mod} other {# mods}}' }, 'de');
    expect(t('ui_domain_kit_mods', { count: 1234 })).toBe('1.234 mods');
    expect(t('ui_domain_badge_new')).toBe('New');
  });

  it('keeps word order for node arguments (withSlot)', () => {
    const provider = {
      ...englishDomainI18n,
      t: createDomainTranslate({ ui_domain_by_author: '{author} による' }, 'ja'),
    };
    const html = renderToString(
      <DomainI18nProvider value={provider}>
        <ModCard mod={mod} variant="compact" />
        <ModCard mod={mod} />
      </DomainI18nProvider>,
    );
    expect(html).toMatch(/ImAxel<\/a> による/);
    expect(withSlot('no slot here', 'x')).toEqual(['no slot here']);
  });
});

describe('ICU subset', () => {
  it('plural, exact match, # and nested arguments', () => {
    const message = '{count, plural, =0 {none} one {# item by {name}} other {# items by {name}}}';
    expect(formatIcu(message, { count: 0, name: 'A' })).toBe('none');
    expect(formatIcu(message, { count: 1, name: 'A' })).toBe('1 item by A');
    expect(formatIcu(message, { count: 1500, name: 'A' }, 'en')).toBe('1,500 items by A');
  });

  it('plural categories of the locale (ru)', () => {
    const message = '{n, plural, one {# мод} few {# мода} many {# модов} other {# мода}}';
    expect(formatIcu(message, { n: 1 }, 'ru')).toBe('1 мод');
    expect(formatIcu(message, { n: 3 }, 'ru')).toBe('3 мода');
    expect(formatIcu(message, { n: 25 }, 'ru')).toBe('25 модов');
  });

  it('select, ordinal, number styles and escapes', () => {
    expect(formatIcu('{kind, select, mod {Mod} other {Thing}}', { kind: 'mod' })).toBe('Mod');
    expect(formatIcu('{kind, select, mod {Mod} other {Thing}}', { kind: 'x' })).toBe('Thing');
    expect(formatIcu('{p, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}', { p: 22 })).toBe('22nd');
    expect(formatIcu('{n, number, compact}', { n: 1_982_114 })).toBe('1.98M');
    expect(formatIcu('{r, number, percent}', { r: 0.125 })).toBe('12.5%');
    expect(formatIcu("Use '{'braces'}' and it''s fine")).toBe("Use {braces} and it's fine");
    expect(formatIcu('Missing {arg}')).toBe('Missing {arg}');
  });

  it('rejects malformed messages', () => {
    expect(() => formatIcu('{count, plural, one {x}}')).toThrow(/other/);
    expect(() => formatIcu('{a, date}')).toThrow(/unsupported/);
    expect(() => formatIcu('unbalanced }')).toThrow();
    expect(() => formatIcu('{open')).toThrow();
  });
});

describe('helpers', () => {
  it('reportShares always sums to 100 %', () => {
    for (const counts of [
      { works: 1, partial: 1, broken: 1 },
      { works: 31, partial: 1, broken: 3 },
      { works: 0, partial: 0, broken: 7 },
      { works: 2, partial: 0, broken: 0 },
    ]) {
      const shares = reportShares(counts);
      expect(Math.round((shares.works + shares.partial + shares.broken) * 10) / 10).toBe(100);
    }
    expect(reportShares({ works: 0, partial: 0, broken: 0 })).toEqual({ works: 0, partial: 0, broken: 0 });
  });

  it('niceTicks are round and cover the maximum', () => {
    expect(niceTicks(1_900)).toEqual([0, 500, 1000, 1500, 2000]);
    expect(niceTicks(7)).toEqual([0, 2, 4, 6, 8]);
    expect(niceTicks(0)).toEqual([0, 1]);
    expect(niceTicks(100)).toEqual([0, 25, 50, 75, 100]);
  });

  it('seriesColor never cycles', () => {
    expect(seriesColor(0)).toBe('var(--color-chart-1)');
    expect(seriesColor(7)).toBe('var(--color-chart-8)');
    expect(() => seriesColor(8)).toThrow(RangeError);
  });

  it('sparklinePoints fit the box', () => {
    const points = sparklinePoints([5, 10, 0], 32);
    expect(points[0]?.[0]).toBe(0);
    expect(points[2]?.[0]).toBe(100);
    for (const [, y] of points) {
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(32);
    }
    expect(sparklinePoints([], 32)).toEqual([]);
  });

  it('nextFilterState cycles include and exclude', () => {
    expect(nextFilterState('off', false)).toBe('include');
    expect(nextFilterState('include', false)).toBe('off');
    expect(nextFilterState('exclude', false)).toBe('include');
    expect(nextFilterState('off', true)).toBe('exclude');
    expect(nextFilterState('exclude', true)).toBe('off');
  });

  it('initialsOf', () => {
    expect(initialsOf("Axel's Mod Menu")).toBe('AM');
    expect(initialsOf('RedLoader')).toBe('R');
    expect(initialsOf('[BETA] Kelvin-Seek')).toBe('BK');
    expect(initialsOf('— ✦ —')).toBe('?');
  });

  it('formatBytes uses binary multiples', () => {
    expect(formatBytes('en', 512)).toBe('512 bytes');
    expect(formatBytes('en', 1_254_310)).toBe('1.2 MB');
    expect(formatBytes('en', 1023.9)).toBe('1 kB');
  });
});
