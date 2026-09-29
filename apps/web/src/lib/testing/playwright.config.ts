/**
 * Playwright project of the web platform (WP-22 acceptance: `pnpm e2e --grep @platform`).
 *
 * Runs against the **production build** (`pnpm --filter @sotf/web build` first): the route cache,
 * the CSP and the server entry only exist there. The server starts on a throwaway port with no
 * API behind it, which also proves every public page degrades gracefully.
 *
 * The repository-wide e2e project (`e2e/**`, WP-91) will absorb these specs; see
 * docs/backlog/WP-22.md.
 */
import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/test';

const APP_ROOT = fileURLToPath(new URL('../../..', import.meta.url));
const PORT = Number(process.env.SOTF_E2E_WEB_PORT ?? 47522);
const WEB_ORIGIN = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  outputDir: `${APP_ROOT}test-results`,
  use: {
    baseURL: WEB_ORIGIN,
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    command: 'node dist/server/entry.mjs',
    cwd: APP_ROOT,
    url: `${WEB_ORIGIN}/healthz`,
    reuseExistingServer: false,
    timeout: 30_000,
    env: {
      HOST: '127.0.0.1',
      PORT: String(PORT),
      NODE_ENV: 'production',
      SITE_ENV: 'development',
      PUBLIC_SITE_URL: WEB_ORIGIN,
      // Nothing listens here: pages must render without the API.
      INTERNAL_API_URL: 'http://127.0.0.1:9',
    },
  },
});
