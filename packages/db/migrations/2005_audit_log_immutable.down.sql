DROP TRIGGER IF EXISTS "trg_audit_log_no_truncate" ON "AuditLog";
DROP TRIGGER IF EXISTS "trg_audit_log_immutable" ON "AuditLog";

DROP FUNCTION IF EXISTS public.sotf_audit_log_immutable();
