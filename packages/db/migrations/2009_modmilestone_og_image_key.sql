-- Share card of a mod milestone (PLAN §7.2), rendered by og.render (entity `milestone`).
ALTER TABLE "ModMilestone" ADD COLUMN IF NOT EXISTS "ogImageKey" text;
