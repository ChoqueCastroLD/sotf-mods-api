/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Col_CountInputs */

const en_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Published`)
};

const es_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicados`)
};

const de_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veröffentlicht`)
};

const fr_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publiés`)
};

const it_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pubblicate`)
};

const nl_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepubliceerd`)
};

const pl_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opublikowane`)
};

const pt_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicados`)
};

const ru_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опубликовано`)
};

const sv_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicerade`)
};

const tr_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayında`)
};

const zh_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已发布`)
};

const ja_admin_tax_col_count = /** @type {(inputs: Admin_Tax_Col_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開数`)
};

/**
* | output |
* | --- |
* | "Published" |
*
* @param {Admin_Tax_Col_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_col_count = /** @type {((inputs?: Admin_Tax_Col_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Col_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_col_count(inputs)
	if (locale === "de") return de_admin_tax_col_count(inputs)
	if (locale === "fr") return fr_admin_tax_col_count(inputs)
	if (locale === "it") return it_admin_tax_col_count(inputs)
	if (locale === "nl") return nl_admin_tax_col_count(inputs)
	if (locale === "pl") return pl_admin_tax_col_count(inputs)
	if (locale === "pt") return pt_admin_tax_col_count(inputs)
	if (locale === "ru") return ru_admin_tax_col_count(inputs)
	if (locale === "sv") return sv_admin_tax_col_count(inputs)
	if (locale === "tr") return tr_admin_tax_col_count(inputs)
	if (locale === "zh") return zh_admin_tax_col_count(inputs)
	if (locale === "ja") return ja_admin_tax_col_count(inputs)
	return en_admin_tax_col_count(inputs)
});
