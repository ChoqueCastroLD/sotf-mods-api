/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Col_DayInputs */

const en_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Day`)
};

const es_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Día`)
};

const de_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const fr_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jour`)
};

const it_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giorno`)
};

const nl_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const pl_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzień`)
};

const pt_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dia`)
};

const ru_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`День`)
};

const sv_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dag`)
};

const tr_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gün`)
};

const zh_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日期`)
};

const ja_admin_kelvin_col_day = /** @type {(inputs: Admin_Kelvin_Col_DayInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日付`)
};

/**
* | output |
* | --- |
* | "Day" |
*
* @param {Admin_Kelvin_Col_DayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_col_day = /** @type {((inputs?: Admin_Kelvin_Col_DayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Col_DayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_col_day(inputs)
	if (locale === "de") return de_admin_kelvin_col_day(inputs)
	if (locale === "fr") return fr_admin_kelvin_col_day(inputs)
	if (locale === "it") return it_admin_kelvin_col_day(inputs)
	if (locale === "nl") return nl_admin_kelvin_col_day(inputs)
	if (locale === "pl") return pl_admin_kelvin_col_day(inputs)
	if (locale === "pt") return pt_admin_kelvin_col_day(inputs)
	if (locale === "ru") return ru_admin_kelvin_col_day(inputs)
	if (locale === "sv") return sv_admin_kelvin_col_day(inputs)
	if (locale === "tr") return tr_admin_kelvin_col_day(inputs)
	if (locale === "zh") return zh_admin_kelvin_col_day(inputs)
	if (locale === "ja") return ja_admin_kelvin_col_day(inputs)
	return en_admin_kelvin_col_day(inputs)
});
