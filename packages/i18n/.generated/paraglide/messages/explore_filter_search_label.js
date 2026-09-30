/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_Search_LabelInputs */

const en_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const es_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar`)
};

const de_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtern`)
};

const fr_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer`)
};

const it_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra`)
};

const nl_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filteren`)
};

const pl_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj`)
};

const pt_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar`)
};

const ru_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр`)
};

const sv_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera`)
};

const tr_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrele`)
};

const zh_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选`)
};

const ja_explore_filter_search_label = /** @type {(inputs: Explore_Filter_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込み`)
};

/**
* | output |
* | --- |
* | "Filter" |
*
* @param {Explore_Filter_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_search_label = /** @type {((inputs?: Explore_Filter_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_search_label(inputs)
	if (locale === "de") return de_explore_filter_search_label(inputs)
	if (locale === "fr") return fr_explore_filter_search_label(inputs)
	if (locale === "it") return it_explore_filter_search_label(inputs)
	if (locale === "nl") return nl_explore_filter_search_label(inputs)
	if (locale === "pl") return pl_explore_filter_search_label(inputs)
	if (locale === "pt") return pt_explore_filter_search_label(inputs)
	if (locale === "ru") return ru_explore_filter_search_label(inputs)
	if (locale === "sv") return sv_explore_filter_search_label(inputs)
	if (locale === "tr") return tr_explore_filter_search_label(inputs)
	if (locale === "zh") return zh_explore_filter_search_label(inputs)
	if (locale === "ja") return ja_explore_filter_search_label(inputs)
	return en_explore_filter_search_label(inputs)
});
