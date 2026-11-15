/**
 * Modpack page, social layer: follow, live counters and the comment thread (vanilla TS, like the
 * mod page scripts). Adapted from the kit page script removed in 2026-10.
 *
 * - The cached HTML renders «Follow» as a link to sign-in. For signed-in visitors one lookup
 *   (`GET /api/v2/me/kit-follows/lookup`) turns it into a toggle (`aria-pressed`); the change is
 *   optimistic with Undo in the toast. The owner does not see it.
 * - `GET /api/v2/kits/:id/live/stream` (SSE, public) pushes followers and comment totals; a new
 *   comment total refreshes the thread unless someone is typing.
 * - The thread reads the public, edge-cached `GET /api/v2/kits/:id/comments`; writes go through
 *   `POST /kits/:id/comments` and `PATCH|DELETE /kit-comments/:id`. Deleting hides the comment at
 *   once and offers Undo; the request is only sent when the toast closes without Undo.
 * - Field errors live in a line reserved in advance, so nothing moves when one appears.
 */
import type { KitCommentDTO, KitReplyDTO } from '@sotf/contracts/kit-social';
import type { MeSummary } from '../../scripts/account-hint.ts';
import { track } from '../../scripts/beacon.ts';
import { type ApiFailure, apiCall } from '../../scripts/mod/api.ts';
import { whenSession } from '../../scripts/mod/session.ts';
import { toast } from '../../scripts/mod/toast.ts';

export interface ModpackSocialMessages {
  follow: string;
  following: string;
  followed: string;
  unfollowed: string;
  undo: string;
  signInRequired: string;
  verifyEmail: string;
  rateLimited: string;
  error: string;
  /** ICU-free plural templates (`{n}` = the number) per `Intl.PluralRules` category. */
  followers: Record<string, string>;
  comments: Record<string, string>;
  commentsEmpty: string;
  commentsLoading: string;
  commentsLoadFailed: string;
  retry: string;
  loadMore: string;
  formLabel: string;
  formPlaceholder: string;
  formSubmit: string;
  formEmpty: string;
  formTooLong: string;
  reply: string;
  replyLabel: string;
  replySubmit: string;
  cancel: string;
  edit: string;
  save: string;
  delete: string;
  deletedNote: string;
  owner: string;
  edited: string;
  signInToComment: string;
  verifyToComment: string;
  posted: string;
  saved: string;
  removed: string;
  deletedAuthor: string;
}

export interface ModpackSocialData {
  kitId: number;
  ownerId: number;
  locale: string;
  loginHref: string;
  /** Profile URL with `{handle}`. */
  profileHref: string;
  commentMax: number;
  messages: ModpackSocialMessages;
}

interface FollowState {
  following: boolean;
  followers: number;
}

interface CommentPage {
  items: KitCommentDTO[];
  nextCursor: string | null;
  total: number;
}

const PAGE_SIZE = 20;
const INPUT =
  'w-full rounded-md border border-border-strong bg-sunken px-3 py-2 text-base text-fg placeholder:text-fg-subtle ' +
  'focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary/60 md:text-sm';
const LINK_BUTTON =
  'inline-flex min-h-9 items-center rounded px-1.5 text-sm font-medium text-fg-muted hover:text-fg ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';
const PRIMARY =
  'inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg ' +
  'hover:bg-primary-hover disabled:opacity-60 aria-busy:cursor-progress ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';
const SECONDARY =
  'inline-flex h-10 items-center justify-center rounded-md border border-border-strong px-4 text-sm font-semibold text-fg ' +
  'hover:bg-fg/6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

function plural(templates: Readonly<Record<string, string>>, count: number, lang: string): string {
  const template = templates[new Intl.PluralRules(lang).select(count)] ?? templates.other ?? '{n}';
  return template.replace('{n}', new Intl.NumberFormat(lang).format(count));
}

function failureText(messages: ModpackSocialMessages, reason: ApiFailure): string {
  switch (reason) {
    case 'unauthenticated':
      return messages.signInRequired;
    case 'email':
      return messages.verifyEmail;
    case 'rate':
      return messages.rateLimited;
    default:
      return messages.error;
  }
}

