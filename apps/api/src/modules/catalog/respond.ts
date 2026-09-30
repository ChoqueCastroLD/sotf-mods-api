/**
 * Serialise-once for cached catalog DTOs (PLAN §2.7 layer 4).
 *
 * The platform validates and encodes every JSON response with the contract's Zod schema
 * (fastify-type-provider-zod). Catalog reads hand out the *same* cached object from the process
 * LRU for up to 60 s, so encoding it again on every hit is wasted work (≈ 20 % of the CPU of a
 * cached read, more for the Cmd+K index). The encoded JSON is memoised per object in a `WeakMap`,
 * so it lives exactly as long as the LRU entry that owns the object. The first encoding goes
 * through the same `safeEncode` of the contract schema, and a value that breaks the contract fails
 * with the platform's `ResponseSerializationError` (500), as it would without the memo.
 */
import type { Endpoint } from '@sotf/contracts';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { ResponseSerializationError } from 'fastify-type-provider-zod';
import { safeEncode, type z } from 'zod';
import type { HandlerOutput } from '../../lib/define-module.ts';

const memo = new WeakMap<object, string>();

/**
 * Returns the JSON text of `value` for `endpoint`, encoded once per object. `key` is the object
 * whose lifetime bounds the memo (default `value`; pass the cached inner array when `value` is a
 * fresh wrapper such as `{ items }`).
 */
export function encodedJson<E extends Endpoint>(
  endpoint: E,
  request: FastifyRequest,
  reply: FastifyReply,
  value: object,
  key: object = value,
): HandlerOutput<E> {
  let json = memo.get(key);
  if (json === undefined) {
    const schema = endpoint.response as z.ZodType;
    const result = safeEncode(schema, value);
    if (!result.success) throw new ResponseSerializationError(endpoint.method, request.url, { cause: result.error });
    json = JSON.stringify(result.data);
    memo.set(key, json);
  }
  // A string payload with a JSON content type is sent as is (no second serialisation).
  reply.type('application/json; charset=utf-8');
  return json as unknown as HandlerOutput<E>;
}
