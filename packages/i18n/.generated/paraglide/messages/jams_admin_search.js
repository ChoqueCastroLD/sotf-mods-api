/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_SearchInputs */

const en_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search jams`)
};

const es_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar jams`)
};

const de_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams suchen`)
};

const fr_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des jams`)
};

const it_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca jam`)
};

const nl_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams zoeken`)
};

const pl_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj jamów`)
};

const pt_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar jams`)
};

const ru_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск джемов`)
};

const sv_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök jams`)
};

const tr_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam ara`)
};

const zh_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索 Jam`)
};

const ja_jams_admin_search = /** @type {(inputs: Jams_Admin_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを検索`)
};

/**
* | output |
* | --- |
* | "Search jams" |
*
* @param {Jams_Admin_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_search = /** @type {((inputs?: Jams_Admin_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_search(inputs)
	if (locale === "de") return de_jams_admin_search(inputs)
	if (locale === "fr") return fr_jams_admin_search(inputs)
	if (locale === "it") return it_jams_admin_search(inputs)
	if (locale === "nl") return nl_jams_admin_search(inputs)
	if (locale === "pl") return pl_jams_admin_search(inputs)
	if (locale === "pt") return pt_jams_admin_search(inputs)
	if (locale === "ru") return ru_jams_admin_search(inputs)
	if (locale === "sv") return sv_jams_admin_search(inputs)
	if (locale === "tr") return tr_jams_admin_search(inputs)
	if (locale === "zh") return zh_jams_admin_search(inputs)
	if (locale === "ja") return ja_jams_admin_search(inputs)
	return en_jams_admin_search(inputs)
});
