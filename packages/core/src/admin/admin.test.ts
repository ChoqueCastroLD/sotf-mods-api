// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON snapshots
import { describe, expect, it } from 'vitest';
import { redactSecrets } from '../audit/audit.ts';
import { confidenceOf, scoreCategories } from './recategorize.ts';

describe('recategorisation rules (WP-83)', () => {
  it('weighs title matches over the short description and the body', () => {
    const scored = scoreCategories({ title: 'Kelvin Companion Fix', short: '', body: 'adds a new building' });
    expect(scored[0]).toMatchObject({ slug: 'companions' });
    expect(scored[0]?.score).toBeGreaterThanOrEqual(6);
    const building = scored.find((s) => s.slug === 'building');
    expect(building?.score).toBe(1);
  });

  it('matches whole words only, ignoring accents, case and HTML', () => {
    expect(
      scoreCategories({ title: 'Scaffolding', short: '', body: '' }).find((s) => s.slug === 'companions'),
    ).toBeUndefined();
    const menu = scoreCategories({ title: 'MÓD MENU', short: '', body: '<b>God</b> <i>mode</i>' });
    expect(menu[0]?.slug).toBe('menus-sandbox');
    expect(menu[0]?.matched).toEqual(expect.arrayContaining(['mod menu', 'god mode']));
    expect(scoreCategories({ title: '', short: '', body: '' })).toEqual([]);
  });

  it('gives confidence by share, strength and margin', () => {
    expect(confidenceOf([])).toBe(0);
    expect(confidenceOf([{ slug: 'a', matched: ['x', 'y'], score: 6 }])).toBe(1);
    expect(confidenceOf([{ slug: 'a', matched: ['x'], score: 3 }])).toBe(0.5);
    const close = confidenceOf([
      { slug: 'a', matched: ['x'], score: 6 },
      { slug: 'b', matched: ['y'], score: 6 },
    ]);
    const clear = confidenceOf([
      { slug: 'a', matched: ['x'], score: 6 },
      { slug: 'b', matched: ['y'], score: 1 },
    ]);
    expect(close).toBeLessThan(clear);
    expect(close).toBe(0.25);
  });
});

describe('audit snapshots', () => {
  it('masks secret-bearing keys at any depth and keeps the host of URLs', () => {
    const out = redactSecrets({
      discordWebhooks: [{ url: 'https://discord.com/api/webhooks/123/abcSECRET', events: ['mod.published'] }],
      token: 'plain-token',
      nested: { password: 'hunter2', note: 'fine' },
      count: 3,
      when: undefined,
      fn: () => 1,
    }) as Record<string, any>;
    expect(out.discordWebhooks[0].url).toMatch(/^discord\.com\/…#[0-9a-f]{8}$/);
    expect(out.discordWebhooks[0].events).toEqual(['mod.published']);
    expect(out.token).toMatch(/^…#[0-9a-f]{8}$/);
    expect(out.nested).toEqual({ password: expect.stringMatching(/^…#/), note: 'fine' });
    expect(out.count).toBe(3);
    expect(out.when).toBeNull();
    expect(out.fn).toBeNull();
    expect(JSON.stringify(out)).not.toMatch(/abcSECRET|hunter2|plain-token/);
  });

  it('tells two different secrets apart by fingerprint', () => {
    const a = redactSecrets({ url: 'https://discord.com/api/webhooks/1/a' }) as Record<string, string>;
    const b = redactSecrets({ url: 'https://discord.com/api/webhooks/1/b' }) as Record<string, string>;
    expect(a.url).not.toBe(b.url);
    expect(redactSecrets(null)).toBeNull();
  });
});
