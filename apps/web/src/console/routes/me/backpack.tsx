/**
 * `/me/backpack` — followed mods with update and compatibility state (WP-81). The screen lives in
 * `features/me`; the «Day 1» checklist loads alongside without blocking it.
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute } from '@tanstack/react-router';
import { backpackQuery, onboardingQuery } from '../../features/me/api.ts';
import { BackpackScreen } from '../../features/me/BackpackScreen.tsx';

export const Route = createFileRoute('/me/backpack')({
  staticData: { title: () => m.me_backpack_title() },
  loader: ({ context }) => {
    void context.queryClient.prefetchQuery(onboardingQuery);
    return context.queryClient.ensureQueryData(backpackQuery);
  },
  component: BackpackScreen,
});
