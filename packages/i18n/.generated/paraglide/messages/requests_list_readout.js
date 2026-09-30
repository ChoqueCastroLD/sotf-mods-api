/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_List_ReadoutInputs */

const en_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request board`)
};

const es_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tablón de peticiones`)
};

const de_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wunschliste`)
};

const fr_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tableau des demandes`)
};

const it_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bacheca delle richieste`)
};

const nl_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoekenbord`)
};

const pl_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tablica próśb`)
};

const pt_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quadro de pedidos`)
};

const ru_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Доска запросов`)
};

const sv_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önskelista`)
};

const tr_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek panosu`)
};

const zh_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请求板`)
};

const ja_requests_list_readout = /** @type {(inputs: Requests_List_ReadoutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストボード`)
};

/**
* | output |
* | --- |
* | "Request board" |
*
* @param {Requests_List_ReadoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_list_readout = /** @type {((inputs?: Requests_List_ReadoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_List_ReadoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_list_readout(inputs)
	if (locale === "de") return de_requests_list_readout(inputs)
	if (locale === "fr") return fr_requests_list_readout(inputs)
	if (locale === "it") return it_requests_list_readout(inputs)
	if (locale === "nl") return nl_requests_list_readout(inputs)
	if (locale === "pl") return pl_requests_list_readout(inputs)
	if (locale === "pt") return pt_requests_list_readout(inputs)
	if (locale === "ru") return ru_requests_list_readout(inputs)
	if (locale === "sv") return sv_requests_list_readout(inputs)
	if (locale === "tr") return tr_requests_list_readout(inputs)
	if (locale === "zh") return zh_requests_list_readout(inputs)
	if (locale === "ja") return ja_requests_list_readout(inputs)
	return en_requests_list_readout(inputs)
});
