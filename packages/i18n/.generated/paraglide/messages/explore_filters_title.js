/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filters_TitleInputs */

const en_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const es_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const de_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const fr_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtres`)
};

const it_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtri`)
};

const nl_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const pl_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtry`)
};

const pt_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const ru_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтры`)
};

const sv_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const tr_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreler`)
};

const zh_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选`)
};

const ja_explore_filters_title = /** @type {(inputs: Explore_Filters_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`絞り込み`)
};

/**
* | output |
* | --- |
* | "Filters" |
*
* @param {Explore_Filters_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filters_title = /** @type {((inputs?: Explore_Filters_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filters_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filters_title(inputs)
	if (locale === "de") return de_explore_filters_title(inputs)
	if (locale === "fr") return fr_explore_filters_title(inputs)
	if (locale === "it") return it_explore_filters_title(inputs)
	if (locale === "nl") return nl_explore_filters_title(inputs)
	if (locale === "pl") return pl_explore_filters_title(inputs)
	if (locale === "pt") return pt_explore_filters_title(inputs)
	if (locale === "ru") return ru_explore_filters_title(inputs)
	if (locale === "sv") return sv_explore_filters_title(inputs)
	if (locale === "tr") return tr_explore_filters_title(inputs)
	if (locale === "zh") return zh_explore_filters_title(inputs)
	if (locale === "ja") return ja_explore_filters_title(inputs)
	return en_explore_filters_title(inputs)
});
