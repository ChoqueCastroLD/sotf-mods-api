/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mod: NonNullable<unknown>, request: NonNullable<unknown> }} Signals_Request_FulfilledInputs */

const en_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is out and fulfils the request “${i?.request}”`)
};

const es_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ya está publicado y cumple la petición «${i?.request}»`)
};

const de_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} ist erschienen und erfüllt die Anfrage „${i?.request}“`)
};

const fr_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} est publié et répond à la demande « ${i?.request} »`)
};

const it_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} è uscito e soddisfa la richiesta «${i?.request}»`)
};

const nl_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} is uit en vervult het verzoek “${i?.request}”`)
};

const pl_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} jest już dostępny i spełnia prośbę „${i?.request}”`)
};

const pt_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} já saiu e cumpre o pedido “${i?.request}”`)
};

const ru_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} вышел и выполняет запрос «${i?.request}»`)
};

const sv_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} är ute och uppfyller förfrågan ”${i?.request}”`)
};

const tr_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} yayında ve “${i?.request}” isteğini karşılıyor`)
};

const zh_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} 已发布，满足了请求“${i?.request}”`)
};

const ja_signals_request_fulfilled = /** @type {(inputs: Signals_Request_FulfilledInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} が公開され、リクエスト「${i?.request}」に応えました`)
};

/**
* | output |
* | --- |
* | "{mod} is out and fulfils the request “{request}”" |
*
* @param {Signals_Request_FulfilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_request_fulfilled = /** @type {((inputs: Signals_Request_FulfilledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Request_FulfilledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_request_fulfilled(inputs)
	if (locale === "de") return de_signals_request_fulfilled(inputs)
	if (locale === "fr") return fr_signals_request_fulfilled(inputs)
	if (locale === "it") return it_signals_request_fulfilled(inputs)
	if (locale === "nl") return nl_signals_request_fulfilled(inputs)
	if (locale === "pl") return pl_signals_request_fulfilled(inputs)
	if (locale === "pt") return pt_signals_request_fulfilled(inputs)
	if (locale === "ru") return ru_signals_request_fulfilled(inputs)
	if (locale === "sv") return sv_signals_request_fulfilled(inputs)
	if (locale === "tr") return tr_signals_request_fulfilled(inputs)
	if (locale === "zh") return zh_signals_request_fulfilled(inputs)
	if (locale === "ja") return ja_signals_request_fulfilled(inputs)
	return en_signals_request_fulfilled(inputs)
});
