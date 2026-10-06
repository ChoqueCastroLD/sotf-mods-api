/**
 * The `list` ModCard (the catalogue row of `/` and `/mods`): thumbnail, name + version, description,
 * author with «Trusted», icon row, «Pending approval» for pending mods, and a compact layout below
 * 34 rem of its own width.
 */
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ModCard, type ModCardListLabels } from '../index.ts';
import { mod, modWithoutImage } from './fixtures.ts';

const labels: ModCardListLabels = {
  trusted: 'Trusted',
  pendingApproval: 'Pending approval',
  comments: (count) => `${count} comments so far`,
  followers: (count) => `${count} followers`,
  downloads: (count) => `${count} downloads`,
  updated: (when) => `Updated ${when}`,
  category: (name) => `Category: ${name}`,
};

const NOW = '2026-09-30T00:00:00.000Z';

describe('ModCard · list', () => {
  const html = renderToString(<ModCard mod={{ ...mod, commentsCount: 31 }} variant="list" labels={labels} now={NOW} />);

  it('shows name, version, description, author and Trusted', () => {
    expect(html).toContain('data-variant="list"');
    expect(html).toContain(mod.name.replace("'", '&#x27;'));
    expect(html).toContain(`>${mod.latestVersion}<`);
    expect(html).toContain(mod.shortDescription);
    expect(html).toContain(`href="/profile/${mod.userHandle}"`);
    expect(html).toContain('>Trusted<');
  });

  it('has the icon row: comments, followers, downloads, updated, category link', () => {
    expect(html).toContain('31 comments so far');
    expect(html).toContain(`${mod.followers} followers`);
    expect(html).toContain(`${mod.downloads} downloads`);
    expect(html).toMatch(/Updated [^<]*ago/);
    expect(html).toContain(`href="/categories/${mod.category?.slug}"`);
  });

  it('turns into a compact row on narrow containers', () => {
    expect(html).toContain('@container/list');
    expect(html).toContain('@max-[34rem]/list:hidden');
  });

  it('carries no compatibility, awards or stamps', () => {
    expect(html).not.toContain('data-compat');
    expect(html).not.toMatch(/Mod of the week|Not verified|Works on/);
  });

  it('labels pending mods and skips Trusted for other creators', () => {
    const pending = renderToString(<ModCard mod={modWithoutImage} variant="list" labels={labels} now={NOW} />);
    expect(pending).toContain('Pending approval');
    expect(pending).not.toContain('>Trusted<');
  });

  it('hides the comments stat when the API did not send the count', () => {
    const legacy = renderToString(
      <ModCard mod={{ ...mod, commentsCount: undefined }} variant="list" labels={labels} />,
    );
    expect(legacy).toContain('hidden');
    expect(legacy).not.toContain('comments so far">');
  });
});
