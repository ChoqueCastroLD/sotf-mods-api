/** Small pieces shared by the modpack screens. */
import { m } from '@sotf/i18n/messages';
import { Badge } from '@sotf/ui/badge';

export function ModpackStatusBadge({ status }: { status: 'pending' | 'published' }) {
  return status === 'published' ? (
    <Badge variant="success" size="sm">
      {m.modpacks_status_published()}
    </Badge>
  ) : (
    <Badge variant="warning" size="sm">
      {m.modpacks_status_pending()}
    </Badge>
  );
}
