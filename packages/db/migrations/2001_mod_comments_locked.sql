-- "Mod"."commentsLockedAt": a ranger locked the comment thread of the mod (PLAN §7.6 «bloquear el
-- hilo», WP-41/WP-51 backlogs). While it is set, new comments and replies are refused; existing
-- ones stay visible. NULL = open (every legacy row).

ALTER TABLE "Mod" ADD COLUMN "commentsLockedAt" timestamp(3);
