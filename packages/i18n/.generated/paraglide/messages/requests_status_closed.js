/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Status_ClosedInputs */

const en_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Closed`)
};

const es_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerradas`)
};

const de_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geschlossen`)
};

const fr_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fermées`)
};

const it_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiuse`)
};

const nl_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gesloten`)
};

const pl_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zamknięte`)
};

const pt_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fechados`)
};

const ru_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Закрытые`)
};

const sv_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stängda`)
};

const tr_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapalı`)
};

const zh_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已关闭`)
};

const ja_requests_status_closed = /** @type {(inputs: Requests_Status_ClosedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了`)
};

/**
* | output |
* | --- |
* | "Closed" |
*
* @param {Requests_Status_ClosedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_status_closed = /** @type {((inputs?: Requests_Status_ClosedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Status_ClosedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_status_closed(inputs)
	if (locale === "de") return de_requests_status_closed(inputs)
	if (locale === "fr") return fr_requests_status_closed(inputs)
	if (locale === "it") return it_requests_status_closed(inputs)
	if (locale === "nl") return nl_requests_status_closed(inputs)
	if (locale === "pl") return pl_requests_status_closed(inputs)
	if (locale === "pt") return pt_requests_status_closed(inputs)
	if (locale === "ru") return ru_requests_status_closed(inputs)
	if (locale === "sv") return sv_requests_status_closed(inputs)
	if (locale === "tr") return tr_requests_status_closed(inputs)
	if (locale === "zh") return zh_requests_status_closed(inputs)
	if (locale === "ja") return ja_requests_status_closed(inputs)
	return en_requests_status_closed(inputs)
});
