/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_RangeInputs */

const en_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Period`)
};

const es_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodo`)
};

const de_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitraum`)
};

const fr_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Période`)
};

const it_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodo`)
};

const nl_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periode`)
};

const pl_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okres`)
};

const pt_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Período`)
};

const ru_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Период`)
};

const sv_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Period`)
};

const tr_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dönem`)
};

const zh_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间段`)
};

const ja_admin_traffic_range = /** @type {(inputs: Admin_Traffic_RangeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間`)
};

/**
* | output |
* | --- |
* | "Period" |
*
* @param {Admin_Traffic_RangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_range = /** @type {((inputs?: Admin_Traffic_RangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_RangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_range(inputs)
	if (locale === "de") return de_admin_traffic_range(inputs)
	if (locale === "fr") return fr_admin_traffic_range(inputs)
	if (locale === "it") return it_admin_traffic_range(inputs)
	if (locale === "nl") return nl_admin_traffic_range(inputs)
	if (locale === "pl") return pl_admin_traffic_range(inputs)
	if (locale === "pt") return pt_admin_traffic_range(inputs)
	if (locale === "ru") return ru_admin_traffic_range(inputs)
	if (locale === "sv") return sv_admin_traffic_range(inputs)
	if (locale === "tr") return tr_admin_traffic_range(inputs)
	if (locale === "zh") return zh_admin_traffic_range(inputs)
	if (locale === "ja") return ja_admin_traffic_range(inputs)
	return en_admin_traffic_range(inputs)
});
