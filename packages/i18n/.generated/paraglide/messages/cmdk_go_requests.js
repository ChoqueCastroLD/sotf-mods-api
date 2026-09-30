/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_RequestsInputs */

const en_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requests`)
};

const es_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Peticiones`)
};

const de_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wünsche`)
};

const fr_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demandes`)
};

const it_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Richieste`)
};

const nl_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoeken`)
};

const pl_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prośby`)
};

const pt_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedidos`)
};

const ru_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросы`)
};

const sv_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskemål`)
};

const tr_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstekler`)
};

const zh_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求`)
};

const ja_cmdk_go_requests = /** @type {(inputs: Cmdk_Go_RequestsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエスト`)
};

/**
* | output |
* | --- |
* | "Requests" |
*
* @param {Cmdk_Go_RequestsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_requests = /** @type {((inputs?: Cmdk_Go_RequestsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_RequestsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_requests(inputs)
	if (locale === "de") return de_cmdk_go_requests(inputs)
	if (locale === "fr") return fr_cmdk_go_requests(inputs)
	if (locale === "it") return it_cmdk_go_requests(inputs)
	if (locale === "nl") return nl_cmdk_go_requests(inputs)
	if (locale === "pl") return pl_cmdk_go_requests(inputs)
	if (locale === "pt") return pt_cmdk_go_requests(inputs)
	if (locale === "ru") return ru_cmdk_go_requests(inputs)
	if (locale === "sv") return sv_cmdk_go_requests(inputs)
	if (locale === "tr") return tr_cmdk_go_requests(inputs)
	if (locale === "zh") return zh_cmdk_go_requests(inputs)
	if (locale === "ja") return ja_cmdk_go_requests(inputs)
	return en_cmdk_go_requests(inputs)
});
