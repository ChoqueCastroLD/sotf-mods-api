/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Field_Name_HintInputs */

const en_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other languages are below.`)
};

const es_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los demás idiomas están abajo.`)
};

const de_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die anderen Sprachen stehen unten.`)
};

const fr_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les autres langues sont plus bas.`)
};

const it_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le altre lingue sono più sotto.`)
};

const nl_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere talen staan hieronder.`)
};

const pl_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pozostałe języki są niżej.`)
};

const pt_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os outros idiomas ficam abaixo.`)
};

const ru_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие языки ниже.`)
};

const sv_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Övriga språk finns nedan.`)
};

const tr_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer diller aşağıda.`)
};

const zh_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他语言在下方。`)
};

const ja_admin_tax_field_name_hint = /** @type {(inputs: Admin_Tax_Field_Name_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかの言語は下にあります。`)
};

/**
* | output |
* | --- |
* | "Other languages are below." |
*
* @param {Admin_Tax_Field_Name_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_field_name_hint = /** @type {((inputs?: Admin_Tax_Field_Name_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Field_Name_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_field_name_hint(inputs)
	if (locale === "de") return de_admin_tax_field_name_hint(inputs)
	if (locale === "fr") return fr_admin_tax_field_name_hint(inputs)
	if (locale === "it") return it_admin_tax_field_name_hint(inputs)
	if (locale === "nl") return nl_admin_tax_field_name_hint(inputs)
	if (locale === "pl") return pl_admin_tax_field_name_hint(inputs)
	if (locale === "pt") return pt_admin_tax_field_name_hint(inputs)
	if (locale === "ru") return ru_admin_tax_field_name_hint(inputs)
	if (locale === "sv") return sv_admin_tax_field_name_hint(inputs)
	if (locale === "tr") return tr_admin_tax_field_name_hint(inputs)
	if (locale === "zh") return zh_admin_tax_field_name_hint(inputs)
	if (locale === "ja") return ja_admin_tax_field_name_hint(inputs)
	return en_admin_tax_field_name_hint(inputs)
});
