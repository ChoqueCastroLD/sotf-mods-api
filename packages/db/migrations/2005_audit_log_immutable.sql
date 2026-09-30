-- Defense in depth for the insert-only "AuditLog" (PLAN §7.4 «AuditLog inmutable», WP-51
-- backlog): ops/sql/roles.sql already revokes UPDATE/DELETE/TRUNCATE from the application role;
-- these triggers also refuse them for the owner role, so no script can rewrite history by mistake.
-- A deliberate purge must drop the triggers first (DBA action, recorded in the runbook).

CREATE FUNCTION public.sotf_audit_log_immutable() RETURNS trigger
  LANGUAGE plpgsql
  AS $$
BEGIN
  RAISE EXCEPTION 'AuditLog is insert-only (% refused)', TG_OP
    USING ERRCODE = 'insufficient_privilege';
END;
$$;

CREATE TRIGGER "trg_audit_log_immutable"
  BEFORE UPDATE OR DELETE ON "AuditLog"
  FOR EACH ROW EXECUTE FUNCTION public.sotf_audit_log_immutable();

CREATE TRIGGER "trg_audit_log_no_truncate"
  BEFORE TRUNCATE ON "AuditLog"
  FOR EACH STATEMENT EXECUTE FUNCTION public.sotf_audit_log_immutable();
