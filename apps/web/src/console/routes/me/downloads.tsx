/**
 * `/me/downloads` — my download history and available updates (WP-81, T0-17). The screen lives in
 * `features/me`; pending «Did it work?» prompts load alongside without blocking it.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { downloadsQuery, promptsQuery } from '../../features/me/api.ts';
import { DownloadsScreen } from '../../features/me/DownloadsScreen.tsx';

export const Route = createFileRoute('/me/downloads')({
  staticData: { title: () => m.me_downloads_title() },
  loader: ({ context }) => {
    void context.queryClient.prefetchQuery(promptsQuery);
    return context.queryClient.ensureQueryData(downloadsQuery);
  },
  component: DownloadsScreen,
});
