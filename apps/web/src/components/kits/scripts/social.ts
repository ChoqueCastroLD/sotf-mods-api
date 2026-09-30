/**
 * Kit page, social layer (Kits T1-24): the follow button, the live follower/comment counters and
 * the comment thread. Vanilla TS like the rest of the kit page (PLAN §2.5).
 *
 * - The cached HTML renders «Follow» as a link to sign-in. For signed-in visitors the script asks
 *   `GET /api/v2/me/kit-follows/lookup` once, turns the link into a toggle (`aria-pressed`) and
 *   sends `PUT`/`DELETE /api/v2/kits/:id/follow` (optimistic, with undo).
 * - `GET /api/v2/kits/:id/live/stream` (server-sent events, public) pushes the follower and comment
 *   totals; a change of the comment total refreshes the thread.
 * - The thread comes from the public, edge-cached `GET /api/v2/kits/:id/comments`; writes go
 *   through `POST /kits/:id/comments` and `PATCH|DELETE /kit-comments/:id`.
 */
import type { KitCommentDTO, KitReplyDTO } from '@sotf/contracts/kit-social';
import type { MeSummary } from '../../../scripts/account-hint.ts';
import { track } from '../../../scripts/beacon.ts';
import { type ApiFailure, apiCall } from '../../../scripts/mod/api.ts';
import { whenSession } from '../../../scripts/mod/session.ts';
import { toast } from '../../../scripts/mod/toast.ts';
import { ACTION_CLASSES } from '../../mod/styles.ts';
import { fill, type KitPageData, type KitSocialMessages } from './types.ts';

interface FollowState {
  following: boolean;
  notify: boolean;
  followers: number;
}

interface CommentPage {
  items: KitCommentDTO[];
  nextCursor: string | null;
  total: number;
}

const PAGE_SIZE = 20;
const INPUT_CLASSES =
  'w-full rounded-md border border-border-strong bg-bg px-3 py-2 text-sm text-fg placeholder:text-fg-subtle ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';
const LINK_BUTTON =
  'inline-flex min-h-8 items-center rounded px-1 text-xs font-medium text-fg-muted hover:text-link hover:underline ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';
const PRIMARY_BUTTON =
  'inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg ' +
  'hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-55 aria-busy:cursor-progress ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

function plural(templates: Readonly<Record<string, string>>, count: number, lang: string): string {
  const category = new Intl.PluralRules(lang).select(count);
  const template = templates[category] ?? templates.other ?? '{n}';
  return template.replace('{n}', new Intl.NumberFormat(lang).format(count));
}

