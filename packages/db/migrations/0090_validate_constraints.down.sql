-- Nothing to undo: validation only flips pg_constraint.convalidated. The constraints themselves
-- are dropped by the down files of the migrations that added them.
SELECT 1;
