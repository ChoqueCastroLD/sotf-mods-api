/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Col_CostInputs */

const en_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cost`)
};

const es_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coste`)
};

const de_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kosten`)
};

const fr_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coût`)
};

const it_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costo`)
};

const nl_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kosten`)
};

const pl_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koszt`)
};

const pt_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custo`)
};

const ru_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Стоимость`)
};

const sv_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kostnad`)
};

const tr_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maliyet`)
};

const zh_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`费用`)
};

const ja_admin_kelvin_col_cost = /** @type {(inputs: Admin_Kelvin_Col_CostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`費用`)
};

/**
* | output |
* | --- |
* | "Cost" |
*
* @param {Admin_Kelvin_Col_CostInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_col_cost = /** @type {((inputs?: Admin_Kelvin_Col_CostInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Col_CostInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_col_cost(inputs)
	if (locale === "de") return de_admin_kelvin_col_cost(inputs)
	if (locale === "fr") return fr_admin_kelvin_col_cost(inputs)
	if (locale === "it") return it_admin_kelvin_col_cost(inputs)
	if (locale === "nl") return nl_admin_kelvin_col_cost(inputs)
	if (locale === "pl") return pl_admin_kelvin_col_cost(inputs)
	if (locale === "pt") return pt_admin_kelvin_col_cost(inputs)
	if (locale === "ru") return ru_admin_kelvin_col_cost(inputs)
	if (locale === "sv") return sv_admin_kelvin_col_cost(inputs)
	if (locale === "tr") return tr_admin_kelvin_col_cost(inputs)
	if (locale === "zh") return zh_admin_kelvin_col_cost(inputs)
	if (locale === "ja") return ja_admin_kelvin_col_cost(inputs)
	return en_admin_kelvin_col_cost(inputs)
});
