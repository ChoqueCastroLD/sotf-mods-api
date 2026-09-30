-- Ranger Station: «asignarse el ítem» and `e` (escalar) of PLAN §7.4 (WP-51/WP-82 backlogs).
-- One row per queue target (`mod`, `version`, `comment`, `report`), created on the first
-- assignment or escalation. "assigneeId" NULL = unassigned; "escalatedAt" NULL = not escalated
-- (escalated items wait for an admin). Reports keep their own "Report"."assignedToId" in sync.
-- Every change is also recorded in "AuditLog" (`queue.assign`, `queue.unassign`, `queue.escalate`).

CREATE TABLE "ModerationAssignment" (
  "targetType" text NOT NULL,
  "targetId" integer NOT NULL,
  "assigneeId" integer,
  "assignedAt" timestamptz(3),
  "escalatedAt" timestamptz(3),
  "escalatedById" integer,
  "escalationReason" text,
  "updatedAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "ModerationAssignment_pkey" PRIMARY KEY ("targetType", "targetId"),
  CONSTRAINT "ModerationAssignment_targetType_check" CHECK ("targetType" IN ('mod', 'version', 'comment', 'report')),
  CONSTRAINT "ModerationAssignment_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT "ModerationAssignment_escalatedById_fkey" FOREIGN KEY ("escalatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX "ModerationAssignment_assigneeId_idx" ON "ModerationAssignment"("assigneeId") WHERE "assigneeId" IS NOT NULL;

CREATE INDEX "ModerationAssignment_escalated_idx" ON "ModerationAssignment"("escalatedAt") WHERE "escalatedAt" IS NOT NULL;
