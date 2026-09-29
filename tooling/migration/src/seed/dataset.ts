/**
 * The development data set (PLAN §6.12 point 4): the public snapshot plus deterministic synthetic
 * rows that reproduce the private volumes and the known data-quality cases of research/02 §4.
 *
 * Everything here is pure (no database): the same {@link SEED} always yields the same rows.
 */
import {
  DEV_PASSWORD_ARGON2ID,
  DEV_PASSWORD_BCRYPT,
  EXPECTED,
  INJECTED,
  SEED,
  SITE_EPOCH,
  SMALL_DOWNLOADS,
  SNAPSHOT_AT,
} from '../constants.ts';
import { createRng, type Rng } from '../prng.ts';
import type { SnapCategory, SnapComment, SnapMod, Snapshot, SnapVersion } from './snapshot.ts';

export interface UserRow {
  id: number;
  email: string;
  password: string;
  name: string;
  imageUrl: string;
  slug: string;
  isTrusted: boolean;
  createdAt: string;
}

export interface ImageRow {
  id: number;
  url: string;
  isPrimary: boolean;
  isThumbnail: boolean;
  createdAt: string;
  modId: number;
}

export interface FavoriteRow {
  id: number;
  createdAt: string;
  userId: number;
  modId: number;
}

export interface TokenRow {
  id: number;
  token: string;
  expiresAt: string;
  userId: number;
  createdAt: string;
}

/** Downloads of one version: `count` rows spread over [start, end) with `recent` in the last week. */
export interface DownloadSlice {
  modVersionId: number | null;
  count: number;
  start: number;
  end: number;
  /** Rows placed in [recentStart, end) (the legacy `lastWeekDownloads`). */
  recent: number;
  recentStart: number;
}

export interface Dataset {
  mode: 'full' | 'small';
  categories: SnapCategory[];
  users: UserRow[];
  mods: SnapMod[];
  images: ImageRow[];
  versions: SnapVersion[];
  comments: SnapComment[];
  favorites: FavoriteRow[];
  tokens: TokenRow[];
  resetTokens: TokenRow[];
  downloads: DownloadSlice[];
  totalDownloads: number;
  /** Human-readable list of the injected rare cases (printed by the seed and stored in MigrationRun). */
  rareCases: Record<string, unknown>;
}

const DAY = 86_400_000;
const at = (iso: string) => Date.parse(iso);
const iso = (ms: number) => new Date(Math.round(ms)).toISOString();

function hex(rng: Rng, bytes: number): string {
  let out = '';
  for (let i = 0; i < bytes; i += 1) out += rng.int(0, 255).toString(16).padStart(2, '0');
  return out;
}

/** Largest-remainder scaling of `counts` so that they add up to exactly `total`. */
export function scaleCounts(counts: readonly number[], total: number): number[] {
  const sum = counts.reduce((a, b) => a + b, 0);
  if (sum === 0) return counts.map(() => 0);
  const raw = counts.map((c) => (c * total) / sum);
  const floors = raw.map(Math.floor);
  let rest = total - floors.reduce((a, b) => a + b, 0);
  const order = raw.map((r, i) => ({ i, frac: r - Math.floor(r) })).sort((a, b) => b.frac - a.frac || a.i - b.i);
  for (const { i } of order) {
    if (rest <= 0) break;
    floors[i] = (floors[i] as number) + 1;
    rest -= 1;
  }
  return floors;
}

