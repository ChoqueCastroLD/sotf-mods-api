/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Clear_InputInputs */

const en_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear the search`)
};

const es_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar la búsqueda`)
};

const de_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche leeren`)
};

const fr_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer la recherche`)
};

const it_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella la ricerca`)
};

const nl_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoekopdracht wissen`)
};

const pl_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść wyszukiwanie`)
};

const pt_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar a pesquisa`)
};

const ru_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить поиск`)
};

const sv_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa sökningen`)
};

const tr_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aramayı temizle`)
};

const zh_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清空搜索`)
};

const ja_explore_search_clear_input = /** @type {(inputs: Explore_Search_Clear_InputInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索をクリア`)
};

/**
* | output |
* | --- |
* | "Clear the search" |
*
* @param {Explore_Search_Clear_InputInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_clear_input = /** @type {((inputs?: Explore_Search_Clear_InputInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Clear_InputInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_clear_input(inputs)
	if (locale === "de") return de_explore_search_clear_input(inputs)
	if (locale === "fr") return fr_explore_search_clear_input(inputs)
	if (locale === "it") return it_explore_search_clear_input(inputs)
	if (locale === "nl") return nl_explore_search_clear_input(inputs)
	if (locale === "pl") return pl_explore_search_clear_input(inputs)
	if (locale === "pt") return pt_explore_search_clear_input(inputs)
	if (locale === "ru") return ru_explore_search_clear_input(inputs)
	if (locale === "sv") return sv_explore_search_clear_input(inputs)
	if (locale === "tr") return tr_explore_search_clear_input(inputs)
	if (locale === "zh") return zh_explore_search_clear_input(inputs)
	if (locale === "ja") return ja_explore_search_clear_input(inputs)
	return en_explore_search_clear_input(inputs)
});
