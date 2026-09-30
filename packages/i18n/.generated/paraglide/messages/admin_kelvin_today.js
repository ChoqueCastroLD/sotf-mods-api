/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_TodayInputs */

const en_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spent today`)
};

const es_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gastado hoy`)
};

const de_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Heute ausgegeben`)
};

const fr_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépensé aujourd’hui`)
};

const it_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speso oggi`)
};

const nl_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vandaag uitgegeven`)
};

const pl_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wydano dziś`)
};

const pt_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gasto hoje`)
};

const ru_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Потрачено сегодня`)
};

const sv_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spenderat i dag`)
};

const tr_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugün harcanan`)
};

const zh_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日花费`)
};

const ja_admin_kelvin_today = /** @type {(inputs: Admin_Kelvin_TodayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今日の支出`)
};

/**
* | output |
* | --- |
* | "Spent today" |
*
* @param {Admin_Kelvin_TodayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_today = /** @type {((inputs?: Admin_Kelvin_TodayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_TodayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_today(inputs)
	if (locale === "de") return de_admin_kelvin_today(inputs)
	if (locale === "fr") return fr_admin_kelvin_today(inputs)
	if (locale === "it") return it_admin_kelvin_today(inputs)
	if (locale === "nl") return nl_admin_kelvin_today(inputs)
	if (locale === "pl") return pl_admin_kelvin_today(inputs)
	if (locale === "pt") return pt_admin_kelvin_today(inputs)
	if (locale === "ru") return ru_admin_kelvin_today(inputs)
	if (locale === "sv") return sv_admin_kelvin_today(inputs)
	if (locale === "tr") return tr_admin_kelvin_today(inputs)
	if (locale === "zh") return zh_admin_kelvin_today(inputs)
	if (locale === "ja") return ja_admin_kelvin_today(inputs)
	return en_admin_kelvin_today(inputs)
});
