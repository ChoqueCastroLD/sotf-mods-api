-- PostgreSQL roles of v2 (PLAN §6.7). Run by the database OWNER (the current Coolify credential),
-- never by an agent against production. Idempotent: re-running updates passwords and grants.
--
--   psql "$OWNER_DATABASE_URL" -v ON_ERROR_STOP=1 \
--     -v v2_password="$SOTF_V2_APP_PASSWORD" \
--     -v legacy_password="$SOTF_LEGACY_APP_PASSWORD" \
--     [-v readonly_password="$SOTF_READONLY_PASSWORD"] \
--     -f ops/sql/roles.sql
--
-- When: cutover step B2 (PLAN §6.13), BEFORE the migration job of B3, so that the legacy API
-- already runs as sotf_legacy_app (no DDL) when the v2 tables appear. At that point only the
-- legacy tables exist: the v2-specific steps (insert-only "AuditLog", migration ledger, pgboss)
-- are skipped with a notice. Run it AGAIN after B3 (and after any `db:migrate` that adds an
-- insert-only table), before sotf_v2_app is used: default privileges grant sotf_v2_app full DML
-- on every table the migrations create, and only this script takes UPDATE/DELETE on "AuditLog"
-- back. The script prints `roles.sql: complete` only when every step applied.
-- Passwords are passed as psql variables, never written to a file.
--
-- Roles:
--   sotf_v2_app      api + worker: DML on public and pgboss, no DDL; "AuditLog" is insert-only;
--                    statement_timeout 5s, idle_in_transaction_session_timeout 30s.
--   sotf_legacy_app  legacy API (from step B2 of the cutover and on rollback): DML on the 16
--                    legacy tables only, no DDL, so `prisma db push` is impossible.
--   sotf_readonly    optional: profiling and support (SELECT only, read-only sessions).
--   owner            migrations only; rotated after the cutover.

\set ON_ERROR_STOP on

\if :{?v2_password}
\else
  \echo 'roles.sql: pass -v v2_password=...'
  DO $$ BEGIN RAISE EXCEPTION 'missing psql variable v2_password'; END $$;
\endif
\if :{?legacy_password}
\else
  \echo 'roles.sql: pass -v legacy_password=...'
  DO $$ BEGIN RAISE EXCEPTION 'missing psql variable legacy_password'; END $$;
\endif

BEGIN;

-- 1. Login roles (created once; password and attributes refreshed on every run).
SELECT format('CREATE ROLE sotf_v2_app LOGIN PASSWORD %L', :'v2_password')
 WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sotf_v2_app') \gexec
SELECT format('ALTER ROLE sotf_v2_app WITH LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS PASSWORD %L', :'v2_password') \gexec
ALTER ROLE sotf_v2_app SET statement_timeout = '5s';
ALTER ROLE sotf_v2_app SET idle_in_transaction_session_timeout = '30s';
ALTER ROLE sotf_v2_app SET timezone = 'UTC';

SELECT format('CREATE ROLE sotf_legacy_app LOGIN PASSWORD %L', :'legacy_password')
 WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sotf_legacy_app') \gexec
SELECT format('ALTER ROLE sotf_legacy_app WITH LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS PASSWORD %L', :'legacy_password') \gexec

SELECT format('GRANT CONNECT ON DATABASE %I TO sotf_v2_app, sotf_legacy_app', current_database()) \gexec

-- 2. Nobody but the owner creates objects in public (already the default since PostgreSQL 15).
REVOKE CREATE ON SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO sotf_v2_app, sotf_legacy_app;

-- 3. v2 application: DML everywhere in public, no DDL.
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO sotf_v2_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO sotf_v2_app;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO sotf_v2_app;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT USAGE, SELECT ON SEQUENCES TO sotf_v2_app;
-- The audit trail is insert-only, and only the migration job writes the migration ledger. Both
-- tables are created by `pnpm db:migrate` (B3): before that there is nothing to revoke yet.
SELECT to_regclass('public."AuditLog"') IS NOT NULL AS has_audit_log,
       to_regclass('public."_v2_migrations"') IS NOT NULL AS has_ledger \gset
