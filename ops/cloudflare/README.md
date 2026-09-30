# Runbook · Cloudflare (zona `sotf-mods.com`)

Checklist para el dueño (lo aplica **U**, PLAN §11.5; corte §6.13 A5, C3 y D5). Cada paso indica
la ruta del panel, el valor exacto y cómo comprobarlo. Las reglas HTML son inocuas para la
legacy (no emite cabeceras de caché), así que se pueden crear en C3 antes del corte.

## 1. DNS (DNS → Records)

- [ ] `sotf-mods.com`, `www`, `api`, `beta` y `next`: registros A/AAAA/CNAME al servidor de
      Coolify, **Proxied** (nube naranja).
- [ ] `r2`: *Custom domain* del bucket R2 `sotf-mods` (R2 → sotf-mods → Settings → Custom Domains).
- [ ] `files`: se **borra en T+7** si Analytics confirma 0 tráfico (§2.8).

## 2. SSL/TLS

- [ ] SSL/TLS → Overview → *Full (strict)*.
- [ ] Edge Certificates → *Minimum TLS Version* **TLS 1.2** · *TLS 1.3* **On** · *Always Use HTTPS*
      **On** · *0-RTT* **Off**.
- [ ] Edge Certificates → *HSTS* → Enable: `max-age` **6 months**, *includeSubDomains* **Off**,
      *Preload* **Off**, *No-Sniff* **On**.
- [ ] Network → *HTTP/3 (with QUIC)* **On**.

## 3. Speed y optimizaciones

- [ ] Speed → Settings: *Early Hints* **On**; *Rocket Loader* **Off**; *Auto Minify* (si aparece)
      todo **Off**.
- [ ] Scrape Shield → *Email Address Obfuscation* **Off**.
- [ ] Zaraz: **desactivado** (no configurado).
- [ ] Caching → Tiered Cache → *Smart Tiered Caching Topology* **On**.
- [ ] Caching → Configuration → *Crawler Hints* **Off**.

## 4. Cache Rules (Caching → Cache Rules), **en este orden**

La última regla que coincide gana cada ajuste. Usa *Edit expression* y pega el texto exacto.

### 4.1 `sotf-cache-origin`

```
(http.host in {"sotf-mods.com" "api.sotf-mods.com" "beta.sotf-mods.com"})
```

- Cache eligibility: **Eligible for cache**.
- Edge TTL: **Use cache-control header if present, bypass cache if not**.
- Browser TTL: **Respect origin TTL**.
- Cache key: por defecto (incluye query string).
- Serve stale content while revalidating: **On**.

### 4.2 `r2-immutable` (**crear desactivada; activar en D5**, tras B17)

```
(http.host eq "r2.sotf-mods.com")
```

- Eligible for cache · Edge TTL **Ignore cache-control header and use this TTL: 1 year** ·
  Browser TTL **Override origin: 1 year**.

### 4.3 `sotf-bypass`

```
(http.request.uri.path wildcard "/mods/*/*/download/*") or (http.request.uri.path wildcard "/api/mods/*/download/*") or (http.request.uri.path wildcard "/api/mods/slug/*/*/download/*") or starts_with(http.request.uri.path, "/api/v2/auth") or starts_with(http.request.uri.path, "/api/v2/me") or starts_with(http.request.uri.path, "/api/v2/stream") or starts_with(http.request.uri.path, "/api/v2/e") or starts_with(http.request.uri.path, "/api/v2/uploads") or starts_with(http.request.uri.path, "/api/kelvinseek") or starts_with(http.request.uri.path, "/_internal")
```

- Cache eligibility: **Bypass cache**.
- `wildcard` existe en todos los planes; `matches` (regex) no se usa (exige Business). Las dos
  rutas legacy de descarga `/api/mods/…/download/…` se añaden a las del §11.5 (backlog WP-31).

## 5. Configuration Rule (Rules → Configuration Rules) `sotf-tools-no-bic`

```
(http.host eq "api.sotf-mods.com") or (http.request.uri.path wildcard "/mods/*/*/download/*") or starts_with(http.request.uri.path, "/api/")
```

