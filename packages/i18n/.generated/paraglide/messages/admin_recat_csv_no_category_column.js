/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Csv_No_Category_ColumnInputs */

const en_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missing a category column (categorySlug).`)
};

const es_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta una columna de categoría (categorySlug).`)
};

const de_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es fehlt eine Kategorie-Spalte (categorySlug).`)
};

const fr_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il manque une colonne de catégorie (categorySlug).`)
};

const it_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manca una colonna della categoria (categorySlug).`)
};

const nl_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ontbreekt een categoriekolom (categorySlug).`)
};

const pl_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brakuje kolumny kategorii (categorySlug).`)
};

const pt_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta uma coluna de categoria (categorySlug).`)
};

const ru_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет столбца категории (categorySlug).`)
};

const sv_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det saknas en kategorikolumn (categorySlug).`)
};

const tr_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori sütunu eksik (categorySlug).`)
};

const zh_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺少分类列（categorySlug）。`)
};

const ja_admin_recat_csv_no_category_column = /** @type {(inputs: Admin_Recat_Csv_No_Category_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーの列（categorySlug）がありません。`)
};

/**
* | output |
* | --- |
* | "Missing a category column (categorySlug)." |
*
* @param {Admin_Recat_Csv_No_Category_ColumnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_no_category_column = /** @type {((inputs?: Admin_Recat_Csv_No_Category_ColumnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_No_Category_ColumnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_no_category_column(inputs)
	if (locale === "de") return de_admin_recat_csv_no_category_column(inputs)
	if (locale === "fr") return fr_admin_recat_csv_no_category_column(inputs)
	if (locale === "it") return it_admin_recat_csv_no_category_column(inputs)
	if (locale === "nl") return nl_admin_recat_csv_no_category_column(inputs)
	if (locale === "pl") return pl_admin_recat_csv_no_category_column(inputs)
	if (locale === "pt") return pt_admin_recat_csv_no_category_column(inputs)
	if (locale === "ru") return ru_admin_recat_csv_no_category_column(inputs)
	if (locale === "sv") return sv_admin_recat_csv_no_category_column(inputs)
	if (locale === "tr") return tr_admin_recat_csv_no_category_column(inputs)
	if (locale === "zh") return zh_admin_recat_csv_no_category_column(inputs)
	if (locale === "ja") return ja_admin_recat_csv_no_category_column(inputs)
	return en_admin_recat_csv_no_category_column(inputs)
});
