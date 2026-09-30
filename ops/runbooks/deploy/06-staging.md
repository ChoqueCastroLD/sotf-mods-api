# Runbook · Staging (`beta.sotf-mods.com`) con el seed

PLAN §14.5: staging **no** usa copias de producción ni backups; usa el dataset de desarrollo
(snapshot público + datos sintéticos con las rarezas conocidas, §6.12). Se reinicia cada semana.

## 1. Obtener el dump del seed

- Automático: `nightly.yml` (domingos) sube el artefacto `dev-seed-dump`
  (`dev-seed.dump`, formato `pg_dump -Fc`). Descárgalo de *Actions → nightly → Artifacts*.
- O en local: `pnpm infra:up && pnpm db:seed:dev --reset` → `tooling/migration/out/dev-seed.dump`.

## 2. Restaurar en `sotf-v2-staging-db`

1. Para `sotf-v2-api`, `sotf-v2-worker` y `sotf-v2-web` de staging.
2. Copia el dump y `staging-lock-seed-accounts.sql` al servidor (`/tmp/`) y, en la terminal del
   servidor:

   ```bash
   DB='postgres://sotf_staging:<contraseña>@<host interno de sotf-v2-staging-db>:5432/sotf_staging'
   docker run --rm -i --network coolify -v /tmp:/in:ro postgres:16-alpine sh -c "
     psql '$DB' -v ON_ERROR_STOP=1 -c 'DROP SCHEMA IF EXISTS pgboss CASCADE; DROP SCHEMA public CASCADE; CREATE SCHEMA public;' &&
     pg_restore --no-owner --no-acl --exit-on-error -d '$DB' /in/dev-seed.dump &&
     psql '$DB' -v ON_ERROR_STOP=1 -f /in/staging-lock-seed-accounts.sql"
   ```

3. `ops/sql/roles.sql` otra vez (ver `ops/coolify/README.md` §4).
4. Despliega `sotf-v2-migrate` (aplica migraciones nuevas si las hay) y luego api, worker y web
   (o lanza *Actions → release → Run workflow*).
5. Crea tu cuenta en beta con el flujo normal (registro + verificación; el worker de staging
   solo envía a `EMAIL_ALLOWLIST`) y concédete admin con un contenedor efímero de la imagen de
   herramientas, en la terminal del servidor:

   ```bash
   docker run --rm -it --network coolify -e MIGRATIONS_DATABASE_URL="$DB" \
     ghcr.io/choquecastrold/sotf-tools:staging \
     src/cli/admin-grant.ts --email <tu email> --role admin --confirm sotf_staging
   ```

6. `ops/runbooks/deploy/smoke.sh staging`.

## 3. Por qué bloquear las cuentas del seed

Todas las cuentas del seed tienen la contraseña pública `sotf-dev-2026!` (emails
`@example.test`). En un host público cualquiera podría entrar como un moderador del seed:
`staging-lock-seed-accounts.sql` sustituye esos hashes por uno que nadie conoce. Solo se ejecuta
en staging.
