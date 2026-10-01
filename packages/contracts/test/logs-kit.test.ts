import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parseLog, summarizeLog } from '../src/log-parser.ts';
import { redactLog } from '../src/log-redact.ts';

const sample = readFileSync(new URL('../fixtures/logs/redloader-sample.log', import.meta.url), 'utf8');

describe('redactLog', () => {
  it('hides user folders but keeps the rest of the path', () => {
    const { text, counts } = redactLog(
      'Data Path: C:\\Users\\Luis Choque\\AppData\\LocalLow\\x and /home/kelvin/.config and C:\\Users\\Public\\x',
    );
    expect(text).toBe(
      'Data Path: C:\\Users\\<user>\\AppData\\LocalLow\\x and /home/<user>/.config and C:\\Users\\Public\\x',
    );
    expect(counts.paths).toBe(2);
  });

  it('hides Steam ids, IPs and emails', () => {
    const { text, counts } = redactLog(
      'steam 76561198012345678 STEAM_0:1:4242 from 84.12.201.7:27016 and 2001:db8::1 mail me@example.com, loopback 127.0.0.1',
    );
    expect(text).toBe('steam <steamid> <steamid> from <ip>:27016 and <ip> mail <email>, loopback 127.0.0.1');
    expect(counts).toMatchObject({ steamIds: 2, ips: 2, emails: 1 });
  });

  it('keeps versions, clocks and assembly numbers', () => {
    const line =
      '[14:02:09.203] Version=1.0.0.0, Culture=neutral; AmmoUi v1.3.0.2 at 12:34:56 build 2022.3.62f1 by Author: Kelvin';
    const { text, counts } = redactLog(line);
    expect(text).toBe(line);
    expect(counts.total).toBe(0);
  });

  it('hides secrets by key name and by shape', () => {
    const { text, counts } = redactLog(
      [
        'token=ghp_0123456789abcdefghijklmnopqrstuvwxyz12', // check-forbidden-allow: secret-github-token fake token for the redaction test
        'Authorization: Bearer abcdefghijklmnop123456',
        '"password": "hunter2hunter2"',
        'url https://user:pass@example.com/x',
        'jwt eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.abcdefghijklmnop',
        'author: ImAxel, passed: true, tokens: 12',
      ].join('\n'),
    );
    expect(text).not.toMatch(/hunter2|ghp_|abcdefghijklmnop|user:pass/);
    expect(text).toContain('author: ImAxel, passed: true, tokens: 12');
    expect(counts.secrets).toBeGreaterThanOrEqual(5);
  });

  it('cuts absurdly long lines', () => {
    const { text } = redactLog(`${'a'.repeat(20_000)}\nshort`);
    expect(text.split('\n')[0]?.length).toBeLessThan(8100);
    expect(text.endsWith('\nshort')).toBe(true);
  });

  it('redacts the whole sample fixture', () => {
    const { text, counts } = redactLog(sample);
    expect(text).not.toMatch(/Luis Choque|76561198012345678|84\.12\.201\.7|outlook\.com|ghp_/);
    expect(counts.paths).toBeGreaterThanOrEqual(3);
    expect(counts.ips).toBe(2);
    expect(text.split('\n').length).toBe(sample.split('\n').length);
  });
});

describe('parseLog / summarizeLog', () => {
  const lines = parseLog(redactLog(sample).text);
  const summary = summarizeLog(lines);

  it('parses time, level and source of loader lines', () => {
    expect(lines[0]).toMatchObject({ n: 1, time: '14:02:09.203', level: 'info', source: 'RedLoader', cont: false });
    const error = lines.find((l) => l.level === 'error' && l.source === 'Unity Log');
    expect(error?.body).toMatch(/^NullReferenceException/);
  });

  it('attaches stack frames to the entry above', () => {
    const at = lines.findIndex((l) => l.text.includes('AmmoHud.Refresh'));
    expect(lines[at]).toMatchObject({ cont: true, level: 'error' });
  });

  it('summarises versions and mods', () => {
    expect(summary).toMatchObject({
      kind: 'redloader',
      gameVersion: '1.1.4.2',
      loaderName: 'RedLoader',
      loaderVersion: '1.4.2',
      unityVersion: '2022.3.62f1',
    });
    expect(summary.mods.map((m) => m.name)).toContain('AxelModMenu');
    expect(summary.mods.find((m) => m.name === 'AmmoUi')).toMatchObject({ version: '1.3.0', author: 'ImAxel' });
    expect(summary.mods).toHaveLength(10);
  });

  it('counts levels and groups distinct errors', () => {
    expect(summary.counts.fatal).toBe(1);
    expect(summary.counts.error).toBeGreaterThan(10);
    expect(summary.firstErrorLine).not.toBeNull();
    expect(summary.topErrors[0]?.count).toBe(9);
    expect(summary.topErrors[0]?.message).toMatch(/MissingReferenceException/);
  });

  it('handles Unity player logs without headers', () => {
    const player = [
      'Initialize engine version: 2022.3.62f1 (a2c8bd4e2b1f)',
      'Desktop is 2560 x 1440 @ 144 Hz',
      'NullReferenceException: Object reference not set to an instance of an object',
      '  at Foo.Bar () [0x00000] in <abc>:0',
      '(Filename: Line: 39)',
      'Warning: shader missing',
      'Loading complete',
    ].join('\n');
    const parsed = parseLog(player);
    expect(parsed.map((l) => l.level)).toEqual(['info', 'info', 'error', 'error', 'error', 'warning', 'info']);
    expect(summarizeLog(parsed)).toMatchObject({ kind: 'player', unityVersion: '2022.3.62f1' });
  });

  it('handles BepInEx logs without timestamps and multi-line messages', () => {
    const bep = [
      '[Message:   BepInEx] BepInEx 6.0.0-be.738 - SonsOfTheForest',
      '[Info   :   BepInEx] Loading [Nice Plugin 1.2.3]',
      '[Error  : Unity Log] Boom',
      'Stack trace:',
      'Foo.Bar () (at <x>:0)',
      '[Warning:Nice Plugin] careful',
    ].join('\n');
    const parsed = parseLog(bep);
    expect(parsed.map((l) => l.level)).toEqual(['info', 'info', 'error', 'error', 'error', 'warning']);
    const s = summarizeLog(parsed);
    expect(s).toMatchObject({ kind: 'bepinex', loaderVersion: '6.0.0-be.738' });
    expect(s.mods[0]).toMatchObject({ name: 'Nice Plugin', version: '1.2.3' });
  });

  it('parses an empty text', () => {
    expect(parseLog('')).toEqual([]);
    expect(summarizeLog([]).counts.lines).toBe(0);
  });
});
