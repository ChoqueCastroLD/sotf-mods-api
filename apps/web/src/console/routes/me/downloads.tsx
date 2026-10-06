/**
 * `/me/downloads` — my download history and available updates (WP-81, T0-17). The screen lives in
 * `features/me`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { downloadsQuery } from '../../features/me/api.ts';
import { DownloadsScreen } from '../../features/me/DownloadsScreen.tsx';

export const Route = createFileRoute('/me/downloads')({
  staticData: { title: () => m.me_downloads_title() },
  loader: ({ context }) => context.queryClient.ensureQueryData(downloadsQuery),
  component: DownloadsScreen,
});
