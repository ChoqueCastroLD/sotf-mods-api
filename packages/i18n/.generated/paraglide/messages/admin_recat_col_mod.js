/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Col_ModInputs */

const en_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const es_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const de_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const fr_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const it_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pl_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const pt_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const ru_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод`)
};

const sv_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modd`)
};

const tr_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const zh_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_admin_recat_col_mod = /** @type {(inputs: Admin_Recat_Col_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mod" |
*
* @param {Admin_Recat_Col_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_col_mod = /** @type {((inputs?: Admin_Recat_Col_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Col_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_col_mod(inputs)
	if (locale === "de") return de_admin_recat_col_mod(inputs)
	if (locale === "fr") return fr_admin_recat_col_mod(inputs)
	if (locale === "it") return it_admin_recat_col_mod(inputs)
	if (locale === "nl") return nl_admin_recat_col_mod(inputs)
	if (locale === "pl") return pl_admin_recat_col_mod(inputs)
	if (locale === "pt") return pt_admin_recat_col_mod(inputs)
	if (locale === "ru") return ru_admin_recat_col_mod(inputs)
	if (locale === "sv") return sv_admin_recat_col_mod(inputs)
	if (locale === "tr") return tr_admin_recat_col_mod(inputs)
	if (locale === "zh") return zh_admin_recat_col_mod(inputs)
	if (locale === "ja") return ja_admin_recat_col_mod(inputs)
	return en_admin_recat_col_mod(inputs)
});
