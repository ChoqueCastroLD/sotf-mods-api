/**
 * `/ranger/admin` on phones: the admin screens as a grouped list (list → detail, like Settings).
 * Larger screens keep the sidebar and open the first screen instead (the route redirects them).
 */
import { type IconTone, ListGroup, ListLink } from '../../components/native-list.tsx';
import { useDocumentTitle } from '../../hooks/use-document-title.ts';
import { t } from '../../lib/messages.ts';
import { findArea } from '../../lib/navigation.ts';

const TONES: Readonly<Record<string, IconTone>> = {
  '/ranger/admin/game-builds': 'signal',
  '/ranger/admin/ecosystem': 'signal',
  '/ranger/admin/taxonomy': 'primary',
  '/ranger/admin/recategorize': 'primary',
  '/ranger/admin/announcements': 'warning',
  '/ranger/admin/settings': 'neutral',
  '/ranger/admin/integrations': 'success',
  '/ranger/admin/performance': 'success',
  '/ranger/admin/operations': 'danger',
};

export function AdminIndex() {
  const section = findArea('ranger').sections.find((candidate) => candidate.adminOnly);
  useDocumentTitle(t('console_area_admin'));
  return (
    <div className="grid max-w-3xl gap-6">
      <h1 className="sr-only">{t('console_area_admin')}</h1>
      <ListGroup title={t('console_area_admin')}>
        {section?.items.map((item) => (
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
