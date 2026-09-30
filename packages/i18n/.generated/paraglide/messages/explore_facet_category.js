/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_CategoryInputs */

const en_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

const es_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría`)
};

const de_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const fr_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie`)
};

const it_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const nl_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const pl_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria`)
};

const pt_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const ru_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория`)
};

const sv_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const tr_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const zh_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_explore_facet_category = /** @type {(inputs: Explore_Facet_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリ`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Explore_Facet_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_category = /** @type {((inputs?: Explore_Facet_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_category(inputs)
	if (locale === "de") return de_explore_facet_category(inputs)
	if (locale === "fr") return fr_explore_facet_category(inputs)
	if (locale === "it") return it_explore_facet_category(inputs)
	if (locale === "nl") return nl_explore_facet_category(inputs)
	if (locale === "pl") return pl_explore_facet_category(inputs)
	if (locale === "pt") return pt_explore_facet_category(inputs)
	if (locale === "ru") return ru_explore_facet_category(inputs)
	if (locale === "sv") return sv_explore_facet_category(inputs)
	if (locale === "tr") return tr_explore_facet_category(inputs)
	if (locale === "zh") return zh_explore_facet_category(inputs)
	if (locale === "ja") return ja_explore_facet_category(inputs)
	return en_explore_facet_category(inputs)
});
