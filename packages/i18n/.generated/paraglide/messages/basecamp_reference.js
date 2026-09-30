/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reference: NonNullable<unknown> }} Basecamp_ReferenceInputs */

const en_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.reference}`)
};

const es_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const de_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const fr_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. : ${i?.reference}`)
};

const it_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif.: ${i?.reference}`)
};

const nl_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const pl_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nr: ${i?.reference}`)
};

const pt_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const ru_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код: ${i?.reference}`)
};

const sv_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.reference}`)
};

const tr_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.reference}`)
};

const zh_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编号：${i?.reference}`)
};

const ja_basecamp_reference = /** @type {(inputs: Basecamp_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照：${i?.reference}`)
};

/**
* | output |
* | --- |
* | "Ref: {reference}" |
*
* @param {Basecamp_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_reference = /** @type {((inputs: Basecamp_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_reference(inputs)
	if (locale === "de") return de_basecamp_reference(inputs)
	if (locale === "fr") return fr_basecamp_reference(inputs)
	if (locale === "it") return it_basecamp_reference(inputs)
	if (locale === "nl") return nl_basecamp_reference(inputs)
	if (locale === "pl") return pl_basecamp_reference(inputs)
	if (locale === "pt") return pt_basecamp_reference(inputs)
	if (locale === "ru") return ru_basecamp_reference(inputs)
	if (locale === "sv") return sv_basecamp_reference(inputs)
	if (locale === "tr") return tr_basecamp_reference(inputs)
	if (locale === "zh") return zh_basecamp_reference(inputs)
	if (locale === "ja") return ja_basecamp_reference(inputs)
	return en_basecamp_reference(inputs)
});
