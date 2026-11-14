/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Feature_Redloader_TextInputs */

const en_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Install, repair or update RedLoader, the mod loader, without touching the game files yourself.`)
};

const es_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instala, repara o actualiza RedLoader, el cargador de mods, sin tocar tú los archivos del juego.`)
};

const de_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installiere, repariere oder aktualisiere RedLoader, den Mod-Loader, ohne selbst Spieldateien anzufassen.`)
};

const fr_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installez, réparez ou mettez à jour RedLoader, le chargeur de mods, sans toucher vous-même aux fichiers du jeu.`)
};

const it_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installa, ripara o aggiorna RedLoader, il caricatore di mod, senza toccare tu i file del gioco.`)
};

const nl_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installeer, repareer of update RedLoader, de modloader, zonder zelf aan de gamebestanden te zitten.`)
};

const pl_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instaluj, naprawiaj lub aktualizuj RedLoader, loader modów, bez ręcznego grzebania w plikach gry.`)
};

const pt_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instale, repare ou atualize o RedLoader, o carregador de mods, sem mexer você mesmo nos arquivos do jogo.`)
};

const ru_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Устанавливайте, чините и обновляйте RedLoader, загрузчик модов, не трогая файлы игры вручную.`)
};

const sv_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installera, reparera eller uppdatera RedLoader, moddladdaren, utan att röra spelfilerna själv.`)
};

const tr_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yükleyici RedLoader'ı oyun dosyalarına elle dokunmadan kur, onar veya güncelle.`)
};

const zh_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装、修复或更新模组加载器 RedLoader，无需手动修改游戏文件。`)
};

const ja_manager_feature_redloader_text = /** @type {(inputs: Manager_Feature_Redloader_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ローダーの RedLoader を、ゲームファイルを自分で触らずにインストール・修復・更新できます。`)
};

/**
* | output |
* | --- |
* | "Install, repair or update RedLoader, the mod loader, without touching the game files yourself." |
*
* @param {Manager_Feature_Redloader_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_feature_redloader_text = /** @type {((inputs?: Manager_Feature_Redloader_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Feature_Redloader_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_feature_redloader_text(inputs)
	if (locale === "de") return de_manager_feature_redloader_text(inputs)
	if (locale === "fr") return fr_manager_feature_redloader_text(inputs)
	if (locale === "it") return it_manager_feature_redloader_text(inputs)
	if (locale === "nl") return nl_manager_feature_redloader_text(inputs)
	if (locale === "pl") return pl_manager_feature_redloader_text(inputs)
	if (locale === "pt") return pt_manager_feature_redloader_text(inputs)
	if (locale === "ru") return ru_manager_feature_redloader_text(inputs)
	if (locale === "sv") return sv_manager_feature_redloader_text(inputs)
	if (locale === "tr") return tr_manager_feature_redloader_text(inputs)
	if (locale === "zh") return zh_manager_feature_redloader_text(inputs)
	if (locale === "ja") return ja_manager_feature_redloader_text(inputs)
	return en_manager_feature_redloader_text(inputs)
});
