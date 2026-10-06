/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_All_CategoriesInputs */

const en_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All categories`)
};

const es_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las categorías`)
};

const de_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Kategorien`)
};

const fr_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les catégories`)
};

const it_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le categorie`)
};

const nl_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle categorieën`)
};

const pl_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie kategorie`)
};

const pt_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as categorias`)
};

const ru_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все категории`)
};

const sv_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla kategorier`)
};

const tr_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm kategoriler`)
};

const zh_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有分类`)
};

const ja_explore_catalog_all_categories = /** @type {(inputs: Explore_Catalog_All_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのカテゴリ`)
};

/**
* | output |
* | --- |
* | "All categories" |
*
* @param {Explore_Catalog_All_CategoriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_all_categories = /** @type {((inputs?: Explore_Catalog_All_CategoriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_All_CategoriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_all_categories(inputs)
	if (locale === "de") return de_explore_catalog_all_categories(inputs)
	if (locale === "fr") return fr_explore_catalog_all_categories(inputs)
	if (locale === "it") return it_explore_catalog_all_categories(inputs)
	if (locale === "nl") return nl_explore_catalog_all_categories(inputs)
	if (locale === "pl") return pl_explore_catalog_all_categories(inputs)
	if (locale === "pt") return pt_explore_catalog_all_categories(inputs)
	if (locale === "ru") return ru_explore_catalog_all_categories(inputs)
	if (locale === "sv") return sv_explore_catalog_all_categories(inputs)
	if (locale === "tr") return tr_explore_catalog_all_categories(inputs)
	if (locale === "zh") return zh_explore_catalog_all_categories(inputs)
	if (locale === "ja") return ja_explore_catalog_all_categories(inputs)
	return en_explore_catalog_all_categories(inputs)
});
