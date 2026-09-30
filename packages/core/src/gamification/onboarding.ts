/**
 * «Day 1 on the island» checklist (T0-33, PLAN §5.2 `GET/PATCH /me/onboarding`).
 *
 * State lives in `"User"."onboarding"` jsonb (same shape as `accounts/me.ts` reads):
 * `{ steps?: { <step>: ISO }, dismissedAt?: ISO, completedAt?: ISO, timeZone?: IANA }`.
 *
 * - Every step can be ticked by hand (`markDone`, counts toward completion) and unticked
 *   (`markUndone`); `install_redloader` can only be self-reported; the others are also derived from real activity
 *   (first counted download, first followed mod, first Field report, first kit) and their time is
 *   stored the first time they are observed, so the checklist keeps its dates.
 * - Completing every step sets `completedAt` once and emits `user.onboarding_completed` in the same
 *   transaction (XP +10 and the `survived-day-one` badge are granted by its consumer).
 * - `timeZone` is the browser time zone reported by the client (header `Sotf-Time-Zone`), used by
 *   the `night-owl` badge.
 */
import {
  ONBOARDING_STEPS,
  type OnboardingDTO as OnboardingSchema,
  type UpdateOnboardingBody,
} from '@sotf/contracts/gamification';
import { type Executor, withTx } from '@sotf/db';
import { sql } from 'drizzle-orm';
import type { z } from 'zod';
import { queryOne, toDate } from '../follows/sql.ts';
import type { Ctx } from '../kernel/context.ts';
import { errors } from '../kernel/errors.ts';
import type { Jobs } from '../kernel/jobs.ts';

export type OnboardingDTO = z.infer<typeof OnboardingSchema>;
type OnboardingStepKey = (typeof ONBOARDING_STEPS)[number];

/** Header carrying the browser's IANA time zone. */
export const TIME_ZONE_HEADER = 'sotf-time-zone';

export interface OnboardingState {
  steps?: Partial<Record<string, string>>;
  dismissedAt?: string;
  completedAt?: string;
  timeZone?: string;
}

/** True for a time zone the runtime (and Postgres) understands. */
export function isValidTimeZone(zone: string): boolean {
  if (zone.length === 0 || zone.length > 64 || !/^[A-Za-z0-9_+\-/]+$/.test(zone)) return false;
  try {
    new Intl.DateTimeFormat('en', { timeZone: zone });
    return true;
  } catch {
    return false;
  }
}

interface Loaded {
  state: OnboardingState;
  deletedAt: Date | null;
  derived: Partial<Record<OnboardingStepKey, Date>>;
}

async function load(exec: Executor, userId: number, forUpdate: boolean): Promise<Loaded | null> {
  const row = await queryOne<{
    onboarding: OnboardingState | null;
    deletedAt: Date | null;
    first_download: Date | string | null;
    follow_mod: Date | string | null;
    compat_report: Date | string | null;
    create_kit: Date | string | null;
  }>(
    exec,
    sql`
      SELECT u."onboarding", u."deletedAt",
             (SELECT min(d."createdAt") FROM "ModDownload" d WHERE d."userId" = u."id") AS "first_download",
             (SELECT min(f."createdAt") FROM "ModFavorite" f WHERE f."userId" = u."id") AS "follow_mod",
             (SELECT min(c."createdAt") FROM "CompatReport" c WHERE c."userId" = u."id") AS "compat_report",
             (SELECT min(k."createdAt") FROM "Kit" k WHERE k."ownerId" = u."id") AS "create_kit"
        FROM "User" u WHERE u."id" = ${userId}
        ${forUpdate ? sql`FOR UPDATE OF u` : sql``}`,
  );
  if (!row) return null;
  const derived: Partial<Record<OnboardingStepKey, Date>> = {};
  for (const key of ['first_download', 'follow_mod', 'compat_report', 'create_kit'] as const) {
    const value = toDate(row[key]);
    if (value) derived[key] = value;
  }
  return { state: { ...(row.onboarding ?? {}) }, deletedAt: row.deletedAt, derived };
}

function toDto(state: OnboardingState): OnboardingDTO {
  const steps = ONBOARDING_STEPS.map((key) => {
    const at = state.steps?.[key];
    const date = at ? toDate(at) : null;
    return { key, done: date !== null, doneAt: date ? date.toISOString() : null };
  });
  return { steps, completed: Boolean(state.completedAt), dismissed: Boolean(state.dismissedAt) };
}

/**
 * Brings the stored state up to date (derived steps, completion) and returns whether it changed
 * and whether it just completed.
 */
