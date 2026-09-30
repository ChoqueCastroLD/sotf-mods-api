/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_CategoriesInputs */

const en_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories`)
};

const es_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías`)
};

const de_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien`)
};

const fr_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories`)
};

const it_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const nl_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën`)
};

const pl_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const pt_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias`)
};

const ru_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории`)
};

const sv_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier`)
};

const tr_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriler`)
};

const zh_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_cmdk_group_categories = /** @type {(inputs: Cmdk_Group_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリー`)
};

/**
* | output |
* | --- |
* | "Categories" |
*
* @param {Cmdk_Group_CategoriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_categories = /** @type {((inputs?: Cmdk_Group_CategoriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_CategoriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_categories(inputs)
	if (locale === "de") return de_cmdk_group_categories(inputs)
	if (locale === "fr") return fr_cmdk_group_categories(inputs)
	if (locale === "it") return it_cmdk_group_categories(inputs)
	if (locale === "nl") return nl_cmdk_group_categories(inputs)
	if (locale === "pl") return pl_cmdk_group_categories(inputs)
	if (locale === "pt") return pt_cmdk_group_categories(inputs)
	if (locale === "ru") return ru_cmdk_group_categories(inputs)
	if (locale === "sv") return sv_cmdk_group_categories(inputs)
	if (locale === "tr") return tr_cmdk_group_categories(inputs)
	if (locale === "zh") return zh_cmdk_group_categories(inputs)
	if (locale === "ja") return ja_cmdk_group_categories(inputs)
	return en_cmdk_group_categories(inputs)
});
