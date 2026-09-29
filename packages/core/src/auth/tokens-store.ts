/**
 * Single-use email tokens (PLAN §6.4 "AuthToken", §6.10): verification (24 h), email change (24 h)
 * and password reset (1 h). Stored hashed; issuing a new token of a kind retires the previous
 * unused ones; consuming locks the row so a token works exactly once.
 */
import { type AuthTokenKind, authToken, type Executor, type JsonObject } from '@sotf/db';
import { and, eq, inArray, isNull } from 'drizzle-orm';
import { DomainError, errors } from '../kernel/errors.ts';
import { newId } from '../kernel/ids.ts';
import { hashToken, newSecretToken } from './tokens.ts';

export const TOKEN_TTL_MS: Readonly<Record<AuthTokenKind, number>> = {
  email_verify: 24 * 3600 * 1000,
  email_change: 24 * 3600 * 1000,
  password_reset: 3600 * 1000,
};

export interface IssuedToken {
  id: string;
  token: string;
  expiresAt: Date;
}

/** Issues a token (retiring the previous unused tokens of the same kind for the user). */
export async function issueAuthToken(
  tx: Executor,
  input: { userId: number; kind: AuthTokenKind; now: Date; payload?: JsonObject },
): Promise<IssuedToken> {
  await tx
    .update(authToken)
    .set({ usedAt: input.now })
    .where(and(eq(authToken.userId, input.userId), eq(authToken.kind, input.kind), isNull(authToken.usedAt)));
  const token = newSecretToken();
  const id = newId();
  const expiresAt = new Date(input.now.getTime() + TOKEN_TTL_MS[input.kind]);
  await tx.insert(authToken).values({
    id,
    userId: input.userId,
    kind: input.kind,
    tokenHash: hashToken(token),
    payload: input.payload ?? {},
    expiresAt,
    createdAt: input.now,
  });
  return { id, token, expiresAt };
}

export interface ConsumedToken {
  id: string;
  userId: number;
  kind: AuthTokenKind;
  payload: JsonObject;
}

/**
 * Consumes a token of one of `kinds` inside the transaction `tx`: `NOT_FOUND` when unknown or
 * already used, `GONE` when expired. The row is locked, so concurrent uses cannot both succeed.
 */
export async function consumeAuthToken(
  tx: Executor,
  token: string,
  kinds: readonly AuthTokenKind[],
  now: Date,
): Promise<ConsumedToken> {
  const [row] = await tx
    .select()
    .from(authToken)
    .where(and(eq(authToken.tokenHash, hashToken(token)), inArray(authToken.kind, [...kinds])))
    .for('update');
  if (!row || row.usedAt) throw errors.notFound('Token');
  if (row.expiresAt.getTime() <= now.getTime()) {
    throw new DomainError('GONE', undefined, 'This link has expired');
  }
  await tx.update(authToken).set({ usedAt: now }).where(eq(authToken.id, row.id));
  return { id: row.id, userId: row.userId, kind: row.kind, payload: row.payload };
}
