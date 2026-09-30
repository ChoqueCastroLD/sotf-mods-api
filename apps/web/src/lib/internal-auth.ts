/**
 * `X-Internal-Auth` check for internal endpoints (PLAN §2.7, §11.4): shared secret between web,
 * api and worker, compared in constant time. Without a configured secret every internal call is
 * refused (fail closed).
 */
import { timingSafeEqual } from 'node:crypto';
import { INTERNAL_AUTH_HEADER } from '@sotf/contracts/downloads';

export function isInternalRequest(request: Request, secret: string | undefined): boolean {
  if (!secret) return false;
  const provided = request.headers.get(INTERNAL_AUTH_HEADER);
  if (!provided) return false;
  const a = Buffer.from(provided, 'utf8');
  const b = Buffer.from(secret, 'utf8');
  return a.length === b.length && timingSafeEqual(a, b);
}