function advance(loaded: Loaded, now: Date): { state: OnboardingState; changed: boolean; justCompleted: boolean } {
  const state: OnboardingState = { ...loaded.state, steps: { ...(loaded.state.steps ?? {}) } };
  const steps = state.steps as Record<string, string>;
  let changed = false;
  for (const [key, at] of Object.entries(loaded.derived)) {
    if (!steps[key] && at) {
      steps[key] = at.toISOString();
      changed = true;
    }
  }
  let justCompleted = false;
  if (!state.completedAt && ONBOARDING_STEPS.every((key) => Boolean(steps[key]))) {
    state.completedAt = now.toISOString();
    changed = true;
    justCompleted = true;
  }
  return { state, changed, justCompleted };
}

async function save(tx: Executor, userId: number, state: OnboardingState): Promise<void> {
  await tx.execute(sql`UPDATE "User" SET "onboarding" = ${JSON.stringify(state)}::jsonb WHERE "id" = ${userId}`);
}

async function completed(tx: Executor, jobs: Jobs, userId: number): Promise<void> {
  await jobs.emitNew(tx, 'user.onboarding_completed', { userId }, { actorId: userId });
}

/**
 * Re-evaluates a user's checklist inside `tx` (used by the endpoints, the event consumers and the
 * nightly run). Returns the DTO.
 */
export async function syncOnboarding(
  tx: Executor,
  jobs: Jobs,
  userId: number,
  now: Date,
  patch?: (state: OnboardingState) => OnboardingState,
): Promise<OnboardingDTO | null> {
  const loaded = await load(tx, userId, true);
  if (!loaded || loaded.deletedAt) return null;
  const before = JSON.stringify(loaded.state);
  if (patch) loaded.state = patch({ ...loaded.state, steps: { ...(loaded.state.steps ?? {}) } });
  const next = advance(loaded, now);
  if (next.changed || JSON.stringify(next.state) !== before) await save(tx, userId, next.state);
  if (next.justCompleted) await completed(tx, jobs, userId);
  return toDto(next.state);
}

function actorId(ctx: Ctx): number {
  if (!ctx.actor) throw errors.unauthenticated();
  return ctx.actor.userId;
}

function withTimeZone(timeZone: string | null | undefined) {
  return (state: OnboardingState): OnboardingState =>
    timeZone && isValidTimeZone(timeZone) && state.timeZone !== timeZone ? { ...state, timeZone } : state;
}

/** `GET /me/onboarding`. */
export async function getOnboarding(ctx: Ctx, timeZone?: string | null): Promise<OnboardingDTO> {
  const userId = actorId(ctx);
  const dto = await withTx(ctx.db, (tx) =>
    syncOnboarding(tx, ctx.jobs, userId, ctx.clock.now(), withTimeZone(timeZone)),
  );
  if (!dto) throw errors.unauthenticated();
  return dto;
}

/** `PATCH /me/onboarding`: dismiss/restore the checklist, tick or untick steps by hand. */
export async function updateOnboarding(
  ctx: Ctx,
  body: z.infer<typeof UpdateOnboardingBody>,
  timeZone?: string | null,
): Promise<OnboardingDTO> {
  const userId = actorId(ctx);
  const now = ctx.clock.now();
  const dto = await withTx(ctx.db, (tx) =>
    syncOnboarding(tx, ctx.jobs, userId, now, (current) => {
      const state = withTimeZone(timeZone)(current);
      const steps = { ...(state.steps ?? {}) };
      // Unticking is ignored once the checklist is complete (the badge is already awarded).
      if (!state.completedAt) for (const step of body.markUndone ?? []) delete steps[step];
      for (const step of body.markDone ?? []) if (!steps[step]) steps[step] = now.toISOString();
      const next: OnboardingState = { ...state, steps };
      if (body.dismissed === true && !next.dismissedAt) next.dismissedAt = now.toISOString();
      if (body.dismissed === false) delete next.dismissedAt;
      return next;
    }),
  );
  if (!dto) throw errors.unauthenticated();
  return dto;
}

/**
 * Nightly: users whose self-reported step is set but whose completion was never recorded (the
 * download step has no event). Returns how many completed.
 */
export async function completePendingOnboardings(ctx: Ctx, limit = 5000): Promise<number> {
  const rows = await ctx.db.execute<{ id: number }>(sql`
    SELECT u."id" FROM "User" u
     WHERE u."deletedAt" IS NULL
       AND (u."onboarding"->'steps'->>'install_redloader') IS NOT NULL
       AND (u."onboarding"->>'completedAt') IS NULL
       AND EXISTS (SELECT 1 FROM "ModDownload" d WHERE d."userId" = u."id")
       AND EXISTS (SELECT 1 FROM "ModFavorite" f WHERE f."userId" = u."id")
       AND EXISTS (SELECT 1 FROM "CompatReport" c WHERE c."userId" = u."id")
       AND EXISTS (SELECT 1 FROM "Kit" k WHERE k."ownerId" = u."id")
     LIMIT ${limit}`);
  let done = 0;
  for (const { id } of rows.rows) {
    const dto = await withTx(ctx.db, (tx) => syncOnboarding(tx, ctx.jobs, Number(id), ctx.clock.now()));
    if (dto?.completed) done += 1;
  }
  return done;
}
