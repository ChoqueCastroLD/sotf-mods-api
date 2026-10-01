# Auditoría de rutas y redirecciones (2026-10-01)

Objetivo: ninguna ruta pública responde 500; cada URL (v2 y heredada del sitio antiguo) devuelve la
página correcta, un 301 a su equivalente v2 o un 404/410 real. Disparador: el informe del dueño de
`https://sotf-mods.com/es/mods/jakethewolf/nightvisionplus` devolviendo 500.

## Método

Todo con peticiones **GET de solo lectura** (nunca POST/PUT/DELETE), ≤ 5 req/s, `User-Agent:
sotf-route-audit/1 (read-only)`. Las rutas de descarga (`/mods/:u/:s/download/:v`) se probaron solo con
mods/versiones inexistentes o una vez cada una (cuentan descargas); en el barrido local no llegan a
la API real (el proxy solo reenvía GET sin `X-Internal-Auth`).

Herramientas (en `tooling/route-audit/`):

| Fichero | Para qué |
|---|---|
| `collect.py` | baja el catálogo público (`/api/v2/mods`, creadores, categorías, etiquetas, API legacy) a `$SWEEP_DIR` |
| `collect-versions.py` | versiones de cada mod |
| `collect-legacy.py` | mods que la API legacy lista pero el catálogo v2 oculta (NSFW) |
| `sweep.py <base> <out.jsonl> <set> [req/s]` | barre las rutas; sets `static`, `mods`, `users`, `extra`, `legacy`, `nsfw`, `sitemap`, `all`; `RETRY=1` reintenta 0/500/503 tras 12 s; `DONE=<fichero>` salta rutas ya hechas |
| `summarize.py <out.jsonl…>` | histograma de estados y lista de respuestas inesperadas |
| `api-proxy.mjs` | proxy GET/HEAD de solo lectura, con caché y ≤ 3 req/s, entre un build **local** y `https://api.sotf-mods.com` |

Reproducción local: `node tooling/route-audit/api-proxy.mjs`, luego `INTERNAL_API_URL=http://127.0.0.1:47398
INTERNAL_SECRET=<cualquiera> node apps/web/dist/server/entry.mjs` y `sweep.py http://127.0.0.1:<puerto> …`.
(El proxy evita el 429 del límite de 300 req/min por IP; el build local lee los datos de producción
pero no escribe nada.)

Alcance del barrido:

- **Páginas estáticas** (≈ 60 rutas de `apps/web/src/pages`) × 13 locales (en sin prefijo, `/es`, `/de`,
  `/fr`, `/it`, `/nl`, `/pl`, `/pt`, `/ru`, `/sv`, `/tr`, `/zh`, `/ja`), más feeds, sitemaps, `robots.txt`,
  `llms*.txt`, `ads.txt`, `/.well-known/security.txt`, `/healthz`.
- **Datos**: los 226 mods/builds públicos (190 mods + 36 builds), sus 563 versiones, los 56 creadores,
  33 categorías y 40 etiquetas. Cada detalle en **en y es** (+ `.md`, `/versions`, `/reviews`,
  `/feed.xml`, `/versions/:v`, `compare`, `embed`, `badges`, el `.json`→oEmbed, el cruce `/mods`↔`/builds`),
  y **todas las URLs de los sitemaps en los 13 locales**.
- **URLs del sitio antiguo** (`docs/plan/research/01-compat-contract.md` §4): `/mods?…` con todos los
  parámetros heredados, `/profile/:u`, `/loader`, `/privacy`, `/upload`, `/upload-build`, `/login?registered`,
  `/user/*`, `/images/*`, `/static/*`, `/ads.txt`, enlaces rotos conocidos (§4.4: `codengine/upgradeableplayerstats`…),
  mods con `'`, `(`, `)`, `.`, `_`, `+` en el slug (crudos y con `%27`/`%28`), mayúsculas, barra final.
- **Entradas raras**: locales inexistentes/capitalizados (`/xx`, `/ES`, `/es-ES`, `/pt-br`), `//`, `%00`,
  `%E0%A4%A`, `..`, `?page=-1/abc/99999`, `?search=%00`, 404 de cada tipo de recurso.
- Mods no públicos: la API legacy solo lista los aprobados, así que los pendientes no se pueden enumerar;
  se probó el caso conocido (`jakethewolf/nightvisionplus`, id 273, `isApproved=false`, nombre «Don't use»,
  descripción vacía) en todas sus variantes.

## Resultados

Producción (código desplegado antes de esta rama), 6 107 peticiones:

| Estado | Peticiones |
|---|---|
| 200 | 4 498 |
| 301 | 1 289 |
| 404 | 266 (todas esperadas: mods/usuarios/rutas inexistentes, mods no aprobados, builds sin `/versions`, `.json` de builds) |
| 410 | 5 (tombstones: `/images/*`, `aedev/gyrocopter/download`) |
| 302 / 303 | 3 (`/k`, `/logout`, descarga de nightvisionplus a R2) |
| 400 / 405 | 8 (URI mal codificada, `%00`, `/oembed` sin `url`, GET a `/_internal/cache/invalidate`: respuestas correctas) |
| 5xx / 0 / 520 | 38: 35 **transitorias** (reintentadas después: 200), 1 persistente (badge de mod oculto, 503) y 2 de Cloudflare 520 (escape `%` truncado, ver «Pendiente») |

Local, build de esta rama, 6 079 rutas del conjunto `all` + todas las URLs de los sitemaps en los 13
locales + legacy + NSFW: ver «Barrido final» al final del documento.

### Qué fallaba

