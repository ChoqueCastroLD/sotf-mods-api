import { QueryClient } from '@tanstack/react-query';
import { describe, expect, it } from 'vitest';
import {
  type QueueItem,
  type QueueItemDetail,
  type QueuePage,
  type ReviewMetrics,
  rangerKeys,
  storeQueueItem,
  templatesFromApi,
} from './api.ts';
import { metricTiles } from './QueueScreen.tsx';

describe('templatesFromApi', () => {
  const items = [{ key: 'spam', action: 'reject' as const, messages: { en: 'Spam.', es: 'Spam.' } }];

  it('keeps the catalog translations of the built-in list', () => {
    expect(templatesFromApi({ source: 'built_in', items })).toEqual([
      { key: 'spam', action: 'reject', messages: null },
    ]);
  });

  it('uses the wording saved by an admin', () => {
    expect(templatesFromApi({ source: 'setting', items })).toEqual([
      { key: 'spam', action: 'reject', messages: { en: 'Spam.', es: 'Spam.' } },
    ]);
  });
});

describe('storeQueueItem', () => {
  it('updates the open item and its row in the cached lane', () => {
    const client = new QueryClient();
    const row = {
      id: 'versions:version:4',
      lane: 'versions',
      assignee: null,
      escalation: null,
    } as unknown as QueueItem;
    const other = { ...row, id: 'versions:version:5' };
    client.setQueryData(rangerKeys.item(row.id), { item: row, allowedActions: [] } as unknown as QueueItemDetail);
    client.setQueryData(rangerKeys.queue('versions'), {
      pages: [{ items: [row, other], counts: {}, nextCursor: null } as unknown as QueuePage],
      pageParams: [null],
    });
    const updated = { ...row, assignee: { id: 7, handle: 'ana', displayName: 'Ana' } } as unknown as QueueItem;
    storeQueueItem(client, updated);
    expect(client.getQueryData<QueueItemDetail>(rangerKeys.item(row.id))?.item).toEqual(updated);
    const lane = client.getQueryData<{ pages: QueuePage[] }>(rangerKeys.queue('versions'));
    expect(lane?.pages[0]?.items).toEqual([updated, other]);
  });
});

describe('metricTiles', () => {
  const stats = (reviewed: number, withinSla: number, meanHours: number | null) => ({
    reviewed,
    withinSla,
    meanHours,
    medianHours: meanHours,
    p90Hours: meanHours,
  });
  const metrics = (overall: ReturnType<typeof stats>, openOverSla = 0): ReviewMetrics => ({
    windowDays: 30,
    slaHours: 72,
    overall,
    byTarget: { mod: overall, version: overall },
    openOverSla,
  });

  it('shows mean, median, the share decided within the SLA and the overdue count', () => {
    const tiles = metricTiles(metrics(stats(40, 30, 5), 2));
    expect(tiles).toHaveLength(4);
    expect(tiles[0]?.value).toMatch(/5/);
    expect(tiles[2]).toMatchObject({ value: '75%', tone: 'text-warning' });
    expect(tiles[3]).toMatchObject({ value: '2', tone: 'text-danger' });
  });

  it('shows dashes when nothing was reviewed in the window', () => {
    const tiles = metricTiles(metrics(stats(0, 0, null)));
    expect(tiles.slice(0, 3).map((tile) => tile.value)).toEqual(['-', '-', '-']);
    expect(tiles[3]).toMatchObject({ value: '0', tone: '' });
  });
});
