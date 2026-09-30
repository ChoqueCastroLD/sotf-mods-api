/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Status_AllInputs */

const en_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const de_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes`)
};

const it_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte`)
};

const nl_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const pl_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie`)
};

const pt_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos`)
};

const ru_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_requests_status_all = /** @type {(inputs: Requests_Status_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Requests_Status_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_status_all = /** @type {((inputs?: Requests_Status_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Status_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_status_all(inputs)
	if (locale === "de") return de_requests_status_all(inputs)
	if (locale === "fr") return fr_requests_status_all(inputs)
	if (locale === "it") return it_requests_status_all(inputs)
	if (locale === "nl") return nl_requests_status_all(inputs)
	if (locale === "pl") return pl_requests_status_all(inputs)
	if (locale === "pt") return pt_requests_status_all(inputs)
	if (locale === "ru") return ru_requests_status_all(inputs)
	if (locale === "sv") return sv_requests_status_all(inputs)
	if (locale === "tr") return tr_requests_status_all(inputs)
	if (locale === "zh") return zh_requests_status_all(inputs)
	if (locale === "ja") return ja_requests_status_all(inputs)
	return en_requests_status_all(inputs)
});
