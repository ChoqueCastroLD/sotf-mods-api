DELETE FROM "Report" WHERE "targetType" IN ('request', 'request_comment');

ALTER TABLE "Report" DROP CONSTRAINT "Report_targetType_check";

ALTER TABLE "Report" ADD CONSTRAINT "Report_targetType_check"
  CHECK ("targetType" IN ('mod', 'version', 'comment', 'review', 'user', 'kit', 'compat_report'));
