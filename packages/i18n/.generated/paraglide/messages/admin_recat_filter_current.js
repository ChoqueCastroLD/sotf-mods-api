/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Filter_CurrentInputs */

const en_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current category`)
};

const es_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría actual`)
};

const de_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuelle Kategorie`)
};

const fr_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie actuelle`)
};

const it_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria attuale`)
};

const nl_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige categorie`)
};

const pl_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecna kategoria`)
};

const pt_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria atual`)
};

const ru_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущая категория`)
};

const sv_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuvarande kategori`)
};

const tr_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut kategori`)
};

const zh_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前分类`)
};

const ja_admin_recat_filter_current = /** @type {(inputs: Admin_Recat_Filter_CurrentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のカテゴリー`)
};

/**
* | output |
* | --- |
* | "Current category" |
*
* @param {Admin_Recat_Filter_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_filter_current = /** @type {((inputs?: Admin_Recat_Filter_CurrentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Filter_CurrentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_filter_current(inputs)
	if (locale === "de") return de_admin_recat_filter_current(inputs)
	if (locale === "fr") return fr_admin_recat_filter_current(inputs)
	if (locale === "it") return it_admin_recat_filter_current(inputs)
	if (locale === "nl") return nl_admin_recat_filter_current(inputs)
	if (locale === "pl") return pl_admin_recat_filter_current(inputs)
	if (locale === "pt") return pt_admin_recat_filter_current(inputs)
	if (locale === "ru") return ru_admin_recat_filter_current(inputs)
	if (locale === "sv") return sv_admin_recat_filter_current(inputs)
	if (locale === "tr") return tr_admin_recat_filter_current(inputs)
	if (locale === "zh") return zh_admin_recat_filter_current(inputs)
	if (locale === "ja") return ja_admin_recat_filter_current(inputs)
	return en_admin_recat_filter_current(inputs)
});
