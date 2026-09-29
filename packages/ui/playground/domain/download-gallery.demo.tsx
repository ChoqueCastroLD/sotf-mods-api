import { useState } from 'react';
import { DownloadSplitButton, downloadOptionOf, GalleryStrip } from '../../src/domain/index.ts';
import { betaVersion, modDetail, version, yankedVersion } from '../../src/domain/test/fixtures.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Download and gallery · DownloadSplitButton, GalleryStrip';

export default function DownloadGalleryDemo() {
  const [state, setState] = useState<'idle' | 'done'>('idle');
  const [selected, setSelected] = useState(0);
  const images = [...modDetail.gallery, ...modDetail.gallery.map((image) => ({ ...image, url: `${image.url}?2` }))];
  return (
    <DemoI18n>
      <div className="flex flex-col gap-8">
        <DemoRow label="DownloadSplitButton (click: the page sets state=done)">
          <div className="flex max-w-md flex-col gap-4">
            <DownloadSplitButton
              primary={downloadOptionOf(version)}
              others={[downloadOptionOf(betaVersion), downloadOptionOf(yankedVersion)]}
              allVersionsHref="#versions"
              state={state}
              glow
              onDownload={(_option, event) => {
                event.preventDefault();
                setState('done');
              }}
            />
            <DownloadSplitButton primary={{ version: '0.9.0', href: '#download' }} size="md" />
          </div>
        </DemoRow>
        <DemoRow label="GalleryStrip · links (no JavaScript) and buttons">
          <GalleryStrip images={images} video={modDetail.video} />
          <GalleryStrip images={images} onSelect={setSelected} selectedIndex={selected} />
        </DemoRow>
      </div>
    </DemoI18n>
  );
}
