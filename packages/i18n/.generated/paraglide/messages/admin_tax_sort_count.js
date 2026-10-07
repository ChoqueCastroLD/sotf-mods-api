/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Sort_CountInputs */

const en_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most used`)
};

const es_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más usadas`)
};

const de_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Am häufigsten genutzt`)
};

const fr_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus utilisées`)
};

const it_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più usati`)
};

const nl_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gebruikt`)
};

const pl_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej używane`)
};

const pt_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais usadas`)
};

const ru_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чаще используемые`)
};

const sv_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest använda`)
};

const tr_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok kullanılan`)
};

const zh_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用最多`)
};

const ja_admin_tax_sort_count = /** @type {(inputs: Admin_Tax_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用数が多い順`)
};

/**
* | output |
* | --- |
* | "Most used" |
*
* @param {Admin_Tax_Sort_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_sort_count = /** @type {((inputs?: Admin_Tax_Sort_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Sort_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_sort_count(inputs)
	if (locale === "de") return de_admin_tax_sort_count(inputs)
	if (locale === "fr") return fr_admin_tax_sort_count(inputs)
	if (locale === "it") return it_admin_tax_sort_count(inputs)
	if (locale === "nl") return nl_admin_tax_sort_count(inputs)
	if (locale === "pl") return pl_admin_tax_sort_count(inputs)
	if (locale === "pt") return pt_admin_tax_sort_count(inputs)
	if (locale === "ru") return ru_admin_tax_sort_count(inputs)
	if (locale === "sv") return sv_admin_tax_sort_count(inputs)
	if (locale === "tr") return tr_admin_tax_sort_count(inputs)
	if (locale === "zh") return zh_admin_tax_sort_count(inputs)
	if (locale === "ja") return ja_admin_tax_sort_count(inputs)
	return en_admin_tax_sort_count(inputs)
});
