-- Validates the constraints added NOT VALID to legacy tables (PLAN §6.1 rule 8). VALIDATE takes a
-- SHARE UPDATE EXCLUSIVE lock: reads and writes keep flowing while the rows are checked.
-- "ModDownload" (~2M rows) is validated separately in 0091 with a longer statement timeout.

ALTER TABLE "User" VALIDATE CONSTRAINT "User_role_check";

ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_status_check";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_platform_check";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_multiplayerRole_check";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_dedicatedServer_check";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_safeToRemove_check";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_compatStatus_check";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_approvedById_fkey";
ALTER TABLE "Mod" VALIDATE CONSTRAINT "Mod_successorModId_fkey";

ALTER TABLE "ModVersion" VALIDATE CONSTRAINT "ModVersion_status_check";
ALTER TABLE "ModVersion" VALIDATE CONSTRAINT "ModVersion_channel_check";
ALTER TABLE "ModVersion" VALIDATE CONSTRAINT "ModVersion_checksStatus_check";
ALTER TABLE "ModVersion" VALIDATE CONSTRAINT "ModVersion_publishedById_fkey";

ALTER TABLE "Comment" VALIDATE CONSTRAINT "Comment_status_check";
ALTER TABLE "Comment" VALIDATE CONSTRAINT "Comment_deletedById_fkey";
ALTER TABLE "Comment" VALIDATE CONSTRAINT "Comment_pinnedById_fkey";
ALTER TABLE "Comment" VALIDATE CONSTRAINT "Comment_modVersionId_fkey";
ALTER TABLE "Comment" VALIDATE CONSTRAINT "Comment_bugResolvedInVersionId_fkey";

ALTER TABLE "ModReview" VALIDATE CONSTRAINT "ModReview_status_check";
ALTER TABLE "ModReview" VALIDATE CONSTRAINT "ModReview_modVersionId_fkey";
