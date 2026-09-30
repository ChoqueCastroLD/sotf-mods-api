import { cache, defineEndpoint } from '@sotf/contracts';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { isResponseSerializationError } from 'fastify-type-provider-zod';
import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import { encodedJson } from './respond.ts';

const endpoint = defineEndpoint({
  id: 'test.item',
  owner: 'WP-33',
  method: 'GET',
  path: '/api/v2/_test/item',
  summary: 'test',
  auth: 'public',
  response: z.object({ id: z.number().int().positive(), at: z.iso.datetime() }),
  cache: cache.publicApi([]),
});

function fakes() {
  const reply = { type: vi.fn() } as unknown as FastifyReply & { type: ReturnType<typeof vi.fn> };
  const request = { url: '/api/v2/_test/item' } as FastifyRequest;
  return { reply, request };
}

describe('encodedJson', () => {
  it('encodes with the contract schema once per object and sends JSON', () => {
    const { reply, request } = fakes();
    const value = { id: 3, at: '2026-09-29T10:00:00.000Z' };
    const first = encodedJson(endpoint, request, reply, value);
    expect(first).toBe('{"id":3,"at":"2026-09-29T10:00:00.000Z"}');
    value.id = 4; // cached objects are immutable in practice: a hit reuses the encoded text
    expect(encodedJson(endpoint, request, reply, value)).toBe(first);
    expect(encodedJson(endpoint, request, reply, { ...value })).toBe('{"id":4,"at":"2026-09-29T10:00:00.000Z"}');
    expect(reply.type).toHaveBeenCalledWith('application/json; charset=utf-8');
  });

  it('memoises by the given key (fresh wrappers around a cached array)', () => {
    const { reply, request } = fakes();
    const list = z.object({ items: z.array(z.number()) });
    const listEndpoint = { ...endpoint, response: list };
    const items = [1, 2];
    const a = encodedJson(listEndpoint, request, reply, { items }, items);
    items.push(3); // the memo is keyed by the array: the cached text is reused
    expect(encodedJson(listEndpoint, request, reply, { items }, items)).toBe(a);
  });

  it('fails like the platform serializer when the value breaks the contract', () => {
    const { reply, request } = fakes();
    let error: unknown;
    try {
      encodedJson(endpoint, request, reply, { id: -1, at: 'yesterday' });
    } catch (e) {
      error = e;
    }
    expect(isResponseSerializationError(error as never)).toBe(true);
    expect(reply.type).not.toHaveBeenCalled();
  });
});