1. **`/es/mods/jakethewolf/nightvisionplus`**: en el momento de la comprobación ya devuelve **404 real**
   (el mod existe pero está sin aprobar: la API v2 pública lo oculta con 404). El 500 que vio el dueño
   venía de ráfagas en las que la API respondía 500/timeout mientras la máquina estaba saturada (carga
   media 10-40 por otros procesos); durante el barrido se reprodujeron ráfagas de 500 en páginas sanas
   (`/builds/reuploader/*`, `/mods/imaxel/updateschecker/versions/*`) que se recuperan solos.
   Arreglo de fondo (ya en `main`, commit `bab2cd87`): un 429/502/503/504 o error de red de la API se
   responde **503 + `Retry-After`** (los rastreadores reintentan y no indexan el error). Esta rama lo
   completa: el middleware rinde `/500` como 503 también cuando la excepción sale de la página, y los
   campos `translation.sources` opcionales ya no revientan (`?.`) en ModHeader, BuildHeader y las
   páginas de mod y build.
2. **`%00` en la URL** (`/profile/a%00b`, `/builds/a%00b/c`, `/kits/a%00b/c`, `?search=a%00b`) →
   Postgres rechaza el byte NUL → **500** (y 503 en `/search`). Ahora: la entrada del web responde **400**
   antes de enrutar, el hook de la API responde 422 y `resolvePath` responde 404 si el NUL llega
   (doble codificado). Test: `apps/api/src/modules/resolve/resolve.int.test.ts`.
3. **`/badges/mods/:u/:s/:kind.svg` de un mod oculto** (no aprobado) → **503** «Unavailable»; ahora 404
   (el resolvedor nombra el mod pero el detalle público lo oculta).
4. **Mods retirados** (tombstones, `/mods/aedev/gyrocopter`): la página respondía 404 mientras la API y la
   descarga dicen 410 (research/01 §4.4 pide 410). Ahora la página responde **410**.
5. **Prefijos de idioma tolerantes**: `/ES/mods`, `/es-ES/mods`, `/pt-BR/mods`, `/zh_CN/best/mods`,
   `/EN/mods`, `/en-US` daban 404; ahora **301** al prefijo canónico (`/es/mods`, `/pt/mods`, `/zh/best/mods`,
   `/mods`, `/`). Los prefijos que no son un idioma admitido (`/xx/mods`) siguen siendo 404.
6. **`/builds/:u/:s.json`** daba 404 (el `.json` de mods redirige a oEmbed): ahora también 301 a `/oembed`.
7. **`/sitemap.xml`** devolvía 503 entero si la API aún no conoce Jams (web desplegado antes que la API):
   `allJams()` ahora tolera el 404.

### Comprobado y correcto (sin cambios)

- Los 226 detalles de mod/build, sus `.md`, `/versions`, `/reviews`, `/feed.xml`, `/versions/:v` y
  `/versions/compare`, en en y es: 200 (o 301 correcto en el cruce `/mods`↔`/builds`).
- Slugs con `'`, `(`, `)`, `.`, `_`, `+`: 200 tanto crudos como con `%27`/`%28`; variantes en mayúsculas
  del usuario/slug y barra final: 301 al canónico (`RemoveMountainFog`→`removemountainfog`,
  `perishableshuffler`→`perishable-shuffler`, `codengine/upgradeableplayerstats`→`smokyace/…`,
  `anwender/helimod`→`eisbrecher18/helikopter-mod`).
- Rutas heredadas: `/loader`→`/install`, `/upload`→`/basecamp/new/mod`, `/upload-build`→`/basecamp/new/build`,
  `/user/*`, `/artifacts`, `/@handle`→`/profile/handle`, `/static/images/logo*`→logo nuevo,
  `/static/downloads/sotfmodsoneclick-setup1.0.0.exe`→`/install#oneclick`, `/images/*`→410, `/mods?…` heredado
  (`orderby`, `type`, `nsfw`, `showunapproved`, `category`, `search`, `page`) → 301 a su forma v2,
  `/profile/:u/`→301, `/privacy`, `/ads.txt`, `/login?registered|reset`, `/reset-password`: 200.
- Mods/usuarios/builds inexistentes: 404 real en todos los locales; `%2F`, `..`, `//` seguros.

## Pendiente / observaciones

- **`/profile/%A`, `/mods/a%` y similares (escape `%` truncado al final de la ruta)** devuelven
  **520 de Cloudflare** en producción (con `%ZZ` o `%E0%A4` completos devuelve 400 correcto). El mismo
  build local responde 400, así que el origen del problema está entre Cloudflare y el contenedor
  (proxy de Coolify/Traefik), no en el código del sitio. Sin impacto de SEO (URL inválida); el operador
  puede revisar una regla WAF/normalización si quiere un 400.
- **`/jams` y `/jams/:slug` dan 503 con la API actual** porque la API de producción aún no tiene los
  endpoints de Jams; es el estado de error diseñado (503 + reintento) y desaparece al desplegar API y web
  juntos (primero la API).
- **Descargas de mods no aprobados**: `/mods/jakethewolf/nightvisionplus/download/1.0.1` responde 302 a R2
  aunque la página sea 404 (comportamiento heredado del sitio antiguo: enlaces directos de descarga).
  Decisión de producto, no se tocó.
- `/oembed` sin `url` y `/_internal/cache/invalidate` por GET: 400 y 405, correctos.
- Las 5xx esporádicas bajo carga de la máquina (ráfagas de 500 de la API) no son un fallo de rutas;
  conviene vigilar el tamaño del servidor/BD cuando coinciden varios procesos pesados.
