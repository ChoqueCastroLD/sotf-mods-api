/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Tab_TagsInputs */

const en_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const es_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas`)
};

const de_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const fr_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const it_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const nl_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const pl_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi`)
};

const pt_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const ru_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги`)
};

const sv_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar`)
};

const tr_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketler`)
};

const zh_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_admin_tax_tab_tags = /** @type {(inputs: Admin_Tax_Tab_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグ`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Admin_Tax_Tab_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_tab_tags = /** @type {((inputs?: Admin_Tax_Tab_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Tab_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_tab_tags(inputs)
	if (locale === "de") return de_admin_tax_tab_tags(inputs)
	if (locale === "fr") return fr_admin_tax_tab_tags(inputs)
	if (locale === "it") return it_admin_tax_tab_tags(inputs)
	if (locale === "nl") return nl_admin_tax_tab_tags(inputs)
	if (locale === "pl") return pl_admin_tax_tab_tags(inputs)
	if (locale === "pt") return pt_admin_tax_tab_tags(inputs)
	if (locale === "ru") return ru_admin_tax_tab_tags(inputs)
	if (locale === "sv") return sv_admin_tax_tab_tags(inputs)
	if (locale === "tr") return tr_admin_tax_tab_tags(inputs)
	if (locale === "zh") return zh_admin_tax_tab_tags(inputs)
	if (locale === "ja") return ja_admin_tax_tab_tags(inputs)
	return en_admin_tax_tab_tags(inputs)
});
