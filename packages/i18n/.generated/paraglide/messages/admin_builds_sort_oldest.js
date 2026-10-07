/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sort_OldestInputs */

const en_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest release first`)
};

const es_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicación más antigua primero`)
};

const de_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste Veröffentlichung zuerst`)
};

const fr_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortie la plus ancienne d’abord`)
};

const it_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscita più vecchia prima`)
};

const nl_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste uitgave eerst`)
};

const pl_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarsze wydanie najpierw`)
};

const pt_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lançamento mais antigo primeiro`)
};

const ru_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала старые релизы`)
};

const sv_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldsta släpp först`)
};

const tr_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en eski çıkış`)
};

const zh_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最早发布在前`)
};

const ja_admin_builds_sort_oldest = /** @type {(inputs: Admin_Builds_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリースが古い順`)
};

/**
* | output |
* | --- |
* | "Oldest release first" |
*
* @param {Admin_Builds_Sort_OldestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sort_oldest = /** @type {((inputs?: Admin_Builds_Sort_OldestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sort_OldestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sort_oldest(inputs)
	if (locale === "de") return de_admin_builds_sort_oldest(inputs)
	if (locale === "fr") return fr_admin_builds_sort_oldest(inputs)
	if (locale === "it") return it_admin_builds_sort_oldest(inputs)
	if (locale === "nl") return nl_admin_builds_sort_oldest(inputs)
	if (locale === "pl") return pl_admin_builds_sort_oldest(inputs)
	if (locale === "pt") return pt_admin_builds_sort_oldest(inputs)
	if (locale === "ru") return ru_admin_builds_sort_oldest(inputs)
	if (locale === "sv") return sv_admin_builds_sort_oldest(inputs)
	if (locale === "tr") return tr_admin_builds_sort_oldest(inputs)
	if (locale === "zh") return zh_admin_builds_sort_oldest(inputs)
	if (locale === "ja") return ja_admin_builds_sort_oldest(inputs)
	return en_admin_builds_sort_oldest(inputs)
});
