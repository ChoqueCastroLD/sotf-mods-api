-- Anonymises a restored copy of the production database into a shareable dev.dump
-- (PLAN §6.12, research/02 §8.2 A.5). DESTRUCTIVE: only for the local `sotf_prod_copy` database;
-- `pnpm db:anonymize --confirm <database>` refuses any other target and non-local hosts.
--
-- - emails → user<id>@example.invalid; passwords → argon2id of the dev password
--   (tooling/migration/src/constants.ts DEV_PASSWORD_ARGON2ID; a unit test checks they match);
-- - sessions, reset tokens and pending mentions are emptied; KelvinSeek conversations too;
-- - download IPs are replaced by a salted hash (the salt is random and discarded), keeping the
--   literals 'undefined', 'null' and '' and the shape of x-forwarded-for chains, so the channel
--   classification of B1 is unchanged;
-- - comment IPs → 'redacted'; login attempts lose their email and IP.
-- Counts, ids, content and timestamps are kept, so every backfill and invariant can be rehearsed.

BEGIN;

CREATE TEMP TABLE anon_salt ON COMMIT DROP AS SELECT md5(random()::text || clock_timestamp()::text) AS salt;

UPDATE "User"
   SET "email" = 'user' || "id" || '@example.invalid',
       "password" = '$argon2id$v=19$m=65536,t=2,p=1$UbOPxj/gSeBm7kdfV5au9g$Iq1kbYe86SFiYH7AupL3YHoW5FCpMV/S/er3geF8AVA';

TRUNCATE "Token", "PasswordResetToken", "PendingMention", "KelvinGPTMessages";

UPDATE "ModDownload" d
   SET "ip" = (SELECT string_agg('anon-' || left(md5(btrim(part) || s.salt), 12), ', ' ORDER BY ord)
                 FROM unnest(string_to_array(d."ip", ',')) WITH ORDINALITY AS p(part, ord), anon_salt s)
 WHERE d."ip" NOT IN ('undefined', 'null', '');

UPDATE "Comment" SET "ip" = 'redacted' WHERE "ip" <> 'redacted';

UPDATE "LoginAttempt"
   SET "email" = 'user@example.invalid',
       "ip" = (SELECT 'anon-' || left(md5("ip" || s.salt), 12) FROM anon_salt s);

COMMIT;
