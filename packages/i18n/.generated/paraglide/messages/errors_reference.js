/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Errors_ReferenceInputs */

const en_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.id}`)
};

const es_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const de_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const fr_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. : ${i?.id}`)
};

const it_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif.: ${i?.id}`)
};

const nl_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const pl_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const pt_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const ru_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Номер: ${i?.id}`)
};

const sv_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const tr_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const zh_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参考编号：${i?.id}`)
};

const ja_errors_reference = /** @type {(inputs: Errors_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照番号：${i?.id}`)
};

/**
* | output |
* | --- |
* | "Ref: {id}" |
*
* @param {Errors_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_reference = /** @type {((inputs: Errors_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_reference(inputs)
	if (locale === "de") return de_errors_reference(inputs)
	if (locale === "fr") return fr_errors_reference(inputs)
	if (locale === "it") return it_errors_reference(inputs)
	if (locale === "nl") return nl_errors_reference(inputs)
	if (locale === "pl") return pl_errors_reference(inputs)
	if (locale === "pt") return pt_errors_reference(inputs)
	if (locale === "ru") return ru_errors_reference(inputs)
	if (locale === "sv") return sv_errors_reference(inputs)
	if (locale === "tr") return tr_errors_reference(inputs)
	if (locale === "zh") return zh_errors_reference(inputs)
	if (locale === "ja") return ja_errors_reference(inputs)
	return en_errors_reference(inputs)
});
