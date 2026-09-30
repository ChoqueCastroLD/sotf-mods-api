/**
 * New-login alert (PLAN §9): remembers the countries and device labels an account has signed in
 * from ("UserLoginSignal"). A sign-in from a country or device not seen before, on an account that
 * already has history, is reported so the caller can email the owner. The first sign-in after
 * this feature (or after registering) only records, it never alerts.
 */
import { type Executor, userLoginSignal } from '@sotf/db';
import { eq } from 'drizzle-orm';

export interface LoginSignalResult {
  newCountry: boolean;
  newDevice: boolean;
}

export async function recordLoginSignals(
  db: Executor,
  input: { userId: number; country: string | null; device: string | null; now: Date },
): Promise<LoginSignalResult> {
  const known = await db
    .select({ kind: userLoginSignal.kind, value: userLoginSignal.value })
    .from(userLoginSignal)
    .where(eq(userLoginSignal.userId, input.userId));
  const has = (kind: 'country' | 'device', value: string) =>
    known.some((row) => row.kind === kind && row.value === value);
  const seen: Array<{ kind: 'country' | 'device'; value: string }> = [];
  if (input.country) seen.push({ kind: 'country', value: input.country });
  if (input.device) seen.push({ kind: 'device', value: input.device });
  const result: LoginSignalResult = {
    newCountry: known.length > 0 && input.country !== null && !has('country', input.country),
    newDevice: known.length > 0 && input.device !== null && !has('device', input.device),
  };
  for (const signal of seen) {
    await db
      .insert(userLoginSignal)
      .values({
        userId: input.userId,
        kind: signal.kind,
        value: signal.value,
        firstSeenAt: input.now,
        lastSeenAt: input.now,
      })
      .onConflictDoUpdate({
        target: [userLoginSignal.userId, userLoginSignal.kind, userLoginSignal.value],
        set: { lastSeenAt: input.now },
      });
  }
  return result;
}
