/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Sort_NewestInputs */

const en_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest release first`)
};

const es_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Publicación más reciente primero`)
};

const de_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste Veröffentlichung zuerst`)
};

const fr_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortie la plus récente d’abord`)
};

const it_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uscita più recente prima`)
};

const nl_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste uitgave eerst`)
};

const pl_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze wydanie najpierw`)
};

const pt_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lançamento mais recente primeiro`)
};

const ru_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала новые релизы`)
};

const sv_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste släpp först`)
};

const tr_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en yeni çıkış`)
};

const zh_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新发布在前`)
};

const ja_admin_builds_sort_newest = /** @type {(inputs: Admin_Builds_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リリースが新しい順`)
};

/**
* | output |
* | --- |
* | "Newest release first" |
*
* @param {Admin_Builds_Sort_NewestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_sort_newest = /** @type {((inputs?: Admin_Builds_Sort_NewestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sort_NewestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_sort_newest(inputs)
	if (locale === "de") return de_admin_builds_sort_newest(inputs)
	if (locale === "fr") return fr_admin_builds_sort_newest(inputs)
	if (locale === "it") return it_admin_builds_sort_newest(inputs)
	if (locale === "nl") return nl_admin_builds_sort_newest(inputs)
	if (locale === "pl") return pl_admin_builds_sort_newest(inputs)
	if (locale === "pt") return pt_admin_builds_sort_newest(inputs)
	if (locale === "ru") return ru_admin_builds_sort_newest(inputs)
	if (locale === "sv") return sv_admin_builds_sort_newest(inputs)
	if (locale === "tr") return tr_admin_builds_sort_newest(inputs)
	if (locale === "zh") return zh_admin_builds_sort_newest(inputs)
	if (locale === "ja") return ja_admin_builds_sort_newest(inputs)
	return en_admin_builds_sort_newest(inputs)
});
