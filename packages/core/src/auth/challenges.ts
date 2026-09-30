/**
 * Short-lived, single-use challenges of the multi-step flows (table "AuthChallenge", T1-02/T1-26):
 * the password step of a login that still needs a second factor, and WebAuthn ceremonies. A
 * challenge lives 5 minutes, allows 5 wrong answers and is marked used by its first success.
 */
import type { SecondFactor } from '@sotf/contracts/auth';
import {
  type AuthChallenge,
  type AuthChallengeKind,
  authChallenge,
  type Executor,
  type JsonObject,
  userPasskey,
  userTotp,
} from '@sotf/db';
import { and, count, eq, isNotNull, isNull, sql } from 'drizzle-orm';
import { DomainError, errors } from '../kernel/errors.ts';
import { newId } from '../kernel/ids.ts';

export const CHALLENGE_TTL_MS = 5 * 60 * 1000;
export const CHALLENGE_MAX_FAILURES = 5;

export async function createChallenge(
  db: Executor,
  input: {
    kind: AuthChallengeKind;
    userId: number | null;
    challenge?: string;
    payload?: JsonObject;
    now: Date;
  },
): Promise<{ id: string; expiresAt: Date }> {
  const id = newId();
  const expiresAt = new Date(input.now.getTime() + CHALLENGE_TTL_MS);
  await db.insert(authChallenge).values({
    id,
    kind: input.kind,
    userId: input.userId,
    challenge: input.challenge ?? null,
    payload: input.payload ?? {},
    expiresAt,
    createdAt: input.now,
  });
  return { id, expiresAt };
}

/**
 * The live challenge `id` of one of `kinds`: `NOT_FOUND` when unknown or used, `GONE` when expired
 * or burned by too many wrong answers.
 */
export async function loadChallenge(
  db: Executor,
  id: string,
  kinds: readonly AuthChallengeKind[],
  now: Date,
): Promise<AuthChallenge> {
  const [row] = await db.select().from(authChallenge).where(eq(authChallenge.id, id));
  if (!row || !kinds.includes(row.kind) || row.usedAt) throw errors.notFound('Challenge');
  if (row.expiresAt.getTime() <= now.getTime() || row.failures >= CHALLENGE_MAX_FAILURES) {
    throw new DomainError('GONE', undefined, 'This sign-in step expired; start again');
  }
  return row;
}

/** Counts a wrong answer (committed on its own so a thrown error does not roll it back). */
export async function recordChallengeFailure(db: Executor, id: string): Promise<void> {
  await db
    .update(authChallenge)
    .set({ failures: sql`${authChallenge.failures} + 1` })
    .where(eq(authChallenge.id, id));
}

/** Marks the challenge used. False when someone else already did (a concurrent request). */
export async function useChallenge(tx: Executor, id: string, now: Date): Promise<boolean> {
  const rows = await tx
    .update(authChallenge)
    .set({ usedAt: now })
    .where(and(eq(authChallenge.id, id), isNull(authChallenge.usedAt)))
    .returning({ id: authChallenge.id });
  return rows.length > 0;
}

/** What a password sign-in must still answer with: empty when the account has no two-factor. */
export async function secondFactorMethods(db: Executor, userId: number): Promise<SecondFactor[]> {
  const [totp] = await db
    .select({ userId: userTotp.userId })
    .from(userTotp)
    .where(and(eq(userTotp.userId, userId), isNotNull(userTotp.confirmedAt)));
  if (!totp) return [];
  const methods: SecondFactor[] = ['totp', 'recovery'];
  const [passkeys] = await db.select({ n: count() }).from(userPasskey).where(eq(userPasskey.userId, userId));
  if (Number(passkeys?.n ?? 0) > 0) methods.push('passkey');
  return methods;
}
