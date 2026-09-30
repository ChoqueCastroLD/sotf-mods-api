# ADR-0006: Forzar un nuevo inicio de sesión en el corte en lugar de canjear los tokens legacy

- **Estado**: Aceptada
- **Fecha**: 2026-09-30
- **Autor**: WP-A4 (decisión del plan maestro)
- **Plan**: §0.1 (10), §0.2 «Tokens legacy», §6.10, §9.1

## Contexto

La legacy autentica con un JWT guardado en `localStorage.token` y en una cookie `token`, con una
vida ≤ 2 días, y estuvo expuesta a XSS almacenado. La v2 usa sesiones opacas en una cookie
`__Host-` HttpOnly. research/02 proponía un canje silencioso cookie → sesión; research/01 y 05,
un re-login forzado.

## Opciones consideradas

1. **Canje silencioso**: sin fricción; exige validar tokens firmados con el secreto legacy, mantener
   ese secreto en la v2 y confiar en tokens que pudieron robarse por XSS.
2. **Re-login forzado** con un banner explicativo y borrado de los restos legacy.

## Decisión

Opción 2. En el corte todos inician sesión una vez con su contraseña de siempre (ADR-0005). El
cliente borra la cookie `token` y `localStorage.token` y muestra un banner de bienvenida a v2.

## Consecuencias

- La v2 no necesita el secreto de firma de la legacy, que se retira en T+30 (§9.4).
- Coste: un login por usuario activo, mitigado por el banner y por los tokens de corta vida.
- Si hay marcha atrás, los usuarios vuelven a iniciar sesión en la legacy con la misma contraseña.
