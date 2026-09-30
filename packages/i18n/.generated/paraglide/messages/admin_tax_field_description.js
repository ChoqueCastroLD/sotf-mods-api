/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_DescriptionInputs */

const en_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const es_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descripción`)
};

const de_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibung`)
};

const fr_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Description`)
};

const it_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrizione`)
};

const nl_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijving`)
};

const pl_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opis`)
};

const pt_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrição`)
};

const ru_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Описание`)
};

const sv_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskrivning`)
};

const tr_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açıklama`)
};

const zh_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述`)
};

const ja_admin_tax_field_description = /** @type {(inputs: Admin_Tax_Field_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`説明`)
};

/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Tax_Field_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_description = /** @type {((inputs?: Admin_Tax_Field_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_description(inputs)
	if (locale === "de") return de_admin_tax_field_description(inputs)
	if (locale === "fr") return fr_admin_tax_field_description(inputs)
	if (locale === "it") return it_admin_tax_field_description(inputs)
	if (locale === "nl") return nl_admin_tax_field_description(inputs)
	if (locale === "pl") return pl_admin_tax_field_description(inputs)
	if (locale === "pt") return pt_admin_tax_field_description(inputs)
	if (locale === "ru") return ru_admin_tax_field_description(inputs)
	if (locale === "sv") return sv_admin_tax_field_description(inputs)
	if (locale === "tr") return tr_admin_tax_field_description(inputs)
	if (locale === "zh") return zh_admin_tax_field_description(inputs)
	if (locale === "ja") return ja_admin_tax_field_description(inputs)
	return en_admin_tax_field_description(inputs)
});