function el<K extends keyof HTMLElementTagNameMap>(
  doc: Document,
  tag: K,
  className?: string,
  text?: string,
): HTMLElementTagNameMap[K] {
  const node = doc.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function setFollowers(doc: Document, data: ModpackSocialData, count: number): void {
  for (const node of doc.querySelectorAll<HTMLElement>('[data-kit-followers]')) {
    node.dataset.kitFollowers = String(count);
    node.textContent = plural(data.messages.followers, count, data.locale);
  }
}

function setCommentCount(doc: Document, data: ModpackSocialData, count: number): void {
  for (const node of doc.querySelectorAll<HTMLElement>('[data-kit-comments-count]')) {
    node.textContent = plural(data.messages.comments, count, data.locale);
  }
}

function currentFollowers(doc: Document): number {
  const value = Number(doc.querySelector<HTMLElement>('[data-kit-followers]')?.dataset.kitFollowers);
  return Number.isFinite(value) ? value : 0;
}

function initFollow(root: HTMLElement, data: ModpackSocialData, session: MeSummary | null, doc: Document): void {
  const buttons = Array.from(root.querySelectorAll<HTMLAnchorElement>('a[data-kit-follow]'));
  if (buttons.length === 0 || !session) return;
  if (session.id === data.ownerId) {
    for (const button of buttons) button.hidden = true;
    return;
  }
  const messages = data.messages;
  const setPressed = (following: boolean) => {
    for (const button of buttons) {
      button.setAttribute('aria-pressed', following ? 'true' : 'false');
      const label = button.querySelector('[data-follow-label]');
      if (label) label.textContent = following ? messages.following : messages.follow;
    }
  };
  void (async () => {
    const lookup = await apiCall<{ kits: number[] }>('GET', `/api/v2/me/kit-follows/lookup?kit=${data.kitId}`);
    let busy = false;
    for (const button of buttons) button.setAttribute('role', 'button');
    setPressed(lookup.ok && lookup.data.kits.includes(data.kitId));
    const apply = async (follow: boolean, offerUndo: boolean): Promise<void> => {
      busy = true;
      const before = currentFollowers(doc);
      for (const button of buttons) button.setAttribute('aria-busy', 'true');
      setPressed(follow);
      setFollowers(doc, data, Math.max(0, before + (follow ? 1 : -1)));
      const url = `/api/v2/kits/${data.kitId}/follow`;
      const result = follow
        ? await apiCall<FollowState>('PUT', url, { notify: true })
        : await apiCall<FollowState>('DELETE', url);
      busy = false;
      for (const button of buttons) button.removeAttribute('aria-busy');
      if (!result.ok) {
        setPressed(!follow);
        setFollowers(doc, data, before);
        toast(failureText(messages, result.reason), undefined, 'error');
        return;
      }
      if (typeof result.data?.followers === 'number') setFollowers(doc, data, result.data.followers);
      if (follow) track('follow', { entityType: 'kit', entityId: data.kitId, props: { target: 'kit' } });
      if (offerUndo) {
        toast(follow ? messages.followed : messages.unfollowed, {
          label: messages.undo,
          onClick: () => void apply(!follow, false),
        });
      }
    };
    for (const button of buttons) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        if (!busy) void apply(button.getAttribute('aria-pressed') !== 'true', true);
      });
    }
  })();
}

function startLive(data: ModpackSocialData, onLive: (live: { followers: number; comments: number }) => void): void {
  if (typeof EventSource !== 'function') return;
  const source = new EventSource(`/api/v2/kits/${data.kitId}/live/stream`);
  source.addEventListener('kit.live', (event) => {
    try {
      const payload = JSON.parse((event as MessageEvent<string>).data) as Record<string, unknown>;
      if (typeof payload.followers === 'number' && typeof payload.comments === 'number') {
        onLive({ followers: payload.followers, comments: payload.comments });
      }
    } catch {
      // A malformed frame is ignored; the next push reconciles.
    }
  });
  window.addEventListener('pagehide', () => source.close(), { once: true });
}

class Thread {
  readonly #data: ModpackSocialData;
  readonly #doc: Document;
  readonly #m: ModpackSocialMessages;
  readonly #list: HTMLElement;
  readonly #status: HTMLElement;
  readonly #more: HTMLButtonElement;
  readonly #formHost: HTMLElement;
  #session: MeSummary | null = null;
  #items: KitCommentDTO[] = [];
  #cursor: string | null = null;
  #total = 0;
  #loaded = false;
  #loading = false;
  #pendingReload = false;
  #timer: number | undefined;

  constructor(root: HTMLElement, data: ModpackSocialData, doc: Document) {
    this.#data = data;
    this.#doc = doc;
    this.#m = data.messages;
    this.#list = root.querySelector<HTMLElement>('[data-kit-comments-list]') ?? el(doc, 'div');
    this.#status = root.querySelector<HTMLElement>('[data-kit-comments-status]') ?? el(doc, 'p');
    this.#more = root.querySelector<HTMLButtonElement>('[data-kit-comments-more]') ?? el(doc, 'button');
    this.#formHost = root.querySelector<HTMLElement>('[data-kit-comments-form]') ?? el(doc, 'div');
  }

