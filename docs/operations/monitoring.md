# Vigilancia e incidentes

PLAN §10.3 y §6.13 E (hypercare). Todo lo de este documento es de **solo lectura**.

## 1. Señales disponibles

| Señal | Dónde | Qué dice |
|---|---|---|
| `GET /healthz` (web, api, worker) | Coolify la usa como health check | El proceso vive; en web y api incluye el sha desplegado |
| `GET /readyz` (api, worker) | `curl` desde la terminal del contenedor | Base de datos, pg-boss y LISTEN; `503` = degradado |
| Logs JSON (pino) | Coolify → app → *Logs* | Cada petición con `reqId` (= `cf-ray`), ruta, estado y duración; los errores con su pila |
| Sentry (si `SENTRY_DSN`) | sentry.io | Errores de api, worker, SSR y consola, sin datos personales |
| Cola de pg-boss | SQL de solo lectura (§2) | Trabajos atascados, reintentos, `dead-letter` |
| Invariantes de datos | `node src/cli/invariants.ts` en `sotf-v2-tools` | Las 10 invariantes de PLAN §6.11 |
| Rendimiento real (RUM) | *Ranger Station → Admin → Performance* | p75 de CWV por plantilla y país |
| Gasto de KelvinSeek | *Ranger Station → Admin → KelvinSeek* | Uso frente al presupuesto diario |
| Cloudflare Analytics | Panel de la zona | Tráfico, ratio de caché, errores del origen, tráfico por host |

**Monitor externo (recomendado, lo configura el dueño)**: UptimeRobot o Better Stack (plan
gratuito) cada 1–5 min sobre `https://sotf-mods.com/healthz`, una página de mod,
`https://api.sotf-mods.com/api/mods?page=1` y un **HEAD** de una descarga (HEAD no cuenta
descargas). Alerta por email al admin.

Objetivos (SLO, §10.3): disponibilidad mensual ≥ 99,9 % en descargas y API legacy; p95 de origen
< 150 ms en SSR sin caché y < 60 ms en descargas; tasa de error < 0,5 %.

## 2. Consultas útiles (solo lectura)

Desde un contenedor efímero en la red de Coolify con el rol `sotf_readonly` (si lo creaste con
`roles.sql`) o `sotf_v2_app`:

```sql
-- Trabajos en dead-letter (debería ser 0) y fallidos de las últimas 24 h por cola
SELECT name, state, count(*) FROM pgboss.job
 WHERE name = 'dead-letter' OR (state = 'failed' AND created_on > now() - interval '24 hours')
 GROUP BY 1, 2 ORDER BY 3 DESC;

-- Colas con trabajo acumulado (creados o en reintento)
SELECT name, count(*) FROM pgboss.job WHERE state IN ('created', 'retry') GROUP BY 1 ORDER BY 2 DESC;

-- Descargas registradas en la última hora (el ritmo normal es visible en SiteDownloadDaily)
SELECT count(*) FROM "ModDownload" WHERE "createdAt" > now() - interval '1 hour';
```

## 3. Comprobación diaria (hypercare, T0 → T+30)

- [ ] Las apps de producción están *Running (healthy)*; `sotf-v2-tools` parada.
- [ ] Sentry (o los logs de api/web): errores nuevos o repetidos.
- [ ] 404 y 410 más frecuentes en los logs de la web: si una URL legacy popular da 404, abre una
      tarea para añadirla a las redirecciones (tabla `Redirect`, PLAN §4.6).
- [ ] Rutas legacy (`/api/mods…`, descargas): User-Agent y Origin inesperados = clientes que
      podrían romperse.
- [ ] RUM p75 dentro de «Good» (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1).
- [ ] Cola de pg-boss sin `dead-letter` ni acumulación (§2).
- [ ] `invariants.ts` en verde.
- [ ] Cloudflare: ratio de caché del HTML y ausencia de picos de 5xx del origen.

Después de T+30, la misma lista una vez por semana.

## 4. Ante un incidente

1. **Acota**: ¿qué falla (web, api, descargas, API legacy, emails, subidas) y desde cuándo? Mira
   el monitor externo, Cloudflare (¿5xx del origen?) y el estado de las apps en Coolify.
2. **¿Coincide con un despliegue?** Si sí → [rollback.md](rollback.md) R0 (release anterior).
3. **Logs**: busca el `requestId` que muestra la página de error o la respuesta problem+json
   (`X-Request-Id`); con él encuentras la línea exacta en los logs de la api.
4. **Base de datos**: `/readyz` de la api en 503 → la base no responde o el pool está agotado.
   Mira *Logs* de `sotf-mods-db`. Errores en escrituras sobre tablas con triggers v2 → R3.
5. **Descargas**: son un 302 a `r2.sotf-mods.com`; si R2 falla, no depende de nosotros
   (Cloudflare status). Si falla la resolución, las rutas legacy de RedManager también fallan:
   prioridad máxima.
6. **Emails**: la cola `email.*` y el panel de Resend; en staging solo se envía a la allowlist.
7. **Carga o abuso**: `@fastify/under-pressure` responde 503 bajo presión; en Cloudflare puedes
   endurecer la regla WAF `auth-burst` o activar *Under Attack* temporalmente (no en `api.` ni en
   las rutas de descarga: RedManager no ejecuta JS).
8. **Comunica** en Discord si el impacto es visible, y deja constancia del incidente (qué pasó,
   causa, arreglo) en una entrada de backlog para que se convierta en test o alerta.
