import Fastify from 'fastify';
import { describe, expect, it } from 'vitest';
import { setupErrors } from '../src/plugins/errors.ts';
import { findNulPath, setupNulGuard } from '../src/plugins/nul-guard.ts';

describe('findNulPath', () => {
  it('names the field that holds U+0000', () => {
    expect(findNulPath({ bodyMd: 'a\u0000b' })).toBe('bodyMd');
    expect(findNulPath({ a: { b: ['ok', { c: 'x\u0000' }] } })).toBe('a.b[1].c');
    expect(findNulPath('\u0000', 'text')).toBe('text');
    // a lone surrogate is legal JSON but jsonb refuses it (the anonymous analytics beacon stores props)
    expect(findNulPath({ props: { a: 'x\ud800y' } })).toBe('props.a');
    expect(findNulPath({ props: { a: '\udc00' } })).toBe('props.a');
    expect(findNulPath({ a: 'emoji \ud83d\ude00 ok' })).toBeNull();
    // object keys are stored in jsonb as well (analytics props)
    expect(findNulPath({ events: [{ props: { 'a\u0000b': 'x' } }] })).toContain('props');
  });

  it('accepts everything else', () => {
    expect(findNulPath({ a: 'tab\tnewline\n', b: [1, null, true], c: { d: '​‮' } })).toBeNull();
    expect(findNulPath(null)).toBeNull();
    expect(findNulPath(undefined)).toBeNull();
  });

  it('is bounded on deep input', () => {
    let deep: unknown = 'x\u0000';
    for (let i = 0; i < 10_000; i += 1) deep = { a: deep };
    expect(findNulPath(deep)).toBeNull();
  });
});

describe('NUL guard hook', () => {
  async function build() {
    const app = Fastify();
    setupErrors(app);
    setupNulGuard(app);
    app.post('/echo', async (request) => ({ ok: true, body: request.body }));
    app.get('/search', async (request) => ({ ok: true, query: request.query }));
    await app.ready();
    return app;
  }

  it('answers 422 instead of letting PostgreSQL fail with a 500', async () => {
    const app = await build();
    const bad = await app.inject({ method: 'POST', url: '/echo', payload: { bodyMd: 'hello \u0000 world' } });
    expect(bad.statusCode).toBe(422);
    const problem = bad.json() as { code: string; errors: Array<{ path: string }> };
    expect(problem.code).toBe('VALIDATION_FAILED');
    expect(problem.errors[0]?.path).toBe('bodyMd');
    const query = await app.inject({ method: 'GET', url: '/search?q=a%00b' });
    expect(query.statusCode).toBe(422);
    // an unpaired surrogate or a NUL object key would fail the jsonb insert of the analytics beacon
    const lone = await app.inject({ method: 'POST', url: '/echo', payload: { props: { a: 'x\ud800' } } });
    expect(lone.statusCode).toBe(422);
    const key = await app.inject({ method: 'POST', url: '/echo', payload: { props: { 'k\u0000': 'x' } } });
    expect(key.statusCode).toBe(422);
    const ok = await app.inject({ method: 'POST', url: '/echo', payload: { bodyMd: 'hello world' } });
    expect(ok.statusCode).toBe(200);
    await app.close();
  });
});
