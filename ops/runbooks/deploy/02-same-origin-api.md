# Runbook · `/api` en el mismo origen (validación en staging)

PLAN §11.3: la API se sirve en `https://<sitio>/api/*` (mismo origen que la web: cookies
`__Host-`, CSRF por `Sec-Fetch-Site`, sin CORS) y además en `https://api.sotf-mods.com`. En
Coolify es un **dominio con ruta** en la app `sotf-v2-api` y **Strip Prefixes desactivado**.

## 1. Comprobaciones (desde tu máquina, solo GET/HEAD)

```bash
S=https://beta.sotf-mods.com
curl -s  "$S/healthz"                    # {"status":"ok","service":"web",…}   ← la web
curl -s  "$S/api/v2/openapi.json" | head -c 80   # {"openapi":"3.1…     ← la API, prefijo intacto
curl -sI "$S/api/mods?page=1" | grep -i '^content-type'   # application/json
curl -s  "$S/api" -o /dev/null -w '%{http_code}\n'        # lo responde la API (404 JSON), no la web
curl -s  "$S/apis" -o /dev/null -w '%{http_code}\n'       # 404 HTML de la web (no es /api)
curl -sN --max-time 5 "$S/api/v2/stream" -o /dev/null -w '%{http_code}\n'   # 401 sin sesión (SSE llega a la API)
ops/runbooks/deploy/smoke.sh staging
```

Todo en verde → listo. Además, en el navegador: registrarse/iniciar sesión en beta y comprobar en
DevTools que la cookie `__Host-sotf_sid` se crea y que `/api/v2/me` responde 200.

## 2. Si falla

| Síntoma | Causa | Arreglo |
|---|---|---|
| `/api/v2/openapi.json` devuelve HTML de la web | Traefik prioriza la regla de la web | Plan B abajo |
| La API responde 404 a todo `/api/...` | *Strip Prefixes* activado | Desactivarlo y redesplegar |
| SSE se corta a los pocos segundos | Buffering del proxy | Comprobar que no hay middlewares extra en la app |

**Plan B (etiquetas Traefik personalizadas)**, app `sotf-v2-api` → *Advanced* → *Container Labels*
(deja el dominio de la API vacío y añade, cambiando `<host>`):

```
traefik.enable=true
traefik.http.routers.sotf-api-https.rule=Host(`<host>`) && PathPrefix(`/api`)
traefik.http.routers.sotf-api-https.entrypoints=https
traefik.http.routers.sotf-api-https.tls=true
traefik.http.routers.sotf-api-https.tls.certresolver=letsencrypt
traefik.http.routers.sotf-api-https.priority=1000
traefik.http.routers.sotf-api-https.service=sotf-api
traefik.http.services.sotf-api.loadbalancer.server.port=3001
```

**Último recurso** (PLAN §11.3): proxy en streaming de `/api/*` → `INTERNAL_API_URL` en el servidor
de Astro (`apps/web/src/lib/server/fetch.ts`). Requiere un cambio de código de la web (abrir un
ítem en el backlog); no se usa si los pasos anteriores funcionan.
