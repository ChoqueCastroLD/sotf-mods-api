/**
 * Sends a pre-serialised JSON body with an exact `Content-Type`. Fastify appends
 * `; charset=utf-8` to JSON-like types sent as strings; the legacy surface must answer
 * `application/json` byte-for-byte (PLAN §5.5) and problems use `application/problem+json`.
 */
import type { FastifyReply } from 'fastify';

export function sendExactJson(reply: FastifyReply, contentType: string, body: unknown): FastifyReply {
  const text = typeof body === 'string' ? body : JSON.stringify(body);
  return reply.header('content-type', contentType).send(Buffer.from(text, 'utf8'));
}
