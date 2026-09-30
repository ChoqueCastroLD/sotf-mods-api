/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_Label_HintInputs */

const en_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Up to 40 characters.`)
};

const es_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasta 40 caracteres.`)
};

const de_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bis zu 40 Zeichen.`)
};

const fr_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jusqu’à 40 caractères.`)
};

const it_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fino a 40 caratteri.`)
};

const nl_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maximaal 40 tekens.`)
};

const pl_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Do 40 znaków.`)
};

const pt_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Até 40 caracteres.`)
};

const ru_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`До 40 символов.`)
};

const sv_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Upp till 40 tecken.`)
};

const tr_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En fazla 40 karakter.`)
};

const zh_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最多 40 个字符。`)
};

const ja_admin_builds_field_label_hint = /** @type {(inputs: Admin_Builds_Field_Label_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`40 文字以内。`)
};

/**
* | output |
* | --- |
* | "Up to 40 characters." |
*
* @param {Admin_Builds_Field_Label_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_label_hint = /** @type {((inputs?: Admin_Builds_Field_Label_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_Label_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_label_hint(inputs)
	if (locale === "de") return de_admin_builds_field_label_hint(inputs)
	if (locale === "fr") return fr_admin_builds_field_label_hint(inputs)
	if (locale === "it") return it_admin_builds_field_label_hint(inputs)
	if (locale === "nl") return nl_admin_builds_field_label_hint(inputs)
	if (locale === "pl") return pl_admin_builds_field_label_hint(inputs)
	if (locale === "pt") return pt_admin_builds_field_label_hint(inputs)
	if (locale === "ru") return ru_admin_builds_field_label_hint(inputs)
	if (locale === "sv") return sv_admin_builds_field_label_hint(inputs)
	if (locale === "tr") return tr_admin_builds_field_label_hint(inputs)
	if (locale === "zh") return zh_admin_builds_field_label_hint(inputs)
	if (locale === "ja") return ja_admin_builds_field_label_hint(inputs)
	return en_admin_builds_field_label_hint(inputs)
});
