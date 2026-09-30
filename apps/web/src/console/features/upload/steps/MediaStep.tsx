/**
 * Step ④ «Media» (PLAN §7.5): cover (16:9 crop in the browser), gallery of up to 10 images (drag to
 * order, alt text, delete one by one) and a YouTube video.
 */
import { Field } from '@sotf/ui/field';
import { Input } from '@sotf/ui/input';
import { useState } from 'react';
import { CoverCropper } from '../components/CoverCropper.tsx';
import { GalleryEditor } from '../components/GalleryEditor.tsx';
import { ut } from '../i18n.ts';
import { isYouTubeUrl } from '../lib/validate.ts';
import type { DraftData, UpdateData } from '../types.ts';
import { FieldGroup, StepHeader } from './StepHeader.tsx';

export interface MediaStepProps {
  kind: 'mod' | 'build';
  data: DraftData;
  update: UpdateData;
  headingId: string;
}

export function MediaStep({ kind, data, update, headingId }: MediaStepProps) {
  const [videoTouched, setVideoTouched] = useState(false);
  const video = data.videoUrl ?? '';
  const videoError = videoTouched && video && !isYouTubeUrl(video) ? ut('upload_error_youtube') : null;

  return (
    <div className="flex flex-col gap-5">
      <StepHeader id={headingId} title={ut('upload_media_title')} description={ut('upload_media_intro')} />

      <FieldGroup id="upload-group-cover" title={ut('upload_cover_label')} description={ut('upload_cover_description')}>
        <CoverCropper
          id="upload-cover"
          value={data.thumbnail}
          onChange={(thumbnail) => update((d) => ({ ...d, thumbnail }))}
          {...(kind === 'build' ? { fallbackHint: ut('upload_cover_build_fallback') } : {})}
        />
      </FieldGroup>

      <FieldGroup
        id="upload-group-gallery"
        title={ut('upload_gallery_label')}
        description={ut('upload_gallery_description')}
      >
        <GalleryEditor
          id="upload-gallery"
          value={data.gallery ?? []}
          onChange={(gallery) => update((d) => ({ ...d, gallery }))}
        />
      </FieldGroup>

      <FieldGroup id="upload-group-video" title={ut('upload_video_group')}>
        <Field label={ut('upload_video_label')} description={ut('upload_video_hint')} error={videoError} optional>
          <Input
            type="url"
            inputMode="url"
            placeholder="https://www.youtube.com/watch?v=…"
            value={video}
            onChange={(event) => {
              const next = event.currentTarget.value.trim();
              update((d) => ({ ...d, videoUrl: next ? next : null }));
            }}
            onBlur={() => setVideoTouched(true)}
          />
        </Field>
      </FieldGroup>
    </div>
  );
}
