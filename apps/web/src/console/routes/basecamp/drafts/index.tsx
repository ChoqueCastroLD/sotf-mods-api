/**
 * `/basecamp/drafts` (WP-74): my open publishing drafts, to resume or delete.
 */
import { createFileRoute } from '@tanstack/react-router';
import { DraftsList } from '../../../features/upload/DraftsList.tsx';
import { loadUploadMessages, ut } from '../../../features/upload/i18n.ts';

export const Route = createFileRoute('/basecamp/drafts/')({
  loader: () => loadUploadMessages(),
  staticData: { title: () => ut('upload_drafts_title') },
  component: DraftsList,
});
