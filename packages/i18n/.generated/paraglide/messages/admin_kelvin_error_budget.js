/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Admin_Kelvin_Error_BudgetInputs */

const en_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Between 0 and ${i?.max}.`)
};

const es_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entre 0 y ${i?.max}.`)
};

const de_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zwischen 0 und ${i?.max}.`)
};

const fr_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entre 0 et ${i?.max}.`)
};

const it_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tra 0 e ${i?.max}.`)
};

const nl_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tussen 0 en ${i?.max}.`)
};

const pl_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Od 0 do ${i?.max}.`)
};

const pt_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entre 0 e ${i?.max}.`)
};

const ru_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`От 0 до ${i?.max}.`)
};

const sv_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mellan 0 och ${i?.max}.`)
};

const tr_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`0 ile ${i?.max} arasında.`)
};

const zh_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`介于 0 和 ${i?.max} 之间。`)
};

const ja_admin_kelvin_error_budget = /** @type {(inputs: Admin_Kelvin_Error_BudgetInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`0〜${i?.max} の範囲で入力してください。`)
};

/**
* | output |
* | --- |
* | "Between 0 and {max}." |
*
* @param {Admin_Kelvin_Error_BudgetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_error_budget = /** @type {((inputs: Admin_Kelvin_Error_BudgetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Error_BudgetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_error_budget(inputs)
	if (locale === "de") return de_admin_kelvin_error_budget(inputs)
	if (locale === "fr") return fr_admin_kelvin_error_budget(inputs)
	if (locale === "it") return it_admin_kelvin_error_budget(inputs)
	if (locale === "nl") return nl_admin_kelvin_error_budget(inputs)
	if (locale === "pl") return pl_admin_kelvin_error_budget(inputs)
	if (locale === "pt") return pt_admin_kelvin_error_budget(inputs)
	if (locale === "ru") return ru_admin_kelvin_error_budget(inputs)
	if (locale === "sv") return sv_admin_kelvin_error_budget(inputs)
	if (locale === "tr") return tr_admin_kelvin_error_budget(inputs)
	if (locale === "zh") return zh_admin_kelvin_error_budget(inputs)
	if (locale === "ja") return ja_admin_kelvin_error_budget(inputs)
	return en_admin_kelvin_error_budget(inputs)
});
