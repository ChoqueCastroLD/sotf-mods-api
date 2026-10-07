/**
 * `/moderation/users/$userId` — a user's moderation card (WP-82). The user is loaded before the
 * screen renders; an unknown id ends in «not found».
 */
import { m } from '@sotf/i18n/messages';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { userQuery } from '../../../features/ranger/api.ts';
import { RangerRouteError } from '../../../features/ranger/shared.tsx';
import { UserScreen } from '../../../features/ranger/UserScreen.tsx';

function userIdOf(raw: string): number {
  const id = Number(raw);
  if (!Number.isSafeInteger(id) || id <= 0) throw notFound();
  return id;
}

export const Route = createFileRoute('/moderation/users/$userId')({
  staticData: { title: () => m.ranger_users_title() },
  loader: ({ context, params }) => context.queryClient.ensureQueryData(userQuery(userIdOf(params.userId))),
  errorComponent: RangerRouteError,
  component: UserRoute,
});

function UserRoute() {
  const { userId } = Route.useParams();
  return <UserScreen userId={userIdOf(userId)} />;
}
