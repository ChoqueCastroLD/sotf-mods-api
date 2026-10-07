/**
 * Version of the rendering pipeline. Stored next to every rendered column (`renderVersion`,
 * PLAN §6.3; `0` means "never rendered by v2"). Bump it whenever the HTML produced for the same
 * input changes (new allowlist, new enhancer, dependency upgrade that alters output), so the
 * re-render job can find stale rows with `WHERE "renderVersion" < RENDER_VERSION`.
 */
export const RENDER_VERSION = 2;
