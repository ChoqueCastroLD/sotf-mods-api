/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ value: NonNullable<unknown> }} Admin_Recat_Confidence_At_LeastInputs */

const en_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`At least ${i?.value}`)
};

const es_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Al menos ${i?.value}`)
};

const de_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mindestens ${i?.value}`)
};

const fr_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Au moins ${i?.value}`)
};

const it_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Almeno ${i?.value}`)
};

const nl_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Minstens ${i?.value}`)
};

const pl_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Co najmniej ${i?.value}`)
};

const pt_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pelo menos ${i?.value}`)
};

const ru_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Не меньше ${i?.value}`)
};

const sv_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Minst ${i?.value}`)
};

const tr_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En az ${i?.value}`)
};

const zh_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`至少 ${i?.value}`)
};

const ja_admin_recat_confidence_at_least = /** @type {(inputs: Admin_Recat_Confidence_At_LeastInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.value} 以上`)
};

/**
* | output |
* | --- |
* | "At least {value}" |
*
* @param {Admin_Recat_Confidence_At_LeastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_confidence_at_least = /** @type {((inputs: Admin_Recat_Confidence_At_LeastInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Confidence_At_LeastInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_confidence_at_least(inputs)
	if (locale === "de") return de_admin_recat_confidence_at_least(inputs)
	if (locale === "fr") return fr_admin_recat_confidence_at_least(inputs)
	if (locale === "it") return it_admin_recat_confidence_at_least(inputs)
	if (locale === "nl") return nl_admin_recat_confidence_at_least(inputs)
	if (locale === "pl") return pl_admin_recat_confidence_at_least(inputs)
	if (locale === "pt") return pt_admin_recat_confidence_at_least(inputs)
	if (locale === "ru") return ru_admin_recat_confidence_at_least(inputs)
	if (locale === "sv") return sv_admin_recat_confidence_at_least(inputs)
	if (locale === "tr") return tr_admin_recat_confidence_at_least(inputs)
	if (locale === "zh") return zh_admin_recat_confidence_at_least(inputs)
	if (locale === "ja") return ja_admin_recat_confidence_at_least(inputs)
	return en_admin_recat_confidence_at_least(inputs)
});
