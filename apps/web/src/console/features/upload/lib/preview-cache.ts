/**
 * Previews of the images a creator uploaded from this browser, by upload id (IndexedDB).
 *
 * A draft stores only upload/media ids. Keeping a small JPEG per upload lets a resumed draft show
 * its cover and gallery at once; on another device {@link previewFor} asks the API for the
 * upload's smallest processed variant (`UploadDTO.previewUrl`) and falls back to a neutral
 * placeholder. Entries older than 30 days are pruned (drafts' uploads expire long before that).
 * Every failure is silent: previews are a convenience.
 */
import { api } from '../../../lib/api.ts';

const DB_NAME = 'sotf-upload-previews';
const STORE = 'previews';
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

interface Entry {
  id: string;
  dataUrl: string;
  savedAt: number;
}

const memory = new Map<string, string>();
let opening: Promise<IDBDatabase | null> | null = null;

function open(): Promise<IDBDatabase | null> {
  if (opening) return opening;
  opening = new Promise((resolve) => {
    try {
      if (typeof indexedDB === 'undefined') return resolve(null);
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(STORE))
          request.result.createObjectStore(STORE, { keyPath: 'id' });
      };
      request.onsuccess = () => {
        const db = request.result;
        resolve(db);
        prune(db);
      };
      request.onerror = () => resolve(null);
      request.onblocked = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
  return opening;
}

function prune(db: IDBDatabase): void {
  try {
    const store = db.transaction(STORE, 'readwrite').objectStore(STORE);
    const cursor = store.openCursor();
    const limit = Date.now() - MAX_AGE_MS;
    cursor.onsuccess = () => {
      const current = cursor.result;
      if (!current) return;
      if ((current.value as Entry).savedAt < limit) current.delete();
      current.continue();
    };
  } catch {
    // Ignore.
  }
}

export async function savePreview(id: string, dataUrl: string): Promise<void> {
  memory.set(id, dataUrl);
  const db = await open();
  if (!db) return;
  try {
    db.transaction(STORE, 'readwrite')
      .objectStore(STORE)
      .put({ id, dataUrl, savedAt: Date.now() } satisfies Entry);
  } catch {
    // Quota or private mode: the in-memory copy still serves this session.
  }
}

export async function loadPreview(id: string): Promise<string | null> {
  const cached = memory.get(id);
  if (cached) return cached;
  const db = await open();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const request = db.transaction(STORE, 'readonly').objectStore(STORE).get(id);
      request.onsuccess = () => {
        const entry = request.result as Entry | undefined;
        if (entry) memory.set(id, entry.dataUrl);
        resolve(entry?.dataUrl ?? null);
      };
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

/** Smallest processed variant of an image upload (`GET /uploads/:id`), or null. */
async function remotePreview(uploadId: string): Promise<string | null> {
  try {
    return (await api.uploads.get({ params: { id: uploadId } })).previewUrl ?? null;
  } catch {
    return null;
  }
}

/**
 * The preview of an image of a draft: this browser's copy, else the processed variant the API
 * serves for the upload (a draft resumed on another device). Media ids alone cannot be resolved.
 */
export async function previewFor(
  ref: { uploadId?: string | null; mediaId?: string | null },
  fetchRemote: (uploadId: string) => Promise<string | null> = remotePreview,
): Promise<string | null> {
  const id = ref.uploadId ?? ref.mediaId ?? null;
  if (!id) return null;
  const local = await loadPreview(id);
  if (local) return local;
  return ref.uploadId ? fetchRemote(ref.uploadId) : null;
}
