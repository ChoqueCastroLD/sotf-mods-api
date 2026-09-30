/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ ref: NonNullable<unknown> }} Upload_ReferenceInputs */

const en_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.ref}`)
};

const es_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const de_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const fr_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. : ${i?.ref}`)
};

const it_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif.: ${i?.ref}`)
};

const nl_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const pl_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const pt_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.ref}`)
};

const ru_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код: ${i?.ref}`)
};

const sv_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.ref}`)
};

const tr_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.ref}`)
};

const zh_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编号：${i?.ref}`)
};

const ja_upload_reference = /** @type {(inputs: Upload_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照番号：${i?.ref}`)
};

/**
* | output |
* | --- |
* | "Ref: {ref}" |
*
* @param {Upload_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_reference = /** @type {((inputs: Upload_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_reference(inputs)
	if (locale === "de") return de_upload_reference(inputs)
	if (locale === "fr") return fr_upload_reference(inputs)
	if (locale === "it") return it_upload_reference(inputs)
	if (locale === "nl") return nl_upload_reference(inputs)
	if (locale === "pl") return pl_upload_reference(inputs)
	if (locale === "pt") return pt_upload_reference(inputs)
	if (locale === "ru") return ru_upload_reference(inputs)
	if (locale === "sv") return sv_upload_reference(inputs)
	if (locale === "tr") return tr_upload_reference(inputs)
	if (locale === "zh") return zh_upload_reference(inputs)
	if (locale === "ja") return ja_upload_reference(inputs)
	return en_upload_reference(inputs)
});