function failureText(messages: KitSocialMessages, reason: ApiFailure, fallback: string): string {
  switch (reason) {
    case 'unauthenticated':
      return messages.signInRequired;
    case 'email':
      return messages.verifyEmail;
    case 'rate':
      return messages.rateLimited;
    case 'forbidden':
      return messages.forbidden;
    default:
      return fallback;
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

// -----------------------------------------------------------------------------------------------
// Counters
// -----------------------------------------------------------------------------------------------

function setFollowers(doc: Document, data: KitPageData, count: number): void {
  for (const node of doc.querySelectorAll<HTMLElement>('[data-kit-followers]')) {
    node.dataset.kitFollowers = String(count);
    node.textContent = plural(data.social.followers, count, data.locale);
  }
}

function setCommentCount(doc: Document, data: KitPageData, count: number): void {
  for (const node of doc.querySelectorAll<HTMLElement>('[data-kit-comments-count]')) {
    node.textContent = plural(data.social.commentsCount, count, data.locale);
  }
}

function currentFollowers(doc: Document): number {
  const node = doc.querySelector<HTMLElement>('[data-kit-followers]');
  const value = Number(node?.dataset.kitFollowers);
  return Number.isFinite(value) ? value : 0;
}

// -----------------------------------------------------------------------------------------------
// Follow
// -----------------------------------------------------------------------------------------------

function initFollow(root: HTMLElement, data: KitPageData, session: MeSummary | null, doc: Document): void {
  const button = root.querySelector<HTMLAnchorElement>('a[data-kit-follow]');
  if (!button || !session) return;
  if (session.id === data.ownerId) {
    button.hidden = true;
    return;
  }
  const messages = data.social;
  const setPressed = (following: boolean) => {
    button.setAttribute('aria-pressed', following ? 'true' : 'false');
    const label = button.querySelector('[data-follow-label]');
    if (label) label.textContent = following ? messages.following : messages.follow;
  };
  void (async () => {
    const lookup = await apiCall<{ kits: number[] }>('GET', `/api/v2/me/kit-follows/lookup?kit=${data.kitId}`);
    let busy = false;
    button.setAttribute('role', 'button');
    setPressed(lookup.ok && lookup.data.kits.includes(data.kitId));

    const apply = async (follow: boolean, offerUndo: boolean): Promise<void> => {
      busy = true;
      const before = currentFollowers(doc);
      button.setAttribute('aria-busy', 'true');
      setPressed(follow);
      setFollowers(doc, data, Math.max(0, before + (follow ? 1 : -1)));
      const url = `/api/v2/kits/${data.kitId}/follow`;
      const result = follow
        ? await apiCall<FollowState>('PUT', url, { notify: true })
        : await apiCall<FollowState>('DELETE', url);
      busy = false;
      button.removeAttribute('aria-busy');
      if (!result.ok) {
        setPressed(!follow);
        setFollowers(doc, data, before);
        toast(failureText(messages, result.reason, messages.followFailed), undefined, doc);
        return;
      }
      if (typeof result.data?.followers === 'number') setFollowers(doc, data, result.data.followers);
      if (follow) track('follow', { entityType: 'kit', entityId: data.kitId, props: { target: 'kit' } });
      if (offerUndo) {
        toast(
          follow ? messages.followed : messages.unfollowed,
          { label: messages.undo, onClick: () => void apply(!follow, false) },
          doc,
        );
      }
    };

    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (busy) return;
      void apply(button.getAttribute('aria-pressed') !== 'true', true);
    });
  })();
}

// -----------------------------------------------------------------------------------------------
// Live
// -----------------------------------------------------------------------------------------------

interface LivePayload {
  followers: number;
  comments: number;
}

function isLivePayload(value: unknown): value is LivePayload {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return typeof v.followers === 'number' && typeof v.comments === 'number';
}

function startLive(data: KitPageData, onLive: (live: LivePayload) => void): void {
  if (typeof EventSource !== 'function') return;
  const source = new EventSource(`/api/v2/kits/${data.kitId}/live/stream`);
  source.addEventListener('kit.live', (event) => {
    try {
      const payload: unknown = JSON.parse((event as MessageEvent<string>).data);
      if (isLivePayload(payload)) onLive(payload);
    } catch {
      // A malformed frame is ignored: the next push reconciles.
    }
  });
  window.addEventListener('pagehide', () => source.close(), { once: true });
}

// -----------------------------------------------------------------------------------------------
// Comments
// -----------------------------------------------------------------------------------------------

class Thread {
  readonly #data: KitPageData;
  readonly #doc: Document;
  readonly #messages: KitSocialMessages;
  readonly #list: HTMLElement;
  readonly #status: HTMLElement;
  readonly #more: HTMLButtonElement;
  readonly #formHost: HTMLElement;
  #session: MeSummary | null = null;
  #items: KitCommentDTO[] = [];
  #cursor: string | null = null;
  #total = 0;
  #loaded = false;
  #busyLoading = false;
  #pendingReload = false;
  #reloadTimer: number | undefined;

  constructor(root: HTMLElement, data: KitPageData, doc: Document) {
    this.#root = root;
    this.#data = data;
    this.#doc = doc;
    this.#messages = data.social;
    this.#list = root.querySelector<HTMLElement>('[data-kit-comments-list]') ?? el(doc, 'div');
    this.#status = root.querySelector<HTMLElement>('[data-kit-comments-status]') ?? el(doc, 'p');
    this.#more = root.querySelector<HTMLButtonElement>('[data-kit-comments-more]') ?? el(doc, 'button');
    this.#formHost = root.querySelector<HTMLElement>('[data-kit-comments-form]') ?? el(doc, 'div');
  }

