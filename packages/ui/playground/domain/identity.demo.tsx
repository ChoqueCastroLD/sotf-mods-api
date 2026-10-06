import { TrustedMark } from '../../src/domain/index.ts';
import { DemoI18n, DemoRow } from './demo-kit.tsx';

export const title = 'Identity · TrustedMark';

export default function IdentityDemo() {
  return (
    <DemoI18n>
      <div className="flex flex-col gap-6">
        <DemoRow label="TrustedMark">
          <div className="flex items-center gap-4">
            <TrustedMark />
            <TrustedMark withLabel />
          </div>
        </DemoRow>
      </div>
    </DemoI18n>
  );
}
