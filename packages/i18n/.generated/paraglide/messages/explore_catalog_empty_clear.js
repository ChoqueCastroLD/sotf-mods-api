/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Empty_ClearInputs */

const en_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear filters`)
};

const es_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar filtros`)
};

const de_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter zurücksetzen`)
};

const fr_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer les filtres`)
};

const it_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi i filtri`)
};

const nl_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filters wissen`)
};

const pl_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść filtry`)
};

const pt_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar filtros`)
};

const ru_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбросить фильтры`)
};

const sv_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa filter`)
};

const tr_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtreleri temizle`)
};

const zh_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除筛选`)
};

const ja_explore_catalog_empty_clear = /** @type {(inputs: Explore_Catalog_Empty_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィルターを解除`)
};

/**
* | output |
* | --- |
* | "Clear filters" |
*
* @param {Explore_Catalog_Empty_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_empty_clear = /** @type {((inputs?: Explore_Catalog_Empty_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Empty_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_empty_clear(inputs)
	if (locale === "de") return de_explore_catalog_empty_clear(inputs)
	if (locale === "fr") return fr_explore_catalog_empty_clear(inputs)
	if (locale === "it") return it_explore_catalog_empty_clear(inputs)
	if (locale === "nl") return nl_explore_catalog_empty_clear(inputs)
	if (locale === "pl") return pl_explore_catalog_empty_clear(inputs)
	if (locale === "pt") return pt_explore_catalog_empty_clear(inputs)
	if (locale === "ru") return ru_explore_catalog_empty_clear(inputs)
	if (locale === "sv") return sv_explore_catalog_empty_clear(inputs)
	if (locale === "tr") return tr_explore_catalog_empty_clear(inputs)
	if (locale === "zh") return zh_explore_catalog_empty_clear(inputs)
	if (locale === "ja") return ja_explore_catalog_empty_clear(inputs)
	return en_explore_catalog_empty_clear(inputs)
});
