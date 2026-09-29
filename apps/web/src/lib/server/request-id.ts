/**
 * Request reference (PLAN §2.6 «reqId = cf-ray (o uuid)»): shown on error pages so a user can
 * quote it, and matched against the API logs.
 */
const SAFE_ID = /^[A-Za-z0-9-]{8,64}$/;

export function requestIdOf(request: Request): string {
  const ray = request.headers.get('cf-ray');
  if (ray && SAFE_ID.test(ray)) return ray;
  return crypto.randomUUID();
}
