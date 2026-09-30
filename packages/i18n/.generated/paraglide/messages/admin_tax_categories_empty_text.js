/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Categories_Empty_TextInputs */

const en_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create the first category.`)
};

const es_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea la primera categoría.`)
};

const de_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lege die erste Kategorie an.`)
};

const fr_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez la première catégorie.`)
};

const it_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea la prima categoria.`)
};

const nl_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak de eerste categorie aan.`)
};

const pl_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz pierwszą kategorię.`)
};

const pt_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie a primeira categoria.`)
};

const ru_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создайте первую категорию.`)
};

const sv_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa den första kategorin.`)
};

const tr_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk kategoriyi oluştur.`)
};

const zh_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建第一个分类。`)
};

const ja_admin_tax_categories_empty_text = /** @type {(inputs: Admin_Tax_Categories_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初のカテゴリーを作成してください。`)
};

/**
* | output |
* | --- |
* | "Create the first category." |
*
* @param {Admin_Tax_Categories_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_categories_empty_text = /** @type {((inputs?: Admin_Tax_Categories_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Categories_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_categories_empty_text(inputs)
	if (locale === "de") return de_admin_tax_categories_empty_text(inputs)
	if (locale === "fr") return fr_admin_tax_categories_empty_text(inputs)
	if (locale === "it") return it_admin_tax_categories_empty_text(inputs)
	if (locale === "nl") return nl_admin_tax_categories_empty_text(inputs)
	if (locale === "pl") return pl_admin_tax_categories_empty_text(inputs)
	if (locale === "pt") return pt_admin_tax_categories_empty_text(inputs)
	if (locale === "ru") return ru_admin_tax_categories_empty_text(inputs)
	if (locale === "sv") return sv_admin_tax_categories_empty_text(inputs)
	if (locale === "tr") return tr_admin_tax_categories_empty_text(inputs)
	if (locale === "zh") return zh_admin_tax_categories_empty_text(inputs)
	if (locale === "ja") return ja_admin_tax_categories_empty_text(inputs)
	return en_admin_tax_categories_empty_text(inputs)
});
