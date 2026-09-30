/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_TitleInputs */

const en_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mature content`)
};

const es_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido adulto`)
};

const de_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene`)
};

const fr_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu pour adultes`)
};

const it_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuti per adulti`)
};

const nl_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen`)
};

const pl_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treści dla dorosłych`)
};

const pt_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo adulto`)
};

const ru_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Контент для взрослых`)
};

const sv_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuxeninnehåll`)
};

const tr_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içerik`)
};

const zh_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人内容`)
};

const ja_settings_nsfw_title = /** @type {(inputs: Settings_Nsfw_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツ`)
};

/**
* | output |
* | --- |
* | "Mature content" |
*
* @param {Settings_Nsfw_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_title = /** @type {((inputs?: Settings_Nsfw_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_title(inputs)
	if (locale === "de") return de_settings_nsfw_title(inputs)
	if (locale === "fr") return fr_settings_nsfw_title(inputs)
	if (locale === "it") return it_settings_nsfw_title(inputs)
	if (locale === "nl") return nl_settings_nsfw_title(inputs)
	if (locale === "pl") return pl_settings_nsfw_title(inputs)
	if (locale === "pt") return pt_settings_nsfw_title(inputs)
	if (locale === "ru") return ru_settings_nsfw_title(inputs)
	if (locale === "sv") return sv_settings_nsfw_title(inputs)
	if (locale === "tr") return tr_settings_nsfw_title(inputs)
	if (locale === "zh") return zh_settings_nsfw_title(inputs)
	if (locale === "ja") return ja_settings_nsfw_title(inputs)
	return en_settings_nsfw_title(inputs)
});
