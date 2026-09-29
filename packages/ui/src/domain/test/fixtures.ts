/**
 * Fixtures of the domain components: the examples of `@sotf/contracts` (parsed, so they are
 * valid DTOs) plus the variations each component must handle (no image, broken, yanked,
 * deleted author…). Shared by the unit tests and the playground demos.
 */
import {
  CreatorCardDTO as CreatorCardSchema,
  ModCardDTO as ModCardSchema,
  ModDetailDTO as ModDetailSchema,
} from '../../../../contracts/src/catalog.ts';
import { CommentDTO as CommentSchema } from '../../../../contracts/src/comments.ts';
import { exampleOf, examplesOf } from '../../../../contracts/src/dto.ts';
import { KitCardDTO as KitCardSchema } from '../../../../contracts/src/kits.ts';
import {
  ReviewDTO as ReviewSchema,
  ReviewsSummaryDTO as ReviewsSummarySchema,
} from '../../../../contracts/src/reviews.ts';
import { DependencyDTO as DependencySchema, VersionDTO as VersionSchema } from '../../../../contracts/src/versions.ts';
import type {
  CommentDTO,
  CreatorCardDTO,
  DependencyDTO,
  KitCardDTO,
  ModCardDTO,
  ModDetailDTO,
  ReviewDTO,
  ReviewsSummaryDTO,
  VersionDTO,
} from '../contracts.ts';

export const mod: ModCardDTO = ModCardSchema.parse(exampleOf(ModCardSchema));
export const modDetail: ModDetailDTO = ModDetailSchema.parse(exampleOf(ModDetailSchema));
export const version: VersionDTO = VersionSchema.parse(exampleOf(VersionSchema));
export const kit: KitCardDTO = KitCardSchema.parse(exampleOf(KitCardSchema));
export const creator: CreatorCardDTO = CreatorCardSchema.parse(exampleOf(CreatorCardSchema));
export const review: ReviewDTO = ReviewSchema.parse(exampleOf(ReviewSchema));
export const reviewsSummary: ReviewsSummaryDTO = ReviewsSummarySchema.parse(exampleOf(ReviewsSummarySchema));
export const comment: CommentDTO = CommentSchema.parse(exampleOf(CommentSchema));
export const dependencies: DependencyDTO[] = examplesOf(DependencySchema).map((example) =>
  DependencySchema.parse(example),
);

/** A mod without image, broken on the current build, unrated, pending review. */
export const modWithoutImage: ModCardDTO = ModCardSchema.parse({
  ...exampleOf(ModCardSchema),
  id: 21,
  name: 'Kelvin Seek',
  slug: 'kelvin-seek',
  canonicalPath: '/mods/shokocc/kelvin-seek',
  userHandle: 'shokocc',
  userDisplayName: 'ShokoCC',
  verifiedCreator: false,
  category: { slug: 'companions', nameKey: 'taxonomy_category_companions', name: 'Companions', icon: null },
  thumbnail: null,
  ratingAvg: null,
  ratingCount: 0,
  compatStatus: 'broken',
  isFeatured: true,
  awards: [],
  status: 'pending',
  downloads: 1_982_114,
});

export const build: ModCardDTO = ModCardSchema.parse({
  ...exampleOf(ModCardSchema),
  id: 90,
  kind: 'build',
  manifestId: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
  name: 'Lakeside Fortress',
  slug: 'lakeside-fortress',
  canonicalPath: '/builds/imaxel/lakeside-fortress',
  category: { slug: 'fortress', nameKey: 'taxonomy_build_fortress', name: 'Fortress', icon: null },
  latestVersion: '0192f3a4-7c1e-7b9a-9e1d-2c4f6a8b0c1d',
});

export const betaVersion: VersionDTO = VersionSchema.parse({
  ...exampleOf(VersionSchema),
  id: 413,
  version: '1.4.0-beta.1',
  isLatest: false,
  channel: 'beta',
  publishedAt: '2026-09-28T10:00:00.000Z',
  fileSize: 1_300_000,
  compat: [],
});

export const yankedVersion: VersionDTO = VersionSchema.parse({
  ...exampleOf(VersionSchema),
  id: 400,
  version: '1.3.7',
  isLatest: false,
  status: 'yanked',
  statusReason: 'Corrupted saves on 1.0.4',
  publishedAt: '2026-08-01T10:00:00.000Z',
  fileSize: null,
  compat: [
    {
      modVersionId: 400,
      gameBuild: { id: 7, label: '1.0.4', isCurrent: true, isBreaking: true },
      status: 'broken',
      works: 1,
      partial: 2,
      broken: 9,
      weightedScore: 0.1,
      authorTested: false,
      updatedAt: '2026-09-01T10:00:00.000Z',
    },
  ],
});

export const conflict: DependencyDTO = DependencySchema.parse({
  manifestId: 'OldMenu',
  kind: 'conflicts',
  versionRange: '<2.0.0',
  state: 'removed',
  mod: null,
});

export const deletedComment: CommentDTO = CommentSchema.parse({
  ...exampleOf(CommentSchema),
  id: 230,
  status: 'deleted',
  bodyHtml: '',
  author: null,
  replies: [],
  repliesCount: 0,
});

export const anonymousReview: ReviewDTO = ReviewSchema.parse({
  ...exampleOf(ReviewSchema),
  id: 78,
  author: null,
  title: null,
  rating: 2,
  authorReply: null,
  status: 'hidden',
  isVerifiedDownload: false,
});

export const privateKit: KitCardDTO = KitCardSchema.parse({
  ...exampleOf(KitCardSchema),
  id: 6,
  visibility: 'private',
  isStaffPick: false,
  previewThumbnails: [],
  itemsCount: 0,
});

/** Markdown HTML exercising every prose hook of @sotf/markdown. */
export const proseHtml = [
  '<h2 id="md-features">Features<a class="md-anchor" href="#md-features" aria-hidden="true" tabindex="-1"></a></h2>',
  '<p>Drop the <code>AxelModMenu.dll</code> into <code>_RedLoader/Mods</code>. Made by <a class="md-mention" href="/profile/imaxel">@imaxel</a>.</p>',
  '<div class="md-alert md-alert-note" role="note"><p class="md-alert-title"><span data-md-label="alert-note">Note</span></p><p>Needs RedLoader 0.8.6+.</p></div>',
  '<div class="md-alert md-alert-tip" role="note"><p class="md-alert-title"><span data-md-label="alert-tip">Tip</span></p><p>Press F1 to open the menu.</p></div>',
  '<div class="md-alert md-alert-warning" role="note"><p class="md-alert-title"><span data-md-label="alert-warning">Warning</span></p><p>Back up your saves.</p></div>',
  '<div class="md-alert md-alert-caution" role="note"><p class="md-alert-title"><span data-md-label="alert-caution">Caution</span></p><p>Do not use online.</p></div>',
  '<ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled checked> Noclip</li><li class="task-list-item"><input type="checkbox" disabled> Map</li></ul>',
  '<p>The ending: <span class="md-spoiler" role="button" tabindex="0" aria-expanded="false" aria-label="Spoiler" data-md-label="spoiler">it was all a dream</span>.</p>',
  '<details><summary>Changelog</summary><p>Fixed ziplines.</p></details>',
  '<pre><code class="language-json">{ "Id": "AxelModMenu" }</code></pre>',
  '<table><thead><tr><th>Key</th><th>Action</th></tr></thead><tbody><tr><td>F1</td><td>Menu</td></tr></tbody></table>',
].join('');
