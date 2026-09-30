/**
 * `/settings/profile` (WP-81). The screen lives in `features/settings/ProfileScreen.tsx`.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { profileQuery } from '../../features/settings/api.ts';
import { ProfileScreen } from '../../features/settings/ProfileScreen.tsx';
import { meQuery } from '../../hooks/use-me.ts';

export const Route = createFileRoute('/settings/profile')({
  staticData: { title: () => m.settings_profile_title() },
  loader: async ({ context }) => {
    const me = await context.queryClient.ensureQueryData(meQuery);
    return context.queryClient.ensureQueryData(profileQuery(me.user.handle));
  },
  component: ProfileScreen,
});
