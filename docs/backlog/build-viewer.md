# Build viewer and official bundles (T1-06, T1-04)

Implemented end to end on `s/build-viewer`.

## Build viewer

- `build.geometry` (worker) parses the stored BuildShare blueprint into `BuildGeometry`
  (packed Float32 pieces, at most 20 000, sampled evenly above that) and a server-rendered top-down
  SVG (`packages/core/src/builds/geometry.ts`). `build.extract` enqueues it; builds that predate the
  feature are filled lazily: the first `GET /builds/:id/preview` answers `pending` and enqueues it.
- Build page: the SVG is inline (no JavaScript), with a text alternative. «Explore in 3D» imports
  three.js and `GET /builds/:id/geometry` only on click (`build-viewer.ts` -> `build-viewer-scene.ts`).
  Without WebGL the SVG stays and a message is announced.
- Dependency: `three` (exact 0.186.1) and `@types/three` in the pnpm catalog, used only by the lazy
  chunk. Promote to a shared package only if another app needs it.

## Official bundles

- A creator attaches one of their public/unlisted kits to one of their mods (Basecamp > mod > Bundles).
  The `bundle.build` job resolves the kit items, zips them in the folders RedLoader expects and uploads
  `bundles/{modId}/{bundleId}-{fingerprint}.zip`; `bundle.sweep` (every 15 min) rebuilds stale ones.
- Mod page sidebar shows «Official bundle» with «Download all» (`/api/v2/bundles/:id/download`).
- Migrations 2190 (`BuildGeometry`) and 2191 (`ModBundle`), both additive with `.down.sql`.
