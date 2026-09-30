/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Recategorize_ModsInputs */

const en_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorize its mods`)
};

const es_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorizar sus mods`)
};

const de_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ihre Mods umkategorisieren`)
};

const fr_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recatégoriser ses mods`)
};

const it_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricategorizza le sue mod`)
};

const nl_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods ervan herindelen`)
};

const pl_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przenieś jej mody`)
};

const pt_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recategorizar os mods dela`)
};

const ru_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перенести её моды`)
};

const sv_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta dess moddar`)
};

const tr_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarını yeniden kategorilendir`)
};

const zh_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重新分类其模组`)
};

const ja_admin_tax_recategorize_mods = /** @type {(inputs: Admin_Tax_Recategorize_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所属 MOD を再分類`)
};

/**
* | output |
* | --- |
* | "Recategorize its mods" |
*
* @param {Admin_Tax_Recategorize_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_recategorize_mods = /** @type {((inputs?: Admin_Tax_Recategorize_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Recategorize_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_recategorize_mods(inputs)
	if (locale === "de") return de_admin_tax_recategorize_mods(inputs)
	if (locale === "fr") return fr_admin_tax_recategorize_mods(inputs)
	if (locale === "it") return it_admin_tax_recategorize_mods(inputs)
	if (locale === "nl") return nl_admin_tax_recategorize_mods(inputs)
	if (locale === "pl") return pl_admin_tax_recategorize_mods(inputs)
	if (locale === "pt") return pt_admin_tax_recategorize_mods(inputs)
	if (locale === "ru") return ru_admin_tax_recategorize_mods(inputs)
	if (locale === "sv") return sv_admin_tax_recategorize_mods(inputs)
	if (locale === "tr") return tr_admin_tax_recategorize_mods(inputs)
	if (locale === "zh") return zh_admin_tax_recategorize_mods(inputs)
	if (locale === "ja") return ja_admin_tax_recategorize_mods(inputs)
	return en_admin_tax_recategorize_mods(inputs)
});
