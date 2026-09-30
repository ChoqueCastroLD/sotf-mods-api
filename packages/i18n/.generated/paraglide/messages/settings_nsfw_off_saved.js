/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_Off_SavedInputs */

const en_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mature content is hidden`)
};

const es_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El contenido adulto está oculto`)
};

const de_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhalte für Erwachsene sind ausgeblendet`)
};

const fr_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le contenu pour adultes est masqué`)
};

const it_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I contenuti per adulti sono nascosti`)
};

const nl_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhoud voor volwassenen is verborgen`)
};

const pl_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Treści dla dorosłych są ukryte`)
};

const pt_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O conteúdo adulto está oculto`)
};

const ru_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Контент для взрослых скрыт`)
};

const sv_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vuxeninnehåll är dolt`)
};

const tr_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yetişkin içerik gizlendi`)
};

const zh_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人内容已隐藏`)
};

const ja_settings_nsfw_off_saved = /** @type {(inputs: Settings_Nsfw_Off_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`成人向けコンテンツを非表示にしました`)
};

/**
* | output |
* | --- |
* | "Mature content is hidden" |
*
* @param {Settings_Nsfw_Off_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_off_saved = /** @type {((inputs?: Settings_Nsfw_Off_SavedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_Off_SavedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_off_saved(inputs)
	if (locale === "de") return de_settings_nsfw_off_saved(inputs)
	if (locale === "fr") return fr_settings_nsfw_off_saved(inputs)
	if (locale === "it") return it_settings_nsfw_off_saved(inputs)
	if (locale === "nl") return nl_settings_nsfw_off_saved(inputs)
	if (locale === "pl") return pl_settings_nsfw_off_saved(inputs)
	if (locale === "pt") return pt_settings_nsfw_off_saved(inputs)
	if (locale === "ru") return ru_settings_nsfw_off_saved(inputs)
	if (locale === "sv") return sv_settings_nsfw_off_saved(inputs)
	if (locale === "tr") return tr_settings_nsfw_off_saved(inputs)
	if (locale === "zh") return zh_settings_nsfw_off_saved(inputs)
	if (locale === "ja") return ja_settings_nsfw_off_saved(inputs)
	return en_settings_nsfw_off_saved(inputs)
});
