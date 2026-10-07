/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Kind_AllInputs */

const en_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods and builds`)
};

const es_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods y builds`)
};

const de_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods und Builds`)
};

const fr_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods et builds`)
};

const it_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod e build`)
};

const nl_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en builds`)
};

const pl_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody i buildy`)
};

const pt_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods e builds`)
};

const ru_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды и билды`)
};

const sv_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar och byggen`)
};

const tr_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar ve yapılar`)
};

const zh_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组和建筑`)
};

const ja_admin_tax_kind_all = /** @type {(inputs: Admin_Tax_Kind_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD と建築データ`)
};

/**
* | output |
* | --- |
* | "Mods and builds" |
*
* @param {Admin_Tax_Kind_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_kind_all = /** @type {((inputs?: Admin_Tax_Kind_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Kind_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_kind_all(inputs)
	if (locale === "de") return de_admin_tax_kind_all(inputs)
	if (locale === "fr") return fr_admin_tax_kind_all(inputs)
	if (locale === "it") return it_admin_tax_kind_all(inputs)
	if (locale === "nl") return nl_admin_tax_kind_all(inputs)
	if (locale === "pl") return pl_admin_tax_kind_all(inputs)
	if (locale === "pt") return pt_admin_tax_kind_all(inputs)
	if (locale === "ru") return ru_admin_tax_kind_all(inputs)
	if (locale === "sv") return sv_admin_tax_kind_all(inputs)
	if (locale === "tr") return tr_admin_tax_kind_all(inputs)
	if (locale === "zh") return zh_admin_tax_kind_all(inputs)
	if (locale === "ja") return ja_admin_tax_kind_all(inputs)
	return en_admin_tax_kind_all(inputs)
});
