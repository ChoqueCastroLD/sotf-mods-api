/**
 * «Install app» (PWA). Chromium fires `beforeinstallprompt` when the site is installable: the
 * event is kept and every `[data-install-app-row]` of the «More» menu/sheet is revealed; tapping
 * `[data-install-app]` shows the browser's own prompt. iOS has no such event (Share → «Add to
 * Home Screen»), so Safari visitors who have not installed it get the short hint instead
 * (`[data-install-ios-hint]`). Also marks `<html data-standalone>` when running as the app.
 */

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function isStandalone(win: Window = window): boolean {
  return (
    win.matchMedia('(display-mode: standalone)').matches ||
    win.matchMedia('(display-mode: fullscreen)').matches ||
    (win.navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

export function isIosDevice(nav: Navigator = navigator): boolean {
  const ua = nav.userAgent;
  return /iPad|iPhone|iPod/.test(ua) || (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1);
}

export function initInstall(win: Window = window): () => void {
  const doc = win.document;
  const root = doc.documentElement;
  if (isStandalone(win)) {
    root.setAttribute('data-standalone', '');
    return () => {};
  }
  let deferred: BeforeInstallPromptEvent | null = null;
  const rows = () => doc.querySelectorAll<HTMLElement>('[data-install-app-row]');
  const setRows = (visible: boolean) => {
    for (const row of rows()) row.hidden = !visible;
  };

  const onPrompt = (event: Event) => {
    event.preventDefault();
    deferred = event as BeforeInstallPromptEvent;
    setRows(true);
  };
  const onInstalled = () => {
    deferred = null;
    setRows(false);
    root.setAttribute('data-standalone', '');
  };
  const onClick = (event: MouseEvent) => {
    if (!(event.target as Element | null)?.closest('[data-install-app]') || !deferred) return;
    const prompt = deferred;
    deferred = null;
    setRows(false);
    void prompt.prompt().catch(() => {});
  };
  win.addEventListener('beforeinstallprompt', onPrompt);
  win.addEventListener('appinstalled', onInstalled);
  doc.addEventListener('click', onClick);

  if (isIosDevice(win.navigator)) {
    for (const hint of doc.querySelectorAll<HTMLElement>('[data-install-ios-hint]')) hint.hidden = false;
  }
  return () => {
    win.removeEventListener('beforeinstallprompt', onPrompt);
    win.removeEventListener('appinstalled', onInstalled);
    doc.removeEventListener('click', onClick);
  };
}
