/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Add_TagInputs */

const en_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New tag`)
};

const es_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva etiqueta`)
};

const de_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Tag`)
};

const fr_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau tag`)
};

const it_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo tag`)
};

const nl_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe tag`)
};

const pl_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy tag`)
};

const pt_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova tag`)
};

const ru_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый тег`)
};

const sv_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny tagg`)
};

const tr_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni etiket`)
};

const zh_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建标签`)
};

const ja_admin_tax_add_tag = /** @type {(inputs: Admin_Tax_Add_TagInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいタグ`)
};

/**
* | output |
* | --- |
* | "New tag" |
*
* @param {Admin_Tax_Add_TagInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_add_tag = /** @type {((inputs?: Admin_Tax_Add_TagInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Add_TagInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_add_tag(inputs)
	if (locale === "de") return de_admin_tax_add_tag(inputs)
	if (locale === "fr") return fr_admin_tax_add_tag(inputs)
	if (locale === "it") return it_admin_tax_add_tag(inputs)
	if (locale === "nl") return nl_admin_tax_add_tag(inputs)
	if (locale === "pl") return pl_admin_tax_add_tag(inputs)
	if (locale === "pt") return pt_admin_tax_add_tag(inputs)
	if (locale === "ru") return ru_admin_tax_add_tag(inputs)
	if (locale === "sv") return sv_admin_tax_add_tag(inputs)
	if (locale === "tr") return tr_admin_tax_add_tag(inputs)
	if (locale === "zh") return zh_admin_tax_add_tag(inputs)
	if (locale === "ja") return ja_admin_tax_add_tag(inputs)
	return en_admin_tax_add_tag(inputs)
});
