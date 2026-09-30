/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ line: NonNullable<unknown> }} Admin_Recat_Csv_Line_No_ModInputs */

const en_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Line ${i?.line}: no mod.`)
};

const es_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Línea ${i?.line}: sin mod.`)
};

const de_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zeile ${i?.line}: kein Mod.`)
};

const fr_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ligne ${i?.line} : aucun mod.`)
};

const it_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riga ${i?.line}: nessuna mod.`)
};

const nl_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Regel ${i?.line}: geen mod.`)
};

const pl_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wiersz ${i?.line}: brak modu.`)
};

const pt_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Linha ${i?.line}: sem mod.`)
};

const ru_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Строка ${i?.line}: нет мода.`)
};

const sv_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rad ${i?.line}: ingen modd.`)
};

const tr_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Satır ${i?.line}: mod yok.`)
};

const zh_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.line} 行：没有模组。`)
};

const ja_admin_recat_csv_line_no_mod = /** @type {(inputs: Admin_Recat_Csv_Line_No_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.line} 行目：MOD がありません。`)
};

/**
* | output |
* | --- |
* | "Line {line}: no mod." |
*
* @param {Admin_Recat_Csv_Line_No_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_line_no_mod = /** @type {((inputs: Admin_Recat_Csv_Line_No_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Line_No_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_line_no_mod(inputs)
	if (locale === "de") return de_admin_recat_csv_line_no_mod(inputs)
	if (locale === "fr") return fr_admin_recat_csv_line_no_mod(inputs)
	if (locale === "it") return it_admin_recat_csv_line_no_mod(inputs)
	if (locale === "nl") return nl_admin_recat_csv_line_no_mod(inputs)
	if (locale === "pl") return pl_admin_recat_csv_line_no_mod(inputs)
	if (locale === "pt") return pt_admin_recat_csv_line_no_mod(inputs)
	if (locale === "ru") return ru_admin_recat_csv_line_no_mod(inputs)
	if (locale === "sv") return sv_admin_recat_csv_line_no_mod(inputs)
	if (locale === "tr") return tr_admin_recat_csv_line_no_mod(inputs)
	if (locale === "zh") return zh_admin_recat_csv_line_no_mod(inputs)
	if (locale === "ja") return ja_admin_recat_csv_line_no_mod(inputs)
	return en_admin_recat_csv_line_no_mod(inputs)
});
