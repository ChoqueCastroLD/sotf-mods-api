/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Daily_BudgetInputs */

const en_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily budget (USD)`)
};

const es_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Presupuesto diario (USD)`)
};

const de_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagesbudget (USD)`)
};

const fr_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budget quotidien (USD)`)
};

const it_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budget giornaliero (USD)`)
};

const nl_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagbudget (USD)`)
};

const pl_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Budżet dzienny (USD)`)
};

const pt_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orçamento diário (USD)`)
};

const ru_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дневной бюджет (USD)`)
};

const sv_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagsbudget (USD)`)
};

const tr_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük bütçe (USD)`)
};

const zh_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日预算（美元）`)
};

const ja_admin_kelvin_daily_budget = /** @type {(inputs: Admin_Kelvin_Daily_BudgetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 日の予算（USD）`)
};

/**
* | output |
* | --- |
* | "Daily budget (USD)" |
*
* @param {Admin_Kelvin_Daily_BudgetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_daily_budget = /** @type {((inputs?: Admin_Kelvin_Daily_BudgetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Daily_BudgetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_daily_budget(inputs)
	if (locale === "de") return de_admin_kelvin_daily_budget(inputs)
	if (locale === "fr") return fr_admin_kelvin_daily_budget(inputs)
	if (locale === "it") return it_admin_kelvin_daily_budget(inputs)
	if (locale === "nl") return nl_admin_kelvin_daily_budget(inputs)
	if (locale === "pl") return pl_admin_kelvin_daily_budget(inputs)
	if (locale === "pt") return pt_admin_kelvin_daily_budget(inputs)
	if (locale === "ru") return ru_admin_kelvin_daily_budget(inputs)
	if (locale === "sv") return sv_admin_kelvin_daily_budget(inputs)
	if (locale === "tr") return tr_admin_kelvin_daily_budget(inputs)
	if (locale === "zh") return zh_admin_kelvin_daily_budget(inputs)
	if (locale === "ja") return ja_admin_kelvin_daily_budget(inputs)
	return en_admin_kelvin_daily_budget(inputs)
});