  get total(): number {
    return this.#total;
  }

  start(session: MeSummary | null): void {
    this.#session = session;
    this.#renderComposer();
    this.#more.addEventListener('click', () => void this.#load(true));
    void this.#load(false);
  }

  /** The live stream reports a different comment total: refresh when nobody is typing. */
  onLiveTotal(total: number): void {
    if (!this.#loaded || total === this.#total) return;
    window.clearTimeout(this.#reloadTimer);
    this.#reloadTimer = window.setTimeout(() => {
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

  #flushPending(): void {
    if (!this.#pendingReload || this.#typing()) return;
    this.#pendingReload = false;
    void this.#load(false);
  }

  async #load(append: boolean): Promise<void> {
    if (this.#busyLoading) return;
    this.#busyLoading = true;
    const messages = this.#messages;
    if (!this.#loaded) this.#setStatus(messages.commentsLoading);
    const query = new URLSearchParams({ limit: String(PAGE_SIZE) });
    if (append && this.#cursor) query.set('cursor', this.#cursor);
    const result = await apiCall<CommentPage>('GET', `/api/v2/kits/${this.#data.kitId}/comments?${query.toString()}`);
    this.#busyLoading = false;
    if (!result.ok) {
      if (!this.#loaded) this.#setRetry();
      else toast(messages.commentsLoadFailed, undefined, this.#doc);
      return;
    }
    const page = result.data;
    this.#items = append
      ? [...this.#items, ...page.items.filter((i) => !this.#items.some((e) => e.id === i.id))]
      : page.items;
    this.#cursor = page.nextCursor;
    this.#total = page.total;
    this.#loaded = true;
    this.#setStatus(this.#items.length === 0 ? messages.commentsEmpty : '');
    setCommentCount(this.#doc, this.#data, this.#total);
    this.#render();
  }

  #setStatus(text: string): void {
    this.#status.replaceChildren();
    this.#status.textContent = text;
    this.#status.hidden = text === '';
  }

  #setRetry(): void {
    this.#status.replaceChildren();
    this.#status.hidden = false;
    this.#status.append(`${this.#messages.commentsLoadFailed} `);
    const retry = el(this.#doc, 'button', LINK_BUTTON, this.#messages.retry);
    retry.type = 'button';
    retry.addEventListener('click', () => void this.#load(false));
    this.#status.append(retry);
  }

  // ---- Composer -------------------------------------------------------------------------------

  #renderComposer(): void {
    const messages = this.#messages;
    this.#formHost.replaceChildren();
    const session = this.#session;
    if (!session) {
      const p = el(this.#doc, 'p', 'text-sm text-fg-muted');
      const link = el(this.#doc, 'a', 'font-semibold text-link hover:underline', messages.signInLink);
      link.href = this.#data.loginHref;
      link.rel = 'nofollow';
      p.append(`${messages.signInToComment} `, link);
      this.#formHost.append(p);
      return;
    }
    if (!session.emailVerified) {
      this.#formHost.append(el(this.#doc, 'p', 'text-sm text-fg-muted', messages.verifyEmail));
      return;
    }
    this.#formHost.append(
      this.#form({
        label: messages.formLabel,
        submit: messages.formSubmit,
        initial: '',
        onSubmit: async (bodyMd) => {
          const result = await apiCall<KitCommentDTO>('POST', `/api/v2/kits/${this.#data.kitId}/comments`, { bodyMd });
          if (result.ok) {
            track('comment_submit', { entityType: 'kit', entityId: this.#data.kitId, props: { target: 'kit' } });
            toast(messages.posted, undefined, this.#doc);
            await this.#afterWrite();
          }
          return result.ok ? null : failureText(messages, result.reason, messages.postFailed);
        },
      }),
    );
  }

  async #afterWrite(): Promise<void> {
    this.#busyLoading = false;
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
    const messages = this.#messages;
    const form = el(doc, 'form', 'grid gap-2');
    form.noValidate = true;
    const id = `kit-comment-field-${Math.random().toString(36).slice(2, 8)}`;
    const label = el(doc, 'label', 'sr-only', options.label);
    label.htmlFor = id;
    const area = el(doc, 'textarea', INPUT_CLASSES);
    area.id = id;
    area.rows = 3;
    area.maxLength = this.#data.commentMax;
    area.placeholder = messages.formPlaceholder;
    area.value = options.initial;
    const error = el(doc, 'p', 'text-sm text-danger');
    error.role = 'alert';
    error.hidden = true;
    const row = el(doc, 'div', 'flex flex-wrap items-center gap-3');
    const submit = el(doc, 'button', PRIMARY_BUTTON, options.submit);
    submit.type = 'submit';
    row.append(submit);
    if (options.onCancel) {
      const cancel = el(doc, 'button', ACTION_CLASSES, messages.cancel);
      cancel.type = 'button';
      cancel.addEventListener('click', () => {
        options.onCancel?.();
        this.#flushPending();
      });
      row.append(cancel);
    }
    row.append(el(doc, 'span', 'text-xs text-fg-subtle', messages.formHint));
    form.append(label, area, error, row);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (submit.getAttribute('aria-busy') === 'true') return;
      const body = area.value.trim();
      if (body === '' || body.length > this.#data.commentMax) {
        error.textContent = messages.tooLong;
        error.hidden = false;
        area.focus();
        return;
      }
      error.hidden = true;
      submit.setAttribute('aria-busy', 'true');
      submit.disabled = true;
      const previous = submit.textContent;
      submit.textContent = messages.formPosting;
      void options.onSubmit(body).then((failure) => {
        submit.removeAttribute('aria-busy');
        submit.disabled = false;
        submit.textContent = previous;
        if (failure === null) {
          area.value = '';
          options.onCancel?.();
          return;
        }
        error.textContent = failure;
        error.hidden = false;
      });
    });
    if (options.autofocus) queueMicrotask(() => area.focus());
    return form;
  }

  // ---- Thread ---------------------------------------------------------------------------------

  #render(): void {
    this.#list.replaceChildren(...this.#items.map((comment) => this.#comment(comment)));
    this.#more.hidden = this.#cursor === null;
    this.#more.textContent = this.#messages.loadMore;
    const hash = this.#doc.location?.hash;
    if (hash?.startsWith('#kc-')) this.#doc.getElementById(hash.slice(1))?.scrollIntoView({ block: 'center' });
  }

  #comment(comment: KitCommentDTO): HTMLElement {
    const doc = this.#doc;
    const node = this.#article(comment);
    if (comment.replies.length > 0) {
      const replies = el(doc, 'div', 'mt-3 grid gap-3 border-s-2 border-border ps-3 sm:ps-4');
      for (const reply of comment.replies) replies.append(this.#article(reply));
      node.append(replies);
    }
    return node;
  }

  #profileHref(handle: string): string {
    return this.#data.profileHref.replace('{handle}', encodeURIComponent(handle));
  }

  #article(comment: KitCommentDTO | KitReplyDTO): HTMLElement {
    const doc = this.#doc;
    const messages = this.#messages;
    const node = el(doc, 'article', 'grid gap-2 rounded-lg border border-border bg-surface p-3 scroll-mt-24');
    node.id = `kc-${comment.id}`;
    const isReply = comment.parentId !== null;
    if (isReply) node.className = 'grid gap-2 scroll-mt-24';
    if (comment.status !== 'visible') {
      node.append(el(doc, 'p', 'text-sm italic text-fg-muted', messages.deletedNote));
      return node;
    }

    const head = el(doc, 'header', 'flex flex-wrap items-center gap-x-2 gap-y-1 text-sm');
    const author = comment.author;
    const name = author ? author.displayName : messages.deletedAuthor;
    if (author?.avatarUrl) {
      const img = el(doc, 'img', 'size-7 rounded-full bg-raised object-cover');
      img.src = author.avatarUrl;
      img.alt = '';
      img.width = 28;
      img.height = 28;
      img.loading = 'lazy';
      head.append(img);
    }
    if (author) {
      const link = el(doc, 'a', 'font-semibold text-fg hover:text-link hover:underline', name);
      link.href = this.#profileHref(author.handle);
      head.append(link);
    } else {
      head.append(el(doc, 'span', 'font-semibold text-fg-muted', name));
    }
    if (comment.isKitOwner) {
      head.append(
        el(
          doc,
          'span',
          'rounded-full border border-primary/50 bg-primary/10 px-2 py-0.5 text-2xs font-semibold text-fg',
          messages.curator,
        ),
      );
    }
    const time = el(doc, 'time', 'text-xs text-fg-subtle');
    time.dateTime = comment.createdAt;
    time.textContent = new Intl.DateTimeFormat(this.#data.locale, { dateStyle: 'medium', timeStyle: 'short' }).format(
      new Date(comment.createdAt),
    );
    head.append(time);
    if (comment.editedAt) head.append(el(doc, 'span', 'text-xs text-fg-subtle', `· ${messages.edited}`));

    const body = el(doc, 'div', 'prose prose-locator prose-sm max-w-[72ch] text-pretty break-words');
    // Sanitised by the server (`lite` markdown profile: closed-set serialiser).
    body.innerHTML = comment.bodyHtml;

    const actions = el(doc, 'div', 'flex flex-wrap items-center gap-2');
    const session = this.#session;
    if (session?.emailVerified) {
      const rootId = comment.parentId ?? comment.id;
      const reply = el(doc, 'button', LINK_BUTTON, messages.reply);
      reply.type = 'button';
      reply.addEventListener('click', () => this.#openReply(node, rootId, name));
      actions.append(reply);
    }
    if (session && author && session.id === author.id) {
      const edit = el(doc, 'button', LINK_BUTTON, messages.edit);
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
      const remove = el(doc, 'button', LINK_BUTTON, messages.delete);
      remove.type = 'button';
      remove.addEventListener('click', () => void this.#remove(comment.id));
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
    const messages = this.#messages;
    const form = this.#form({
      label: fill(messages.replyLabel, { name }),
      submit: messages.replySubmit,
      initial: '',
      autofocus: true,
      onCancel: () => form.remove(),
      onSubmit: async (bodyMd) => {
        const result = await apiCall<KitCommentDTO>('POST', `/api/v2/kits/${this.#data.kitId}/comments`, {
          bodyMd,
          parentId: rootId,
        });
        if (result.ok) {
          toast(messages.posted, undefined, this.#doc);
          form.remove();
          await this.#afterWrite();
        }
        return result.ok ? null : failureText(messages, result.reason, messages.postFailed);
      },
    });
    form.dataset.kitReply = '';
    node.append(form);
  }

  async #openEdit(
    node: HTMLElement,
    body: HTMLElement,
    actions: HTMLElement,
    comment: KitCommentDTO | KitReplyDTO,
  ): Promise<void> {
    if (node.querySelector(':scope > form[data-kit-edit]')) return;
    const messages = this.#messages;
    const source = await apiCall<{ bodyMd: string }>('GET', `/api/v2/kit-comments/${comment.id}/source`);
    if (!source.ok) {
      toast(failureText(messages, source.reason, messages.postFailed), undefined, this.#doc);
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
      label: messages.edit,
      submit: messages.save,
      initial: source.data.bodyMd,
      autofocus: true,
      onCancel: close,
      onSubmit: async (bodyMd) => {
        const result = await apiCall<KitCommentDTO>('PATCH', `/api/v2/kit-comments/${comment.id}`, { bodyMd });
        if (result.ok) {
          toast(messages.saved, undefined, this.#doc);
          await this.#afterWrite();
        }
        return result.ok ? null : failureText(messages, result.reason, messages.postFailed);
      },
    });
    form.dataset.kitEdit = '';
    node.append(form);
  }

  async #remove(id: number): Promise<void> {
    const messages = this.#messages;
    if (!window.confirm(messages.deleteConfirm)) return;
    const result = await apiCall<null>('DELETE', `/api/v2/kit-comments/${id}`);
    if (!result.ok) {
      toast(failureText(messages, result.reason, messages.postFailed), undefined, this.#doc);
      return;
    }
    toast(messages.removed, undefined, this.#doc);
    await this.#afterWrite();
  }
}

export function initKitSocial(root: HTMLElement, data: KitPageData, doc: Document): void {
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
