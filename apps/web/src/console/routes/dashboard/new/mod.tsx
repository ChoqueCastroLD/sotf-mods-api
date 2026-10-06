/**
 * `/dashboard/new/mod` (WP-74, PLAN §7.5): the «New mod» wizard — file, details, compatibility,
 * media, release and review. `?draft=<id>` resumes a draft.
 */
import { createFileRoute } from '@tanstack/react-router';
import { loadUploadMessages, ut } from '../../../features/upload/i18n.ts';
import { WizardScreen } from '../../../features/upload/WizardScreen.tsx';
import { validateDraftSearch } from './-search.ts';

export const Route = createFileRoute('/dashboard/new/mod')({
  loader: () => loadUploadMessages(),
  validateSearch: validateDraftSearch,
  staticData: { title: () => ut('upload_title_mod') },
  component: NewModScreen,
});

function NewModScreen() {
  const { draft } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <WizardScreen
      mode="mod"
      draftId={draft}
      onDraftCreated={(id) => void navigate({ search: { draft: id }, replace: true })}
    />
  );
}
