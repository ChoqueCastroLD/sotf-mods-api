// biome-ignore-all lint/suspicious/noExplicitAny: assertions walk JSON bodies
/**
 * `POST /api/v2/markdown/preview` (WP-70 backlog): same pipeline as a save — `lite` resolves
 * @mentions of existing accounts, `full` shows raw HTML as text, the source is NFC-normalised,
 * the 20 000-character limit applies and only verified members may call it.
 */
import type { TestDb } from '@sotf/db/testing';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { buildTestApp, type TestApp } from '../../testing.ts';
import { startSeededDb } from '../catalog/__tests__/seeded.ts';
import { callAs, createTestUser, type TestUser } from '../catalog/__tests__/users.ts';

let db: TestDb;
let t: TestApp;
let member: TestUser;

const preview = (body: unknown, who: TestUser | null = member) =>
  callAs(t, 'POST', '/api/v2/markdown/preview', who, body) as Promise<{ status: number; body: any }>;

beforeAll(async () => {
  db = await startSeededDb();
  member = await createTestUser(db, 'preview-member');
  await createTestUser(db, 'mention-target');
  t = await buildTestApp({ db, rateLimits: { markdownPreview: { max: 100_000, window: '1 minute' } } });
}, 300_000);

afterAll(async () => {
  await t?.close();
  await db?.stop();
});

describe('markdown preview', () => {
  it('renders lite with @mentions of existing accounts only', async () => {
    const res = await preview({ md: '**Hi** @mention-target and @nobody-here-123 ||secret||', profile: 'lite' });
    expect(res.status).toBe(200);
    expect(res.body.html).toContain('<strong>Hi</strong>');
    expect(res.body.html).toContain('/profile/mention-target');
    expect(res.body.html).not.toContain('/profile/nobody-here-123');
    expect(res.body.html).toContain('md-spoiler');
  });

  it('renders full with headings and raw HTML as text', async () => {
    const res = await preview({ md: '## Features\n\n<script>alert(1)</script>', profile: 'full' });
    expect(res.status).toBe(200);
    // Description headings are shifted one level down (the page owns h1/h2).
    expect(res.body.html).toContain('<h3 id="md-features">');
    expect(res.body.html).not.toContain('<script');
  });

  it('normalises to NFC and answers empty for blank input', async () => {
    const decomposed = 'Café';
    const res = await preview({ md: decomposed, profile: 'lite' });
    expect(res.body.html).toContain('Café');
    expect((await preview({ md: '   ', profile: 'lite' })).body).toEqual({ html: '' });
  });

  it('enforces the 20 000-character limit and the verified email', async () => {
    expect((await preview({ md: 'x'.repeat(20_001), profile: 'full' })).status).toBe(422);
    expect((await preview({ md: 'x'.repeat(20_000), profile: 'full' })).status).toBe(200);
    expect((await preview({ md: 'hi', profile: 'lite' }, null)).status).toBe(401);
    const res = await t.app.inject({
      method: 'POST',
      url: '/api/v2/markdown/preview',
      headers: { ...t.sameOrigin(), ...t.as({ userId: member.userId, emailVerified: false }) },
      payload: JSON.stringify({ md: 'hi', profile: 'lite' }),
    });
    expect(res.statusCode).toBe(403);
    expect(res.json().code).toBe('EMAIL_NOT_VERIFIED');
    expect((await preview({ md: 'hi', profile: 'legacyHtml' })).status).toBe(422);
  });
});
