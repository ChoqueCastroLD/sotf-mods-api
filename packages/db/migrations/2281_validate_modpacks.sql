-- Validates the CHECK constraints added NOT VALID by 2280 (the defaults made every row valid).
ALTER TABLE "Kit" VALIDATE CONSTRAINT "Kit_approvalStatus_check";
ALTER TABLE "Kit" VALIDATE CONSTRAINT "Kit_downloads_check";
