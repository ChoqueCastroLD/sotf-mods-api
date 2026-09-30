/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Status_OpenInputs */

const en_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const es_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abiertas`)
};

const de_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offen`)
};

const fr_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvertes`)
};

const it_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperte`)
};

const nl_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const pl_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwarte`)
};

const pt_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abertos`)
};

const ru_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открытые`)
};

const sv_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna`)
};

const tr_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık`)
};

const zh_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开放`)
};

const ja_requests_status_open = /** @type {(inputs: Requests_Status_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受付中`)
};

/**
* | output |
* | --- |
* | "Open" |
*
* @param {Requests_Status_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_status_open = /** @type {((inputs?: Requests_Status_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Status_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_status_open(inputs)
	if (locale === "de") return de_requests_status_open(inputs)
	if (locale === "fr") return fr_requests_status_open(inputs)
	if (locale === "it") return it_requests_status_open(inputs)
	if (locale === "nl") return nl_requests_status_open(inputs)
	if (locale === "pl") return pl_requests_status_open(inputs)
	if (locale === "pt") return pt_requests_status_open(inputs)
	if (locale === "ru") return ru_requests_status_open(inputs)
	if (locale === "sv") return sv_requests_status_open(inputs)
	if (locale === "tr") return tr_requests_status_open(inputs)
	if (locale === "zh") return zh_requests_status_open(inputs)
	if (locale === "ja") return ja_requests_status_open(inputs)
	return en_requests_status_open(inputs)
});
