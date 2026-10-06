/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ added: NonNullable<unknown>, updated: NonNullable<unknown> }} Admin_Recat_Csv_Report_TitleInputs */

const en_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} new rows, ${i?.updated} suggestions replaced`)
};

const es_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} filas nuevas, ${i?.updated} sugerencias sustituidas`)
};

const de_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} neue Zeilen, ${i?.updated} Vorschläge ersetzt`)
};

const fr_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV : ${i?.added} nouvelles lignes, ${i?.updated} suggestions remplacées`)
};

const it_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} righe nuove, ${i?.updated} suggerimenti sostituiti`)
};

const nl_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} nieuwe rijen, ${i?.updated} suggesties vervangen`)
};

const pl_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: nowe wiersze: ${i?.added}, zastąpione sugestie: ${i?.updated}`)
};

const pt_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} linhas novas, ${i?.updated} sugestões substituídas`)
};

const ru_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: новых строк: ${i?.added}, заменено предложений: ${i?.updated}`)
};

const sv_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} nya rader, ${i?.updated} förslag ersatta`)
};

const tr_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV: ${i?.added} yeni satır, ${i?.updated} öneri değiştirildi`)
};

const zh_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV：新增 ${i?.added} 行，替换 ${i?.updated} 条建议`)
};

const ja_admin_recat_csv_report_title = /** @type {(inputs: Admin_Recat_Csv_Report_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`CSV：新規 ${i?.added} 行、置き換えた候補 ${i?.updated} 件`)
};

/**
* | output |
* | --- |
* | "CSV: {added} new rows, {updated} suggestions replaced" |
*
* @param {Admin_Recat_Csv_Report_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_report_title = /** @type {((inputs: Admin_Recat_Csv_Report_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Report_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_report_title(inputs)
	if (locale === "de") return de_admin_recat_csv_report_title(inputs)
	if (locale === "fr") return fr_admin_recat_csv_report_title(inputs)
	if (locale === "it") return it_admin_recat_csv_report_title(inputs)
	if (locale === "nl") return nl_admin_recat_csv_report_title(inputs)
	if (locale === "pl") return pl_admin_recat_csv_report_title(inputs)
	if (locale === "pt") return pt_admin_recat_csv_report_title(inputs)
	if (locale === "ru") return ru_admin_recat_csv_report_title(inputs)
	if (locale === "sv") return sv_admin_recat_csv_report_title(inputs)
	if (locale === "tr") return tr_admin_recat_csv_report_title(inputs)
	if (locale === "zh") return zh_admin_recat_csv_report_title(inputs)
	if (locale === "ja") return ja_admin_recat_csv_report_title(inputs)
	return en_admin_recat_csv_report_title(inputs)
});
