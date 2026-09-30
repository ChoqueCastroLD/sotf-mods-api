/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_No_CategoryInputs */

const en_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No category`)
};

const es_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin categoría`)
};

const de_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Kategorie`)
};

const fr_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sans catégorie`)
};

const it_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna categoria`)
};

const nl_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen categorie`)
};

const pl_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bez kategorii`)
};

const pt_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem categoria`)
};

const ru_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без категории`)
};

const sv_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen kategori`)
};

const tr_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori yok`)
};

const zh_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无分类`)
};

const ja_admin_recat_no_category = /** @type {(inputs: Admin_Recat_No_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリーなし`)
};

/**
* | output |
* | --- |
* | "No category" |
*
* @param {Admin_Recat_No_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_no_category = /** @type {((inputs?: Admin_Recat_No_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_No_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_no_category(inputs)
	if (locale === "de") return de_admin_recat_no_category(inputs)
	if (locale === "fr") return fr_admin_recat_no_category(inputs)
	if (locale === "it") return it_admin_recat_no_category(inputs)
	if (locale === "nl") return nl_admin_recat_no_category(inputs)
	if (locale === "pl") return pl_admin_recat_no_category(inputs)
	if (locale === "pt") return pt_admin_recat_no_category(inputs)
	if (locale === "ru") return ru_admin_recat_no_category(inputs)
	if (locale === "sv") return sv_admin_recat_no_category(inputs)
	if (locale === "tr") return tr_admin_recat_no_category(inputs)
	if (locale === "zh") return zh_admin_recat_no_category(inputs)
	if (locale === "ja") return ja_admin_recat_no_category(inputs)
	return en_admin_recat_no_category(inputs)
});
