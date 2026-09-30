/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Kind_BuildInputs */

const en_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const es_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const de_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const fr_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const it_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const pl_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildy`)
};

const pt_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds`)
};

const ru_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Билды`)
};

const sv_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggen`)
};

const tr_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapılar`)
};

const zh_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_admin_tax_kind_build = /** @type {(inputs: Admin_Tax_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築データ`)
};

/**
* | output |
* | --- |
* | "Builds" |
*
* @param {Admin_Tax_Kind_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_kind_build = /** @type {((inputs?: Admin_Tax_Kind_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Kind_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_kind_build(inputs)
	if (locale === "de") return de_admin_tax_kind_build(inputs)
	if (locale === "fr") return fr_admin_tax_kind_build(inputs)
	if (locale === "it") return it_admin_tax_kind_build(inputs)
	if (locale === "nl") return nl_admin_tax_kind_build(inputs)
	if (locale === "pl") return pl_admin_tax_kind_build(inputs)
	if (locale === "pt") return pt_admin_tax_kind_build(inputs)
	if (locale === "ru") return ru_admin_tax_kind_build(inputs)
	if (locale === "sv") return sv_admin_tax_kind_build(inputs)
	if (locale === "tr") return tr_admin_tax_kind_build(inputs)
	if (locale === "zh") return zh_admin_tax_kind_build(inputs)
	if (locale === "ja") return ja_admin_tax_kind_build(inputs)
	return en_admin_tax_kind_build(inputs)
});
