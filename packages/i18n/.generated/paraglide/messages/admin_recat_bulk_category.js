/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Bulk_CategoryInputs */

const en_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category for the selection`)
};

const es_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría para la selección`)
};

const de_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie für die Auswahl`)
};

const fr_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie pour la sélection`)
};

const it_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria per la selezione`)
};

const nl_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie voor de selectie`)
};

const pl_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria dla zaznaczenia`)
};

const pt_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria para a seleção`)
};

const ru_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория для выбранных`)
};

const sv_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori för markeringen`)
};

const tr_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seçim için kategori`)
};

const zh_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所选行的分类`)
};

const ja_admin_recat_bulk_category = /** @type {(inputs: Admin_Recat_Bulk_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`選択した行のカテゴリー`)
};

/**
* | output |
* | --- |
* | "Category for the selection" |
*
* @param {Admin_Recat_Bulk_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_bulk_category = /** @type {((inputs?: Admin_Recat_Bulk_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Bulk_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_bulk_category(inputs)
	if (locale === "de") return de_admin_recat_bulk_category(inputs)
	if (locale === "fr") return fr_admin_recat_bulk_category(inputs)
	if (locale === "it") return it_admin_recat_bulk_category(inputs)
	if (locale === "nl") return nl_admin_recat_bulk_category(inputs)
	if (locale === "pl") return pl_admin_recat_bulk_category(inputs)
	if (locale === "pt") return pt_admin_recat_bulk_category(inputs)
	if (locale === "ru") return ru_admin_recat_bulk_category(inputs)
	if (locale === "sv") return sv_admin_recat_bulk_category(inputs)
	if (locale === "tr") return tr_admin_recat_bulk_category(inputs)
	if (locale === "zh") return zh_admin_recat_bulk_category(inputs)
	if (locale === "ja") return ja_admin_recat_bulk_category(inputs)
	return en_admin_recat_bulk_category(inputs)
});
