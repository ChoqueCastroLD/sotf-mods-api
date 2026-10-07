import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { QueryClient } from '@tanstack/react-query';
import { afterEach, describe, expect, it } from 'vitest';
import { setActiveCatalog } from '../../lib/messages.ts';
import { BUILT_IN_TEMPLATES, dropFromLane, isItemId, type QueuePage, rangerKeys, SLA_HOURS } from './api.ts';
import { pathConcern } from './ItemPanels.tsx';
import { scanIdOf } from './ScanOverrideDialog.tsx';
import { slaState, waitingText } from './shared.tsx';
import { templatesFor, templateText, templateTitle } from './templates.ts';

afterEach(() => setActiveCatalog('en', {}));

describe('slaState', () => {
  it('is ok before two thirds of the SLA, due after, overdue from the SLA', () => {
    expect(slaState(0)).toBe('ok');
    expect(slaState(47.9)).toBe('ok');
    expect(slaState(48)).toBe('due');
    expect(slaState(SLA_HOURS - 0.1)).toBe('due');
    expect(slaState(SLA_HOURS)).toBe('overdue');
    expect(slaState(500)).toBe('overdue');
  });
});

describe('waitingText', () => {
  it('uses minutes under an hour, hours under two days, then days', () => {
    expect(waitingText(0.5)).toMatch(/30/);
    expect(waitingText(-1)).toMatch(/0/);
    expect(waitingText(5.9)).toMatch(/5/);
    expect(waitingText(47)).toMatch(/47/);
    expect(waitingText(24 * 3 + 5)).toMatch(/3/);
    expect(waitingText(0.5)).not.toBe(waitingText(5));
    expect(waitingText(5)).not.toBe(waitingText(24 * 5));
  });
});

describe('pathConcern', () => {
  it('flags executables and scripts wherever they are', () => {
    expect(pathConcern('Tools/setup.EXE', false)).toBe('flagged');
    expect(pathConcern('run.ps1', true)).toBe('flagged');
  });

  it('marks new native code only when the DLL was added', () => {
    expect(pathConcern('Mods/Stack.dll', true)).toBe('code');
    expect(pathConcern('Mods/Stack.dll', false)).toBeNull();
  });

  it('ignores data files and dotfiles without an extension', () => {
    expect(pathConcern('Mods/config.json', true)).toBeNull();
    expect(pathConcern('.exe', true)).toBeNull();
  });
});

describe('reason templates', () => {
  const custom = {
    key: 'custom_rule',
    action: 'reject' as const,
    messages: { en: 'English text', es: 'Texto en español' },
  };

  it('uses the wording of the ranger locale, then English, then the first one', () => {
    setActiveCatalog('es', {});
    expect(templateText(custom)).toBe('Texto en español');
    setActiveCatalog('de', {});
    expect(templateText(custom)).toBe('English text');
    expect(templateText({ ...custom, messages: { fr: 'Texte' } })).toBe('Texte');
  });

  it('falls back to the translated built-in text and a humanised key', () => {
    const builtIn = BUILT_IN_TEMPLATES[0];
    if (!builtIn) throw new Error('no built-in templates');
    expect(templateText(builtIn)).not.toBe(builtIn.key);
    expect(templateTitle(custom)).toBe('Custom rule');
    expect(templateText({ ...custom, messages: {} })).toBe('Custom rule');
  });

  it('filters templates by action', () => {
    expect(templatesFor(BUILT_IN_TEMPLATES, 'remove').map((t) => t.key)).toEqual([
      'rules_violation',
      'malware_confirmed',
      'copyright_claim',
    ]);
  });

  it('mirrors the built-in templates of @sotf/core (keys and actions)', () => {
    const core = readFileSync(
      fileURLToPath(new URL('../../../../../../packages/core/src/settings/templates.ts', import.meta.url)),
      'utf8',
    );
    const block = core.slice(
      core.indexOf('DEFAULT_MODERATION_TEMPLATES'),
      core.indexOf('\n];', core.indexOf('DEFAULT_MODERATION_TEMPLATES')),
    );
    const pairs = [...block.matchAll(/key: '([a-z_]+)',\s*action: '([a-z_]+)'/g)].map(([, key, action]) => ({
      key,
      action,
    }));
    expect(pairs.length).toBeGreaterThan(0);
    expect(BUILT_IN_TEMPLATES.map(({ key, action }) => ({ key, action }))).toEqual(pairs);
  });
});

describe('dropFromLane', () => {
  const item = (id: string) => ({ id }) as QueuePage['items'][number];
  const page = (ids: string[], count: number) =>
    ({
      items: ids.map(item),
      total: ids.length,
      counts: { new_mods: count, versions: 4 },
      nextCursor: null,
    }) as unknown as QueuePage;

  it('removes the item from its cached pages and decrements that lane count only', () => {
    const client = new QueryClient();
    client.setQueryData(rangerKeys.queue('new_mods', {}), page(['new_mods:mod:1', 'new_mods:mod:2'], 3));
    client.setQueryData(rangerKeys.queue('new_mods', { risk: 'high' }), page(['new_mods:mod:3'], 3));
    dropFromLane(client, 'new_mods', 'new_mods:mod:2');
    const data = client.getQueryData<QueuePage>(rangerKeys.queue('new_mods', {}));
    expect(data?.items.map((i) => i.id)).toEqual(['new_mods:mod:1']);
    expect(data?.total).toBe(1);
    expect(data?.counts).toMatchObject({ new_mods: 2, versions: 4 });
    const other = client.getQueryData<QueuePage>(rangerKeys.queue('new_mods', { risk: 'high' }));
    expect(other?.items).toHaveLength(1);
    expect(other?.counts).toMatchObject({ new_mods: 3 });
  });

  it('is a no-op for an unknown item or an empty cache', () => {
    const client = new QueryClient();
    dropFromLane(client, 'versions', 'versions:version:9');
    expect(client.getQueryData(rangerKeys.queue('versions', {}))).toBeUndefined();
  });
});

describe('item ids and scans', () => {
  it('accepts `<lane>:<type>:<id>` only', () => {
    expect(isItemId('new_mods:mod:12')).toBe(true);
    expect(isItemId('reports:report:7')).toBe(true);
    for (const bad of ['new_mods:mod:', 'x', 12, null, `a:b:${'1'.repeat(90)}`, 'NEW:mod:1']) {
      expect(isItemId(bad)).toBe(false);
    }
  });

  it('reads the scan id only when the API sends a positive integer', () => {
    expect(scanIdOf(null)).toBeNull();
    expect(scanIdOf({} as never)).toBeNull();
    expect(scanIdOf({ id: 0 } as never)).toBeNull();
    expect(scanIdOf({ id: '5' } as never)).toBeNull();
    expect(scanIdOf({ id: 5 } as never)).toBe(5);
  });
});
