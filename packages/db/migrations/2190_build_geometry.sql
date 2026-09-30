-- Parsed geometry of a BuildShare blueprint (T1-06): packed Float32 pieces for the lazy 3D viewer
-- and a server-rendered top-down SVG preview. Derived data, rebuilt by `build.geometry`.
CREATE TABLE IF NOT EXISTS "BuildGeometry" (
  "modVersionId" integer NOT NULL,
  "status" text NOT NULL DEFAULT 'ready',
  "pieces" integer NOT NULL DEFAULT 0,
  "totalPieces" integer NOT NULL DEFAULT 0,
  "profiles" jsonb NOT NULL DEFAULT '[]'::jsonb,
  "bounds" jsonb,
  "geometry" bytea,
  "previewSvg" text,
  "createdAt" timestamptz(3) NOT NULL DEFAULT now(),
  CONSTRAINT "BuildGeometry_pkey" PRIMARY KEY ("modVersionId"),
  CONSTRAINT "BuildGeometry_status_check" CHECK ("status" IN ('ready', 'empty', 'failed')),
  CONSTRAINT "BuildGeometry_modVersionId_fkey" FOREIGN KEY ("modVersionId") REFERENCES "ModVersion"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
