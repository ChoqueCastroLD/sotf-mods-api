/**
 * Loader of the field-report island (tiny, part of the page script). Signed-in visitors only
 * (guests keep «Sign in to report» and download nothing). Loads when the «At a glance» panel is
 * near the viewport, or at once for `#field-report`.
 */

import { intData, loginHrefOf, siblingHref, whenNear } from '../comments/lib/mount-point.ts';
import type { MeSummary } from '../comments/lib/session.ts';

export async function bootFieldReport(root: ParentNode, session: Promise<MeSummary | null>): Promise<void> {
  const mount = root.querySelector<HTMLElement>('[data-island="field-report"]');
  if (!mount || mount.dataset.hydrated !== undefined) return;
  const modId = intData(mount, 'modId');
  if (!modId) return;
  const loginHref = loginHrefOf(mount, '[data-field-report-guest]');
  const summary = await session;
  if (!summary) return;
  if (location.hash !== '#field-report') await whenNear(mount);
  const { mountFieldReport } = await import('./mount.tsx');
  await mountFieldReport(mount, {
    modId,
    versionId: intData(mount, 'versionId'),
    gameBuildId: intData(mount, 'gameBuildId'),
    session: summary,
    verifyHref: siblingHref(loginHref, '/verify-email'),
  });
}
