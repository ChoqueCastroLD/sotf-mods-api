/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Compat_Prompt_HintInputs */

const en_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A new game build is out and you have downloads to report on.`)
};

const es_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salió una nueva versión del juego y tienes descargas sobre las que informar.`)
};

const de_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein neuer Spielbuild ist da und du hast Downloads, zu denen du berichten kannst.`)
};

const fr_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une nouvelle version du jeu est sortie et vous avez des téléchargements à signaler.`)
};

const it_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È uscita una nuova build del gioco e hai download di cui riferire.`)
};

const nl_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er is een nieuwe game-build uit en je hebt downloads om over te rapporteren.`)
};

const pl_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyszła nowa wersja gry, a Ty masz pobrania do zgłoszenia.`)
};

const pt_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saiu uma nova build do jogo e você tem downloads para relatar.`)
};

const ru_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вышла новая сборка игры, и у вас есть загрузки, о которых можно сообщить.`)
};

const sv_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ny spelversion är ute och du har nedladdningar att rapportera om.`)
};

const tr_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir oyun sürümü çıktı ve bildirebileceğin indirmelerin var.`)
};

const zh_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新的游戏版本已发布，你有可以反馈的下载。`)
};

const ja_settings_notif_compat_prompt_hint = /** @type {(inputs: Settings_Notif_Compat_Prompt_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいゲームビルドが公開され、報告できるダウンロードがあります。`)
};

/**
* | output |
* | --- |
* | "A new game build is out and you have downloads to report on." |
*
* @param {Settings_Notif_Compat_Prompt_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_compat_prompt_hint = /** @type {((inputs?: Settings_Notif_Compat_Prompt_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Compat_Prompt_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_compat_prompt_hint(inputs)
	if (locale === "de") return de_settings_notif_compat_prompt_hint(inputs)
	if (locale === "fr") return fr_settings_notif_compat_prompt_hint(inputs)
	if (locale === "it") return it_settings_notif_compat_prompt_hint(inputs)
	if (locale === "nl") return nl_settings_notif_compat_prompt_hint(inputs)
	if (locale === "pl") return pl_settings_notif_compat_prompt_hint(inputs)
	if (locale === "pt") return pt_settings_notif_compat_prompt_hint(inputs)
	if (locale === "ru") return ru_settings_notif_compat_prompt_hint(inputs)
	if (locale === "sv") return sv_settings_notif_compat_prompt_hint(inputs)
	if (locale === "tr") return tr_settings_notif_compat_prompt_hint(inputs)
	if (locale === "zh") return zh_settings_notif_compat_prompt_hint(inputs)
	if (locale === "ja") return ja_settings_notif_compat_prompt_hint(inputs)
	return en_settings_notif_compat_prompt_hint(inputs)
});
