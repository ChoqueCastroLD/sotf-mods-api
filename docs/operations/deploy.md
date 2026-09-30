# Despliegue

PLAN §10.2, §11 y §14.4. Runbooks detallados: [`ops/runbooks/deploy/`](../../ops/runbooks/deploy/README.md).

## 1. Primera vez (una sola vez)

Sigue en este orden (lo hace el dueño; ningún agente toca Coolify ni Cloudflare):

1. **Repositorio**: el monorepo se publica como rama `v2` de `ChoqueCastroLD/sotf-mods-api`
   (§14.4). El orquestador hace el push solo cuando lo apruebas; en el corte `v2` pasa a `main`.
2. **Coolify desde Git (recomendado)**: apps compiladas por Coolify desde la rama `v2` con los
   Dockerfiles de `ops/docker/` → [`ops/deploy/COOLIFY.md`](../../ops/deploy/COOLIFY.md) y variables en
   [`ops/deploy/ENV.md`](../../ops/deploy/ENV.md). Alternativa con imágenes de GHCR y despliegue por
   CI: proyecto `sotf-mods-v2`, entornos, base de staging, las cinco apps, variables y
   entornos de GitHub → [`ops/coolify/README.md`](../../ops/coolify/README.md).
3. **`/api` en el mismo origen** (obligatorio en staging) →
   [`ops/runbooks/deploy/02-same-origin-api.md`](../../ops/runbooks/deploy/02-same-origin-api.md).
4. **Cloudflare** → [`ops/cloudflare/README.md`](../../ops/cloudflare/README.md) (la regla
   `r2-immutable` se crea desactivada y se activa en el corte, tras B17).
5. **Staging con el seed** →
   [`ops/runbooks/deploy/06-staging.md`](../../ops/runbooks/deploy/06-staging.md).

## 2. Cada release

```
push a v2/main ──► release.yml ──► imágenes sha-<sha> + staging ──► sotf-v2-migrate (staging)
                                      ──► api, worker, web (rolling) ──► smoke.sh staging ──► purga html
git tag v2.x.y ──► deploy.yml ──► aprobación ──► retag sha-<sha> → production (sin reconstruir)
                                      ──► sotf-v2-migrate ──► api, worker, web ──► smoke.sh production
```

1. Comprueba staging: *Actions → release* en verde y una prueba manual en `beta.sotf-mods.com`.
2. Etiqueta **el mismo commit** que pasó por staging (`git tag -a v2.x.y -m "v2.x.y"`); el push de
   la etiqueta lo hace el orquestador cuando lo apruebas.
3. Aprueba el entorno `production` en GitHub. `deploy.yml` re-etiqueta las mismas imágenes, aplica
   las migraciones y despliega. Si la tarea de migraciones falla (por ejemplo, la guarda detecta
   drift en el catálogo), el despliegue se detiene antes de tocar api, worker o web.
4. Tras el despliegue la web purga el tag `html` de Cloudflare una vez por sha.

Detalle y variantes: [`ops/runbooks/deploy/04-release-and-rollback.md`](../../ops/runbooks/deploy/04-release-and-rollback.md).

### Orden y compatibilidad

- Las migraciones van **siempre antes** que el código que las usa y son aditivas: el código
  anterior sigue funcionando con el esquema nuevo. Por eso se puede volver a una release anterior
  sin tocar la base.
- Una migración que añade una tabla de solo inserción exige volver a ejecutar
  [`ops/sql/roles.sql`](../../ops/sql/README.md) (el script termina con `roles.sql: complete`).
- Coolify hace *rolling update*: si el contenedor nuevo no pasa `/healthz`, sigue sirviendo el
  anterior. Ninguna app publica puertos al host (condición para el *rolling update*).

## 3. Migraciones, backfills y CLIs del operador

- Migraciones manuales o estado: *Terminal* de `sotf-v2-migrate` → `node dist/migrate.js status`.
- Backfills B1–B14, invariantes, `verify-snapshot`, `admin:grant`, pasadas R2: arranca
  `sotf-v2-tools`, úsala y **párala** (tiene credenciales de *owner*).
- Backfills del worker (B15, B16): `node dist/backfill.js B15 [--apply] [--wait]` en la terminal
  de `sotf-v2-api`.

Todo en [`ops/runbooks/deploy/05-migrations-and-backfills.md`](../../ops/runbooks/deploy/05-migrations-and-backfills.md)
y [`ops/runbooks/migration/r2-pass.md`](../../ops/runbooks/migration/r2-pass.md).

## 4. Cuenta de administrador

Tras el corte (§14.3), con la cuenta `luis.choque.castro@outlook.com` registrada y verificada por
el flujo normal:

```bash
# en la terminal de sotf-v2-tools (directorio tooling/migration)
node src/cli/admin-grant.ts --email luis.choque.castro@outlook.com --role admin --confirm sotf_mods
```

Los moderadores no se crean a mano: el backfill B7 da `role = moderator` a quien tenía
`isTrusted = true` en la legacy (§14.2).

## 5. Comprobación después de desplegar

```bash
ops/runbooks/deploy/smoke.sh production   # solo GET/HEAD; nunca descarga, favorito, approve ni KelvinSeek
```

Además: `https://sotf-mods.com/healthz` muestra el sha desplegado; en Coolify las apps están
*Running (healthy)*; `sotf-v2-tools` está parada.
