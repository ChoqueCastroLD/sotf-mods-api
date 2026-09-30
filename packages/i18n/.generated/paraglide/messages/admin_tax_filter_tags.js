/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Filter_TagsInputs */

const en_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter tags`)
};

const es_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar etiquetas`)
};

const de_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags filtern`)
};

const fr_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer les tags`)
};

const it_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra i tag`)
};

const nl_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags filteren`)
};

const pl_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj tagi`)
};

const pt_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar tags`)
};

const ru_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр тегов`)
};

const sv_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera taggar`)
};

const tr_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketleri filtrele`)
};

const zh_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选标签`)
};

const ja_admin_tax_filter_tags = /** @type {(inputs: Admin_Tax_Filter_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグを絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter tags" |
*
* @param {Admin_Tax_Filter_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_filter_tags = /** @type {((inputs?: Admin_Tax_Filter_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Filter_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_filter_tags(inputs)
	if (locale === "de") return de_admin_tax_filter_tags(inputs)
	if (locale === "fr") return fr_admin_tax_filter_tags(inputs)
	if (locale === "it") return it_admin_tax_filter_tags(inputs)
	if (locale === "nl") return nl_admin_tax_filter_tags(inputs)
	if (locale === "pl") return pl_admin_tax_filter_tags(inputs)
	if (locale === "pt") return pt_admin_tax_filter_tags(inputs)
	if (locale === "ru") return ru_admin_tax_filter_tags(inputs)
	if (locale === "sv") return sv_admin_tax_filter_tags(inputs)
	if (locale === "tr") return tr_admin_tax_filter_tags(inputs)
	if (locale === "zh") return zh_admin_tax_filter_tags(inputs)
	if (locale === "ja") return ja_admin_tax_filter_tags(inputs)
	return en_admin_tax_filter_tags(inputs)
});
