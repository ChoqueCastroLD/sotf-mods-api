/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Builds_LabelInputs */

const en_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search builds`)
};

const es_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar builds`)
};

const de_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds suchen`)
};

const fr_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des builds`)
};

const it_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca build`)
};

const nl_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds zoeken`)
};

const pl_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj buildów`)
};

const pt_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar builds`)
};

const ru_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск построек`)
};

const sv_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök byggen`)
};

const tr_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı ara`)
};

const zh_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索建筑`)
};

const ja_explore_search_builds_label = /** @type {(inputs: Explore_Search_Builds_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築を検索`)
};

/**
* | output |
* | --- |
* | "Search builds" |
*
* @param {Explore_Search_Builds_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_builds_label = /** @type {((inputs?: Explore_Search_Builds_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Builds_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_builds_label(inputs)
	if (locale === "de") return de_explore_search_builds_label(inputs)
	if (locale === "fr") return fr_explore_search_builds_label(inputs)
	if (locale === "it") return it_explore_search_builds_label(inputs)
	if (locale === "nl") return nl_explore_search_builds_label(inputs)
	if (locale === "pl") return pl_explore_search_builds_label(inputs)
	if (locale === "pt") return pt_explore_search_builds_label(inputs)
	if (locale === "ru") return ru_explore_search_builds_label(inputs)
	if (locale === "sv") return sv_explore_search_builds_label(inputs)
	if (locale === "tr") return tr_explore_search_builds_label(inputs)
	if (locale === "zh") return zh_explore_search_builds_label(inputs)
	if (locale === "ja") return ja_explore_search_builds_label(inputs)
	return en_explore_search_builds_label(inputs)
});
