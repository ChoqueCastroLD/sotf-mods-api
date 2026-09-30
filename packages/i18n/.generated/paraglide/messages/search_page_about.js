/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_AboutInputs */

const en_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`About SOTF Mods`)
};

const es_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acerca de SOTF Mods`)
};

const de_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Über SOTF Mods`)
};

const fr_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À propos de SOTF Mods`)
};

const it_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informazioni su SOTF Mods`)
};

const nl_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Over SOTF Mods`)
};

const pl_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O SOTF Mods`)
};

const pt_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobre o SOTF Mods`)
};

const ru_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`О SOTF Mods`)
};

const sv_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Om SOTF Mods`)
};

const tr_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods hakkında`)
};

const zh_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关于 SOTF Mods`)
};

const ja_search_page_about = /** @type {(inputs: Search_Page_AboutInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Modsについて`)
};

/**
* | output |
* | --- |
* | "About SOTF Mods" |
*
* @param {Search_Page_AboutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_about = /** @type {((inputs?: Search_Page_AboutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_AboutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_about(inputs)
	if (locale === "de") return de_search_page_about(inputs)
	if (locale === "fr") return fr_search_page_about(inputs)
	if (locale === "it") return it_search_page_about(inputs)
	if (locale === "nl") return nl_search_page_about(inputs)
	if (locale === "pl") return pl_search_page_about(inputs)
	if (locale === "pt") return pt_search_page_about(inputs)
	if (locale === "ru") return ru_search_page_about(inputs)
	if (locale === "sv") return sv_search_page_about(inputs)
	if (locale === "tr") return tr_search_page_about(inputs)
	if (locale === "zh") return zh_search_page_about(inputs)
	if (locale === "ja") return ja_search_page_about(inputs)
	return en_search_page_about(inputs)
});
