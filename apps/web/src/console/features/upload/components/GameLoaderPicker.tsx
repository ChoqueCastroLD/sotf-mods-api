/**
 * Game and mod loader of a new mod (step ①, before the file). Sons of the Forest + RedLoader keeps
 * the RedLoader checks (zip with a manifest); any other choice is a free upload: any file, security
 * checks only, and the version number is typed in the Release step.
 */
import { GAME_NAMES, LOADER_NAMES, LOADERS_BY_GAME, type ModGame, type ModLoader } from '@sotf/contracts/games';
import { RadioCardGroup } from '@sotf/ui/radio-card';
import { ut } from '../i18n.ts';

export interface GameLoaderPickerProps {
  game: ModGame;
  loader: ModLoader;
  onChange: (next: { game: ModGame; loader: ModLoader }) => void;
  disabled?: boolean;
}

export function loaderName(loader: ModLoader): string {
  return loader === 'other' ? ut('upload_loader_other') : LOADER_NAMES[loader];
}

export function GameLoaderPicker({ game, loader, onChange, disabled = false }: GameLoaderPickerProps) {
  const loaders = LOADERS_BY_GAME[game];
  return (
    <div className="flex flex-col gap-4">
      <RadioCardGroup<ModGame>
        legend={ut('upload_game_label')}
        description={ut('upload_game_hint')}
        columns={2}
        disabled={disabled}
        value={game}
        onValueChange={(next) => {
          const options = LOADERS_BY_GAME[next];
          onChange({ game: next, loader: options.includes(loader) ? loader : (options[0] ?? 'other') });
        }}
        options={(['sotf', 'the-forest'] as const).map((value) => ({ value, title: GAME_NAMES[value] }))}
      />
      <RadioCardGroup<ModLoader>
        legend={ut('upload_modloader_label')}
        columns={2}
        disabled={disabled}
        value={loader}
        onValueChange={(next) => onChange({ game, loader: next })}
        options={loaders.map((value) => ({ value, title: loaderName(value) }))}
      />
    </div>
  );
}
