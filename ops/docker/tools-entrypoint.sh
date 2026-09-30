#!/bin/sh
# Entry point of the sotf-tools image (operator CLIs of @sotf/migration-tools). Runs under tini,
# working directory tooling/migration.
#
#   docker run sotf-tools src/cli/backfill.ts --all --dry-run   → node src/cli/backfill.ts …
#   docker run sotf-tools                                       → SOTF_ROLE
#
#   SOTF_ROLE=help (default)  print the available CLIs
#   SOTF_ROLE=idle            stay up (a Coolify app to open a terminal in; stop it afterwards)
#
# Writes to a non-local database need `--confirm <database>` (tooling/migration/src/cli/_target.ts).
set -eu

if [ "$#" -gt 0 ]; then
  case "$1" in
    node | sh | psql | pg_dump | pg_restore) exec "$@" ;;
    *) exec node "$@" ;;
  esac
fi

case "${SOTF_ROLE:-help}" in
  idle)
    exec tail -f /dev/null
    ;;
  help)
    cat <<'HELP'
sotf-tools: operator CLIs (MIGRATIONS_DATABASE_URL or DATABASE_URL selects the database)

  node src/cli/backfill.ts --list | --all | --delta | B1,B11  [--dry-run] --confirm <db>
  node src/cli/invariants.ts
  node src/cli/verify-snapshot.ts
  node src/cli/revert-fix.ts <fixId> --confirm <db>
  node src/cli/admin-grant.ts --email <email> --role admin --confirm <db>
  node backfills-r2/cli/b17-metadata.ts --help
  node backfills-r2/cli/manifest-fixes.ts --help
  node backfills-r2/suggest-categories.ts --help

Every CLI prints its options with --help. Runbook: ops/runbooks/deploy/05-migrations-and-backfills.md
HELP
    ;;
  *)
    echo "unknown SOTF_ROLE \"${SOTF_ROLE}\" (help, idle)" >&2
    exit 64
    ;;
esac
