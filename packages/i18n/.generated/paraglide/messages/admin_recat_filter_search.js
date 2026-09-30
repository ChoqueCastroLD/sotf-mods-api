/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Filter_SearchInputs */

const en_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods`)
};

const es_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods`)
};

const de_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods suchen`)
};

const fr_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods`)
};

const it_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod`)
};

const nl_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods zoeken`)
};

const pl_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów`)
};

const pt_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods`)
};

const ru_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск модов`)
};

const sv_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar`)
};

const tr_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ara`)
};

const zh_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组`)
};

const ja_admin_recat_filter_search = /** @type {(inputs: Admin_Recat_Filter_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を検索`)
};

/**
* | output |
* | --- |
* | "Search mods" |
*
* @param {Admin_Recat_Filter_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_filter_search = /** @type {((inputs?: Admin_Recat_Filter_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Filter_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_filter_search(inputs)
	if (locale === "de") return de_admin_recat_filter_search(inputs)
	if (locale === "fr") return fr_admin_recat_filter_search(inputs)
	if (locale === "it") return it_admin_recat_filter_search(inputs)
	if (locale === "nl") return nl_admin_recat_filter_search(inputs)
	if (locale === "pl") return pl_admin_recat_filter_search(inputs)
	if (locale === "pt") return pt_admin_recat_filter_search(inputs)
	if (locale === "ru") return ru_admin_recat_filter_search(inputs)
	if (locale === "sv") return sv_admin_recat_filter_search(inputs)
	if (locale === "tr") return tr_admin_recat_filter_search(inputs)
	if (locale === "zh") return zh_admin_recat_filter_search(inputs)
	if (locale === "ja") return ja_admin_recat_filter_search(inputs)
	return en_admin_recat_filter_search(inputs)
});