  start(session: MeSummary | null): void {
    this.#session = session;
    this.#renderComposer();
    this.#more.addEventListener('click', () => void this.#load(true));
    void this.#load(false);
  }

  onLiveTotal(total: number): void {
    if (!this.#loaded || total === this.#total) return;
    window.clearTimeout(this.#timer);
    this.#timer = window.setTimeout(() => {
      if (this.#typing()) this.#pendingReload = true;
      else void this.#load(false);
    }, 400);
  }

  #typing(): boolean {
    for (const area of this.#list.querySelectorAll<HTMLTextAreaElement>('textarea')) {
      if (area.value.trim() !== '') return true;
    }
    return false;
  }

  async #load(append: boolean): Promise<void> {
    if (this.#loading) return;
    this.#loading = true;
    if (!this.#loaded) this.#setStatus(this.#m.commentsLoading);
    this.#more.setAttribute('aria-busy', 'true');
    const query = new URLSearchParams({ limit: String(PAGE_SIZE) });
    if (append && this.#cursor) query.set('cursor', this.#cursor);
    const result = await apiCall<CommentPage>('GET', `/api/v2/kits/${this.#data.kitId}/comments?${query.toString()}`);
    this.#loading = false;
    this.#more.removeAttribute('aria-busy');
    if (!result.ok) {
      if (!this.#loaded) this.#setRetry();
      else toast(this.#m.commentsLoadFailed, { label: this.#m.retry, onClick: () => void this.#load(append) }, 'error');
      return;
    }
    const page = result.data;
    this.#items = append
      ? [...this.#items, ...page.items.filter((i) => !this.#items.some((e) => e.id === i.id))]
      : page.items;
    this.#cursor = page.nextCursor;
    this.#total = page.total;
    this.#loaded = true;
    this.#setStatus(this.#items.length === 0 ? this.#m.commentsEmpty : '');
    setCommentCount(this.#doc, this.#data, this.#total);
    this.#render();
  }

  #setStatus(text: string): void {
    this.#status.replaceChildren();
    this.#status.textContent = text;
    this.#status.hidden = text === '';
  }

  #setRetry(): void {
    this.#status.replaceChildren(`${this.#m.commentsLoadFailed} `);
    this.#status.hidden = false;
    const retry = el(this.#doc, 'button', LINK_BUTTON, this.#m.retry);
    retry.type = 'button';
    retry.addEventListener('click', () => void this.#load(false));
    this.#status.append(retry);
  }

  #renderComposer(): void {
    const m = this.#m;
    this.#formHost.replaceChildren();
    const session = this.#session;
    if (!session) {
      const link = el(this.#doc, 'a', SECONDARY, m.signInToComment);
      link.href = this.#data.loginHref;
      link.rel = 'nofollow';
      this.#formHost.append(link);
      return;
    }
    if (!session.emailVerified) {
      this.#formHost.append(el(this.#doc, 'p', 'text-sm text-fg-muted', m.verifyToComment));
      return;
    }
    this.#formHost.append(
      this.#form({
        label: m.formLabel,
        submit: m.formSubmit,
        initial: '',
        onSubmit: async (bodyMd) => {
          const result = await apiCall<KitCommentDTO>('POST', `/api/v2/kits/${this.#data.kitId}/comments`, { bodyMd });
          if (!result.ok) return failureText(m, result.reason);
          track('comment_submit', { entityType: 'kit', entityId: this.#data.kitId, props: { target: 'kit' } });
          toast(m.posted, undefined, 'success');
          await this.#reload();
          return null;
        },
      }),
    );
  }

  async #reload(): Promise<void> {
    this.#loading = false;
    await this.#load(false);
  }

  #form(options: {
    label: string;
    submit: string;
    initial: string;
    autofocus?: boolean;
    onSubmit: (bodyMd: string) => Promise<string | null>;
    onCancel?: () => void;
  }): HTMLFormElement {
    const doc = this.#doc;
    const m = this.#m;
    const form = el(doc, 'form', 'grid gap-2');
    form.noValidate = true;
    const id = `modpack-comment-${Math.random().toString(36).slice(2, 8)}`;
    const label = el(doc, 'label', 'sr-only', options.label);
    label.htmlFor = id;
    const area = el(doc, 'textarea', INPUT);
    area.id = id;
    area.rows = 3;
    area.maxLength = this.#data.commentMax;
    area.placeholder = m.formPlaceholder;
    area.value = options.initial;
    // Reserved line: an error never pushes the buttons down.
    const error = el(doc, 'p', 'min-h-5 text-sm text-danger');
    error.setAttribute('aria-live', 'polite');
    error.id = `${id}-error`;
    area.setAttribute('aria-describedby', error.id);
    const row = el(doc, 'div', 'flex flex-wrap items-center gap-2');
    const submit = el(doc, 'button', PRIMARY, options.submit);
    submit.type = 'submit';
    row.append(submit);
    if (options.onCancel) {
      const cancel = el(doc, 'button', SECONDARY, m.cancel);
      cancel.type = 'button';
      cancel.addEventListener('click', () => {
        options.onCancel?.();
        if (this.#pendingReload && !this.#typing()) {
          this.#pendingReload = false;
          void this.#load(false);
        }
      });
      row.append(cancel);
    }
    form.append(label, area, error, row);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (submit.getAttribute('aria-busy') === 'true') return;
      const body = area.value.trim();
      if (body === '' || body.length > this.#data.commentMax) {
        error.textContent = body === '' ? m.formEmpty : m.formTooLong;
        area.setAttribute('aria-invalid', 'true');
        area.focus();
        return;
      }
      error.textContent = '';
      area.removeAttribute('aria-invalid');
      submit.setAttribute('aria-busy', 'true');
      submit.disabled = true;
      void options.onSubmit(body).then((failure) => {
        submit.removeAttribute('aria-busy');
        submit.disabled = false;
        if (failure === null) {
          area.value = '';
          options.onCancel?.();
          return;
        }
        error.textContent = failure;
      });
    });
    if (options.autofocus) queueMicrotask(() => area.focus());
    return form;
  }

