/**
 * `/dashboard/new/build` (WP-74, PLAN §7.5 «Nueva build»): BuildShare JSON (thumbnail and stats read
 * automatically) → details → media → review. `?draft=<id>` resumes a draft.
 */
import { createFileRoute } from '@tanstack/react-router';
import { loadUploadMessages, ut } from '../../../features/upload/i18n.ts';
import { WizardScreen } from '../../../features/upload/WizardScreen.tsx';
import { validateDraftSearch } from './-search.ts';

export const Route = createFileRoute('/dashboard/new/build')({
  loader: () => loadUploadMessages(),
  validateSearch: validateDraftSearch,
  staticData: { title: () => ut('upload_title_build') },
  component: NewBuildScreen,
});

function NewBuildScreen() {
  const { draft } = Route.useSearch();
  const navigate = Route.useNavigate();
  return (
    <WizardScreen
      mode="build"
      draftId={draft}
      onDraftCreated={(id) => void navigate({ search: { draft: id }, replace: true })}
      onDraftDone={() => void navigate({ search: {}, replace: true })}
    />
  );
}
