/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ list: NonNullable<unknown> }} Admin_Rum_Poor_SummaryInputs */

const en_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poor p75: ${i?.list}`)
};

const es_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`p75 deficiente: ${i?.list}`)
};

const de_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Schlechtes p75: ${i?.list}`)
};

const fr_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`p75 médiocre : ${i?.list}`)
};

const it_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`p75 scarso: ${i?.list}`)
};

const nl_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Slechte p75: ${i?.list}`)
};

const pl_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Słabe p75: ${i?.list}`)
};

const pt_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`p75 ruim: ${i?.list}`)
};

const ru_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Плохой p75: ${i?.list}`)
};

const sv_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dålig p75: ${i?.list}`)
};

const tr_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zayıf p75: ${i?.list}`)
};

const zh_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`p75 较差：${i?.list}`)
};

const ja_admin_rum_poor_summary = /** @type {(inputs: Admin_Rum_Poor_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`p75 が不良：${i?.list}`)
};

/**
* | output |
* | --- |
* | "Poor p75: {list}" |
*
* @param {Admin_Rum_Poor_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_poor_summary = /** @type {((inputs: Admin_Rum_Poor_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Poor_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_poor_summary(inputs)
	if (locale === "de") return de_admin_rum_poor_summary(inputs)
	if (locale === "fr") return fr_admin_rum_poor_summary(inputs)
	if (locale === "it") return it_admin_rum_poor_summary(inputs)
	if (locale === "nl") return nl_admin_rum_poor_summary(inputs)
	if (locale === "pl") return pl_admin_rum_poor_summary(inputs)
	if (locale === "pt") return pt_admin_rum_poor_summary(inputs)
	if (locale === "ru") return ru_admin_rum_poor_summary(inputs)
	if (locale === "sv") return sv_admin_rum_poor_summary(inputs)
	if (locale === "tr") return tr_admin_rum_poor_summary(inputs)
	if (locale === "zh") return zh_admin_rum_poor_summary(inputs)
	if (locale === "ja") return ja_admin_rum_poor_summary(inputs)
	return en_admin_rum_poor_summary(inputs)
});