  #render(): void {
    this.#list.replaceChildren(...this.#items.map((comment) => this.#comment(comment)));
    this.#more.hidden = this.#cursor === null;
    this.#more.textContent = this.#m.loadMore;
    const hash = this.#doc.location?.hash;
    if (hash?.startsWith('#kc-')) this.#doc.getElementById(hash.slice(1))?.scrollIntoView({ block: 'center' });
  }

  #comment(comment: KitCommentDTO): HTMLElement {
    const node = this.#article(comment);
    if (comment.replies.length > 0) {
      // Replies sit on a slightly lighter surface, indented; no coloured rule.
      const replies = el(this.#doc, 'div', 'mt-3 grid gap-4 rounded-lg bg-fg/4 p-3 sm:ms-10 sm:p-4');
      for (const reply of comment.replies) replies.append(this.#article(reply));
      node.append(replies);
    }
    return node;
  }

  #article(comment: KitCommentDTO | KitReplyDTO): HTMLElement {
    const doc = this.#doc;
    const m = this.#m;
    const node = el(doc, 'article', 'grid scroll-mt-24 gap-2 py-4');
    node.id = `kc-${comment.id}`;
    if (comment.status !== 'visible') {
      node.append(el(doc, 'p', 'text-sm text-fg-muted', m.deletedNote));
      return node;
    }
    const head = el(doc, 'header', 'flex flex-wrap items-center gap-x-3 gap-y-1 text-sm');
    const author = comment.author;
    const name = author ? author.displayName || author.handle : m.deletedAuthor;
    if (author?.avatarUrl) {
      const img = el(doc, 'img', 'size-8 rounded-full bg-raised object-cover');
      img.src = author.avatarUrl;
      img.alt = '';
      img.width = 32;
      img.height = 32;
      img.loading = 'lazy';
      head.append(img);
    }
    if (author) {
      const link = el(doc, 'a', 'font-semibold text-fg hover:text-link', name);
      link.href = this.#data.profileHref.replace('{handle}', encodeURIComponent(author.handle));
      head.append(link);
    } else {
      head.append(el(doc, 'span', 'font-semibold text-fg-muted', name));
    }
    if (comment.isKitOwner) head.append(el(doc, 'span', 'text-xs font-semibold text-primary', m.owner));
    const time = el(doc, 'time', 'text-xs text-fg-subtle');
    time.dateTime = comment.createdAt;
    time.textContent = new Intl.DateTimeFormat(this.#data.locale, { dateStyle: 'medium', timeStyle: 'short' }).format(
      new Date(comment.createdAt),
    );
    head.append(time);
    if (comment.editedAt) head.append(el(doc, 'span', 'text-xs text-fg-subtle', m.edited));

    const body = el(doc, 'div', 'prose prose-locator prose-sm max-w-[72ch] text-pretty break-words');
    // Sanitised by the server (`lite` Markdown profile).
    body.innerHTML = comment.bodyHtml;

    const actions = el(doc, 'div', '-ms-1.5 flex flex-wrap items-center gap-1');
    const session = this.#session;
    if (session?.emailVerified) {
      const rootId = comment.parentId ?? comment.id;
      const reply = el(doc, 'button', LINK_BUTTON, m.reply);
      reply.type = 'button';
      reply.addEventListener('click', () => this.#openReply(node, rootId, name));
      actions.append(reply);
    }
    if (session && author && session.id === author.id) {
      const edit = el(doc, 'button', LINK_BUTTON, m.edit);
      edit.type = 'button';
      edit.addEventListener('click', () => void this.#openEdit(node, body, actions, comment));
      actions.append(edit);
    }
    const canDelete =
      session !== null &&
      ((author !== null && session.id === author.id) ||
        session.id === this.#data.ownerId ||
        session.role === 'moderator' ||
        session.role === 'admin');
    if (canDelete) {
      const remove = el(doc, 'button', LINK_BUTTON, m.delete);
      remove.type = 'button';
      remove.addEventListener('click', () => this.#remove(node, comment.id));
      actions.append(remove);
    }
    node.append(head, body);
    if (actions.childElementCount > 0) node.append(actions);
    return node;
  }

  #openReply(node: HTMLElement, rootId: number, name: string): void {
    const existing = node.querySelector(':scope > form[data-kit-reply]');
    if (existing) {
      existing.querySelector('textarea')?.focus();
      return;
    }
    const m = this.#m;
    const form = this.#form({
      label: m.replyLabel.replace('{name}', name),
      submit: m.replySubmit,
      initial: '',
      autofocus: true,
      onCancel: () => form.remove(),
      onSubmit: async (bodyMd) => {
        const result = await apiCall<KitCommentDTO>('POST', `/api/v2/kits/${this.#data.kitId}/comments`, {
          bodyMd,
          parentId: rootId,
        });
        if (!result.ok) return failureText(m, result.reason);
        toast(m.posted, undefined, 'success');
        form.remove();
        await this.#reload();
        return null;
      },
    });
    form.dataset.kitReply = '';
    node.append(form);
  }

  async #openEdit(node: HTMLElement, body: HTMLElement, actions: HTMLElement, comment: KitCommentDTO | KitReplyDTO) {
    if (node.querySelector(':scope > form[data-kit-edit]')) return;
    const m = this.#m;
    const source = await apiCall<{ bodyMd: string }>('GET', `/api/v2/kit-comments/${comment.id}/source`);
    if (!source.ok) {
      toast(failureText(m, source.reason), undefined, 'error');
      return;
    }
    body.hidden = true;
    actions.hidden = true;
    const close = () => {
      form.remove();
      body.hidden = false;
      actions.hidden = false;
    };
    const form = this.#form({
      label: m.edit,
      submit: m.save,
      initial: source.data.bodyMd,
      autofocus: true,
      onCancel: close,
      onSubmit: async (bodyMd) => {
        const result = await apiCall<KitCommentDTO>('PATCH', `/api/v2/kit-comments/${comment.id}`, { bodyMd });
        if (!result.ok) return failureText(m, result.reason);
        toast(m.saved, undefined, 'success');
        await this.#reload();
        return null;
      },
    });
    form.dataset.kitEdit = '';
    node.append(form);
  }

  /** Hidden at once with Undo; the DELETE goes out only if the toast closes without Undo. */
  #remove(node: HTMLElement, id: number): void {
    const m = this.#m;
    node.hidden = true;
    let undone = false;
    // Same as the toast with an action (10 s), so Undo works for as long as it is visible.
    const UNDO_MS = 10_000;
    toast(m.removed, {
      label: m.undo,
      onClick: () => {
        undone = true;
        node.hidden = false;
      },
    });
    window.setTimeout(async () => {
      if (undone) return;
      const result = await apiCall<null>('DELETE', `/api/v2/kit-comments/${id}`);
      if (!result.ok) {
        node.hidden = false;
        toast(failureText(m, result.reason), { label: m.retry, onClick: () => this.#remove(node, id) }, 'error');
        return;
      }
      await this.#reload();
    }, UNDO_MS);
  }
}

export function initModpackSocial(root: HTMLElement, data: ModpackSocialData, doc: Document = document): void {
  const thread = root.querySelector<HTMLElement>('[data-kit-comments]') ? new Thread(root, data, doc) : null;
  void whenSession().then((session) => {
    initFollow(root, data, session, doc);
    thread?.start(session);
  });
  startLive(data, (live) => {
    setFollowers(doc, data, live.followers);
    thread?.onLiveTotal(live.comments);
  });
}
