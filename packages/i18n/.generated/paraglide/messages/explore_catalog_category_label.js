/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Category_LabelInputs */

const en_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

const es_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría`)
};

const de_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const fr_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie`)
};

const it_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const nl_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const pl_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria`)
};

const pt_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const ru_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория`)
};

const sv_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const tr_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const zh_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_explore_catalog_category_label = /** @type {(inputs: Explore_Catalog_Category_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリ`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Explore_Catalog_Category_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_category_label = /** @type {((inputs?: Explore_Catalog_Category_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Category_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_category_label(inputs)
	if (locale === "de") return de_explore_catalog_category_label(inputs)
	if (locale === "fr") return fr_explore_catalog_category_label(inputs)
	if (locale === "it") return it_explore_catalog_category_label(inputs)
	if (locale === "nl") return nl_explore_catalog_category_label(inputs)
	if (locale === "pl") return pl_explore_catalog_category_label(inputs)
	if (locale === "pt") return pt_explore_catalog_category_label(inputs)
	if (locale === "ru") return ru_explore_catalog_category_label(inputs)
	if (locale === "sv") return sv_explore_catalog_category_label(inputs)
	if (locale === "tr") return tr_explore_catalog_category_label(inputs)
	if (locale === "zh") return zh_explore_catalog_category_label(inputs)
	if (locale === "ja") return ja_explore_catalog_category_label(inputs)
	return en_explore_catalog_category_label(inputs)
});
