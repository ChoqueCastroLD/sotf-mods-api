# ADR-0005: Mantener argon2id con los parámetros de Bun (m=64 MiB, t=2, p=1) y un semáforo de 2

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (10), §0.2 «Parámetros argon2», §6.10, §9.1

## Contexto

Las contraseñas legacy son hashes argon2id generados por `Bun.password` con m=65536 KiB, t=2 y
p=1 (y algún bcrypt `$2b$`). La v2 debe verificarlos sin pedir a nadie que cambie su contraseña y,
durante la ventana de marcha atrás, la legacy debe poder verificar los hashes que cree la v2.
research/02 proponía conservar los parámetros; research/04, bajar a 19 MiB (mínimo OWASP) para
ahorrar RAM en el contenedor de la API (512 MB).

## Opciones consideradas

1. **19 MiB para los hashes nuevos**: menos memoria por login; obliga a convivir con dos
   parámetros y a decidir si se rehashea; más débil que lo que ya hay.
2. **Los mismos parámetros que Bun (64 MiB, t=2, p=1)**, acotando la concurrencia.

## Decisión

Opción 2: argon2id m=65536, t=2, p=1 con `@node-rs/argon2`, y un semáforo (`ARGON2_CONCURRENCY`,
2 por defecto) que limita los hashes simultáneos para acotar la RAM a ~128 MiB. bcrypt `$2b$` se
verifica y se rehashea a argon2id en el siguiente login correcto.

## Consecuencias

- Nadie necesita rehash; la legacy verifica igual si se vuelve atrás (ADR-0016).
- El pico de memoria está acotado por el semáforo; ráfagas de login esperan en cola (el WAF de
  Cloudflare limita `/api/v2/auth/*`).
- Se verifica con los tests de `@sotf/core/auth` sobre hashes reales de Bun del seed.
