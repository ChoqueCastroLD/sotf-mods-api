-- sotf:statement-timeout: 10min
--
-- Validates the "ModDownload" constraints added NOT VALID in 0010. The scan of ~2M rows needs
-- more than the default 60 s statement timeout on a busy host; the lock (SHARE UPDATE EXCLUSIVE)
-- does not block the download INSERTs.

ALTER TABLE "ModDownload" VALIDATE CONSTRAINT "ModDownload_source_check";

ALTER TABLE "ModDownload" VALIDATE CONSTRAINT "ModDownload_userId_fkey";
