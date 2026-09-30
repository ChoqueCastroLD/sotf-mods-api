/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Kitsocial_Form_HintInputs */

const en_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up to ${i?.max} characters.`)
};

const es_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Hasta ${i?.max} caracteres.`)
};

const de_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bis zu ${i?.max} Zeichen.`)
};

const fr_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.max} caractères maximum.`)
};

const it_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fino a ${i?.max} caratteri.`)
};

const nl_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Maximaal ${i?.max} tekens.`)
};

const pl_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Do ${i?.max} znaków.`)
};

const pt_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Até ${i?.max} caracteres.`)
};

const ru_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`До ${i?.max} символов.`)
};

const sv_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Upp till ${i?.max} tecken.`)
};

const tr_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En fazla ${i?.max} karakter.`)
};

const zh_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最多 ${i?.max} 个字符。`)
};

const ja_kitsocial_form_hint = /** @type {(inputs: Kitsocial_Form_HintInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最大 ${i?.max} 文字。`)
};

/**
* | output |
* | --- |
* | "Up to {max} characters." |
*
* @param {Kitsocial_Form_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_form_hint = /** @type {((inputs: Kitsocial_Form_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Form_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_form_hint(inputs)
	if (locale === "de") return de_kitsocial_form_hint(inputs)
	if (locale === "fr") return fr_kitsocial_form_hint(inputs)
	if (locale === "it") return it_kitsocial_form_hint(inputs)
	if (locale === "nl") return nl_kitsocial_form_hint(inputs)
	if (locale === "pl") return pl_kitsocial_form_hint(inputs)
	if (locale === "pt") return pt_kitsocial_form_hint(inputs)
	if (locale === "ru") return ru_kitsocial_form_hint(inputs)
	if (locale === "sv") return sv_kitsocial_form_hint(inputs)
	if (locale === "tr") return tr_kitsocial_form_hint(inputs)
	if (locale === "zh") return zh_kitsocial_form_hint(inputs)
	if (locale === "ja") return ja_kitsocial_form_hint(inputs)
	return en_kitsocial_form_hint(inputs)
});
