/**
 * Route guards (PLAN §4.3, §9.2). The root route runs `ensureSession` before anything renders;
 * area routes add role/permission checks. The API enforces every rule again: guards only decide
 * what to show.
 *
 *   // routes/ranger/admin.tsx (WP-83)
 *   beforeLoad: ({ context }) => requireRole(context.queryClient, 'admin'),
 */
import type { Permission } from '@sotf/contracts/me';
import type { QueryClient } from '@tanstack/react-query';
import { hasPermission, isRanger, type Me, meQuery } from '../hooks/use-me.ts';
import { hasSessionHint, redirectToLogin } from './auth.ts';
import { ForbiddenError, isUnauthenticated } from './errors.ts';

/** Keeps the router pending while the browser leaves for the login page. */
function leaving(): Promise<never> {
  return new Promise<never>(() => {});
}

/**
 * Resolves the signed-in user or sends the visitor to `/login?next=<href>`:
 * no hint cookie → login without asking the API; `/me` 401 → login; other errors propagate to
 * the root error screen (retry).
 */
export async function ensureSession(queryClient: QueryClient, href: string): Promise<Me> {
  if (!hasSessionHint()) {
    redirectToLogin(href);
    return leaving();
  }
  try {
    return await queryClient.ensureQueryData(meQuery);
  } catch (error) {
    if (isUnauthenticated(error)) {
      redirectToLogin(href);
      return leaving();
    }
    throw error;
  }
}

function currentMe(queryClient: QueryClient): Me {
  const me = queryClient.getQueryData(meQuery.queryKey);
  // The root guard always loads `/me` first; reaching this without it is a programming error.
  if (!me) throw new Error('console guard: /me is not loaded');
  return me;
}

/** Moderators and admins. */
export function requireRanger(queryClient: QueryClient): Me {
  const me = currentMe(queryClient);
  if (!isRanger(me)) throw new ForbiddenError('role:moderator');
  return me;
}

export function requireRole(queryClient: QueryClient, role: 'moderator' | 'admin'): Me {
  const me = currentMe(queryClient);
  const allowed = role === 'admin' ? me.user.role === 'admin' : isRanger(me);
  if (!allowed) throw new ForbiddenError(`role:${role}`);
  return me;
}

export function requirePermission(queryClient: QueryClient, permission: Permission): Me {
  const me = currentMe(queryClient);
  if (!hasPermission(me, permission)) throw new ForbiddenError(`permission:${permission}`);
  return me;
}
