/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Meta_Search_Title_EmptyInputs */

const en_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const es_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const de_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche`)
};

const fr_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher`)
};

const it_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca`)
};

const nl_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken`)
};

const pl_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj`)
};

const pt_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar`)
};

const ru_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск`)
};

const sv_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök`)
};

const tr_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ara`)
};

const zh_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const ja_meta_search_title_empty = /** @type {(inputs: Meta_Search_Title_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Meta_Search_Title_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_search_title_empty = /** @type {((inputs?: Meta_Search_Title_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Search_Title_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_search_title_empty(inputs)
	if (locale === "de") return de_meta_search_title_empty(inputs)
	if (locale === "fr") return fr_meta_search_title_empty(inputs)
	if (locale === "it") return it_meta_search_title_empty(inputs)
	if (locale === "nl") return nl_meta_search_title_empty(inputs)
	if (locale === "pl") return pl_meta_search_title_empty(inputs)
	if (locale === "pt") return pt_meta_search_title_empty(inputs)
	if (locale === "ru") return ru_meta_search_title_empty(inputs)
	if (locale === "sv") return sv_meta_search_title_empty(inputs)
	if (locale === "tr") return tr_meta_search_title_empty(inputs)
	if (locale === "zh") return zh_meta_search_title_empty(inputs)
	if (locale === "ja") return ja_meta_search_title_empty(inputs)
	return en_meta_search_title_empty(inputs)
});
