-- STAGING ONLY (ops/runbooks/deploy/06-staging.md). Never run against production.
-- The development seed gives every account the public password `sotf-dev-2026!`; on the public
-- beta host that would let anyone sign in as a seeded moderator. Replace those hashes with a
-- random argon2id hash nobody knows the password of (the decoy of packages/core/src/auth/passwords.ts),
-- Existing sessions die with it (they are bound to a fingerprint of the hash). Idempotent.
\set ON_ERROR_STOP on

DO $$
BEGIN
  IF current_database() IN ('sotf_mods', 'postgres') THEN
    RAISE EXCEPTION 'staging-lock-seed-accounts.sql: refusing to run on database %', current_database();
  END IF;
END $$;

BEGIN;
UPDATE "User"
SET password = '$argon2id$v=19$m=65536,t=2,p=1$QDdl1b851B2gp62LjCnDNQ$QpC7YAwB6Vf69/P2mO3nBGw3rWMY67y55UUH4wGz54E'
WHERE email LIKE '%@example.test';
COMMIT;

\echo 'staging-lock-seed-accounts.sql: seed accounts locked'
