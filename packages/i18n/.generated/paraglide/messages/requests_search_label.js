/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Search_LabelInputs */

const en_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search requests`)
};

const es_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar peticiones`)
};

const de_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wünsche suchen`)
};

const fr_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des demandes`)
};

const it_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca richieste`)
};

const nl_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verzoeken zoeken`)
};

const pl_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj próśb`)
};

const pt_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar pedidos`)
};

const ru_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск запросов`)
};

const sv_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök önskemål`)
};

const tr_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İstek ara`)
};

const zh_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索请求`)
};

const ja_requests_search_label = /** @type {(inputs: Requests_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リクエストを検索`)
};

/**
* | output |
* | --- |
* | "Search requests" |
*
* @param {Requests_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_search_label = /** @type {((inputs?: Requests_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_search_label(inputs)
	if (locale === "de") return de_requests_search_label(inputs)
	if (locale === "fr") return fr_requests_search_label(inputs)
	if (locale === "it") return it_requests_search_label(inputs)
	if (locale === "nl") return nl_requests_search_label(inputs)
	if (locale === "pl") return pl_requests_search_label(inputs)
	if (locale === "pt") return pt_requests_search_label(inputs)
	if (locale === "ru") return ru_requests_search_label(inputs)
	if (locale === "sv") return sv_requests_search_label(inputs)
	if (locale === "tr") return tr_requests_search_label(inputs)
	if (locale === "zh") return zh_requests_search_label(inputs)
	if (locale === "ja") return ja_requests_search_label(inputs)
	return en_requests_search_label(inputs)
});
