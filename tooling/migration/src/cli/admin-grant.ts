/**
 * `pnpm admin:grant --email <email> --role <admin|moderator|user>` (PLAN §14.3, §6.9 B7).
 *
 * The account must already exist (created with the normal sign-up and verification). Naming a
 * moderator or admin also sets the legacy `isTrusted` (audited). Recorded in "AuditLog".
 */
import { connect } from '../db.ts';
import { grantRole, ROLES, type Role } from '../fixes.ts';
import { cliLogger, color, flagString, helpRequested, parseArgs, runCli } from './_shared.ts';
import { operatorTarget } from './_target.ts';

const USAGE = `
pnpm admin:grant --email <email> --role <${ROLES.join('|')}> [--reason <text>] [--dry-run] [--confirm <db>]
`;

async function main(): Promise<number> {
  const args = parseArgs(process.argv.slice(2));
  if (helpRequested(args, USAGE)) return 0;
  const email = flagString(args, 'email');
  const role = flagString(args, 'role') as Role | undefined;
  if (!email || !role) throw new Error(`usage: ${USAGE.trim()}`);
  const dryRun = args.flags.has('dry-run');
  const { url, label } = operatorTarget(args, !dryRun);
  const client = await connect(url, 'sotf-admin-grant');
  try {
    const r = await grantRole(client, { email, role, dryRun, reason: flagString(args, 'reason') });
    cliLogger.info(color.dim(`database ${label}${dryRun ? ' (dry run)' : ''}`));
    cliLogger.info(
      color.green(
        `${dryRun ? 'would grant' : 'granted'} ${r.role} to user ${r.userId} <${r.email}> (was ${r.previousRole})` +
          (r.trustedSet ? '; legacy isTrusted set (audited as admin-grant)' : ''),
      ),
    );
    return 0;
  } finally {
    await client.end();
  }
}

runCli(main);
