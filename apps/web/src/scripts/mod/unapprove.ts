/**
 * «Unapprove» of the mod page: the HTML is the same for everyone, so the button is revealed here for
 * moderators and admins (the API checks the role again). The mod goes back to «Pending approval».
 */
import { toast } from '../../lib/client/toast.ts';
import type { MeSummary } from '../account-hint.ts';
import { apiCall } from './api.ts';

export function initUnapprove(root: HTMLElement, session: Promise<MeSummary | null>, doc: Document = document): void {
  void session.then((summary) => {
    if (summary?.role !== 'moderator' && summary?.role !== 'admin') return;
    for (const node of root.querySelectorAll<HTMLElement>('[data-staff-only]')) node.hidden = false;
    const confirm = doc.querySelector<HTMLButtonElement>('[data-unapprove-confirm]');
    if (!confirm) return;
    confirm.addEventListener('click', async () => {
      confirm.disabled = true;
      const result = await apiCall('POST', `/api/v2/ranger/mods/${confirm.dataset.modId}/decision`, {
        action: 'unapprove',
      });
      // 409: the page was stale and the mod is already pending, which is what was asked for.
      if (!result.ok && result.reason !== 'conflict') {
        confirm.disabled = false;
        toast.error(confirm.dataset.failed ?? '');
        return;
      }
      toast.success(confirm.dataset.done ?? '');
      confirm.closest('dialog')?.close();
      for (const node of root.querySelectorAll<HTMLElement>('[data-staff-only]')) node.hidden = true;
      // The page cache is invalidated by a job a moment later: reload after it (the banner appears).
      doc.defaultView?.setTimeout(() => doc.defaultView?.location.reload(), 3000);
    });
  });
}
