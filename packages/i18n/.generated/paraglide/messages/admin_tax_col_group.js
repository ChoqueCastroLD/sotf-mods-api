/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Col_GroupInputs */

const en_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group`)
};

const es_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupo`)
};

const de_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gruppe`)
};

const fr_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groupe`)
};

const it_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gruppo`)
};

const nl_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Groep`)
};

const pl_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupa`)
};

const pt_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupo`)
};

const ru_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Группа`)
};

const sv_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grupp`)
};

const tr_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grup`)
};

const zh_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分组`)
};

const ja_admin_tax_col_group = /** @type {(inputs: Admin_Tax_Col_GroupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グループ`)
};

/**
* | output |
* | --- |
* | "Group" |
*
* @param {Admin_Tax_Col_GroupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_col_group = /** @type {((inputs?: Admin_Tax_Col_GroupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Col_GroupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_col_group(inputs)
	if (locale === "de") return de_admin_tax_col_group(inputs)
	if (locale === "fr") return fr_admin_tax_col_group(inputs)
	if (locale === "it") return it_admin_tax_col_group(inputs)
	if (locale === "nl") return nl_admin_tax_col_group(inputs)
	if (locale === "pl") return pl_admin_tax_col_group(inputs)
	if (locale === "pt") return pt_admin_tax_col_group(inputs)
	if (locale === "ru") return ru_admin_tax_col_group(inputs)
	if (locale === "sv") return sv_admin_tax_col_group(inputs)
	if (locale === "tr") return tr_admin_tax_col_group(inputs)
	if (locale === "zh") return zh_admin_tax_col_group(inputs)
	if (locale === "ja") return ja_admin_tax_col_group(inputs)
	return en_admin_tax_col_group(inputs)
});
