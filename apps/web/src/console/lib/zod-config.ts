/**
 * Zod settings of the console, imported (for its side effect) by every console module that parses
 * with a Zod schema, before the first parse. zod 4 probes `new Function` on the first object
 * parse; under the CSP (no 'unsafe-eval') that probe fails safely but reports a violation, so the
 * JIT stays off (docs/backlog/WP-93.md). The shell itself never parses, so Zod stays out of it.
 */
import { config } from 'zod/v4/core';

config({ jitless: true });
