/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Sort_OldestInputs */

const en_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest`)
};

const es_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más antiguos`)
};

const de_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste`)
};

const fr_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus anciens`)
};

const it_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più vecchi`)
};

const nl_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste`)
};

const pl_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarsze`)
};

const pt_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais antigos`)
};

const ru_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала старые`)
};

const sv_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldst`)
};

const tr_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En eski`)
};

const zh_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最早`)
};

const ja_explore_catalog_sort_oldest = /** @type {(inputs: Explore_Catalog_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い順`)
};

/**
* | output |
* | --- |
* | "Oldest" |
*
* @param {Explore_Catalog_Sort_OldestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_sort_oldest = /** @type {((inputs?: Explore_Catalog_Sort_OldestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Sort_OldestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_sort_oldest(inputs)
	if (locale === "de") return de_explore_catalog_sort_oldest(inputs)
	if (locale === "fr") return fr_explore_catalog_sort_oldest(inputs)
	if (locale === "it") return it_explore_catalog_sort_oldest(inputs)
	if (locale === "nl") return nl_explore_catalog_sort_oldest(inputs)
	if (locale === "pl") return pl_explore_catalog_sort_oldest(inputs)
	if (locale === "pt") return pt_explore_catalog_sort_oldest(inputs)
	if (locale === "ru") return ru_explore_catalog_sort_oldest(inputs)
	if (locale === "sv") return sv_explore_catalog_sort_oldest(inputs)
	if (locale === "tr") return tr_explore_catalog_sort_oldest(inputs)
	if (locale === "zh") return zh_explore_catalog_sort_oldest(inputs)
	if (locale === "ja") return ja_explore_catalog_sort_oldest(inputs)
	return en_explore_catalog_sort_oldest(inputs)
});
