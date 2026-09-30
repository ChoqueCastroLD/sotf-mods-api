/**
 * Data of the Mod Jams console screens: `/ranger/jams` (staff: every jam, the editor, phase
 * controls, entry moderation) and `/basecamp/jams` (creators: open jams and their history).
 *
 * Query keys:
 *
 *   ['jams', 'admin']           every jam (staff)
 *   ['jams', 'admin', id]       one jam for the editor
 *   ['jams', 'entries', id]     entries of a jam, any status
 *   ['jams', 'mine']            open jams and own participations
 */
import { queryOptions } from '@tanstack/react-query';
import { api } from '../../lib/api.ts';

type Out<F extends (...args: never[]) => Promise<unknown>> = Awaited<ReturnType<F>>;
type In<F extends (...args: never[]) => Promise<unknown>> = NonNullable<Parameters<F>[0]>;

export type AdminJam = Out<typeof api.jams.adminGet>;
export type AdminEntry = Out<typeof api.jams.adminEntries>['items'][number];
export type MyJams = Out<typeof api.jams.myJams>;
export type UpdateJamInput = NonNullable<In<typeof api.jams.adminUpdate>['body']>;

export const jamKeys = {
  all: ['jams'] as const,
  admin: ['jams', 'admin'] as const,
  one: (id: number) => ['jams', 'admin', id] as const,
  entries: (id: number) => ['jams', 'entries', id] as const,
  mine: ['jams', 'mine'] as const,
};

export const adminJamsQuery = queryOptions({
  queryKey: jamKeys.admin,
  queryFn: async ({ signal }) => (await api.jams.adminList({}, { signal })).items,
});

export const adminJamQuery = (id: number) =>
  queryOptions({
    queryKey: jamKeys.one(id),
    queryFn: ({ signal }) => api.jams.adminGet({ params: { id } }, { signal }),
  });

export const adminEntriesQuery = (id: number) =>
  queryOptions({
    queryKey: jamKeys.entries(id),
    queryFn: async ({ signal }) => (await api.jams.adminEntries({ params: { id } }, { signal })).items,
  });

export const myJamsQuery = queryOptions({
  queryKey: jamKeys.mine,
  queryFn: ({ signal }) => api.jams.myJams({}, { signal }),
});

export const jamsAdminApi = {
  create: (body: { slug: string; title: string }) => api.jams.adminCreate({ body }),
  update: (id: number, body: UpdateJamInput) => api.jams.adminUpdate({ params: { id }, body }),
  remove: (id: number) => api.jams.adminDelete({ params: { id } }),
  setPhase: (id: number, phase: AdminJam['phase'], reason?: string) =>
    api.jams.adminSetPhase({ params: { id }, body: { phase, ...(reason ? { reason } : {}) } }),
  resume: (id: number) => api.jams.adminResume({ params: { id } }),
  publishResults: (id: number) => api.jams.adminPublishResults({ params: { id } }),
  moderateEntry: (id: number, entryId: number, status: 'active' | 'hidden' | 'disqualified', reason?: string) =>
    api.jams.adminModerateEntry({ params: { id, entryId }, body: { status, ...(reason ? { reason } : {}) } }),
};
