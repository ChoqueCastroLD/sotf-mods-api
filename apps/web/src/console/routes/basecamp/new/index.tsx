/**
 * `/basecamp/new` (WP-74): choose what to publish — a mod, a build, or a new version of a mod.
 */
import { createFileRoute } from '@tanstack/react-router';
import { loadUploadMessages, ut } from '../../../features/upload/i18n.ts';
import { NewChooser } from '../../../features/upload/NewChooser.tsx';

export const Route = createFileRoute('/basecamp/new/')({
  loader: () => loadUploadMessages(),
  staticData: { title: () => ut('upload_new_title') },
  component: NewChooser,
});
