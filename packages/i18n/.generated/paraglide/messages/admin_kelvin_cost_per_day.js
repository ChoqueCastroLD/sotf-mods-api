/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Cost_Per_DayInputs */

const en_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cost per day`)
};

const es_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coste por día`)
};

const de_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kosten pro Tag`)
};

const fr_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coût par jour`)
};

const it_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Costo al giorno`)
};

const nl_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kosten per dag`)
};

const pl_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koszt dziennie`)
};

const pt_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Custo por dia`)
};

const ru_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Стоимость по дням`)
};

const sv_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kostnad per dag`)
};

const tr_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük maliyet`)
};

const zh_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日费用`)
};

const ja_admin_kelvin_cost_per_day = /** @type {(inputs: Admin_Kelvin_Cost_Per_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 日あたりの費用`)
};

/**
* | output |
* | --- |
* | "Cost per day" |
*
* @param {Admin_Kelvin_Cost_Per_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_cost_per_day = /** @type {((inputs?: Admin_Kelvin_Cost_Per_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Cost_Per_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_cost_per_day(inputs)
	if (locale === "de") return de_admin_kelvin_cost_per_day(inputs)
	if (locale === "fr") return fr_admin_kelvin_cost_per_day(inputs)
	if (locale === "it") return it_admin_kelvin_cost_per_day(inputs)
	if (locale === "nl") return nl_admin_kelvin_cost_per_day(inputs)
	if (locale === "pl") return pl_admin_kelvin_cost_per_day(inputs)
	if (locale === "pt") return pt_admin_kelvin_cost_per_day(inputs)
	if (locale === "ru") return ru_admin_kelvin_cost_per_day(inputs)
	if (locale === "sv") return sv_admin_kelvin_cost_per_day(inputs)
	if (locale === "tr") return tr_admin_kelvin_cost_per_day(inputs)
	if (locale === "zh") return zh_admin_kelvin_cost_per_day(inputs)
	if (locale === "ja") return ja_admin_kelvin_cost_per_day(inputs)
	return en_admin_kelvin_cost_per_day(inputs)
});
