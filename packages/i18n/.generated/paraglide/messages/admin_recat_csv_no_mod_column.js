/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Csv_No_Mod_ColumnInputs */

const en_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Missing a mod column (modId or manifestId).`)
};

const es_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta una columna de mod (modId o manifestId).`)
};

const de_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es fehlt eine Mod-Spalte (modId oder manifestId).`)
};

const fr_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il manque une colonne de mod (modId ou manifestId).`)
};

const it_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manca una colonna della mod (modId o manifestId).`)
};

const nl_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er ontbreekt een modkolom (modId of manifestId).`)
};

const pl_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brakuje kolumny modu (modId lub manifestId).`)
};

const pt_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falta uma coluna de mod (modId ou manifestId).`)
};

const ru_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет столбца мода (modId или manifestId).`)
};

const sv_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det saknas en moddkolumn (modId eller manifestId).`)
};

const tr_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod sütunu eksik (modId veya manifestId).`)
};

const zh_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`缺少模组列（modId 或 manifestId）。`)
};

const ja_admin_recat_csv_no_mod_column = /** @type {(inputs: Admin_Recat_Csv_No_Mod_ColumnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD の列（modId または manifestId）がありません。`)
};

/**
* | output |
* | --- |
* | "Missing a mod column (modId or manifestId)." |
*
* @param {Admin_Recat_Csv_No_Mod_ColumnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_no_mod_column = /** @type {((inputs?: Admin_Recat_Csv_No_Mod_ColumnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_No_Mod_ColumnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_no_mod_column(inputs)
	if (locale === "de") return de_admin_recat_csv_no_mod_column(inputs)
	if (locale === "fr") return fr_admin_recat_csv_no_mod_column(inputs)
	if (locale === "it") return it_admin_recat_csv_no_mod_column(inputs)
	if (locale === "nl") return nl_admin_recat_csv_no_mod_column(inputs)
	if (locale === "pl") return pl_admin_recat_csv_no_mod_column(inputs)
	if (locale === "pt") return pt_admin_recat_csv_no_mod_column(inputs)
	if (locale === "ru") return ru_admin_recat_csv_no_mod_column(inputs)
	if (locale === "sv") return sv_admin_recat_csv_no_mod_column(inputs)
	if (locale === "tr") return tr_admin_recat_csv_no_mod_column(inputs)
	if (locale === "zh") return zh_admin_recat_csv_no_mod_column(inputs)
	if (locale === "ja") return ja_admin_recat_csv_no_mod_column(inputs)
	return en_admin_recat_csv_no_mod_column(inputs)
});
