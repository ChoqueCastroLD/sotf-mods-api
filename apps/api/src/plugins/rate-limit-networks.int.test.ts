import Fastify from 'fastify';
import { describe, expect, it } from 'vitest';
import { NETWORK_AUTH_LIMITS, setupRateLimit } from './rate-limit.ts';

/** A bare app with the real rate-limit plugin and one route in `bucket`; the client IP comes from `x-ip`. */
async function appWith(bucket: 'register' | 'login') {
  const app = Fastify();
  app.decorateRequest('clientIp', '');
  app.addHook('onRequest', async (request) => {
    request.clientIp = String(request.headers['x-ip'] ?? '');
  });
  // The app's error handler maps RATE_LIMITED to 429; a bare app needs the same mapping.
  app.setErrorHandler((error, _request, reply) => {
    void reply.code((error as { code?: string }).code === 'RATE_LIMITED' ? 429 : 500).send({});
  });
  await setupRateLimit(app);
  app.post('/x', { config: { bucket } }, async () => ({ ok: true }));
  await app.ready();
  return app;
}

describe('per-network caps of sign-in and sign-up (no overrides)', () => {
  it('refuses sign-ups spread over many addresses of one /24 past its daily cap', async () => {
    const app = await appWith('register');
    const statuses: number[] = [];
    for (let i = 1; i <= NETWORK_AUTH_LIMITS.register.network.max + 1; i++) {
      statuses.push((await app.inject({ method: 'POST', url: '/x', headers: { 'x-ip': `81.20.30.${i}` } })).statusCode);
    }
    expect(statuses.slice(0, -1).every((status) => status === 200)).toBe(true);
    expect(statuses.at(-1)).toBe(429);
    // Another network is unaffected.
    expect((await app.inject({ method: 'POST', url: '/x', headers: { 'x-ip': '82.1.1.1' } })).statusCode).toBe(200);
    await app.close();
  });

  it('refuses sign-ins spread over a /16 past its hourly cap', async () => {
    const app = await appWith('login');
    let refused = 0;
    for (let i = 0; i < NETWORK_AUTH_LIMITS.login.wide.max + 5; i++) {
      const ip = `90.80.${Math.floor(i / 4)}.${(i % 4) + 1}`;
      if ((await app.inject({ method: 'POST', url: '/x', headers: { 'x-ip': ip } })).statusCode === 429) refused++;
    }
    expect(refused).toBe(5);
    await app.close();
  });
});
