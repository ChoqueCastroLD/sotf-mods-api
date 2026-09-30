/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ ref: NonNullable<unknown> }} Cmdk_Error_RefInputs */

const en_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const es_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const de_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const fr_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. ${i?.ref}`)
};

const it_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif. ${i?.ref}`)
};

const nl_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const pl_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const pt_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const ru_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код: ${i?.ref}`)
};

const sv_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const tr_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref. ${i?.ref}`)
};

const zh_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参考编号：${i?.ref}`)
};

const ja_cmdk_error_ref = /** @type {(inputs: Cmdk_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照番号：${i?.ref}`)
};

/**
* | output |
* | --- |
* | "Ref. {ref}" |
*
* @param {Cmdk_Error_RefInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_error_ref = /** @type {((inputs: Cmdk_Error_RefInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Error_RefInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_error_ref(inputs)
	if (locale === "de") return de_cmdk_error_ref(inputs)
	if (locale === "fr") return fr_cmdk_error_ref(inputs)
	if (locale === "it") return it_cmdk_error_ref(inputs)
	if (locale === "nl") return nl_cmdk_error_ref(inputs)
	if (locale === "pl") return pl_cmdk_error_ref(inputs)
	if (locale === "pt") return pt_cmdk_error_ref(inputs)
	if (locale === "ru") return ru_cmdk_error_ref(inputs)
	if (locale === "sv") return sv_cmdk_error_ref(inputs)
	if (locale === "tr") return tr_cmdk_error_ref(inputs)
	if (locale === "zh") return zh_cmdk_error_ref(inputs)
	if (locale === "ja") return ja_cmdk_error_ref(inputs)
	return en_cmdk_error_ref(inputs)
});
