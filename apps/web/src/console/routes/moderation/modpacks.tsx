/** `/moderation/modpacks` — modpacks waiting for approval. Screen: `features/modpacks/ModpackReviewScreen.tsx`. */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { ModpackReviewScreen } from '../../features/modpacks/ModpackReviewScreen.tsx';
import { RangerRouteError } from '../../features/ranger/shared.tsx';

export const Route = createFileRoute('/moderation/modpacks')({
  staticData: { title: () => m.modpacks_review_title() },
  errorComponent: RangerRouteError,
  component: ModpackReviewScreen,
});
