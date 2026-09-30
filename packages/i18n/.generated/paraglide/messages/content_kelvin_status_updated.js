/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_Status_UpdatedInputs */

const en_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Last release`)
};

const es_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última publicación`)
};

const de_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letztes Release`)
};

const fr_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière publication`)
};

const it_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima pubblicazione`)
};

const nl_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste release`)
};

const pl_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie wydanie`)
};

const pt_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Último lançamento`)
};

const ru_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последний релиз`)
};

const sv_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste släpp`)
};

const tr_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son yayın`)
};

const zh_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近发布`)
};

const ja_content_kelvin_status_updated = /** @type {(inputs: Content_Kelvin_Status_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最終リリース`)
};

/**
* | output |
* | --- |
* | "Last release" |
*
* @param {Content_Kelvin_Status_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_status_updated = /** @type {((inputs?: Content_Kelvin_Status_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Status_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_status_updated(inputs)
	if (locale === "de") return de_content_kelvin_status_updated(inputs)
	if (locale === "fr") return fr_content_kelvin_status_updated(inputs)
	if (locale === "it") return it_content_kelvin_status_updated(inputs)
	if (locale === "nl") return nl_content_kelvin_status_updated(inputs)
	if (locale === "pl") return pl_content_kelvin_status_updated(inputs)
	if (locale === "pt") return pt_content_kelvin_status_updated(inputs)
	if (locale === "ru") return ru_content_kelvin_status_updated(inputs)
	if (locale === "sv") return sv_content_kelvin_status_updated(inputs)
	if (locale === "tr") return tr_content_kelvin_status_updated(inputs)
	if (locale === "zh") return zh_content_kelvin_status_updated(inputs)
	if (locale === "ja") return ja_content_kelvin_status_updated(inputs)
	return en_content_kelvin_status_updated(inputs)
});
