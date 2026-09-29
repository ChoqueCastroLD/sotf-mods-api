/** Target database of the operator CLIs (backfills, fixes, verification). */
import { describeTarget } from '../db.ts';
import { resolveDatabaseUrl } from '../local.ts';
import { flagString, type ParsedArgs } from './_shared.ts';

/**
 * Resolves the database URL and, for a write on a non-local database, requires
 * `--confirm <database name>` (the production job passes it explicitly).
 */
export function operatorTarget(args: ParsedArgs, write: boolean): { url: string; label: string } {
  const url = resolveDatabaseUrl();
  const target = describeTarget(url);
  if (write && !target.local && flagString(args, 'confirm') !== target.database) {
    throw new Error(`writing to ${target.database} on ${target.host} needs --confirm ${target.database}`);
  }
  return { url, label: `${target.database} on ${target.host}` };
}
