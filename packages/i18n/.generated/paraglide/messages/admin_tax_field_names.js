/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_NamesInputs */

const en_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name in other languages`)
};

const es_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre en otros idiomas`)
};

const de_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name in anderen Sprachen`)
};

const fr_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom dans les autres langues`)
};

const it_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome nelle altre lingue`)
};

const nl_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam in andere talen`)
};

const pl_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa w innych językach`)
};

const pt_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome em outros idiomas`)
};

const ru_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название на других языках`)
};

const sv_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Namn på andra språk`)
};

const tr_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer dillerde ad`)
};

const zh_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他语言名称`)
};

const ja_admin_tax_field_names = /** @type {(inputs: Admin_Tax_Field_NamesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかの言語での名前`)
};

/**
* | output |
* | --- |
* | "Name in other languages" |
*
* @param {Admin_Tax_Field_NamesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_names = /** @type {((inputs?: Admin_Tax_Field_NamesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_NamesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_names(inputs)
	if (locale === "de") return de_admin_tax_field_names(inputs)
	if (locale === "fr") return fr_admin_tax_field_names(inputs)
	if (locale === "it") return it_admin_tax_field_names(inputs)
	if (locale === "nl") return nl_admin_tax_field_names(inputs)
	if (locale === "pl") return pl_admin_tax_field_names(inputs)
	if (locale === "pt") return pt_admin_tax_field_names(inputs)
	if (locale === "ru") return ru_admin_tax_field_names(inputs)
	if (locale === "sv") return sv_admin_tax_field_names(inputs)
	if (locale === "tr") return tr_admin_tax_field_names(inputs)
	if (locale === "zh") return zh_admin_tax_field_names(inputs)
	if (locale === "ja") return ja_admin_tax_field_names(inputs)
	return en_admin_tax_field_names(inputs)
});
