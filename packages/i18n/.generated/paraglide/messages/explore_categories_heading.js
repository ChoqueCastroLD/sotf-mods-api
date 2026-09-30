/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Categories_HeadingInputs */

const en_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories`)
};

const es_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías`)
};

const de_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien`)
};

const fr_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories`)
};

const it_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const nl_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën`)
};

const pl_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const pt_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias`)
};

const ru_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории`)
};

const sv_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier`)
};

const tr_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriler`)
};

const zh_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_explore_categories_heading = /** @type {(inputs: Explore_Categories_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリ`)
};

/**
* | output |
* | --- |
* | "Categories" |
*
* @param {Explore_Categories_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_categories_heading = /** @type {((inputs?: Explore_Categories_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Categories_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_categories_heading(inputs)
	if (locale === "de") return de_explore_categories_heading(inputs)
	if (locale === "fr") return fr_explore_categories_heading(inputs)
	if (locale === "it") return it_explore_categories_heading(inputs)
	if (locale === "nl") return nl_explore_categories_heading(inputs)
	if (locale === "pl") return pl_explore_categories_heading(inputs)
	if (locale === "pt") return pt_explore_categories_heading(inputs)
	if (locale === "ru") return ru_explore_categories_heading(inputs)
	if (locale === "sv") return sv_explore_categories_heading(inputs)
	if (locale === "tr") return tr_explore_categories_heading(inputs)
	if (locale === "zh") return zh_explore_categories_heading(inputs)
	if (locale === "ja") return ja_explore_categories_heading(inputs)
	return en_explore_categories_heading(inputs)
});
