/**
 * Lazy chunk of the Mod Jams island: React + the hero actions, plus one vote panel per entry
 * slot rendered by the page (`[data-jam-vote-slot]`), all sharing one store.
 */
import { createRoot } from 'react-dom/client';
import { loadExtraMessages, loadSocialMessages } from '../comments/lib/messages.ts';
import { JamActions } from './JamActions.tsx';
import { createJamStore, type JamCategoryInfo, type JamState } from './store.ts';
import { VotePanel } from './VotePanel.tsx';

export interface JamPageProps {
  slug: string;
  phase: string;
  categories: JamCategoryInfo[];
  state: JamState;
  session: { emailVerified: boolean };
  maxEntries: number;
  verifyHref: string;
}

export async function mountJamPage(element: HTMLElement, root: ParentNode, props: JamPageProps): Promise<void> {
  if (element.dataset.hydrated !== undefined) return;
  element.dataset.hydrated = '';
  if (!(await loadSocialMessages()) || !(await loadExtraMessages('jams'))) {
    delete element.dataset.hydrated;
    return;
  }
  const store = createJamStore(props.slug, props.phase, props.categories, props.state);
  element.replaceChildren();
  createRoot(element).render(
    <JamActions
      store={store}
      root={root}
      verifyHref={props.verifyHref}
      maxEntries={props.maxEntries}
      emailVerified={props.session.emailVerified}
    />,
  );
  for (const slot of Array.from(root.querySelectorAll<HTMLElement>('[data-jam-vote-slot]'))) {
    const entryId = Number(slot.dataset.entryId);
    if (!Number.isInteger(entryId)) continue;
    createRoot(slot).render(<VotePanel store={store} entryId={entryId} verifyHref={props.verifyHref} />);
  }
}