\if :has_audit_log
  REVOKE UPDATE, DELETE, TRUNCATE ON "AuditLog" FROM sotf_v2_app;
\else
  \echo 'roles.sql: table "AuditLog" not found (migrations not applied yet): re-run this script after `pnpm db:migrate`'
\endif
\if :has_ledger
  REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON "_v2_migrations" FROM sotf_v2_app;
\else
  \echo 'roles.sql: table "_v2_migrations" not found (migrations not applied yet): re-run this script after `pnpm db:migrate`'
\endif

-- pg-boss (installed by `pnpm db:migrate` with the owner credentials). Queues created with
-- `partition: true` run DDL: create them from the migration job, not from the app.
SELECT EXISTS (SELECT 1 FROM pg_namespace WHERE nspname = 'pgboss') AS has_pgboss \gset
\if :has_pgboss
  GRANT USAGE ON SCHEMA pgboss TO sotf_v2_app;
  GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA pgboss TO sotf_v2_app;
  GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA pgboss TO sotf_v2_app;
  GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA pgboss TO sotf_v2_app;
  ALTER DEFAULT PRIVILEGES IN SCHEMA pgboss GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO sotf_v2_app;
  ALTER DEFAULT PRIVILEGES IN SCHEMA pgboss GRANT USAGE, SELECT ON SEQUENCES TO sotf_v2_app;
  ALTER DEFAULT PRIVILEGES IN SCHEMA pgboss GRANT EXECUTE ON FUNCTIONS TO sotf_v2_app;
\else
  \echo 'roles.sql: schema pgboss not found (migrations not applied yet): re-run this script after `pnpm db:migrate`'
\endif

-- 4. Legacy application: DML on the 16 legacy tables and their sequences only.
DO $$
DECLARE
  legacy_tables text[] := ARRAY[
    'User', 'Token', 'PasswordResetToken', 'LoginAttempt', 'Mod', 'ModImage', 'ModVersion', 'Tag',
    'Category', 'ModDownload', 'ModFavorite', 'ModReview', 'KelvinGPTMessages', 'Comment',
    'PendingMention', '_ModToTag'
  ];
  t text;
  seq text;
BEGIN
  FOREACH t IN ARRAY legacy_tables LOOP
    EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON public.%I TO sotf_legacy_app', t);
    IF EXISTS (SELECT 1 FROM pg_attribute WHERE attrelid = format('public.%I', t)::regclass AND attname = 'id') THEN
      seq := pg_get_serial_sequence(format('public.%I', t), 'id');
      IF seq IS NOT NULL THEN
        EXECUTE format('GRANT USAGE, SELECT ON SEQUENCE %s TO sotf_legacy_app', seq);
      END IF;
    END IF;
  END LOOP;
END
$$;

-- 5. Optional read-only role.
\if :{?readonly_password}
  SELECT format('CREATE ROLE sotf_readonly LOGIN PASSWORD %L', :'readonly_password')
   WHERE NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'sotf_readonly') \gexec
  SELECT format('ALTER ROLE sotf_readonly WITH LOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOREPLICATION NOBYPASSRLS PASSWORD %L', :'readonly_password') \gexec
  ALTER ROLE sotf_readonly SET default_transaction_read_only = on;
  ALTER ROLE sotf_readonly SET statement_timeout = '30s';
  SELECT format('GRANT CONNECT ON DATABASE %I TO sotf_readonly', current_database()) \gexec
  GRANT USAGE ON SCHEMA public TO sotf_readonly;
  GRANT SELECT ON ALL TABLES IN SCHEMA public TO sotf_readonly;
  ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO sotf_readonly;
\endif

COMMIT;

SELECT :'has_audit_log'::boolean AND :'has_ledger'::boolean AND :'has_pgboss'::boolean AS roles_complete \gset
\if :roles_complete
  \echo 'roles.sql: complete (sotf_v2_app, sotf_legacy_app and the v2 grants are in place)'
\else
  \echo 'roles.sql: PARTIAL: sotf_legacy_app is ready; re-run after `pnpm db:migrate` before sotf_v2_app is used'
\endif
