/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Col_OldestInputs */

const en_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest waiting`)
};

const es_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera más antigua`)
};

const de_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste Wartezeit`)
};

const fr_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus ancienne attente`)
};

const it_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attesa più lunga`)
};

const nl_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Langst wachtend`)
};

const pl_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najdłużej czeka`)
};

const pt_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Espera mais longa`)
};

const ru_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Самое долгое ожидание`)
};

const sv_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Längst väntan`)
};

const tr_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En uzun bekleyen`)
};

const zh_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最长等待`)
};

const ja_admin_ops_col_oldest = /** @type {(inputs: Admin_Ops_Col_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最長待機`)
};

/**
* | output |
* | --- |
* | "Oldest waiting" |
*
* @param {Admin_Ops_Col_OldestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_col_oldest = /** @type {((inputs?: Admin_Ops_Col_OldestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Col_OldestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_col_oldest(inputs)
	if (locale === "de") return de_admin_ops_col_oldest(inputs)
	if (locale === "fr") return fr_admin_ops_col_oldest(inputs)
	if (locale === "it") return it_admin_ops_col_oldest(inputs)
	if (locale === "nl") return nl_admin_ops_col_oldest(inputs)
	if (locale === "pl") return pl_admin_ops_col_oldest(inputs)
	if (locale === "pt") return pt_admin_ops_col_oldest(inputs)
	if (locale === "ru") return ru_admin_ops_col_oldest(inputs)
	if (locale === "sv") return sv_admin_ops_col_oldest(inputs)
	if (locale === "tr") return tr_admin_ops_col_oldest(inputs)
	if (locale === "zh") return zh_admin_ops_col_oldest(inputs)
	if (locale === "ja") return ja_admin_ops_col_oldest(inputs)
	return en_admin_ops_col_oldest(inputs)
});
