/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tab_CategoriesInputs */

const en_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categories`)
};

const es_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorías`)
};

const de_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorien`)
};

const fr_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégories`)
};

const it_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const nl_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorieën`)
};

const pl_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const pt_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorias`)
};

const ru_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категории`)
};

const sv_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorier`)
};

const tr_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoriler`)
};

const zh_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_admin_tax_tab_categories = /** @type {(inputs: Admin_Tax_Tab_CategoriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリー`)
};

/**
* | output |
* | --- |
* | "Categories" |
*
* @param {Admin_Tax_Tab_CategoriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tab_categories = /** @type {((inputs?: Admin_Tax_Tab_CategoriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tab_CategoriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tab_categories(inputs)
	if (locale === "de") return de_admin_tax_tab_categories(inputs)
	if (locale === "fr") return fr_admin_tax_tab_categories(inputs)
	if (locale === "it") return it_admin_tax_tab_categories(inputs)
	if (locale === "nl") return nl_admin_tax_tab_categories(inputs)
	if (locale === "pl") return pl_admin_tax_tab_categories(inputs)
	if (locale === "pt") return pt_admin_tax_tab_categories(inputs)
	if (locale === "ru") return ru_admin_tax_tab_categories(inputs)
	if (locale === "sv") return sv_admin_tax_tab_categories(inputs)
	if (locale === "tr") return tr_admin_tax_tab_categories(inputs)
	if (locale === "zh") return zh_admin_tax_tab_categories(inputs)
	if (locale === "ja") return ja_admin_tax_tab_categories(inputs)
	return en_admin_tax_tab_categories(inputs)
});
