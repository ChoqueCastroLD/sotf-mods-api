/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_IconInputs */

const en_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Icon`)
};

const es_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Icono`)
};

const de_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Symbol`)
};

const fr_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Icône`)
};

const it_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Icona`)
};

const nl_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pictogram`)
};

const pl_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ikona`)
};

const pt_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ícone`)
};

const ru_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Иконка`)
};

const sv_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ikon`)
};

const tr_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Simge`)
};

const zh_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`图标`)
};

const ja_admin_tax_field_icon = /** @type {(inputs: Admin_Tax_Field_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アイコン`)
};

/**
* | output |
* | --- |
* | "Icon" |
*
* @param {Admin_Tax_Field_IconInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_icon = /** @type {((inputs?: Admin_Tax_Field_IconInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_IconInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_icon(inputs)
	if (locale === "de") return de_admin_tax_field_icon(inputs)
	if (locale === "fr") return fr_admin_tax_field_icon(inputs)
	if (locale === "it") return it_admin_tax_field_icon(inputs)
	if (locale === "nl") return nl_admin_tax_field_icon(inputs)
	if (locale === "pl") return pl_admin_tax_field_icon(inputs)
	if (locale === "pt") return pt_admin_tax_field_icon(inputs)
	if (locale === "ru") return ru_admin_tax_field_icon(inputs)
	if (locale === "sv") return sv_admin_tax_field_icon(inputs)
	if (locale === "tr") return tr_admin_tax_field_icon(inputs)
	if (locale === "zh") return zh_admin_tax_field_icon(inputs)
	if (locale === "ja") return ja_admin_tax_field_icon(inputs)
	return en_admin_tax_field_icon(inputs)
});
