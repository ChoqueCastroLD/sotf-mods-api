/**
 * WP-52 acceptance of the creator analytics export (`GET /api/v2/studio/analytics.csv`): RFC 4180
 * (CRLF, quoted cells, doubled quotes), a UTF-8 BOM for Excel, formula-looking cells neutralised
 * (mod names are user data), totals equal to the JSON analytics, and only the owner's mods.
 * Runs on the small development seed.
 */
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { exec, startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let owner: TestUser;
let stranger: TestUser;
const MOD = 20;
const NAME = '=HYPERLINK("http://evil.test","Axel, the ""menu""")';

/** Minimal RFC 4180 reader (quoted fields, doubled quotes, CRLF records). */
function parseCsv(text: string): string[][] {
  const out: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i] as string;
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') {
      row.push(cell);
      cell = '';
    } else if (c === '\r' && text[i + 1] === '\n') {
      row.push(cell);
      out.push(row);
      row = [];
      cell = '';
      i += 1;
    } else cell += c;
  }
  if (cell !== '' || row.length > 0) {
    row.push(cell);
    out.push(row);
  }
  return out;
}

beforeAll(async () => {
  db = await startSeededDb();
  owner = await createTestUser(db, 'csv-owner');
  stranger = await createTestUser(db, 'csv-stranger');
  await exec(db, `UPDATE "Mod" SET "userId" = $1, "name" = $2 WHERE "id" = $3`, [owner.userId, NAME, MOD]);
  const versions = await exec(db, `SELECT "id" FROM "ModVersion" WHERE "modId" = $1 ORDER BY "id" DESC LIMIT 2`, [MOD]);
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86_400_000).toISOString().slice(0, 10);
  for (const [i, v] of versions.rows.entries()) {
    for (const [day, channel, n] of [
      [today, 'web', 7 + i],
      [yesterday, 'redmanager', 3],
    ] as const) {
      await exec(
        db,
        `INSERT INTO "ModVersionDownloadDaily" ("modVersionId", "day", "channel", "downloads", "uniqueDownloads")
         VALUES ($1, $2::date, $3, $4, $4)
         ON CONFLICT ("modVersionId", "day", "channel") DO UPDATE SET "downloads" = EXCLUDED."downloads",
           "uniqueDownloads" = EXCLUDED."uniqueDownloads"`,
        [v.id, day, channel, n],
      );
    }
  }
  t = await buildTestApp({ db, rateLimits: { userWrite: { max: 100_000, window: '1 minute' } } });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('analytics CSV', () => {
  it('is RFC 4180 with a BOM, neutralises formulas and matches the JSON totals', async () => {
    const res = await t.app.inject({
      method: 'GET',
      url: `/api/v2/studio/analytics.csv?modId=${MOD}&range=7d`,
      headers: t.as({ userId: owner.userId, role: 'user', sessionId: owner.sessionId, emailVerified: true }),
    });
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/^text\/csv; charset=utf-8/);
    expect(String(res.headers['content-disposition'])).toMatch(
      /attachment; filename="?sotf-mods-analytics-.+-7d-\d{4}-\d{2}-\d{2}\.csv/,
    );
    const body = res.body;
    expect(body.startsWith('﻿')).toBe(true);
    expect(body.endsWith('\r\n')).toBe(true);
    expect(body.replace(/\r\n/g, '')).not.toContain('\n');
    const table = parseCsv(body.slice(1));
    expect(table[0]).toEqual(['day', 'mod', 'version', 'channel', 'downloads', 'unique_downloads', 'views']);
    const data = table.slice(1);
    expect(data.length).toBeGreaterThanOrEqual(4);
    for (const row of data) {
      expect(row).toHaveLength(7);
      // The name starts with "=": written as text, never as a formula.
      expect(row[1]).toBe(`'${NAME}`);
    }
    const total = data.reduce((sum, row) => sum + Number(row[4]), 0);
    const json = await callAs(t, 'GET', `/api/v2/studio/analytics?modId=${MOD}&range=7d`, owner);
    expect(json.status).toBe(200);
    expect(total).toBe((json.body as { totals: { downloads: number } }).totals.downloads);
  });

  it('refuses the mods of someone else', async () => {
    const res = await t.app.inject({
      method: 'GET',
      url: `/api/v2/studio/analytics.csv?modId=${MOD}&range=7d`,
      headers: t.as({ userId: stranger.userId, role: 'user', sessionId: stranger.sessionId, emailVerified: true }),
    });
    expect([403, 404]).toContain(res.statusCode);
  });
});
