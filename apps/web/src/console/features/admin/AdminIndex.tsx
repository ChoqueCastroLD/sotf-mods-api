/**
 * `/moderation/admin` on phones: the admin screens as a grouped list (list → detail, like Settings).
 * Larger screens keep the sidebar and open the first screen instead (the route redirects them).
 */
import { type IconTone, ListGroup, ListLink } from '../../components/native-list.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { useMe } from '../../hooks/use-me.ts';
import { t } from '../../lib/messages.ts';
import { findArea, isSiteOwner } from '../../lib/navigation.ts';

const TONES: Readonly<Record<string, IconTone>> = {
  '/moderation/admin/game-builds': 'signal',
  '/moderation/admin/ecosystem': 'signal',
  '/moderation/admin/taxonomy': 'primary',
  '/moderation/admin/recategorize': 'primary',
  '/moderation/admin/announcements': 'warning',
  '/moderation/admin/settings': 'neutral',
  '/moderation/admin/integrations': 'success',
  '/moderation/admin/performance': 'success',
  '/moderation/admin/operations': 'danger',
};

export function AdminIndex() {
  const me = useMe();
  const owner = isSiteOwner({ role: me.user.role, handle: me.user.handle });
  const section = findArea('ranger').sections.find((candidate) => candidate.adminOnly);
  useDocumentTitle(t('console_area_admin'));
  return (
    <div className="grid max-w-3xl gap-6">
      <h1 className="sr-only">{t('console_area_admin')}</h1>
      <ListGroup title={t('console_area_admin')}>
        {section?.items
          .filter((item) => owner || !item.ownerOnly)
          .map((item) => (
            <ListLink
              key={item.to}
              to={item.to}
              icon={item.icon}
              tone={TONES[item.to] ?? 'neutral'}
              title={item.label()}
            />
          ))}
      </ListGroup>
    </div>
  );
}
