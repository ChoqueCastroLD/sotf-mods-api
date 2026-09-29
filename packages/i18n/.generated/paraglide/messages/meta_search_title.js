/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Meta_Search_TitleInputs */

const en_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Search results for “${i?.query}”`)
};

const es_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultados de búsqueda para «${i?.query}»`)
};

const de_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Suchergebnisse für „${i?.query}“`)
};

const fr_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Résultats de recherche pour « ${i?.query} »`)
};

const it_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Risultati di ricerca per «${i?.query}»`)
};

const nl_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zoekresultaten voor ‘${i?.query}’`)
};

const pl_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyniki wyszukiwania dla „${i?.query}”`)
};

const pt_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultados da pesquisa por “${i?.query}”`)
};

const ru_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Результаты поиска по запросу «${i?.query}»`)
};

const sv_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sökresultat för ”${i?.query}”`)
};

const tr_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” için arama sonuçları`)
};

const zh_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}”的搜索结果`)
};

const ja_meta_search_title = /** @type {(inputs: Meta_Search_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」の検索結果`)
};

/**
* | output |
* | --- |
* | "Search results for “{query}”" |
*
* @param {Meta_Search_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_search_title = /** @type {((inputs: Meta_Search_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Search_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_search_title(inputs)
	if (locale === "de") return de_meta_search_title(inputs)
	if (locale === "fr") return fr_meta_search_title(inputs)
	if (locale === "it") return it_meta_search_title(inputs)
	if (locale === "nl") return nl_meta_search_title(inputs)
	if (locale === "pl") return pl_meta_search_title(inputs)
	if (locale === "pt") return pt_meta_search_title(inputs)
	if (locale === "ru") return ru_meta_search_title(inputs)
	if (locale === "sv") return sv_meta_search_title(inputs)
	if (locale === "tr") return tr_meta_search_title(inputs)
	if (locale === "zh") return zh_meta_search_title(inputs)
	if (locale === "ja") return ja_meta_search_title(inputs)
	return en_meta_search_title(inputs)
});
