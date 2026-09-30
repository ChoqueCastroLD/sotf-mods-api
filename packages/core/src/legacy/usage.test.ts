/** In-memory aggregation of legacy calls (User-Agent/Origin per route and UTC day). */
import { describe, expect, it } from 'vitest';
import { ManualClock } from '../kernel/clock.ts';
import { LEGACY_USAGE_MAX_KEYS, LEGACY_USAGE_MAX_VALUE, LegacyUsageRecorder } from './usage.ts';

const call = (overrides: Partial<Parameters<LegacyUsageRecorder['record']>[0]> = {}) => ({
  route: '/api/mods',
  method: 'GET',
  status: 200,
  userAgent: 'RedManager/1.1.10',
  origin: 'tauri://localhost',
  ...overrides,
});

describe('LegacyUsageRecorder', () => {
  it('counts identical calls once per key and keeps days apart', () => {
    const clock = new ManualClock('2026-10-01T23:59:00.000Z');
    const recorder = new LegacyUsageRecorder({ clock });
    recorder.record(call());
    recorder.record(call());
    recorder.record(call({ status: 204 }));
    clock.advance(120_000);
    recorder.record(call());
    const entries = recorder.drain();
    expect(entries).toEqual([
      {
        day: '2026-10-01',
        route: '/api/mods',
        method: 'GET',
        status: '2xx',
        ua: 'RedManager/1.1.10',
        origin: 'tauri://localhost',
        count: 3,
      },
      {
        day: '2026-10-02',
        route: '/api/mods',
        method: 'GET',
        status: '2xx',
        ua: 'RedManager/1.1.10',
        origin: 'tauri://localhost',
        count: 1,
      },
    ]);
    expect(recorder.size).toBe(0);
  });

  it('separates status classes, strips control characters and cuts long values', () => {
    const recorder = new LegacyUsageRecorder();
    recorder.record(call({ status: 410, userAgent: `bad\nagent${'x'.repeat(500)}`, origin: undefined }));
    const [entry] = recorder.drain();
    expect(entry?.status).toBe('4xx');
    expect(entry?.ua.startsWith('bad agent')).toBe(true);
    expect(entry?.ua).toHaveLength(LEGACY_USAGE_MAX_VALUE);
    expect(entry?.origin).toBe('');
  });

  it('folds new keys into "(other)" when the map is full', () => {
    const recorder = new LegacyUsageRecorder();
    for (let i = 0; i < LEGACY_USAGE_MAX_KEYS + 10; i += 1) recorder.record(call({ userAgent: `ua-${i}` }));
    const entries = recorder.drain();
    expect(entries).toHaveLength(LEGACY_USAGE_MAX_KEYS + 1);
    expect(entries.find((e) => e.ua === '(other)')?.count).toBe(10);
  });
});
