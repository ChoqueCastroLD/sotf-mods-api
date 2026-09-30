/**
 * Error boundary of every console route (`defaultErrorComponent`) and the React boundary around
 * the whole app. Decides what an error means for the user:
 *
 * - stale chunk after a deploy → reload once, then «A new version is out» with a Reload button;
 * - 401 → sign in again (`/login?next=`);
 * - 403 / guard refusal → «Rangers only»; 404 from the API → «Off the map»;
 * - anything else → «This screen didn't load» with Try again and the request reference.
 */
import { isApiError } from '@sotf/contracts/client';
import { type ErrorComponentProps, useRouter } from '@tanstack/react-router';
import { Component, type ErrorInfo, type ReactNode, useEffect, useState } from 'react';
import { redirectToLogin } from '../lib/auth.ts';
import { reloadForNewVersion } from '../lib/chunk-reload.ts';
import { errorReference, isChunkLoadError, isForbidden, isUnauthenticated } from '../lib/errors.ts';
import { t } from '../lib/messages.ts';
import { BootScreen } from './PendingScreen.tsx';
import { ErrorScreen, Forbidden, NotFound, UpdateAvailable } from './states.tsx';

type Recovery = 'reload' | 'update' | 'login' | 'forbidden' | 'not-found' | 'error';

export function classifyError(error: unknown): Recovery {
  if (isChunkLoadError(error)) return 'reload';
  if (isUnauthenticated(error)) return 'login';
  if (isForbidden(error)) return 'forbidden';
  if (isApiError(error) && error.status === 404) return 'not-found';
  return 'error';
}

function useRecovery(error: unknown): Recovery {
  const initial = classifyError(error);
  const [recovery, setRecovery] = useState<Recovery>(initial);
  useEffect(() => {
    const kind = classifyError(error);
    setRecovery(kind);
    if (kind === 'reload' && !reloadForNewVersion()) setRecovery('update');
    else if (kind === 'login') redirectToLogin();
    else if (kind === 'error') console.error('[console]', error);
  }, [error]);
  return recovery;
}

function ErrorView({ error, onRetry }: { error: unknown; onRetry: () => void }) {
  const recovery = useRecovery(error);
  switch (recovery) {
    case 'reload':
      return <BootScreen />;
    case 'update':
      return <UpdateAvailable />;
    case 'login':
      return <BootScreen label={t('console_redirecting')} />;
    case 'forbidden':
      return <Forbidden />;
    case 'not-found':
      return <NotFound />;
    default: {
      const reference = errorReference(error);
      return <ErrorScreen onRetry={onRetry} {...(reference ? { reference } : {})} />;
    }
  }
}

export function RouteError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <ErrorView
      error={error}
      onRetry={() => {
        reset();
        void router.invalidate();
      }}
    />
  );
}

interface BoundaryState {
  error: unknown;
}

/** Last-resort boundary around the providers (errors outside any route). */
export class ConsoleErrorBoundary extends Component<{ children?: ReactNode }, BoundaryState> {
  override state: BoundaryState = { error: null };

  static getDerivedStateFromError(error: unknown): BoundaryState {
    return { error };
  }

  override componentDidCatch(error: unknown, info: ErrorInfo): void {
    if (classifyError(error) === 'error') console.error('[console]', error, info.componentStack);
  }

  override render(): ReactNode {
    if (this.state.error === null) return this.props.children;
    return (
      <main className="flex min-h-dvh flex-1 items-center justify-center p-4">
        <ErrorView error={this.state.error} onRetry={() => this.setState({ error: null })} />
      </main>
    );
  }
}
