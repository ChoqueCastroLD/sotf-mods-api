/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Field_RequiredInputs */

const en_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This field is required.`)
};

const es_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este campo es obligatorio.`)
};

const de_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Feld ist erforderlich.`)
};

const fr_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce champ est obligatoire.`)
};

const it_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo campo è obbligatorio.`)
};

const nl_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit veld is verplicht.`)
};

const pl_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To pole jest wymagane.`)
};

const pt_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este campo é obrigatório.`)
};

const ru_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обязательное поле.`)
};

const sv_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältet är obligatoriskt.`)
};

const tr_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu alan zorunlu.`)
};

const zh_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此项为必填。`)
};

const ja_errors_field_required = /** @type {(inputs: Errors_Field_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この項目は必須です。`)
};

/**
* | output |
* | --- |
* | "This field is required." |
*
* @param {Errors_Field_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_field_required = /** @type {((inputs?: Errors_Field_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_field_required(inputs)
	if (locale === "de") return de_errors_field_required(inputs)
	if (locale === "fr") return fr_errors_field_required(inputs)
	if (locale === "it") return it_errors_field_required(inputs)
	if (locale === "nl") return nl_errors_field_required(inputs)
	if (locale === "pl") return pl_errors_field_required(inputs)
	if (locale === "pt") return pt_errors_field_required(inputs)
	if (locale === "ru") return ru_errors_field_required(inputs)
	if (locale === "sv") return sv_errors_field_required(inputs)
	if (locale === "tr") return tr_errors_field_required(inputs)
	if (locale === "zh") return zh_errors_field_required(inputs)
	if (locale === "ja") return ja_errors_field_required(inputs)
	return en_errors_field_required(inputs)
});
