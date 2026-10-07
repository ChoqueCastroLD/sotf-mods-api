import { describe, expect, it, vi } from 'vitest';
import type { Logger } from '../kernel/logger.ts';
import { createTurnstileVerifier, isTurnstileTestSecret, TURNSTILE_VERIFY_URL } from './turnstile.ts';

function logger() {
  return { error: vi.fn(), warn: vi.fn(), info: vi.fn() } as unknown as Logger & {
    error: ReturnType<typeof vi.fn>;
    warn: ReturnType<typeof vi.fn>;
  };
}

const json =
  (body: unknown, status = 200) =>
  async () =>
    Response.json(body, { status });

describe('turnstile verifier', () => {
  it('fails closed in production without a secret, and skips only outside production', async () => {
    const log = logger();
    expect(await createTurnstileVerifier({ secret: undefined, production: true, log }).verify('token', '1.1.1.1')).toBe(
      false,
    );
    expect(log.error).toHaveBeenCalled();
    expect(await createTurnstileVerifier({ secret: undefined, production: false, log }).verify(undefined, null)).toBe(
      true,
    );
  });

  it('sends the secret, the token and the client IP to siteverify and trusts only success:true', async () => {
    const fetchMock = vi.fn(json({ success: true }));
    const verifier = createTurnstileVerifier({ secret: 'real-secret', production: true, fetch: fetchMock as never });
    expect(await verifier.verify('tok', '203.0.113.5')).toBe(true);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe(TURNSTILE_VERIFY_URL);
    const form = init.body as URLSearchParams;
    expect(form.get('secret')).toBe('real-secret');
    expect(form.get('response')).toBe('tok');
    expect(form.get('remoteip')).toBe('203.0.113.5');

    const refuse = (body: unknown, status = 200) =>
      createTurnstileVerifier({ secret: 's', production: true, fetch: json(body, status) as never }).verify(
        'tok',
        null,
      );
    expect(await refuse({ success: false, 'error-codes': ['invalid-input-response'] })).toBe(false);
    expect(await refuse({ success: 'true' })).toBe(false);
    expect(await refuse({})).toBe(false);
    expect(await refuse({ success: true }, 500)).toBe(false);
  });

  it('rejects an empty token without calling Cloudflare, and fails closed when it is unreachable', async () => {
    const fetchMock = vi.fn(json({ success: true }));
    const verifier = createTurnstileVerifier({ secret: 's', production: true, fetch: fetchMock as never });
    expect(await verifier.verify(undefined, null)).toBe(false);
    expect(await verifier.verify('', null)).toBe(false);
    expect(fetchMock).not.toHaveBeenCalled();
    const down = createTurnstileVerifier({
      secret: 's',
      production: true,
      fetch: (async () => {
        throw new Error('network down');
      }) as never,
    });
    expect(await down.verify('tok', null)).toBe(false);
  });

  it('flags Cloudflare dummy secrets in production only', () => {
    expect(isTurnstileTestSecret('1x0000000000000000000000000000000AA')).toBe(true);
    expect(isTurnstileTestSecret('2x0000000000000000000000000000000AA')).toBe(true);
    expect(isTurnstileTestSecret('0x4AAAAAAAreal-looking-secret')).toBe(false);
    expect(isTurnstileTestSecret(undefined)).toBe(false);
    const prod = logger();
    createTurnstileVerifier({ secret: '1x0000000000000000000000000000000AA', production: true, log: prod });
    expect(prod.error).toHaveBeenCalledTimes(1);
    const dev = logger();
    createTurnstileVerifier({ secret: '1x0000000000000000000000000000000AA', production: false, log: dev });
    expect(dev.error).not.toHaveBeenCalled();
  });
});
