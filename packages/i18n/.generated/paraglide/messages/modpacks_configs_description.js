/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Configs_DescriptionInputs */

const en_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ship your mod settings with the modpack. Zip the files with their folders as they are in the game folder, for example UserData/AxelsModMenu.cfg. SotF Mods Manager copies them into the game when someone installs the modpack.`)
};

const es_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incluye tus ajustes de los mods en el modpack. Comprime los archivos con sus carpetas tal como están en la carpeta del juego, por ejemplo UserData/AxelsModMenu.cfg. SotF Mods Manager los copia al juego cuando alguien instala el modpack.`)
};

const de_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liefere deine Mod-Einstellungen mit dem Modpack aus. Packe die Dateien mit ihren Ordnern so in ein Zip, wie sie im Spielordner liegen, zum Beispiel UserData/AxelsModMenu.cfg. SotF Mods Manager kopiert sie ins Spiel, wenn jemand das Modpack installiert.`)
};

const fr_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Livrez vos réglages de mods avec le modpack. Compressez les fichiers avec leurs dossiers tels qu’ils sont dans le dossier du jeu, par exemple UserData/AxelsModMenu.cfg. SotF Mods Manager les copie dans le jeu quand quelqu’un installe le modpack.`)
};

const it_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Includi le tue impostazioni delle mod nel modpack. Comprimi i file con le loro cartelle come sono nella cartella del gioco, per esempio UserData/AxelsModMenu.cfg. SotF Mods Manager li copia nel gioco quando qualcuno installa il modpack.`)
};

const nl_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lever je mod-instellingen mee met de modpack. Zip de bestanden met hun mappen zoals ze in de gamemap staan, bijvoorbeeld UserData/AxelsModMenu.cfg. SotF Mods Manager kopieert ze naar de game als iemand de modpack installeert.`)
};

const pl_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dołącz swoje ustawienia modów do modpacka. Spakuj pliki razem z folderami tak, jak są w folderze gry, na przykład UserData/AxelsModMenu.cfg. SotF Mods Manager kopiuje je do gry, gdy ktoś instaluje modpack.`)
};

const pt_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inclua suas configurações dos mods no modpack. Compacte os arquivos com as pastas como estão na pasta do jogo, por exemplo UserData/AxelsModMenu.cfg. O SotF Mods Manager copia tudo para o jogo quando alguém instala o modpack.`)
};

const ru_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавьте свои настройки модов в модпак. Упакуйте файлы вместе с папками так, как они лежат в папке игры, например UserData/AxelsModMenu.cfg. SotF Mods Manager скопирует их в игру при установке модпака.`)
};

const sv_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka med dina moddinställningar i modpaketet. Packa filerna med sina mappar som de ligger i spelmappen, till exempel UserData/AxelsModMenu.cfg. SotF Mods Manager kopierar dem till spelet när någon installerar modpaketet.`)
};

const tr_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ayarlarını mod paketiyle birlikte gönder. Dosyaları oyun klasöründeki klasör yapısıyla zip'le, örneğin UserData/AxelsModMenu.cfg. Biri mod paketini kurduğunda SotF Mods Manager bunları oyuna kopyalar.`)
};

const zh_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把你的模组设置随整合包一起提供。按游戏文件夹中的结构连同文件夹一起压缩，例如 UserData/AxelsModMenu.cfg。有人安装整合包时，SotF Mods Manager 会把它们复制到游戏中。`)
};

const ja_modpacks_configs_description = /** @type {(inputs: Modpacks_Configs_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod の設定を Modパックと一緒に配布できます。ゲームフォルダ内と同じフォルダ構成のまま zip にしてください（例：UserData/AxelsModMenu.cfg）。Modパックをインストールすると、SotF Mods Manager がゲームにコピーします。`)
};

/**
* | output |
* | --- |
* | "Ship your mod settings with the modpack. Zip the files with their folders as they are in the game folder, for example UserData/AxelsModMenu.cfg. SotF Mods Ma..." |
*
* @param {Modpacks_Configs_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_configs_description = /** @type {((inputs?: Modpacks_Configs_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Configs_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_configs_description(inputs)
	if (locale === "de") return de_modpacks_configs_description(inputs)
	if (locale === "fr") return fr_modpacks_configs_description(inputs)
	if (locale === "it") return it_modpacks_configs_description(inputs)
	if (locale === "nl") return nl_modpacks_configs_description(inputs)
	if (locale === "pl") return pl_modpacks_configs_description(inputs)
	if (locale === "pt") return pt_modpacks_configs_description(inputs)
	if (locale === "ru") return ru_modpacks_configs_description(inputs)
	if (locale === "sv") return sv_modpacks_configs_description(inputs)
	if (locale === "tr") return tr_modpacks_configs_description(inputs)
	if (locale === "zh") return zh_modpacks_configs_description(inputs)
	if (locale === "ja") return ja_modpacks_configs_description(inputs)
	return en_modpacks_configs_description(inputs)
});
