/**
 * Data of `/settings/*` (WP-81 on the WP-30 and WP-43 backends).
 *
 *   ['me']                                  user, settings and privacy (the shell's `useMe`)
 *   ['settings', 'profile', handle]         my public profile (`GET /users/:handle`)
 *   ['settings', 'profile-mods', handle]    my published mods (pinned-mod picker)
 *   ['settings', 'sessions']                active sessions
 *   ['settings', 'notification-preferences'] the type × channel matrix
 *   ['settings', 'export', id]              a data export being prepared
 *
 * Notification preferences live outside `['notifications']` on purpose: the SSE `notification`
 * event refetches that prefix and must not reset a matrix being edited.
 */
import type { EmailFrequency, NotificationType } from '@sotf/contracts/notifications';
import { type QueryClient, queryOptions } from '@tanstack/react-query';
import type { Me } from '../../hooks/use-me.ts';
import { api } from '../../lib/api.ts';
import { queryKeys } from '../../lib/query-keys.ts';

export type { EmailFrequency, NotificationType };
export type Session = Awaited<ReturnType<typeof api.me.sessions>>['items'][number];
export type DataExport = Awaited<ReturnType<typeof api.me.getExport>>;
export type PublicProfile = Awaited<ReturnType<typeof api.catalog.getUser>>;
export type SelfProfile = Awaited<ReturnType<typeof api.me.updateProfile>>;
export type NotificationPreferenceDTO = Awaited<ReturnType<typeof api.notifications.preferences>>['items'][number];
type BodyOf<F extends (...args: never[]) => unknown> = NonNullable<NonNullable<Parameters<F>[0]>['body']>;
export type ProfileUpdate = BodyOf<typeof api.me.updateProfile>;
export type SettingsUpdate = BodyOf<typeof api.me.updateSettings>;
export type PrivacyUpdate = BodyOf<typeof api.me.updatePrivacy>;

export const settingsKeys = {
  profile: (handle: string) => ['settings', 'profile', handle] as const,
  profileMods: (handle: string) => ['settings', 'profile-mods', handle] as const,
  sessions: ['settings', 'sessions'] as const,
  preferences: ['settings', 'notification-preferences'] as const,
  export: (id: string) => ['settings', 'export', id] as const,
} as const;

export const profileQuery = (handle: string) =>
  queryOptions({
    queryKey: settingsKeys.profile(handle),
    // Owner read (`GET /me/profile`): fresh (not edge-cached) and with the bio's Markdown source.
    queryFn: ({ signal }) => api.me.getProfile({}, { signal }),
    staleTime: 60_000,
  });

export const profileModsQuery = (handle: string) =>
  queryOptions({
    queryKey: settingsKeys.profileMods(handle),
    queryFn: async ({ signal }) =>
      (await api.catalog.userMods({ params: { handle }, query: { pageSize: 48, sort: 'downloads' } }, { signal }))
        .items,
    staleTime: 5 * 60_000,
  });

export const sessionsQuery = queryOptions({
  queryKey: settingsKeys.sessions,
  queryFn: async ({ signal }) => (await api.me.sessions({}, { signal })).items,
  staleTime: 30_000,
});

export const preferencesQuery = queryOptions({
  queryKey: settingsKeys.preferences,
  queryFn: async ({ signal }) => (await api.notifications.preferences({}, { signal })).items,
  staleTime: 60_000,
});

export const exportQuery = (id: string) =>
  queryOptions({
    queryKey: settingsKeys.export(id),
    queryFn: ({ signal }) => api.me.getExport({ params: { id } }, { signal }),
    // Poll while the worker prepares the archive.
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      return status === 'queued' || status === 'running' ? 4000 : false;
    },
  });

export const settingsApi = {
  updateProfile: (body: ProfileUpdate) => api.me.updateProfile({ body }),
  updateSettings: (body: SettingsUpdate) => api.me.updateSettings({ body }),
  updatePrivacy: (body: PrivacyUpdate) => api.me.updatePrivacy({ body }),
  changeEmail: (newEmail: string, password: string) => api.me.changeEmail({ body: { newEmail, password } }),
  changePassword: (current: string, next: string, revokeOthers: boolean) =>
    api.me.changePassword({ body: { current, next, revokeOthers } }),
  resendVerification: () => api.auth.resendVerification({}),
  revokeSession: (id: string) => api.me.revokeSession({ params: { id } }),
  revokeOthers: () => api.me.revokeOtherSessions({}),
  updatePreferences: (items: { type: NotificationType; inApp: boolean; email: EmailFrequency }[]) =>
    api.notifications.updatePreferences({ body: { items } }),
  requestExport: () => api.me.requestExport({}),
  requestDeletion: (password: string, mode: 'archive_mods' | 'keep_mods_anonymous') =>
    api.me.requestDeletion({ body: { password, mode } }),
  cancelDeletion: () => api.me.cancelDeletion({}),
};

/** Replaces parts of the cached `/me` after a successful write. */
export function patchMe(queryClient: QueryClient, update: (me: Me) => Me): void {
  queryClient.setQueryData<Me>(queryKeys.me, (me) => (me ? update(me) : me));
}

/** Re-reads `/me` (email, deletion state…) from the server. */
export function refreshMe(queryClient: QueryClient): Promise<void> {
  return queryClient.invalidateQueries({ queryKey: queryKeys.me, exact: true });
}
