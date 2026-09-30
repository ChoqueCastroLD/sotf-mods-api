/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Explore_Search_Heading_QueryInputs */

const en_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Results for “${i?.query}”`)
};

const es_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultados de «${i?.query}»`)
};

const de_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ergebnisse für „${i?.query}“`)
};

const fr_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Résultats pour « ${i?.query} »`)
};

const it_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risultati per «${i?.query}»`)
};

const nl_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultaten voor ‘${i?.query}’`)
};

const pl_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyniki dla „${i?.query}”`)
};

const pt_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultados para “${i?.query}”`)
};

const ru_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Результаты по запросу «${i?.query}»`)
};

const sv_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultat för ”${i?.query}”`)
};

const tr_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” için sonuçlar`)
};

const zh_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}”的搜索结果`)
};

const ja_explore_search_heading_query = /** @type {(inputs: Explore_Search_Heading_QueryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」の検索結果`)
};

/**
* | output |
* | --- |
* | "Results for “{query}”" |
*
* @param {Explore_Search_Heading_QueryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_heading_query = /** @type {((inputs: Explore_Search_Heading_QueryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Heading_QueryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_heading_query(inputs)
	if (locale === "de") return de_explore_search_heading_query(inputs)
	if (locale === "fr") return fr_explore_search_heading_query(inputs)
	if (locale === "it") return it_explore_search_heading_query(inputs)
	if (locale === "nl") return nl_explore_search_heading_query(inputs)
	if (locale === "pl") return pl_explore_search_heading_query(inputs)
	if (locale === "pt") return pt_explore_search_heading_query(inputs)
	if (locale === "ru") return ru_explore_search_heading_query(inputs)
	if (locale === "sv") return sv_explore_search_heading_query(inputs)
	if (locale === "tr") return tr_explore_search_heading_query(inputs)
	if (locale === "zh") return zh_explore_search_heading_query(inputs)
	if (locale === "ja") return ja_explore_search_heading_query(inputs)
	return en_explore_search_heading_query(inputs)
});
