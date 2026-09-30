/**
 * `/settings/tokens` (T1-08). The screen lives in `features/settings/TokensScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { tokensQuery } from '../../features/settings/api.ts';
import { TokensScreen } from '../../features/settings/TokensScreen.tsx';

export const Route = createFileRoute('/settings/tokens')({
  staticData: { title: () => m.tokens_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(tokensQuery),
  component: TokensScreen,
});
