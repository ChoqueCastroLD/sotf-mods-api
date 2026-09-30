/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Kind_ModInputs */

const en_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const es_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const de_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const fr_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const it_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod`)
};

const nl_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const pl_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody`)
};

const pt_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods`)
};

const ru_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды`)
};

const sv_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar`)
};

const tr_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar`)
};

const zh_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组`)
};

const ja_admin_tax_kind_mod = /** @type {(inputs: Admin_Tax_Kind_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD`)
};

/**
* | output |
* | --- |
* | "Mods" |
*
* @param {Admin_Tax_Kind_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_kind_mod = /** @type {((inputs?: Admin_Tax_Kind_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Kind_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_kind_mod(inputs)
	if (locale === "de") return de_admin_tax_kind_mod(inputs)
	if (locale === "fr") return fr_admin_tax_kind_mod(inputs)
	if (locale === "it") return it_admin_tax_kind_mod(inputs)
	if (locale === "nl") return nl_admin_tax_kind_mod(inputs)
	if (locale === "pl") return pl_admin_tax_kind_mod(inputs)
	if (locale === "pt") return pt_admin_tax_kind_mod(inputs)
	if (locale === "ru") return ru_admin_tax_kind_mod(inputs)
	if (locale === "sv") return sv_admin_tax_kind_mod(inputs)
	if (locale === "tr") return tr_admin_tax_kind_mod(inputs)
	if (locale === "zh") return zh_admin_tax_kind_mod(inputs)
	if (locale === "ja") return ja_admin_tax_kind_mod(inputs)
	return en_admin_tax_kind_mod(inputs)
});
