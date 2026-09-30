/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Range_LabelInputs */

const en_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Time range`)
};

const es_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodo`)
};

const de_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeitraum`)
};

const fr_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Période`)
};

const it_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periodo`)
};

const nl_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Periode`)
};

const pl_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakres czasu`)
};

const pt_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Período`)
};

const ru_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Период`)
};

const sv_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tidsperiod`)
};

const tr_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaman aralığı`)
};

const zh_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`时间范围`)
};

const ja_admin_range_label = /** @type {(inputs: Admin_Range_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期間`)
};

/**
* | output |
* | --- |
* | "Time range" |
*
* @param {Admin_Range_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_range_label = /** @type {((inputs?: Admin_Range_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Range_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_range_label(inputs)
	if (locale === "de") return de_admin_range_label(inputs)
	if (locale === "fr") return fr_admin_range_label(inputs)
	if (locale === "it") return it_admin_range_label(inputs)
	if (locale === "nl") return nl_admin_range_label(inputs)
	if (locale === "pl") return pl_admin_range_label(inputs)
	if (locale === "pt") return pt_admin_range_label(inputs)
	if (locale === "ru") return ru_admin_range_label(inputs)
	if (locale === "sv") return sv_admin_range_label(inputs)
	if (locale === "tr") return tr_admin_range_label(inputs)
	if (locale === "zh") return zh_admin_range_label(inputs)
	if (locale === "ja") return ja_admin_range_label(inputs)
	return en_admin_range_label(inputs)
});
