# @sotf/config

Presets de herramientas compartidos por todo el workspace (PLAN §2.4 y §2.6). Propiedad de WP-00
(y de WP-90/WP-93 durante el endurecimiento).

| Fichero | Uso |
|---|---|
| `tsconfig/node.json` | api, worker, core, db y tooling (tipos de Node) |
| `tsconfig/react.json` | ui, emails y web (DOM + `jsx: react-jsx`, sin globals de Node) |
| `tsconfig/library.json` | contracts, markdown, i18n: sin globals de Node ni del DOM |
| `biome.json` | Reglas de lint y formato; el `biome.json` raíz lo extiende y define qué ficheros entran |
| `vitest/index.ts` | `defineUnitConfig()` y `defineIntConfig()` para un `vitest.config.ts` propio |
| `vitest/unit.ts` · `vitest/int.ts` | Configuraciones listas para usar desde los scripts del paquete |

Todos los tsconfig extienden `tsconfig/base.json` de este paquete (el `tsconfig.base.json` de la raíz
solo lo re-exporta). Así los presets no salen del paquete y Vitest (Vite/oxc) los resuelve también
a través del enlace `node_modules/@sotf/config` (`strict`,
`noUncheckedIndexedAccess`, `erasableSyntaxOnly`, `verbatimModuleSyntax`, `module: nodenext`,
imports `.ts` con `noEmit`).

```jsonc
// packages/<pkg>/tsconfig.json
{ "extends": "@sotf/config/tsconfig/node.json", "include": ["src", "test", "*.ts"] }
```

```jsonc
// packages/<pkg>/package.json
"test": "vitest run --config ../../packages/config/vitest/unit.ts",
"test:int": "vitest run --config ../../packages/config/vitest/int.ts"
```

- **Unitarios**: `**/*.test.ts(x)`, excluidos los `*.int.test.*`; `TZ=UTC`; mocks y variables de
  entorno se restauran entre tests.
- **Integración**: `**/*.int.test.ts(x)` (Testcontainers, SeaweedFS, Mailpit), *timeouts* largos
  y como mucho 2 *workers*, porque cada fichero puede levantar contenedores en un host compartido.
