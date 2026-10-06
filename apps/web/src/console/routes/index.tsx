/**
 * Console index route (WP-34).
 *
 * The console has no page at `/` (that is the public landing, served by Astro); the SPA only runs
 * under `/dashboard`, `/moderation`, `/settings`, `/notifications` and `/me`. If the router ever resolves `/`
 * client-side, it leaves the SPA with a full navigation to the landing.
 */
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: LeaveConsole,
});

function LeaveConsole() {
  useEffect(() => {
    window.location.assign('/');
  }, []);
  return null;
}
