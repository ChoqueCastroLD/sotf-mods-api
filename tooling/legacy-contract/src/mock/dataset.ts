/**
 * Dataset of the simulated legacy server. It is built from the golden fixtures and completed
 * with deterministic filler rows so that it is *consistent* with them: every list fixture has the
 * same `meta.total` whether it is replayed or computed (a test checks it), which lets the
 * RedManager and UpdatesChecker flows walk every page coherently.
 *
 * - the 67 distinct list items of the `mods-*` fixtures and the two detail fixtures;
 * - filler rows (older than any real row, never matching `kelvin`, never by `imaxel`) up to the
 *   fixture totals: 170 approved mods, 25 unapproved mods and 36 approved builds (nsfw=false);
 * - three NSFW rows (RedManager's NSFW tab) that carry the storage keys of research/01 §6.2 with
 *   a space, a `+` and parentheses; they are invisible to every fixture (all use nsfw=false).
 */
import { LegacyModDetail, type LegacyModListItem, orderKeys } from '@sotf/contracts/legacy';
import { loadFixtures } from '../fixtures.ts';

export type ListItem = LegacyModListItem;
type Detail = import('@sotf/contracts/legacy').LegacyModDetail;

export interface VersionRecord {
  id: number;
  version: string;
  isLatest: boolean;
  /** Raw storage key (no encoding). */
  key: string;
  extension: string;
  baseDownloads: number;
}

export interface ModRecord {
  item: ListItem;
  /** Detail fixture body when one exists (served with live counters). */
  detail: Detail | null;
  versions: VersionRecord[];
}

export const MOCK_R2_LEGACY_BASE = 'https://r2.sotf-mods.com';

/** Target totals of the fixtures (`meta.total`), nsfw=false. */
export const DATASET_TOTALS = { approvedMods: 170, unapprovedMods: 25, approvedBuilds: 36 } as const;

const FILLER_EPOCH = Date.parse('2023-03-01T12:00:00.000Z');
const MINUTE = 60_000;

function iso(ms: number): string {
  return new Date(ms).toISOString();
}

function filler(template: ListItem, n: number, kind: 'Mod' | 'Build', approved: boolean): ListItem {
  const id = 100_000 + n;
  const at = iso(FILLER_EPOCH - n * MINUTE);
  const name = `${kind === 'Build' ? 'Filler Build' : 'Filler Mod'} ${n}`;
  const slug = `filler-${kind.toLowerCase()}-${n}`;
  const modId = kind === 'Build' ? `f${n.toString(16).padStart(31, '0')}` : `FillerMod${n}`;
  return {
    ...structuredClone(template),
    id,
    name,
    slug,
    mod_id: modId,
    shortDescription: `Synthetic row ${n} of the contract harness.`,
    description: `Synthetic row ${n} of the contract harness dataset.`,
    dependencies: [],
    type: kind,
    isNSFW: false,
    isApproved: approved,
    isFeatured: false,
    lastWeekDownloads: n % 7,
    downloads: n * 3,
    latestVersion: kind === 'Build' ? '019a0000-0000-7000-8000-000000000000' : '1.0.0',
    averageRating: 0,
    reviewsCount: 0,
    favoritesCount: 0,
    commentsCount: 0,
    buildGuid: kind === 'Build' ? `guid-${n}` : null,
    buildShareVersion: kind === 'Build' ? '1.0.10' : null,
    numberOfElements: kind === 'Build' ? 100 + n : null,
    lastReleasedAt: at,
    createdAt: at,
    updatedAt: at,
    userId: 900_000,
    categoryId: template.categoryId,
    images: [],
    user: { name: 'Contract Filler', slug: 'contract-filler', imageUrl: '', isTrusted: false },
    versions: [{ version: kind === 'Build' ? '019a0000-0000-7000-8000-000000000000' : '1.0.0', isLatest: true }],
    _count: { favorites: 0 },
  };
}

/** NSFW rows whose keys contain the character classes of research/01 §6.2. */
const SPECIAL_ROWS: ReadonlyArray<{ n: number; name: string; slug: string; modId: string; key: string }> = [
  {
    n: 1,
    name: 'Virginia Wardrobe 18+',
    slug: 'virginia-wardrobe-18+',
    modId: 'ContractVirginiaWardrobe',
    key: '1765726049138_virginia-wardrobe-18+_0.0.4.zip',
  },
  {
    n: 2,
    name: 'Arctic Fox Savage',
    slug: 'arctic-fox-savage',
    modId: 'ContractArcticFoxSavage',
    key: '1790458408372_arctic fox savage_1.0.0.zip',
  },
  {
    n: 3,
    name: 'Skeletal Chainsaw (alpha)',
    slug: 'skeletal-chainsaw(alpha)',
    modId: 'ContractSkeletalChainsaw',
    key: "1722123985521_skeletal-chainsaw(alpha)_it's_1.1.5.zip",
  },
];

