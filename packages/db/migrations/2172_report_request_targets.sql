-- Reports on the mod request board: a request ("request") and a comment on a request
-- ("request_comment") can be reported like any other content. Widens the CHECK only.

ALTER TABLE "Report" DROP CONSTRAINT "Report_targetType_check";

ALTER TABLE "Report" ADD CONSTRAINT "Report_targetType_check"
  CHECK ("targetType" IN ('mod', 'version', 'comment', 'review', 'user', 'kit', 'compat_report', 'request', 'request_comment'));
