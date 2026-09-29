# ops/sql

SQL that **the owner runs by hand** (PLAN §6.7, §6.13, §2.8). Agents never run these against
production; every script is covered by the integration tests of `@sotf/db`
(`packages/db/test/ops-sql.int.test.ts`) on a disposable PostgreSQL 16.

| File | When | What |
|---|---|---|
| `roles.sql` | Cutover step B2 (before the migrations of B3) **and again after B3** / any `db:migrate` that adds an insert-only table | Creates/updates `sotf_v2_app` (DML on `public` + `pgboss`, `"AuditLog"` insert-only, no DDL, `statement_timeout 5s`, `idle_in_transaction_session_timeout 30s`), `sotf_legacy_app` (DML on the 16 legacy tables only: `prisma db push` becomes impossible) and, optionally, `sotf_readonly`. Idempotent. |
| `kill-switch.sql` | Emergency | Drops the five v2 sync triggers of migration 0020 without touching data. |
| `kill-switch-restore.sql` | After the emergency | Recreates the triggers (identical definitions; rows written meanwhile are not re-synced: run the status backfill). |
| `audit-files-host.sql` | Before the cutover (§2.8 step 2) | Read-only: counts the legacy file host in every text column and lists the affected rows. Expected: one `ModVersion` (mod 168, v0.0.3). |

```bash
# Passwords are psql variables: they are never written to a file.
psql "$OWNER_DATABASE_URL" -v ON_ERROR_STOP=1 \
  -v v2_password="$SOTF_V2_APP_PASSWORD" -v legacy_password="$SOTF_LEGACY_APP_PASSWORD" \
  -f ops/sql/roles.sql

psql "$OWNER_DATABASE_URL" -v ON_ERROR_STOP=1 -f ops/sql/kill-switch.sql
psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f ops/sql/audit-files-host.sql
```

Notes:

- At B2 only the legacy tables exist: `roles.sql` sets up `sotf_legacy_app` and prints
  `PARTIAL` (the `"AuditLog"` / `"_v2_migrations"` revokes and the `pgboss` grants are skipped).
  Default privileges then give `sotf_v2_app` full DML on every table the migrations create, so
  the script must run again after B3; it prints `roles.sql: complete` when every step applied.
  A future insert-only table needs its own conditional `REVOKE UPDATE, DELETE` block here.
- pg-boss queues created with `partition: true` run DDL: create them from the migrate task (owner),
  not from the application role.
- `CREATE ROLE … PASSWORD` shows up in the server log if statement logging is on; rotate the
  passwords afterwards if that is the case.
