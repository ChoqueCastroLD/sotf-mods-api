/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_FiltersInputs */

const en_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const es_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const de_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const fr_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtres`)
};

const it_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtri`)
};

const nl_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters`)
};

const pl_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtry`)
};

const pt_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtros`)
};

const ru_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтры`)
};

const sv_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter`)
};

const tr_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreler`)
};

const zh_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选`)
};

const ja_explore_catalog_filters = /** @type {(inputs: Explore_Catalog_FiltersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルター`)
};

/**
* | output |
* | --- |
* | "Filters" |
*
* @param {Explore_Catalog_FiltersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_filters = /** @type {((inputs?: Explore_Catalog_FiltersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_FiltersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_filters(inputs)
	if (locale === "de") return de_explore_catalog_filters(inputs)
	if (locale === "fr") return fr_explore_catalog_filters(inputs)
	if (locale === "it") return it_explore_catalog_filters(inputs)
	if (locale === "nl") return nl_explore_catalog_filters(inputs)
	if (locale === "pl") return pl_explore_catalog_filters(inputs)
	if (locale === "pt") return pt_explore_catalog_filters(inputs)
	if (locale === "ru") return ru_explore_catalog_filters(inputs)
	if (locale === "sv") return sv_explore_catalog_filters(inputs)
	if (locale === "tr") return tr_explore_catalog_filters(inputs)
	if (locale === "zh") return zh_explore_catalog_filters(inputs)
	if (locale === "ja") return ja_explore_catalog_filters(inputs)
	return en_explore_catalog_filters(inputs)
});
