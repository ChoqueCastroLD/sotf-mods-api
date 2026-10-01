/**
 * FAQ accordion on phones: the items are server-rendered open (answer engines and no-JS readers
 * get every answer), and below `md` they fold up so the page stays short; tapping a question
 * opens it. The first item stays open as a hint. Tablets and desktops keep them all open.
 */
export function initFaq(doc: Document = document): void {
  const root = doc.querySelector<HTMLElement>('[data-faq]');
  const view = doc.defaultView;
  if (!root || !view?.matchMedia('(width < 48rem)').matches) return;
  const items = root.querySelectorAll<HTMLDetailsElement>('details');
  items.forEach((item, index) => {
    if (index > 0 && !(item.id && view.location.hash === `#${item.id}`)) item.open = false;
  });
}
