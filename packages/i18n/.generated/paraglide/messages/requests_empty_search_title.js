/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Requests_Empty_Search_TitleInputs */

const en_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No requests for “${i?.query}”`)
};

const es_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sin peticiones para «${i?.query}»`)
};

const de_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keine Wünsche für „${i?.query}“`)
};

const fr_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucune demande pour « ${i?.query} »`)
};

const it_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessuna richiesta per «${i?.query}»`)
};

const nl_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen verzoeken voor “${i?.query}”`)
};

const pl_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Brak próśb dla „${i?.query}”`)
};

const pt_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum pedido para “${i?.query}”`)
};

const ru_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`По запросу «${i?.query}» ничего не найдено`)
};

const sv_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inga önskemål för ”${i?.query}”`)
};

const tr_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” için istek yok`)
};

const zh_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有找到与“${i?.query}”相关的请求`)
};

const ja_requests_empty_search_title = /** @type {(inputs: Requests_Empty_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」に一致するリクエストはありません`)
};

/**
* | output |
* | --- |
* | "No requests for “{query}”" |
*
* @param {Requests_Empty_Search_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_empty_search_title = /** @type {((inputs: Requests_Empty_Search_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Empty_Search_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_empty_search_title(inputs)
	if (locale === "de") return de_requests_empty_search_title(inputs)
	if (locale === "fr") return fr_requests_empty_search_title(inputs)
	if (locale === "it") return it_requests_empty_search_title(inputs)
	if (locale === "nl") return nl_requests_empty_search_title(inputs)
	if (locale === "pl") return pl_requests_empty_search_title(inputs)
	if (locale === "pt") return pt_requests_empty_search_title(inputs)
	if (locale === "ru") return ru_requests_empty_search_title(inputs)
	if (locale === "sv") return sv_requests_empty_search_title(inputs)
	if (locale === "tr") return tr_requests_empty_search_title(inputs)
	if (locale === "zh") return zh_requests_empty_search_title(inputs)
	if (locale === "ja") return ja_requests_empty_search_title(inputs)
	return en_requests_empty_search_title(inputs)
});
