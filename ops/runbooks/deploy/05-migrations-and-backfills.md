# Runbook · Migraciones, backfills y CLIs del operador en Coolify

PLAN §6.9, §6.13 (B3, B5, B6, D3, D4) y §14.5. Complementa
[`../migration/r2-pass.md`](../migration/r2-pass.md) (B15, B4M, B8, B17).

## 1. Migraciones

- Automáticas en cada release: la app `sotf-v2-migrate` (`SOTF_ROLE=migrate-task`) ejecuta
  `node dist/migrate.js up` con `MIGRATIONS_DATABASE_URL` (owner): guarda → migraciones → pg-boss →
  guarda. Si algo no cuadra (drift del catálogo), aborta y el despliegue falla.
- Manual (B3 del corte o para ver el estado): arranca `sotf-v2-migrate` y en su *Terminal*:

  ```bash
  node dist/migrate.js status
  node dist/migrate.js up
  ```

- Después de B3 y de cualquier migración con tablas de solo inserción: `ops/sql/roles.sql`.

## 2. Backfills B1–B14 (tooling, `sotf-v2-tools`)

Arranca `sotf-v2-tools` (*Start*), abre su *Terminal* (directorio `tooling/migration`):

```bash
node src/cli/backfill.ts --list
node src/cli/backfill.ts --all --dry-run                 # ensayo: cuentas reales, nada se guarda
node src/cli/backfill.ts --all --confirm sotf_mods       # B5
node src/cli/invariants.ts
node src/cli/verify-snapshot.ts
# D4, tras el corte:
node src/cli/backfill.ts --delta --since-watermarks --confirm sotf_mods
# Cuenta admin (§14.3), tras registrarte y verificar el email:
node src/cli/admin-grant.ts --email luis.choque.castro@outlook.com --role admin --confirm sotf_mods
```

Los informes quedan en `out/` del contenedor (se pierden al pararlo: copia lo que necesites de la
salida). **Para** `sotf-v2-tools` al terminar.

## 3. Backfills del worker (B15, B16)

En la *Terminal* de `sotf-v2-api` (o de `sotf-v2-worker`):

```bash
node dist/backfill.js B15            # ensayo (dry run)
node dist/backfill.js B15 --apply --wait
```

El job lo ejecuta el worker (`backfill.run`); `--wait` espera y sale con error si falló.

## 4. Pasadas R2 (B4M, B8, B17, sugerencias)

En `sotf-v2-tools`, con las variables R2 de `ops/coolify/env/tools.env.example`; siempre en
ensayo salvo `--apply` (detalle en `r2-pass.md`):

```bash
node backfills-r2/cli/manifest-fixes.ts --help
node backfills-r2/cli/b17-metadata.ts --help
node backfills-r2/suggest-categories.ts --help
```