export function buildDataset(snapshot: Snapshot, options: { small?: boolean } = {}): Dataset {
  const rng = createRng(SEED);
  const small = options.small === true;
  const snapshotAt = at(SNAPSHOT_AT);
  const epoch = at(SITE_EPOCH);

  // ---- Users ------------------------------------------------------------------------------
  const known = new Map(snapshot.users.map((u) => [u.id, u]));
  const syntheticCount = EXPECTED.users - snapshot.users.length;
  const syntheticIds: number[] = [];
  for (let id = 1; syntheticIds.length < syntheticCount; id += 1) if (!known.has(id)) syntheticIds.push(id);
  const regularIds = [...syntheticIds, ...snapshot.users.filter((u) => u.role === 'author').map((u) => u.id)].sort(
    (a, b) => a - b,
  );
  const maxRegularId = regularIds[regularIds.length - 1] ?? 1;
  const userRng = rng.fork('users');
  // Accounts are created in id order between the game's release and the snapshot.
  const createdAtById = (id: number) =>
    epoch + ((snapshotAt - epoch - 30 * DAY) * (id - 1)) / Math.max(1, maxRegularId - 1) + userRng.int(0, 3600_000);

  const takenSlugs = new Set(snapshot.users.map((u) => u.slug.toLowerCase()));
  const users: UserRow[] = [];
  for (const u of snapshot.users) {
    const firstSeen = at(u.firstSeenAt);
    const created =
      u.role === 'author'
        ? Math.min(createdAtById(u.id), firstSeen - userRng.int(1, 72) * 3600_000)
        : Math.max(epoch, firstSeen - userRng.int(1, 120) * DAY);
    users.push({
      id: u.id,
      email: `${u.slug}@example.test`,
      password: DEV_PASSWORD_ARGON2ID,
      name: u.name,
      imageUrl: u.imageUrl,
      slug: u.slug,
      isTrusted: u.isTrusted,
      createdAt: iso(Math.max(epoch, created)),
    });
  }
  const [twinA, twinB] = INJECTED.caseCollisionEmails;
  const twinIds = [syntheticIds[100], syntheticIds[101]] as [number, number];
  const bcryptId = syntheticIds[syntheticIds.length - 1] as number;
  for (const id of syntheticIds) {
    let slug = `survivor${id}`;
    while (takenSlugs.has(slug)) slug = `${slug}x`;
    takenSlugs.add(slug);
    const email = id === twinIds[0] ? twinA : id === twinIds[1] ? twinB : `${slug}@example.test`;
    users.push({
      id,
      email,
      password: id === bcryptId ? DEV_PASSWORD_BCRYPT : DEV_PASSWORD_ARGON2ID,
      name: `Survivor${id}`,
      imageUrl: '',
      slug,
      isTrusted: false,
      createdAt: iso(createdAtById(id)),
    });
  }
  users.sort((a, b) => a.id - b.id);
  const userCreated = new Map(users.map((u) => [u.id, at(u.createdAt)]));

  // ---- Mods, gallery, versions, comments (snapshot) -----------------------------------------
  const versionsByMod = new Map<number, SnapVersion[]>();
  for (const v of snapshot.versions) {
    const list = versionsByMod.get(v.modId) ?? [];
    list.push(v);
    versionsByMod.set(v.modId, list);
  }
  for (const list of versionsByMod.values()) list.sort((a, b) => at(a.createdAt) - at(b.createdAt) || a.id - b.id);

  const images: ImageRow[] = snapshot.images.map((image, i) => ({ id: i + 1, ...image }));

  // ---- Downloads ----------------------------------------------------------------------------
  const orphanFull = EXPECTED.orphanDownloads;
  const fullTotal = snapshot.versions.reduce((sum, v) => sum + v.downloads, 0) + orphanFull;
  if (!small && fullTotal !== EXPECTED.downloads) {
    throw new Error(`the snapshot adds up to ${fullTotal} downloads, expected ${EXPECTED.downloads}`);
  }
  const orphanCount = small ? Math.max(2, Math.round((orphanFull * SMALL_DOWNLOADS) / fullTotal)) : orphanFull;
  const versionCounts = small
    ? scaleCounts(
        snapshot.versions.map((v) => v.downloads),
        SMALL_DOWNLOADS - orphanCount,
      )
    : snapshot.versions.map((v) => v.downloads);
  const countOf = new Map(snapshot.versions.map((v, i) => [v.id, versionCounts[i] as number]));

  const mods: SnapMod[] = snapshot.mods.map((m) => {
    if (!small) return { ...m };
    const downloads = (versionsByMod.get(m.id) ?? []).reduce((sum, v) => sum + (countOf.get(v.id) ?? 0), 0);
    return { ...m, downloads, lastWeekDownloads: Math.min(m.lastWeekDownloads, downloads) };
  });
  const weekAgo = snapshotAt - 7 * DAY;
  const downloads: DownloadSlice[] = [];
  for (const m of mods) {
    const list = versionsByMod.get(m.id) ?? [];
    list.forEach((v, i) => {
      const start = at(v.createdAt);
      const next = list[i + 1];
      const end = Math.max(start + 1, next ? at(next.createdAt) : snapshotAt);
      const count = countOf.get(v.id) ?? 0;
      const isLast = i === list.length - 1;
      const recent = isLast ? Math.min(m.lastWeekDownloads, count) : 0;
      downloads.push({ modVersionId: v.id, count, start, end, recent, recentStart: Math.max(start, weekAgo) });
    });
  }
  // research/02 Q3: downloads whose version was deleted (the FK set "modVersionId" to NULL).
  downloads.push({
    modVersionId: null,
    count: orphanCount,
    start: at('2024-01-15T00:00:00.000Z'),
    end: snapshotAt,
    recent: 0,
    recentStart: snapshotAt,
  });
  const totalDownloads = downloads.reduce((sum, s) => sum + s.count, 0);

  // ---- Favourites (234 real + injected duplicates, research/02 Q12) ---------------------------
  const favRng = rng.fork('favorites');
  const pool = users.map((u) => u.id);
  const favorites: Array<Omit<FavoriteRow, 'id'>> = [];
  for (const m of mods) {
    if (m.favoritesCount <= 0) continue;
    const chosen = new Set<number>();
    while (chosen.size < m.favoritesCount) {
      const candidate = favRng.pick(pool);
      if (candidate !== m.userId) chosen.add(candidate);
    }
    for (const userId of [...chosen].sort((a, b) => a - b)) {
      const from = Math.max(at(m.createdAt), userCreated.get(userId) ?? epoch);
      favorites.push({ userId, modId: m.id, createdAt: iso(from + favRng.next() * Math.max(1, snapshotAt - from)) });
    }
  }
  if (favorites.length !== EXPECTED.favorites) {
    throw new Error(`built ${favorites.length} favourites, expected ${EXPECTED.favorites}`);
  }
  // The legacy toggle is find-then-create without a unique index: a double click inserts twice.
  const duplicated = [...favorites].sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.userId - b.userId);
  const step = Math.floor(duplicated.length / (INJECTED.duplicateFavorites + 1));
  for (let i = 1; i <= INJECTED.duplicateFavorites; i += 1) {
    const original = duplicated[i * step] as Omit<FavoriteRow, 'id'>;
    favorites.push({ ...original, createdAt: iso(at(original.createdAt) + 350 + i * 17) });
  }
  const favoriteRows: FavoriteRow[] = favorites
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.userId - b.userId || a.modId - b.modId)
    .map((f, i) => ({ id: i + 1, ...f }));

  // ---- Expired sessions and reset tokens (research/02 §7) ------------------------------------
  const tokenRng = rng.fork('tokens');
  const tokens: TokenRow[] = [];
  for (let i = 0; i < INJECTED.expiredTokens; i += 1) {
    const userId = tokenRng.pick(pool);
    const from = userCreated.get(userId) ?? epoch;
    const created = from + tokenRng.next() * Math.max(1, snapshotAt - 3 * DAY - from);
    tokens.push({
      id: 0,
      token: `dev-session.${hex(tokenRng, 24)}`,
      expiresAt: iso(created + 2 * DAY),
      userId,
      createdAt: iso(created),
    });
  }
  tokens.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  tokens.forEach((t, i) => {
    t.id = i + 1;
  });
  const resetTokens: TokenRow[] = [];
  for (let i = 0; i < INJECTED.passwordResetTokens; i += 1) {
    const userId = tokenRng.pick(pool);
    const created = snapshotAt - tokenRng.int(2, 200) * DAY;
    resetTokens.push({
      id: 0,
      token: hex(tokenRng, 32),
      expiresAt: iso(created + 3600_000),
      userId,
      createdAt: iso(created),
    });
  }
  resetTokens.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  resetTokens.forEach((t, i) => {
    t.id = i + 1;
  });

  const rareCases = {
    caseCollisionEmails: twinIds.map((id) => ({ userId: id, email: users.find((u) => u.id === id)?.email })),
    bcryptUserId: bcryptId,
    duplicateFavorites: INJECTED.duplicateFavorites,
    orphanDownloads: orphanCount,
    expiredTokens: tokens.length,
    passwordResetTokens: resetTokens.length,
    fileMissingVersions: snapshot.versions
      .filter((v) => !v.downloadUrl.startsWith('https://r2.sotf-mods.com/'))
      .map((v) => v.id),
    typeNullMods: mods.filter((m) => m.type === null).length,
    nonCanonicalSlugs: mods.filter((m) => !/^[a-z0-9-]+$/.test(m.slug)).map((m) => m.slug),
    commentsWithEntities: snapshot.comments.filter((c) => /&(?:[a-z]+|#\d+);/i.test(c.message)).map((c) => c.id),
  };

  return {
    mode: small ? 'small' : 'full',
    categories: snapshot.categories,
    users,
    mods,
    images,
    versions: snapshot.versions,
    comments: snapshot.comments,
    favorites: favoriteRows,
    tokens,
    resetTokens,
    downloads,
    totalDownloads,
    rareCases,
  };
}
