/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Status_FulfilledInputs */

const en_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fulfilled`)
};

const es_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cumplidas`)
};

const de_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erfüllt`)
};

const fr_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réalisées`)
};

const it_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Realizzate`)
};

const nl_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vervuld`)
};

const pl_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zrealizowane`)
};

const pt_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atendidos`)
};

const ru_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выполнены`)
};

const sv_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uppfyllda`)
};

const tr_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tamamlandı`)
};

const zh_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已完成`)
};

const ja_requests_status_fulfilled = /** @type {(inputs: Requests_Status_FulfilledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`達成済み`)
};

/**
* | output |
* | --- |
* | "Fulfilled" |
*
* @param {Requests_Status_FulfilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_status_fulfilled = /** @type {((inputs?: Requests_Status_FulfilledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Status_FulfilledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_status_fulfilled(inputs)
	if (locale === "de") return de_requests_status_fulfilled(inputs)
	if (locale === "fr") return fr_requests_status_fulfilled(inputs)
	if (locale === "it") return it_requests_status_fulfilled(inputs)
	if (locale === "nl") return nl_requests_status_fulfilled(inputs)
	if (locale === "pl") return pl_requests_status_fulfilled(inputs)
	if (locale === "pt") return pt_requests_status_fulfilled(inputs)
	if (locale === "ru") return ru_requests_status_fulfilled(inputs)
	if (locale === "sv") return sv_requests_status_fulfilled(inputs)
	if (locale === "tr") return tr_requests_status_fulfilled(inputs)
	if (locale === "zh") return zh_requests_status_fulfilled(inputs)
	if (locale === "ja") return ja_requests_status_fulfilled(inputs)
	return en_requests_status_fulfilled(inputs)
});
