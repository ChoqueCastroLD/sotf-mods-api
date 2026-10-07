/**
 * NUL guard. PostgreSQL `text` cannot hold U+0000, so a JSON string such as `"a\u0000b"` that
 * passed validation made the insert fail with "invalid byte sequence for encoding UTF8: 0x00" and
 * the client got a 500 (and an error report) for what is a plain invalid input. Every free-text
 * field of the API would need its own refinement; one hook after validation covers all of them:
 * a NUL anywhere in the parsed body, query or path parameters is a `422 VALIDATION_FAILED` that
 * names the field.
 *
 * Lone surrogates (`"\ud800"` is legal JSON) are refused for the same reason: `JSON.stringify` writes
 * them as an escape and PostgreSQL's `jsonb` rejects it (`Unicode low surrogate must follow a high
 * surrogate`), which made the anonymous analytics beacon answer 500 for a crafted `props` value.
 */
import { errors } from '@sotf/core/kernel/errors';
import type { FastifyInstance } from 'fastify';

/** A surrogate that is not half of a valid pair. */
const LONE_SURROGATE = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/;

/** U+0000 or an ill-formed UTF-16 sequence: text that PostgreSQL cannot store. */
function unstorable(text: string): boolean {
  return text.includes('\u0000') || LONE_SURROGATE.test(text);
}

/** Deepest nesting looked at (bodies are validated against schemas far shallower than this). */
const MAX_DEPTH = 32;

/** Path (`a.b[2].c`) of the first string containing U+0000 or a lone surrogate, or `null`. Iterative, bounded. */
export function findNulPath(root: unknown, rootName = ''): string | null {
  const stack: Array<{ value: unknown; path: string; depth: number }> = [{ value: root, path: rootName, depth: 0 }];
  while (stack.length > 0) {
    const { value, path, depth } = stack.pop() as { value: unknown; path: string; depth: number };
    if (typeof value === 'string') {
      if (unstorable(value)) return path;
    } else if (depth < MAX_DEPTH && value !== null && typeof value === 'object') {
      if (Array.isArray(value)) {
        for (let index = value.length - 1; index >= 0; index -= 1) {
          stack.push({ value: value[index], path: `${path}[${index}]`, depth: depth + 1 });
        }
      } else {
        for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
          // Keys end up in `jsonb` too (analytics `props`): a NUL in one fails the insert the same way.
          if (unstorable(key)) return path === '' ? key : `${path}.${key}`;
          stack.push({ value: child, path: path === '' ? key : `${path}.${key}`, depth: depth + 1 });
        }
      }
    }
  }
  return null;
}

export function setupNulGuard(app: FastifyInstance): void {
  // After validation: handlers and the database only ever see strings without NUL.
  app.addHook('preHandler', async (request) => {
    const path = findNulPath(request.body) ?? findNulPath(request.query) ?? findNulPath(request.params);
    if (path === null) return;
    throw errors.validation('Text cannot contain NUL (U+0000) or unpaired surrogate characters', [
      { path, code: 'invalid_string', message: 'NUL and unpaired surrogate characters are not allowed' },
    ]);
  });
}
