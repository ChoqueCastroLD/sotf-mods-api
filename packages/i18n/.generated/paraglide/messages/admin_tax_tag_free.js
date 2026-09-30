/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tag_FreeInputs */

const en_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Free-form`)
};

const es_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libre`)
};

const de_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frei`)
};

const fr_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libre`)
};

const it_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Libero`)
};

const nl_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vrij`)
};

const pl_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny`)
};

const pt_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Livre`)
};

const ru_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свободный`)
};

const sv_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fri`)
};

const tr_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serbest`)
};

const zh_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自由`)
};

const ja_admin_tax_tag_free = /** @type {(inputs: Admin_Tax_Tag_FreeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自由`)
};

/**
* | output |
* | --- |
* | "Free-form" |
*
* @param {Admin_Tax_Tag_FreeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tag_free = /** @type {((inputs?: Admin_Tax_Tag_FreeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tag_FreeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tag_free(inputs)
	if (locale === "de") return de_admin_tax_tag_free(inputs)
	if (locale === "fr") return fr_admin_tax_tag_free(inputs)
	if (locale === "it") return it_admin_tax_tag_free(inputs)
	if (locale === "nl") return nl_admin_tax_tag_free(inputs)
	if (locale === "pl") return pl_admin_tax_tag_free(inputs)
	if (locale === "pt") return pt_admin_tax_tag_free(inputs)
	if (locale === "ru") return ru_admin_tax_tag_free(inputs)
	if (locale === "sv") return sv_admin_tax_tag_free(inputs)
	if (locale === "tr") return tr_admin_tax_tag_free(inputs)
	if (locale === "zh") return zh_admin_tax_tag_free(inputs)
	if (locale === "ja") return ja_admin_tax_tag_free(inputs)
	return en_admin_tax_tag_free(inputs)
});
