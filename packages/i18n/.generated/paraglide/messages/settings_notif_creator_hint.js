/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Creator_HintInputs */

const en_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A creator you follow published something new.`)
};

const es_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un creador al que sigues ha publicado algo nuevo.`)
};

const de_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Creator, dem du folgst, hat etwas Neues veröffentlicht.`)
};

const fr_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un créateur que vous suivez a publié quelque chose de nouveau.`)
};

const it_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un creatore che segui ha pubblicato qualcosa di nuovo.`)
};

const nl_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een maker die je volgt heeft iets nieuws gepubliceerd.`)
};

const pl_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca, którego obserwujesz, opublikował coś nowego.`)
};

const pt_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um criador que você segue publicou algo novo.`)
};

const ru_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор, на которого вы подписаны, опубликовал что-то новое.`)
};

const sv_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En skapare du följer har publicerat något nytt.`)
};

const tr_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin bir yapımcı yeni bir şey yayımladı.`)
};

const zh_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的创作者发布了新内容。`)
};

const ja_settings_notif_creator_hint = /** @type {(inputs: Settings_Notif_Creator_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中のクリエイターが新しいものを公開しました。`)
};

/**
* | output |
* | --- |
* | "A creator you follow published something new." |
*
* @param {Settings_Notif_Creator_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_creator_hint = /** @type {((inputs?: Settings_Notif_Creator_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Creator_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_creator_hint(inputs)
	if (locale === "de") return de_settings_notif_creator_hint(inputs)
	if (locale === "fr") return fr_settings_notif_creator_hint(inputs)
	if (locale === "it") return it_settings_notif_creator_hint(inputs)
	if (locale === "nl") return nl_settings_notif_creator_hint(inputs)
	if (locale === "pl") return pl_settings_notif_creator_hint(inputs)
	if (locale === "pt") return pt_settings_notif_creator_hint(inputs)
	if (locale === "ru") return ru_settings_notif_creator_hint(inputs)
	if (locale === "sv") return sv_settings_notif_creator_hint(inputs)
	if (locale === "tr") return tr_settings_notif_creator_hint(inputs)
	if (locale === "zh") return zh_settings_notif_creator_hint(inputs)
	if (locale === "ja") return ja_settings_notif_creator_hint(inputs)
	return en_settings_notif_creator_hint(inputs)
});
