/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ id: NonNullable<unknown> }} Ui_Error_ReferenceInputs */

const en_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.id}`)
};

const es_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const de_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const fr_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Réf. : ${i?.id}`)
};

const it_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rif.: ${i?.id}`)
};

const nl_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const pl_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nr ref.: ${i?.id}`)
};

const pt_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref.: ${i?.id}`)
};

const ru_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Код: ${i?.id}`)
};

const sv_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.id}`)
};

const tr_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ref: ${i?.id}`)
};

const zh_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编号：${i?.id}`)
};

const ja_ui_error_reference = /** @type {(inputs: Ui_Error_ReferenceInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`参照番号: ${i?.id}`)
};

/**
* | output |
* | --- |
* | "Ref: {id}" |
*
* @param {Ui_Error_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_error_reference = /** @type {((inputs: Ui_Error_ReferenceInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Error_ReferenceInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_error_reference(inputs)
	if (locale === "de") return de_ui_error_reference(inputs)
	if (locale === "fr") return fr_ui_error_reference(inputs)
	if (locale === "it") return it_ui_error_reference(inputs)
	if (locale === "nl") return nl_ui_error_reference(inputs)
	if (locale === "pl") return pl_ui_error_reference(inputs)
	if (locale === "pt") return pt_ui_error_reference(inputs)
	if (locale === "ru") return ru_ui_error_reference(inputs)
	if (locale === "sv") return sv_ui_error_reference(inputs)
	if (locale === "tr") return tr_ui_error_reference(inputs)
	if (locale === "zh") return zh_ui_error_reference(inputs)
	if (locale === "ja") return ja_ui_error_reference(inputs)
	return en_ui_error_reference(inputs)
});
