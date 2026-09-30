/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reference: NonNullable<unknown> }} Admin_Error_ReferenceInputs */

const en_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.reference}`)
};

const es_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const de_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const fr_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. : ${i?.reference}`)
};

const it_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif.: ${i?.reference}`)
};

const nl_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const pl_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const pt_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const ru_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код: ${i?.reference}`)
};

const sv_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const tr_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const zh_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编号：${i?.reference}`)
};

const ja_admin_error_reference = /** @type {(inputs: Admin_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照：${i?.reference}`)
};

/**
* | output |
* | --- |
* | "Ref: {reference}" |
*
* @param {Admin_Error_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_reference = /** @type {((inputs: Admin_Error_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_reference(inputs)
	if (locale === "de") return de_admin_error_reference(inputs)
	if (locale === "fr") return fr_admin_error_reference(inputs)
	if (locale === "it") return it_admin_error_reference(inputs)
	if (locale === "nl") return nl_admin_error_reference(inputs)
	if (locale === "pl") return pl_admin_error_reference(inputs)
	if (locale === "pt") return pt_admin_error_reference(inputs)
	if (locale === "ru") return ru_admin_error_reference(inputs)
	if (locale === "sv") return sv_admin_error_reference(inputs)
	if (locale === "tr") return tr_admin_error_reference(inputs)
	if (locale === "zh") return zh_admin_error_reference(inputs)
	if (locale === "ja") return ja_admin_error_reference(inputs)
	return en_admin_error_reference(inputs)
});
