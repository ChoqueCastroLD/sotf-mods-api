/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Filters_Clear_SearchInputs */

const en_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear search`)
};

const es_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar la búsqueda`)
};

const de_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche leeren`)
};

const fr_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer la recherche`)
};

const it_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella la ricerca`)
};

const nl_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoekopdracht wissen`)
};

const pl_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść wyszukiwanie`)
};

const pt_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar a busca`)
};

const ru_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить поиск`)
};

const sv_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa sökningen`)
};

const tr_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aramayı temizle`)
};

const zh_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除搜索`)
};

const ja_ranger_filters_clear_search = /** @type {(inputs: Ranger_Filters_Clear_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索をクリア`)
};

/**
* | output |
* | --- |
* | "Clear search" |
*
* @param {Ranger_Filters_Clear_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_filters_clear_search = /** @type {((inputs?: Ranger_Filters_Clear_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Filters_Clear_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_filters_clear_search(inputs)
	if (locale === "de") return de_ranger_filters_clear_search(inputs)
	if (locale === "fr") return fr_ranger_filters_clear_search(inputs)
	if (locale === "it") return it_ranger_filters_clear_search(inputs)
	if (locale === "nl") return nl_ranger_filters_clear_search(inputs)
	if (locale === "pl") return pl_ranger_filters_clear_search(inputs)
	if (locale === "pt") return pt_ranger_filters_clear_search(inputs)
	if (locale === "ru") return ru_ranger_filters_clear_search(inputs)
	if (locale === "sv") return sv_ranger_filters_clear_search(inputs)
	if (locale === "tr") return tr_ranger_filters_clear_search(inputs)
	if (locale === "zh") return zh_ranger_filters_clear_search(inputs)
	if (locale === "ja") return ja_ranger_filters_clear_search(inputs)
	return en_ranger_filters_clear_search(inputs)
});
