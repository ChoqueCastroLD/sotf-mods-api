/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Icon_HintInputs */

const en_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A Lucide icon name, e.g. wand-sparkles.`)
};

const es_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un nombre de icono de Lucide, p. ej. wand-sparkles.`)
};

const de_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ein Lucide-Symbolname, z. B. wand-sparkles.`)
};

const fr_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un nom d’icône Lucide, par ex. wand-sparkles.`)
};

const it_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un nome di icona Lucide, ad es. wand-sparkles.`)
};

const nl_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een Lucide-pictogramnaam, bijv. wand-sparkles.`)
};

const pl_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa ikony Lucide, np. wand-sparkles.`)
};

const pt_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um nome de ícone do Lucide, ex.: wand-sparkles.`)
};

const ru_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Имя иконки Lucide, например wand-sparkles.`)
};

const sv_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ett Lucide-ikonnamn, t.ex. wand-sparkles.`)
};

const tr_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir Lucide simge adı, ör. wand-sparkles.`)
};

const zh_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lucide 图标名，例如 wand-sparkles。`)
};

const ja_admin_tax_field_icon_hint = /** @type {(inputs: Admin_Tax_Field_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lucide のアイコン名（例：wand-sparkles）。`)
};

/**
* | output |
* | --- |
* | "A Lucide icon name, e.g. wand-sparkles." |
*
* @param {Admin_Tax_Field_Icon_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_icon_hint = /** @type {((inputs?: Admin_Tax_Field_Icon_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Icon_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_icon_hint(inputs)
	if (locale === "de") return de_admin_tax_field_icon_hint(inputs)
	if (locale === "fr") return fr_admin_tax_field_icon_hint(inputs)
	if (locale === "it") return it_admin_tax_field_icon_hint(inputs)
	if (locale === "nl") return nl_admin_tax_field_icon_hint(inputs)
	if (locale === "pl") return pl_admin_tax_field_icon_hint(inputs)
	if (locale === "pt") return pt_admin_tax_field_icon_hint(inputs)
	if (locale === "ru") return ru_admin_tax_field_icon_hint(inputs)
	if (locale === "sv") return sv_admin_tax_field_icon_hint(inputs)
	if (locale === "tr") return tr_admin_tax_field_icon_hint(inputs)
	if (locale === "zh") return zh_admin_tax_field_icon_hint(inputs)
	if (locale === "ja") return ja_admin_tax_field_icon_hint(inputs)
	return en_admin_tax_field_icon_hint(inputs)
});
