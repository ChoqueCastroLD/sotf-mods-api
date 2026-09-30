/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reference: NonNullable<unknown> }} Ranger_ReferenceInputs */

const en_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.reference}`)
};

const es_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const de_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const fr_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. : ${i?.reference}`)
};

const it_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif.: ${i?.reference}`)
};

const nl_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const pl_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const pt_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.reference}`)
};

const ru_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код: ${i?.reference}`)
};

const sv_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.reference}`)
};

const tr_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.reference}`)
};

const zh_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编号：${i?.reference}`)
};

const ja_ranger_reference = /** @type {(inputs: Ranger_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照：${i?.reference}`)
};

/**
* | output |
* | --- |
* | "Ref: {reference}" |
*
* @param {Ranger_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reference = /** @type {((inputs: Ranger_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reference(inputs)
	if (locale === "de") return de_ranger_reference(inputs)
	if (locale === "fr") return fr_ranger_reference(inputs)
	if (locale === "it") return it_ranger_reference(inputs)
	if (locale === "nl") return nl_ranger_reference(inputs)
	if (locale === "pl") return pl_ranger_reference(inputs)
	if (locale === "pt") return pt_ranger_reference(inputs)
	if (locale === "ru") return ru_ranger_reference(inputs)
	if (locale === "sv") return sv_ranger_reference(inputs)
	if (locale === "tr") return tr_ranger_reference(inputs)
	if (locale === "zh") return zh_ranger_reference(inputs)
	if (locale === "ja") return ja_ranger_reference(inputs)
	return en_ranger_reference(inputs)
});
