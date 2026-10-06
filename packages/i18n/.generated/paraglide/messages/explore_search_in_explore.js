/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_In_ExploreInputs */

const en_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter these results in the mod list`)
};

const es_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar estos resultados en la lista de mods`)
};

const de_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Ergebnisse in der Mod-Liste filtern`)
};

const fr_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer ces résultats dans la liste des mods`)
};

const it_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra questi risultati nell’elenco delle mod`)
};

const nl_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze resultaten filteren in de modlijst`)
};

const pl_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj te wyniki na liście modów`)
};

const pt_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar estes resultados na lista de mods`)
};

const ru_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отфильтровать эти результаты в списке модов`)
};

const sv_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera resultaten i modlistan`)
};

const tr_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sonuçları mod listesinde filtrele`)
};

const zh_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在模组列表中筛选这些结果`)
};

const ja_explore_search_in_explore = /** @type {(inputs: Explore_Search_In_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この結果を MOD 一覧で絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter these results in the mod list" |
*
* @param {Explore_Search_In_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_in_explore = /** @type {((inputs?: Explore_Search_In_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_In_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_in_explore(inputs)
	if (locale === "de") return de_explore_search_in_explore(inputs)
	if (locale === "fr") return fr_explore_search_in_explore(inputs)
	if (locale === "it") return it_explore_search_in_explore(inputs)
	if (locale === "nl") return nl_explore_search_in_explore(inputs)
	if (locale === "pl") return pl_explore_search_in_explore(inputs)
	if (locale === "pt") return pt_explore_search_in_explore(inputs)
	if (locale === "ru") return ru_explore_search_in_explore(inputs)
	if (locale === "sv") return sv_explore_search_in_explore(inputs)
	if (locale === "tr") return tr_explore_search_in_explore(inputs)
	if (locale === "zh") return zh_explore_search_in_explore(inputs)
	if (locale === "ja") return ja_explore_search_in_explore(inputs)
	return en_explore_search_in_explore(inputs)
});
