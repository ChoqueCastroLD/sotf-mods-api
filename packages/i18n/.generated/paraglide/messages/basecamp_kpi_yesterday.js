/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Kpi_YesterdayInputs */

const en_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yesterday: ${i?.count}`)
};

const es_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ayer: ${i?.count}`)
};

const de_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gestern: ${i?.count}`)
};

const fr_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hier : ${i?.count}`)
};

const it_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ieri: ${i?.count}`)
};

const nl_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gisteren: ${i?.count}`)
};

const pl_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wczoraj: ${i?.count}`)
};

const pt_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ontem: ${i?.count}`)
};

const ru_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вчера: ${i?.count}`)
};

const sv_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Igår: ${i?.count}`)
};

const tr_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dün: ${i?.count}`)
};

const zh_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`昨天：${i?.count}`)
};

const ja_basecamp_kpi_yesterday = /** @type {(inputs: Basecamp_Kpi_YesterdayInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`昨日：${i?.count}`)
};

/**
* | output |
* | --- |
* | "Yesterday: {count}" |
*
* @param {Basecamp_Kpi_YesterdayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kpi_yesterday = /** @type {((inputs: Basecamp_Kpi_YesterdayInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_YesterdayInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kpi_yesterday(inputs)
	if (locale === "de") return de_basecamp_kpi_yesterday(inputs)
	if (locale === "fr") return fr_basecamp_kpi_yesterday(inputs)
	if (locale === "it") return it_basecamp_kpi_yesterday(inputs)
	if (locale === "nl") return nl_basecamp_kpi_yesterday(inputs)
	if (locale === "pl") return pl_basecamp_kpi_yesterday(inputs)
	if (locale === "pt") return pt_basecamp_kpi_yesterday(inputs)
	if (locale === "ru") return ru_basecamp_kpi_yesterday(inputs)
	if (locale === "sv") return sv_basecamp_kpi_yesterday(inputs)
	if (locale === "tr") return tr_basecamp_kpi_yesterday(inputs)
	if (locale === "zh") return zh_basecamp_kpi_yesterday(inputs)
	if (locale === "ja") return ja_basecamp_kpi_yesterday(inputs)
	return en_basecamp_kpi_yesterday(inputs)
});
