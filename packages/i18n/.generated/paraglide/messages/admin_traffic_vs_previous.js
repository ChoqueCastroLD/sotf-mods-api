/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Admin_Traffic_Vs_PreviousInputs */

const en_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs ${i?.value} before`)
};

const es_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs ${i?.value} antes`)
};

const de_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs. ${i?.value} davor`)
};

const fr_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs ${i?.value} avant`)
};

const it_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs ${i?.value} prima`)
};

const nl_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs ${i?.value} ervoor`)
};

const pl_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs ${i?.value} wcześniej`)
};

const pt_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`vs ${i?.value} antes`)
};

const ru_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`против ${i?.value} ранее`)
};

const sv_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`mot ${i?.value} innan`)
};

const tr_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`önceki ${i?.value}`)
};

const zh_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`之前为 ${i?.value}`)
};

const ja_admin_traffic_vs_previous = /** @type {(inputs: Admin_Traffic_Vs_PreviousInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`前期間 ${i?.value}`)
};

/**
* | output |
* | --- |
* | "vs {value} before" |
*
* @param {Admin_Traffic_Vs_PreviousInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_vs_previous = /** @type {((inputs: Admin_Traffic_Vs_PreviousInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Vs_PreviousInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_vs_previous(inputs)
	if (locale === "de") return de_admin_traffic_vs_previous(inputs)
	if (locale === "fr") return fr_admin_traffic_vs_previous(inputs)
	if (locale === "it") return it_admin_traffic_vs_previous(inputs)
	if (locale === "nl") return nl_admin_traffic_vs_previous(inputs)
	if (locale === "pl") return pl_admin_traffic_vs_previous(inputs)
	if (locale === "pt") return pt_admin_traffic_vs_previous(inputs)
	if (locale === "ru") return ru_admin_traffic_vs_previous(inputs)
	if (locale === "sv") return sv_admin_traffic_vs_previous(inputs)
	if (locale === "tr") return tr_admin_traffic_vs_previous(inputs)
	if (locale === "zh") return zh_admin_traffic_vs_previous(inputs)
	if (locale === "ja") return ja_admin_traffic_vs_previous(inputs)
	return en_admin_traffic_vs_previous(inputs)
});
