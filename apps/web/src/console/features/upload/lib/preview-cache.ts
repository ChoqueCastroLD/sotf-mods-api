/**
 * Previews of the images a creator uploaded from this browser, by upload id (IndexedDB).
 *
 * A draft stores only upload/media ids; the processed variants are not addressable from the
 * console. Keeping a small JPEG per upload lets a resumed draft show its cover and gallery; on
 * another device the tiles fall back to a neutral placeholder. Entries older than 30 days are
 * pruned (drafts' uploads expire long before that). Every failure is silent: previews are a
 * convenience.
 */

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
