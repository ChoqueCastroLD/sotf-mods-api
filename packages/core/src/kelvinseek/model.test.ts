/** The OpenAI client of KelvinSeek against a simulated Chat Completions server. */
import http from 'node:http';
import type { AddressInfo } from 'node:net';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { KelvinModelError, kelvinCostMicroUsd, openAiModel } from './model.ts';

interface Seen {
  auth: string | undefined;
  body: Record<string, unknown>;
}

let server: http.Server;
let baseUrl: string;
const seen: Seen[] = [];
let behaviour: 'ok' | 'slow' | 'error' | 'garbage' = 'ok';

beforeAll(async () => {
  server = http.createServer((req, res) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      seen.push({ auth: req.headers.authorization, body: JSON.parse(raw) as Record<string, unknown> });
      if (behaviour === 'slow') {
        setTimeout(() => res.end('{}'), 1_000).unref();
        return;
      }
      if (behaviour === 'error') {
        res.writeHead(429, { 'content-type': 'application/json' }).end('{"error":{"message":"quota"}}');
        return;
      }
      if (behaviour === 'garbage') {
        res.writeHead(200, { 'content-type': 'application/json' }).end('{"choices":[]}');
        return;
      }
      res.writeHead(200, { 'content-type': 'application/json' }).end(
        JSON.stringify({
          id: 'chatcmpl-1',
          choices: [{ message: { role: 'assistant', content: 'build.fire|I will build a fire now' } }],
          usage: { prompt_tokens: 1200, completion_tokens: 20 },
        }),
      );
    });
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}/v1`;
});

afterAll(async () => {
  server.closeAllConnections();
  await new Promise((resolve) => server.close(resolve));
});

describe('openAiModel', () => {
  it('posts the system prompt and the player text and returns the answer and usage', async () => {
    behaviour = 'ok';
    const model = openAiModel({ apiKey: 'sk-test', baseUrl });
    const result = await model({ model: 'gpt-4o-mini', system: 'SYSTEM', user: 'build a fire', timeoutMs: 2_000 });
    expect(result).toEqual({
      text: 'build.fire|I will build a fire now',
      id: 'chatcmpl-1',
      tokensIn: 1200,
      tokensOut: 20,
    });
    const last = seen.at(-1);
    expect(last?.auth).toBe('Bearer sk-test');
    expect(last?.body).toMatchObject({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'SYSTEM' },
        { role: 'user', content: 'build a fire' },
      ],
    });
  });

  it('fails with a timeout error when the answer is late', async () => {
    behaviour = 'slow';
    const model = openAiModel({ apiKey: 'sk-test', baseUrl });
    const started = Date.now();
    const error = await model({ model: 'gpt-4o-mini', system: 's', user: 'u', timeoutMs: 150 }).catch((e) => e);
    expect(error).toBeInstanceOf(KelvinModelError);
    expect((error as KelvinModelError).kind).toBe('timeout');
    expect(Date.now() - started).toBeLessThan(900);
  });

  it('fails on HTTP errors and on answers without content', async () => {
    const model = openAiModel({ apiKey: 'sk-test', baseUrl });
    behaviour = 'error';
    const http429 = await model({ model: 'm', system: 's', user: 'u', timeoutMs: 2_000 }).catch((e) => e);
    expect(http429).toMatchObject({ kind: 'http', status: 429 });
    behaviour = 'garbage';
    const invalid = await model({ model: 'm', system: 's', user: 'u', timeoutMs: 2_000 }).catch((e) => e);
    expect(invalid).toMatchObject({ kind: 'invalid' });
  });

  it('fails with a network error when nothing listens', async () => {
    const model = openAiModel({ apiKey: 'sk-test', baseUrl: 'http://127.0.0.1:9/v1' });
    const error = await model({ model: 'm', system: 's', user: 'u', timeoutMs: 2_000 }).catch((e) => e);
    expect(error).toMatchObject({ kind: 'network' });
  });
});

describe('kelvinCostMicroUsd', () => {
  it('charges the model price per token, rounded up', () => {
    // gpt-4o-mini: $0.15 / $0.60 per million tokens.
    expect(kelvinCostMicroUsd('gpt-4o-mini', 1_000_000, 0)).toBe(150_000);
    expect(kelvinCostMicroUsd('gpt-4o-mini', 1200, 20)).toBe(192);
    expect(kelvinCostMicroUsd('gpt-4o-mini', 1, 0)).toBe(1);
  });

  it('charges unknown models at the highest known price', () => {
    expect(kelvinCostMicroUsd('some-new-model', 1_000_000, 1_000_000)).toBe(12_500_000);
  });
});
