/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_SlugInputs */

const en_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const es_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const de_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const fr_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const it_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const nl_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const pl_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const pt_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const ru_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Слаг`)
};

const sv_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const tr_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const zh_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slug`)
};

const ja_admin_tax_field_slug = /** @type {(inputs: Admin_Tax_Field_SlugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スラッグ`)
};

/**
* | output |
* | --- |
* | "Slug" |
*
* @param {Admin_Tax_Field_SlugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_slug = /** @type {((inputs?: Admin_Tax_Field_SlugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_SlugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_slug(inputs)
	if (locale === "de") return de_admin_tax_field_slug(inputs)
	if (locale === "fr") return fr_admin_tax_field_slug(inputs)
	if (locale === "it") return it_admin_tax_field_slug(inputs)
	if (locale === "nl") return nl_admin_tax_field_slug(inputs)
	if (locale === "pl") return pl_admin_tax_field_slug(inputs)
	if (locale === "pt") return pt_admin_tax_field_slug(inputs)
	if (locale === "ru") return ru_admin_tax_field_slug(inputs)
	if (locale === "sv") return sv_admin_tax_field_slug(inputs)
	if (locale === "tr") return tr_admin_tax_field_slug(inputs)
	if (locale === "zh") return zh_admin_tax_field_slug(inputs)
	if (locale === "ja") return ja_admin_tax_field_slug(inputs)
	return en_admin_tax_field_slug(inputs)
});
