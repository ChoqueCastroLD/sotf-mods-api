/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Search_Page_InstallInputs */

const en_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How to install mods`)
};

const es_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómo instalar mods`)
};

const de_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods installieren`)
};

const fr_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installer des mods`)
};

const it_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come installare le mod`)
};

const nl_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods installeren`)
};

const pl_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak instalować mody`)
};

const pt_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como instalar mods`)
};

const ru_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как установить моды`)
};

const sv_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Så installerar du moddar`)
};

const tr_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod nasıl kurulur`)
};

const zh_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`如何安装模组`)
};

const ja_search_page_install = /** @type {(inputs: Search_Page_InstallInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODのインストール方法`)
};

/**
* | output |
* | --- |
* | "How to install mods" |
*
* @param {Search_Page_InstallInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const search_page_install = /** @type {((inputs?: Search_Page_InstallInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Search_Page_InstallInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_search_page_install(inputs)
	if (locale === "de") return de_search_page_install(inputs)
	if (locale === "fr") return fr_search_page_install(inputs)
	if (locale === "it") return it_search_page_install(inputs)
	if (locale === "nl") return nl_search_page_install(inputs)
	if (locale === "pl") return pl_search_page_install(inputs)
	if (locale === "pt") return pt_search_page_install(inputs)
	if (locale === "ru") return ru_search_page_install(inputs)
	if (locale === "sv") return sv_search_page_install(inputs)
	if (locale === "tr") return tr_search_page_install(inputs)
	if (locale === "zh") return zh_search_page_install(inputs)
	if (locale === "ja") return ja_search_page_install(inputs)
	return en_search_page_install(inputs)
});
