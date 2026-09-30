/**
 * `/basecamp/mods/:modId/new-version` (WP-74, PLAN §7.5 «Nueva versión»): file → release → review,
 * with «Notify followers» on by default. The version must be greater than the previous one: the
 * wizard refuses a lower one before uploading. `?draft=<id>` resumes a draft.
 */
import { createFileRoute } from '@tanstack/react-router';
import { loadUploadMessages, ut } from '../../../../features/upload/i18n.ts';
import { WizardScreen } from '../../../../features/upload/WizardScreen.tsx';
import { validateDraftSearch } from '../../new/-search.ts';

export const Route = createFileRoute('/basecamp/mods/$modId/new-version')({
  loader: () => loadUploadMessages(),
  validateSearch: validateDraftSearch,
  staticData: { title: () => ut('upload_new_version_title') },
  component: NewVersionScreen,
});

function NewVersionScreen() {
  const { modId } = Route.useParams();
  const { draft } = Route.useSearch();
  const navigate = Route.useNavigate();
  const id = /^\d{1,10}$/.test(modId) ? Number(modId) : undefined;
  return (
    <WizardScreen
      mode="version"
      draftId={draft}
      {...(id !== undefined && id > 0 ? { modId: id } : {})}
      onDraftCreated={(created) => void navigate({ search: { draft: created }, replace: true })}
    />
  );
}
