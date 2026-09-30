# Runbook · Release, producción y marcha atrás

PLAN §10.2, §11.7, §6.14 y §14.5.

## 1. Staging (automático)

Push a `v2` (antes del corte) o `main` → `.github/workflows/release.yml`:

1. Construye `sotf-node`, `sotf-tools` y `sotf-web`, comprueba tamaños (web ≤ 180 MB, node
   ≤ 230 MB), que no corren como root y que no llevan `.env`, dumps ni fuentes TS
   (`ops/docker/inspect-image.sh`), y publica `sha-<sha>` + `staging` en GHCR.
2. Despliega `sotf-v2-migrate` (staging) y espera a que esté *healthy* = migraciones aplicadas.
3. Despliega api, worker y web (rolling) y espera.
4. `smoke.sh staging` tras esperar a que `/healthz` reporte el sha nuevo.
5. La web, ya sana, purga el tag `html` (una vez por sha) sola.

## 2. Producción

1. Verifica staging (smoke verde + prueba manual).
2. Crea la etiqueta en el **mismo commit** que pasó por staging y súbela:
   `git tag -a v2.0.0 -m "v2.0.0" && git push origin v2.0.0` (lo hace el orquestador cuando lo apruebes).
3. `deploy.yml` espera tu aprobación (entorno `production`), re-etiqueta **las mismas imágenes**
   (`sha-<sha>` → `production`, `v2.0.0`; no reconstruye), ejecuta las migraciones (aditivas y con
   guarda), despliega api/worker/web y lanza `smoke.sh production`.
4. Redesplegar una versión anterior: *Actions → deploy → Run workflow* con `tag: v2.0.0`.

Reglas: las migraciones de producción son **estrictamente aditivas** (§14.5); nunca se ejecuta
`down` en producción; nunca `UPDATE`/`DELETE` sobre tablas legacy fuera de la app.

## 3. Marcha atrás

| Caso | Pasos |
|---|---|
| Fallo de una release v2 (código) | *Run workflow* de `deploy.yml` con la etiqueta anterior. El esquema solo se amplió, así que el código anterior sigue siendo compatible |
| Fallo de despliegue a medias | Coolify mantiene el contenedor anterior si el nuevo no pasa el health check (rolling); revisa *Deployments → logs* |
| Fallo grave de v2 tras el corte (R1, ≤ T+30) | Coolify: devolver los dominios a `sotf-mods-frontend` y `sotf-mods-api` y arrancarlas; parar web y api v2; worker con `LEGACY_COEXIST=true` o parado; Cloudflare → *Purge Everything*. Sin pérdida de datos (§6.14) |
| Backfill erróneo (R2) | `node src/cli/revert-fix.ts <fixId> --confirm sotf_mods` en `sotf-v2-tools` (ver `05-…`) |
| Un trigger molesta (R3) | `ops/sql/kill-switch.sql` |

No hay backups (§14.5): la marcha atrás es siempre volver a apuntar los dominios a las apps legacy.
Si en el futuro quieres backups, la recomendación es activarlos en Coolify (diarios a un bucket R2
privado); este repositorio no los programa.