- *Browser Integrity Check*: **Off** (RedManager, UpdatesChecker y los mods no mandan User-Agent
  ni ejecutan JS).
- [ ] Security → Bots → *Bot Fight Mode* **Off** en toda la zona.

## 6. Redirect Rule (Rules → Redirect Rules) `www-to-apex`

- Custom filter: `(http.host eq "www.sotf-mods.com")`
- Type **Dynamic** · Expression `concat("https://sotf-mods.com", http.request.uri.path)` ·
  Status **301** · *Preserve query string* **On**.

## 7. WAF (Security → WAF → Rate limiting rules) `auth-burst`

```
(starts_with(http.request.uri.path, "/api/v2/auth/"))
```

- Characteristics: **IP** · más de **20** peticiones en **10 s** · Action **Block** · duración
  **10 s**. (Es la única regla de rate limiting del plan Free.)

## 8. Bots y AI

- [ ] AI Crawl Control → *Managed robots.txt* **Off** (lo sirve la web, §8.7).
- [ ] Permitir los crawlers de búsqueda y de recuperación (Googlebot, Bingbot, OAI-SearchBot,
      ChatGPT-User, PerplexityBot, Claude-User…) y **bloquear** los de entrenamiento (GPTBot,
      ClaudeBot, CCBot, Google-Extended, Bytespider, Applebot-Extended…).

## 9. Turnstile

- [ ] Turnstile → Add widget → nombre `sotf-mods`, dominios `sotf-mods.com`, `beta.sotf-mods.com`
      (y `next.sotf-mods.com`), modo **Managed**. La *site key* va a `PUBLIC_TURNSTILE_SITE_KEY`
      (web) y la *secret* a `TURNSTILE_SECRET_KEY` (api) de producción. Staging puede usar las
      claves de prueba.

## 10. Token de purga

- [ ] My Profile → API Tokens → Create → *Custom token* `sotf-v2-cache-purge`: permiso
      **Zone → Cache Purge → Purge**, recurso **Include → Specific zone → sotf-mods.com**. Nada más.
- [ ] Copia el token a `CF_API_TOKEN` y el *Zone ID* (Overview) a `CF_ZONE_ID` del worker.
- El worker agrupa purgas con *debounce* de 20 s; si Cloudflare responde 429 reintenta con
  backoff y el TTL del borde (≤ 15 min) es la red de seguridad.

## 11. R2 (§11.6)

- [ ] Buckets `sotf-mods-private` y `sotf-mods-staging` (el de backups **no** se crea: §14.5).
- [ ] CORS de `sotf-mods-private` y `sotf-mods-staging`:

  ```json
  [{ "AllowedOrigins": ["https://sotf-mods.com", "https://beta.sotf-mods.com", "https://next.sotf-mods.com"],
     "AllowedMethods": ["PUT"], "AllowedHeaders": ["content-type", "content-length"],
     "ExposeHeaders": ["ETag"], "MaxAgeSeconds": 3600 }]
  ```

- [ ] Lifecycle: `incoming/` borrar a 1 día; *multipart* incompleto abortar a 1 día; `exports/`
      borrar a 2 días.
- [ ] Token R2 *Object Read & Write* limitado a `sotf-mods`, `sotf-mods-private` y
      `sotf-mods-staging`.

## 12. Comprobación (solo GET/HEAD)

```bash
ops/runbooks/deploy/smoke.sh production            # tras el corte
curl -sI https://sotf-mods.com/ | grep -i '^cf-cache-status'   # HIT/MISS/EXPIRED, no DYNAMIC
curl -sI "https://www.sotf-mods.com/mods?page=2" | grep -i '^location'   # https://sotf-mods.com/mods?page=2
```

En D5: *Caching → Configuration → Purge Everything* y activar `r2-immutable`; después
`SMOKE_EXPECT_IMMUTABLE=1 ops/runbooks/deploy/smoke-r2.sh https://sotf-mods.com`.
