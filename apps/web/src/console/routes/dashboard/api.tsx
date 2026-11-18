/**
 * `/dashboard/api`: API keys, quick start and the AI prompt (`features/api/ApiScreen.tsx`).
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { ApiScreen } from '../../features/api/ApiScreen.tsx';
import { tokensQuery } from '../../features/settings/api.ts';

export const Route = createFileRoute('/dashboard/api')({
  staticData: { title: () => m.api_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(tokensQuery),
  component: ApiScreen,
});
