/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ ref: NonNullable<unknown> }} Content_Error_RefInputs */

const en_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.ref}`)
};

const es_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const de_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const fr_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. : ${i?.ref}`)
};

const it_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif.: ${i?.ref}`)
};

const nl_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const pl_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const pt_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const ru_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код: ${i?.ref}`)
};

const sv_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const tr_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const zh_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参考编号：${i?.ref}`)
};

const ja_content_error_ref = /** @type {(inputs: Content_Error_RefInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照番号：${i?.ref}`)
};

/**
* | output |
* | --- |
* | "Ref: {ref}" |
*
* @param {Content_Error_RefInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_error_ref = /** @type {((inputs: Content_Error_RefInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Error_RefInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_error_ref(inputs)
	if (locale === "de") return de_content_error_ref(inputs)
	if (locale === "fr") return fr_content_error_ref(inputs)
	if (locale === "it") return it_content_error_ref(inputs)
	if (locale === "nl") return nl_content_error_ref(inputs)
	if (locale === "pl") return pl_content_error_ref(inputs)
	if (locale === "pt") return pt_content_error_ref(inputs)
	if (locale === "ru") return ru_content_error_ref(inputs)
	if (locale === "sv") return sv_content_error_ref(inputs)
	if (locale === "tr") return tr_content_error_ref(inputs)
	if (locale === "zh") return zh_content_error_ref(inputs)
	if (locale === "ja") return ja_content_error_ref(inputs)
	return en_content_error_ref(inputs)
});
