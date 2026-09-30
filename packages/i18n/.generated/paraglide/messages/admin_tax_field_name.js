/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_NameInputs */

const en_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name (English)`)
};

const es_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre (inglés)`)
};

const de_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name (Englisch)`)
};

const fr_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom (anglais)`)
};

const it_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome (inglese)`)
};

const nl_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam (Engels)`)
};

const pl_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa (angielska)`)
};

const pt_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome (inglês)`)
};

const ru_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название (английское)`)
};

const sv_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn (engelska)`)
};

const tr_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad (İngilizce)`)
};

const zh_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名称（英文）`)
};

const ja_admin_tax_field_name = /** @type {(inputs: Admin_Tax_Field_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`名前（英語）`)
};

/**
* | output |
* | --- |
* | "Name (English)" |
*
* @param {Admin_Tax_Field_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_name = /** @type {((inputs?: Admin_Tax_Field_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_name(inputs)
	if (locale === "de") return de_admin_tax_field_name(inputs)
	if (locale === "fr") return fr_admin_tax_field_name(inputs)
	if (locale === "it") return it_admin_tax_field_name(inputs)
	if (locale === "nl") return nl_admin_tax_field_name(inputs)
	if (locale === "pl") return pl_admin_tax_field_name(inputs)
	if (locale === "pt") return pt_admin_tax_field_name(inputs)
	if (locale === "ru") return ru_admin_tax_field_name(inputs)
	if (locale === "sv") return sv_admin_tax_field_name(inputs)
	if (locale === "tr") return tr_admin_tax_field_name(inputs)
	if (locale === "zh") return zh_admin_tax_field_name(inputs)
	if (locale === "ja") return ja_admin_tax_field_name(inputs)
	return en_admin_tax_field_name(inputs)
});
