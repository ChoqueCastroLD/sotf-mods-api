/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Filter_CategoriesInputs */

const en_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter categories`)
};

const es_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar categorías`)
};

const de_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien filtern`)
};

const fr_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer les catégories`)
};

const it_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra categorie`)
};

const nl_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën filteren`)
};

const pl_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj kategorie`)
};

const pt_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar categorias`)
};

const ru_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр категорий`)
};

const sv_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera kategorier`)
};

const tr_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorileri filtrele`)
};

const zh_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选分类`)
};

const ja_admin_tax_filter_categories = /** @type {(inputs: Admin_Tax_Filter_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーを絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter categories" |
*
* @param {Admin_Tax_Filter_CategoriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_filter_categories = /** @type {((inputs?: Admin_Tax_Filter_CategoriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Filter_CategoriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_filter_categories(inputs)
	if (locale === "de") return de_admin_tax_filter_categories(inputs)
	if (locale === "fr") return fr_admin_tax_filter_categories(inputs)
	if (locale === "it") return it_admin_tax_filter_categories(inputs)
	if (locale === "nl") return nl_admin_tax_filter_categories(inputs)
	if (locale === "pl") return pl_admin_tax_filter_categories(inputs)
	if (locale === "pt") return pt_admin_tax_filter_categories(inputs)
	if (locale === "ru") return ru_admin_tax_filter_categories(inputs)
	if (locale === "sv") return sv_admin_tax_filter_categories(inputs)
	if (locale === "tr") return tr_admin_tax_filter_categories(inputs)
	if (locale === "zh") return zh_admin_tax_filter_categories(inputs)
	if (locale === "ja") return ja_admin_tax_filter_categories(inputs)
	return en_admin_tax_filter_categories(inputs)
});
