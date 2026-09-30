/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ line: NonNullable<unknown> }} Admin_Recat_Csv_Line_No_CategoryInputs */

const en_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Line ${i?.line}: no category.`)
};

const es_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Línea ${i?.line}: sin categoría.`)
};

const de_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zeile ${i?.line}: keine Kategorie.`)
};

const fr_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ligne ${i?.line} : aucune catégorie.`)
};

const it_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riga ${i?.line}: nessuna categoria.`)
};

const nl_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Regel ${i?.line}: geen categorie.`)
};

const pl_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiersz ${i?.line}: brak kategorii.`)
};

const pt_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Linha ${i?.line}: sem categoria.`)
};

const ru_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Строка ${i?.line}: нет категории.`)
};

const sv_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rad ${i?.line}: ingen kategori.`)
};

const tr_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Satır ${i?.line}: kategori yok.`)
};

const zh_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.line} 行：没有分类。`)
};

const ja_admin_recat_csv_line_no_category = /** @type {(inputs: Admin_Recat_Csv_Line_No_CategoryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.line} 行目：カテゴリーがありません。`)
};

/**
* | output |
* | --- |
* | "Line {line}: no category." |
*
* @param {Admin_Recat_Csv_Line_No_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_line_no_category = /** @type {((inputs: Admin_Recat_Csv_Line_No_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Line_No_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_line_no_category(inputs)
	if (locale === "de") return de_admin_recat_csv_line_no_category(inputs)
	if (locale === "fr") return fr_admin_recat_csv_line_no_category(inputs)
	if (locale === "it") return it_admin_recat_csv_line_no_category(inputs)
	if (locale === "nl") return nl_admin_recat_csv_line_no_category(inputs)
	if (locale === "pl") return pl_admin_recat_csv_line_no_category(inputs)
	if (locale === "pt") return pt_admin_recat_csv_line_no_category(inputs)
	if (locale === "ru") return ru_admin_recat_csv_line_no_category(inputs)
	if (locale === "sv") return sv_admin_recat_csv_line_no_category(inputs)
	if (locale === "tr") return tr_admin_recat_csv_line_no_category(inputs)
	if (locale === "zh") return zh_admin_recat_csv_line_no_category(inputs)
	if (locale === "ja") return ja_admin_recat_csv_line_no_category(inputs)
	return en_admin_recat_csv_line_no_category(inputs)
});
