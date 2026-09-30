/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_KindInputs */

const en_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`For`)
};

const es_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para`)
};

const de_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Für`)
};

const fr_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pour`)
};

const it_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per`)
};

const nl_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor`)
};

const pl_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dla`)
};

const pt_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Para`)
};

const ru_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для`)
};

const sv_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`För`)
};

const tr_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür`)
};

const zh_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`适用于`)
};

const ja_admin_tax_field_kind = /** @type {(inputs: Admin_Tax_Field_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対象`)
};

/**
* | output |
* | --- |
* | "For" |
*
* @param {Admin_Tax_Field_KindInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_kind = /** @type {((inputs?: Admin_Tax_Field_KindInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_KindInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_kind(inputs)
	if (locale === "de") return de_admin_tax_field_kind(inputs)
	if (locale === "fr") return fr_admin_tax_field_kind(inputs)
	if (locale === "it") return it_admin_tax_field_kind(inputs)
	if (locale === "nl") return nl_admin_tax_field_kind(inputs)
	if (locale === "pl") return pl_admin_tax_field_kind(inputs)
	if (locale === "pt") return pt_admin_tax_field_kind(inputs)
	if (locale === "ru") return ru_admin_tax_field_kind(inputs)
	if (locale === "sv") return sv_admin_tax_field_kind(inputs)
	if (locale === "tr") return tr_admin_tax_field_kind(inputs)
	if (locale === "zh") return zh_admin_tax_field_kind(inputs)
	if (locale === "ja") return ja_admin_tax_field_kind(inputs)
	return en_admin_tax_field_kind(inputs)
});