function syntheticVersion(item: ListItem): VersionRecord {
  const extension = item.type === 'Build' ? 'json' : 'zip';
  const version = item.latestVersion ?? '1.0.0';
  const ts = Date.parse(item.lastReleasedAt);
  return {
    id: 500_000 + item.id,
    version,
    isLatest: true,
    key: `${ts}_${item.slug}_${version}.${extension}`,
    extension,
    baseDownloads: item.downloads,
  };
}

function versionsOfDetail(detail: Detail): VersionRecord[] {
  return detail.versions.map((v) => ({
    id: v.id,
    version: v.version,
    isLatest: v.isLatest,
    key: v.downloadUrl.replace(/^https?:\/\/[^/]+\//, ''),
    extension: v.extension ?? 'zip',
    baseDownloads: v._count.downloads,
  }));
}

let cached: ModRecord[] | null = null;

/** The dataset (deterministic; built once). */
export function buildDataset(): ModRecord[] {
  if (cached) return cached;
  const fixtures = loadFixtures();
  const items = new Map<number, ListItem>();
  for (const fixture of fixtures) {
    if (!fixture.name.startsWith('mods-') || fixture.status !== 200) continue;
    const body = fixture.body as { data?: ListItem[] };
    for (const item of body.data ?? []) if (!items.has(item.id)) items.set(item.id, item);
  }
  const details = new Map<string, Detail>();
  for (const name of ['mod-by-id', 'mod-by-id-build']) {
    const fixture = fixtures.find((f) => f.name === name);
    if (!fixture) throw new Error(`missing detail fixture ${name}`);
    const detail = (fixture.body as { data: Detail }).data;
    details.set(detail.mod_id, detail);
  }
  const real = [...items.values()];
  const count = (pred: (m: ListItem) => boolean) => real.filter((m) => !m.isNSFW && pred(m)).length;
  const modTemplate = real.find((m) => m.type === 'Mod' && m.category !== null);
  const buildTemplate = real.find((m) => m.type === 'Build');
  if (!modTemplate || !buildTemplate) throw new Error('fixtures lack a Mod or Build template row');

  const rows: ListItem[] = [...real];
  let n = 0;
  const add = (howMany: number, kind: 'Mod' | 'Build', approved: boolean) => {
    for (let i = 0; i < howMany; i++)
      rows.push(filler(kind === 'Build' ? buildTemplate : modTemplate, ++n, kind, approved));
  };
  add(DATASET_TOTALS.approvedMods - count((m) => m.type === 'Mod' && m.isApproved), 'Mod', true);
  add(DATASET_TOTALS.unapprovedMods - count((m) => m.type === 'Mod' && !m.isApproved), 'Mod', false);
  add(DATASET_TOTALS.approvedBuilds - count((m) => m.type === 'Build' && m.isApproved), 'Build', true);

  const records: ModRecord[] = rows.map((item) => {
    const detail = details.get(item.mod_id) ?? null;
    return { item, detail, versions: detail ? versionsOfDetail(detail) : [syntheticVersion(item)] };
  });
  for (const special of SPECIAL_ROWS) {
    const item: ListItem = {
      ...filler(modTemplate, 90_000 + special.n, 'Mod', true),
      name: special.name,
      slug: special.slug,
      mod_id: special.modId,
      isNSFW: true,
      user: { name: 'Contract Special', slug: 'contract-special', imageUrl: '', isTrusted: false },
    };
    records.push({
      item,
      detail: null,
      versions: [
        {
          id: 700_000 + special.n,
          version: '1.0.0',
          isLatest: true,
          key: special.key,
          extension: 'zip',
          baseDownloads: 0,
        },
      ],
    });
  }
  cached = records;
  return records;
}

/** Legacy detail (`GET /api/mods/:mod_id`) of a record, with live download counters. */
export function detailOf(record: ModRecord, extraDownloads: (versionId: number) => number): Detail {
  if (record.detail) {
    const detail = structuredClone(record.detail);
    let added = 0;
    for (const v of detail.versions) {
      const extra = extraDownloads(v.id);
      v._count.downloads += extra;
      added += extra;
    }
    detail.downloads += added;
    return detail;
  }
  const { images, user, category, versions: _listVersions, _count, dependencies, ...scalars } = record.item;
  let added = 0;
  const versions = [...record.versions]
    .sort((a, b) => (a.version < b.version ? 1 : a.version > b.version ? -1 : 0))
    .map((v) => {
      const extra = extraDownloads(v.id);
      added += extra;
      return {
        id: v.id,
        version: v.version,
        isLatest: v.isLatest,
        changelog: '',
        downloadUrl: `${MOCK_R2_LEGACY_BASE}/${v.key}`,
        extension: v.extension,
        filename: v.key,
        createdAt: record.item.lastReleasedAt,
        updatedAt: record.item.lastReleasedAt,
        _count: { downloads: v.baseDownloads + extra },
      };
    });
  const detail = {
    ...scalars,
    dependencies: dependencies.join(','),
    downloads: scalars.downloads + added,
    images: images.map((image) => ({ url: image.url })),
    user,
    category,
    versions,
    _count,
  };
  return orderKeys(LegacyModDetail, detail) as Detail;
}
