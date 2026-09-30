/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Add_CategoryInputs */

const en_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New category`)
};

const es_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva categoría`)
};

const de_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Kategorie`)
};

const fr_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle catégorie`)
};

const it_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova categoria`)
};

const nl_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe categorie`)
};

const pl_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa kategoria`)
};

const pt_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova categoria`)
};

const ru_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая категория`)
};

const sv_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny kategori`)
};

const tr_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni kategori`)
};

const zh_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建分类`)
};

const ja_admin_tax_add_category = /** @type {(inputs: Admin_Tax_Add_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいカテゴリー`)
};

/**
* | output |
* | --- |
* | "New category" |
*
* @param {Admin_Tax_Add_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_add_category = /** @type {((inputs?: Admin_Tax_Add_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Add_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_add_category(inputs)
	if (locale === "de") return de_admin_tax_add_category(inputs)
	if (locale === "fr") return fr_admin_tax_add_category(inputs)
	if (locale === "it") return it_admin_tax_add_category(inputs)
	if (locale === "nl") return nl_admin_tax_add_category(inputs)
	if (locale === "pl") return pl_admin_tax_add_category(inputs)
	if (locale === "pt") return pt_admin_tax_add_category(inputs)
	if (locale === "ru") return ru_admin_tax_add_category(inputs)
	if (locale === "sv") return sv_admin_tax_add_category(inputs)
	if (locale === "tr") return tr_admin_tax_add_category(inputs)
	if (locale === "zh") return zh_admin_tax_add_category(inputs)
	if (locale === "ja") return ja_admin_tax_add_category(inputs)
	return en_admin_tax_add_category(inputs)
});
