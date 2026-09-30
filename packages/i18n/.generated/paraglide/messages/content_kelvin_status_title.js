/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Status_TitleInputs */

const en_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status on SOTF Mods`)
};

const es_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado en SOTF Mods`)
};

const de_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status auf SOTF Mods`)
};

const fr_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État sur SOTF Mods`)
};

const it_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato su SOTF Mods`)
};

const nl_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status op SOTF Mods`)
};

const pl_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan na SOTF Mods`)
};

const pt_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status no SOTF Mods`)
};

const ru_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статус на SOTF Mods`)
};

const sv_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status på SOTF Mods`)
};

const tr_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods’taki durumu`)
};

const zh_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在 SOTF Mods 上的状态`)
};

const ja_content_kelvin_status_title = /** @type {(inputs: Content_Kelvin_Status_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods での状態`)
};

/**
* | output |
* | --- |
* | "Status on SOTF Mods" |
*
* @param {Content_Kelvin_Status_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_status_title = /** @type {((inputs?: Content_Kelvin_Status_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Status_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_status_title(inputs)
	if (locale === "de") return de_content_kelvin_status_title(inputs)
	if (locale === "fr") return fr_content_kelvin_status_title(inputs)
	if (locale === "it") return it_content_kelvin_status_title(inputs)
	if (locale === "nl") return nl_content_kelvin_status_title(inputs)
	if (locale === "pl") return pl_content_kelvin_status_title(inputs)
	if (locale === "pt") return pt_content_kelvin_status_title(inputs)
	if (locale === "ru") return ru_content_kelvin_status_title(inputs)
	if (locale === "sv") return sv_content_kelvin_status_title(inputs)
	if (locale === "tr") return tr_content_kelvin_status_title(inputs)
	if (locale === "zh") return zh_content_kelvin_status_title(inputs)
	if (locale === "ja") return ja_content_kelvin_status_title(inputs)
	return en_content_kelvin_status_title(inputs)
});
