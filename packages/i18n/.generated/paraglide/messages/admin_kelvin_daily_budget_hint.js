/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Daily_Budget_HintInputs */

const en_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resets at midnight UTC.`)
};

const es_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se reinicia a medianoche UTC.`)
};

const de_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wird um Mitternacht UTC zurückgesetzt.`)
};

const fr_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Réinitialisé à minuit UTC.`)
};

const it_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si azzera a mezzanotte UTC.`)
};

const nl_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wordt om middernacht UTC gereset.`)
};

const pl_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeruje się o północy UTC.`)
};

const pt_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zera à meia-noite UTC.`)
};

const ru_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбрасывается в полночь UTC.`)
};

const sv_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nollställs vid midnatt UTC.`)
};

const tr_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`UTC gece yarısı sıfırlanır.`)
};

const zh_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`UTC 午夜重置。`)
};

const ja_admin_kelvin_daily_budget_hint = /** @type {(inputs: Admin_Kelvin_Daily_Budget_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`UTC の午前 0 時にリセットされます。`)
};

/**
* | output |
* | --- |
* | "Resets at midnight UTC." |
*
* @param {Admin_Kelvin_Daily_Budget_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_daily_budget_hint = /** @type {((inputs?: Admin_Kelvin_Daily_Budget_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Daily_Budget_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "de") return de_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "fr") return fr_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "it") return it_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "nl") return nl_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "pl") return pl_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "pt") return pt_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "ru") return ru_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "sv") return sv_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "tr") return tr_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "zh") return zh_admin_kelvin_daily_budget_hint(inputs)
	if (locale === "ja") return ja_admin_kelvin_daily_budget_hint(inputs)
	return en_admin_kelvin_daily_budget_hint(inputs)
});
