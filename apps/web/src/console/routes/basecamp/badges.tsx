/**
 * `/basecamp/badges` — progress towards the next badges, milestones and Creator tier (WP-80,
 * PLAN §7.5 «Insignias», §7.2).
 */
import { createFileRoute } from '@tanstack/react-router';
import { overviewQuery } from '../../features/basecamp/api.ts';
import { BadgesScreen } from '../../features/basecamp/BadgesScreen.tsx';
import { bt, loadBasecampMessages } from '../../features/basecamp/i18n.ts';

export const Route = createFileRoute('/basecamp/badges')({
  loader: async ({ context }) => {
    await Promise.all([loadBasecampMessages(), context.queryClient.ensureQueryData(overviewQuery)]);
  },
  staticData: { title: () => bt('basecamp_badges_title') },
  component: BadgesScreen,
});
